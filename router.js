import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/index/index.vue';
import Home from './views/home/index.vue';
import College from './views/college/index.vue';
import Introduce from './views/introduce/index.vue';
import Abroad from './views/abroad/index.vue';
import Studio from './views/studio/index.vue';
import Welfare from './views/welfare/index.vue';
import WelfareDetail from './views/welfareDetail/index.vue';
import Information from './views/information/index.vue';
import InformationDetail from './views/informationDetail/index.vue';
import NotFound from './views/notfound/notfound.vue';

Vue.use(Router);

export function createRouter () {
  return new Router({
    mode: 'history',
		scrollBehavior (to, from, savedPosition) {
			if (savedPosition) {
				return savedPosition
			} else {
				return { x: 0, y: 0 }
			}
		},
    routes: [
      {
        path: '/',
        component: Index,
				redirect: '/home',
        children: [
          {
            path: '/home',
            component: Home,
						meta: {
							titleColor: '#ffffff',
							titleFocusColor: '#bfc03e',
							// titlebgColor: '#0092ee',
							titlebgColor: 'transparent',
							titleImgType: '1',
							padding: '0'
						}
          },
					{
            path: '/college',
            component: College,
          },
					{
            path: '/introduce',
            component: Introduce,
          },
					{
            path: '/abroad',
            component: Abroad,
						meta: {
							bodyColor: '#eef3f6'
						}
          },
					{
            path: '/studio',
            component: Studio,
          },
					{
            path: '/welfare',
            component: Welfare,
						meta: {
							bodyColor: '#eef3f6'
						}
          },
					{
            path: '/Welfare/:id',
            component: WelfareDetail,
          },
					{
            path: '/information',
            component: Information,
						meta: {
							bodyColor: '#eef3f6'
						}
          },
					{
            path: '/information/:id',
            component: InformationDetail,
          },
        ]
      },
      // 找不到页面（也可以在layouts里面定义error页面,但是请求失败时也会显示error页面）
      // {
      //   path: '/404',
      //   component: NotFound
      // },
      // { path: '*', redirect: '/404' },
    ]
  });
}
