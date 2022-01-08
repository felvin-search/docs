---
title: Tutorial
---

> NOTE: If you are fairly new to Kubernetes, it should take at least 1-2 days of learning the new concepts as well as playing/experimenting with a cluster and gaining confidence.

## Goal: Deploy a new felvin.com website using Kubernetes on AWS

### 0. Prerequisite

Kubernetes.io has a nice tutorial which uses a `minikube` cluster (kubernetes cluster on your laptop) and teaches the basic concepts needed for our purposes. See https://kubernetes.io/docs/tutorials/kubernetes-basics

After the tutorial, you should be able to understand the following Kubernetes resources

- Cluster
- Control Pane
- Nodes
- Deployment
- Pods
- Service (and its 4 major types ClusterIP, NodePort, LoadBalancer, ExternalName)
- Labels and Selectors

### 1. Create a Kubernetes cluster

> NOTE: To avoid polluting VPC networks (as they have a max quote per region), we are going to use the `ap-south-1` region.

Follow the AWS’s tutorial to create a new Kubernetes cluster on EKS. EKS is a service provided by AWS which they call “managed Kubernetes cluster”. Google Cloud and other providers do the same. See what is EKS.

Steps: https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html

> NOTE: Use Managed nodes instead of Fargate. Managed nodes use actual EC2 instances. Fargate is serverless and does not provide all the controls we should ideally have e.g. sshing into the server and looking around.

> NOTE: Make sure your laptop has the right aws credentials. Install the aws cli https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html and run aws configure https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html .

This will take several minutes (~20). You can see your new cluster in the EKS dashboard. https://console.aws.amazon.com/eks/home 

At this point you should be able to see all the system pods running in the cluster. Pods like core-dns are used for internal service discovery, aws-node are used for storing AWS IAM groups who have authorization to access the cluster, etc.

### 2. Create an ECR repository (to store docker images)

We need an internal repository where we can store our Docker images. We will then use this image to create a kubernetes Deployment.

Go to https://ap-south-1.console.aws.amazon.com/ecr/repositories?region=ap-south-1 and create a new private repository.

Note the URI of the repository e.g. `<id>.dkr.ecr.ap-south-1.amazonaws.com/<repository_name>`, we’ll need it later.

### 3. Create and push the image

> Note: Make sure you have Docker running.

Clone the https://github.com/felvin-search/felvin.com repository and run `yarn install`. Now create a docker image by running

```
docker build -t <account-id>.dkr.ecr.ap-south-1.amazonaws.com/<repository_name>:latest -f docker/Dockerfile .
```

Now authenticate against the ECR repository by using `aws` command here https://docs.aws.amazon.com/AmazonECR/latest/userguide/getting-started-cli.html#cli-authenticate-registry 

Let’s push the image! Check if you can see the image in the repository using the AWS console.

```
docker push <account-id>.dkr.ecr.ap-south-1.amazonaws.com/<repository_name>:latest
```

### 4. Create required Secrets object for environment variables

Before we create the deployment, we need to ensure that the environment variables the pods need are ready.

Follow the steps at https://developers.google.com/custom-search/v1/introduction to get a google search api key and a context key (which is actually the cx parameter / search engine ID). Once you have them, run

```
kubectl create secret generic google-keys --from-literal=GOOGLE_SEARCH_API_KEY=XXXX --from-literal=GOOGLE_SEARCH_CONTEXT_KEY=XXXX
```

> Note: Make sure to toggle "search the whole web" from the Google search console app settings to enable searching the whole web instead of custom websites.

### 5. Create a deployment

Now let’s create a kubernetes deployment using the docker image we pushed.

> Note: This is the first time we are interacting with the cluster manually. The two main ways of doing anything are `kubectl <command chain>` and `kubectl apply -f <a yaml file>`. Using a YAML file is good for creating things declaratively, so that they can be shared later.

Update the image url in the `deploy/deployment-production.yaml`: ​​https://github.com/felvin-search/felvin.com/blob/master/deploy/deployment-production.yaml#L19 file with `<account-id>.dkr.ecr.ap-south-1.amazonaws.com/<repository_name>:latest`.

Now run

```
kubectl apply -f deploy/deployment-production.yaml
```

