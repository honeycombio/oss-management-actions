# Honeycomb OSS Management Actions

A set of [GitHub Actions](https://docs.github.com/en/free-pro-team@latest/actions/creating-actions/creating-a-javascript-action) to apply a common set of OSS management workflows to Honeycomb projects.

Each action has a `README.md` file explaining its usage and inputs/outputs.

The general process of adding the workflow to a new repo is to simply add the `.yml` file to your repo's directory `.github/workflows`, as also seen in this repo's directory.

## Actions

- [Add to Project Board](./projects)
- [Apply common labels](./labels)
- [Re-triage updated issues](./re-triage)
- [Apply stale rules](./stale)
