<template>
  <div>
    <h3>Pending</h3>
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

  methods: {},

  data() {
    return {
      //
    };
  },
});
</script>

<style>
.pending-column {
  border: 1px solid black;
  height: 100vh;
}
</style>
