## Cheat.sh deployment

Our [cheat.sh](https://github.com/felvin-search/cheat.sh) app can be useful in answering tons of queries regarding simple commands. We have deployed our fork of the repository on a `EC2 t2.small` instance. 

### How is it deployed? 
- The main branch of the repository is cloned in the above mentioned ec2 instance
- Go inside the cloned folder 
  
  ```
    cd cheat.sh
  ```
  
- `docker-compose` is used to deploy containers of a flask server and a reddis image.
  
  ```
    docker-compose up -d
  ```
  
  `-d` is for detached mode, so that the command exits once the deployment is up.
  
- If there are changes to nginx config, just run the following to restart nginx: 

  ```
    sudo systemctl restart nginx
  ```
  
### How do you deploy a new version then? 
- Deploying a new version is just making a new image with the newest file changes
- Hence, just bring down the containers: 
  
  ```
    docker-compose down
  ```
  
- Get the latest changes using git for whichever branch needed (preferabbly only main should be kept for deployment)
- Start the containers back again, new images would be built depending on the changes and containers would be setup
  
  ```
    docker-compose up -d
  ```
