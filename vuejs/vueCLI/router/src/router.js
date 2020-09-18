import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue'
import User from './views/User.vue'
import Users from './views/Users.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    { path: '/', component: Home },
    { path: '/users', component: Users },
    { path: '/user/:id', component: User, props: true},
  ]
})