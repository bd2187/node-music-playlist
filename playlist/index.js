const fs = require('fs');
const { addSong } = require('./addSong');
const { removeSong } = require('./removeSong');
const { playSong } = require('./playSong');
const { listAllSongs } = require('./listAllSongs');

module.exports = {
  addSong,
  removeSong,
  playSong,
  listAllSongs
};
