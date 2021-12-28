# Honeycomb Project Management: re-triage issues

A [GitHub Action](https://docs.github.com/en/free-pro-team@latest/actions/creating-actions/creating-a-javascript-action) to move iced issues 
with new comments back to triage.
Inspired by [alex-page/github-project-automation-plus](https://github.com/alex-page/github-project-automation-plus)

## Inputs

### `ghprojects-token`

**Required** The GitHub token used to add issues and prs to projects.

## Outputs

No outputs.

## Example usage

Create a workflow file in your GitHub repository:

```plain
.github/workflows/re-triage.yml
```

Include in it the action configuration:

```yaml
on:
  issue_comment:
    types: [created]
jobs:
  re-triage:
    runs-on: ubuntu-latest
    name: Re-triage issues with new comments
    steps:
      - uses: honeycombio/oss-management-actions/re-triage@v1
        with:
          ghprojects-token: ${{ secrets.GHPROJECTS_TOKEN }}
```
