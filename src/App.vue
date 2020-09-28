<template>
  <div id="app">
    <ToDos />
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import ToDos from "@/components/ToDos.vue";
  export default Vue.extend({
    components: {
      ToDos,
    },
  });
</script>

<style></style>
