## README

I'm trying to develop a react app w/ hooks and an express server side by side

install with `yarn install`
to run locally in dev mode `yarn run dev`

the app currently supports:

- signing in as long as you enter password: password
- protected routes (both client and server side) based on whether or not you're
  signed in

I don't remember how the databases got set up, you might need to create some
databases locally for yourself. Check out `server/sequelize/config.yml`.

Currently not configured to be deployed or anything

(This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).)

## Hooks

checkout out the following files in the `src` directory to see examples of React
hooks

- `Router.js`
- `pages/HomePage.js`
- `pages/LoginPage.js`
- `pages/LoginResponse.js`


## TODO

- try to add react server side rendering
- return user data on login
- add sign up flow
- add password recovery paths
- add ORM and db
