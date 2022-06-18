<template>
  <div>
    <h3>Done</h3>
    <div class="done-column"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DoneColumn",

  components: {},

  methods: {},

  data() {
    return {
      //
    };
  },
});
</script>

<style>
.done-column {
  border: 1px solid black;
  height: 100vh;
}
</style>
