import { useState, useEffect } from "react";

const HandleCountingUp = ({ isStep, min, max, speed, delay, unit }) => {
  const [isNumber, setNumber] = useState(min);

  useEffect(() => {
    if (isStep) {
      const startNumber = min;
      const endNumber = max;
      const countup = (currentNumber) => {
        if (currentNumber <= endNumber) {
          setNumber(currentNumber);
          setTimeout(() => countup(currentNumber + 1), speed);
        }
      };
      setTimeout(() => countup(startNumber), delay);
    } else {
      setNumber(min);
    }
  }, [isStep, min, max]);

  return isNumber + unit;
};

export default HandleCountingUp;
