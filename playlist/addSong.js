const {
  isIncomplete,
  incompleteMessage,
  fetchPlaylist,
  savePlaylist
} = require('./helpers');

function addSong(title, artist) {
  if (isIncomplete(title, artist)) {
    console.log(incompleteMessage);
    return incompleteMessage;
  }

  var playlist = fetchPlaylist();
  var song = { title, artist };
  playlist.push(song);

  return savePlaylist(playlist);
}

module.exports = {
  addSong
};
