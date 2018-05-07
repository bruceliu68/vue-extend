import Vue from 'vue';
import Router from 'vue-router';
import Tool from '@/page/tool/index';
import Login from '@/page/login/index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Login,
    },
    {
      path: '/tool',
      name: 'Tool',
      component: Tool,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
