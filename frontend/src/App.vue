<template>
  <div id="app" v-loading.fullscreen.lock="loader.status">
    <router-view/>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState({
      loader: state => state.loader
    })
  }
};
</script>