# My Pet Project GitHub

## Quick start

1. Clone this repo using:
  ```shell
  $ git clone git@github.com:MXCHSTKV/
  GitHub_Explorer.git
  ```

2. To install dependencies and clean the git repo run:

  ```shell
  $ yarn install
  ```

  *We recommend using `yarn` for installing packages, but you can use `npm` instead*:

  ```shell
  $ npm install
  ```
3. Create first build

  ```shell
  $ yarn run build:prod
  ```
4. Copy .env.example file to .env and make the necessary changes there

5. Run project in Dev mode

  ```shell
  $ yarn run dev
  ```

## Features

* Redux
* Modern ES6 for using template strings, JSX syntax, object destructuring arrow functions and more
* Babel for old browser support
* SASS/SCSS: make styles greate again, with no tears
* React Router
* Hot Module Replacement for comfortable development

## Command Line Commands

#### Installation

```Shell
yarn install
```
Installs the dependencies.

#### Development

```Shell
yarn run dev
```

Starts the development server running on `http://localhost:8080` using the webpack.development.config.js with Hot Module Replacement (HMR) (Changes in the application code will be hot-reloaded)

```Shell
yarn run dev:server
```

Starts the development server and makes your application accessible at http://localhost:8080.

```Shell
yarn run clean
```
Removes a directory "dist" from a project

#### Building

```Shell
yarn build:prod
```

Prepares your app for deployment to production environment (using the webpack.production.frontend.config.js) (does not run tests). Optimizes and minifies all files, piping them to the `dist` folder.
