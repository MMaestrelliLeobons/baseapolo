[![Build Status](https://travis-ci.org/Hguimaraes/baseapolo.svg?branch=master)](https://travis-ci.org/Hguimaraes/baseapolo)

# <img src="/public/assets/imgs/thelyre_apollo.png" width="64" height="64"> Base Apolo

BaseApolo is an academic opportunity manager at the Federal University of Rio de Janeiro ([UFRJ](https://www.ufrj.br/)). This web app helps students and professors of UFRJ to disclose and search for academic opportunities such as undergraduate research, social and extension projects, college teams and more. The app was developed using the [MEAN](http://www.mean.io) stack wich is an easy starting point with [MongoDB](https://www.mongodb.org/), [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/), and [AngularJS](https://angularjs.org/) based applications.

## Dependencies
### Linux
* *Node.js* - <a href="http://nodejs.org/download/">Download</a> and Install Node.js.
* *MongoDB* - <a href="https://www.mongodb.org/downloads">Download</a> and Install mongodb.

If you're using ubuntu, this is the preferred repository to use...

```bash
$ curl -sL https://deb.nodesource.com/setup | sudo bash -
$ sudo apt-get update
$ sudo apt-get install git
$ sudo apt-get install nodejs
```
## Installation

### Install the App

```bash
$ git clone https://github.com/Hguimaraes/baseapolo
$ cd baseapolo && npm install
```

### Invoke node with a task manager
To run the web server you just need: 

```bash
$ gulp
```
Then, open a browser and go to:
```bash
http://localhost:3000
```

## Technologies

### Additional Tools
* <a href="http://mongoosejs.com/">Mongoose</a> - The mongodb node.js driver in charge of providing elegant mongodb object modeling for node.js
* <a href="http://passportjs.org/">Passport</a> - An authentication middleware for Node.js which supports authentication using a username and password, Facebook, Twitter, and more.
* <a href="http://getbootstrap.com/">Twitter Bootstrap</a> - The most popular HTML, CSS, and JS framework for developing responsive, mobile first projects.
* <a href="http://angular-ui.github.io/bootstrap/">UI Bootstrap</a> - Bootstrap components written in pure AngularJS

### Core Packages
