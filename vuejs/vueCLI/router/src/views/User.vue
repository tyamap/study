<template>
  <div>
    <h1>User No. {{ id }}</h1>
    <router-link
      :to="{
          name: 'users-id-profile',
          params: {id: Number(id) + 1}
        }"
    >Next User</router-link>
    <div>
      <router-link
        :to="{
          name: 'users-id-posts',
          params: {id}
        }" 
        class="link"
      >posts</router-link>
      <router-link
        :to="{
          name: 'users-id-profile',
          params: {id}
        }" 
        class="link"
      >profile</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["id"]
}
</script>