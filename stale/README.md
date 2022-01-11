# Stalebot

A [Github Action](https://github.com/actions/stale) to automate labeling and closing of issues and PRs that have not had activity for a number of days (become stale).

Because this is a pre-built stale action, no additional files are needed.

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
- `any-of-labels`

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
    name: 'Close stale issues and PRs'
    runs-on: ubuntu-latest
    permissions:
      issues: write
      pull-requests: write

    steps:
      - uses: actions/stale@v4
        with:
          start-date: '2021-09-01T00:00:00Z' # Starting Sept 1, 2021
          stale-issue-message: 'Marking this issue as stale because it has been open 14 days with no activity. Please add a comment if this is still an ongoing issue; otherwise this issue will be automatically closed in 7 days.'
          stale-pr-message: 'Marking this PR as stale because it has been open 30 days with no activity. Please add a comment if this PR is still relevant; otherwise this PR will be automatically closed in 7 days.'
          close-issue-message: 'Closing this issue due to inactivity. Please see our [Honeycomb OSS Lifecyle and Practices](https://github.com/honeycombio/home/blob/main/honeycomb-oss-lifecycle-and-practices.md).'
          close-pr-message: 'Closing this PR due to inactivity. Please see our [Honeycomb OSS Lifecyle and Practices](https://github.com/honeycombio/home/blob/main/honeycomb-oss-lifecycle-and-practices.md).'
          days-before-issue-stale: 14
          days-before-pr-stale: 30
          days-before-issue-close: 7
          days-before-pr-close: 7
          any-of-labels: 'status: info needed,status: revision needed'
```

More usage examples in [actions/stale#usage](https://github.com/actions/stale#usage).
