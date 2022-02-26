# SimpleBlog

## Setup environment

1. Setup Create-React-App client
   npx create-react-app client
2. Make directories of posts and comments then init them
   - npm init -y
   - npm install express cors axios nodemon

## posts & comments service creation
- create `index.js`
- configure package.json with `"start": "nodemon index.js"`
- npm start
- test by postman

## React Setup

- client: npm install axios
- client: npm start

## Import Bootstrap
- just link no script

## Configure the server
- cannot post from one port to another
- npm install cors in both posts and comments
- npm start

## Write 4 js file
- `PostCreate.js`
- `PostList.js`
- `CommentCreate.js`
- `CommentList.js`

## event-bus
- npm init -y
- npm install express nodemon axios 
- create `index.js`
- configure package.json with `"start": "nodemon index.js"`
- npm start

## emit events
- emit post creation and comment creation event

## receive events
- handle the events received in post creation and comment creation

