import styled from "styled-components";

// data
import { packageThemeData } from "samples/data/data_package_theme";

function PackageTitle({
  className = "",
  label = "",
  title = "",
  content = "",
  account = "",
}) {
  const getLabelColor = (label) => packageThemeData[label] || "";

  return (
    <PackageContainer className={className}>
      {label !== "" && (
        <span className={`package-label ${getLabelColor(label).color}`}>
          {getLabelColor(label).title}
        </span>
      )}
      {title !== "" && <h2 className="package-title">{title}</h2>}
      {content !== "" && <div className="package-text">{content}</div>}
      {account !== "" && <div className="package-account">{account}</div>}
    </PackageContainer>
  );
}

const PackageContainer = styled.div`
  .package {
    &-label {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      height: 2rem;
      margin-bottom: 1rem;
      padding: 0 0.6rem;
      border-radius: 0.4rem;
      font-size: 1.1rem;
      font-weight: 700;
      line-height: 1;
      &.green {
        color: #008282;
        background-color: #e5f2f2;
      }
    }
    &-title {
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.25;
      color: #0f0f0f;
    }
    &-text {
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 1.4;
      color: #333333;
    }
    &-account {
      margin-top: 0.5rem;
      font-size: 1.8rem;
      font-weight: 700;
      color: #0f0f0f;
    }
  }
`;

export default PackageTitle;
