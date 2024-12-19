import { nextTick } from 'vue'
import { createWebHistory, createRouter } from "vue-router";
import MainView from "@/views/MainView.vue";
import ProductInstruction from "@/views/ProductInstruction.vue";
import AppService from "@/views/AppService.vue";
import HowToUse from "@/views/HowToUse.vue";
import CustomerSupport from "@/views/CustomerSupport.vue";
import AnnounceBrowser from "@/views/AnnounceBrowser.vue";
import AnnounceMaintenance from "@/views/AnnounceMaintenance.vue";
import AnnounceNotFound from "@/views/AnnounceNotFound.vue";

// const prefix = 'Voltup |';

const routes = [
  {
    path: "/",
    name: "MainView",
    component: MainView,
    meta: {
      title: 'Main'
    }
  },
  {
    path: "/ProductInstruction",
    name: "ProductInstruction",
    component: ProductInstruction,
    meta: {
      title: '충전기 및 설치 절차'
    }
  },
  {
    path: "/AppService",
    name: "AppService",
    component: AppService,
    meta: {
      title: 'APP 서비스'
    }
  },
  {
    path: "/HowToUse",
    name: "HowToUse",
    component: HowToUse,
    meta: {
      title: '이용 방법'
    }
  },
  {
    path: "/CustomerSupport",
    name: "CustomerSupport",
    component: CustomerSupport,
    meta: {
      title: '고객 지원'
    }
  },
  {
    path: "/AnnounceBrowser",
    name: "AnnounceBrowser",
    component: AnnounceBrowser,
    meta: {
      title: '지원하지 않는 브라우저'
    }
  },
  {
    path: "/AnnounceMaintenance",
    name: "AnnounceMaintenance",
    component: AnnounceMaintenance,
    meta: {
      title: '서비스 점검 중'
    }    
  },
  {
    path: "/AnnounceNotFound",
    name: "AnnounceNotFound",
    component: AnnounceNotFound,
    meta: {
      title: '404 Not Found'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Document title setting
router.afterEach((to) => {
  //nextTick은 Dom이 업데이트 된 후 실행됩니다.
  const prefix = 'Voltup | '
  nextTick(() => {
    document.title = prefix + to.meta.title;
  });
});

export default router;