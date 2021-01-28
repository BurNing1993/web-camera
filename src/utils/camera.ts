type CAMERA_TYPE = 'user' | 'environment'
const FACING_MODE = 'facingMode';



export function h5Camera() {
  document.addEventListener("plusready", onPlusReady, false);
  function onPlusReady() {
    //@ts-ignore
    var cmr = plus.camera.getCamera();
    console.log("Camera supperted image resolutions: " + cmr.supportedImageResolutions);
  }
}


export function webCamera(video: HTMLVideoElement, switchCamera = false) {
  if (!video) {
    return;
  }
  // { facingMode: 'user' } 
  let facingMode: CAMERA_TYPE = localStorage[FACING_MODE]
  if (!facingMode) {
    facingMode = 'environment';
  } else {
    if (switchCamera) {
      if (facingMode === 'environment') {
        facingMode = 'user'
      } else if (facingMode === 'user') {
        facingMode = 'environment'
      }
    }
  }
  localStorage[FACING_MODE] = facingMode;
  const constraints: MediaStreamConstraints = { audio: false, video: { facingMode } }
  navigator.mediaDevices.getUserMedia(constraints)
    .then(function (mediaStream) {
      video.srcObject = mediaStream;
      video.onloadedmetadata = function (_e) {
        video.play();
      };
    })
    .catch(function (err) {
      console.error(err);
    });
}


export function getCamera() {
  //@ts-ignore
  if (import.meta.env.VITE_PLATFORM === 'APP' && plus.runtime.appid) {
    return h5Camera;
  }
  return webCamera;
}
