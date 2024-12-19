const device = 'App';

const headData = [
  {
    content: 'Depth 1',
    width: `15%`,
  },
  {
    content: 'Depth 2',
    width: `15%`,
  },
  {
    content: 'Depth 3',
    width: `15%`,
  },
  {
    content: '기획서',
    width: `25%`,
  },
  {
    content: '파일명',
    width: `20%`,
  },
  {
    content: '상태',
    width: `5%`,
  },
  {
    content: 'App 검수결과',
    width: `5%`,
  },
];

const list = [
  {
    content: 'General',
    link: '_general/appGeneral.html',
    name: 'General',
    ui: '-',
    complete: true,
    inspection: false,
  },
  {
    content: 'General',
    link: '_general/appGeneral2.html',
    name: '팝업 모음',
    ui: '-',
    complete: true,
    inspection: false,
  },
  {
    content: 'APP Gnb',
    children: [
      {
        content: '건물주',
        link: '_general/appGnb1.html',
        name: '건물주',
        ui: '-',
        complete: true,
        inspection: false,
      },
      {
        content: '입주사 담당자',
        link: '_general/appGnb2.html',
        name: '입주사 담당자',
        ui: '-',
        complete: true,
        inspection: false,
      },
      {
        content: '입주사 임직원',
        link: '_general/appGnb3.html',
        name: '입주사 임직원',
        ui: '-',
        complete: true,
        inspection: false,
      },
    ],
  },
  {
    content: 'Home',
    children: [
      {
        content: '',
        children: [
          {
            content: '홈 - 입주사',
            link: 'app_home/app_home_01.html',
            name: '홈 - 입주사',
            ui: '부동산고객용솔루션_UI사양서_APP_v1.0_230719 / 12p',
            complete: true,
            inspection: false,
          },
          {
            content: '홈 - 건물주',
            link: 'app_home/app_home_02.html',
            name: '홈 - 건물주',
            ui: '부동산고객용솔루션_UI사양서_APP_v1.0_230719 / 12p',
            complete: true,
            inspection: false,
          },
          {
            content: '홈 - 공지사항 팝업',
            link: 'app_home/app_home_notice.html',
            name: '홈 - 공지사항 팝업',
            ui: '부동산고객용솔루션_UI사양서_APP_v1.0_230719 / 19p',
            complete: true,
            inspection: false,
          },
          {
            content: '홈 - 공지사항 팝업 (이미지)',
            link: 'app_home/app_home_notice_img.html',
            name: '홈 - 공지사항 팝업',
            ui: '부동산고객용솔루션_UI사양서_APP_v1.0_230719 / 19p',
            complete: true,
            inspection: false,
          },
        ],
      },
    ],
  },
  {
    content: '3. 건물, 회사 등록',
    children: [
      {
        content: '유형 선택',
        link: 'app/app03_01.html',
        name: '유형 선택',
        ui: '-',
        complete: true,
        inspection: false,
      },
      {
        content: '건물 정보 등록',
        children: [
          {
            content: '건물 정보 등록_진입',
            link: 'app/app03_02.html',
            name: '건물 정보 등록_진입',
            ui: '-',
            complete: true,
            inspection: false,
          },
          {
            content: '지도 검색',
            link: 'app/app03_03.html',
            name: '지도 검색',
            ui: '-',
            complete: true,
            inspection: false,
          },
          {
            content: '건물 정보 등록_건물 등록 시',
            link: 'app/app03_04_1.html',
            name: '건물 정보 등록_건물 등록 시',
            ui: '-',
            complete: true,
            inspection: false,
          },
          {
            content: '건물 정보 등록_건물주용',
            link: 'app/app03_06.html',
            name: '건물 정보 등록_건물주용',
            ui: '-',
            complete: true,
            inspection: false,
          },
        ],
      },
      {
        content: '회사 선택',
        link: 'app/app03_05.html',
        name: '회사 선택',
        ui: '-',
        complete: true,
        inspection: false,
      },
      {
        content: '건물인증 승인 신청 완료',
        link: 'app/app03_07.html',
        name: '건물인증 승인 신청 완료',
        ui: '-',
        complete: true,
        inspection: false,
      },
      {
        content: '건물인증 완료',
        link: 'app/app03_08.html',
        name: '건물인증 완료',
        ui: '-',
        complete: true,
        inspection: false,
      },
    ],
  },
  {
    content: '5. 건물 인증',
    children: [
      {
        content: '건물 인증',
        link: 'app/app05_01.html',
        name: '건물 인증',
        ui: '부동산고객용솔루션_UI사양서_APP_v1.0_230719 / 61p',
        complete: true,
        inspection: false,
      },
      {
        content: '건물 인증 (건물주용)',
        link: 'app/app05_02.html',
        name: '건물 인증 (건물주용)',
        ui: '부동산고객용솔루션_UI사양서_APP_v1.0_230719 / 62p',
        complete: true,
        inspection: false,
      },
      {
        content: '건물 재인증 안내',
        link: 'app/app05_03.html',
        name: '건물 재인증 안내',
        ui: '부동산고객용솔루션_UI사양서_APP_v1.0_230719 / 63p',
        complete: true,
        inspection: false,
      },
      {
        content: '건물 인증 해제',
        link: 'app/app05_04.html',
        name: '건물 인증 해제',
        ui: '부동산고객용솔루션_UI사양서_APP_v1.0_230719 / 64p',
        complete: true,
        inspection: false,
      },
    ],
  },
  {
    content: '6. 임직원 관리',
    children: [
      {
        content: '임직원 관리',
        children: [
          {
            content: '임직원 관리_nodata',
            link: 'app/app06_01.html',
            name: '임직원 관리_nodata',
            ui: '부동산고객용솔루션_UI사양서_APP_v1.0_230719 / 67p',
            complete: true,
            inspection: false,
          },
          {
            content: '임직원 담당자 관리',
            link: 'app/app06_02.html',
            name: '전체 층 팝업, 전체 상태 팝업 , 담당자 삭제팝업, 담당자 지정팝업 , 임직원 초대 팝업',
            ui: '부동산고객용솔루션_UI사양서_APP_v1.0_230719 / 68p',
            complete: true,
            inspection: false,
          },
          {
            content: '임직원 담당자 해제',
            link: 'app/app06_03.html',
            name: '임직원 담당자 해제',
            ui: '부동산고객용솔루션_UI사양서_APP_v1.0_230719 / 68p',
            complete: true,
            inspection: false,
          },
          {
            content: '임직원 담당자 해제_삭제버튼only',
            link: 'app/app06_03_1.html',
            name: '임직원 담당자 해제_삭제버튼only',
            ui: '부동산고객용솔루션_UI사양서_APP_v1.0_230719 / 68p',
            complete: true,
            inspection: false,
          },
        ],
      },
    ],
  },
  {
    content: '7. 임직원 초대',
    children: [
      {
        content: '초대 방법 선택',
        link: 'app/app06_02.html',
        name: '임직원 초대 클릭시 팝업',
        ui: '부동산고객용솔루션_UI사양서_APP_v1.0_230719 / 73p',
        complete: true,
        inspection: false,
      },
      {
        content: '입주사 담당자 최초 진입',
        link: 'app/app07_02.html',
        name: '입주사 담당자 최초 진입',
        ui: '부동산고객용솔루션_UI사양서_APP_v1.0_230719 / 73p',
        complete: true,
        inspection: false,
      },
      {
        content: '입주사 담당자 임직원 추가',
        link: 'app/app07_03.html',
        name: '입주사 담당자 임직원 추가',
        ui: '부동산고객용솔루션_UI사양서_APP_v1.0_230719 / 73p',
        complete: true,
        inspection: false,
      },
    ],
  },
  {
    content: '8. 입주사 초대',
    children: [
      {
        content: '입주사 관리',
        link: 'app/app08_01.html',
        name: '입주사 관리',
        ui: '부동산고객용솔루션_UI사양서_APP_v1.0_230719 / 80p',
        complete: true,
        inspection: false,
      },
    ],
  },
  {
    content: '고객센터',
    children: [
      {
        content: '공지사항',
        children: [
          {
            content: '공지사항 상세',
            link: 'app/app_notice_detail.html',
            name: '공지사항 상세',
            ui: '부동산고객용솔루션_UI사양서_APP_v1.0_230719 / 54p',
            complete: true,
            inspection: false,
          },
        ],
      },
    ],
  },
];

export default { device: device, headData: headData, list: list };
