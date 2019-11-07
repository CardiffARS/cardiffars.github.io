var startMessage = document.querySelector('.start-message');
var gainNode;
var audioCtx;

window.addEventListener('load', init);
window.addEventListener('mousedown', starttone);
window.addEventListener('mouseup', stoptone);
window.addEventListener('touchstart', starttone);
window.addEventListener('touchend', stoptone);

function starttone() {
  gainNode.connect(audioCtx.destination);
}

function stoptone() {
  gainNode.disconnect(audioCtx.destination);
}

function init() {
  document.body.removeChild(startMessage);

  // create web audio api context
  var AudioContext = window.AudioContext || window.webkitAudioContext;
  audioCtx = new AudioContext();

  // create Oscillator and gain node
  var oscillator = audioCtx.createOscillator();
  gainNode = audioCtx.createGain();
  
  gainNode.gain.value = 1;
  gainNode.gain.minValue = 1;
  gainNode.gain.maxValue = 1;

  // connect oscillator to gain node to speakers
  oscillator.connect(gainNode);

  // set options for the oscillator
  oscillator.frequency.value = 650; // value in cents
  oscillator.start(0);

  oscillator.onended = function() {
    console.log('Your tone has now stopped playing!');
  };
}

