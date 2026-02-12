<!-- @license CC0-1.0 -->

# NL Design System indexes

This repository keeps indexes of the components, themes and guidelines in NL Design System. As these might be available in the community, in NL Design System or elsewhere it is useful to have one overview of what's available and use it to generate the documentation website or stories.

## Code of Conduct

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community. Read [our Code of Conduct](CODE_OF_CONDUCT.md) if you haven't already.

## License

This project is free and open-source software licensed under the [European Union Public License (EUPL) v1.2](LICENSE.md). Documentation is licensed as [Creative Commons Zero 1.0 Universal (`CC0-1.0`)](https://creativecommons.org/publicdomain/zero/1.0/legalcode)

For information about proprietary assets in this repository, please carefully read the [NOTICE file](NOTICE.md).

## Development

### Build locally

```sh
pnpm run build
pnpm --filter @nl-design-system/component-progress run start
```

The `start` script requires a `GH_ISSUES_TOKEN` enviroment variable. To run it locally take the following steps:

1. Create a `.env` file
2. Create a Personal access token in GitHub
3. Go to GitHub `settings` -> `Developer Settings` -> `Personal access tokens` -> `Fine-grained tokens`
4. Generate new token with
   - Token name: `Local GH_ISSUES_TOKEN`
   - expiration: choose end date of your contract
   - Resource owner: `NL Design System`
   - Repository access: `Only select repositories` and select `nl-design-system/backlog`
   - Repository permissions: `Issues: Read-only`
   - Organisation permissions: `Projects: Read-only`
   - Copy token
5. In the `.env` file add `export GH_ISSUES_TOKEN="<paste your token>"`

**Note**: This is an access token! It should only be saved locally and never be committed to GitHub or shared with anyone else.

Now you can run `source .env; pnpm --filter @nl-design-system/component-progress start` locally.

### Releases

The `@nl-design-system/component-progress` package needs to be updated everytime a release is made, regardless of changes in the repository. This is because it calls GitHub API's for generating JSON files based on GitHub projectboards.

To release the `@nl-design-system/component-progress` package, merge the release PR created by the changesets action. A standard changeset is automatically added after publishing to ensure this PR is always readily available.
