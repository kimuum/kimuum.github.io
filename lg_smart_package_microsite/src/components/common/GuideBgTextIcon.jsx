import styled from "styled-components";

const GuideBgTextIcon = ({ className = "", children }) => {
  return (
    <GuideBgTextIconBox className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.99805 16.5C13.1402 16.5 16.498 13.1421 16.498 9C16.498 4.85786 13.1402 1.5 8.99805 1.5C4.85591 1.5 1.49805 4.85786 1.49805 9C1.49805 13.1421 4.85591 16.5 8.99805 16.5ZM9 5.25025C9.41408 5.25025 9.74975 5.58592 9.74975 6V9.00049C9.74975 9.41457 9.41408 9.75025 9 9.75025C8.58592 9.75025 8.25025 9.41457 8.25025 9.00049V6C8.25025 5.58592 8.58592 5.25025 9 5.25025ZM9 11.2542C8.58592 11.2542 8.25025 11.5898 8.25025 12.0039C8.25025 12.418 8.58592 12.7537 9 12.7537H9.00792C9.42199 12.7537 9.75767 12.418 9.75767 12.0039C9.75767 11.5898 9.42199 11.2542 9.00792 11.2542H9Z"
          fill="#0F0F0F"
        />
      </svg>
      {children}
    </GuideBgTextIconBox>
  );
};

const GuideBgTextIconBox = styled.div`
  position: relative;
  padding: 1rem 1.2rem 1rem 3.4rem;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.5;
  color: #0f0f0f;
  background: #dddddd;
  border-radius: 6px;
  & > svg {
    position: absolute;
    z-index: 1;
    top: 1.1rem;
    left: 1.4rem;
  }

  /* PC */
  @media screen and (min-width: 769px) {
    padding: 1.2rem 1.4rem 1.2rem 3.8rem;
    font-size: 1.4rem;
    & > svg {
      top: 1.3rem;
      left: 1.6rem;
    }
  }
`;

export default GuideBgTextIcon;
