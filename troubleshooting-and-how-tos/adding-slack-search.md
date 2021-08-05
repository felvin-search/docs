# How to add a Slack workspace to Neera Search

Currently, Slack Workspaces are being added manually by us for security reasons. The following document shows how to add a new Slack workspace to Neera Search.

We have made a Slack App - Neera Search. When the app is installed on a Workspace, one can search through the workspace's message via Neera. To install a workspace

1. Log in to Slack via botneera Gmail OAuth.(Check Google Sheets for Credentials)
2. Join the Workspace, where you intend to install the app
3. Visit the link - [https://slack.com/oauth/v2/authorize?client_id=2023130583974.2302302243990&scope=channels:history,channels:read&user_scope=search:read](https://slack.com/oauth/v2/authorize?client_id=2023130583974.2302302243990&scope=channels:history,channels:read&user_scope=search:read)
4. Select the right workspace at the dropdown present on the top right corner.
5. Click on `Allow` if the button is visible
6. If it shows an option to ask Admins of the workspace with the message. Send the following message, requesting them to install

```
Hello,
We are from Neera.ai, a search engine planning to change the search experiences of the user. We think that modern-day useful discussions mostly happen on platforms like Slack and Discord. A lot of knowledge is hidden behind these walls, which regular search engines fail to capture.

To solve this problem, we have built a slack app. By adding the slack app, users will be able to search for valuable discussions that happen in your workspace without joining it. This will also promote the users to join your workspace, so as to read and take part in the conversation.

We request you to allow our Neera Search Slack App to be installed. To allow the App, respond to the message from Slackbot in your workspace. This step will make the knowledge in your workspace easily accessible to the world. If you have any queries or concerns, feel free to reach out to us at info@neera.ai
```

1. If it shows app installation is not allowed, please contact the admin personally from Neera Account.
