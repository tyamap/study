<template>
  <div>
    <h2>{{ title | upperCase}}</h2>
    <p>{{ subTitle | lowerCase }}</p>
  </div>
</template>

<script>
import {tokyoTitle} from "@/tokyoTitle";
export default {
  mixins: [tokyoTitle]
}
</script>