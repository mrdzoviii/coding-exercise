# coding-excercise

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Local Development

Run `npm run start` script to start `Webpack Development Server` and open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build

Run `npm run build` script to create a production build.

The build is located in `root/build` folder.

### Environment Variables

An example of required variables is located in `root/.env.example` file.

More details [here](https://create-react-app.dev/docs/adding-custom-environment-variables/#adding-development-environment-variables-in-env).

## Lint

Project is using `eslint` as a linting tool, with `airbnb` rule set, and `prettier` for code formatting.

Run `npm run lint` script to lint the application. Linting in only done on `root/src` folder.

Run `npm run lint:fix` script to automatically apply linting recommendations.

## Git

Project is using `husky` to validate `precommit` actions.

Also it validates commit messages using `conventional commits`.
