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

The following error shows up when you check status

*  Run Cert bot

```text
sudo certbot --agree-tos --nginx -m work@hargup.in
```

## Troubleshooting <a id="19bcf1de-f11d-4450-a803-81ae0490e722"></a>

* Check nginx logs `/var/log/nginx/error.log`
* To check if the nginx config if valid run `nginx -t`

