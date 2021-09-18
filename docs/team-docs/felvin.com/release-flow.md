# Release flow

1. A new Pull Request is merged into the default branch of felvin.com repository.
1. GitHub Actions workflow is triggered.
1. A new docker image is created for the website.
1. The image is tagged with `latest` and unix timestamp, and is pushed to our private AWS ECR repository.
1. `kubectl` sets a new image for the `felvin-search` deployment on the K8S cluster.
1. Kubernetes rolls out new pods.

See deployment workflow https://github.com/felvin-search/felvin.com/blob/master/.github/workflows/master.yml
