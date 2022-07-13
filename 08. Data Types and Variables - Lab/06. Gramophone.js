function gramophone(albumName, bandName, songName) {
  const oneRotation = 2.5;
  const songRotation = Math.ceil(
    (albumName.length * bandName.length * songName.length) / 2 / oneRotation
  );

  console.log(`The plate was rotated ${songRotation} times.`);
}
gramophone("Black Sabbath", "Paranoid", "War Pigs");
gramophone("Rammstein", "Sehnsucht", "Engel");
