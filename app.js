const fs = require('fs');
const argv = require('yargs').argv;

const commandConstants = require('./constants');
const { add, remove, play, list } = commandConstants;

const userCommand = argv._[0];

switch (userCommand) {
  case add:
    console.log('add song');
    break;
  case remove:
    console.log('remove song');
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
