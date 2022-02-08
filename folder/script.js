function pain(){
  audioObj = new Audio(Almightypush.mp3);
myAudioElement.addEventListener("canplaythrough", event => {
    /* the audio is now playable; play it if permissions allow */
    myAudioElement.play();
  });
}