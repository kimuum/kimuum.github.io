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
      width: `10%`,
    },
    {
      content: 'Depth 1',
      width: `20%`,
    },
    {
      content: 'Depth 2',
      width: `20%`,
    },
    {
      content: 'Depth 3',
      width: `20%`,
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
      content: '앱',
      children: [
        {
          content: '진입',
          children: [
            {
              content: 'splash',
              children: [
                {
                  content: '',
                  name: 'enter/splash.html',
                  link: 'enter/splash.html',
                  complete: true,
                },
              ],
            },
            {
              content: '앱 접근 권한 안내',
              children: [
                {
                  content: '',
                  name: 'enter/app_guide.html',
                  link: 'enter/app_guide.html',
                  complete: true,
                },
              ],
            },
            {
              content: '온보딩 페이지',
              children: [
                {
                  content: '',
                  name: 'enter/onboarding.html',
                  link: 'enter/onboarding.html',
                  complete: true,
                },
                {
                  content: '',
                  name: 'enter/onboarding_last.html',
                  link: 'enter/onboarding_last.html',
                  complete: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      content: '로그인',
      children: [
        {
          content: '로그인 - main',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'login/login.html',
                  link: 'login/login.html',
                  complete: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      content: '회원가입',
      children: [
        {
          content: '약관 동의',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'join/agree.html',
                  link: 'join/agree.html',
                  complete: true,
                },
                {
                  content: '서비스 이용약관',
                  name: 'join/join_terms.html',
                  link: 'join/join_terms.html',
                  complete: true,
                },
                {
                  content: '개인정보 수집/이용 동의',
                  name: 'join/privacy_agree.html',
                  link: 'join/privacy_agree.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: '소속 정보',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'join/business_name.html',
                  link: 'join/business_name.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: '유저명',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'join/input_name.html',
                  link: 'join/input_name.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: '아이디',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'join/input_id.html',
                  link: 'join/input_id.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: '비밀번호',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'join/input_pw.html',
                  link: 'join/input_pw.html',
                  complete: true,
                },
              ],
            },
            {
              content: '비밀번호_확인',
              children: [
                {
                  content: '',
                  name: 'join/input_pw_check.html',
                  link: 'join/input_pw_check.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: '휴대폰 번호',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'join/input_phone_number.html',
                  link: 'join/input_phone_number.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: '주소 입력',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'join/input_address.html',
                  link: 'join/input_address.html',
                  complete: true,
                },
              ],
            },
            {
              content: '주소 검색 상세페이지_결과 없음',
              children: [
                {
                  content: '',
                  name: 'join/input_address_detail_empty.html',
                  link: 'join/input_address_detail_empty.html',
                  complete: true,
                },
              ],
            },
            {
              content: '주소 검색 상세페이지',
              children: [
                {
                  content: '',
                  name: 'join/input_address_detail.html',
                  link: 'join/input_address_detail.html',
                  complete: true,
                },
              ],
            },
            {
              content: '주소 입력 케이스',
              children: [
                {
                  content: '',
                  name: 'join/input_address_complete.html',
                  link: 'join/input_address_complete.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: '차량 정보',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'join/input_vehicle_info.html',
                  link: 'join/input_vehicle_info.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: '회원가입 완료',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'join/join_complete.html',
                  link: 'join/join_complete.html',
                  complete: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      content: 'ID/PW 찾기',
      children: [
        {
          content: '',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'find_id/find_id.html',
                  link: 'find_id/find_id.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: 'ID 찾기 결과 페이지',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'find_id/find_id_result.html',
                  link: 'find_id/find_id_result.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: 'PW 찾기 결과 페이지',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'find_id/find_pw_result.html',
                  link: 'find_id/find_pw_result.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: '비밀번호 변경',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'find_id/change_pw.html',
                  link: 'find_id/change_pw.html',
                  complete: true,
                },
                {
                  content: '비밀번호 변경_확인',
                  name: 'find_id/change_pw_check.html',
                  link: 'find_id/change_pw_check.html',
                  complete: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      content: 'Home',
      children: [
        {
          content: 'Home - AOS',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'home/home_aos.html',
                  link: 'home/home_aos.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: 'Home - iOS',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'home/home_ios.html',
                  link: 'home/home_ios.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: '충전 리포트',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'home/charge_report.html',
                  link: 'home/charge_report.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: 'NFC 충전',
          children: [
            {
              content: '결제 카드 선택',
              children: [
                {
                  content: '',
                  name: 'home/nfc_list.html',
                  link: 'home/nfc_list.html',
                  complete: true,
                },
              ],
            },
            {
              content: '결제 카드 선택',
              children: [
                {
                  content: '',
                  name: 'home/nfc_list_empty.html',
                  link: 'home/nfc_list_empty.html',
                  complete: true,
                },
              ],
            },
            {
              content: '카드리더기',
              children: [
                {
                  content: '',
                  name: 'home/nfc_card_reader.html',
                  link: 'home/nfc_card_reader.html',
                  complete: true,
                },
              ],
            },
            {
              content: '(공통) 충전 대기',
              children: [
                {
                  content: '',
                  name: 'home/charge_standby.html',
                  link: 'home/charge_standby.html',
                  complete: true,
                },
              ],
            },
            {
              content: '(급속) 충전 대기_결제 완료',
              children: [
                {
                  content: '',
                  name: 'home/charge_standby_pay.html',
                  link: 'home/charge_standby_pay.html',
                  complete: true,
                },
              ],
            },
            {
              content: '(완속) 충전 대기_결제 완료',
              children: [
                {
                  content: '',
                  name: 'home/charge_standby_pay_slow.html',
                  link: 'home/charge_standby_pay_slow.html',
                  complete: true,
                },
              ],
            },
            {
              content: '(급속) 충전 중',
              children: [
                {
                  content: '',
                  name: 'home/charging.html',
                  link: 'home/charging.html',
                  complete: true,
                },
              ],
            },
            {
              content: '(완속) 충전 중',
              children: [
                {
                  content: '',
                  name: 'home/charging_slow.html',
                  link: 'home/charging_slow.html',
                  complete: true,
                },
              ],
            },
            {
              content: '(급속) 충전 완료',
              children: [
                {
                  content: '',
                  name: 'home/charge_complete.html',
                  link: 'home/charge_complete.html',
                  complete: true,
                },
              ],
            },
            {
              content: '(완속) 충전 완료',
              children: [
                {
                  content: '',
                  name: 'home/charge_complete_slow.html',
                  link: 'home/charge_complete_slow.html',
                  complete: true,
                },
              ],
            },
            {
              content: '충전 중지 확인 팝업',
              children: [
                {
                  content: '',
                  name: 'home/charge_popup_01.html',
                  link: 'home/charge_popup_01.html',
                  complete: true,
                },
              ],
            },
            {
              content: '충전기 미연결 팝업',
              children: [
                {
                  content: '',
                  name: 'home/charge_popup_02.html',
                  link: 'home/charge_popup_02.html',
                  complete: true,
                },
              ],
            },
            {
              content: '충전기 오류 팝업',
              children: [
                {
                  content: '',
                  name: 'home/charge_popup_03.html',
                  link: 'home/charge_popup_03.html',
                  complete: true,
                },
              ],
            },
            {
              content: 'Autocharge 상세',
              children: [
                {
                  content: '',
                  name: 'home/autocharge_detail.html',
                  link: 'home/autocharge_detail.html',
                  complete: true,
                },
              ],
            },
            {
              content: 'Autocharge 상세_바텀시트',
              children: [
                {
                  content: '',
                  name: 'home/autocharge_detail_bottom_sheet.html',
                  link: 'home/autocharge_detail_bottom_sheet.html',
                  complete: true,
                },
              ],
            },
            {
              content: 'Autocharge 상세_약관 상세',
              children: [
                {
                  content: '',
                  name: 'home/autocharge_terms.html',
                  link: 'home/autocharge_terms.html',
                  complete: true,
                },
              ],
            },
            {
              content: 'Autocharge 설정 완료',
              children: [
                {
                  content: '',
                  name: 'home/autocharge_complete.html',
                  link: 'home/autocharge_complete.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: 'QR 스캔',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'home/qr_scan.html',
                  link: 'home/qr_scan.html',
                  complete: true,
                },
              ],
            },
            {
              content: '충전기 정보 직접 입력',
              children: [
                {
                  content: '',
                  name: 'home/charge_info.html',
                  link: 'home/charge_info.html',
                  complete: true,
                },
              ],
            },
            {
              content: '충전 카드 미등록 팝업',
              children: [
                {
                  content: '',
                  name: 'home/card_empty_popup.html',
                  link: 'home/card_empty_popup.html',
                  complete: true,
                },
              ],
            },
            {
              content: '결제 수단 미등록 팝업',
              children: [
                {
                  content: '',
                  name: 'home/payment_empty_popup.html',
                  link: 'home/payment_empty_popup.html',
                  complete: true,
                },
              ],
            },
            {
              content: '충전 정보 확인 페이지',
              children: [
                {
                  content: '',
                  name: 'home/charge_info_check.html',
                  link: 'home/charge_info_check.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: 'Autocharge',
          children: [
            {
              content: '신규 차량 팝업',
              children: [
                {
                  content: '1~2대 case',
                  name: 'home/new_vehicle_case_1_popup.html',
                  link: 'home/new_vehicle_case_1_popup.html',
                  complete: true,
                },
                {
                  content: '3대 case',
                  name: 'home/new_vehicle_case_2_popup.html',
                  link: 'home/new_vehicle_case_2_popup.html',
                  complete: true,
                },
                {
                  content: '신규 차량 등록 페이지 / 메뉴 > 신규 차량 등록랑 같음',
                  name: 'menu/vehicle_add_new.html',
                  link: 'menu/vehicle_add_new.html',
                  complete: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      content: '충전소 검색',
      children: [
        {
          content: '충전소 검색 홈',
          children: [
            {
              content: '바텀 시트_default',
              children: [
                {
                  content: '',
                  name: 'search/search_home.html',
                  link: 'search/search_home.html',
                  complete: true,
                },
              ],
            },
            {
              content: '바텀 시트_최소 높이',
              children: [
                {
                  content: '',
                  name: 'search/search_home_shrink.html',
                  link: 'search/search_home_shrink.html',
                  complete: true,
                },
              ],
            },
            {
              content: '바텀 시트_최대 높이',
              children: [
                {
                  content: '',
                  name: 'search/search_home_result.html',
                  link: 'search/search_home_result.html',
                  complete: true,
                },
              ],
            },
            {
              content: '지역 검색 팝업',
              children: [
                {
                  content: '',
                  name: 'search/search_location_popup.html',
                  link: 'search/search_location_popup.html',
                  complete: true,
                },
              ],
            },
            {
              content: '지도 상세',
              children: [
                {
                  content: '',
                  name: 'search/search_home_detail.html',
                  link: 'search/search_home_detail.html',
                  complete: true,
                },
              ],
            },
            {
              content: '필터 상세',
              children: [
                {
                  content: '',
                  name: 'search/search_filter.html',
                  link: 'search/search_filter.html',
                  complete: true,
                },
              ],
            },

            {
              content: '검색 결과 - 최근검색어',
              children: [
                {
                  content: '',
                  name: 'search/search.html',
                  link: 'search/search.html',
                  complete: true,
                },
              ],
            },
            {
              content: '검색 결과 - 최근검색어 null',
              children: [
                {
                  content: '',
                  name: 'search/search_null.html',
                  link: 'search/search_null.html',
                  complete: true,
                },
              ],
            },
            {
              content: '검색 결과 리스트_충전소 (탭1)',
              children: [
                {
                  content: '',
                  name: 'search/result_list.html',
                  link: 'search/result_list.html',
                  complete: true,
                },
              ],
            },
            {
              content: '검색 결과 리스트_목적지 (탭2)',
              children: [
                {
                  content: '',
                  name: 'search/result_list_2.html',
                  link: 'search/result_list_2.html',
                  complete: true,
                },
              ],
            },
            {
              content: '검색 결과 리스트_null',
              children: [
                {
                  content: '',
                  name: 'search/result_list_null.html',
                  link: 'search/result_list_null.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: '길찾기 내비 설정 팝업',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'search/navi_popup.html',
                  link: 'search/navi_popup.html',
                  complete: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      content: '충전소 상세',
      children: [
        {
          content: '',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'search_detail/search_detail.html',
                  link: 'search_detail/search_detail.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: '전화 걸기 팝업',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'search_detail/call_popup.html',
                  link: 'search_detail/call_popup.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: '알림 바텀시트',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'search_detail/notify_bottom_sheet.html',
                  link: 'search_detail/notify_bottom_sheet.html',
                  complete: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      content: '메뉴',
      children: [
        {
          content: '메뉴 홈',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'menu/menu_home.html',
                  link: 'menu/menu_home.html',
                  complete: true,
                },
              ],
            },
            {
              content: '회원 정보 확인 팝업',
              children: [
                {
                  content: '',
                  name: 'menu/check_member.html',
                  link: 'menu/check_member.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: '회원 정보',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'menu/member_info.html',
                  link: 'menu/member_info.html',
                  complete: true,
                },
              ],
            },
            {
              content: '비밀번호 변경_기존',
              children: [
                {
                  content: '',
                  name: 'menu/change_pw_old.html',
                  link: 'menu/change_pw_old.html',
                  complete: true,
                },
              ],
            },
            {
              content: '비밀번호 변경_변경할',
              children: [
                {
                  content: '',
                  name: 'menu/change_pw.html',
                  link: 'menu/change_pw.html',
                  complete: true,
                },
              ],
            },
            {
              content: '비밀번호 변경_확인',
              children: [
                {
                  content: '',
                  name: 'menu/change_pw_check.html',
                  link: 'menu/change_pw_check.html',
                  complete: true,
                },
              ],
            },
            {
              content: '비밀번호 완료 팝업',
              children: [
                {
                  content: '',
                  name: 'menu/change_pw_popup.html',
                  link: 'menu/change_pw_popup.html',
                  complete: true,
                },
              ],
            },
            {
              content: '휴대폰 번호',
              children: [
                {
                  content: '',
                  name: 'menu/input_phone_number.html',
                  link: 'menu/input_phone_number.html',
                  complete: true,
                },
              ],
            },
            {
              content: '회원 탈퇴',
              children: [
                {
                  content: '',
                  name: 'menu/cancel.html',
                  link: 'menu/cancel.html',
                  complete: true,
                },
              ],
            },
            {
              content: '회원 탈퇴 완료',
              children: [
                {
                  content: '',
                  name: 'menu/cancel_complete.html',
                  link: 'menu/cancel_complete.html',
                  complete: true,
                },
              ],
            },
            {
              content: '회원 탈퇴 팝업',
              children: [
                {
                  content: '',
                  name: 'menu/cancel_popup.html',
                  link: 'menu/cancel_popup.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: '알림',
          children: [
            {
              content: '알림',
              children: [
                {
                  content: '',
                  name: 'menu/notify.html',
                  link: 'menu/notify.html',
                  complete: true,
                },
              ],
            },
            {
              content: '알림 삭제 페이지',
              children: [
                {
                  content: '',
                  name: 'menu/notify_delete.html',
                  link: 'menu/notify_delete.html',
                  complete: true,
                },
              ],
            },
            {
              content: '알림_null',
              children: [
                {
                  content: '',
                  name: 'menu/notify_null.html',
                  link: 'menu/notify_null.html',
                  complete: true,
                },
              ],
            },
            {
              content: '알림 삭제 팝업',
              children: [
                {
                  content: '',
                  name: 'menu/notify_popup.html',
                  link: 'menu/notify_popup.html',
                  complete: true,
                },
              ],
            },
          ],
        },

        {
          content: '즐겨찾기',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'menu/bookmark.html',
                  link: 'menu/bookmark.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: '이용 내역',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'menu/history.html',
                  link: 'menu/history.html',
                  complete: true,
                },
              ],
            },
            {
              content: '이용 내역_필터',
              children: [
                {
                  content: '',
                  name: 'menu/history_filter.html',
                  link: 'menu/history_filter.html',
                  complete: true,
                },
              ],
            },
            {
              content: '결제 상세_완료 case',
              children: [
                {
                  content: '',
                  name: 'menu/pay_complete.html',
                  link: 'menu/pay_complete.html',
                  complete: true,
                },
              ],
            },
            {
              content: '결제 상세_미결제 case',
              children: [
                {
                  content: '',
                  name: 'menu/pay_failed.html',
                  link: 'menu/pay_failed.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: '결제 수단 관리',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'menu/payment.html',
                  link: 'menu/payment.html',
                  complete: true,
                },
              ],
            },
            {
              content: '결제 수단 관리_바텀 시트',
              children: [
                {
                  content: '',
                  name: 'menu/payment_bottom_sheet.html',
                  link: 'menu/payment_bottom_sheet.html',
                  complete: true,
                },
              ],
            },
            {
              content: '카드 추가_결제 수단 추가 완료',
              children: [
                {
                  content: '',
                  name: 'menu/payment_complete.html',
                  link: 'menu/payment_complete.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: '충전 카드',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'menu/charge_card.html',
                  link: 'menu/charge_card.html',
                  complete: true,
                },
              ],
            },
            {
              content: '충전 카드_null',
              children: [
                {
                  content: '',
                  name: 'menu/charge_card_null.html',
                  link: 'menu/charge_card_null.html',
                  complete: true,
                },
              ],
            },
            {
              content: '편집',
              children: [
                {
                  content: '',
                  name: 'menu/charge_card_edit.html',
                  link: 'menu/charge_card_edit.html',
                  complete: true,
                },
              ],
            },
            {
              content: '충전 카드 관리 바텀시트(자사)',
              children: [
                {
                  content: '',
                  name: 'menu/card_bottom_sheet.html',
                  link: 'menu/card_bottom_sheet.html',
                  complete: true,
                },
              ],
            },
            {
              content: '충전 카드 관리 바텀시트_카드명 편집',
              children: [
                {
                  content: '',
                  name: 'menu/card_bottom_sheet_edit.html',
                  link: 'menu/card_bottom_sheet_edit.html',
                  complete: true,
                },
              ],
            },
            {
              content: '충전 카드 관리 바텀시트(타사)',
              children: [
                {
                  content: '',
                  name: 'menu/card_bottom_sheet_other.html',
                  link: 'menu/card_bottom_sheet_other.html',
                  complete: true,
                },
              ],
            },
            {
              content: '회원 충전 카드 추가하기(nfc)',
              children: [
                {
                  content: '',
                  name: 'menu/add_card_nfc.html',
                  link: 'menu/add_card_nfc.html',
                  complete: true,
                },
              ],
            },
            {
              content: '회원 충전 카드 추가하기(직접)',
              children: [
                {
                  content: '',
                  name: 'menu/add_card_input.html',
                  link: 'menu/add_card_input.html',
                  complete: true,
                },
              ],
            },
            {
              content: '회원 충전 카드 추가하기 등록 완료',
              children: [
                {
                  content: '',
                  name: 'menu/add_card_complete.html',
                  link: 'menu/add_card_complete.html',
                  complete: true,
                },
              ],
            },
            {
              content: '타사 충전 카드 추가하기(nfc)',
              children: [
                {
                  content: '',
                  name: 'menu/other_add_card_nfc.html',
                  link: 'menu/other_add_card_nfc.html',
                  complete: true,
                },
              ],
            },
            {
              content: '타사 충전 카드 추가하기(직접)',
              children: [
                {
                  content: '',
                  name: 'menu/other_add_card_input.html',
                  link: 'menu/other_add_card_input.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: '설정',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'menu/settings.html',
                  link: 'menu/settings.html',
                  complete: true,
                },
              ],
            },
            {
              content: '개인정보 처리방침',
              children: [
                {
                  content: '',
                  name: 'menu/privacy.html',
                  link: 'menu/privacy.html',
                  complete: true,
                },
              ],
            },
            {
              content: '오픈 라이선스',
              children: [
                {
                  content: '',
                  name: 'menu/license.html',
                  link: 'menu/license.html',
                  complete: true,
                },
              ],
            },
            {
              content: '사업자 정보',
              children: [
                {
                  content: '',
                  name: 'menu/business_information.html',
                  link: 'menu/business_information.html',
                  complete: true,
                },
              ],
            },
            {
              content: '언어 설정 바텀시트 팝업',
              children: [
                {
                  content: '',
                  name: 'menu/language_bottom_sheet.html',
                  link: 'menu/language_bottom_sheet.html',
                  complete: true,
                },
              ],
            },
            {
              content: '차량 설정',
              children: [
                {
                  content: '',
                  name: 'menu/vehicle.html',
                  link: 'menu/vehicle.html',
                  complete: true,
                },
                {
                  content: '대표 차량 설정',
                  name: 'menu/vehicle_select.html',
                  link: 'menu/vehicle_select.html',
                  complete: true,
                },
                {
                  content: '차량 상세',
                  name: 'menu/vehicle_detail.html',
                  link: 'menu/vehicle_detail.html',
                  complete: true,
                },
                {
                  content: '신규 차량 등록',
                  name: 'menu/vehicle_add_new.html',
                  link: 'menu/vehicle_add_new.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: 'autocharge 설정',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'menu/autocharge.html',
                  link: 'menu/autocharge.html',
                  complete: true,
                },
              ],
            },
            {
              content: 'autocharge 설정_바텀시트 // 홈 > nfc 충전하고 같음 ',
              children: [
                {
                  content: '',
                  name: 'home/autocharge_detail_bottom_sheet.html',
                  link: 'home/autocharge_detail_bottom_sheet.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: '선호 내비 설정',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'menu/fav_navi.html',
                  link: 'menu/fav_navi.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: '공지사항',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'menu/notice.html',
                  link: 'menu/notice.html',
                  complete: true,
                },
              ],
            },
            {
              content: '공지사항_상세',
              children: [
                {
                  content: '',
                  name: 'menu/notice_detail.html',
                  link: 'menu/notice_detail.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: 'faq',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'menu/faq.html',
                  link: 'menu/faq.html',
                  complete: true,
                },
              ],
            },
            {
              content: '',
              children: [
                {
                  content: 'faq null',
                  name: 'menu/faq_null.html',
                  link: 'menu/faq_null.html',
                  complete: true,
                },
              ],
            },
          ],
        },
        {
          content: '이용안내',
          children: [
            {
              content: '',
              children: [
                {
                  content: '',
                  name: 'menu/information.html',
                  link: 'menu/information.html',
                  complete: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const dataGeneral = {
  device: 'General',
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
      content: 'Default',
      name: 'guide/default.html',
      link: 'guide/default.html',
      complete: true,
    },
    {
      content: 'Icon',
      name: 'general/icon.html',
      link: 'general/icon.html',
      complete: true,
    },
    {
      content: 'Accordion',
      name: 'general/accordion.html',
      link: 'general/accordion.html',
      complete: true,
    },
    {
      content: 'Badge',
      name: 'general/badge.html',
      link: 'general/badge.html',
      complete: true,
    },
    {
      content: 'Button',
      name: 'general/button.html',
      link: 'general/button.html',
      complete: true,
    },
    {
      content: 'Chart',
      name: 'general/chart.html',
      link: 'general/chart.html',
      complete: true,
    },
    {
      content: 'Calendar - 일 선택',
      name: 'general/calendar.html',
      link: 'general/calendar.html',
      complete: true,
    },
    {
      content: 'Calendar - 월 선택',
      name: 'general/calendar_month.html',
      link: 'general/calendar_month.html',
      complete: true,
    },
    {
      content: 'Checkbox',
      name: 'general/checkbox.html',
      link: 'general/checkbox.html',
      complete: true,
    },
    {
      content: 'Dropdown',
      name: 'general/dropdown.html',
      link: 'general/dropdown.html',
      complete: true,
    },
    {
      content: 'Gnb',
      name: 'general/gnb.html',
      link: 'general/gnb.html',
      complete: true,
    },
    {
      content: 'List',
      name: 'general/list.html',
      link: 'general/list.html',
      complete: true,
    },
    {
      content: 'Loading',
      name: 'general/loading.html',
      link: 'general/loading.html',
      complete: true,
    },
    {
      content: 'Navigation Bar',
      name: 'general/navigation_bar.html',
      link: 'general/navigation_bar.html',
      complete: true,
    },
    {
      content: 'Notification',
      name: 'general/notification.html',
      link: 'general/notification.html',
      complete: true,
    },
    {
      content: 'Popup 텍스트 + 하단 버튼 case',
      name: 'general/popup.html',
      link: 'general/popup.html',
      complete: true,
    },
    {
      content: 'Popup 텍스트만 있는 case',
      name: 'general/popup_2.html',
      link: 'general/popup_2.html',
      complete: true,
    },
    {
      content: 'Popup 예외 case',
      name: 'general/popup_3.html',
      link: 'general/popup_3.html',
      complete: true,
    },
    {
      content: 'Progress Bar',
      name: 'general/progress_bar.html',
      link: 'general/progress_bar.html',
      complete: true,
    },
    {
      content: 'Radio Button',
      name: 'general/radio_button.html',
      link: 'general/radio_button.html',
      complete: true,
    },
    {
      content: 'Tab',
      name: 'general/tab.html',
      link: 'general/tab.html',
      complete: true,
    },
    {
      content: 'Tab_toggle',
      name: 'general/tab_toggle.html',
      link: 'general/tab_toggle.html',
      complete: true,
    },
    {
      content: 'Switch',
      name: 'general/switch.html',
      link: 'general/switch.html',
      complete: true,
    },
    {
      content: 'Table',
      name: 'general/table.html',
      link: 'general/table.html',
      complete: true,
    },
    {
      content: 'Text Field + Search',
      name: 'general/text_field.html',
      link: 'general/text_field.html',
      complete: true,
    },
    {
      content: 'Token Bar',
      name: 'general/token_bar.html',
      link: 'general/token_bar.html',
      complete: true,
    },
    {
      content: 'Bottom Sheet Popup',
      name: 'general/bottom_sheet_popup.html',
      link: 'general/bottom_sheet_popup.html',
      complete: true,
    },
    {
      content: 'Toast Popup',
      name: 'general/toast_popup.html',
      link: 'general/toast_popup.html',
      complete: true,
    },
    {
      content: 'Tooltip',
      name: 'general/tooltip.html',
      link: 'general/tooltip.html',
      complete: true,
    },
  ],
};
