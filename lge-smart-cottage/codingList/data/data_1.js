/*
pageLabel : Tab 이름

category : 카테고리
dirRoute : 폴더 이름
pageName : 페이지 이름
fileName : 파일 이름
progress : 진행 상태 ( 완료, 진행중 )
*/

const dataPage = {
  device: 'Page',
  headData: [
    {
      content: 'Category',
      width: `15%`,
    },
    {
      content: 'Depth 1',
      width: `25%`,
    },
    {
      content: 'Depth 2',
      width: `25%`,
    },
    {
      content: '파일명',
      width: `25%`,
    },
    {
      content: 'PC',
      width: `10%`,
    },
    {
      content: 'Mobile',
      width: `10%`,
    },
  ],
  list: [
    {
      content: '메인',
      children: [
        {
          content: '',
          children: [
            {
              content: '',
              name: 'main.html',
              link: 'main/main.html',
              complete: true,
              moComplete: true,
            },
          ],
        },
      ],
    },
    {
      content: '스마트코티지는',
      children: [
        {
          content: '브랜드 스토리',
          children: [
            {
              content: '',
              name: 'brand_story.html',
              link: 'is_smart/brand_story.html',
              complete: true,
              moComplete: true,
            },
          ],
        },
        {
          content: '모델 알아보기',
          children: [
            {
              content: '',
              name: 'find_model.html',
              link: 'is_smart/find_model.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '모델 비교 팝업 ',
              name: 'modal_compare.html',
              link: 'is_smart/modal_compare.html',
              complete: true,
              moComplete: true,
            },
          ],
        },
      ],
    },
    {
      content: '어떻게 진행되나요?',
      children: [
        {
          content: '',
          children: [
            {
              content: '',
              name: 'how_step.html',
              link: 'how_step/how_step.html',
              complete: true,
              moComplete: true,
            },
          ],
        },
      ],
    },
    {
      content: '시작하기',
      children: [
        {
          content: '시작하기 안내',
          children: [
            {
              content: '',
              name: 'start_info.html',
              link: 'start/start_info.html',
              complete: true,
              moComplete: true,
            },
          ],
        },
        {
          content: '옵션 선택',
          children: [
            {
              content: '배경이미지 선택',
              name: 'start_select_bg.html',
              link: 'start/start_select_bg.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '상황 선택',
              name: 'start_select_situation.html',
              link: 'start/start_select_situation.html',
              complete: true,
              moComplete: true,
            },
          ],
        },
        {
          content: '땅 주소 입력',
          children: [
            {
              content: '주소입력 검색 전',
              name: 'start_search_address_01.html',
              link: 'start/start_search_address_01.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '주소입력 검색 후',
              name: 'start_search_address_02.html',
              link: 'start/start_search_address_02.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '상세주소 입력 완료',
              name: 'start_search_address_03.html',
              link: 'start/start_search_address_03.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '유효하지 않은 주소 예외 처리',
              name: 'start_search_address_04.html',
              link: 'start/start_search_address_04.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '땅 주소 입력 팝업_입력 전',
              name: 'modal_start_search_address_01.html',
              link: 'start/modal_start_search_address_01.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '땅 주소 입력 팝업_입력 후',
              name: 'modal_start_search_address_02.html',
              link: 'start/modal_start_search_address_02.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '땅 주소 입력 팝업_입력 후_유효한 주소 아닐 경우',
              name: 'modal_start_search_address_03.html',
              link: 'start/modal_start_search_address_03.html',
              complete: true,
              moComplete: true,
            },
          ],
        },
        {
          content: '땅 지도',
          children: [
            {
              content: '땅 지도 이미지 확인',
              name: 'start_land_image_01.html',
              link: 'start/start_land_image_01.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '설치 가능 안내',
              name: 'start_land_image_02.html',
              link: 'start/start_land_image_02.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '설치 가능 안내_영역 벗어난 경우',
              name: 'start_land_image_07.html',
              link: 'start/start_land_image_07.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '설치 불가능 안내_1',
              name: 'start_land_image_03.html',
              link: 'start/start_land_image_03.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '설치 불가능 안내_2',
              name: 'start_land_image_04.html',
              link: 'start/start_land_image_04.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '설치 불가능 안내_3',
              name: 'start_land_image_05.html',
              link: 'start/start_land_image_05.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '설치 불가능 안내_4',
              name: 'start_land_image_06.html',
              link: 'start/start_land_image_06.html',
              complete: true,
              moComplete: true,
            },
          ],
        },
        {
          content: '꿈꾸기',
          children: [
            {
              content: '꿈꾸기_대지 유무 선택 후',
              name: 'info_download_modal.html',
              link: 'start/info_download_modal.html',
              complete: true,
              moComplete: true,
            },
          ],
        },
        {
          content: '모델 선택',
          children: [
            {
              content: '필수 정보 안내',
              name: 'start_essential_info_guide.html',
              link: 'start/start_essential_info_guide.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '단층형',
              name: 'start_select_model_01.html',
              link: 'start/start_select_model_01.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '복층형',
              name: 'start_select_model_02.html',
              link: 'start/start_select_model_02.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '복층형 설치 불가 안내 팝업',
              name: 'start_select_model_02_modal.html',
              link: 'start/start_select_model_02_modal.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '외장재 선택 - WPC',
              name: 'start_select_model_03.html',
              link: 'start/start_select_model_03.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '외장재 선택 - STEEL',
              name: 'start_select_model_03_02.html',
              link: 'start/start_select_model_03_02.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '에너지 발전 방식 선택_베이직라인',
              name: 'start_select_model_04.html',
              link: 'start/start_select_model_04.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '에너지 발전 방식 선택_플러스라인',
              name: 'start_select_model_04_01.html',
              link: 'start/start_select_model_04_01.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '인테리어 선택 - 화이트 인테리어',
              name: 'start_select_model_05.html',
              link: 'start/start_select_model_05.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '인테리어 선택 - 다크우드 인테리어',
              name: 'start_select_model_05_02.html',
              link: 'start/start_select_model_05_02.html',
              complete: true,
              moComplete: true,
            },
          ],
        },
        {
          content: '준비하기',
          children: [
            {
              content: '들판',
              name: 'start_ready_intro_field.html',
              link: 'start/start_ready_intro_field.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '산',
              name: 'start_ready_intro_mountain.html',
              link: 'start/start_ready_intro_mountain.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '호수',
              name: 'start_ready_intro_lake.html',
              link: 'start/start_ready_intro_lake.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '바다',
              name: 'start_ready_intro_ocean.html',
              link: 'start/start_ready_intro_ocean.html',
              complete: true,
              moComplete: true,
            },
          ],
        },
        {
          content: '현장실사 신청 안내',
          children: [
            {
              content: '',
              name: 'start_application_guide.html',
              link: 'start/start_application_guide.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '토목, 건축사 계약 안내 팝업',
              name: 'construction_info_modal.html',
              link: 'start/construction_info_modal.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '땅 정보 확인_주소입력 검색 전',
              name: 'start_land_information_confirm_01.html',
              link: 'start/start_land_information_confirm_01.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '땅 정보 확인_주소입력 검색 중',
              name: 'start_land_information_confirm_02.html',
              link: 'start/start_land_information_confirm_02.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '땅 정보 확인_주소입력 검색 후',
              name: 'start_land_information_confirm_03.html',
              link: 'start/start_land_information_confirm_03.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '땅 정보 확인_상세주소 입력 완료',
              name: 'start_land_information_confirm_04.html',
              link: 'start/start_land_information_confirm_04.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '땅 정보 확인_유효하지 않은 주소 예외 처리',
              name: 'start_land_information_confirm_05.html',
              link: 'start/start_land_information_confirm_05.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '땅 정보 확인_설치 불가 안내 팝업',
              name: 'start_land_information_confirm_modal.html',
              link: 'start/start_land_information_confirm_modal.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '스마트코티지 정보 확인',
              name: 'start_cottage_info_confirm.html',
              link: 'start/start_cottage_info_confirm.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '모델 변경 팝업',
              name: 'change_model_modal_01.html',
              link: 'start/change_model_modal_01.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '외장재 변경 팝업',
              name: 'change_model_modal_02.html',
              link: 'start/change_model_modal_02.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '에너지 변경 팝업',
              name: 'change_model_modal_03.html',
              link: 'start/change_model_modal_03.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '인테리어 변경 팝업',
              name: 'change_model_modal_04.html',
              link: 'start/change_model_modal_04.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '현장실사 일정 확인',
              name: 'start_cottage_schedule_confirm.html',
              link: 'start/start_cottage_schedule_confirm.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '토목, 건설 단계 확인',
              name: 'start_cottage_construction_confirm.html',
              link: 'start/start_cottage_construction_confirm.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '현장실사 비용 확인 및 결제',
              name: 'start_cottage_payment_confirm.html',
              link: 'start/start_cottage_payment_confirm.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '현장실사 비용 확인 및 결제 모달',
              name: 'start_cottage_payment_confirm_modal.html',
              link: 'start/start_cottage_payment_confirm_modal.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '서비스 이용약관',
              name: 'modal_terms_of_service.html',
              link: 'start/modal_terms_of_service.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '개인정보 수집, 이용 동의 팝업',
              name: 'modal_privacy_policy.html',
              link: 'start/modal_privacy_policy.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '개인정보 수집, 이용 동의 팝업',
              name: 'privacy_policy_modal.html',
              link: 'start/privacy_policy_modal.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '신청내용 확인 팝업',
              name: 'request_confirm_modal.html',
              link: 'start/request_confirm_modal.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '14세 미만일 경우 노출 팝업',
              name: 'age_modal.html',
              link: 'start/age_modal.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '동일한 대지에 추가신청 안내 팝업',
              name: 'additional_request_modal.html',
              link: 'start/additional_request_modal.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '신청완료',
              name: 'start_cottage_request_complete.html',
              link: 'start/start_cottage_request_complete.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '신청 완료_진행 안내 팝업',
              name: 'request_complete_modal.html',
              link: 'start/request_complete_modal.html',
              complete: true,
              moComplete: true,
            },
          ],
        },
      ],
    },
    {
      content: '나의 스마트코티지',
      children: [
        {
          content: '본인인증 안내',
          children: [
            {
              content: '본인인증 안내',
              name: 'guide_identity.html',
              link: 'my_smart/guide_identity.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '전화번호 변경 안내 팝업',
              name: 'modal_phone_number_guide.html',
              link: 'my_smart/modal_phone_number_guide.html',
              complete: true,
              moComplete: true,
            },
          ],
        },
        {
          content: '나의 스마트코티지',
          children: [
            {
              content: '나의 스마트코티지',
              name: 'my_smart_cottage.html',
              link: 'my_smart/my_smart_cottage.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '신청 내역 상세',
              name: 'application_details_accept.html',
              link: 'my_smart/application_details_accept.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '나의 스마트코티지 신청 내역 상세_추가 신청 팝업_01',
              name: 'modal_additional_app.html',
              link: 'my_smart/modal_additional_app.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '나의 스마트코티지 신청 내역 상세_추가 신청 팝업_02',
              name: 'modal_additional_app_01.html',
              link: 'my_smart/modal_additional_app_01.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '나의 스마트코티지 신청 내역 상세 대지정보 변경 팝업 입력 전',
              name: 'modal_change_land_info_01.html',
              link: 'my_smart/modal_change_land_info_01.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '나의 스마트코티지 신청 내역 상세 대지정보 변경 팝업 입력 후',
              name: 'modal_change_land_info_02.html',
              link: 'my_smart/modal_change_land_info_02.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '나의 스마트코티지 신청 내역 상세 현장실사 일정 변경 팝업',
              name: 'modal_schedule_change.html',
              link: 'my_smart/modal_schedule_change.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '나의 스마트코티지 신청 내역 상세 요청사항 변경 팝업',
              name: 'modal_change_request.html',
              link: 'my_smart/modal_change_request.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '나의 스마트코티지_신청 취소 안내 팝업_환불 불가능',
              name: 'modal_cancel_refund_disable.html',
              link: 'my_smart/modal_cancel_refund_disable.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '나의 스마트코티지_신청 취소 안내 팝업_환불 가능',
              name: 'modal_cancel_refund_enable.html',
              link: 'my_smart/modal_cancel_refund_enable.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '나의 스마트코티지 신청 내역 상세 신청 취소 팝업',
              name: 'modal_cancel_application.html',
              link: 'my_smart/modal_cancel_application.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '신청 내역 상세_신청취소',
              name: 'application_details_cancle.html',
              link: 'my_smart/application_details_cancle.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '신청 내역 상세 실사 완료 설치 가능',
              name: 'application_details_complete.html',
              link: 'my_smart/application_details_complete.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '신청 내역 상세_토목, 건축사 정보 팝업',
              name: 'modal_company_info.html',
              link: 'my_smart/modal_company_info.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '계약 준비 안내 팝업',
              name: 'modal_prepare_info.html',
              link: 'my_smart/modal_prepare_info.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '신청 내역 삭제 팝업',
              name: 'modal_delete_history_01.html',
              link: 'my_smart/modal_delete_history_01.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '신청 내역 상세_실사 완료_설치 불가능',
              name: 'application_details_impossible.html',
              link: 'my_smart/application_details_impossible.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '현장실사 완료_본계약-선금입금',
              name: 'contract_pay_01.html',
              link: 'my_smart/contract_pay_01.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '현장실사 완료_본계약-중도금입금',
              name: 'contract_pay_02.html',
              link: 'my_smart/contract_pay_02.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '현장실사 완료_본계약-잔금입금',
              name: 'contract_pay_03.html',
              link: 'my_smart/contract_pay_03.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '현장실사 완료_본계약-배송 및 설치',
              name: 'contract_pay_04.html',
              link: 'my_smart/contract_pay_04.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '신청 내역 삭제 팝업_본계약 상태',
              name: 'modal_delete_history_02.html',
              link: 'my_smart/modal_delete_history_02.html',
              complete: true,
              moComplete: true,
            },
          ],
        },
      ],
    },
    {
      content: '자세히 알아보기',
      children: [
        {
          content: '',
          children: [
            {
              content: '',
              name: 'detail.html',
              link: 'detail/detail.html',
              complete: true,
              moComplete: true,
            },
          ],
        },
      ],
    },
  ],
};

