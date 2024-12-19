import { useState, useEffect } from "react";

const HandleChangeText = ({
  isStep,
  before,
  after,
  speed,
  delay,
  beforeClass,
  afterClass,
}) => {
  const [isClass, setClass] = useState(beforeClass);
  const [isText, setText] = useState(before);

  useEffect(() => {
    if (isStep) {
      const changeText = () => {
        setTimeout(() => {
          setClass(afterClass);
          setText(after);
        }, speed);
      };
      setTimeout(() => changeText(), delay);
    } else {
      setClass(beforeClass);
      setText(before);
    }
  }, [isStep, before, after]);

  return <span className={isClass}>{isText}</span>;
};

export default HandleChangeText;
