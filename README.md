## Weather for you!

<p align="center">
  <a href="#built-with">Built With</a> •
  <a href="#creators">Creators</a>
</p>


### [Link to live site hosted on Heroku.com](https://weather-for-you-app.herokuapp.com/)

## Overview
Weather for you is a basic React app that is built with Redux. We use the [Weather Underground API](https://www.wunderground.com/weather/api/) and get the weather for a city with either a state or county code such as "Seattle, WA" or "Paris, FR".  We give you a 3 day weather forcast along with a AM and PM of each day posted above the day main forcast.

### Dependencies
`package.json`
```
  "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-plugin-transform-object-rest-spread": "^6.26.0",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    "clean-webpack-plugin": "^0.1.18",
    "css-loader": "^0.28.10",
    "dotenv": "^5.0.0",
    "enzyme": "^3.3.0",
    "enzyme-adapter-react-16": "^1.1.1",
    "extract-text-webpack-plugin": "^3.0.2",
    "file-loader": "^1.1.9",
    "html-webpack-plugin": "^2.30.1",
    "jest": "^22.4.2",
    "json-loader": "^0.5.7",
    "node-sass": "^4.7.2",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-redux": "^5.0.7",
    "react-router-dom": "^4.2.2",
    "redux": "^3.7.2",
    "sass-loader": "^6.0.6",
    "superagent": "^3.8.2",
    "uglifyjs-webpack-plugin": "^1.2.1",
    "url-loader": "^0.6.2",
    "webpack": "^3.11.0",
    "webpack-dev-server": "^2.11.1"
  },
  "dependencies": {
    "cors": "^2.8.4",
    "express": "^4.16.2",
    "fuse-js-latest": "^3.1.0"
  }
```

`.env`
```
CDN_URL=/
NODE_ENV=dev
API_URL='http://api.wunderground.com/api/bc1b9e9eb5c3020a/forecast/q'
API_KEY='your own api key'
```


## Built With
* [Javascript](https://www.javascript.com/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Webpack](https://webpack.js.org/)
* [npm](https://www.npmjs.com/)
* [Jest](https://www.npmjs.com/package/jest)
* [Cors](https://www.npmjs.com/package/cors)
* [Express](https://www.npmjs.com/package/express)
* [Superagent](https://www.npmjs.com/package/superagent)

## Creators
The Creator of Weather for you!

* [Heath Smith](https://github.com/Iamheathsmith)
