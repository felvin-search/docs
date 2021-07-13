# How to start the plugins servers?

## Pocket Plugin <a id="12e9b534-97f8-4c0d-be2d-fddcaa188302"></a>

* `ssh app@neera.ai`
* `cd ~/pocket-search-api/server`
* `pm2 start server.js --name pocket-api`
* `pm2 start meilisearch --name pocket-meilisearch -- --http-addr 127.0.0.1:7700`

## Drive Plugin <a id="1eb203b1-e786-4c26-8a15-55a648a65345"></a>

* `ssh app@neera.ai`
* `cd ~/drive-search-plugin`
* `pm2 start index.js --name drive-api`

## Notion Plugin <a id="9dbaf906-d7dd-4fcf-a93f-d78979df3be6"></a>

* `ssh app@neera.ai`
* `cd ~/notion-search-api`
* `pm2 start index.js --name notion-api`
* `pm2 start meilisearch --name notion-meilisearch -- --http-addr 127.0.0.1:8700`

