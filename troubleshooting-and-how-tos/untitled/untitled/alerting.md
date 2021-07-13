# Alerting

We are using the free, basic monitoring support from Digital Ocean on our servers for alerting when the droplet goes down.

## Scope <a id="86595a2d-5f41-40cf-9b10-98e65e2d8a03"></a>

* Notification when the server is offline.

## Setup <a id="ca59ce07-68c3-4b69-ba7b-a3764b63be1f"></a>

* Install the [DigitalOcean Metrics Agent](https://docs.digitalocean.com/products/monitoring/#agent-overview) on .

  * SSH into the droplet.
  * Execute the following command

  ```text
  $ curl -sSL https://repos.insights.digitalocean.com/install.sh | sudo bash
  ```

* Based on historical data of the droplet, it was noticed that the following metrics can be used to trigger alert when the server is down:
  * CPU usage → 0%
  * Disk I/O → 0%

### Idea <a id="10bbd818-e5a6-4d16-b01b-65104fec8765"></a>

* Usually, the CPU usage is above 0.1 \(required by the OS\). So alerting below this threshold should work.

## Alerting Policies <a id="279cee31-912b-42b9-b5c6-2d73eafb1f02"></a>

The following alerting policies were setup:

#### Policies

| Name | Duration | Servers |
| :--- | :--- | :--- |
| [CPU is below 0.01%](Engineering%20Wiki%200dc23408e7c44ac0be95d0e5c6979ee4/Alerting%2018541f326fe64553bc4328d3bb56a2ac/Policies%20fd1da99457e04abdb6daf80da729b717/CPU%20is%20below%200%2001%25%20ce69f0b1ad68426fa0132652330d5b2f.html) | 5 min | All |

## Notifications <a id="56e89663-9ee2-45e4-8e12-bd84dad2f16c"></a>

The following notifications were configured:

* Email to mail@hargup.in
* Slack Integration on \#alerts channel.

## Pain Points <a id="e8ca9ef8-adc2-4785-b7ca-7bcb1dd757e2"></a>

* There is no way in DO to combine the alerting policies on different metrics.
  * Ideally we would want to combine the alerts across metrics into a single alert so as to reduce the number of triggered alerts.
  * Possibility of false positives.
* The server has to be offline for at least 5 mins before we get to know about it.

## Future Action Points <a id="bfea1204-25ef-490f-98ed-797b29b623c0"></a>

* If we want to have a more sophisticated alerting policy based on droplets, we can use **Tags.**

## References <a id="8b2bf777-ed8b-4b67-8f2e-553e7942e250"></a>

* [How to Set Up Monitoring Alerts](https://docs.digitalocean.com/products/monitoring/how-to/set-up-alerts/)
* [How to Install the DigitalOcean Metrics Agent](https://docs.digitalocean.com/products/monitoring/how-to/install-agent/)

