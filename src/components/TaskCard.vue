<template>
  <v-card
    v-for="(task, index) in this.$store.state.pending"
    :key="task.id"
    tonal
    variant="outlined"
    class="task-card mb-8"
    :draggable="true"
    @dragstart="startDrag($event, task)"
  >
    <v-card-title class="card-title">{{ task.title }}</v-card-title>
    <v-card-text
      ><span class="task-subtitle">description:{{ " " }}</span
      >{{ task.description }}</v-card-text
    >
    <v-card-text
      ><span class="task-subtitle">completion time:{{ " " }}</span
      >3 Aug at 13:00</v-card-text
    >
    <v-card-text v-if="task.tags.length !== 0">
      <p class="tags-subtitle mb-2">tags</p>
      <v-chip
        v-for="(tag, index) in task.tags"
        :key="index"
        color="primary"
        class="ml-1"
        size="x-small"
        outlined
        >{{ tag }}</v-chip
      >
    </v-card-text>
    <v-card-actions>
      <v-btn
        v-on:click="deleteTask(task)"
        icon="mdi-trash-can-outline"
        color="error"
      ></v-btn>
      <v-btn icon="mdi-pencil" color="primary"></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TaskCard",

  components: {},

  methods: {
    deleteTask(task) {
      this.$store.commit("removePending", task);
    },
    startDrag(e, task) {
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("taskID", task.id);
    },
    onDrop(e, list) {
      const taskID = e.dataTransfer.getData("taskID");
      const task = this.tasks.find((task) => task.id == taskID);
      task.list = list;
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
.card-title {
  background: hsl(0, 85%, 70%);
  border-radius: 1.5rem 1.5rem 0 0;
  justify-content: center;
  min-height: 3rem;
  border-bottom: 1px solid black;
}
.v-card {
  border-radius: 1.5rem;
  background: hsl(30, 14%, 95%);
}
.task-subtitle {
  font-weight: bold;
}
.tags-subtitle {
  font-weight: bold;
}
</style>
