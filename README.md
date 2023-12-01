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

| Script               | Description                                                                                    |
| -------------------- | ---------------------------------------------------------------------------------------------- |
| `npm run test`       | Runs the test suite. In this template, the test suite is configured with Vitetest.             |
| `npm run test:watch` | Runs the test suite in watch mode.                                                             |
| `npm run build`      | Compiles the TypeScript source code into JavaScript.                                           |
| `npm run lint`       | Runs the linter to check for code style and formatting issues.                                 |
| `npm run format`     | Formats the codebase using Prettier.                                                           |
| `npm run ci`         | Runs all the checks (tests, linting, formatting) & build in a single command.                  |
| `npm run release`    | Releases a new version, make a pull request, and publish the package to NPM. Uses `Changesets` |

## Way to maintain package version and release

This template uses [Changesets](https://github.com/changesets/changesets) to maintain package version and release. To learn more about Changesets, check out the [official documentation](https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md).
