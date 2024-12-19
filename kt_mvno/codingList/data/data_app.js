const dataApp = {
  device: 'APP(FO)',
  folder: 'customer/html',
  headData: [
    {
      content: 'Depth 1',
      width: `12%`,
    },
    {
      content: 'Depth 2',
      width: `20%`,
    },
    {
      content: '파일명',
      width: `25%`,
    },
    {
      content: '상태',
      width: `10%`,
    },
  ],
  list: [
    {
      content: 'App(1.5차)',
      children: [
        {
          content: '로그인',
          link: 'app',
          fileName: 'appLogin',
          complete: true,
          progressText: '1.5차',
        },
        {
          content: '메인 > 알림아이콘 있음',
          link: 'app',
          fileName: 'appMain',
          complete: true,
          progressText: '1.5차',
        },
        {
          content: '알림',
          link: 'app',
          fileName: 'appAlarmList',
          complete: true,
          progressText: '1.5차',
        },
      ],
    }, //App (1.5차)
  ],
};
