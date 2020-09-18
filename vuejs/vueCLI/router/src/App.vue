<template>
  <div style="width: 700px; margin: auto; padding-top: 50px;">
    <nav>
      <router-link
        to="/"
        class="link"
        active-class="link--active"
        exact
        >Home</router-link>
      <router-link
        to="/users" 
        class="link"
        active-class="link--active"
        exact
        >Users</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
  .link {
    margin-right: 10px;
  }
  .link--active{
    font-size: 20px;
  }
</style>