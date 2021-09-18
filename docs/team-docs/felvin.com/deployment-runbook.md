---
title: Deployment runbook
description: A runbook for deploying felvin.com from scratch on a new K8S cluster
---

Use these instructions to re-deploy everything related to felvin.com from scratch.

## Create cluster

Use the `eksctl` cli to create a new cluster on Amazon EKS. Choose EC2 as node type.

https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html

It takes 15-30 minutes to create a new Kubernetes cluster.

## Give AWS IAM users permission to the cluster

Give access to an AWS IAM group so that the admins can run `kubectl` commands and interact with the cluster.

File: https://github.com/felvin-search/felvin.com/blob/master/deploy/aws-auth-kube-system.yaml

```
kubectl apply -f <yaml file of kind ConfigMap>
```

## Create a new deployment

Create a new deployment on the cluster using `kubectl apply -f <yaml file>`.

Use the deployment file https://github.com/felvin-search/felvin.com/blob/master/deploy/deployment-production.yaml

## Create secrets to be used as environment variables

Create Kubernetes secrets to be used as environment variables in the Pods of the deployment.

```

<!-- Example -->

kubectl create secret generic google-keys --from-literal=GOOGLE_SEARCH_API_KEY=XXXX --from-literal=GOOGLE_SEARCH_CONTEXT_KEY=XXXX

```

Make sure the deployment YAML contains the `env` definition which is how the secrets are set as environment variables in the Pods.

## Expose a service

Create a LoadBalancer service to expose a public service.

```

kubectl expose deployment <deployment-name> --type=LoadBalancer --name=<new-service-name>

```

## Update CNAME record of the website

Use the Amazon Load Balancer URL returned in the previous step to update CNAME record of felvin.com
