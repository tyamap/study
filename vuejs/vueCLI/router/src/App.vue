<template>
  <div style="width: 700px; margin: auto; padding-top: 50px;">
    <nav>
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/users" class="link">Users</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
  .link {
    margin-right: 10px;
  }
</style>