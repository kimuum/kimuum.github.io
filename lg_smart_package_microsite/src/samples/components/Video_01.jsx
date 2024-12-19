import React, { useState, useEffect } from "react";
import styled from "styled-components";

// components
import ButtonSwitch from "samples/components/ButtonSwitch";
// modules
import VideoOptions from "samples/components/VideoOptions";

function Video01() {
  const [isPlay, setPlay] = useState(false); //첫번째 영상 player
  const [isPlay2, setPlay2] = useState(false); //두번째 영상 player
  const [isShow, setShow] = useState(false); //영상 교체

  //영상 play event
  const togglePlay = (e) => {
    setPlay((prev) => !prev);
  };
  const togglePlay2 = (e) => {
    setPlay2((prev) => !prev);
  };

  useEffect(() => {
    //첫번째 영상 종료 후 초기화, 두번째 영상 노출
    const video1 = document.querySelector(`#video1`);
    if (isPlay && video1) {
      video1.onended = function () {
        setPlay(false);
        setTimeout(() => {
          setShow(true);
        }, 1000);
      };
    }

    //두번째 영상 종료 후 상태 초기화
    const video2 = document.querySelector(`#video2`);
    if (isPlay2 && video2) {
      video2.onended = function () {
        setPlay2(false);
      };
    }
  }, [isPlay, isPlay2]);

  return (
    <VideoWrapper>
      {isShow === false && (
        <>
          <VideoContainer className="video-container-01">
            <VideoOptions
              src={require("../../assets/video/sample_video_01.mp4")}
              id="video1"
              togglePlay={togglePlay}
              isState={isPlay}
            />
          </VideoContainer>
          <ButtonSwitch
            className={!isPlay ? "btn-touch" : "btn-touch on"}
            onClick={togglePlay}
            content={isPlay ? "멈춤" : "재생"}
          />
        </>
      )}
      {isShow === true && (
        <>
          <VideoContainer className="video-container-02">
            <VideoOptions
              src={require("../../assets/video/sample_video_02.mp4")}
              id="video2"
              togglePlay={togglePlay2}
              isState={isPlay2}
            />
          </VideoContainer>
          <ButtonSwitch
            className={!isPlay2 ? "btn-touch" : "btn-touch on"}
            onClick={togglePlay2}
            content={isPlay2 ? "멈춤" : "재생"}
          />
        </>
      )}
    </VideoWrapper>
  );
}
const VideoWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;
const VideoContainer = styled.div``;

export default Video01;
