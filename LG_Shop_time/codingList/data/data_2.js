const filePath_2 = './TV/dist/';
const data_2 = {
  device: 'TV',
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
      content: '공통',
      children: [
        {
          content: 'LNB_default',
          link: filePath_2 + 'lnb_default.html',
          name: 'lnb_default',
          complete: true,
        },
        {
          content: 'LNB_Preview',
          link: filePath_2 + 'lnb_preview.html',
          name: 'lnb_preview',
          complete: true,
        },
        {
          content: 'LNB_1depth Selected',
          link: filePath_2 + 'lnb_active.html',
          name: 'lnb_active',
          complete: true,
        },
        {
          content: 'LNB_Partners',
          link: filePath_2 + 'LNB_Partners.html',
          name: 'LNB_Partners',
          complete: true,
        },
        {
          content: 'QR CODE',
          link: filePath_2 + 'popup_QR_code.html',
          name: 'popup_QR_code',
          complete: true,
        },
        {
          content: 'Loading',
          link: filePath_2 + 'loading.html',
          name: 'loading',
          complete: true,
        },
        {
          content: 'Toast 팝업',
          link: filePath_2 + 'popup_toast.html',
          name: 'popup_toast',
          complete: true,
        },
        {
          content: '서비스 중지 공지 화면',
          link: filePath_2 + 'common_service_suspended.html',
          name: 'common_service_suspended',
          complete: true,
        },
      ],
    },
    {
      content: '01_00_Home(Watch Now)',
      children: [
        {
          content: 'WatchNow_첫 진입 시',
          link: filePath_2 + 'home.html',
          name: 'home',
          complete: true,
        },
        {
          content: 'TVApp종료_팝업',
          link: filePath_2 + 'popup_app_exit.html',
          name: 'popup_app_exit',
          complete: true,
        },
      ],
    },
    {
      content: '01_01_Player(Video_Full)',
      children: [
        {
          content: 'FULL 영상 _ LIVE & 가로영상 > 샵나우 > List 없을 경우(공통)',
          link: filePath_2 + 'player_product_no_list.html',
          name: 'player_product_no_list',
          complete: true,
        },
        {
          content: 'FULL 영상 _ LIVE & 가로영상',
          link: filePath_2 + 'player_landscape.html',
          name: 'player_landscape',
          complete: true,
        },
        {
          content: 'FULL 영상 _ VOD & 가로영상',
          link: filePath_2 + 'player_landscape_vod.html',
          name: 'player_landscape_vod',
          complete: true,
        },
        {
          content: 'FULL 영상 _ 샵나우',
          link: filePath_2 + 'player_shopnow.html',
          name: 'player_shopnow',
          complete: true,
        },
        {
          content: 'FULL 영상 _ 라이브채널',
          link: filePath_2 + 'player_live_channel.html',
          name: 'player_live_channel',
          complete: true,
        },
        {
          content: 'FULL 영상 _ Featured shows',
          link: filePath_2 + 'player_featured_show.html',
          name: 'player_featured_show',
          complete: true,
        },
        {
          content: 'FULL 영상 _ LIVE & 세로영상 > 채팅',
          link: filePath_2 + 'player_chatting.html',
          name: 'player_chatting',
          complete: true,
        },
        {
          content: 'FULL 영상 _ LIVE & 세로영상 > 채팅 - nodata',
          link: filePath_2 + 'player_chatting_nodata.html',
          name: 'player_chatting_nodata',
          complete: true,
        },
        {
          content: 'FULL 영상 _ VOD & 세로영상(채팅내용조회 포함)',
          link: filePath_2 + 'player_portrait_vod.html',
          name: 'player_portrait_vod',
          complete: true,
        },
        {
          content: 'FULL 영상 _ Media & 가로영상',
          link: filePath_2 + 'player_landscape_media.html',
          name: 'player_landscape_media',
          complete: true,
        },
        {
          content: 'FULL 영상 _ Media & 세로영상',
          link: filePath_2 + 'player_portrait_media.html',
          name: 'player_portrait_media',
          complete: true,
        },
        {
          content: 'FULL영상_QROverlay_US_ShopLC,Ontv4u',
          link: filePath_2 + 'player_landscape_us.html',
          name: 'player_landscape_us',
          complete: true,
        },
        {
          content: 'FULL영상_QROverlay_GB_QVC',
          link: filePath_2 + 'player_landscape_gb.html',
          name: 'player_landscape_gb',
          complete: true,
        },
        {
          content: 'FULL영상_QROverlay_DE_QVC',
          link: filePath_2 + 'player_landscape_de.html',
          name: 'player_landscape_de',
          complete: true,
        },
        {
          content: 'FULL영상_QROverlay_RU_Juvelirochka',
          link: filePath_2 + 'player_landscape_ru.html',
          name: 'player_landscape_ru',
          complete: true,
        },
        {
          content: 'FULL영상_QROverlay_RU_Liveshopping',
          link: filePath_2 + 'player_landscape_ru_02.html',
          name: 'player_landscape_ru_02',
          complete: true,
        },
      ]
    },
    {
      content: '01_02_Detail',
      children: [
        {
          content: '01_02_2_details_group',
          link: filePath_2 + 'detail_group.html',
          name: 'detail_group',
          complete: true,
        },
        {
          content: '01_02_2_details_group > 상품 No data',
          link: filePath_2 + 'detail_group_product_nodata.html',
          name: 'detail_group_product_nodata',
          complete: true,
        },
        {
          content: '01_02_2_details_group > youmaylike',
          link: filePath_2 + 'detail_group_recommend.html',
          name: 'detail_group_recommend',
          complete: true,
        },
        {
          content: '01_02_2_details_item',
          link: filePath_2 + 'detail_item.html',
          name: 'detail_item',
          complete: true,
        },
        {
          content: '01_02_4_details 구매불가 <br /> 01_02_3_details_show 구매불가',
          link: filePath_2 + 'detail_unavailable.html',
          name: 'detail_unavailable',
          complete: true,
        },
        {
          content: '01_02_5_details_hotel <br /> 01_02_3_details_show hotel',
          link: filePath_2 + 'detail_hotel.html',
          name: 'detail_hotel',
          complete: true,
        },
        {
          content: 'ITEM DETAIL_ 썸네일, DESCRIPTION > 로그인 화면 이동',
          link: filePath_2 + 'popup_detail_01.html',
          name: 'popup_detail_01',
          complete: true,
        },
        {
          content: 'ITEM DETAIL_ 썸네일, DESCRIPTION > Favorite 저장 안내',
          link: filePath_2 + 'popup_detail_02.html',
          name: 'popup_detail_02',
          complete: true,
        },
        {
          content: 'ITEM DETAIL_ 썸네일, DESCRIPTION > Favorite 취소 안내',
          link: filePath_2 + 'popup_detail_03.html',
          name: 'popup_detail_03',
          complete: true,
        },
        {
          content: '01_02_3_details_show > group thumnail',
          link: filePath_2 + 'detail_group_thumbnail.html',
          name: 'detail_group_thumbnail',
          complete: true,
        },
        {
          content: '01_02_6_details > 옵션 선택 팝업',
          link: filePath_2 + 'popup_detail_option_choice.html',
          name: 'popup_detail_option_choice',
          complete: true,
        },
        {
          content: '01_02_6_details > 쿠폰 다운로드 팝업',
          link: filePath_2 + 'popup_detail_coupon_download.html',
          name: 'popup_detail_coupon_download',
          complete: true,
        },
        {
          content: '01_02_6_details > DESCRIPTION 팝업',
          link: filePath_2 + 'popup_detail_info_description.html',
          name: 'popup_detail_info_description',
          complete: true,
        },
        {
          content: '01_02_6_details > RETURN & EXCHANGES 팝업',
          link: filePath_2 + 'popup_detail_info_return.html',
          name: 'popup_detail_info_return',
          complete: true,
        },
      ]
    },
    {
      content: '02_00_Partners',
      children: [
        {
          content: '상품 썸네일 예시',
          link: filePath_2 + 'guide_thumbnail.html',
          name: 'guide_thumbnail',
          complete: true,
        },
        {
          content: 'partners_LNB',
          link: filePath_2 + 'lnb_partners.html',
          name: 'lnb_partners',
          complete: true,
        },
        {
          content: 'partners_full',
          link: filePath_2 + 'partners_full.html',
          name: 'partners_full',
          complete: true,
        },
        {
          content: '[LIVE 영상 - 1개 - 영상 가로형] ',
          link: filePath_2 + 'partners_live_video_landscape.html',
          name: 'partners_live_video_landscape',
          complete: true,
        },
        {
          content: '[LIVE 영상 - 1개 - 영상 세로형]',
          link: filePath_2 + 'partners_live_video_portrait.html',
          name: 'partners_live_video_portrait',
          complete: true,
        },
        {
          content: '02_00_partners_장애 발생<br>02_00_partners_LIVE 방송 없음_full/half케이스',
          link: filePath_2 + 'partners_live_error_case.html',
          name: 'partners_live_error_case',
          complete: true,
        },
        {
          content: '02_01_partners_시청예약 알림 팝업',
          link: filePath_2 + 'popup_partners_view_reserve_notice.html',
          name: 'popup_partners_view_reserve_notice',
          complete: true,
        },
      ]
    },
    {
      content: '04_00_Top Deals',
      children: [
        {
          content: '04_00_Top Deals',
          link: filePath_2 + 'top_deals.html',
          name: 'top_deals',
          complete: true,
        },
      ]
    },
    {
      content: '06_Cart',
      children: [
        {
          content: '06_01_Cart',
          link: filePath_2 + 'cart_list.html',
          name: 'cart_list',
          complete: true,
        },
        {
          content: '06_01_Cart_제품 없을 시',
          link: filePath_2 + 'cart_no_list.html',
          name: 'cart_no_list',
          complete: true,
        },
      ]
    },
    {
      content: '07_Checkout',
      children: [
        {
          content: '07_01_Checkout',
          link: filePath_2 + 'checkout.html',
          name: 'checkout',
          complete: true,
        },
        {
          content: '07_01_Checkout > Order items',
          link: filePath_2 + 'checkout_order_items.html',
          name: 'checkout_order_items',
          complete: true,
        },
        {
          content: '07_01_Checkout > OFFERS & Promotion',
          link: filePath_2 + 'checkout_order_list_promotion.html',
          name: 'checkout_order_list_promotion',
          complete: true,
        },
        {
          content: '07_01_Checkout > Offers & promotion > 등록된 쿠폰 없을 경우',
          link: filePath_2 + 'checkout_order_list_no_promotion.html',
          name: 'checkout_order_list_no_promotion',
          complete: true,
        },
        {
          content: '07_Checkout > Order complete',
          link: filePath_2 + 'checkout_order_complete.html',
          name: 'checkout_order_complete',
          complete: true,
        },
        {
          content: '07_01_Checkout > 약관동의',
          link: filePath_2 + 'popup_checkout_terms.html',
          name: 'popup_checkout_terms',
          complete: true,
        },
        {
          content: '07_01_Checkout > 약관동의',
          link: filePath_2 + 'popup_checkout_privacy.html',
          name: 'popup_checkout_privacy',
          complete: true,
        },
        {
          content: '07_01_Checkout > Pin code 입력 팝업',
          link: filePath_2 + 'popup_checkout_billing_Pin_code.html',
          name: 'popup_checkout_billing_Pin_code',
          complete: true,
        },
        {
          content: '07_01_Checkout > Pin code Error 팝업',
          link: filePath_2 + 'popup_checkout_billing_Pin_code_error.html',
          name: 'popup_checkout_billing_Pin_code_error',
          complete: true,
        },
      ]
    },
    {
      content: '08_My page',
      children: [
        {
          content: '08_01_1_my info_로그인 전',
          link: filePath_2 + 'my_info_login.html',
          name: 'my_info_login',
          complete: true,
        },
        {
          content: '08_01_2_my info_로그인 후 > payment <br> 08_01_2_my info_로그인 후 > payment (등록된 정보가 없는 경우)',
          link: filePath_2 + 'my_info_payment.html',
          name: 'my_info_payment',
          complete: true,
        },
        {
          content: '08_01_2_my info_로그인 후 > payment <br> 08_01_2_my info_로그인 후 > payment (등록된 정보가 없는 경우)',
          link: filePath_2 + 'my_info_payment_nodata.html',
          name: 'my_info_payment_nodata',
          complete: true,
        },
        {
          content: '08_01_3_my info_로그인 후 > billing address <br> 08_01_3_my info_로그인 후 > billing address (등록된 정보가 없는 경우)',
          link: filePath_2 + 'my_info_billing_address.html',
          name: 'my_info_billing_address',
          complete: true,
        },
        {
          content: '08_01_4_my info_로그인 후 > shipping address <br> 08_01_4_my info_로그인 후 > shipping address (등록된 정보가 없는 경우)',
          link: filePath_2 + 'my_info_shipping_address.html',
          name: 'my_info_shipping_address',
          complete: true,
        },
        {
          content: '08_01_5_my info_로그인 후 > coupon <br> 08_01_5_my info_로그인 후 > coupon (등록된 정보가 없는 경우)',
          link: filePath_2 + 'my_info_coupon.html',
          name: 'my_info_coupon',
          complete: true,
        },
        {
          content: '08_02_1_my orders > orders <br> 08_02_4_my orders_주문 목록 없는 경우',
          link: filePath_2 + 'my_order_list.html',
          name: 'my_order_list',
          complete: true,
        },
        {
          content: '08_02_1_my orders > 주문 취소 등록 <br> 08_02_1_my orders > 주문 반품 등록 <br> 08_02_1_my orders > 주문 교환 등록',
          link: filePath_2 + 'popup_my_order.html',
          name: 'popup_my_order',
          complete: true,
        },
        {
          content: '08_02_2_my orders_order datails',
          link: filePath_2 + 'pop_my_order_details.html',
          name: 'pop_my_order_details',
          complete: true,
        },
        {
          content: '08_02_3_my orders_track package',
          link: filePath_2 + 'pop_my_order_track_package.html',
          name: 'pop_my_order_track_package',
          complete: true,
        },
        {
          content: '08_02_5_my orders_cancelled orders <br> 08_02_7_my orders_주문 취소 목록 없는 경우',
          link: filePath_2 + 'my_order_cancel_list.html',
          name: 'my_order_cancel_list',
          complete: true,
        },
        {
          content: '08_02_6_my orders_cancellation details',
          link: filePath_2 + 'pop_my_order_cancel_details.html',
          name: 'pop_my_order_cancel_details',
          complete: true,
        },
      ]
    },
    {
      content: '09_Category',
      children: [
        {
          content: 'CATEGORY > Show',
          link: filePath_2 + 'category_show.html',
          name: 'category_show',
          complete: true,
        },
        {
          content: 'CATEGORY > Show - No data',
          link: filePath_2 + 'category_show_nodata.html',
          name: 'category_show_nodata',
          complete: true,
        },
        {
          content: 'CATEGORY > Item',
          link: filePath_2 + 'category_item.html',
          name: 'category_item',
          complete: true,
        },
        {
          content: 'CATEGORY > Item - No data',
          link: filePath_2 + 'category_item_nodata.html',
          name: 'category_item_nodata',
          complete: true,
        },
      ]
    },
  ]
}