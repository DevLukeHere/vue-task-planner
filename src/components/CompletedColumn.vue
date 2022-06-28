<template>
  <div>
    <div class="done-title-div">
      <h3 class="done-title">completed</h3>
    </div>
    <h4 class="mb-6">
      you have completed
      <span class="done-task-count">{{
        this.$store.state.completed.length
      }}</span>
      task<span v-if="this.$store.state.completed.length > 1">s</span>
    </h4>
    <div
      @drop="onDrop"
      @dragover.prevent
      @dragenter.prevent
      class="done-column"
    >
      <CompletedTaskCard />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CompletedTaskCard from "./CompletedTaskCard.vue";

export default defineComponent({
  name: "CompletedColumn",

  components: { CompletedTaskCard },

  methods: {
    onDrop() {
      if (this.$store.state.taskOnDrag.id) {
        if (this.$store.state.taskOnDrag.status == "pending") {
          this.$store.commit("removePending", this.$store.state.taskOnDrag);
        } else if (this.$store.state.taskOnDrag.status == "inProgress") {
          this.$store.commit("removeInProgress", this.$store.state.taskOnDrag);
        } else {
          this.$store.commit("removeCompleted", this.$store.state.taskOnDrag);
        }
      }

      this.$store.commit("setCompleted", this.$store.state.taskOnDrag);
      this.$store.state.completed.map((task) => {
        task.status = "completed";
      });
      this.$store.commit("setOnDrag", {});
    },
  },

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
