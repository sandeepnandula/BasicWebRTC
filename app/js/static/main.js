
function WebRTCHelper() {
  this.constraints = window.constraints = {
    audio: false,
    video: true
  };
 this.stream = null;
 this.qvgaConstraints = { video: {width: {exact: 320}, height: {exact: 240}}};

this.vgaConstraints = { video: {width: {exact: 640}, height: {exact: 480}}};

this.hdConstraints = { video: {width: {exact: 1280}, height: {exact: 720}}};
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

WebRTCHelper.prototype.addEventListener = function addEventListener() {
  qVgaButton = document.querySelector('.qVga');
  qVgaButton.addEventListener('click', () => this.changeVideoResolution(this.qvgaConstraints));
  VgaButton = document.querySelector('.Vga');
  VgaButton.addEventListener('click', () => this.changeVideoResolution(this.vgaConstraints));
  hdButton = document.querySelector('.hd');
  hdButton.addEventListener('click', () => this.changeVideoResolution(this.hdConstraints));
}

WebRTCHelper.prototype.changeVideoResolution = function changeVideoResolution(constraints) {
  this.constraints = constraints;
  if (stream) {
    stream.getTracks().forEach(function(track) {
      track.stop();
  });
}
  this.getUserMedia();
}

const webRTCHelper = new WebRTCHelper();

window.addEventListener('load', function load(event){
  webRTCHelper.getUserMedia();
  webRTCHelper.addEventListener();
}, false);
