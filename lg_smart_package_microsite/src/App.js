import "./App.css";
import { Route, Routes } from "react-router-dom";
import CodingList from "./codinglist/codingList";

// Map
import Home from "pages/home/screen/Home";
import HomeTipContentAI from "pages/home/screen/HomeTipContentAI";
// import HomeTipContentAIR from "pages/home/screen/HomeTipContentAIR";
import HomeTipContentWish from "pages/home/screen/HomeTipContentWish";
import HomeTipContentWish9 from "pages/home/screen/HomeTipContentWish9";
// import HomeTipContentHub from "pages/home/screen/HomeTipContentHub";
// import HomeWheel from "pages/home/screen/HomeWheel";

import BridgeMain from "pages/bridge/screen/BridgeMain";
import BridgeCartAddModal from "pages/bridge/screen/BridgeCartAddModal";
import BridgeHubModal from "pages/bridge/screen/BridgeHubModal";
import BridgeInfoToast from "pages/bridge/screen/BridgeInfoToast";

import RecommendListGnb from "pages/recommend/screen/RecommendListGnb";
import RecommendNeeds from "pages/recommend/screen/RecommendNeeds";
import RecommendNeedsToast from "pages/recommend/screen/RecommendNeedsToast";
import RecommendPackageList from "pages/recommend/screen/RecommendPackageList";
import RecommendPackageSearch from "pages/recommend/screen/RecommendPackageSearch";

// 튜토리얼
import TutorialOuting from "pages/tutorial/screen/TutorialOuting";
import TutorialPetOuting from "pages/tutorial/screen/TutorialPetOuting";
import TutorialVisit from "pages/tutorial/screen/TutorialVisit";
import TutorialPetEnvironment from "pages/tutorial/screen/TutorialPetEnvironment";
import TutorialMoodLiving from "pages/tutorial/screen/TutorialMoodLiving";
import TutorialKid from "pages/tutorial/screen/TutorialKid";
import TutorialAirWindow from "pages/tutorial/screen/TutorialAirWindow";
import TutorialAirStudy from "pages/tutorial/screen/TutorialAirStudy";

function App() {
  return (
    <Routes>
      {/* Coding List */}
      <Route path="/" element={<CodingList />} />

      {/* Home */}
      <Route path="/home" element={<Home />} />
      {/* Home > 특장점 */}
      <Route path="/home_tip_content_ai" element={<HomeTipContentAI />} />
      <Route path="/home_tip_content_wish" element={<HomeTipContentWish />} />
      <Route
        path="/home_tip_content_wish_9"
        element={<HomeTipContentWish9 />}
      />
      {/* <Route path="/home_tip_content_air" element={<HomeTipContentAIR />} />
      <Route path="/home_tip_content_hub" element={<HomeTipContentHub />} /> */}
      {/* <Route path="/homeWheel" element={<HomeWheel />} /> */}

      {/* Bridge */}
      <Route
        path="/bridge"
        element={<BridgeMain installed={false} packageName="deepSleep" />}
      />
      <Route
        path="/bridge_installed"
        element={<BridgeMain installed={true} packageName="deepSleep" />}
      />

      {/* ///// 브릿지 콘텐츠 ///// */}
      {/* 외출귀가 맞춤팩 */}
      <Route
        path="/bridge_outing"
        element={<BridgeMain installed={true} packageName="outing" />}
      />
      {/* 반려동물 원격케어팩 */}
      <Route
        path="/bridge_pet_outing"
        element={<BridgeMain installed={true} packageName="petOuting" />}
      />
      {/* 리빙 무드업팩 */}
      <Route
        path="/bridge_moodliving"
        element={<BridgeMain installed={true} packageName="moodLiving" />}
      />
      {/* 반려동물 맞춤케어팩 */}
      <Route
        path="/bridge_pet_environment"
        element={<BridgeMain installed={true} packageName="petEnvironment" />}
      />
      {/* 분리수면 안심팩 */}
      <Route
        path="/bridge_kid"
        element={<BridgeMain installed={true} packageName="kid" />}
      />
      {/* 세이프티 컨트롤팩*/}
      <Route
        path="/bridge_visit"
        element={<BridgeMain installed={true} packageName="visit" />}
      />
      {/* 무드업 키친 */}
      <Route
        path="/bridge_mood_kitchen"
        element={<BridgeMain installed={true} packageName="moodKitchen" />}
      />

      {/* 집안공기 마스터팩 */}
      <Route
        path="/bridge_air_window"
        element={<BridgeMain installed={true} packageName="airWindow" />}
      />
      {/* 학습환경집중 */}
      <Route
        path="/bridge_air_study"
        element={<BridgeMain installed={true} packageName="airStudy" />}
      />
      {/* 숙면 솔루션팩 */}
      <Route
        path="/bridge_deep_sleep"
        element={<BridgeMain installed={true} packageName="deepSleep" />}
      />
      {/* 마이홈 모니터링팩 */}
      <Route
        path="/bridge_home_monitoring"
        element={<BridgeMain installed={true} packageName="homeMonitoring" />}
      />
      {/* 여름 온습도 관리팩 */}
      <Route
        path="/bridge_summer"
        element={<BridgeMain installed={true} packageName="summer" />}
      />
      {/* ///// 브릿지 콘텐츠 ///// */}

      <Route path="/bridge_cart_modal" element={<BridgeCartAddModal />} />
      <Route path="/bridge_hub_modal" element={<BridgeHubModal />} />
      <Route path="/bridge_info_toast" element={<BridgeInfoToast />} />

      {/* 패키지 탐색 화면 */}
      <Route
        path="/recommend_package_search"
        element={<RecommendPackageSearch />}
      />

      {/* 스마트홈 추천 받기 */}
      <Route path="/recommend_list_gnb" element={<RecommendListGnb />} />
      {/* 스마트홈 체험하기 */}
      <Route path="/recommend_needs" element={<RecommendNeeds />} />
      <Route path="/recommend_needs_toast" element={<RecommendNeedsToast />} />
      <Route
        path="/recommend_package_list"
        element={<RecommendPackageList />}
      />

      {/* 체험하기 튜토리얼 */}
      <Route path="/tutorial_outing" element={<TutorialOuting />} />
      <Route path="/tutorial_pet_outing" element={<TutorialPetOuting />} />
      <Route path="/tutorial_visit" element={<TutorialVisit />} />
      <Route
        path="/tutorial_pet_environment"
        element={<TutorialPetEnvironment />}
      />
      <Route path="/tutorial_mood_living" element={<TutorialMoodLiving />} />
      <Route path="/tutorial_kid" element={<TutorialKid />} />
      <Route path="/tutorial_air_window" element={<TutorialAirWindow />} />
      <Route path="/tutorial_air_study" element={<TutorialAirStudy />} />
    </Routes>
  );
}
export default App;
