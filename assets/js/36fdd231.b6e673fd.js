"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2721],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4931:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],c={title:"Deployment runbook",description:"A runbook for deploying felvin.com from scratch on a new K8S cluster"},i=void 0,s={unversionedId:"team-docs/felvin.com/deployment-runbook",id:"team-docs/felvin.com/deployment-runbook",isDocsHomePage:!1,title:"Deployment runbook",description:"A runbook for deploying felvin.com from scratch on a new K8S cluster",source:"@site/docs/team-docs/felvin.com/deployment-runbook.md",sourceDirName:"team-docs/felvin.com",slug:"/team-docs/felvin.com/deployment-runbook",permalink:"/team-docs/felvin.com/deployment-runbook",editUrl:"https://github.com/felvin-search/docs/edit/master/docs/team-docs/felvin.com/deployment-runbook.md",tags:[],version:"current",frontMatter:{title:"Deployment runbook",description:"A runbook for deploying felvin.com from scratch on a new K8S cluster"},sidebar:"mySidebar",previous:{title:"Release flow",permalink:"/team-docs/felvin.com/release-flow"},next:{title:"2021-08-13 - Blank Screen because of incompatible Local Storage Schema",permalink:"/incident-reports/2021-08-13-localstorage-schema-error"}},p=[{value:"Create cluster",id:"create-cluster",children:[]},{value:"Give AWS IAM users permission to the cluster",id:"give-aws-iam-users-permission-to-the-cluster",children:[]},{value:"Create a new deployment",id:"create-a-new-deployment",children:[]},{value:"Create secrets to be used as environment variables",id:"create-secrets-to-be-used-as-environment-variables",children:[]},{value:"Expose a service",id:"expose-a-service",children:[]},{value:"Update CNAME record of the website",id:"update-cname-record-of-the-website",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use these instructions to re-deploy everything related to felvin.com from scratch."),(0,a.kt)("h2",{id:"create-cluster"},"Create cluster"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"eksctl")," cli to create a new cluster on Amazon EKS. Choose EC2 as node type."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html"},"https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html")),(0,a.kt)("p",null,"It takes 15-30 minutes to create a new Kubernetes cluster."),(0,a.kt)("h2",{id:"give-aws-iam-users-permission-to-the-cluster"},"Give AWS IAM users permission to the cluster"),(0,a.kt)("p",null,"Give access to an AWS IAM group so that the admins can run ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," commands and interact with the cluster."),(0,a.kt)("p",null,"File: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/felvin-search/felvin.com/blob/master/deploy/aws-auth-kube-system.yaml"},"https://github.com/felvin-search/felvin.com/blob/master/deploy/aws-auth-kube-system.yaml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl apply -f <yaml file of kind ConfigMap>\n")),(0,a.kt)("h2",{id:"create-a-new-deployment"},"Create a new deployment"),(0,a.kt)("p",null,"Create a new deployment on the cluster using ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl apply -f <yaml file>"),"."),(0,a.kt)("p",null,"Use the deployment file ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/felvin-search/felvin.com/blob/master/deploy/deployment-production.yaml"},"https://github.com/felvin-search/felvin.com/blob/master/deploy/deployment-production.yaml")),(0,a.kt)("h2",{id:"create-secrets-to-be-used-as-environment-variables"},"Create secrets to be used as environment variables"),(0,a.kt)("p",null,"Create Kubernetes secrets to be used as environment variables in the Pods of the deployment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n\x3c!-- Example --\x3e\n\nkubectl create secret generic google-keys --from-literal=GOOGLE_SEARCH_API_KEY=XXXX --from-literal=GOOGLE_SEARCH_CONTEXT_KEY=XXXX\n\n")),(0,a.kt)("p",null,"Make sure the deployment YAML contains the ",(0,a.kt)("inlineCode",{parentName:"p"},"env")," definition which is how the secrets are set as environment variables in the Pods."),(0,a.kt)("h2",{id:"expose-a-service"},"Expose a service"),(0,a.kt)("p",null,"Create a LoadBalancer service to expose a public service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\nkubectl expose deployment <deployment-name> --type=LoadBalancer --name=<new-service-name>\n\n")),(0,a.kt)("h2",{id:"update-cname-record-of-the-website"},"Update CNAME record of the website"),(0,a.kt)("p",null,"Use the Amazon Load Balancer URL returned in the previous step to update CNAME record of felvin.com"))}m.isMDXComponent=!0}}]);