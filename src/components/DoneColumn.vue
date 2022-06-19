<template>
  <div>
    <div class="done-title-div">
      <h3 class="done-title">Done</h3>
    </div>
    <h4 class="mb-6">
      You have completed
      <span class="done-task-count">{{
        this.$store.state.completed.length
      }}</span>
      task(s)
    </h4>
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
  height: 100vh;
}
.done-task-count {
  color: hsl(138, 86%, 55%);
}
.done-title-div {
  color: #000000;
  background: hsl(138, 86%, 55%);
  border-radius: 0.5rem;
}
</style>
