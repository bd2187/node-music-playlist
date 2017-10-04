const fs = require('fs');
const argv = require('yargs').argv;

const methods = require('./playlist');
const { addSong, removeSong, playSong, listAllSongs } = methods;
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
    playSong(argv.title, argv.artist);
    break;
  case list:
    listAllSongs();
    break;
  default:
    console.log('Sorry, command not recognized');
}
