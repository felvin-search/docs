# Code Reviews

💡

This template documents how to review code. Helpful for new and remote employees to get and stay aligned.

## Philosophy <a id="8811c48c-ae21-43dc-8bb0-821e3947b6e2"></a>

Why do you perform code reviews? What are your guiding principles for these reviews?

You may want to mention other pages here. Like Engineering Guidelines. To link to another page inline, type `@` followed by the name of the page: [🤖Engineering Guidelines](Engineering%20Wiki%200dc23408e7c44ac0be95d0e5c6979ee4/Engineering%20Guidelines%207b5e659f46924118bb6902340977a629.html)

## Preparing Code for Review <a id="4676ed15-45fe-400c-ba6a-e9d40bd9cdfe"></a>

Preparation sets your reviewers up for success.

### Commit Messages <a id="b185eed9-adf4-4241-99f0-0e909aa2510c"></a>

Make sure your commit messages are descriptive.

### Github PR Descriptions <a id="ffc08812-be30-41ca-8e13-af27e1b70dca"></a>

Your PR descriptions should be an extension of your commit messages. Write about both what the commit changes, and how you implemented the change.

## Performing Code Reviews <a id="aa4bf746-8ce3-441b-a1e0-0c0bce96d8e7"></a>

### How to Review <a id="fc402b65-3d94-4c9b-ae48-aedf4d2efafb"></a>

* Make two passes over the PR if it's substantial.
  * On the first pass, come to an understanding of the code change at a high level.
  * On the second pass, pay more attention to semantic details.

## Examples <a id="9a967e6f-060d-4eb9-99bb-4b8c4ec55d36"></a>

```text
var commentCount = 0;
```

You might suggest that this be a `let` instead of `var`.

