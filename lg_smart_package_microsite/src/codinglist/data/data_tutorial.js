/*
pageLabel : Tab 이름

category : 카테고리
pageName : 페이지 이름
fileName : 파일 이름
progress : 진행 상태 ( 완료, 진행중 )
*/

export let pageLabel = "튜토리얼";

export let data = [
  {
    category: "7월 출시",
    list: [
      {
        pageName: "외출귀가 맞춤팩",
        fileName: "tutorial_outing",
        progress: <>QE1차 2종 완료</>,
      },
      {
        pageName: "반려동물 원격케어팩",
        fileName: "tutorial_pet_outing",
        progress: <>QE1차 2종 완료</>,
      },
      {
        pageName: "리빙 무드업팩",
        fileName: "tutorial_mood_living",
        progress: <>QE2차 6종 완료</>,
      },
      {
        pageName: "반려동물 맞춤케어팩",
        fileName: "tutorial_pet_environment",
        progress: <>QE2차 6종 완료</>,
      },
      {
        pageName: "분리수면 안심팩",
        fileName: "tutorial_kid",
        progress: <>QE2차 6종 완료</>,
      },
      {
        pageName: "세이프티 컨트롤팩",
        fileName: "tutorial_visit",
        progress: <>QE2차 6종 완료</>,
      },
      {
        pageName: "무드업 키친",
        fileName: "tutorial_mood_kitchen",
        progress: (
          <>
            <span className="td-title">1차 예정</span>
          </>
        ),
      },
    ],
  },
  {
    category: "8월 출시",
    list: [
      {
        pageName: "집안공기 마스터팩",
        fileName: "tutorial_air_window",
        progress: <>QE2차 6종 완료</>,
      },
      {
        pageName: "학습환경 조성팩",
        fileName: "tutorial_air_study",
        progress: <>QE2차 6종 완료</>,
      },
      {
        pageName: "마이홈 모니터링팩",
        fileName: "tutorial_home_monitoring",
        progress: (
          <>
            <span className="td-title">작업 예정</span>
          </>
        ),
      },
      {
        pageName: "실내조명 컨트롤팩",
        fileName: "tutorial_lighting_control",
        progress: (
          <>
            <span className="td-title">2차 예정</span>
          </>
        ),
      },
      {
        pageName: "혼자 사는 어르신 돌봄",
        fileName: "tutorial_senior_care",
        progress: (
          <>
            <span className="td-title">3차 예정</span>
          </>
        ),
      },
    ],
  },
  {
    category: "9월 출시",
    list: [
      {
        pageName: "여름 온습도 관리팩",
        fileName: "tutorial_summer",
        progress: (
          <>
            <span className="td-title">1차 예정</span>
          </>
        ),
      },
      {
        pageName: "에너지 관리",
        fileName: "tutorial_energy",
        progress: (
          <>
            <span className="td-title">2차 예정</span>
          </>
        ),
      },
      {
        pageName: "숙면 솔루션팩",
        fileName: "tutorial_deep_sleep",
        progress: (
          <>
            <span className="td-title">1차 예정</span>
          </>
        ),
      },
      {
        pageName: "화장실 위생 케어",
        fileName: "tutorial_toilet_care",
        progress: (
          <>
            <span className="td-title">4차 예정</span>
          </>
        ),
      },
      {
        pageName: "화장실 조명/환풍기 자동화",
        fileName: "tutorial_toilet_lighting",
        progress: (
          <>
            <span className="td-title">4차 예정</span>
          </>
        ),
      },
      {
        pageName: "여름철 우리집 시원하게",
        fileName: "tutorial_summer_cool",
        progress: (
          <>
            <span className="td-title">3차 예정</span>
          </>
        ),
      },
      {
        pageName: "조명",
        fileName: "tutorial_lighting",
        progress: (
          <>
            <span className="td-title">2차 예정</span>
          </>
        ),
      },
      {
        pageName: "아이 맞춤 돌봄",
        fileName: "tutorial_kids_care",
        progress: (
          <>
            <span className="td-title">3차 예정</span>
          </>
        ),
      },
    ],
  },
  {
    category: "10월 출시",
    list: [
      {
        pageName: "가정 누수 경보",
        fileName: "tutorial_water_leak",
        progress: <></>,
      },
      {
        pageName: "집안 가스 안전관리",
        fileName: "tutorial_safety_gas",
        progress: <></>,
      },
      {
        pageName: "집안 화재 안전관리",
        fileName: "tutorial_fire",
        progress: <></>,
      },
    ],
  },
];
