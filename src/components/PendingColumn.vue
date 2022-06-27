<template>
  <div>
    <div class="pending-title-div">
      <h3 class="pending-title">pending</h3>
    </div>
    <h4 class="mb-6">
      you have
      <span class="pending-task-count">{{
        this.$store.state.pending.length
      }}</span>
      task<span v-if="this.$store.state.pending.length > 1">s</span> to complete
    </h4>
    <div
      @drop="onDrop"
      @dragover.prevent
      @dragenter.prevent
      class="pending-column"
    >
      <TaskCard />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TaskCard from "./TaskCard.vue";

export default defineComponent({
  name: "PendingColumn",

  components: { TaskCard },

  methods: {
    onDrop() {
      // if (this.$store.state.taskOnDrag.id) {
      //   if (this.$store.state.taskOnDrag.status == "pending") {
      //     this.$store.commit("removePending", this.$store.state.taskOnDrag);
      //   }
      // }
      // // set status to based on new column //
      // this.$store.commit("setInProgress", this.$store.state.taskOnDrag);
      // this.$store.commit("setOnDrag", {});
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
.pending-column {
  height: 100vh;
}
.pending-task-count {
  color: hsl(0, 85%, 70%);
}
.pending-title-div {
  color: #000000;
  background: hsl(0, 85%, 70%);
  border-radius: 0.5rem;
}
</style>
