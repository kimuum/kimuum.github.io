import React, { useState, useEffect } from "react";
import styled from "styled-components";

// common
import ImageBox from "components/common/ImageBox";

// images
import BtnHomeHeroPlay from "assets/images/common/slide_control_play.svg";
import BtnHomeHeroStop from "assets/images/common/slide_control_stop.svg";

function HomeHeroRollingImageBox({ srcMiddleName }) {
  const [isRollingIndx, setRollingIndx] = useState(1);
  const [isRollingPlay, setRollingPlay] = useState(true);

  let intervalRolling;
  const handleRolling = () => {
    let index = isRollingIndx;
    intervalRolling = setInterval(() => {
      index++;
      if (index > 3) {
        index = 1;
      }
      setRollingIndx(index);
    }, 1600);
  };

  useEffect(() => {
    if (isRollingPlay) {
      handleRolling();
    }

    return () => {
      if (intervalRolling) {
        clearInterval(intervalRolling);
      }
    };
  }, [isRollingPlay, isRollingIndx]);

  return (
    <RollingImageBox>
      <div className="video-buttons">
        <button
          type="button"
          className={`video-ctrl-btn ${isRollingPlay ? "play" : ""}`.trim()}
          onClick={() => {
            setRollingPlay((prev) => !prev);
          }}
        >
          {isRollingPlay ? "멈춤" : "재생"}
        </button>
      </div>
      <ImageBox
        src={require(`assets/images/home/${srcMiddleName}_mo0${isRollingIndx}.jpg`)}
        alt=""
      />
    </RollingImageBox>
  );
}

const RollingImageBox = styled.div`
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
`;

export default HomeHeroRollingImageBox;
