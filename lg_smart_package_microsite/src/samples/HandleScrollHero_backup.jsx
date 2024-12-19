import { useEffect } from "react";

function HandleScrollHero({ fixedBoxRef, standardRef, fixedItem }) {
  const handleScrollFixed = () => {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const fixedContainer = fixedBoxRef.current; // 고정 할 영역
    const fixedTop = fixedContainer.offsetTop; //고정 할 영역 TOP 값 : 88
    const standardContainer = standardRef.current; // 고정 되는 기준 영역
    const standardTop = standardContainer.offsetTop; // 고정 되는 기준 영역 TOP 값
    const fixedArea = fixedContainer.querySelector(fixedItem);
    const fixedItemOriginalH = fixedArea.clientHeight; // 고정 전 영역 높이값
    const cancelFixedTop =
      standardContainer.offsetHeight - (fixedItemOriginalH + standardTop); // 고정 해제 되는 값
    const fixedContainerW = fixedContainer.clientWidth;

    const scrollActvie = (fixedTop) => {
      // 스크롤 시 fixed 클래스 추가
      if (scrollTop >= fixedTop) {
        fixedContainer.classList.add("fixed");
        if (fixedContainer.classList.contains("fixed")) {
          fixedArea.style.width = fixedContainerW + "px";
        }
      }

      // 스크롤 끝 도달 시 flexBottom 클래스 추가
      if (scrollTop >= cancelFixedTop) {
        fixedContainer.classList.add("flexBottom");
      } else {
        fixedContainer.classList.remove("flexBottom");
      }

      // 스크롤 끝 넘었을 때 fixed 클래스 제거
      if (scrollTop < fixedTop) {
        fixedContainer.classList.remove("fixed");
      }
    };

    const pcCheck = window.innerWidth >= 769; // 디바이스 크기가 PC일 때

    // 스크롤 시작 조건
    if (pcCheck) {
      if (fixedTop < 0) {
        let fixedTop = 0;
        scrollActvie(fixedTop);
      } else {
        scrollActvie(fixedTop);
      }
    } else {
      // 스크롤 적용 스타일, 클래스 해제
      fixedArea.style.width = "";
      fixedContainer.classList.remove("fixed");
      fixedContainer.classList.remove("flexBottom");
    }
  };
  const handleResizeFixed = () => {
    const fixedContainer = fixedBoxRef.current;
    const fixedContainerW = fixedContainer.clientWidth;
    const fixedArea = fixedContainer.querySelector(fixedItem);

    fixedArea.style.width = fixedContainerW + "px";
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollFixed);
    window.addEventListener("resize", handleResizeFixed);
    return () => {
      window.removeEventListener("scroll", handleScrollFixed);
      window.removeEventListener("resize", handleResizeFixed);
    };
  }, []);

  return null;
}
export default HandleScrollHero;
