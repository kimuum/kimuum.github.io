const dataCustomer = {
  device: '사용자(FO)',
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
      content: 'Depth 3',
      width: `auto`,
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
      content: 'Home',
      children: [
        {
          content: '공지/점검/오류 화면',
          children: [
            {
              content: 'Coming Soon',
              link: 'home',
              fileName: 'comingSoon',
              complete: true,
              progressText: '1차',
            },
            {
              content: '작업 공지 화면',
              link: 'home',
              fileName: 'commonWorking',
              complete: true,
              progressText: '1차',
            },
            {
              content: 'URL 접근 오류 화면',
              link: 'home',
              fileName: 'commonUrlError',
              complete: true,
              progressText: '1차',
            },
            {
              content: '서비스 최초 접근 시 팝업_앱실행, 사이트 접근',
              link: 'home',
              fileName: 'popupNotice',
              complete: true,
              progressText: '2차',
            },
            {
              content: '서비스 점검 팝업',
              link: 'home',
              fileName: 'popupCommonServiceNotice',
              complete: true,
              progressText: '20230214',
            },
            {
              content: '마케팅 수신 동의 안내',
              link: 'home',
              fileName: 'popupNoticeMarketing',
              complete: true,
              progressText: 'KMVNO-3937',
            },
            {
              content: '마케팅 수신 동의 처리 안내',
              link: 'home',
              fileName: 'popupNoticeMarketingComplete',
              complete: true,
              progressText: 'KMVNO-3937',
            },
            {
              content: '모바일용 - 앱 다운로드 팝업',
              link: 'home',
              fileName: 'popupAppDownload',
              complete: true,
              progressText: 'KMVNO-4061',
            },
          ],
        },
        {
          content: '메인',
          children: [
            {
              content: '가려진 정보보기 팝업',
              link: 'home',
              fileName: 'popupHideInformation',
              complete: true,
              progressText: '1차',
            },
            {
              content: '정회원',
              link: 'home',
              fileName: 'main',
              complete: true,
              progressText: '1차/2차',
            },
            {
              content: '비회원 (Main Header Event)',
              link: 'home',
              fileName: 'mainLogout',
              complete: true,
              progressText: '1차',
            },
            {
              content: '일반회원',
              link: 'home',
              fileName: 'mainNormal',
              complete: true,
              progressText: '1차',
            },
            {
              content: '선불요금제 회원',
              link: 'home',
              fileName: 'mainNoline',
              complete: true,
              progressText: '1차',
            },
          ],
        },
        {
          content: '통합 검색',
          children: [
            {
              content: '검색 결과',
              link: 'home',
              fileName: 'homeSearchResult',
              complete: true,
              progressText: '1차',
            },
            {
              content: '검색 결과 없음',
              link: 'home',
              fileName: 'homeSearchResultEmpty',
              complete: true,
              progressText: '1차',
            },
          ],
        },
        {
          content: '회원가입',
          children: [
            {
              content: '이용약관',
              link: 'home',
              fileName: 'homeJoinStep01',
              complete: true,
              progressText: '1차/2차',
            },
            {
              content: '정보입력',
              link: 'home',
              fileName: 'homeJoinStep02',
              complete: true,
              progressText: '1차',
            },
            {
              content: '가입완료',
              link: 'home',
              fileName: 'homeJoinStep03',
              complete: true,
              progressText: '1차',
            },
            {
              content: '정보입력(본인인증에 따른 알뜰폰 회선 정보 출력)',
              link: 'home',
              fileName: 'homeJoinStep02_myr',
              complete: true,
              progressText: '20230222',
            },
            {
              content: '정보입력(본인인증에 따른 알뜰폰 회선 정보 출력)',
              link: 'home',
              fileName: 'homeJoinStep03_myr',
              complete: true,
              progressText: '20230222',
            },
            {
              content: '가입완료(알뜰폰 번호로 가입한 회원)',
              link: 'home',
              fileName: 'homeJoinStep03AddLine',
              complete: true,
              progressText: '2차',
            },
            {
              content: '회선 추가 완료 안내',
              link: 'home',
              fileName: 'popupAddLine',
              complete: true,
              progressText: '2차',
            },
            {
              content: '회원가입 유형 선택',
              link: 'home',
              fileName: 'homeJoinIntro',
              complete: true,
              progressText: '2차',
            },
            {
              content: '14세 이하 회원 가입 > 이용약관',
              link: 'home',
              fileName: 'homeJoinStep01_14',
              complete: true,
              progressText: '2차',
            },
            {
              content: '14세 이하 회원 가입 > 정보입력',
              link: 'home',
              fileName: 'homeJoinStep02_14',
              complete: true,
              progressText: '2차',
            },
            {
              content: '회원 가입 안내(14세미만/중복)',
              link: 'home',
              fileName: 'popupJoin14',
              complete: true,
              progressText: '2차, KMVNO-4389',
            }, //회원가입
            {
              content: '회원탈퇴',
              link: 'home',
              fileName: 'homeWithdrawal',
              complete: true,
              progressText: '1차',
            }, //회원탈퇴
          ],
        },
        {
          content: '로그인',
          children: [
            {
              content: '로그인',
              link: 'home',
              fileName: 'homeLogin',
              complete: true,
              progressText: '1차',
            },
            {
              content: '로그인 > 비밀번호 변경 안내 팝업',
              link: 'home',
              fileName: 'popupPwChange',
              complete: true,
              progressText: '1차',
            },
            {
              content: '로그인 > 실패 팝업',
              link: 'home',
              fileName: 'popupLoginFail',
              complete: true,
              progressText: 'DR-2023-37168',
            },
            {
              content: '로그인 > 회원가입 방법 선택',
              link: 'home',
              fileName: 'popupLoginWay',
              complete: true,
              progressText: 'DR-2023-42864',
            },
            {
              content: '로그인 > 5회 실패',
              link: 'home',
              fileName: 'homeLoginFail',
              complete: true,
              progressText: 'DR-2023-37168',
            },
            {
              content: '아이디찾기',
              link: 'home',
              fileName: 'homeFindId',
              complete: true,
              progressText: '1차/DR-2023-37168',
            },
            {
              content: '아이디찾기 > 완료',
              link: 'home',
              fileName: 'homeFindIdComplete',
              complete: true,
              progressText: '1차/DR-2023-37168',
            }, //아이디 찾기
            {
              content: '비밀번호 확인 실패',
              link: 'home',
              fileName: 'popupPwFail',
              complete: true,
              progressText: '1차',
            },
            {
              content: '비밀번호 찾기',
              link: 'home',
              fileName: 'homeFindPw',
              complete: true,
              progressText: '1차',
            },
            {
              content: '비밀번호 찾기 > 본인인증 방법 선택',
              link: 'home',
              fileName: 'homeFindIdPw02',
              complete: true,
              progressText: '1차',
            },
            {
              content: '비밀번호 찾기 > 변경',
              link: 'home',
              fileName: 'homeFindPwChange',
              complete: true,
              progressText: '1차',
            }, //비밀번호 찾기
          ],
        },
      ],
    }, //Home
    {
      content: '마이알뜰폰',
      children: [
        {
          content: '홈',
          children: [
            {
              content: ' ',
              link: 'myThrifty',
              fileName: 'myThriftyMain',
              complete: true,
              progressText: '1차/2차/KMVNO-3987',
            },
            {
              content: '선불요금제',
              link: 'myThrifty',
              fileName: 'myThriftyPrepaidPlan',
              complete: true,
              progressText: '1차/2차',
            },
            {
              content: '선불요금제 > 선불잔액조회',
              link: 'myThrifty',
              fileName: 'myThriftyPrepaidPlanDetail',
              complete: true,
              progressText: '2차',
            },
            {
              content: '비회원/일반회원 진입',
              link: 'myThrifty',
              fileName: 'myThriftyIntroduce',
              complete: true,
              progressText: '1차',
            },
            {
              content: '즐겨찾기 변경 팝업',
              link: 'myThrifty',
              fileName: 'popupFavorit',
              complete: true,
              progressText: '1차',
            },
          ],
        }, // 홈
        {
          content: '가입정보',
          children: [
            {
              content: ' ',
              link: 'myThrifty',
              fileName: 'myThriftyCircuitList',
              complete: true,
              progressText: '1차',
            },
            {
              content: '계정정보 진입시 비밀번호 확인',
              link: 'myThrifty',
              fileName: 'popupMyThriftyPassword',
              complete: true,
              progressText: '1차',
            },
            {
              content: '가입정보 > 약정 정보 현황',
              link: 'myThrifty',
              fileName: 'popupAgreement',
              complete: true,
              progressText: '1차',
            },
            {
              content: '가입정보 > 내 계정 정보',
              link: 'myThrifty',
              fileName: 'myThriftyCircuitInformation',
              complete: true,
              progressText: '1차',
            },
            {
              content: '가입정보 > 내 계정 정보 > 정보·광고 수신(선택) 팝업, 개인정보 수집 및 이용 동의(선택)',
              link: 'myThrifty',
              fileName: 'popupMyThriftyTerms',
              complete: true,
              progressText: '운영',
            },
            {
              content: '가입정보 > 내 계정 정보 > 휴대폰 번호 변경',
              link: 'myThrifty',
              fileName: 'popupChangePhoneNumber',
              complete: true,
              progressText: '1차',
            },
          ],
        },
        {
          content: '번호 변경',
          children: [
            {
              content: ' ',
              link: 'account',
              fileName: 'accountNumberChange',
              complete: true,
              progressText: '2차',
            },
            {
              content: '희망번호 선택/완료',
              link: 'account',
              fileName: 'accountNumberChangeChoose01',
              complete: true,
              progressText: '2차',
            },
            {
              content: '신규번호 생성 불가 안내',
              other: 'true',
              otherRoute: 'html/usim',
              link: 'usim',
              fileName: 'popupSelfNewUserNot',
              complete: true,
              progressText: '2차',
            },
            {
              content: '전화 번호 선택',
              other: 'true',
              otherRoute: 'html/usim',
              link: 'usim',
              fileName: 'popupSelfNewSelect',
              complete: true,
              progressText: '2차',
            },
            {
              content: '번호변경 완료 안내 , 번호변경 가능시간 안내',
              link: 'account',
              fileName: 'popupAccountChage',
              complete: true,
              progressText: '2차',
            },
          ],
        },
        {
          content: '유심 변경',
          children: [
            {
              content: ' ',
              link: 'account',
              fileName: 'accountUsimChange',
              complete: true,
              progressText: '2차',
            },
            {
              content: '유심 변경 완료, 유심번호 유효성 체크',
              link: 'account',
              fileName: 'popupAccountUsimChange',
              complete: true,
              progressText: '2차',
            },
          ],
        },
        {
          content: '기기 변경(eSIM)',
          children: [
            {
              content: ' ',
              link: 'account',
              fileName: 'accountESIMChange',
              complete: true,
              progressText: '2차',
            },
            {
              content: 'Profile Down',
              link: 'usim',
              fileName: 'popupProfileDown',
              complete: true,
              progressText: '2차',
            },
            {
              //20221102 삭제 자급제 단말 등록 결과
              content: '기기 변경(eSIM) 처리, 기기변경 불가 안내, 기기변경 가능 여부 결과, 기기 변경(eSIM) 완료',
              link: 'account',
              fileName: 'popupAccountESIMChage',
              complete: true,
              progressText: '2차',
            },
          ],
        }, // 가입/계정
        {
          content: '사용량 조회',
          children: [
            {
              content: ' ',
              link: 'myThrifty',
              fileName: 'myThriftyListUsage',
              complete: true,
              progressText: '1차',
            },
          ],
        }, // 사용량 조회
        {
          content: '요금 조회',
          children: [
            {
              content: ' ',
              link: 'myThrifty',
              fileName: 'myThriftyListPayment',
              complete: true,
              progressText: '1차',
            },
            {
              content: '명세서 유형 변경',
              link: 'myThrifty',
              fileName: 'myThriftySpecsList',
              complete: true,
              progressText: '1차',
            },
            {
              content: '명세서 유형 변경 > 본인인증 팝업',
              link: 'myThrifty',
              fileName: 'popupAuthentication',
              complete: true,
              progressText: '1차',
            },
            {
              content: '납부 방법 변경',
              link: 'myThrifty',
              fileName: 'myThriftySpecsChange',
              complete: true,
              progressText: '1차',
            },
          ],
        },
        {
          content: '소액결제 내역(LUPIN)',
          children: [
            {
              content: ' ',
              link: 'microPayment',
              fileName: 'microPaymentList',
              complete: true,
              progressText: '2차',
            },
            {
              content: '상세',
              link: 'microPayment',
              fileName: 'microPaymentDetail',
              complete: true,
              progressText: '2차',
            },
            {
              content: '휴대폰 소액결제 이용동의',
              link: 'microPayment',
              fileName: 'microPaymentConsent',
              complete: true,
              progressText: '2차',
            },
            {
              content: '휴대폰 소액결제 이용동의 - 인증번호',
              link: 'microPayment',
              fileName: 'microPaymentConsentCitation',
              complete: true,
              progressText: '2차',
            },
            {
              content: '신청완료 - 소액결제 이용한도 변경',
              link: 'microPayment',
              fileName: 'microPaymentLimit01',
              complete: true,
              progressText: '2차',
            },
            {
              content: '한도변경 - 소액결제 이용한도 변경',
              link: 'microPayment',
              fileName: 'microPaymentLimitConsent',
              complete: true,
              progressText: '2차',
            },
            {
              content: '자동결제 정보',
              link: 'microPayment',
              fileName: 'microPaymentAutopay',
              complete: true,
              progressText: '2차',
            },
            {
              content: '소액결제 이용동의 결과 / 소액결제 한도변경 결과 자동 결제 차단 안내 / 자동 결제 차단 해제 안내',
              link: 'microPayment',
              fileName: 'popupMicroPayment',
              complete: true,
              progressText: '2차',
            },
          ],
        }, // 요금
        {
          content: '요금제/부가서비스(일반고객)',
          children: [
            {
              content: ' ',
              link: 'myThrifty',
              fileName: 'myThriftyListPlan',
              complete: true,
              progressText: '1차/2차',
            },
          ],
        },
        {
          content: '요금제/부가서비스(선불고객)',
          children: [
            {
              content: ' ',
              link: 'myThrifty',
              fileName: 'myThriftyListPrepaidPlan',
              complete: true,
              progressText: '2차',
            },
            {
              content: '상세 - 사용 중인 부가서비스 조회',
              link: 'myThrifty',
              fileName: 'myThriftyListPrepaidPlanDetail',
              complete: true,
              progressText: '2차',
            },
            {
              content: '사용 불가 안내',
              link: 'myThrifty',
              fileName: 'popupMyThriftyListPrepaidPlan',
              complete: true,
              progressText: '2차',
            },
          ],
        },
        {
          content: '요금제 변경',
          children: [
            {
              content: ' ',
              link: 'myThrifty',
              fileName: 'myThriftyChangeCharge',
              complete: true,
              progressText: '[선오픈] 2차',
            },
            {
              content: '변경모드',
              link: 'myThrifty',
              fileName: 'popupProductPlanChange',
              complete: true,
              progressText: '[선오픈] 2차',
            },
            {
              content: '유의사항 팝업',
              link: 'myThrifty',
              fileName: 'popupMyThriftyPlanNotice',
              complete: true,
              progressText: '[선오픈] 2차',
            },
            {
              content: '변경 이력 조회 팝업',
              link: 'myThrifty',
              fileName: 'popupMyThriftyPlanChangeList',
              complete: true,
              progressText: '[선오픈] 2차',
            },
            {
              content: '변경 불가 안내',
              link: 'myThrifty',
              fileName: 'popupMyThriftyPlanChangeNot',
              complete: true,
              progressText: '[선오픈] 2차',
            },
            {
              content: '변경 완료 팝업',
              link: 'myThrifty',
              fileName: 'popupMyThriftyPlanChangeComplete',
              complete: true,
              progressText: '[선오픈] 2차',
            },
            {
              content: '최근 3개월 이용량 보기 > 데이터/음성/문자 탭 팝업',
              link: 'myThrifty',
              fileName: 'popupMyThriftyThreeMonthUsage',
              complete: true,
              progressText: '[선오픈] 2차',
            },
          ],
        }, //요금제
        {
          content: '부가서비스',
          children: [
            {
              content: ' ',
              link: 'myThrifty',
              fileName: 'newExtraApply',
              complete: true,
              progressText: '2차',
            },
            {
              content: '설정',
              link: 'myThrifty',
              fileName: 'popupNewExtraSetting',
              complete: true,
              progressText: '2차',
            },
            {
              content: '해지',
              link: 'myThrifty',
              fileName: 'popupNewExtraApplyCancel',
              complete: true,
              progressText: '2차',
            },
            {
              content: '해지 완료',
              link: 'myThrifty',
              fileName: 'popupNewExtraApplyCancelComplete',
              complete: true,
              progressText: '2차',
            },
            // { //[2차] 20221130 기획 화면 삭제
            //   content: "법정대리인 인증",
            //   link: "myThrifty",
            //   fileName: "popupNewExtraApplyAuthentication",
            //   complete: true,
            //   progressText: "2차",
            // },
            {
              content: '가입 신청 - Case1. 부가파람X',
              link: 'myThrifty',
              fileName: 'popupNewExtraCase01',
              complete: true,
              progressText: '2차',
            },
            {
              content: '가입 신청 - Case2. 음악 장르',
              link: 'myThrifty',
              fileName: 'popupNewExtraCase02',
              complete: true,
              progressText: '2차',
            },
            {
              content: '가입 신청 - Case3. 휴대폰 번호 입력',
              link: 'myThrifty',
              fileName: 'popupNewExtraCase03',
              complete: true,
              progressText: '2차',
            },
            {
              content: '가입 신청 - Case4. 특정 번호 입력, 자리수 선택',
              link: 'myThrifty',
              fileName: 'popupNewExtraCase04',
              complete: true,
              progressText: '2차',
            },
            {
              content: '가입 신청 - Case5. 차단 번호 선택, 입력, 차단 기능 선택',
              link: 'myThrifty',
              fileName: 'popupNewExtraCase05',
              complete: true,
              progressText: '2차',
            },
            {
              content: '가입 신청 - Case6. 휴대폰번호 입력(1개)',
              link: 'myThrifty',
              fileName: 'popupNewExtraCase06',
              complete: true,
              progressText: '2차',
            },
            {
              content: '가입 신청 - Case7. 사업자 선택',
              link: 'myThrifty',
              fileName: 'popupNewExtraCase07',
              complete: true,
              progressText: '2차',
            },
            {
              content: '가입 신청 - Case8. 시작일자 선택',
              link: 'myThrifty',
              fileName: 'popupNewExtraCase08',
              complete: true,
              progressText: '2차',
            },
            {
              content: '가입 신청 - Case9. 시작일자+시간 선택',
              link: 'myThrifty',
              fileName: 'popupNewExtraCase09',
              complete: true,
              progressText: '2차',
            },
            {
              content: '가입 신청 - Case10. 시작일자+시간 선택, 종료일자',
              link: 'myThrifty',
              fileName: 'popupNewExtraCase10',
              complete: true,
              progressText: '2차',
            },
            {
              content: '가입 신청 - Case11. 시작일자+시간 선택, 종료일자',
              link: 'myThrifty',
              fileName: 'popupNewExtraCase11',
              complete: true,
              progressText: '2차',
            },
            {
              content: '가입 신청 - Case12. 시작일자+시간 선택, 종료일자',
              link: 'myThrifty',
              fileName: 'popupNewExtraCase12',
              complete: true,
              progressText: '2차',
            },
            {
              content: '가입 신청 - Case13. 시작일자(+시간)+종료일자, 서브 회선 3개',
              link: 'myThrifty',
              fileName: 'popupNewExtraCase13',
              complete: true,
              progressText: '', //DR-2023-15756
            },
            {
              content: '가입 신청 - Case13. 변경',
              link: 'myThrifty',
              fileName: 'popupNewExtraCase13_edit',
              complete: true,
              progressText: '', //DR-2023-15756
            },
            {
              content: '가입 신청 - Case13. 신청 정보(대표)',
              link: 'myThrifty',
              fileName: 'popupNewExtraCase13_apply',
              complete: true,
              progressText: '', //DR-2023-15756
            },
            {
              content: '가입 신청 - Case14. 대표번호 조회, 시작일자+종료일자',
              link: 'myThrifty',
              fileName: 'popupNewExtraCase14',
              complete: true,
              progressText: '', //DR-2023-15756
            },
            {
              content: '가입 신청 - Case14. 변경',
              link: 'myThrifty',
              fileName: 'popupNewExtraCase14_edit',
              complete: true,
              progressText: '', //DR-2023-15756
            },
            {
              content: '가입 신청 - Case14. 신청 정보(서브)',
              link: 'myThrifty',
              fileName: 'popupNewExtraCase14_apply',
              complete: true,
              progressText: '', //DR-2023-15756
            },
            {
              content: '가입 신청 - Case15. 대표번호 조회, 시작일자+종료일자',
              link: 'myThrifty',
              fileName: 'popupNewExtraCase15',
              complete: true,
              progressText: '', //DR-2023-15756
            },
            {
              content: '가입 완료',
              link: 'myThrifty',
              fileName: 'popupNewExtraApplyComplete',
              complete: true,
              progressText: '2차',
            },
            {
              content: 'ARS 인증 안내',
              link: 'myThrifty',
              fileName: 'popupNewExtraARSAbout',
              complete: true,
              progressText: '2차',
            },
            {
              content: 'ARS 인증',
              link: 'myThrifty',
              fileName: 'popupNewExtraARS',
              complete: true,
              progressText: '2차',
            },
          ],
        }, //부가서비스
        {
          content: '회선 관리',
          children: [
            {
              content: ' ',
              link: 'myThrifty',
              fileName: 'myThriftyMultilineList',
              complete: true,
              progressText: '1차',
            },
            {
              content: '회선 추가',
              link: 'myThrifty',
              fileName: 'myThriftyMultilineAdd',
              complete: true,
              progressText: '1차',
            },
            {
              content: '회선 추가 step 1',
              link: 'myThrifty',
              fileName: 'myThriftyMultilineAdd_step01',
              complete: true,
              progressText: '20230222',
            },
            {
              content: '회선 추가 step 2',
              link: 'myThrifty',
              fileName: 'myThriftyMultilineAdd_step02',
              complete: true,
              progressText: '20230222',
            },
            {
              content: '회선 추가 step 3',
              link: 'myThrifty',
              fileName: 'myThriftyMultilineAdd_step03',
              complete: true,
              progressText: '20230222',
            },
            {
              content: '회선 추가 불가/회선 삭제/회선 변경 불가능/회선 사용 불가',
              link: 'myThrifty',
              fileName: 'popupMyThriftyMultiline',
              complete: true,
              progressText: '1차',
            },
          ],
        }, //회선 관리
        {
          content: '분실/일시정지',
          children: [
            {
              content: ' ',
              link: 'myThrifty',
              fileName: 'myThriftyListLostPause',
              complete: true,
              progressText: '1차',
            },
          ],
        },
        {
          content: '분실신고',
          children: [
            {
              content: ' ',
              link: 'myThrifty',
              fileName: 'myThriftyLostList',
              complete: true,
              progressText: '1차',
            },
            {
              content: '정보입력/접수',
              link: 'myThrifty',
              fileName: 'myThriftyLostInput',
              complete: true,
              progressText: '1차',
            },
            {
              content: '분실 취소',
              link: 'myThrifty',
              fileName: 'myThriftyLostCancel',
              complete: true,
              progressText: '1차',
            },
            {
              content: '접수완료 팝업',
              link: 'myThrifty',
              fileName: 'popupMyThriftyLost',
              complete: true,
              progressText: '1차',
            },
          ],
        },
        {
          content: '일시정지',
          children: [
            {
              content: ' ',
              link: 'myThrifty',
              fileName: 'myThriftyLostPauseList',
              complete: true,
              progressText: '1차',
            },
            {
              content: '신청',
              link: 'myThrifty',
              fileName: 'myThriftyLostPauseInput',
              complete: true,
              progressText: '1차',
            },
            {
              content: '해제',
              link: 'myThrifty',
              fileName: 'myThriftyLostPauseClear',
              complete: true,
              progressText: '1차',
            },
            {
              content: '신청완료 팝업',
              link: 'myThrifty',
              fileName: 'popupMyThriftyLostPause',
              complete: true,
              progressText: '1차',
            },
          ],
        }, // 분실/일시정지
        {
          content: '데이터 쉐어링',
          children: [
            {
              content: ' ',
              link: 'myThrifty',
              fileName: 'sharingMain',
              complete: true,
              progressText: '2차',
            },
            {
              content: '데이터 쉐어링 소개',
              link: 'myThrifty',
              fileName: 'popupSharingAbout',
              complete: true,
              progressText: '2차',
            },
            // {
            //   content: "데이터 쉐어링 결합 신청",
            //   link: "myThrifty",
            //   fileName: "sharingApply",
            //   complete: true,
            //   progressText: "2차",
            // },
            {
              content: '신청 01',
              link: 'myThrifty',
              fileName: 'sharingApply01',
              complete: true,
              progressText: '2차',
            },
            {
              content: '신청 02',
              link: 'myThrifty',
              fileName: 'sharingApply02',
              complete: true,
              progressText: '2차',
            },
            {
              content: '신청 03',
              link: 'myThrifty',
              fileName: 'sharingApply03',
              complete: true,
              progressText: '2차',
            },
            {
              content: '신청 04',
              link: 'myThrifty',
              fileName: 'sharingApply04',
              complete: true,
              progressText: '2차',
            },
            {
              content: '셀프개통 안내 사항',
              link: 'myThrifty',
              fileName: 'popupSharingSelf',
              complete: true,
              progressText: '2차',
            },
            {
              content: '개통불가/유심유효성체크결과',
              link: 'myThrifty',
              fileName: 'popupSharingCheck',
              complete: true,
              progressText: '2차',
            },
            {
              content: '개통 처리',
              link: 'myThrifty',
              fileName: 'popupSharingOpening',
              complete: true,
              progressText: '2차',
            },
            {
              content: '개통신청조회',
              link: 'myThrifty',
              fileName: 'sharingApplyList',
              complete: true,
              progressText: '2차',
            },
            {
              content: '개통신청조회 > 상세',
              link: 'myThrifty',
              fileName: 'sharingApplyDetail',
              complete: true,
              progressText: '2차',
            },
            {
              content: '결합 완료 팝업',
              link: 'myThrifty',
              fileName: 'popupSharingApply',
              complete: true,
              progressText: '2차',
            },
            // { [2차] 20221118 기획 삭제
            //   content: "가입 완료",
            //   link: "myThrifty",
            //   fileName: "popupSharingComplete",
            //   complete: true,
            //   progressText: "2차",
            // },
          ],
        }, // 데이터 쉐어링
        {
          content: '데이터 주고받기',
          children: [
            {
              content: ' ',
              link: 'myThrifty',
              fileName: 'exchangeMain',
              complete: true,
              progressText: '2차',
            },
            {
              content: '데이터 주고받기 가능 요금제',
              link: 'myThrifty',
              fileName: 'popupExchangePossible',
              complete: true,
              progressText: '2차',
            },
            {
              content: '가입하기',
              link: 'myThrifty',
              fileName: 'exchangeJoin',
              complete: true,
              progressText: '2차',
            },
            {
              content: '신청서 작성',
              link: 'myThrifty',
              fileName: 'exchangeJoinApply',
              complete: true,
              progressText: '2차',
            },
            {
              content: '해지하기',
              link: 'myThrifty',
              fileName: 'exchangeCancel',
              complete: true,
              progressText: '2차',
            },
            {
              content: '가입/해지 완료 팝업',
              link: 'myThrifty',
              fileName: 'popupExchangeComplete',
              complete: true,
              progressText: '2차',
            },
          ],
        }, // 데이터 주고받기
        {
          content: '쿠폰함',
          children: [
            // {
            //   link: "myThrifty",
            //   fileName: "myThriftyListCoupon",
            //   complete: true,
            //   progressText: "1차",
            // },
            // {
            //   content: "등록",
            //   link: "myThrifty",
            //   fileName: "popupCouponAdd",
            //   complete: true,
            //   progressText: "1차",
            // },
            {
              content: '보유 쿠폰/사용내역 탭',
              link: 'myThriftyCoupon',
              fileName: 'couponMain',
              complete: true,
              progressText: 'KMVNO-3987',
            },
            {
              content: '쿠폰/제휴 등록 팝업',
              link: 'myThriftyCoupon',
              fileName: 'popupCouponNewAdd',
              complete: true,
              progressText: 'KMVNO-3987',
            },
          ],
        }, // 쿠폰함
        {
          content: '나의 후기',
          children: [
            {
              content: ' ',
              link: 'myThrifty',
              fileName: 'myThriftyListReview',
              complete: true,
              progressText: '1차',
            },
          ],
        }, // 나의 후기
      ],
    }, //마이알뜰폰
    {
      content: '상품',
      children: [
        {
          content: '일반 요금제',
          children: [
            {
              content: '목록',
              link: 'product',
              fileName: 'productPlanList',
              complete: true,
              progressText: '1차',
            },
            {
              content: '요금제 필터 팝업',
              link: 'product',
              fileName: 'popupProductPlanFilter',
              complete: true,
              progressText: '1차',
            },
            {
              content: '요금제 비교',
              link: 'product',
              fileName: 'productPlanCompare',
              complete: true,
              progressText: '1차',
            },
            {
              content: '요금제 비교 팝업',
              link: 'product',
              fileName: 'popupProductPlanCompare',
              complete: true,
              progressText: '1차/2차',
            },
            {
              content: '요금제 상세',
              link: 'product',
              fileName: 'productPlanDetail',
              complete: true,
              progressText: '1차/2차',
            },
          ],
        },
        {
          content: '선불 요금제',
          children: [
            {
              content: '목록',
              link: 'product',
              fileName: 'productPrepaidPlanList',
              complete: true,
              progressText: '[선오픈] 2차',
            },
            {
              content: '상세',
              link: 'product',
              fileName: 'productPlanDetail',
              complete: true,
              progressText: '[선오픈] 2차',
            },
          ],
        },
        {
          content: '로밍 서비스',
          children: [
            {
              content: ' ',
              link: 'product',
              fileName: 'productExtraLoaming',
              complete: true,
              progressText: '20230320', //DR-2023-03680, DR-2023-15756
            },
            {
              content: '로밍 부가서비스 상세 팝업',
              link: 'product',
              fileName: 'popupProductExtraLoamingDetail',
              complete: true,
              progressText: '20230213', //DR-2023-03680
            },
            {
              content: '데이터함께ON 아시아/미주',
              link: 'product',
              fileName: 'popupProductExtraLoamingDetail01',
              complete: true,
              progressText: '20230201', //DR-2023-03680
            },
            {
              content: '데이터함께ON 글로벌',
              link: 'product',
              fileName: 'popupProductExtraLoamingDetail02',
              complete: true,
              progressText: '20230201', //DR-2023-03680
            },
            {
              content: '하루종일ON',
              link: 'product',
              fileName: 'popupProductExtraLoamingDetail03',
              complete: true,
              progressText: '20230201', //DR-2023-03680
            },
            {
              content: '하루종일ON플러스',
              link: 'product',
              fileName: 'popupProductExtraLoamingDetail04',
              complete: true,
              progressText: '20230201', //DR-2023-03680
            },
            {
              content: '기가팩 중일',
              link: 'product',
              fileName: 'popupProductExtraLoamingDetail05',
              complete: true,
              progressText: '20230213', //DR-2023-03680
            },
            {
              content: '하루종일 ON 톡',
              link: 'product',
              fileName: 'popupProductExtraLoamingDetail06',
              complete: true,
              progressText: '20230213', //DR-2023-03680
            },
            {
              content: '음성로밍 차단',
              link: 'product',
              fileName: 'popupProductExtraLoamingDetail07',
              complete: true,
              progressText: '20230213', //DR-2023-03680
            },
            {
              content: '데이터로밍 차단',
              link: 'product',
              fileName: 'popupProductExtraLoamingDetail08',
              complete: true,
              progressText: '20230213', //DR-2023-03680
            },
            {
              content: '로밍 안내방송',
              link: 'product',
              fileName: 'popupProductExtraLoamingDetail09',
              complete: true,
              progressText: '20230213', //DR-2023-03680
            },
            {
              content: '데이터로밍 12시간',
              link: 'product',
              fileName: 'popupProductExtraLoamingDetail10',
              complete: true,
              progressText: '20230213', //DR-2023-03680
            },
            {
              content: '데이터로밍 20MB',
              link: 'product',
              fileName: 'popupProductExtraLoamingDetail11',
              complete: true,
              progressText: '20230227', //DR-2023-03680
            },
            {
              content: '데이터로밍 100MB',
              link: 'product',
              fileName: 'popupProductExtraLoamingDetail12',
              complete: true,
              progressText: '20230227', //DR-2023-03680
            },
            {
              content: '데이터로밍 300MB',
              link: 'product',
              fileName: 'popupProductExtraLoamingDetail13',
              complete: true,
              progressText: '20230227', //DR-2023-03680
            },
            {
              content: '데이터로밍 하루 30MB',
              link: 'product',
              fileName: 'popupProductExtraLoamingDetail14',
              complete: true,
              progressText: '20230227', //DR-2023-03680
            },
            {
              content: '하루종일ON 투게더',
              link: 'product',
              fileName: 'popupProductExtraLoamingDetail15',
              complete: true,
              progressText: '20230320', //DR-2023-15756
            },
            {
              content: '음성로밍 안심 차단',
              link: 'product',
              fileName: 'popupProductExtraLoamingDetail16',
              complete: true,
              progressText: '20230320', //DR-2023-15756
            },
            {
              content: '청소년 로밍 (일시)허용',
              link: 'product',
              fileName: 'popupProductExtraLoamingDetail17',
              complete: true,
              progressText: '20230320', //DR-2023-15756
            },
            {
              content: '데이터로밍 요금 알림(태블릿 PC용)',
              link: 'product',
              fileName: 'popupProductExtraLoamingDetail18',
              complete: true,
              progressText: '20230320', //DR-2023-15756
            },
            {
              content: '로밍 해외 도착 알리미',
              link: 'product',
              fileName: 'popupProductExtraLoamingDetail19',
              complete: true,
              progressText: '20230320', //DR-2023-15756
            },
          ],
        },
        {
          content: '부가서비스',
          children: [
            {
              content: ' ',
              link: 'product',
              fileName: 'productExtra',
              complete: true,
              progressText: '1차/2차',
            },
            {
              content: '인기 부가서비스 상세',
              link: 'product',
              fileName: 'popupProductExtraPopular',
              complete: true,
              progressText: '1차',
            },
            {
              content: '결합 이용안내',
              link: 'product',
              fileName: 'productCombination',
              complete: true,
              progressText: '2차',
            },
          ],
        },
        {
          content: '추천 서비스(원스토어/PASS/휴대폰 결제)',
          children: [
            {
              content: 'KT외주 협력사 퍼블리싱 화면으로 메뉴 추가 및 레이아웃용',
              link: 'product',
              fileName: 'recommendationService',
              complete: true,
              progressText: '-',
            },
          ],
        },
        {
          content: '결합서비스',
          children: [
            {
              content: '로그인 안내/서비스 이용 안내/결합 신청안내/결합 실패안내',
              link: 'combined',
              fileName: 'popupCombined',
              complete: true,
              progressText: 'KMVNO-3792',
            },
            {
              content: '알뜰폰+알뜰폰 무선결합',
              link: 'combined',
              fileName: 'wirelessCombined',
              complete: true,
              progressText: 'KMVNO-3792',
            },
            {
              content: '알뜰폰+알뜰폰 무선결합 신청',
              link: 'combined',
              fileName: 'wirelessCombinedApply',
              complete: true,
              progressText: 'KMVNO-3792',
            },
            {
              content: '알뜰폰+알뜰폰 무선결합 신청 - 불가',
              link: 'combined',
              fileName: 'wirelessCombinedApplyBlocked',
              complete: true,
              progressText: 'KMVNO-3792',
            },
            {
              content: '알뜰폰+알뜰폰 무선결합 완료',
              link: 'combined',
              fileName: 'popupWirelessCombinedEnd',
              complete: true,
              progressText: 'KMVNO-3792',
            },
            {
              content: '결합내역 조회 - 최초 조회',
              link: 'combined',
              fileName: 'combinedDetailsListFirst',
              complete: true,
              progressText: 'KMVNO-3792',
            },
            {
              content: '결합내역 조회',
              link: 'combined',
              fileName: 'combinedDetailsList',
              complete: true,
              progressText: 'KMVNO-3792',
            },
            {
              content: '무선결합 혜택 및 대상 요금제 안내',
              link: 'combined',
              fileName: 'popupWirelessCombined',
              complete: true,
              progressText: 'KMVNO-3792',
            },
            // 알뜰폰+알뜰폰 무선결합
            {
              content: '알뜰폰+KT 유/무선결합(본인)',
              link: 'combined',
              fileName: 'wiredCombinedMy',
              complete: true,
              progressText: 'KMVNO-3792',
            },
            {
              content: '알뜰폰+KT 유/무선결합(본인) 신청 - KT모바일',
              link: 'combined',
              fileName: 'wiredCombinedMyApplyMobile',
              complete: true,
              progressText: 'KMVNO-3792',
            },
            {
              content: '알뜰폰+KT 유/무선결합(본인) 신청 - KT인터넷',
              link: 'combined',
              fileName: 'wiredCombinedMyApplyInternet',
              complete: true,
              progressText: 'KMVNO-3792',
            },
            {
              content: '알뜰폰+KT 유/무선결합(본인) > KT 모바일 회선/인터넷 선택',
              link: 'combined',
              fileName: 'popupCombinedSelect',
              complete: true,
              progressText: 'KMVNO-3792',
            },
            // {
            //   content: "알뜰폰+KT 유/무선결합(가족)",
            //   link: "combined",
            //   fileName: "wiredCombinedFamily",
            //   complete: false,
            //   progressText: "KMVNO-3792",
            // },
            // {
            //   content: "알뜰폰+KT 유/무선결합(가족) 신청",
            //   link: "combined",
            //   fileName: "wiredCombinedFamilyApply",
            //   complete: false,
            //   progressText: "KMVNO-3792",
            // },
            {
              content: '알뜰폰+KT 유/무선결합 완료',
              link: 'combined',
              fileName: 'popupWiredCombinedApplyEnd',
              complete: true,
              progressText: 'KMVNO-3792',
            },
            {
              content: '사업자별 헤택 및 대상 요금제 상세',
              link: 'combined',
              fileName: 'popupCombinedBusiness',
              complete: true,
              progressText: 'KMVNO-3792',
            },
            {
              content: '신청 전 필수 확인 사항/정보제공동의 안내',
              link: 'combined',
              fileName: 'popupCombinedRequired',
              complete: true,
              progressText: 'KMVNO-3792',
            },
          ],
        },
      ],
    }, //상품
    {
      content: '유심/eSIM/단말',
      children: [
        {
          content: '바로배송유심',
          children: [
            {
              content: ' ',
              link: 'usim',
              fileName: 'usimDirectMain',
              complete: true,
              progressText: '2차',
            },
            {
              content: '안내 팝업',
              link: 'usim',
              fileName: 'popupUsimDirectInfo',
              complete: true,
              progressText: '2차',
            },
            {
              content: '주문 불가 안내',
              link: 'usim',
              fileName: 'popupUsimDirectNot',
              complete: true,
              progressText: '2차',
            },
            {
              content: '입력 정보 안내',
              link: 'usim',
              fileName: 'popupUsimDirectInputInfo',
              complete: true,
              progressText: 'KMVNO-4276',
            },
            {
              content: '구매 (1/3) - 비회원',
              link: 'usim',
              fileName: 'usimDirectPurchase01_logout',
              complete: true,
              progressText: 'KMVNO-4276',
            },
            {
              content: '구매 (1/3)',
              link: 'usim',
              fileName: 'usimDirectPurchase01',
              complete: true,
              progressText: '2차',
            },
            {
              content: '구매 (2/3)',
              link: 'usim',
              fileName: 'usimDirectPurchase02',
              complete: true,
              progressText: '2차',
            },
            {
              content: '구매 (3/3)',
              link: 'usim',
              fileName: 'usimDirectPurchase03',
              complete: true,
              progressText: 'KMVNO-4276',
            },
            {
              content: '알뜰폰 사업자 선택 팝업',
              link: 'usim',
              fileName: 'popupUsimBizSelect',
              complete: true,
              progressText: '2차',
            },
            {
              content: '결제 안내 팝업',
              link: 'usim',
              fileName: 'popupUsimDirectPayInfo',
              complete: true,
              progressText: '2차',
            },
            // {
            //   content: "구매완료 팝업",
            //   link: "usim",
            //   fileName: "popupUsimDirect",
            //   Completedmplete: true,
            //   progressText: "2차",
            // },
            {
              content: '구매완료',
              link: 'usim',
              fileName: 'usimDirectCompleted', //popupUsimDirectCompleted 팝업 삭제 페이지로 변경
              complete: true,
              progressText: '2차',
            },
            {
              content: '결제취소',
              link: 'usim',
              fileName: 'popupUsimDirect',
              complete: true,
              progressText: '2차',
            },
          ],
        },
        {
          content: '배송 주문 조회',
          children: [
            {
              content: ' ',
              link: 'usim',
              fileName: 'usimDeliveryMain',
              complete: true,
              progressText: '2차',
            },
            {
              content: '상세',
              link: 'usim',
              fileName: 'usimDeliveryDetail',
              complete: true,
              progressText: '2차',
            },
            {
              content: '본인인증',
              link: 'usim',
              fileName: 'usimDeliveryAuthentication',
              complete: true,
              progressText: '2차',
            },
            {
              content: '취소',
              link: 'usim',
              fileName: 'popupUsimDeliveryCancel',
              complete: true,
              progressText: '2차',
            },
            {
              content: '결제 진행 안내',
              link: 'usim',
              fileName: 'usimDeliveryPayment',
              complete: true,
              progressText: '2차',
            },
          ],
        },
        {
          content: '셀프개통(USIM/eSIM)',
          children: [
            {
              content: ' ',
              link: 'usim',
              fileName: 'selfOpeningMain',
              complete: true,
              progressText: '2차',
            },
            {
              content: '신규가입 신청하기 (1/5)',
              link: 'usim',
              fileName: 'selfOpeningApply01',
              complete: true,
              progressText: '2차',
            },
            {
              content: '신규가입 신청하기 (2/5)',
              link: 'usim',
              fileName: 'selfOpeningApply02',
              complete: true,
              progressText: 'KMVNO-4310',
            },
            {
              content: '신규가입 신청하기 (3/5)',
              link: 'usim',
              fileName: 'selfOpeningApply03',
              complete: true,
              progressText: '2차',
            },
            {
              content: '신규가입 신청하기 (4/5)',
              link: 'usim',
              fileName: 'selfOpeningApply04',
              complete: true,
              progressText: '2차',
            },
            {
              content: '신규가입 신청하기 (5/5)',
              link: 'usim',
              fileName: 'selfOpeningApply05',
              complete: true,
              progressText: '2차',
            },
            {
              content: '본인인증 수단 팝업 > PASS 인증, 신용카드 인증',
              link: 'usim',
              fileName: 'popupSelfOpeningCertification',
              complete: true,
              progressText: 'KMVNO-4310',
            },
            {
              content: '본인인증 수단 팝업 > 신용카드 인증 - 약관 상세',
              link: 'usim',
              fileName: 'popupSelfOpeningCertificationTerms',
              complete: true,
              progressText: 'KMVNO-4310',
            },
            {
              content: '알뜰폰 사업자 선택',
              link: 'usim',
              fileName: 'popupSelfBizSelect',
              complete: true,
              progressText: '2차',
            },
            {
              content: '요금제 선택',
              link: 'usim',
              fileName: 'popupSelfPlanSelect',
              complete: true,
              progressText: '2차',
            },
            {
              content: '셀프개통 가능/불가능/시간지남 시간 안내',
              link: 'usim',
              fileName: 'popupSelfOpeningTime',
              complete: true,
              progressText: '2차',
            },
            {
              content: '비회원 개통 안내',
              link: 'usim',
              fileName: 'popupSelfOpeningNoUser',
              complete: true,
              progressText: '2차',
            },
            {
              content: '셀프개통 안내 사항',
              link: 'usim',
              fileName: 'popupSharingSelf',
              complete: true,
              progressText: '2차',
            },
            {
              content: '신규번호 생성 불가 안내',
              link: 'usim',
              fileName: 'popupSelfNewUserNot',
              complete: true,
              progressText: '2차',
            },
            {
              content: '신규 번호 선택',
              link: 'usim',
              fileName: 'popupSelfNewSelect',
              complete: true,
              progressText: '2차',
            },
            {
              content: '셀프 개통 처리/완료/eSIM 발급 안내',
              link: 'usim',
              fileName: 'popupSelfOpening',
              complete: true,
              progressText: '2차',
            },
            {
              content: '신청 내용 초기화 안내',
              link: 'usim',
              fileName: 'popupSelfOpeningReset',
              complete: true,
              progressText: '2차',
            },
            {
              content: '가입 정보 안내',
              link: 'usim',
              fileName: 'popupJoinUserError',
              complete: true,
              progressText: '2차',
            },
            {
              content: '유심 스캔',
              link: 'usim',
              fileName: 'popupSelfScan',
              complete: true,
              progressText: '2차',
            },
            {
              content: '기업은행 자동이체 등록 안내',
              link: 'usim',
              fileName: 'popupSelfIndustrialBank',
              complete: true,
              progressText: '20230314',
            },
            {
              content: '요금제 안내 > 시니어 안내 팝업',
              link: 'usim',
              fileName: 'popupSelfSeniorNotice',
              complete: true,
              progressText: 'KMVNO-4037',
            },
            {
              content: '번호이동 신청하기 (1/6)',
              link: 'usim',
              fileName: 'movementApply01',
              complete: true,
              progressText: '2차',
            },
            {
              content: '번호이동 신청하기 (2/6)',
              link: 'usim',
              fileName: 'movementApply02',
              complete: true,
              progressText: '2차',
            },
            {
              content: '번호이동 신청하기 (3/6)',
              link: 'usim',
              fileName: 'movementApply03',
              complete: true,
              progressText: '2차',
            },
            {
              content: '번호이동 신청하기 (4/6)',
              link: 'usim',
              fileName: 'movementApply04',
              complete: true,
              progressText: '2차',
            },
            {
              content: '번호이동 신청하기 (5/6)',
              link: 'usim',
              fileName: 'movementApply05',
              complete: true,
              progressText: '2차',
            },
            {
              content: '번호이동 신청하기 (6/6)',
              link: 'usim',
              fileName: 'movementApply06',
              complete: true,
              progressText: '2차',
            },
            {
              content: '번호이동 사전 동의 안내',
              link: 'usim',
              fileName: 'popupMovementAgree',
              complete: true,
              progressText: '2차',
            },
            {
              content: '번호이동 이전 통신사 자동 선택 불가 안내',
              link: 'usim',
              fileName: 'popupMovementAutoSelectNot',
              complete: true,
              progressText: '2차',
            },
            {
              content: '번호이동 이전 통신사 자동 선택',
              link: 'usim',
              fileName: 'popupMovementAutoSelect',
              complete: true,
              progressText: '2차',
            },
            {
              content: '번호이동 ARS 번호 안내',
              link: 'usim',
              fileName: 'popupMovementARS',
              complete: true,
              progressText: '2차',
            },
            {
              content: '번호이동 진행/완료/인증유형 확인/사전동의 실패 안내',
              link: 'usim',
              fileName: 'popupMovementFailComplete',
              complete: true,
              progressText: '2차',
            }, // 번호이동
            {
              content: 'eSIM 셀프개통 안내',
              link: 'usim',
              fileName: 'popupeSIMAbout',
              complete: true,
              progressText: '2차',
            },
            {
              content: '단말기 정보 확인 방법',
              link: 'usim',
              fileName: 'popupTerminalConfirm',
              complete: true,
              progressText: '2차',
            },
            {
              content: 'EID, IMEI 확인 방법',
              link: 'usim',
              fileName: 'popupEIDIMEIConfirm',
              complete: true,
              progressText: '2차',
            },
            {
              content: 'EID, IMEI 확인 및 이미지 등록 방법',
              link: 'usim',
              fileName: 'popupEIDIMEIConfirmToIMG',
              complete: true,
              progressText: '2차',
            },
            {
              content: 'eSIM 개통 가능 여부 결과',
              link: 'usim',
              fileName: 'popupeSIMAvailability',
              complete: true,
              progressText: '2차',
            },
            {
              content: 'Profile Down',
              link: 'usim',
              fileName: 'popupProfileDown',
              complete: true,
              progressText: '2차',
            },
          ],
        },
        {
          content: '워치개통(eSIM)',
          children: [
            {
              content: ' ',
              link: 'usim',
              fileName: 'smartWatchESIM',
              complete: true,
              progressText: '2차',
            },
            {
              content: '워치개통 신청 (1/4)',
              link: 'usim',
              fileName: 'smartWatchESIMApply01',
              complete: true,
              progressText: '2차',
            },
            {
              content: '워치개통 신청 (2/4)',
              link: 'usim',
              fileName: 'smartWatchESIMApply02',
              complete: true,
              progressText: '2차',
            },
            {
              content: '워치개통 신청 (3/4)',
              link: 'usim',
              fileName: 'smartWatchESIMApply03',
              complete: true,
              progressText: '2차',
            },
            {
              content: '워치개통 신청 (4/4)',
              link: 'usim',
              fileName: 'smartWatchESIMApply04',
              complete: true,
              progressText: '2차',
            },
            {
              content: '워치개통(eSIM) 신청완료', //[2차] 20221212 기획 수정
              link: 'usim',
              fileName: 'popupSmartWatchESIM',
              complete: true,
              progressText: '2차',
            },
            {
              content: '요금제(셀룰러) 설정 안내', //[운영] 20230113 추가
              link: 'usim',
              fileName: 'popupPairingESIMAbout',
              complete: true,
              progressText: '2차',
            },
            {
              content: '워치 페어링 및 eSIM 다운로드 방법 안내',
              link: 'usim',
              fileName: 'popupSmartWatchConfirm',
              complete: true,
              progressText: '2차',
            },
          ],
        },
        {
          content: '개통 신청현황',
          children: [
            {
              content: '개통신청조회',
              link: 'usim',
              fileName: 'openingApplyMain',
              complete: true,
              progressText: '2차',
            },
            {
              content: '본인인증',
              link: 'usim',
              fileName: 'openingApplyAuthentication',
              complete: true,
              progressText: '2차',
            },
            {
              content: '개통 신청 상세',
              link: 'usim',
              fileName: 'openingApplyDetail',
              complete: true,
              progressText: '2차',
            },
          ],
        },
        {
          content: '자급제단말등록',
          children: [
            {
              content: ' ',
              link: 'usim',
              fileName: 'selfSufficiencyAdd',
              complete: true,
              progressText: '2차',
            },
            {
              content: '등록 완료/유효성체크결과 팝업',
              link: 'usim',
              fileName: 'popupSelfSufficiencyAddComplete',
              complete: true,
              progressText: '2차',
            },
            {
              content: '자급제단말등록/기기변경/셀프개통 > 모델명 조회 팝업',
              link: 'usim',
              fileName: 'popupModelDevice',
              complete: true,
              progressText: '2차',
            },
          ],
        },
      ],
    }, //유심/eSIM/단말
    {
      content: '이벤트',
      children: [
        {
          content: '진행중 이벤트',
          children: [
            {
              content: '목록',
              link: 'event',
              fileName: 'eventProceedList',
              complete: true,
              progressText: '1차',
            },
            {
              content: '상세',
              link: 'event',
              fileName: 'eventProceedDetail',
              complete: true,
              progressText: '1차',
            },
          ],
        },
        {
          content: '종료된 이벤트',
          children: [
            {
              content: ' ',
              link: 'event',
              fileName: 'eventDoneList',
              complete: true,
              progressText: '1차',
            },
          ],
        },
        {
          content: '당첨자 발표',
          children: [
            {
              content: '목록',
              link: 'event',
              fileName: 'eventWinList',
              complete: true,
              progressText: '1차',
            },
            {
              content: '상세',
              link: 'event',
              fileName: 'eventWinDetail',
              complete: true,
              progressText: '1차',
            },
          ],
        },
        {
          content: '제휴카드',
          children: [
            {
              content: '목록',
              link: 'event',
              fileName: 'affiliateCardList',
              complete: true,
              progressText: '20230410',
            },
            {
              content: '상세',
              link: 'event',
              fileName: 'affiliateCardDetail',
              complete: true,
              progressText: '20230410',
            },
          ],
        },
      ],
    }, //이벤트
    {
      content: '고객지원',
      children: [
        {
          content: 'FAQ',
          children: [
            {
              content: ' ',
              link: 'customerSupport',
              fileName: 'customerSupportFaq',
              complete: true,
              progressText: '1차',
            },
          ],
        },
        {
          content: '고객상담',
          children: [
            {
              content: '문의내역',
              link: 'customerSupport',
              fileName: 'customerSupportService',
              complete: true,
              progressText: '1차',
            },
            {
              content: '신청',
              link: 'customerSupport',
              fileName: 'customerSupportServiceApply',
              complete: true,
              progressText: '1차',
            },
            {
              content: '불가 안내 팝업',
              link: 'customerSupport',
              fileName: 'popupServiceAbout',
              complete: true,
              progressText: '1차',
            },
          ],
        },
        {
          content: '고객센터 안내',
          children: [
            {
              content: ' ',
              link: 'customerSupport',
              fileName: 'customerSupportAbout',
              complete: true,
              progressText: '1차',
            },
          ],
        },
        {
          content: '공지사항',
          children: [
            {
              content: '목록',
              link: 'customerSupport',
              fileName: 'customerSupportNoticeList',
              complete: true,
              progressText: '1차',
            },
            {
              content: '상세',
              link: 'customerSupport',
              fileName: 'customerSupportNoticeDetail',
              complete: true,
              progressText: '1차',
            },
          ],
        },
        {
          content: '이용가이드',
          children: [
            {
              content: ' ',
              link: 'customerSupport',
              fileName: 'customerSupportGuide',
              complete: true,
              progressText: '1차',
            },
          ],
        },
      ],
    }, //고객지원
    {
      content: '서비스',
      children: [
        {
          content: '마이알뜰폰 소개',
          children: [
            {
              content: ' ',
              link: 'service',
              fileName: 'serviceIntroduce',
              complete: true,
              progressText: '1차',
            },
          ],
        },
        {
          content: '마이알뜰폰 프렌즈',
          children: [
            {
              content: ' ',
              link: 'service',
              fileName: 'serviceFriends',
              complete: true,
              progressText: '1차',
            },
            {
              content: '상세정보 보기',
              link: 'service',
              fileName: 'popupViewDetail',
              complete: true,
              progressText: '1차',
            },
          ],
        },
        {
          content: 'KT 알뜰폰 사업',
          children: [
            {
              content: ' ',
              link: 'service',
              fileName: 'serviceCorporation',
              complete: true,
              progressText: '1차',
            },
          ],
        },
        {
          content: '바로 유심',
          children: [
            {
              content: ' ',
              link: 'service',
              fileName: 'serviceUsim',
              complete: true,
              progressText: '1차',
            },
          ],
        },
      ],
    }, //서비스
    {
      content: 'footer',
      children: [
        {
          content: '정책 및 약관',
          children: [
            {
              content: ' ',
              link: 'footer',
              fileName: 'policiesAndTerms',
              complete: true,
              progressText: '1차',
            },
          ],
        },
      ],
    }, //footer
  ],
};
