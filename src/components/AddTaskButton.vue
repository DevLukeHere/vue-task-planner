<template>
  <v-dialog v-model="dialog" persistent>
    <template v-slot:activator="{ props }">
      <v-btn prepend-icon="mdi-sticker-plus-outline" v-bind="props"
        >add task</v-btn
      >
    </template>
    <v-card :style="{ borderRadius: `1rem` }">
      <v-card-title :style="{ justifyContent: `space-between` }"
        >Task details
        <v-btn
          @click="dialog = false"
          icon="mdi-close"
          :style="{ background: `transparent`, boxShadow: `none` }"
        ></v-btn
      ></v-card-title>
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
          <v-textarea
            outlined
            label="Task description"
            required
            v-model="description"
            @change="setDescription"
          ></v-textarea>
          <!-- <DatePicker
            v-model="picked"
            :locale="locale"
            :upperLimit="to"
            :lowerLimit="from"
            :clearable="true"
            class="date-picker"
          /> -->
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          :style="{ textTransform: `lowercase` }"
          prepend-icon="mdi-sticker-plus-outline"
          :disabled="
            !this.$store.state.task || !this.$store.state.taskDescription
              ? true
              : false
          "
          text
          @click="setPending"
        >
          add task
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { defineComponent } from "vue";
import DatePicker from "vue3-datepicker";

export default defineComponent({
  name: "AddTaskButton",

  components: {
    DatePicker,
  },

  methods: {
    setPending() {
      let id = Math.floor(Math.random() * 100);
      const params = {
        id: id,
        title: this.$store.state.task,
        description: this.$store.state.taskDescription,
      };
      this.$store.commit("setPending", params);
      this.dialog = false;
    },
    setTask(e) {
      const task = e.target.value;
      this.$store.commit("setTask", task);
    },
    setDescription(e) {
      const description = e.target.value;
      this.$store.commit("setTaskDescription", description);
    },
  },

  data() {
    return {
      dialog: false,
      picked: new Date(),
    };
  },
});
</script>

<style>
.v-overlay__content {
  min-width: 30rem;
}
.date-picker {
  border: 1px solid black;
}
</style>
