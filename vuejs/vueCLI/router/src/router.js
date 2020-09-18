import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue'
import Users from './views/Users.vue'
import User from './views/User.vue'
import UserPosts from './views/UserPosts.vue'
import UserProfile from './views/UserProfile.vue'

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