const device = 'Web';

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
    content: 'Web 검수결과',
    width: `5%`,
  },
];

const list = [
  {
    content: 'General',
    link: '_general/general.html',
    name: 'General',
    ui: '-',
    complete: true,
    inspection: false,
  },
  {
    content: 'General',
    link: '_general/general2.html',
    name: 'General2',
    ui: '-',
    complete: true,
    inspection: false,
  },
  {
    content: 'General',
    link: '_general/general3.html',
    name: '팝업 모음',
    ui: '-',
    complete: true,
    inspection: false,
  },
  {
    content: 'Home',
    children: [
      {
        content: '홈 - 입주사일 경우',
        link: 'pc_home/home_01.html',
        name: '입주사',
        ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 7p',
        complete: true,
        inspection: false,
      },
      {
        content: '홈 - 건물주일 경우',
        link: 'pc_home/home_02.html',
        name: '건물주',
        ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 7p',
        complete: true,
        inspection: false,
      },
      {
        content: '홈 - 공지사항 팝업',
        link: 'pc_home/home_notice.html',
        name: '공지사항',
        ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 17p',
        complete: true,
        inspection: false,
      },
      {
        content: '홈 - 만족도 팝업',
        link: 'pc_home/home_survey.html',
        name: '만족도 팝업',
        ui: '-',
        complete: true,
        inspection: false,
      },
    ],
  },
  {
    content: '건물 기본 정보',
    children: [
      {
        content: '관리 구역',
        children: [
          {
            content: '',
            link: 'pc_buildingInfo/management.html',
            name: '관리 구역',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 74p',
            complete: true,
            inspection: false,
          },
          {
            content: '관리 구역 상세 정보',
            link: 'pc_buildingInfo/management_info.html',
            name: '관리 구역 상세 정보',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 75p',
            complete: true,
            inspection: false,
          },
        ],
      },
      {
        content: '도면 관리',
        children: [
          {
            content: '',
            link: 'pc_buildingInfo/draft.html',
            name: '도면 관리',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 80p',
            complete: true,
            inspection: false,
          },
          {
            content: '도면 관리 상세 정보',
            link: 'pc_buildingInfo/draft_info.html',
            name: '도면 관리 상세 정보',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 81p',
            complete: true,
            inspection: false,
          },
        ],
      },
      {
        content: '법규 관리',
        children: [
          {
            content: '',
            link: 'pc_buildingInfo/law.html',
            name: '법규 관리',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 82p',
            complete: true,
            inspection: false,
          },
          {
            content: '법규 관리 상세 정보',
            link: 'pc_buildingInfo/law_info.html',
            name: '법규 관리 상세 정보',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 83p',
            complete: true,
            inspection: false,
          },
        ],
      },
      {
        content: '운영 메뉴얼',
        children: [
          {
            content: '',
            link: 'pc_buildingInfo/manual.html',
            name: '운영 메뉴얼',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 84p',
            complete: true,
            inspection: false,
          },
        ],
      },
      {
        content: '기타',
        children: [
          {
            content: '',
            link: 'pc_buildingInfo/etc.html',
            name: '기타',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 85p',
            complete: true,
            inspection: false,
          },
          {
            content: '기타 상세 정보',
            link: 'pc_buildingInfo/etc_info.html',
            name: '기타 상세 정보',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 86p',
            complete: true,
            inspection: false,
          },
        ],
      },
    ],
  },
  {
    content: '건물 현황',
    children: [
      {
        content: '에너지 사용량',
        children: [
          {
            content: '실적 조회',
            link: 'pc_building/result.html',
            name: '실적 조회',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 98p',
            complete: true,
            inspection: false,
          },
          {
            content: '증감 분석',
            link: 'pc_building/analyze_01.html',
            name: '증감 분석',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 99p',
            complete: true,
            inspection: false,
          },
          {
            content: '증감 분석 - 에너지일 경우',
            link: 'pc_building/analyze_02.html',
            name: '증감 분석',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 99p',
            complete: true,
            inspection: false,
          },
        ],
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
            link: 'pc_cs/notice_detail.html',
            name: '공지사항 상세',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 103p',
            complete: true,
            inspection: false,
          },
        ],
      },
    ],
  },
  {
    content: '마이페이지',
    children: [
      {
        content: '건물 등록',
        children: [
          {
            content: '',
            link: 'pc_myPage/building_registration.html',
            name: '건물 등록',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 22p',
            complete: true,
            inspection: false,
          },
          {
            content: '건물 미등록 시',
            link: 'pc_myPage/building_unregistered.html',
            name: '건물 미등록 시',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 21p',
            complete: true,
            inspection: false,
          },
          {
            content: '건물 정보 등록',
            link: 'pc_myPage/building_info_add.html',
            name: '건물 정보 등록',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 23p',
            complete: true,
            inspection: false,
          },
          {
            content: '건물 정보 등록 (건물주)',
            link: 'pc_myPage/owner_building_add.html',
            name: '건물 정보 등록 (건물주)',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 25p',
            complete: true,
            inspection: false,
          },
          {
            content: '회사 선택',
            link: 'pc_myPage/building_add_company.html',
            name: '회사 선택',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 24p',
            complete: true,
            inspection: false,
          },
          {
            content: '건물 인증 승인 신청',
            link: 'pc_myPage/building_approval.html',
            name: '건물 인증 승인 신청',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 27p',
            complete: true,
            inspection: false,
          },
          {
            content: '건물 인증 완료',
            link: 'pc_myPage/building_completed.html',
            name: '건물 인증 완료',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 28p',
            complete: true,
            inspection: false,
          },
          {
            content: '인증된 건물 정보',
            link: 'pc_myPage/building_certification_info.html',
            name: '인증된 건물 정보',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 29p',
            complete: true,
            inspection: false,
          },
        ],
      },
      {
        content: '임직원 관리',
        children: [
          {
            content: '초대하기_진입 전',
            link: 'pc_myPage/executives_info.html',
            name: '초대하기_진입 전',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 31p',
            complete: true,
            inspection: false,
          },
          {
            content: '초대하기',
            link: 'pc_myPage/executives_invite.html',
            name: '초대하기',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 32p',
            complete: true,
            inspection: false,
          },
          {
            content: '초대하기',
            link: 'pc_myPage/executives_invite_empty.html',
            name: '초대하기 없을 시',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 32p',
            complete: true,
            inspection: false,
          },
          {
            content: '초대하기_데이터 없을 경우',
            link: 'pc_myPage/executives_invite_nodata.html',
            name: '초대하기_데이터 없을 경우',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 32p',
            complete: true,
            inspection: false,
          },
          {
            content: '임직원 초대 관리',
            link: 'pc_myPage/executives_invite_manage.html',
            name: '임직원 초대 관리',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 33p',
            complete: true,
            inspection: false,
          },
        ],
      },
      {
        content: '입주사 관리',
        children: [
          {
            content: '입주사 관리',
            link: 'pc_myPage/tenant_manage.html',
            name: '입주사 관리',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 35p',
            complete: true,
            inspection: false,
          },
        ],
      },
    ],
  },
];

export default { device: device, headData: headData, list: list };
