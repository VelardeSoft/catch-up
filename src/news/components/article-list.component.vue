<script>
export default {
  name: "article-list",
  props:{
    articles: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div v-for="article in articles">
    <article-card article="article"/>
  </div>
</template>

<style scoped>

</style>