const device = '반응형';

const headData = [
  {
    content: 'Depth 1',
    width: `10%`,
  },
  {
    content: 'Depth 2',
    width: `13%`,
  },
  {
    content: 'Depth 3',
    width: `10%`,
  },
  {
    content: '기획서',
    width: `25%`,
  },
  {
    content: '파일명',
    width: `15%`,
  },
  {
    content: '수정 내용',
    width: `27%`,
  },
  {
    content: '상태',
    width: `5%`,
  },
  {
    content: '반응형 검수결과',
    width: `5%`,
  },
];

const list = [
  {
    content: '로그인_231031',
    children: [
      {
        content: '',
        link: 'responsive_login_new/login.html',
        name: '로그인',
        ui: '-',
        edit: '-',
        complete: true,
        inspection: false,
      },
      {
        content: '로그인_체크박스',
        link: 'responsive_login_new/login_check.html',
        name: '로그인_체크박스',
        ui: '-',
        edit: '-',
        complete: true,
        inspection: false,
      },
      {
        content: '로그인_에러',
        link: 'responsive_login_new/login_error.html',
        name: '로그인_에러',
        ui: '-',
        edit: '-',
        complete: true,
        inspection: false,
      },
      {
        content: '로그인_체크박스_에러',
        link: 'responsive_login_new/login_check_error.html',
        name: '로그인_체크박스_에러',
        ui: '-',
        edit: '-',
        complete: true,
        inspection: false,
      },
    ],
  },
  {
    content: '문의하기',
    children: [
      {
        content: '문의 등록',
        children: [
          {
            content: '서비스 문의',
            link: 'responsive_voc/customer_repair.html',
            name: '고장/수리/불편신고',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 40p',
            edit: 'html 편집',
            complete: true,
            inspection: false,
          },
          {
            content: '',
            link: 'responsive_voc/customer_repair_check.html',
            name: '고장/수리/불편신고 > 문의 등록 확인',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 41p',
            edit: 'html 편집, 텍스트 수정',
            complete: true,
            inspection: false,
          },
          {
            content: '',
            link: 'responsive_voc/customer_temperature.html',
            name: '온도 조절',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 42p',
            edit: 'html 편집',
            complete: true,
            inspection: false,
          },
          {
            content: '',
            link: 'responsive_voc/customer_temperature_check.html',
            name: '온도 조절 > 문의 등록 확인',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 43p',
            edit: '텍스트 수정',
            complete: true,
            inspection: false,
          },
          {
            content: '',
            link: 'responsive_voc/customer_ac.html',
            name: '냉난방/조명 연장 신청',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 44p',
            edit: 'html 편집',
            complete: true,
            inspection: false,
          },
          {
            content: '',
            link: 'responsive_voc/customer_ac_check.html',
            name: '냉난방/조명 연장 신청 > 문의 등록 확인',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 45p',
            edit: '텍스트 수정',
            complete: true,
            inspection: false,
          },
          {
            content: '',
            link: 'responsive_voc/customer_cleaning.html',
            name: '청소/소모품 교체',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 46p',
            edit: 'html 편집',
            complete: true,
            inspection: false,
          },
          {
            content: '',
            link: 'responsive_voc/customer_cleaning_check.html',
            name: '청소/소모품 교체 > 문의 등록 확인',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 47p',
            edit: 'html 편집',
            complete: true,
            inspection: false,
          },
          {
            content: '',
            link: 'responsive_voc/customer_product.html',
            name: '상품문의',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 48p',
            edit: 'html 편집',
            complete: true,
            inspection: false,
          },
          {
            content: '',
            link: 'responsive_voc/customer_product_check.html',
            name: '상품문의 > 문의 등록 확인',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 50p',
            edit: 'html 편집',
            complete: true,
            inspection: false,
          },
          {
            content: '업무 문의',
            link: 'responsive_voc/business_data.html',
            name: '자료 요청',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 52p',
            edit: 'html 편집',
            complete: true,
            inspection: false,
          },
          {
            content: '',
            link: 'responsive_voc/business_data_check.html',
            name: '자료 요청 > 문의 등록 확인',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 53p',
            edit: 'html 편집',
            complete: true,
            inspection: false,
          },
        ],
      },
      {
        content: '나의 문의 내역',
        children: [
          {
            content: '서비스 문의',
            link: 'responsive_voc/inquiry_history.html',
            name: '나의 문의 내역 - 서비스 문의',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 54p',
            edit: 'html 편집',
            complete: true,
            inspection: false,
          },
          {
            content: '',
            link: 'responsive_voc/inquiry_history_detail_01.html',
            name: '서비스 문의 진행 사항_접수',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 55p',
            edit: 'html 편집',
            complete: true,
            inspection: false,
          },
          {
            content: '',
            link: 'responsive_voc/inquiry_history_detail_02.html',
            name: '서비스 문의 진행 사항_조치중',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 56p',
            edit: 'html 편집',
            complete: true,
            inspection: false,
          },
          {
            content: '',
            link: 'responsive_voc/inquiry_history_detail_03.html',
            name: '서비스 문의 진행 사항_조치완료',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 57p',
            edit: 'html 편집',
            complete: true,
            inspection: false,
          },
          {
            content: '업무 문의',
            link: 'responsive_voc/business_inquiry_history.html',
            name: '나의 문의 내역 - 업무 문의',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 58p',
            edit: 'html 편집',
            complete: true,
            inspection: false,
          },
          {
            content: '',
            link: 'responsive_voc/business_inquiry_history_detail_01.html',
            name: '업무 문의 진행 사항_접수',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 59p',
            edit: 'html 편집',
            complete: true,
            inspection: false,
          },
          {
            content: '',
            link: 'responsive_voc/business_inquiry_history_detail_02.html',
            name: '업무 문의 진행 사항_조치중',
            ui: '-',
            edit: 'html 편집',
            complete: true,
            inspection: false,
          },
          {
            content: '',
            link: 'responsive_voc/business_inquiry_history_detail_03.html',
            name: '업무 문의 진행 사항_조치완료',
            ui: '-',
            edit: 'html 편집',
            complete: true,
            inspection: false,
          },
          {
            content: '나의 문의 내역_데이터 없을 경우',
            link: 'responsive_voc/inquiry_history_nodata.html',
            name: '나의 문의 내역_데이터 없을 경우',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 54p',
            edit: 'html 편집',
            complete: true,
            inspection: false,
          },
        ],
      },
      {
        content: '오늘의 문의 내역',
        link: 'responsive_voc/today_inquiry.html',
        name: '오늘의 문의 내역',
        ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 38p',
        edit: 'html 편집',
        complete: true,
        inspection: false,
      },
      {
        content: '오늘의 문의 내역 / 데이터 없을 경우',
        link: 'responsive_voc/today_inquiry_nodata.html',
        name: '오늘의 문의 내역 / 데이터 없을 경우',
        ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 38p',
        edit: 'html 편집',
        complete: true,
        inspection: false,
      },
    ],
  },
  {
    content: '분실물 관리',
    children: [
      {
        content: '분실물 조회',
        children: [
          {
            content: '',
            link: 'responsive_lostItem/lost_item.html',
            name: '분실물 조회',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 63p',
            edit: 'html 편집',
            complete: true,
            inspection: false,
          },
          {
            content: '분실물 상세',
            link: 'responsive_lostItem/lost_item_info.html',
            name: '분실물 상세',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 64p',
            edit: 'html 편집',
            complete: true,
            inspection: false,
          },
        ],
      },
      {
        content: '습득물 등록',
        link: 'responsive_lostItem/found_item.html',
        name: '습득물 등록',
        ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 65p',
        edit: 'html 편집, 텍스트 수정',
        complete: true,
        inspection: false,
      },
      {
        content: '습득물 등록 > 내용 확인',
        link: 'responsive_lostItem/found_item_detail.html',
        name: '습득물 등록 > 내용 확인',
        ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 67p',
        edit: 'html 편집',
        complete: true,
        inspection: false,
      },
    ],
  },
  {
    content: '건물 기본 정보',
    children: [
      {
        content: '건물 정보',
        children: [
          {
            content: '입주사용',
            link: 'responsive_buildingInfo/building_info_tenant.html',
            name: '건물 정보_입주사용',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 73p',
            edit: 'html 편집, 텍스트 수정',
            complete: true,
            inspection: false,
          },
          {
            content: '건물주용',
            link: 'responsive_buildingInfo/building_info_owner.html',
            name: '건물 정보_건물주용',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 70p',
            edit: 'html 편집, 텍스트 수정',
            complete: true,
            inspection: false,
          },
        ],
      },
      {
        content: '장비 관리',
        children: [
          {
            content: '',
            link: 'responsive_buildingInfo/equipment.html',
            name: '장비 관리',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 76p',
            edit: 'html 편집, 텍스트 수정',
            complete: true,
            inspection: false,
          },
          {
            content: '장비 관리 상세 정보',
            link: 'responsive_buildingInfo/equipment_info.html',
            name: '장비 관리 상세 정보',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 77p',
            edit: 'html 편집, 텍스트 수정',
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
        content: '문의 내역',
        link: 'responsive_building/building_inquiry.html',
        name: '문의 내역',
        ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 88p',
        edit: 'html 편집, 텍스트 수정',
        complete: true,
        inspection: false,
      },
      {
        content: '건물 점검',
        children: [
          {
            content: '점검 관리',
            link: 'responsive_building/inspection_mgmt_01.html',
            name: '예방 점검일시 목록',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 90p',
            edit: 'html 편집, 텍스트 수정',
            complete: true,
            inspection: false,
          },
          {
            content: '점검 관리',
            link: 'responsive_building/inspection_mgmt_02.html',
            name: '설비 순찰일시 목록',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 91p',
            edit: 'html 편집, 텍스트 수정',
            complete: true,
            inspection: false,
          },
          {
            content: '점검 관리',
            link: 'responsive_building/inspection_mgmt_03.html',
            name: '공사 관리일시 목록',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 91p',
            edit: 'html 편집, 텍스트 수정',
            complete: true,
            inspection: false,
          },
          {
            content: '건물 리포트',
            link: 'responsive_building/report_01.html',
            name: '건물 리포트',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 96p',
            edit: 'html 편집, 텍스트 수정',
            complete: true,
            inspection: false,
          },
          {
            content: '건물 리포트',
            link: 'responsive_building/report_02.html',
            name: '장비 점검 일지',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 96p',
            edit: 'html 편집, 텍스트 수정',
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
            content: '',
            link: 'responsive_cs/notice.html',
            name: '공지사항',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 102p',
            edit: 'html 편집',
            complete: true,
            inspection: false,
          },
          {
            content: '',
            link: 'responsive_cs/notice_nodata.html',
            name: '공지사항 게시글 없음',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 102p',
            edit: 'html 편집',
            complete: true,
            inspection: false,
          },
        ],
      },
      {
        content: '고객 만족도 설문',
        children: [
          {
            content: '',
            link: 'responsive_cs/survey.html',
            name: '고객 만족도 설문',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 104p',
            edit: 'html 편집',
            complete: true,
            inspection: false,
          },
          {
            content: '',
            link: 'responsive_cs/survey_nodata.html',
            name: '고객 만족도 설문 게시글 없음',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 104p',
            edit: 'html 편집',
            complete: true,
            inspection: false,
          },
          {
            content: '고객 만족도 설문_01',
            link: 'responsive_cs/survey_01.html',
            name: '고객 만족도 설문_01',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 105p',
            edit: 'html 편집',
            complete: true,
            inspection: false,
          },
          {
            content: '고객 만족도 설문_02_Input',
            link: 'responsive_cs/survey_02_1.html',
            name: '고객 만족도 설문_02_Input',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 106p',
            edit: 'html 편집',
            complete: true,
            inspection: false,
          },
          {
            content: '고객 만족도 설문_02_Radio',
            link: 'responsive_cs/survey_02_2.html',
            name: '고객 만족도 설문_02_Radio',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 106p',
            edit: 'html 편집',
            complete: true,
            inspection: false,
          },
          {
            content: '고객 만족도 설문_03_Checkbox',
            link: 'responsive_cs/survey_02_3.html',
            name: '고객 만족도 설문_03_Checkbox',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 106p',
            edit: 'html 편집',
            complete: true,
            inspection: false,
          },
          {
            content: '고객 만족도 설문_04_Textarea',
            link: 'responsive_cs/survey_02_4.html',
            name: '고객 만족도 설문_04_Textarea',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 106p',
            edit: 'html 편집',
            complete: true,
            inspection: false,
          },
          {
            content: '고객 만족도 설문_03',
            link: 'responsive_cs/survey_03.html',
            name: '고객 만족도 설문_03',
            ui: '부동산고객용솔루션_UI사양서_Web_v1.0_230719 / 107p',
            edit: '텍스트 수정',
            complete: true,
            inspection: false,
          },
        ],
      },
    ],
  },
  {
    content: '공통_에러페이지',
    children: [
      {
        content: '',
        link: 'responsive_error/common_error_01.html',
        name: '일시적 오류',
        ui: '-',
        edit: '-',
        complete: true,
        inspection: false,
      },
      {
        content: '',
        link: 'responsive_error/common_error_02.html',
        name: '페이지를 찾을 수 없습니다',
        ui: '-',
        edit: '-',
        complete: true,
        inspection: false,
      },
      {
        content: '',
        link: 'responsive_error/common_error_03.html',
        name: '시스템 점검 안내',
        ui: '-',
        edit: '-',
        complete: true,
        inspection: false,
      },
    ],
  },
];

export default { device: device, headData: headData, list: list };