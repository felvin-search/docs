# AWS Deployment in brief

This document contains a brief explanation on how we have setup one-click deployment. By one-click deployment, we mean by just making a triggering an action on Github like pushing to master/Pull Request(making a `release` in our case), the changes are deployed without any human action. Many of the items used from the AWS menu are explained below. Before that please refer the basics of Virtual Private Cloud and Subnets explained [here](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html#vpc-subnet-basics). 

- **<u>Docker</u>**: 

  Both the frontend and backend are containerized in a node-14 base image, with a Dockerfile akin to this [one](https://github.com/rakaar/dockerize-react-and-express-app/blob/master/Dockerfile).

- **<u>Github Actions</u>**: 

  On release, a Github Action is triggered. The YAML file action has been inspired from the [C-3PO project from LTTKGP](https://github.com/lttkgp/C-3PO/blob/master/.github/workflows/deploy.yml). This Actions in brief do the following (The AWS terms will be explained soon)

  - Logging into AWS using the secrets configured via Github Secrets
  - Builds and pushes the image to **Elastic Container Registry(ECR)**
  - Deploy the image via **Elastic Container Service(ECS) Fargate**

- <u>**Elastic Container Registry(ECR)**</u>: 

  AWS Service where you can store Docker Container Images. The Docker images are stored in a private repository. To look at the images in AWS, visit ECR by searching in the console. Click on the repository name. 

- **<u>Elastic Container Service(ECS) Fargate</u>**: 

  Once the latest image is stored in the ECR, they need to be deployed. A service by name **ECS Fargate** handles this job of deploying the docker image. ECS Fargate is configured using a JSON file present in the `deploy` folder. The JSON is obtained from the AWS Console(Instructions to obtain JSON from AWS console can be found at `docs/troubleshooting-and-how-tos/getting-task-def.md`). 

  The following are 4 important things related to ECS Fargate. The below diagram will help you get an idea of different layers of Fargate. To setup a ECS Fargate service, we need to configure the below four things.

  ![](https://imgur.com/clXWtjU.png)

1. **Container Defintion**: Details of the Docker container. We need to specify the docker Image URI, which is already existing in ECR.

2. **Task definition**: A task definition is the recipe for running containers. It includes the image to run, constraints on CPU and Memory, Ports to be mapped externally, Environment variables to be set and so on. We select networking mode as awsvpc, since we're using Fargate.

3. **Service**:  A Service takes a task definition and adds more details (Such as the VPC, subnets, ports, load balancers) and schedules it to be run. It also controls how many tasks will exist. The service can be of Fargate type(like ours) or EC2 type  or External type. We are using Fargate Service because on our behalf it defines resources, manages and runs the resources. 

   ![](https://imgur.com/XJhTotJ.png)

    Here, we have only one Service, and we've set that service to spawn only 1 task. Our service has a Load Balancer. And the Load Balancer has a target group(Load Balancer and Target Group will be explained soon)

4. **Cluster**: A Cluster is a logical collection of services.

- **<u>Load Balancer and Target Groups</u>**: 

  After every release, Fargate creates a new task, which has a new IP Address. But to configure Domain name, we need to have a single domain address. We can't keep changing Domain Name configuration after every release.

  As per [AWS Docs](https://aws.amazon.com/premiumsupport/knowledge-center/ecs-fargate-static-elastic-ip-address/), a Load Balancer is recommended to solve the above issue. The steps mentioned in the doc were followed to setup a Load Balancer. 
  The Load balancer is provided a target group, which is aware of the IP address where the image is deployed. After a new deployment, Fargate registers the new Task's IP Address with the Target Group.