const dataPage2 = {
  device: 'Admin',
  headData: [
    {
      content: 'Category',
      width: `15%`,
    },
    {
      content: 'Depth 1',
      width: `25%`,
    },
    {
      content: 'Depth 2',
      width: `25%`,
    },
    {
      content: '파일명',
      width: `25%`,
    },
    {
      content: 'PC',
      width: `10%`,
    },
    {
      content: 'Tablet',
      width: `10%`,
    },
  ],
  list: [
    {
      content: 'Admin',
      children: [
        {
          content: '로그인',
          children: [
            {
              content: '',
              name: 'admin_login.html',
              link: 'admin/admin_login.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '관리자 ID 등록',
              name: 'admin_login_id.html',
              link: 'admin/admin_login_id.html',
              complete: true,
              moComplete: true,
            },
          ],
        },
        {
          content: '홈',
          children: [
            {
              content: '',
              name: 'admin_home.html',
              link: 'admin/admin_home.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '현장실사 일정 없는 경우',
              name: 'admin_home_null.html',
              link: 'admin/admin_home_null.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '실사 일정 설정 팝업',
              name: 'admin_home_schedule_modal.html',
              link: 'admin/admin_home_schedule_modal.html',
              complete: true,
              moComplete: true,
            },
          ],
        },
        {
          content: '신청 내역 조회',
          children: [
            {
              content: '일정미확정',
              name: 'admin_unconfirmed.html',
              link: 'admin/admin_unconfirmed.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '일정미확정_검색 결과 없는 경우',
              name: 'admin_unconfirmed_null.html',
              link: 'admin/admin_unconfirmed_null.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '신청 내역 조회_상세',
              name: 'admin_unconfirmed_detail.html',
              link: 'admin/admin_unconfirmed_detail.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '일정미확정_일정확정팝업_등록 불가',
              name: 'admin_schedule_confirm_modal_1.html',
              link: 'admin/admin_schedule_confirm_modal_1.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '일정미확정_일정확정팝업_등록 가능',
              name: 'admin_schedule_confirm_modal_2.html',
              link: 'admin/admin_schedule_confirm_modal_2.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '일정확정_상세_실사완료 상태처리 팝업',
              name: 'admin_schedule_confirm_complete_modal.html',
              link: 'admin/admin_schedule_confirm_complete_modal.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '설치가능_선입금 필요 상태 처리 팝업',
              name: 'admin_pay_modal_01.html',
              link: 'admin/admin_pay_modal_01.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '설치가능_본계약 상태 초기화 팝업',
              name: 'admin_reset_modal.html',
              link: 'admin/admin_reset_modal.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '설치가능_중도금 입금 필요 상태 처리 팝업',
              name: 'admin_pay_modal_02.html',
              link: 'admin/admin_pay_modal_02.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '설치가능_본계약 상태 이전으로 팝업',
              name: 'admin_back_modal.html',
              link: 'admin/admin_back_modal.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '설치가능_잔금 입금 필요 상태 처리 팝업',
              name: 'admin_pay_modal_03.html',
              link: 'admin/admin_pay_modal_03.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '설치가능_배송 설치 완료 상태 처리 팝업',
              name: 'admin_set_complete_modal.html',
              link: 'admin/admin_set_complete_modal.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '설치가능_실사완료 상태 초기화 팝업',
              name: 'admin_enable_reset_modal.html',
              link: 'admin/admin_enable_reset_modal.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '신청 내역 조회_설치가능_선입금 필요 상태 처리 팝업',
              name: 'admin_virtual_account_modal.html',
              link: 'admin/admin_virtual_account_modal.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '신청 내역 조회_설치가능_중도금 입금 필요 상태 처리 팝업',
              name: 'admin_send_notification_message_modal.html',
              link: 'admin/admin_send_notification_message_modal.html',
              complete: true,
              moComplete: true,
            },
          ],
        },
        {
          content: '고객관리',
          children: [
            {
              content: '',
              name: 'admin_customer_management.html',
              link: 'admin/admin_customer_management.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '메모추가 팝업',
              name: 'admin_customer_memo_modal.html',
              link: 'admin/admin_customer_memo_modal.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '전화번호 변경 팝업',
              name: 'admin_customer_digit_modal.html',
              link: 'admin/admin_customer_digit_modal.html',
              complete: true,
              moComplete: true,
            },
          ],
        },
        {
          content: '홈페이지 관리',
          children: [
            {
              content: '상품정보 관리',
              name: 'admin_homepage_management_01.html',
              link: 'admin/admin_homepage_management_01.html',
              complete: true,
              moComplete: true,
            },
            {
              content: 'FAQ 관리',
              name: 'admin_homepage_management_02.html',
              link: 'admin/admin_homepage_management_02.html',
              complete: true,
              moComplete: true,
            },
            {
              content: '토목, 건설업체 정보 관리',
              name: 'admin_homepage_management_03.html',
              link: 'admin/admin_homepage_management_03.html',
              complete: true,
              moComplete: true,
            },
          ],
        },
        {
          content: '관리자 관리',
          children: [
            {
              content: '',
              name: 'admin_management.html',
              link: 'admin/admin_management.html',
              complete: true,
              moComplete: true,
            },
          ],
        },
      ],
    },
  ],
};

