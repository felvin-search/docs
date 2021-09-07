# What does an ideal pull request looks like?

## 

{% hint style="info" %}
Common sense trumps all guidelines. If a guideline is constantly becoming a trouble in getting things done. **Call it out**, then skip the guideline.
{% endhint %}

An ideal pull request is "atomic":

* A pull request should only do one thing, and shouldn't mix two changes where they don't belong together.
* If the pull request is structured well, it is easy to review and merge it independently of any other pull request in the system.
* We use ["Squash and Merge"](https://github.blog/2016-04-01-squash-your-commits/) in github pull requests, this creates a single commit for each pull request. This means we can undo changes of a bad merge with a single git revert.
* If you commits are structured well, it is easy to reorder commits and revert commits without worrying about conflicts.

And ideal pull request explain what are you doing and why are you doing it:

* Clearly describe what are you trying to do with the pull request. Add a line a or two about why are you doing it.
* Add a screenshot wherever applicable, especially when the change impact how things look.
* Make it easy to test your work. If required instructions on how to run the code and how to see the expected changes.
* NOTE: It is not necessary for you to wait for someone else to approve your pull request before you can merge it. Though by reading your pull request, everyone should be able know what's happening.

Non requirements from a pull request:

* A pull request need not be correct. If it is "wrong", at max, we will call it out and not merge it. You will learn something and we will learn something.
* The work doesn't need to be "complete" to be mergable.
* The work doesn't have to be clean before you submit a pull request. Bad variable names, dangling comments, bad formating. They are okay while submitting a PR, though try to clean thing up before you merge the PR.

Examples of good PRs:

TODO





