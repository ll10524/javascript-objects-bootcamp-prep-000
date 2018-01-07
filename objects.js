var playlist = {
  artistName: 'Happy New Year'
};

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign(playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
}