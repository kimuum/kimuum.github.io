const filePath_4 = './Mobile/dist/html/';
const catePath_4 = 'home/'
const data_4 = {
  device: 'Mobile_old',
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
      content: 'Home',
      children: [
        {
          content: 'Home',
          link: filePath_4 + catePath_4 + 'Home.html',
          name: 'Home',
          complete: true,
        },
        {
          content: 'Home > hotel > detail - SEE MORE 버튼이 있는 경우',
          link: filePath_4 + catePath_4 + 'hotel_detail.html',
          name: 'hotel_detail',
          complete: true,
        },
        {
          content: 'Home > hotel > detail - 모든 리스트 노출 후 SEE MORE 버튼 숨김',
          link: filePath_4 + catePath_4 + 'hotel_detail_all_list.html',
          name: 'hotel_detail_all_list',
          complete: true,
        },
        
      ],
    },
  ]
}