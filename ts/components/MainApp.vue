<template lang="pug">
.main main app component

</template>

<script lang="ts">
import Component from "vue-class-component";
import {Prop, Vue} from "vue-property-decorator";

@Component({
  components: {}
})
class MainApp extends Vue {
  // @Prop({default: ''})
  // readonly message!: string;
}

export default MainApp;

</script>

<style scoped lang="less"></style>