const dataPage3 = {
  device: 'Guide',
  headData: [
    {
      content: 'Category',
      width: `70%`,
    },
    {
      content: '파일명',
      width: `20%`,
    },
    {
      content: '상태',
      width: `10%`,
    },
  ],
  list: [
    {
      content: 'Header',
      name: 'header.html',
      link: 'guide/header.html',
      complete: true,
    },
    {
      content: 'Button',
      name: 'button.html',
      link: 'guide/button.html',
      complete: true,
    },
    {
      content: 'Input + Textarea',
      name: 'input.html',
      link: 'guide/input.html',
      complete: true,
    },
    {
      content: 'Checkbox',
      name: 'checkbox.html',
      link: 'guide/checkbox.html',
      complete: true,
    },
    {
      content: 'Radio',
      name: 'radio.html',
      link: 'guide/radio.html',
      complete: true,
    },
    {
      content: 'Modal',
      name: 'modal.html',
      link: 'guide/modal.html',
      complete: true,
    },
    {
      content: '[Admin] Checkbox',
      name: 'admin_checkbox.html',
      link: 'guide/admin_checkbox.html',
      complete: true,
    },
    {
      content: '[Admin] Dropdown',
      name: 'dropdown.html',
      link: 'guide/dropdown.html',
      complete: true,
    },
    {
      content: '[Admin] Input (search, text, textarea, file)',
      name: 'admin_input.html',
      link: 'guide/admin_input.html',
      complete: true,
    },
    {
      content: '[Admin] Radio',
      name: 'admin_radio.html',
      link: 'guide/admin_radio.html',
      complete: true,
    },
  ],
};
