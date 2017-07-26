
function WebRTCHelper() {
  this.constraints = window.constraints = {
    audio: false,
    video: true
  };
}

WebRTCHelper.prototype.handleSuccess = function handleSuccess(stream) {
  const videoTracks = stream.getVideoTracks();
  console.log('Got stream with constraints:', constraints);
  console.log('Using video device: ' + videoTracks[0].label);
  stream.oninactive = function() {
    console.log('Stream inactive');
  };
  window.stream = stream; // make variable available to browser console
  let video = document.querySelector('.video');
  video.srcObject = stream;
}

WebRTCHelper.prototype.handleError = function handleError(error) {
    console.log('navigator.getUserMedia error: ', error);
}

WebRTCHelper.prototype.getUserMedia = function getUserMedia() {
  navigator.mediaDevices.getUserMedia(this.constraints)
  .then(this.handleSuccess)
  .catch(this.handleError);
}

const webRTCHelper = new WebRTCHelper();

window.addEventListener('load', function load(event){
  webRTCHelper.getUserMedia();
}, false);
