<template>
  <div>
    <div class="processing-title-div">
      <h3 class="processing-title">in progress</h3>
    </div>
    <h4 class="mb-6">
      you have
      <span class="processing-task-count">{{
        this.$store.state.inProgress.length
      }}</span>
      task<span v-if="this.$store.state.inProgress.length > 1">s</span> in
      progress
    </h4>
    <div
      @drop="onDrop($event, 1)"
      @dragover.prevent
      @dragenter.prevent
      class="processing-column"
    >
      <ProcessingTaskCard />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ProcessingTaskCard from "./ProcessingTaskCard.vue";

export default defineComponent({
  name: "InProgressColumn",

  components: { ProcessingTaskCard },

  methods: {},

  data() {
    return {
      onDrop(e, list) {
        if (this.$store.state.taskOnDrag.id) {
          if (this.$store.state.taskOnDrag.status == "pending") {
            this.$store.commit("removePending", this.$store.state.taskOnDrag);
          }
        }
        // set status to based on new column //
        this.$store.commit("setInProgress", this.$store.state.taskOnDrag);
        this.$store.commit("setOnDrag", {});
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
