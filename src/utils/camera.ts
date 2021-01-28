export function h5Camera() { }


export function webCamera(video: HTMLVideoElement) {
  if (!video) {
    return;
  }
  const constraints: MediaStreamConstraints = { audio: false, video: { facingMode: 'user' } }
  navigator.mediaDevices.getUserMedia(constraints)
    .then(function (mediaStream) {
      video.srcObject = mediaStream;
      video.onloadedmetadata = function (e) {
        video.play();
      };
    })
    .catch(function (err) {
      console.error(err);
    });
}
