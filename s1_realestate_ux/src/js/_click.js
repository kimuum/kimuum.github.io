/*
 ** comment : click
 */

document.addEventListener("DOMContentLoaded", function () {
  // 메인 페이지 알림 창 닫기
  const mainAlert = document.querySelector(".main-alert-box");
  if (mainAlert) {
    mainAlert.addEventListener("click", function (event) {
      const target = event.target;
      if (target.className.indexOf("btn-close") > -1) {
        mainAlert.remove();
      }
    });
  }

  // 모바일 메인 페이지 알림 창 닫기
  const newServeyBox = document.querySelector(".new-survey-box");
  if (newServeyBox) {
    newServeyBox.addEventListener("click", function (event) {
      const target = event.target;
      if (target.className.indexOf("btn-close") > -1) {
        newServeyBox.remove();
      }
    });
  }

  //모바일 : 건물 점검 '펼치기' 버튼 클릭시 그래프 활성화
  const btnOpenGraphs = document.querySelectorAll(".btn-open-graph");

  if (btnOpenGraphs) {
    for (const btnOpenGraph of btnOpenGraphs) {
      btnOpenGraph.addEventListener("click", function (event) {
        const target = event.target;
        const targetParents = target.closest('.situation-detail-bottom-box, .building-report-top-right'); 
        if (targetParents.classList.contains("open")) {
          targetParents.classList.remove("open");
          target.textContent = "펼치기";
        } else {
          targetParents.classList.add("open");
          target.textContent = "닫기";
        }
      });
    }
  }
});
