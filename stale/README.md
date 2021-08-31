# Stalebot

A [Github Action](https://github.com/actions/stale) to automate labeling and closing of issues and PRs that have not had activity for a number of days (become stale).

Because this is a pre-built stale action, no additional files are needed.

The current workflow is only [run on demand](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#manual-events) (`on: workflow_dispatch`) until finalized, then can be adjusted to a schedule via cron job.

## Inputs

See detailed options in [actions/stale#details-options](https://github.com/actions/stale#detailed-options).

Used in this workflow:

- `start-date`
- `stale-issue-message`
- `stale-pr-message`
- `close-issue-message`
- `close-pr-message`
- `days-before-issue-stale`
- `days-before-pr-stale`
- `days-before-issue-close`
- `days-before-pr-close`

## Outputs

No outputs.

## Example usage

Create a workflow file in your GitHub repository:

```plain
.github/workflows/stale.yml
```

Include in it the action configuration:

```yaml
name: 'Close stale issues and PRs'
on:
  schedule:
    - cron: '30 1 * * *'

jobs:
  stale:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/stale@v4
        with:
          stale-issue-message: 'This issue is stale because it has been open 30 days with no activity. Remove stale label or comment or this will be closed in 5 days.'
          days-before-stale: 30
          days-before-close: 5
```

More usage examples in [actions/stale#usage](https://github.com/actions/stale#usage).
