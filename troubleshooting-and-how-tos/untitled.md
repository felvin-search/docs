# How to add a new subdomain

*  Add the subdomain on digitalocean [https://cloud.digitalocean.com/networking/domains](https://cloud.digitalocean.com/networking/domains?i=acd02e)
  *  Point it to the right server. Set TTL to `600`
*  SSH to the root user of the server
  * `ssh root@subdomain.neera.ai`
*  Modify the nginx config `/etc/nginx/sites-available/default`

```text
server {
        server_name subdomain.neera.ai;

        location /path1/ {
                proxy_pass http://localhost:5111;
        }

        location /path2/ {
                proxy_pass http://localhost:3111;
        }
	 listen 80;
}
```

*  Check the nginx config by
  * `nginx -t`
*  Restart nginx `sudo nginx -s stop && sudo nginx;`
*  When the above doesn't work - `pkill nginx && nginx`

The following errror showing up when you try to restart nginx
![screenshot of error](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5c07203c-e39b-4862-9cbd-73eeb0bc53af/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210716T111851Z&X-Amz-Expires=86400&X-Amz-Signature=29fe096c0b454ed3c6204d2798ed150f6f338c5fc7b1fba842a6d1c1be875ad3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

![screenshot of error 2](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cabbfa38-4fde-47fe-9041-6d52a5998db7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210716T111848Z&X-Amz-Expires=86400&X-Amz-Signature=bd5dd671e420cccaf328e833241485b623d762a854539ef243bd2889054ed0a2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

The following error shows up when you check status
![screenshot of status](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f9c10c95-a3f7-4481-a424-33af065efe8f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210716T111844Z&X-Amz-Expires=86400&X-Amz-Signature=1179634191dd91adc9bfb9f49712897ef918a16e737f46e848b64b00a4880afc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

*  Run Cert bot

```text
sudo certbot --agree-tos --nginx -m work@hargup.in
```

## Troubleshooting <a id="19bcf1de-f11d-4450-a803-81ae0490e722"></a>

* Check nginx logs `/var/log/nginx/error.log`
* To check if the nginx config if valid run `nginx -t`

