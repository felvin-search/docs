"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3982],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5598:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),l=["components"],i={title:"Tutorial"},s=void 0,c={unversionedId:"team-docs/tutorials",id:"team-docs/tutorials",isDocsHomePage:!1,title:"Tutorial",description:"NOTE: If you are fairly new to Kubernetes, it should take at least 1-2 days of learning the new concepts as well as playing/experimenting with a cluster and gaining confidence.",source:"@site/docs/team-docs/tutorials.md",sourceDirName:"team-docs",slug:"/team-docs/tutorials",permalink:"/team-docs/tutorials",editUrl:"https://github.com/felvin-search/docs/edit/master/docs/team-docs/tutorials.md",tags:[],version:"current",frontMatter:{title:"Tutorial"},sidebar:"mySidebar",previous:{title:"Overview",permalink:"/team-documentation"},next:{title:"Public Engineering Documentation",permalink:"/decisions/public_documentation"}},u=[{value:"Goal: Deploy a new felvin.com website using Kubernetes on AWS",id:"goal-deploy-a-new-felvincom-website-using-kubernetes-on-aws",children:[{value:"0. Prerequisite",id:"0-prerequisite",children:[]},{value:"1. Create a Kubernetes cluster",id:"1-create-a-kubernetes-cluster",children:[]},{value:"2. Create an ECR repository (to store docker images)",id:"2-create-an-ecr-repository-to-store-docker-images",children:[]},{value:"3. Create and push the image",id:"3-create-and-push-the-image",children:[]},{value:"4. Create required Secrets object for environment variables",id:"4-create-required-secrets-object-for-environment-variables",children:[]},{value:"5. Create a deployment",id:"5-create-a-deployment",children:[]},{value:"6. Port forward to a pod",id:"6-port-forward-to-a-pod",children:[]},{value:"7. Create a service",id:"7-create-a-service",children:[]},{value:"8. Set a CNAME record pointing to the host",id:"8-set-a-cname-record-pointing-to-the-host",children:[]},{value:"9. Delete everything",id:"9-delete-everything",children:[]}]},{value:"FAQs",id:"faqs",children:[{value:"What happens when a new PR is merged or a new commit is pushed in felvin.com?",id:"what-happens-when-a-new-pr-is-merged-or-a-new-commit-is-pushed-in-felvincom",children:[]},{value:"How to configure what EC2 instance size is used for the cluster nodes and how many of them?",id:"how-to-configure-what-ec2-instance-size-is-used-for-the-cluster-nodes-and-how-many-of-them",children:[]},{value:"How to grant cluster access to more people so that they can run kubectl commands?",id:"how-to-grant-cluster-access-to-more-people-so-that-they-can-run-kubectl-commands",children:[]}]},{value:"Kubectl commands cheatsheet",id:"kubectl-commands-cheatsheet",children:[]}],p={toc:u};function d(e){var t=e.components,a=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: If you are fairly new to Kubernetes, it should take at least 1-2 days of learning the new concepts as well as playing/experimenting with a cluster and gaining confidence.")),(0,r.kt)("h2",{id:"goal-deploy-a-new-felvincom-website-using-kubernetes-on-aws"},"Goal: Deploy a new felvin.com website using Kubernetes on AWS"),(0,r.kt)("h3",{id:"0-prerequisite"},"0. Prerequisite"),(0,r.kt)("p",null,"Kubernetes.io has a nice tutorial which uses a ",(0,r.kt)("inlineCode",{parentName:"p"},"minikube")," cluster (kubernetes cluster on your laptop) and teaches the basic concepts needed for our purposes. See ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics"},"https://kubernetes.io/docs/tutorials/kubernetes-basics")),(0,r.kt)("p",null,"After the tutorial, you should be able to understand the following Kubernetes resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cluster"),(0,r.kt)("li",{parentName:"ul"},"Control Pane"),(0,r.kt)("li",{parentName:"ul"},"Nodes"),(0,r.kt)("li",{parentName:"ul"},"Deployment"),(0,r.kt)("li",{parentName:"ul"},"Pods"),(0,r.kt)("li",{parentName:"ul"},"Service (and its 4 major types ClusterIP, NodePort, LoadBalancer, ExternalName)"),(0,r.kt)("li",{parentName:"ul"},"Labels and Selectors")),(0,r.kt)("h3",{id:"1-create-a-kubernetes-cluster"},"1. Create a Kubernetes cluster"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: To avoid polluting VPC networks (as they have a max quote per region), we are going to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ap-south-1")," region.")),(0,r.kt)("p",null,"Follow the AWS\u2019s tutorial to create a new Kubernetes cluster on EKS. EKS is a service provided by AWS which they call \u201cmanaged Kubernetes cluster\u201d. Google Cloud and other providers do the same. See what is EKS."),(0,r.kt)("p",null,"Steps: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html"},"https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: Use Managed nodes instead of Fargate. Managed nodes use actual EC2 instances. Fargate is serverless and does not provide all the controls we should ideally have e.g. sshing into the server and looking around.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: Make sure your laptop has the right aws credentials. Install the aws cli ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"},"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html")," and run aws configure ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html"},"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html")," .")),(0,r.kt)("p",null,"This will take several minutes (~20). You can see your new cluster in the EKS dashboard. ",(0,r.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/eks/home"},"https://console.aws.amazon.com/eks/home")," "),(0,r.kt)("p",null,"At this point you should be able to see all the system pods running in the cluster. Pods like core-dns are used for internal service discovery, aws-node are used for storing AWS IAM groups who have authorization to access the cluster, etc."),(0,r.kt)("h3",{id:"2-create-an-ecr-repository-to-store-docker-images"},"2. Create an ECR repository (to store docker images)"),(0,r.kt)("p",null,"We need an internal repository where we can store our Docker images. We will then use this image to create a kubernetes Deployment."),(0,r.kt)("p",null,"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://ap-south-1.console.aws.amazon.com/ecr/repositories?region=ap-south-1"},"https://ap-south-1.console.aws.amazon.com/ecr/repositories?region=ap-south-1")," and create a new private repository."),(0,r.kt)("p",null,"Note the URI of the repository e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"<id>.dkr.ecr.ap-south-1.amazonaws.com/<repository_name>"),", we\u2019ll need it later."),(0,r.kt)("h3",{id:"3-create-and-push-the-image"},"3. Create and push the image"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Make sure you have Docker running.")),(0,r.kt)("p",null,"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/felvin-search/felvin.com"},"https://github.com/felvin-search/felvin.com")," repository and run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn install"),". Now create a docker image by running"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker build -t <account-id>.dkr.ecr.ap-south-1.amazonaws.com/<repository_name>:latest -f docker/Dockerfile .\n")),(0,r.kt)("p",null,"Now authenticate against the ECR repository by using ",(0,r.kt)("inlineCode",{parentName:"p"},"aws")," command here ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonECR/latest/userguide/getting-started-cli.html#cli-authenticate-registry"},"https://docs.aws.amazon.com/AmazonECR/latest/userguide/getting-started-cli.html#cli-authenticate-registry")," "),(0,r.kt)("p",null,"Let\u2019s push the image! Check if you can see the image in the repository using the AWS console."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker push <account-id>.dkr.ecr.ap-south-1.amazonaws.com/<repository_name>:latest\n")),(0,r.kt)("h3",{id:"4-create-required-secrets-object-for-environment-variables"},"4. Create required Secrets object for environment variables"),(0,r.kt)("p",null,"Before we create the deployment, we need to ensure that the environment variables the pods need are ready."),(0,r.kt)("p",null,"Follow the steps at ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/custom-search/v1/introduction"},"https://developers.google.com/custom-search/v1/introduction")," to get a google search api key and a context key (which is actually the cx parameter / search engine ID). Once you have them, run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl create secret generic google-keys --from-literal=GOOGLE_SEARCH_API_KEY=XXXX --from-literal=GOOGLE_SEARCH_CONTEXT_KEY=XXXX\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Note: Make sure to toggle "search the whole web" from the Google search console app settings to enable searching the whole web instead of custom websites.')),(0,r.kt)("h3",{id:"5-create-a-deployment"},"5. Create a deployment"),(0,r.kt)("p",null,"Now let\u2019s create a kubernetes deployment using the docker image we pushed."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: This is the first time we are interacting with the cluster manually. The two main ways of doing anything are ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl <command chain>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply -f <a yaml file>"),". Using a YAML file is good for creating things declaratively, so that they can be shared later.")),(0,r.kt)("p",null,"Update the image url in the ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy/deployment-production.yaml"),": \u200b\u200b",(0,r.kt)("a",{parentName:"p",href:"https://github.com/felvin-search/felvin.com/blob/master/deploy/deployment-production.yaml#L19"},"https://github.com/felvin-search/felvin.com/blob/master/deploy/deployment-production.yaml#L19")," file with ",(0,r.kt)("inlineCode",{parentName:"p"},"<account-id>.dkr.ecr.ap-south-1.amazonaws.com/<repository_name>:latest"),"."),(0,r.kt)("p",null,"Now run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl apply -f deploy/deployment-production.yaml\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Protip - Run ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/derailed/k9s"},"k9s")," in a separate terminal and see the new pods getting created live.")),(0,r.kt)("p",null,"In a few minutes, the new pods corresponding to the deployment should be up and running."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Protip: Use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get events --sort-by='.metadata.creationTimestamp' -A")," to see logs from the\nCluster.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: If there are any errors, you can also delete the deployment using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl delete -f deploy/deployment-production.yaml"))),(0,r.kt)("p",null,"Few notes on the YAML file"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Any kubernetes resource is uniquely determined by the kind and metadata.name fields.\nmetadata.namespace can also be provided but it\u2019s ",(0,r.kt)("inlineCode",{parentName:"li"},"default")," by default."),(0,r.kt)("li",{parentName:"ul"},"This YAML file is describing a K8S resource of Deployment kind with name felvin-search-prod"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"labels.app")," is known as a selector. Providing atleast one selector is important to target the pods associated with this deployment e.g. for getting logs from the pods or creating a service to direct the network to the pods, etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"spec.replicas")," is the number of pods this deployment should maintain"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"spec.spec.containers")," is telling the deployment to create the pods using the specified container image")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Protip - We can get any Kubernetes resource (e.g. deployment) declaratively in a YAML file as well. (Or a JSON. Kubernetes as a REST API for interacting with the cluster). Try running ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get deployment/felvin-search-prod -o yaml"))),(0,r.kt)("h3",{id:"6-port-forward-to-a-pod"},"6. Port forward to a pod"),(0,r.kt)("p",null,"If you see the new pods for the deployment and their status as \u201cRunning\u201d in the k9s window, let\u2019s see if the pods are really ready!"),(0,r.kt)("p",null,"On k9s, use ",(0,r.kt)("inlineCode",{parentName:"p"},"shift+f")," to port forward to one of the two pods we created. The container port is ",(0,r.kt)("inlineCode",{parentName:"p"},"80")," and you should use ",(0,r.kt)("inlineCode",{parentName:"p"},"3000")," on your localhost (to escape CORS errors: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/felvin-search/felvin.com/blob/master/packages/backend/index.ts#L18"},"https://github.com/felvin-search/felvin.com/blob/master/packages/backend/index.ts#L18"),")."),(0,r.kt)("p",null,"Now if you open http://localhost:3000 you should be able to see the site up and running!"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Protip: You can look at the logs from both the pods by using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl logs -f deployment/felvin-search-prod"))),(0,r.kt)("h3",{id:"7-create-a-service"},"7. Create a service"),(0,r.kt)("p",null,"We will now create a Kubernetes service to start accepting traffic into our deployment pods. Kubernetes has a nice ",(0,r.kt)("inlineCode",{parentName:"p"},"expose")," command to create a service which exposes a deployment. Run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl expose deployment felvin-search-prod --type=LoadBalancer --name=felvin-search\n")),(0,r.kt)("p",null,"This is going to create a service of type LoadBalancer called ",(0,r.kt)("inlineCode",{parentName:"p"},"felvin-search")," which will be able to accept traffic and distribute it to the pods of our ",(0,r.kt)("inlineCode",{parentName:"p"},"felvin-search-prod")," deployment."),(0,r.kt)("p",null,"Now run ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get service/felvin-search -o wide")," and you should be able to see a public URL in the ",(0,r.kt)("inlineCode",{parentName:"p"},"EXTERNAL-IP")," column."),(0,r.kt)("p",null,"The AWS LoadBalancer (aka ALB) can also be seen in the ",(0,r.kt)("a",{parentName:"p",href:"https://ap-south-1.console.aws.amazon.com/ec2/v2/home?region=ap-south-1#LoadBalancers:sort=loadBalancerName"},"AWS console"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Protip: As always, you can also get the full YAML file for this service for future reference ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get service/felvin-search -o yaml"))),(0,r.kt)("h3",{id:"8-set-a-cname-record-pointing-to-the-host"},"8. Set a CNAME record pointing to the host"),(0,r.kt)("p",null,"Once logged into Cloudflare, go to the DNS section of felvin.com. Add a new CNAME record with a name which is a subdomain of felvin.com, like beta(.felvin.com), pointing to the ",(0,r.kt)("inlineCode",{parentName:"p"},"EXTERNAL-IP")," of the load balancer created in the previous step as the target."),(0,r.kt)("h3",{id:"9-delete-everything"},"9. Delete everything"),(0,r.kt)("p",null,"Let\u2019s clean up everything!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Delete your cluster - ",(0,r.kt)("inlineCode",{parentName:"li"},"eksctl delete cluster --name <cluster name> --region ap-south-1")),(0,r.kt)("li",{parentName:"ul"},"Delete your ECR repository from the console.")),(0,r.kt)("h2",{id:"faqs"},"FAQs"),(0,r.kt)("h3",{id:"what-happens-when-a-new-pr-is-merged-or-a-new-commit-is-pushed-in-felvincom"},"What happens when a new PR is merged or a new commit is pushed in felvin.com?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The main GitHub action workflow is run. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/felvin-search/felvin.com/blob/master/.github/workflows/master.yml"},"https://github.com/felvin-search/felvin.com/blob/master/.github/workflows/master.yml")," "),(0,r.kt)("li",{parentName:"ul"},"The project at the latest commit is containerized using Docker."),(0,r.kt)("li",{parentName:"ul"},"The image is tagged as ",(0,r.kt)("inlineCode",{parentName:"li"},"latest")," and the timestamp. It is then pushed into the AWS ECR repository (name is in the workflow file)."),(0,r.kt)("li",{parentName:"ul"},"It then updates the image used in the kubernetes deployment to the built image tag. This one command triggers the Deployment Rollout, as it\u2019s called. ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#updating-a-deployment"},"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#updating-a-deployment"))),(0,r.kt)("h3",{id:"how-to-configure-what-ec2-instance-size-is-used-for-the-cluster-nodes-and-how-many-of-them"},"How to configure what EC2 instance size is used for the cluster nodes and how many of them?"),(0,r.kt)("p",null,"AWS creates a \u201cNode group\u201d to manage the type of nodes used for the kubernetes cluster. If you open the Cluster page on AWS, ",(0,r.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/eks/home?region=us-east-1#/clusters/felvin-cluster"},"https://console.aws.amazon.com/eks/home?region=us-east-1#/clusters/felvin-cluster")," you can see the node group. If you open the node group and click \u201cEdit\u201d, you can see the minimum and maximum number of nodes set in the config. Kubernetes will use this to spin up more nodes if needed for scalability reasons."),(0,r.kt)("h3",{id:"how-to-grant-cluster-access-to-more-people-so-that-they-can-run-kubectl-commands"},"How to grant cluster access to more people so that they can run kubectl commands?"),(0,r.kt)("p",null,"Update the names and/or roles in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/felvin-search/felvin.com/blob/master/deploy/aws-auth-kube-system.yaml"},"https://github.com/felvin-search/felvin.com/blob/master/deploy/aws-auth-kube-system.yaml")," and run kubectl apply -f deploy/aws-auth-kube-system.yaml"),(0,r.kt)("h2",{id:"kubectl-commands-cheatsheet"},"Kubectl commands cheatsheet"),(0,r.kt)("p",null,"Full ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubectl/cheatsheet"},"https://kubernetes.io/docs/reference/kubectl/cheatsheet")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl get svc"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Get all services"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl get all --all-namespaces"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Get everything in all namespaces (pods, services, deployment, replicasets, etc.)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl get all"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Get everything in default namespace"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl logs -f deployment/felvin-search-prod"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Follow logs of a deployment"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl apply -f deployment-production.yaml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl delete -f deployment-production.yaml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl get events --sort-by='.lastTimestamp' -A")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl get events --sort-by='.metadata.creationTimestamp' -A"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Contains important logs outside of pods, useful for debugging deployments"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl get <service felvin-search> -o yaml"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Export ANY existing k8s object as yaml, for declarative infra"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eksctl get cluster"))))}d.isMDXComponent=!0}}]);