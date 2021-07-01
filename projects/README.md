# Honeycomb Project Management

A [GitHub Action](https://docs.github.com/en/free-pro-team@latest/actions/creating-actions/creating-a-javascript-action) to apply a common project management workflow to Honeycomb repositories.
Inspired by [alex-page/github-project-automation-plus](https://github.com/alex-page/github-project-automation-plus)

## Inputs

### `ghprojects-token`

**Required** The GitHub token used to add issues and prs to projects.

## Outputs

No outputs.

## Example usage

Create a workflow file in your GitHub repository:

```plain
.github/workflows/add-to-project.yml
```

Include in it the action configuration:

```yaml
on:
  issues:
    types: [opened]
  pull_request_target:
    types: [opened]
jobs:
  project-management:
    runs-on: ubuntu-latest
    name: Apply project management flow
    steps:
      - uses: honeycombio/oss-management-actions/projects@v1
        with:
          ghprojects-token: ${{ secrets.GHPROJECTS_TOKEN }}
```


