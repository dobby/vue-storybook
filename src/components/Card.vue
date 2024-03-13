<template>
  <div class="card">
    <h4 class="title">{{title}}</h4>
    <p class="secondary">{{subTitle}}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {type: String, required: true },
  subTitle: {type: String, required: false },
})
</script>

<style scoped>
  .card {
    background-color: #fff;
    border-radius: .2rem;
    box-shadow: rgb(150,150,150,150) 0px 1px 3px;
    width: 350px;
    padding: .8rem;
  }
</style>