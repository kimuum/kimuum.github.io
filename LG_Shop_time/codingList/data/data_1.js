
const filePath_1 = './Mobile/dist/html/';
const detail = 'detail/';
const cart = 'cart/';
const checkout = 'checkout/';
const address = 'address/';
const register = 'register/';
const pin_code = 'pin_code/';
const select = 'select/';
const payment = 'payment/';
const myorder = 'myorder/';
const common = 'common/';

const data_1 = {
  device: 'Mobile',
  headData: [
    
    {
      content: '카테고리',
      width: `20%`,
    },
    {
      content: '경로',
      width: `40%`,
    },
    {
      content: '링크',
      width: `30%`,
    },
    {
      content: '상태',
      width: `10%`,
    },
  ],
  list: [
    {
      content: '01. Detail',
      children: [
        {
          content: '그룹',
          link: filePath_1 + detail + 'detail_group.html',
          name: 'detail_group',
          complete: true,
        },
        {
          content: '일반',
          link: filePath_1 + detail +  'detail_general.html',
          name: 'detail_general',
          complete: true,
        },
        {
          content: '일반 > 옵션 N개 있을 시',
          link: filePath_1 + detail +  'detail_general_option_case.html',
          name: 'detail_general_option_case',
          complete: true,
        },
        {
          content: '일반 > 상세옵션 있을 시',
          link: filePath_1 + detail + 'detail_general_option.html',
          name: 'detail_general_option',
          complete: true,
        },
        {
          content: '일반 > 상세옵션 없을 시',
          link: filePath_1 + detail + 'detail_general_no_option.html',
          name: 'detail_general_no_option',
          complete: true,
        },
        {
          content: '일반상품 상세 > 구매불가 상품',
          link: filePath_1 + detail + 'detail_general_unavailable.html',
          name: 'detail_general_unavailable',
          complete: true,
        },
        {
          content: '호텔',
          link: filePath_1 + detail + 'detail_hotel.html',
          name: 'detail_hotel',
          complete: true,
        },
        {
          content: '일반상품 상세 > 품절',
          link: filePath_1 + detail + 'detail_general_soldout.html',
          name: 'detail_general_soldout',
          complete: true,
        },
        {
          content: '팝업 > 쿠폰목록',
          link: filePath_1 + detail + 'popup_detail_coupon_list.html',
          name: 'popup_detail_coupon_list',
          complete: true,
        },
        {
          content: '팝업 > 토스트 팝업01',
          link: filePath_1 + detail + 'popup_detail_toast_01.html',
          name: 'popup_detail_toast_01',
          complete: true,
        },
        {
          content: '팝업 > 토스트 팝업02',
          link: filePath_1 + detail + 'popup_detail_toast_02.html',
          name: 'popup_detail_toast_02',
          complete: true,
        },
        {
          content: '팝업 > 로그인',
          link: filePath_1 + detail + 'popup_detail_01.html',
          name: 'popup_detail_01',
          complete: true,
        },
        {
          content: '팝업 > 장바구니 추가',
          link: filePath_1 + detail + 'popup_detail_02.html',
          name: 'popup_detail_02',
          complete: true,
        },
        {
          content: '팝업 > 상세 옵션',
          link: filePath_1 + detail + 'popup_detail_option.html',
          name: 'popup_detail_option',
          complete: true,
        },
        {
          content: '팝업 > 토스트(공통)',
          link: filePath_1 + detail + 'popup_detail_toast.html',
          name: 'popup_detail_toast',
          complete: true,
        },
      ],
    },
    {
      content: '02. Cart',
      children: [
        {
        content: '장바구니 목록',
        link: filePath_1 + cart + 'cart_list.html',
        name: 'cart_list',
       complete: true,
      },
      {
        content: '장바구니 목록 없음',
        link: filePath_1 + cart + 'cart_no_list.html',
        name: 'cart_no_list',
        complete: true,
      },
      {
        content: '장바구니 목록 > 토스트 팝업',
        link: filePath_1 + cart + 'popup_cart_toast_01.html',
        name: 'popup_cart_toast_01',
        complete: true,
      },
      {
        content: '장바구니 목록 > 토스트 팝업',
        link: filePath_1 + cart + 'popup_cart_toast_02.html',
        name: 'popup_cart_toast_02',
        complete: true,
      },
      {
        content: '팝업 > list Delete 클릭 시',
        link: filePath_1 + cart + 'popup_cart_01.html',
        name: 'popup_cart_01',
        complete: true,
      },
      {
        content: '팝업 > Cart_Cart list_로그인 POPUP',
        link: filePath_1 + cart + 'popup_cart_02.html',
        name: 'popup_cart_02',
        complete: true,
      },
      ],
    },
    {
      content: '03-1. Checkout',
      children: [
        {
          content: '주문서 작성',
          link: filePath_1 + checkout + 'checkout.html',
          name: 'checkout',
          complete: true,
        },
        {
          content: '주문정보 비노출',
          link: filePath_1 + checkout + 'checkout_order_info_non.html',
          name: 'checkout_order_info_non',
          complete: true,
        },
        {
          content: '결제 정보',
          link: filePath_1 + checkout + 'checkout_payment_info.html',
          name: 'checkout_payment_info',
          complete: true,
        },
        {
          content: '쿠폰목록',
          link: filePath_1 + checkout + 'checkout_coupon_list.html',
          name: 'checkout_coupon_list',
          complete: true,
        },
        {
          content: '팝업 > 쿠폰 선택 옵션',
          link: filePath_1 + checkout + 'popup_coupon_option.html',
          name: 'popup_coupon_option',
          complete: true,
        },
        {
          content: '쿠폰목록 없음',
          link: filePath_1 + checkout + 'checkout_coupon_no_list.html',
          name: 'checkout_coupon_no_list',
          complete: true,
        },
        {
          content: '주문완료',
          link: filePath_1 + checkout + 'checkout_order_complete.html',
          name: 'checkout_order_complete',
          complete: true,
        },
        {
          content: '모바일 연결_작성중',
          link: filePath_1 + checkout + 'checkout_mobile_connect_progress.html',
          name: 'checkout_mobile_connect_progress',
          complete: true,
        },
        {
          content: '팝업 > 배송불가 지역',
          link: filePath_1 + checkout + 'popup_checkout_01.html',
          name: 'popup_checkout_01',
          complete: true,
        },
        {
          content: '팝업 > 배송지 미입력한 경우',
          link: filePath_1 + checkout + 'popup_checkout_02.html',
          name: 'popup_checkout_02',
          complete: true,
        },
        {
          content: '팝업 > 청구주소 미입력한 경우',
          link: filePath_1 + checkout + 'popup_checkout_03.html',
          name: 'popup_checkout_03',
          complete: true,
        },
        {
          content: '팝업 > 결제방법 정보 미입력한 경우',
          link: filePath_1 + checkout + 'popup_checkout_04.html',
          name: 'popup_checkout_04',
          complete: true,
        },
        {
          content: '팝업 > 카드정보가 만료된 경우',
          link: filePath_1 + checkout + 'popup_checkout_05.html',
          name: 'popup_checkout_05',
          complete: true,
        },
        {
          content: '팝업 > 재고 없는 경우',
          link: filePath_1 + checkout + 'popup_checkout_06.html',
          name: 'popup_checkout_06',
          complete: true,
        },
        {
          content: '팝업 > 약관 동의하지 않은 경우_01',
          link: filePath_1 + checkout + 'popup_checkout_09.html',
          name: 'popup_checkout_09',
          complete: true,
        },
        {
          content: '팝업 > 약관 동의하지 않은 경우_02',
          link: filePath_1 + checkout + 'popup_checkout_10.html',
          name: 'popup_checkout_10',
          complete: true,
        },
        {
          content: '팝업 > 수량 없는 경우',
          link: filePath_1 + checkout + 'popup_checkout_11.html',
          name: 'popup_checkout_11',
          complete: true,
        },
        {
          content: '팝업 > 유효하지 않은 코드',
          link: filePath_1 + checkout + 'popup_checkout_12.html',
          name: 'popup_checkout_12',
          complete: true,
        },
        {
          content: '팝업 > 미입력',
          link: filePath_1 + checkout + 'popup_checkout_13.html',
          name: 'popup_checkout_13',
          complete: true,
        },
        {
          content: '팝업 > 약관 상세',
          link: filePath_1 + checkout + 'popup_checkout_terms_01.html',
          name: 'popup_checkout_terms_01',
          complete: true,
        },
        {
          content: '팝업 > 약관 상세_02',
          link: filePath_1 + checkout + 'popup_checkout_terms_02.html',
          name: 'popup_checkout_terms_02',
          complete: true,
        },
      ]
    },
    {
      content: '03-2. Add a new shipping address',
      children: [
        {
          content: '배송 > 주소 등록',
          link: filePath_1 + address + 'address_shipping_input.html',
          name: 'address_shipping_input',
          complete: true,
        },
        {
          content: '배송 > 주소 등록 에러',
          link: filePath_1 + address + 'address_shipping_input_error.html',
          name: 'address_shipping_input_error',
          complete: true,
        },
        {
          content: '배송 > 주소 수정',
          link: filePath_1 + address + 'address_shipping_edit.html',
          name: 'address_shipping_edit',
          complete: true,
        },
        {
          content: '청구 > 주소 등록',
          link: filePath_1 + address + 'address_billing_input.html',
          name: 'address_billing_input',
          complete: true,
        },
        {
          content: '청구 > 주소 등록 에러',
          link: filePath_1 + address + 'address_billing_input_error.html',
          name: 'address_billing_input_error',
          complete: true,
        },
        {
          content: '청구 > 주소 수정',
          link: filePath_1 + address + 'address_billing_input_edit.html',
          name: 'address_billing_input_edit',
          complete: true,
        },
        {
          content: '팝업 > 배송불가 지역',
          link: filePath_1 + address + 'popup_address_02.html',
          name: 'popup_address_02',
          complete: true,
        },
      ]
    },
    {
      content: '03-3. Register a credit card',
      children: [
        {
          content: '결제카드등록',
          link: filePath_1 + register + 'register_credit_card.html',
          name: 'register_credit_card',
          complete: true,
        },
        {
          content: '결제카드등록 에러',
          link: filePath_1 + register + 'register_credit_card_error.html',
          name: 'register_credit_card_error',
          complete: true,
        },
        {
          content: '결제카드등록 입력완료',
          link: filePath_1 + register + 'register_credit_card_complete.html',
          name: 'register_credit_card_complete',
          complete: true,
        },
        {
          content: '팝업 > 동의 하지 않은 경우',
          link: filePath_1 + register + 'popup_register_01.html',
          name: 'popup_register_01',
          complete: true,
        },
      ]
    },
    {
      content: '03-4. PIN CODE',
      children: [
        {
          content: '핀번호 등록',
          link: filePath_1 + pin_code + 'pin_setup.html',
          name: 'pin_setup',
          complete: true,
        },
        {
          content: '핀번호 등록 에러',
          link: filePath_1 + pin_code + 'pin_setup_error.html',
          name: 'pin_setup_error',
          complete: true,
        },
        {
          content: '핀번호 입력',
          link: filePath_1 + pin_code + 'pin_input.html',
          name: 'pin_input',
          complete: true,
        },
        {
          content: '핀번호 입력 에러',
          link: filePath_1 + pin_code + 'pin_input_error.html',
          name: 'pin_input_error',
          complete: true,
        },
        {
          content: '팝업 > 입력된 CODE가 일치하지 않는 경우',
          link: filePath_1 + pin_code + 'popup_pin_01.html',
          name: 'popup_pin_01',
          complete: true,
        },
        {
          content: '팝업 > 결제 실패된 경우',
          link: filePath_1 + pin_code + 'popup_pin_02.html',
          name: 'popup_pin_02',
          complete: true,
        },
        {
          content: '팝업 > 새로운 PINCODE 생성',
          link: filePath_1 + pin_code + 'popup_pin_03.html',
          name: 'popup_pin_03',
          complete: true,
        },
      ]
    },
    {
      content: '03-5. Select a shipping address',
      children: [
        {
          content: '주소선택목록',
          link: filePath_1 + select + 'address_select_list.html',
          name: 'address_select_list',
          complete: true,
        },
        {
          content: '주소선택목록 > 삭제 알림',
          link: filePath_1 + select + 'popup_address_select_toast.html',
          name: 'popup_address_select_toast',
          complete: true,
        },
        {
          content: '청구지 선택목록',
          link: filePath_1 + select + 'address_billing_select_list.html',
          name: 'address_billing_select_list',
          complete: true,
        },
        {
          content: '청구지 선택목록 > 삭제 알림',
          link: filePath_1 + select + 'address_billing_select_list_toast.html',
          name: 'address_billing_select_list_toast',
          complete: true,
        },
      ]
    },
    {
      content: '06. Select a payment method',
      children: [
        {
          content: '06-3-6-1. select a payment method',
          link: filePath_1 + payment + 'payment_method.html',
          name: 'payment_method',
          complete: true,
        },
        {
          content: '06-3-6-3. select a payment method_등록된 카드 모두 삭제한 경우',
          link: filePath_1 + payment + 'payment_no_method.html',
          name: 'payment_no_method',
          complete: true,
        },
      ]
    },
    {
      content: '09 My Order',
      children: [
        {
          content: 'My order',
          link: filePath_1 + myorder + 'myorder.html',
          name: 'My Order',
          complete: true,
        },
        {
          content: 'My order Cancelled',
          link: filePath_1 + myorder + 'myorder_cancelled.html',
          name: 'myorder_cancelled',
          complete: true,
        },
        {
          content: 'My Orders Date',
          link: filePath_1 + myorder + 'popup_myOrder_date.html',
          name: 'popup My Order Date',
          complete: true,
        },
        {
          content: 'My Orders Details',
          link: filePath_1 + myorder + 'myorder_details.html',
          name: 'My Orders Details',
          complete: true,
        },
        {
          content: 'My Track Package',
          link: filePath_1 + myorder + 'myorder_track_package.html',
          name: 'My Track Package',
          complete: true,
        },
      ]
    },
    {
      content: 'Mobile loading',
      children: [
        {
          content: 'Loading',
          link: filePath_1 + common + 'loading.html',
          name: 'loading',
          complete: true,
        },
      ]
    }
  ]
}