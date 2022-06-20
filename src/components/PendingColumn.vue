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
    <div class="pending-column">
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
    //
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
