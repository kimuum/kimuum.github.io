import { useState, useEffect } from "react";

const HandleCountingDown = ({ isStep, min, max, speed, delay, unit }) => {
  const [isNumber, setNumber] = useState(max);

  useEffect(() => {
    if (isStep) {
      const startNumber = max;
      const endNumber = min;
      const countdown = (currentNumber) => {
        if (currentNumber >= endNumber) {
          setNumber(currentNumber);
          setTimeout(() => countdown(currentNumber - 1), speed);
        }
      };
      setTimeout(() => countdown(startNumber), delay);
    } else {
      setNumber(max);
    }
  }, [isStep, min, max]);

  return isNumber + unit;
};

export default HandleCountingDown;
