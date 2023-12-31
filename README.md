[![Lint, Test and Build](https://github.com/iassia/react-playground/actions/workflows/test-build.yml/badge.svg?branch=main)](https://github.com/iassia/react-playground/actions/workflows/test-build.yml)
[![codecov](https://codecov.io/gh/iassia/react-playground/graph/badge.svg?token=7DGTYGKFVT)](https://codecov.io/gh/iassia/react-playground)
# Playground Repository

This project serves as a validation of the chosen tech stack, configurations, and best practices. It's a simple setup that utilizes modern tools and libraries to create a seamless development experience.

## Tech Stack

- [React](https://reactjs.org/): JavaScript library for building user interfaces.
- [Vite](https://vitejs.dev/): Build tool and development server that optimizes the frontend development experience.
- [SWC](https://swc.rs/): JavaScript/TypeScript compiler replacing Babel.
- [Storybook](https://storybook.js.org/): UI component development environment for testing and showcasing components in isolation.
- [Styled Components](https://styled-components.com/): Library for styling React components with tagged template literals.

## Additional Choices

- Testing Framework: [Vitest](https://vitejs.dev/guide/features.html#testing) (using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)) for unit and integration testing.
- Contribution Guidelines: Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages.

## Project Setup

1. Clone this repository.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

This will start the Vite development server.

## Contributing

1. Fork this repository.
2. Create a new branch for your feature/bugfix: `git checkout -b feature/xyz`.
3. Make your changes and commit using the [Conventional Commits](https://www.conventionalcommits.org/) format.
4. Push your branch to your forked repository.
5. Create a pull request to the main repository's `main` branch.
