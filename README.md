# react-redux-webpack-starter-kit
A pre-configured react, redux, webpacked starter project

## Installation
```bash
$ git clone git@github.com:rgehan/react-redux-webpack-starter-kit.git
$ cd react-redux-webpack-starter-kit
$ npm install # or yarn install
```

## Usage
In order to launch the `webpack-dev-server`, simply run the `start` script.
```bash
npm start # or yarn start
```

In order to build the bundle, run the `build` script.
```bash
npm run build # or yarn build
```

## File Structure
```
.
├── dist                # Build directory
├── public              # Dev-server root folder
├── src
│   └── js
│       ├── components  # React components (and their style)
│       ├── containers  # React containers (and their style)
│       ├── redux       # Reducers, action creators, redux related constants
│       └── index.js    # Entry point
│
└── webpack.config.js  # Webpack configuration file
```
