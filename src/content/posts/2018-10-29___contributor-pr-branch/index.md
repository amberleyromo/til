---
title: Checking out contributor PRs
categories:
  - git
tags:
  - hub
  - OSS
---

This one is courtesy of some fellow Gatsby'ers. Uses [`hub`](https://github.com/github/hub) to

## Pulling down the branch

- Make sure `hub` is installed on your machine.
- Add the author's remote (sets up remote with the username as name of remote):

```
hub fetch <authorUsername>
```

- Check out the PR locally:

```
hub pr checkout <prNumber>
```

- When checking out the branch, you can optionally give it a different name:

```
hub pr checkout <prNumber> <branchName>
```

## Pushing changes to the branch

- Commit to the PR branch.
- Push changes to the author's branch:

```
git push <authorUsername> <branch>
```

## Gotchas:

- The PR author must [_allow edits from maintainers_](https://blog.github.com/2016-09-07-improving-collaboration-with-forks/) on the PR.
