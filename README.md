# SimpleBlog

## Setup environment

- Install [Node.js](https://nodejs.org/en/)
- Install [Docker](https://docs.docker.com/get-docker/)
- Enable Kubernetes in Docker
- Install [skaffold](https://skaffold.dev/docs/install/#standalone-binary)

## Start

- open the hosts file and insert `127.0.0.1 posts.com`
- `skaffold dev`
- open `posts.com` in the browser

## Description
- A mini microservice project using React and Node.js
- 6 microservices are contained:
  - client: Use React to display the front end pages which are beautified by bootstrap
  - posts: Provide API to create posts
  - comments: Provide API to create comments
  - query: Provide API to list all the posts and comments
  - moderation: Check the words in comments and ban the comments that contain "orange"
  - event-but: Basically implement an event-bus and deeply understand the `Asynchronous communication` between services
- Each service can work independently with independent data storage, one service breaking down will not affect other
- Use Kubernetes to manage the docker containers
- Use Skaffold to handle the workflow for building, pushing, and deploying the proeject

## Screenshot

<img width="1319" alt="image" src="https://user-images.githubusercontent.com/38137877/158040839-eabec1a2-70bb-4f59-bda0-5a3cf5aa514a.png">
