import styled from "styled-components";

function ButtonSwitch({ className, id, content, onClick }) {
  return (
    <Button type="button" className={className} onClick={onClick} id={id}>
      {content}
    </Button>
  );
}
const Button = styled.button`
  position: relative;
  height: 60px;
  padding: 0 40px 0 20px;
  background-color: white;
  border-radius: 40px;
  font-size: 20px;
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    right: 15px;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    border-radius: 10px;
    background-color: #eee;
    transition: all 0.5s;
  }
  /* 버튼 활성화 */
  &.on {
    &:after {
      background-color: #21b465;
    }
  }
`;
export default ButtonSwitch;
