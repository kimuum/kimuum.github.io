import { useState, useEffect } from "react";

function ResizeMobile() {
  const [isResizeMobile, setResizeMobile] = useState(false);

  function handleResizeMobile() {
    const mobileCheck = window.innerWidth <= 768;
    setResizeMobile(mobileCheck);
  }
  useEffect(() => {
    handleResizeMobile();
    window.addEventListener("resize", handleResizeMobile);
  }, []);

  return isResizeMobile;
}

export default ResizeMobile;
