/*
pageLabel : Tab 이름

category : 카테고리
pageName : 페이지 이름
fileName : 파일 이름
progress : 진행 상태 ( 완료, 진행중 )
*/

export let pageLabel = "목록";

export let data = [
  {
    category: "홈",
    list: [
      {
        pageName: "",
        fileName: "home",
        progress: (
          <>
            <strong className="td-title">기획</strong>: v1.2
            <br />
            <strong className="td-title">디자인</strong>: v1.2
          </>
        ),
      },
    ],
  },
  {
    category: "브릿지",
    list: [
      {
        pageName: "설치서비스 미선택",
        fileName: "bridge",
        progress: (
          <>
            <strong className="td-title">기획</strong>: v1.2
            <br />
            <strong className="td-title">디자인</strong>: v1.2
          </>
        ),
      },
      {
        pageName: "설치서비스 미선택 - 안내 토스트 팝업",
        fileName: "bridge_info_toast",
        progress: (
          <>
            <strong className="td-title">기획</strong>: v1.2
            <br />
            <strong className="td-title">디자인</strong>: v1.2
          </>
        ),
      },

      {
        pageName: "설치서비스 선택",
        fileName: "bridge_installed",
        progress: (
          <>
            <strong className="td-title">기획</strong>: v1.2
            <br />
            <strong className="td-title">디자인</strong>: v1.2
          </>
        ),
      },
      {
        pageName: "LG ThinQ ON 구매 안내 팝업",
        fileName: "bridge_hub_modal",
        progress: (
          <>
            <strong className="td-title">기획</strong>: v1.2
            <br />
            <strong className="td-title">디자인</strong>: v1.2
          </>
        ),
      },
      // { 20240607 삭제
      //   pageName: "장바구니 담기 모달 팝업",
      //   fileName: "bridge_cart_modal",
      //   progress: (
      //     <>
      //       <strong className="td-title">기획</strong>: -
      //       <br />
      //       <strong className="td-title">디자인</strong>: 6/3
      //     </>
      //   ),
      // },
    ],
  },
  {
    category: "3.1. 스마트홈 추천 받기",
    list: [
      {
        pageName: "관심사 카드 선택",
        fileName: "recommend_list_gnb",
        progress: (
          <>
            <strong className="td-title">기획</strong>: v1.2
            <br />
            <strong className="td-title">디자인</strong>: v1.2
          </>
        ),
      },
    ],
  },
  {
    category: "3.0 스마트홈 체험하기",
    list: [
      {
        pageName: "니즈 선택",
        fileName: "recommend_needs",
        progress: (
          <>
            <strong className="td-title">기획</strong>: v1.2
            <br />
            <strong className="td-title">디자인</strong>: v1.2
          </>
        ),
      },
      {
        pageName: "니즈 선택 - 토스트 팝업",
        fileName: "recommend_needs_toast",
        progress: <>6/11 추가</>,
      },

      {
        pageName: "추천 패키지 리스트",
        fileName: "recommend_package_list",
        progress: (
          <>
            <strong className="td-title">기획</strong>: v1.2
            <br />
            <strong className="td-title">디자인</strong>: v1.2
          </>
        ),
      },
      {
        pageName: "패키지 탐색 화면",
        fileName: "recommend_package_search",
        progress: (
          <>
            <strong className="td-title">기획</strong>: v1.2
            <br />
            <strong className="td-title">디자인</strong>: v1.2
          </>
        ),
      },
    ],
  },
];
