# Auto-merge Dependabot

A [Github Action](https://docs.github.com/en/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions#enable-auto-merge-on-a-pull-request) that automatically auto-merges dependabot PRs for patch updates.

Because this is using a pre-built GitHub Action and the GitHub CLI, no additional files are needed.

## Inputs

See detailed options in GitHub CLI docs [for working with pull requests](https://cli.github.com/manual/gh_pr).

This workflow uses [`merge`](https://cli.github.com/manual/gh_pr_merge), with the `--auto` flag, which will automatically merge only after necessary requirements are met.

For a smaller first step, use `gh pr review --approve "$PR_URL"` to see what would be approved and confirm it matches expectations before adding the merge step `gh pr merge --auto --merge "$PR_URL"`.

## Outputs

No outputs.

## Example usage

Create a workflow in your GitHub repository:

```plain
.github/workflows/auto-merge.yml
```

Include in it the action configuration:

```yaml
name: Dependabot auto-merge
on: pull_request

permissions:
  contents: write
  pull-requests: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Enable auto-merge for Dependabot PRs
        if: ${{contains(steps.metadata.outputs.dependency-names, 'my-dependency') && steps.metadata.outputs.update-type == 'version-update:semver-patch'}}
        run: gh pr merge --auto --merge "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```
