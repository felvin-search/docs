# How to start the plugins servers



### Pocket Plugin

* `ssh app@neera.ai`
* `cd ~/pocket-search-api/server`
* `pm2 start server.js --name pocket-api`
* `pm2 start meilisearch --name pocket-meilisearch -- --http-addr 127.0.0.1:7700`

### Drive Plugin

* `ssh app@neera.ai`
* `cd ~/drive-search-plugin`
* `pm2 start index.js --name drive-api`

### Notion Plugin

* `ssh app@neera.ai`
* `cd ~/notion-search-api`
* `pm2 start index.js --name notion-api`
* `pm2 start meilisearch --name notion-meilisearch -- --http-addr 127.0.0.1:8700`

