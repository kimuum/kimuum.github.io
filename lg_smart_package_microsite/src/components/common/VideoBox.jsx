import React, { useEffect } from "react";
import styled from "styled-components";

// images
import BtnHomeHeroPlay from "assets/images/common/slide_control_play.svg";
import BtnHomeHeroStop from "assets/images/common/slide_control_stop.svg";

function VideoBox({
  className,
  src,
  id,
  controller = true,
  muted = true,
  loop = true,
}) {
  useEffect(() => {
    const thisParent = document.querySelector(`#${id}`);
    const thisVideo = thisParent.querySelector("video");
    const ctrlButton = thisParent.querySelector("button");
    if (thisVideo && ctrlButton) {
      ctrlButton.addEventListener("click", function () {
        if (ctrlButton.classList.contains("play")) {
          ctrlButton.classList.remove("play");
          ctrlButton.innerText = "재생";
          thisVideo.pause();
        } else {
          ctrlButton.classList.add("play");
          ctrlButton.innerText = "정지";
          thisVideo.play();
        }
      });
    }
  }, [id]);

  return (
    <VideoContainer className={className} id={id}>
      {controller === true && (
        <div className="video-buttons">
          <button type="button" className="video-ctrl-btn">
            재생
          </button>
        </div>
      )}
      <video
        width="100%"
        height="auto"
        muted={muted}
        loop={loop}
        playsInline={true}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </VideoContainer>
  );
}

const VideoContainer = styled.div`
  position: relative;
  & > .video-buttons {
    position: absolute;
    z-index: 1;
    left: 50%;
    bottom: 1.6rem;
    width: 100%;
    max-width: 141.2rem;
    margin: 0 auto;
    padding: 0 2rem;
    box-sizing: border-box;
    transform: translateX(-50%);
    & > .video-ctrl-btn {
      position: relative;
      z-index: 2;
      width: 2.4rem;
      height: 2.4rem;
      font-size: 1px;
      color: transparent;
      border: 2px solid #ffffff;
      border-radius: 5rem;
      background: url(${BtnHomeHeroPlay}) no-repeat center / 2.2rem auto;
      &.play {
        background: url(${BtnHomeHeroStop}) no-repeat center / 2.2rem auto;
      }
    }
  }
  /* PC */
  @media screen and (min-width: 769px) {
    & > .video-buttons {
      bottom: 2.4rem;
      & > .video-ctrl-btn {
        width: 4.8rem;
        height: 4.8rem;
        background: url(${BtnHomeHeroPlay}) no-repeat center / 4.6rem auto;
        &.play {
          background: url(${BtnHomeHeroStop}) no-repeat center / 4.6rem auto;
        }
      }
    }
  }
`;

export default VideoBox;
