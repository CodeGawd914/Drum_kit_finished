window.addEventListener("keydown",playSound)

//seperate the function so you can play different sounds based on other events.
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)// querySelector finds the tag with the key that was pressedand audio
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
  if(!audio) return;
  audio.currentTime = 0 // starts play from the beginning
  audio.play()
  key.classList.add("playing")
  /*key.classList.remove("playing")
  key.classList.toggle("playing")*/
}
  //
  // console.log(audio);
  // console.log(key);
  function removeTransition(e) {
    if(e.propertyName !== 'transform')return; //allows only transform key to be passed in function
    this.classList.remove("playing")
    // console.log(e,"in here");
  }
  const keys = document.querySelectorAll('.key')
  keys.forEach(key => key.addEventListener('transitionend',removeTransition))
  console.log(keys);
