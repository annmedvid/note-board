# Note Board

This app allows to display/make/edit/delete notes.

![app preview](https://github.com/annmedvid/note-board/blob/master/docs/note-board-preview.gif)

Created with such technologies:
+ [React](https://github.com/facebook/react) as a core of building UI 
+ [Redux](https://github.com/reactjs/redux) for better performance
+ [React Router v4](https://github.com/ReactTraining/react-router) for emulation of multi-page app
+ [Redux Saga](https://github.com/redux-saga/redux-saga) for asynchronous effects
+ [axios](https://github.com/mzabriskie/axios) for making requests and data fetching
+ [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader) for optimizing work with icons
+ [Create React App](https://github.com/facebookincubator/create-react-app) + [custom-react-scripts](https://github.com/kitze/custom-react-scripts) for generating project with minimum of the configuration

For server-side is used emulation of API with [JSON Server](https://github.com/typicode/json-server).

## To watch the project:

1. Download this repo
2. Go to `note-board` directory in terminal
1. Install all needed dependencies
```sh
npm install
```
2. Launch server with fake API
```sh
npm run dev-server
```
3. Open new terminal in the same directory and launch the project
```sh
npm run start
```
4. Open [http://localhost:3000/](http://localhost:3000/) to see this app.
