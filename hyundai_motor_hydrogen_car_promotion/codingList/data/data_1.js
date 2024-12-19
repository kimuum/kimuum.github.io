const device = 'USER';
const deviceName = 'user';

const headData = [
  {
    content: 'Depth 1',
    width: `10%`,
  },
  {
    content: 'Depth 2',
    width: `20%`,
  },
  {
    content: 'Depth 3',
    width: `15%`,
  },
  {
    content: '파일명',
    width: ``,
  },
  {
    content: '상태',
    width: `5%`,
  },
  {
    content: '마지막 업데이트',
    width: `15%`,
  },
];

const list = [
  {
    content: 'common',
    children: [
      {
        content: '퍼블리싱 가이드',
        folder: 'common',
        html: 'pub_guide',
        complete: "complete",
        update : "2023-09-14"
      },
      {
        content: 'Guide',
        folder: 'common',
        html: 'guide',
        complete: "complete",
        update : "2023-09-04"
      },
    ],
  },
  {
    content: 'Home',
    children: [
      {
        content: 'Main',
        folder: 'home',
        html: 'main',
        complete: "complete",
        update : "2023-09-04"
      },
      {
        content: 'Main 뉴스레터 구독 완료 케이스',
        folder: 'home',
        html: 'main_subscribe_complete',
        complete: "complete",
        update : "2023-09-04"
      },
    ],
  },
  {
    content: 'About Us',
    children: [
      {
        content: 'Who we are',
        folder: 'aboutus',
        html: 'aboutus_who',
        complete: "complete",
        update : "2023-10-31"
      },
      {
        content: 'Our Business',
        folder: 'aboutus',
        html: 'aboutus_business',
        complete: "complete",
        update : "2023-10-13"
      },
      {
        content: 'Our Network',
        folder: 'aboutus',
        html: 'aboutus_network',
        complete: "complete",
        update : "2023-10-13"
      },
    ],
  },
  {
    content: 'Newsroom',
    children: [
      {
        content: 'All',
        folder: 'newsroom',
        html: 'newsroom_all',
        complete: "complete",
        update : "2023-09-06"
      },
      {
        content: 'All',
        folder: 'newsroom',
        html: 'newsroom_subscribe_complete',
        complete: "complete",
        update : "2023-09-06"
      },
      {
        content: 'No Result',
        folder: 'newsroom',
        html: 'newsroom_no_result',
        complete: "complete",
        update : "2023-09-06"
      },
      {
        content: 'Insights',
        folder: 'newsroom',
        html: 'newsroom_insight',
        complete: "complete",
        update : "2023-09-06"
      },
      {
        content: 'Insight > Detail',
        folder: 'newsroom',
        html: 'newsroom_insight_detail',
        complete: "complete",
        update : "2023-09-06"
      },
      {
        content: 'Press Releases',
        folder: 'newsroom',
        html: 'newsroom_pr_release',
        complete: "complete",
        update : "2023-09-06"
      },
      {
        content: 'Report',
        folder: 'newsroom',
        html: 'newsroom_report',
        complete: "complete",
        update : "2023-09-06"
      },
      {
        content: 'Media Gallery',
        children: [
          {
            content: '',
            folder: 'newsroom',
            html: 'newsroom_gallery',
            complete: "complete",
            update : "2023-10-23"
          },
          {
            content: '미디어 카트에 있는 모든 정보를 삭제하는 버튼을 눌렀을 시 팝업',
            folder: 'newsroom',
            html: 'newsroom_gallery_cart_popup_01',
            complete: "complete",
            update : "2023-10-26"
          },
          {
            content: '미디어 카트 다운로드 용량 초과 에러 팝업',
            folder: 'newsroom',
            html: 'newsroom_gallery_cart_popup_02',
            complete: "complete",
            update : "2023-10-26"
          },
          {
            content: '"Download All" 기능 1시간 5번까지만 다운로드 조건 적용. 초과 시, 팝업',
            folder: 'newsroom',
            html: 'newsroom_gallery_cart_popup_03',
            complete: "complete",
            update : "2023-10-26"
          },
          {
            content: '미디어 카트 내용 없을 경우 케이스',
            folder: 'newsroom',
            html: 'newsroom_gallery_empty_cart',
            complete: "complete",
            update : "2023-10-23"
          },
          {
            content: '이미지 상세보기',
            folder: 'newsroom',
            html: 'poup_newsroom_gallery_img',
            complete: "complete",
            update : "2023-09-05"
          },
          {
            content: '동영상 상세보기',
            folder: 'newsroom',
            html: 'poup_newsroom_gallery_video',
            complete: "complete",
            update : "2023-08-25"
          },
        ],
      },
      {
        content: 'Newsroom 검색 결과',
        folder: 'newsroom',
        html: 'newsroom_search_result',
        complete: "complete",
        update : "2023-09-04"
      },
    ],
  },
  {
    content: 'Products',
    children: [
      {
        content: 'XCIENT Fuel Cell Tractor',
        folder: 'products',
        html: 'products_fuel_cell_tractor',
        complete: "complete",
        update : "2023-10-31"
      },
      {
        content: 'XCIENT Fuel Cell Truck',
        folder: 'products',
        html: 'products_fuel_cell_truck',
        complete: "complete",
        update : "2023-10-31"
      },
      {
        content: 'ELEC CITY Fuel Cell',
        folder: 'products',
        html: 'products_elec_city_fuel_cell',
        complete: "complete",
        update : "2023-10-31"
      },
      {
        content: 'ELEC CITY',
        folder: 'products',
        html: 'products_elec_city',
        complete: "complete",
        update : "2023-10-31"
      },
      {
        content: 'Fuel Cell System',
        folder: 'products',
        html: 'products_fuel_cell_system',
        complete: "complete",
        update : "2023-10-31"
      },
      {
        content: 'UNIVERSE Fuel Cell',
        folder: 'products',
        html: 'products_universe_fuel_cell',
        complete: "complete",
        update : "2023-10-31"
      },
    ],
  },
  {
    content: 'Contact Us',
    children: [
      {
        content: 'Contact Us',
        folder: 'contactus',
        html: 'contact_us',
        complete: "complete",
        update : "2023-09-05"
      },
      {
        content: 'Privacy Policy',
        folder: 'contactus',
        html: 'popup_contact_us_privacy_policy',
        complete: "complete",
        update : "2023-09-08"
      },
      {
        content: 'Inquiry received complete',
        folder: 'contactus',
        html: 'popup_contact_us_inquiry_received_complete',
        complete: "complete",
        update : "2023-07"
      },
    ],
  },
  {
    content: 'FAQs',
    children: [
      {
        content: 'FAQs',
        folder: 'faq',
        html: 'faq',
        complete: "complete",
        update : "2023-10-31"
      },

    ],
  },
  {
    content: 'Search',
    children: [
      {
        content: '',
        folder: 'search',
        html: 'search',
        complete: "complete",
        update : "2023-09-05"
      },
      {
        content: '',
        folder: 'search',
        html: 'search_notata',
        complete: "complete",
        update : "2023-09-05"
      },
    ],
  },
  {
    content: 'Utility',
    children: [
      {
        content: 'Cookie',
        folder: 'utility',
        html: 'utility_cookie',
        complete: "complete",
        update : "2023-09-21"
      },
      {
        content: 'Sitemap',
        folder: 'utility',
        html: 'utility_sitemap',
        complete: "complete",
        update : "2023-09-04"
      },
      {
        content: 'Legal [-]',
        folder: 'utility',
        html: 'utility_legal',
        complete: "complete",
        update : "2023-09-04"
      },
      {
        content: 'Privacy Policy [-]',
        folder: 'utility',
        html: 'utility_privacy_policy',
        complete: "complete",
        update : "2023-09-04"
      },
      {
        content: 'Cookie Policy [-]',
        folder: 'utility',
        html: 'utility_cookie_policy',
        complete: "complete",
        update : "2023-09-04"
      },
    
      {
        content: 'mail_unsubscribed',
        folder: 'utility',
        html: 'utility_email_unsubscribed',
        complete: "complete",
        update : "2023-08-29"
      },
      {
        content: 'Error 404',
        folder: 'utility',
        html: 'utility_error_404',
        complete: "complete",
        update : "2023-09-04"
      },
      {
        content: 'Error 500',
        folder: 'utility',
        html: 'utility_error_500',
        complete: "complete",
        update : "2023-09-04"
      },
      {
        content: 'Error 503',
        folder: 'utility',
        html: 'utility_error_503',
        complete: "complete",
        update : "2023-09-04"
      },

    ],
  },
  {
    content: 'email',
    children: [
      {
        content: 'Email - subscribing',
        folder: 'email',
        html: 'utility_email',
        complete: "complete",
        update : "2023-11-20"
      },
      {
        content: 'Email - brochure 다운로드',
        folder: 'email',
        html: 'utility_email_brochure',
        complete: "complete",
        update : "2023-11-20"
      },
      {
        content: 'Email - contact us',
        folder: 'email',
        html: 'utility_email_contact',
        complete: "complete",
        update : "2023-11-20"
      },
      {
        content: 'Mail_Event',
        folder: 'email',
        html: 'email_event',
        complete: "complete",
        update : "2023-11-20"
      },
      {
        content: 'Mail_Latest News',
        folder: 'email',
        html: 'email_latest_news',
        complete: "complete",
        update : "2023-11-20"
      },
      {
        content: 'Mail_Product_brochure',
        folder: 'email',
        html: 'email_prodcut_brochure',
        complete: "complete",
        update : "2023-11-20"
      },
      
    ],
  },
];

export default { device: device, headData: headData, list: list, deviceName: deviceName };
