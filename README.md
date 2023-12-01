# TypeScript-NPM-Template

Accelerate your NPM package development with our TypeScript-NPM-Template. This meticulously crafted, ready-to-use template streamlines the creation of robust and scalable TypeScript-powered packages for the NPM ecosystem.

## Features:

- **TypeScript Ready:** Out-of-the-box TypeScript setup for seamless integration and type-safe development.
- **Testing Framework:** Pre-configured with a powerful testing framework (such as Jest) for efficient code validation.
- **Package Building:** Automated build scripts for effortless package compilation, ensuring compatibility and optimization.
- **Documentation Support:** Easily generate documentation using tools like Typedoc to facilitate clear API understanding.
- **Continuous Integration:** Integrate smoothly with popular CI/CD platforms (e.g., GitHub Actions, Travis CI) for automated testing and deployment.
- **Versioning and Release Management:** Simplified version control and release processes with conventional commit messages and semantic versioning.

Whether you're a seasoned developer or just getting started, our TypeScript-NPM-Template provides a solid foundation, allowing you to focus on creating exceptional NPM packages without the hassle of configuring the setup from scratch.

Get started on your next project with confidence and efficiency using our TypeScript-NPM-Template.

## Getting Started

1. Click the **Use this template** button to create a new repository based on this template.
2. Clone the newly created repository to your local machine.
3. Run `npm install` to install the required dependencies.
4. Start coding!

## Scripts

Table of available scripts:

| Script                  | Description                                                                                    |
| ----------------------- | ---------------------------------------------------------------------------------------------- |
| `npm run test`          | Runs the test suite. In this template, the test suite is configured with Vitetest.             |
| `npm run test:watch`    | Runs the test suite in watch mode.                                                             |
| `npm run build`         | Compiles the TypeScript source code into JavaScript.                                           |
| `npm run lint`          | Runs the linter to check for code style and formatting issues.                                 |
| `npm run lint:fix`      | Runs the linter and fixes any code style and formatting issues.                                |
| `npm run lint:eslint`   | Runs the linter to check for code style and formatting issues.                                 |
| `npm run lint:prettier` | Runs the linter to check for code style and formatting issues.                                 |
| `npm run type:check`    | Checks the TypeScript types.                                                                   |
| `npm run prettier`      | Formats the codebase using Prettier.                                                           |
| `npm run ci`            | Runs all the checks (tests, linting, formatting) & build in a single command.                  |
| `npm run release`       | Releases a new version, make a pull request, and publish the package to NPM. Uses `Changesets` |
| `npm run changeset`     | Creates a new changeset.                                                                       |
| `npm run doc`           | Generates documentation using Typedoc.                                                         |

## Way to maintain package version and release

This template uses [Changesets](https://github.com/changesets/changesets) to maintain package version and release. To learn more about Changesets, check out the [official documentation](https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md).

- **STEP 1:** run `npm run changeset` to create a new changeset, update the version with change log.
- **STEP 2:** git commit and push the repository to GitHub.
- **STEP 3:** Go to the GitHub repository and check the `Pull requests` tab. You will see a new pull request is created by the github-actions bot.
- **STEP 4:** Merge the pull request to main branch.
- **STEP 5:** Go to the GitHub repository and check the `Actions` tab. You will see a new workflow is triggered by the merge.
- **STEP 6:** Check the workflow status and wait for it to complete.
- **STEP 7:** Go to the GitHub repository and check the `Releases` tab. You will see a new release is created by the github-actions bot.
- **STEP 8:** Check the release and verify the version and change log.

Now you have successfully released a new version of your package. You can install the package in your project using `npm install <package-name>`. To learn more about publishing packages to NPM, check out the [official documentation](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry).

## Necessary GitHub Repository Settings

To enable the CI/CD workflow, you need to enable the following settings in your GitHub repository:

- Navigate to `Settings > Branches > Branch protection rules`.

  - Set a name as the branch name pattern
  - Chech the `Require a pull request before merging` option
  - Check the `Require status checks to pass before merging` option
  - Check the `Require branches to be up to date before merging` option

- Navigate to `Settings > Actions > General`.

  - Check the `Allow all actions` option
  - Check the `Read and write permissions` option under `Workflow permissions` section

- Navigate to `Settings > Secrets and variables > Actions`.
  - Click the `New repository secret` button
  - Set `NPM_TOKEN` as the name of the secret
  - Set the value of the secret as your NPM token

## Get NPM Token

To get your NPM token, follow the steps below:

- Navigate to your NPM account settings page
- Click the `Access Tokens` button. Link should be following: `https://www.npmjs.com/settings/<your user name>/tokens`
- Click the `Generate New Token > Classic Token` button
- Set a name for the token
- Check the `Automation` option. This will help you to publish packages using CI/CD without any authentication issues

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Authors

- **[Arif Sardar](https://arif.thedev.id)** - _Initial work_

## Acknowledgments

- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Changesets](https://github.com/changesets/changesets)
- [Typedoc](https://typedoc.org/)
- [GitHub Actions](https://docs.github.com/en/actions)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## Support

If you have any questions or comments, please create an issue or contact me at the following email address: [arifsardar.private@gmail.com](mailto:arifsardar.private@gmail.com)
