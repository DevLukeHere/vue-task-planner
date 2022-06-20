<template>
  <div>
    <div class="processing-title-div">
      <h3 class="processing-title">processing</h3>
    </div>
    <h4 class="mb-6">
      you have
      <span class="processing-task-count">{{
        this.$store.state.inProgress.length
      }}</span>
      task(s) in progress
    </h4>
    <div
      @drop="onDrop($event, 1)"
      @dragover.prevent
      @dragenter.prevent
      class="processing-column"
    ></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProcessingColumn",

  components: {},

  methods: {},

  data() {
    return {
      onDrop(e, list) {
        const taskID = e.dataTransfer.getData("taskID");
        const task = this.tasks.find((task) => task.id == taskID);
        task.list = list;
      },
    };
  },
});
</script>

<style>
.processing-column {
  height: 100vh;
}
.processing-task-count {
  color: hsl(34, 86%, 70%);
}
.processing-title-div {
  color: #000000;
  background: hsl(34, 86%, 70%);
  border-radius: 0.5rem;
}
</style>
