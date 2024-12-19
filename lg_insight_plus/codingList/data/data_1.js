const data = {
  device: 'Page',
  headData: [
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
  ],
  list: [
    {
      content: 'common',
      children: [
        {
          content: 'Guide',
          link: 'guide/guide',
          html: 'guide',
          complete: true,
        },
        {
          content: '팝업',
          children: [
            {
              content: '',
              link: 'guide/popup',
              html: 'popup',
              complete: true,
            },
            {
              content: '주소록',
              link: 'guide/pop_address_select',
              html: 'pop_address_select',
              complete: true,
            },
          ],
        },
      ],
    },
    {
      content: 'Main',
      children: [
        {
          content: 'Main',
          link: 'main/main',
          html: 'main',
          complete: true,
        },
      ],
    },
    {
      content: '통합검색',
      children: [
        {
          content: '검색결과',
          link: 'total_search/search_result',
          html: 'search_result',
          complete: true,
        },
        {
          content: '검색결과 없음',
          link: 'total_search/search_result_nodata',
          html: 'search_result_nodata',
          complete: true,
        },
      ],
    },
    {
      content: '인사이트 자료찾기',
      children: [
        {
          content: '뉴스레터',
          children: [
            {
              content: '',
              link: 'insight_find/insight_find_newsletter',
              html: 'insight_find_newsletter',
              complete: true,
            },
            {
              content: '팝업 - 뉴스레터 등록',
              link: 'insight_find/pop_register_newsletter',
              html: 'pop_register_newsletter',
              complete: true,
            },
          ],
        },
        {
          content: '보고서/자료',
          children: [
            {
              content: '목록/검색',
              link: 'insight_find/insight_find_data_list',
              html: 'insight_find_data_list',
              complete: true,
            },
            {
              content: '목록/검색 결과',
              link: 'insight_find/insight_find_data_list_02',
              html: 'insight_find_data_list_02',
              complete: true,
            },
            {
              content: '목록/검색 결과 없는 경우',
              link: 'insight_find/insight_find_data_list_nodata',
              html: 'insight_find_data_list_nodata',
              complete: true,
            },
            {
              content: '상세',
              link: 'insight_find/insight_find_data_detail',
              html: 'insight_find_data_detail',
              complete: true,
            },
            {
              content: '등록',
              link: 'insight_find/insight_find_data_edit',
              html: 'insight_find_data_edit',
              complete: true,
            },
          ],
        },
        {
          content: 'CXI 대시보드',
          children: [
            {
              content: '목록',
              link: 'insight_find/insight_find_cxi_list',
              html: 'insight_find_cxi_list',
              complete: true,
            },
            {
              content: '목록/검색 결과 없는 경우',
              link: 'insight_find/insight_find_cxi_list_nodata',
              html: 'insight_find_cxi_list_nodata',
              complete: true,
            },
            {
              content: '상세',
              link: 'insight_find/insight_find_cxi_detail',
              html: 'insight_find_cxi_detail',
              complete: true,
            },
            {
              content: '등록',
              link: 'insight_find/insight_find_cxi_edit',
              html: 'insight_find_cxi_edit',
              complete: true,
            },
          ],
        },
      ],
    },
    {
      content: '인사이트 도출하기',
      children: [
        {
          content: '고객조사 학습',
          children: [
            {
              content: '목록',
              link: 'insight_derive/insight_derive_list',
              html: 'insight_derive_list',
              complete: true,
            },
            {
              content: '목록/검색 결과 없음',
              link: 'insight_derive/insight_derive_list_nodata',
              html: 'insight_derive_list_nodata',
              complete: true,
            },
            {
              content: '상세',
              link: 'insight_derive/insight_derive_detail',
              html: 'insight_derive_detail',
              complete: true,
            },
            {
              content: '등록',
              link: 'insight_derive/insight_derive_edit',
              html: 'insight_derive_edit',
              complete: true,
            },
          ],
        },
        {
          content: '고객조사 의뢰(품의호출)',
          link: 'insight_derive/insight_derive_approval',
          html: 'insight_derive_approval',
          complete: true,
        },
      ],
    },
    {
      content: 'LSR아카이브',
      children: [
        {
          content: '자료검색',
          children: [
            {
              content: '목록',
              link: 'lsr_archive/lsr_archive_list',
              html: 'lsr_archive_list',
              complete: true,
            },
            {
              content: '목록/검색 결과 없는 경우',
              link: 'lsr_archive/lsr_archive_list_nodata',
              html: 'lsr_archive_list_nodata',
              complete: true,
            },
            {
              content: '상세',
              link: 'lsr_archive/lsr_archive_detail',
              html: 'lsr_archive_detail',
              complete: true,
            },
          ],
        },
        {
          content: '자료등록',
          children: [
            {
              content: '등록\n LSR 내/외 선택 케이스 포함',
              link: 'lsr_archive/lsr_archive_edit',
              html: 'lsr_archive_edit',
              complete: true,
            },
            {
              content: '등록\n 고객조사 학습 선택 시 비활성화 케이스',
              link: 'lsr_archive/lsr_archive_edit_02',
              html: 'lsr_archive_edit_02',
              complete: true,
            },
          ],
        },
      ],
    },
    {
      content: 'LSR 소개',
      children: [
        {
          content: '',
          link: 'about_lsr/about_lsr',
          html: 'about_lsr',
          complete: true,
        },
      ],
    },
    {
      content: '공지사항',
      children: [
        {
          content: '공지사항',
          children: [
            {
              content: '목록',
              link: 'board/board_list',
              html: 'board_list',
              complete: true,
            },
            {
              content: '목록/검색 결과 없는 경우',
              link: 'board/board_list_nodata',
              html: 'board_list_nodata',
              complete: true,
            },
            {
              content: '상세',
              link: 'board/board_detail',
              html: 'board_detail',
              complete: true,
            },
            {
              content: '등록',
              link: 'board/board_edit',
              html: 'board_edit',
              complete: true,
            },
          ],
        },
        {
          content: 'FAQ 및 Q&A',
          children: [
            {
              content: '목록',
              link: 'board/board_faq_list',
              html: 'board_faq_list',
              complete: true,
            },
            {
              content: '목록/검색 결과 없는 경우',
              link: 'board/board_faq_list_nodata',
              html: 'board_faq_list_nodata',
              complete: true,
            },
            {
              content: '상세',
              link: 'board/board_faq_detail',
              html: 'board_faq_detail',
              complete: true,
            },
            {
              content: '등록',
              link: 'board/board_faq_edit',
              html: 'board_faq_edit',
              complete: true,
            },
          ],
        },
      ],
    },
  ],
};
