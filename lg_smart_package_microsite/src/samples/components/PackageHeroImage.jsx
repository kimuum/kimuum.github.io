import styled from "styled-components";

// common
import ImageBox from "components/common/ImageBox";

function PackageHeroImage({ className = "", src, title, subTitle }) {
  return (
    <PackageHeroContainer className={className}>
      <div className="title-container">
        <h2 className="title">{title}</h2>
        <p className="sub-title">{subTitle}</p>
      </div>
      <ImageBox src={`${src}`} className="title-image-box" />
    </PackageHeroContainer>
  );
}

const PackageHeroContainer = styled.div`
  overflow: hidden;
  position: relative;
  .title-container {
    position: relative;
    z-index: 2;
    padding: 5rem 0 8rem;
  }
  .title-image-box {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
  }
`;

export default PackageHeroImage;
