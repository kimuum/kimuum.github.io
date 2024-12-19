/*
pageLabel : Tab 이름

category : 카테고리
dirRoute : 폴더 이름
pageName : 페이지 이름
fileName : 파일 이름
progress : 진행 상태 ( 완료, 진행중 )
*/

export let pageLabel = 'page';

export let data = [
  {
    category: 'HOME',
    dirRoute: 'dist',
    list: [
      {
        pageName: '메인(프론트) 페이지',
        fileName: 'index',
        progress: '완료',
      },
    ],
  },
  {
    category: '서브 페이지',
    dirRoute: 'dist/html/sub',
    list: [
      {
        pageName: '무료 설치 안내',
        fileName: 'sub01',
        progress: '완료',
      },
      {
        pageName: '이용 방법',
        fileName: 'sub03',
        progress: '완료',
      },
      {
        pageName: '요금 및 할인',
        fileName: 'sub02',
        progress: '완료',
      },
      {
        pageName: '고객 지원',
        fileName: 'sub04',
        progress: '완료',
      },
    ],
  },
  {
    category: '에러 페이지',
    dirRoute: 'dist/html/announce',
    list: [
      {
        pageName: '서비스 점검 중',
        fileName: 'announce_maintenance',
        progress: '완료',
      },
      {
        pageName: '지원하지 않는 브라우저',
        fileName: 'announce_browser',
        progress: '완료',
      },
      {
        pageName: '삭제된 페이지',
        fileName: 'announce_404',
        progress: '완료',
      },
    ],
  },
];
