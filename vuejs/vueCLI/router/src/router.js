import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue'
const Users = () => import(/* webpackChunkName: "User" */ "./views/Users.vue");
const User = () => import(/* webpackChunkName: "User" */ "./views/User.vue");
const UserPosts = () => import(/* webpackChunkName: "User" */ "./views/UserPosts.vue");
const UserProfile = () => import(/* webpackChunkName: "User" */ "./views/UserProfile.vue");

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    { path: '/', component: Home },
    {
      path: '/users',
      component: Users,
      children: [
        {
          path: ':id',
          component: User,
          props: true,
          children: [
            {path: "posts", component: UserPosts, name: 'users-id-posts'},
            {path: "profile", component: UserProfile, name: 'users-id-profile'},
          ]
        },
      ]
    },
    { path: '*', redirect: '/'}
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 100 }
      };
    }
    return { x: 0, y: 0 };
  }
})