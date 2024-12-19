import React, { useEffect } from "react";

function VideoOptions({
  isState,
  src,
  muted = true,
  id,
  togglePlay = () => {},
}) {
  useEffect(() => {
    const thisVideo = document.querySelector(`#${id}`);
    if (isState && thisVideo) {
      thisVideo.play();
    } else {
      thisVideo.pause();
    }
  }, [isState, id, togglePlay]);

  return (
    <video width="100%" height="auto" muted={muted} id={id}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoOptions;
