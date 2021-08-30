<template lang="pug">
  .main
    a(href="/admin/" target="_blank") Admin
    br
    ul
      li(v-for="link in links" :key="link.id")
        a(:href="link.url" v-text="link.title" target="_blank")
</template>

<script lang="ts">
import Component from "vue-class-component";
import {Prop, Vue} from "vue-property-decorator";
import {Link} from "../stores/index_types";

@Component({
  components: {}
})
class MainApp extends Vue {
  // @Prop({default: ''})
  // readonly message!: string;

  get links(): Link[] {
    return this.$store.getters['links'];
  }
}

export default MainApp;

</script>

<style scoped lang="less"></style>