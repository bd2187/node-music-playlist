const fs = require('fs');
const argv = require('yargs').argv;

const methods = require('./playlist');
const { addSong, removeSong } = methods;
const commandConstants = require('./constants');
const { add, remove, play, list } = commandConstants;

const userCommand = argv._[0];

switch (userCommand) {
  case add:
    addSong(argv.title, argv.artist);
    break;
  case remove:
    removeSong(argv.title, argv.artist);
    break;
  case play:
    console.log('play song');
    break;
  case list:
    console.log('list all songs');
    break;
  default:
    console.log('Sorry, command not recognized');
}
