function AudioPlay(name = new String()) {
  audioObj = new Audio(name);
  audioObj.id = "playingAudio";
  $audiobtn = document.getElementById("audiobtn");
  audioObj.addEventListener("canplaythrough", function(event) {
    /* the audio is now playable; play it if permissions allow */
    this.play();
  });
  $audiobtn.onclick = function() {};
}