> Protip - Run [k9s](https://github.com/derailed/k9s) in a separate terminal and see the new pods getting created live.

In a few minutes, the new pods corresponding to the deployment should be up and running.

> Protip: Use `kubectl get events --sort-by='.metadata.creationTimestamp' -A` to see logs from the 
Cluster.

> Note: If there are any errors, you can also delete the deployment using `kubectl delete -f deploy/deployment-production.yaml`

Few notes on the YAML file
- Any kubernetes resource is uniquely determined by the kind and metadata.name fields.
metadata.namespace can also be provided but it’s `default` by default.
- This YAML file is describing a K8S resource of Deployment kind with name felvin-search-prod
- `labels.app` is known as a selector. Providing atleast one selector is important to target the pods associated with this deployment e.g. for getting logs from the pods or creating a service to direct the network to the pods, etc.
- `spec.replicas` is the number of pods this deployment should maintain
- `spec.spec.containers` is telling the deployment to create the pods using the specified container image

> Protip - We can get any Kubernetes resource (e.g. deployment) declaratively in a YAML file as well. (Or a JSON. Kubernetes as a REST API for interacting with the cluster). Try running `kubectl get deployment/felvin-search-prod -o yaml`

### 6. Port forward to a pod

If you see the new pods for the deployment and their status as “Running” in the k9s window, let’s see if the pods are really ready!

On k9s, use `shift+f` to port forward to one of the two pods we created. The container port is `80` and you should use `3000` on your localhost (to escape CORS errors: https://github.com/felvin-search/felvin.com/blob/master/packages/backend/index.ts#L18).

Now if you open http://localhost:3000 you should be able to see the site up and running!

> Protip: You can look at the logs from both the pods by using `kubectl logs -f deployment/felvin-search-prod`

### 7. Create a service

We will now create a Kubernetes service to start accepting traffic into our deployment pods. Kubernetes has a nice `expose` command to create a service which exposes a deployment. Run

```
kubectl expose deployment felvin-search-prod --type=LoadBalancer --name=felvin-search
```

This is going to create a service of type LoadBalancer called `felvin-search` which will be able to accept traffic and distribute it to the pods of our `felvin-search-prod` deployment.

Now run `kubectl get service/felvin-search -o wide` and you should be able to see a public URL in the `EXTERNAL-IP` column.

The AWS LoadBalancer (aka ALB) can also be seen in the [AWS console](https://ap-south-1.console.aws.amazon.com/ec2/v2/home?region=ap-south-1#LoadBalancers:sort=loadBalancerName).

> Protip: As always, you can also get the full YAML file for this service for future reference `kubectl get service/felvin-search -o yaml`

### 8. Set a CNAME record pointing to the host

Once logged into Cloudflare, go to the DNS section of felvin.com. Add a new CNAME record with a name which is a subdomain of felvin.com, like beta(.felvin.com), pointing to the `EXTERNAL-IP` of the load balancer created in the previous step as the target.

### 9. Delete everything

Let’s clean up everything!

* Delete your cluster - `eksctl delete cluster --name <cluster name> --region ap-south-1`
* Delete your ECR repository from the console.

## FAQs

### What happens when a new PR is merged or a new commit is pushed in felvin.com?

* The main GitHub action workflow is run. https://github.com/felvin-search/felvin.com/blob/master/.github/workflows/master.yml 
* The project at the latest commit is containerized using Docker.
* The image is tagged as `latest` and the timestamp. It is then pushed into the AWS ECR repository (name is in the workflow file).
* It then updates the image used in the kubernetes deployment to the built image tag. This one command triggers the Deployment Rollout, as it’s called. https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#updating-a-deployment

### How to configure what EC2 instance size is used for the cluster nodes and how many of them?

AWS creates a “Node group” to manage the type of nodes used for the kubernetes cluster. If you open the Cluster page on AWS, https://console.aws.amazon.com/eks/home?region=us-east-1#/clusters/felvin-cluster you can see the node group. If you open the node group and click “Edit”, you can see the minimum and maximum number of nodes set in the config. Kubernetes will use this to spin up more nodes if needed for scalability reasons.

### How to grant cluster access to more people so that they can run kubectl commands?

Update the names and/or roles in https://github.com/felvin-search/felvin.com/blob/master/deploy/aws-auth-kube-system.yaml and run kubectl apply -f deploy/aws-auth-kube-system.yaml

## Kubectl commands cheatsheet

Full https://kubernetes.io/docs/reference/kubectl/cheatsheet 

* `kubectl get svc`
  * Get all services
* `kubectl get all --all-namespaces`
  * Get everything in all namespaces (pods, services, deployment, replicasets, etc.)
* `kubectl get all`
  * Get everything in default namespace
* `kubectl logs -f deployment/felvin-search-prod`
  * Follow logs of a deployment
* `kubectl apply -f deployment-production.yaml`
* `kubectl delete -f deployment-production.yaml`
* `kubectl get events --sort-by='.lastTimestamp' -A`
* `kubectl get events --sort-by='.metadata.creationTimestamp' -A`
  * Contains important logs outside of pods, useful for debugging deployments
* `kubectl get <service felvin-search> -o yaml`
  * Export ANY existing k8s object as yaml, for declarative infra
* `eksctl get cluster`
