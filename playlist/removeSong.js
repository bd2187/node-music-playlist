const {
  isIncomplete,
  incompleteMessage,
  fetchPlaylist,
  savePlaylist
} = require('./helpers');

function removeSong(title, artist) {
  if (isIncomplete(title, artist)) {
    console.log(incompleteMessage);
    return incompleteMessage;
  }

  const successMessage = `${title} by ${artist} was successfully deleted`;
  const failureMessage = `Sorry, we couldn't find ${title} by ${artist}`;

  var playlist = fetchPlaylist();

  var filteredPlaylist = playlist.filter(
    song => song.title !== title || song.artist !== artist
  );

  if (playlist.length !== filteredPlaylist.length) {
    savePlaylist(filteredPlaylist);
    console.log(successMessage);
    return successMessage;
  } else {
    console.log(failureMessage);
    return failureMessage;
  }
}

module.exports = { removeSong };
