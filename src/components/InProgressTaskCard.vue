<template>
  <v-card
    v-for="(task, index) in this.$store.state.inProgress"
    :key="task.id"
    tonal
    variant="outlined"
    class="task-card mb-8"
    :draggable="true"
    @dragstart="startDrag($event, task)"
  >
    <v-card-title class="card-title-processing">{{ task.title }}</v-card-title>
    <v-card-text
      ><span class="task-subtitle"
        ><v-icon icon="mr-1 mdi-comment-text-outline"></v-icon>description:{{
          " "
        }}</span
      >{{ task.description }}</v-card-text
    >
    <v-card-text
      ><span class="task-subtitle"
        ><v-icon icon="mr-1 mdi-calendar-clock"></v-icon>completion time:{{
          " "
        }}</span
      >3 Aug at 13:00</v-card-text
    >
    <v-card-text>
      <span class="task-subtitle"
        ><v-icon icon="mr-1 mdi-timer-sand"></v-icon>status:{{ " " }}</span
      >{{ task.status }}
    </v-card-text>
    <v-card-text v-if="task.tags.length !== 0">
      <p class="tags-subtitle mb-2">
        <v-icon icon="mr-1 mdi-tag-multiple-outline"></v-icon>tags
      </p>
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
  name: "InProgressTaskCard",

  components: {},

  methods: {
    deleteTask(task) {
      this.$store.commit("removeInProgress", task);
    },
    startDrag(e, task) {
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.effectAllowed = "move";
      this.$store.commit("setOnDrag", task);
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
.card-title-processing {
  background: hsl(34, 86%, 70%);
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
