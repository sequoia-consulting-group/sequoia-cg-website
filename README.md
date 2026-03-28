# Sequoia Consulting Group Website

The official website for [Sequoia Consulting Group](https://www.sequoiaconsultgroup.com), built with React and TypeScript.

## Tech Stack

- **React 19** with TypeScript
- **React Router** for navigation
- **i18next** for internationalisation
- **tsParticles** for visual effects
- **EmailJS** for contact form
- **Firebase** for hosting
- **ESLint** with `@typescript-eslint` for linting

## Prerequisites

- **Node.js 20+** — use [nvm](https://github.com/nvm-sh/nvm) to manage versions
- **Yarn**

```sh
nvm install 20
nvm use 20
```

## Getting Started

Install dependencies:

```sh
yarn install
```

## Available Scripts

### `yarn start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000). The page reloads on file changes.

### `yarn build`

Builds the app for production into the `build/` folder. Bundles React in production mode and optimises for best performance.

### `yarn test`

Launches the test runner in interactive watch mode.

### `yarn lint`

Runs ESLint across all `.ts`, `.tsx`, `.js`, and `.jsx` files in `src/`.

### `yarn lint:fix`

Runs ESLint and automatically fixes any fixable issues.

### `yarn eject`

**Note: this is a one-way operation. Once you eject, you can't go back.**

Ejects from Create React App, giving full control over Webpack, Babel, and ESLint configuration.

## Deployment

The site is deployed to Firebase Hosting. To deploy:

```sh
yarn build
firebase deploy
```
