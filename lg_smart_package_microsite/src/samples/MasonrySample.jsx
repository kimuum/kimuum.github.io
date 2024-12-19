import React, { Component } from "react";
import styled from "styled-components";
import { Masonry } from "react-masonry";

// data
import { masonryCardData } from "samples/data/data_masonry.js";

class MasonrySample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  render() {
    const { windowWidth } = this.state;
    const masonryCards = masonryCardData.map((card, index) => (
      <ThumbnailContainer
        key={index.toString()}
        style={{
          width: windowWidth >= 361 ? card.width : "100%",
          height: card.height,
        }}
      >
        {card.content}
      </ThumbnailContainer>
    ));

    return (
      <>
        <Masonry>{masonryCards}</Masonry>
      </>
    );
  }
}

const ThumbnailContainer = styled.div`
  background-color: #ccc;
  border: 1px solid white;
  border-radius: 10px;
  box-sizing: border-box;
  transition: all 0.5s;
`;

export default MasonrySample;
