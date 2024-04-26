<script>
export default {
  name: "side-menu",
  props: {
    visible: Boolean
  },
  data() {
    return {
      sources: [],
      errors: [],
      newsApi: new NewsApiService()
    }
  },
  created() {
    this.newsApi.getSources().then(response => {
      this.sources = response.data.sources;
      this.sources.forEach(source => {
        source.urlToLogo = this.newsApi.getUrlToLogo(source);
        console.log('data: ');
        console.log(response.data.source);
      })
    }).catch(e => this.errors.push(e)); //Happy pad
  },
  methods:{
    onSourceSelected(source){
      this.$emit('source-selected', source);
    },
    isVisible(){
      return this.visible;
    }
  }
}
</script>

<template>
  <pv-sidebar v-bind:visible="visible">
    <div v-for="source in source" class="m-4">
      <div class="flex align-content-start flex-wrap" @click="onSourceSelected(source)">
        <span class="flex align-items-center justify-content-center mr-2">
          <pv-avatar :aria-label="source.name" :image="source.urlToLogo" shape="circle"/>
        </span>
        <span class="flex align-items-center justify-content-center">{{source.name}}</span>
      </div>
    </div>
  </pv-sidebar>
</template>

<style scoped>

</style>