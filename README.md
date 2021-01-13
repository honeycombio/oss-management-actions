# Honeycomb Integrations Labels

A [GitHub Action](https://docs.github.com/en/free-pro-team@latest/actions/creating-actions/creating-a-javascript-action) to apply a common set of labels to Honeycomb integration/SDK projects.
Inspired by and very much modeled after [Financial-Times/origami-labels](https://github.com/Financial-Times/origami-labels).

## Inputs

### `github-token`

**Required** The GitHub token used to apply labels to a project.

## Outputs

No outputs.

## Example usage

Create a workflow file in your GitHub repository:

```plain
.github/workflows/apply-labels.yml
```

Include in it the action configuration:

```yaml
on: [issues, pull_request]
jobs:
  apply-labels:
    runs-on: ubuntu-latest
    name: Apply common project labels
    steps:
      - uses: honeycombio/integrations-labels@v1
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
```
