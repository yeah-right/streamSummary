STREAMS SUMMARY
=====

## Explanation/Justification

### What it is
- A simple application that will monitor and record the stream summary numbers from twitch
      * url: `https://api.twitch.tv/kraken/streams/summary`
- The json object returned from the  api query includes:
      * channels: Number (the number of channels on twitch that are currently streaming live)
      * viewers: Number (number of current active viewers, i.e. people watching live streams)
- I will be displaying the recorded data with Chart.js, will get to this soon

### Goals?
- Hopefully learn something from the numbers recorded over a period of time.
- Validate the increasing presence and popularity of twitch (mostly for myself)
      * Is the total number of viewers increasing at a faster rate than channels?
      * Other information???

## Getting Started

### What ya need

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Ruby](https://www.ruby-lang.org) and then `gem install sass`
- [Grunt](http://gruntjs.com/) (`npm install --global grunt  grunt-cli`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod` in a separate shell


### Set up for development

1. `npm install` to install server dependencies.

2. `bower install` to install front-end dependencies.

3. `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. `grunt serve` will start the development server. It should automatically open the client in your browser when ready, and update upon changes to files. If updates fail to hold, restart it.


## buildin' and developin'

Run `grunt build` for building and `grunt serve` for preview.


## Testin yo code

Running `npm test` will run the unit tests with karma.

## TODO:
- instantiate a Chart.js module or put it into stats.
- finish database connection and enter data into mongod
      * ~~make sure that schema and connections are ok~~
      * figure out if you need to use .env
      * ~~add env to .gitignore~~
- mongo configuration options for the server in files:
      * `./server/config/environment/index.js`
      * `./server/config/environment/production.js`
      * `./server/config/environment/development.js`
      * and maybe in the test file?

## Things to learn
- Chart.js and how it accesses data from the backend
- exactly how these front end angular components are compiled so I can use it like a react component/class      
