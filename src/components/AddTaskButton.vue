<template>
  <v-dialog v-model="dialog" persistent>
    <template v-slot:activator="{ props }">
      <v-btn prepend-icon="mdi-sticker-plus-outline" v-bind="props"
        >add task</v-btn
      >
    </template>
    <v-card>
      <v-card-title>Task details</v-card-title>
      <v-card-subtitle>Please enter task details</v-card-subtitle>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="task"
            :rules="nameRules"
            label="Task"
            required
            @change="setTask"
          ></v-text-field>
          <v-text-field
            v-model="description"
            :rules="nameRules"
            label="Description"
            required
            @change="setDescription"
          ></v-text-field>
          <v-text-field
            v-model="time"
            :rules="nameRules"
            label="Estimated Time"
            required
            @change="setEstimatedTime"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue-darken-1" :disabled="!valid" text @click="validate"
          >Save</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddTaskButton",

  methods: {
    setTask(e) {
      const task = e.target.value
      this.$store.commit("setTask", task);
      console.log(this.$store.state.task);
    },
    setDescription(e) {
      const description = e.target.value
      this.$store.commit("setTaskDescription", description);
      console.log(this.$store.state.taskDescription);
    },
    setTask(e) {
      const estimatedTime = e.target.value
      this.$store.commit("setEstimatedTime", estimatedTime);
      console.log(this.$store.state.estimatedTime);
    }
  },

  data() {
    return {
      dialog: false,
    };
  },
});
</script>

<style>
.v-overlay__content {
  min-width: 30rem;
}
</style>
