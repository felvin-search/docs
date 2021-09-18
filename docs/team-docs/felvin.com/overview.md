---
title: Technical Overview
description: Technical overview of felvin.com, deplyoment setup and some how-to guides
---

We are using Kubernetes to deploy felvin.com website and related services. If you aren't super familiar with Kubernetes, go through their
[Intro to K8S basic tutorial](https://kubernetes.io/docs/tutorials/kubernetes-basics) to understand concepts like Cluster, Deployment, Service, Pods, etc.

## Kubernetes resources details

### Cluster

We are running one Kubernetes [cluster](https://kubernetes.io/docs/concepts/architecture/) on [Amazon Elastic Kubernetes Service (EKS)](https://aws.amazon.com/eks/).

```
eksctl get cluster

NAME		REGION		EKSCTL CREATED
felvin-cluster	us-east-1	True
```

We are using EC2 instances as the Nodes of the cluster.

### Deployment

We have created one Kubernetes deployment which takes the container for felvin.com and deploys the pods using the specified container image.

Source https://github.com/felvin-search/felvin.com/blob/master/deploy/deployment-production.yaml

To make a change to this deployment, update the YAML file and run

```
kubectl apply -f deploy/deployment-production.yaml
```

### Service

We have one [LoadBalancer service](https://kubernetes.io/docs/concepts/services-networking/) which is exposed publicly and redirects traffic to felvin.com to the pods matching the selector `app=felvin-search`.

Source https://github.com/felvin-search/felvin.com/blob/master/deploy/service-felvin-search.yaml

A service is an abstraction over pods and can be used to manage internal private microservices or public services.

### Cheatsheet

Some helpful commands for our purpose. Also see https://kubernetes.io/docs/reference/kubectl/cheatsheet/

- `kubectl get all --all-namespaces`
- `kubectl apply -f <yaml file>`
- `kubectl delete -f <yaml file>`
- `kubectl get events --sort-by='.lastTimestamp' -A`
- `kubectl get events --sort-by='.metadata.creationTimestamp' -A`
- `kubectl logs -f deployment/felvin-search-prod`
- `kubectl get svc`
- `kubectl get <any resource> -o yaml`
- `eksctl get cluster`
