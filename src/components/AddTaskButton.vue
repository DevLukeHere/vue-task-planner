<template>
  <v-dialog v-model="dialog" persistent>
    <template v-slot:activator="{ props }">
      <v-btn
        :style="{ textTransform: `lowercase` }"
        prepend-icon="mdi-sticker-plus-outline"
        v-bind="props"
        >add task</v-btn
      >
    </template>
    <v-card :style="{ borderRadius: `1rem` }">
      <v-card-title :style="{ justifyContent: `space-between` }"
        >task details
        <v-btn
          @click="closeDialog"
          icon="mdi-close"
          :style="{ background: `transparent`, boxShadow: `none` }"
        ></v-btn
      ></v-card-title>
      <v-card-subtitle>please enter task details.</v-card-subtitle>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="this.$store.state.taskTitle"
            :rules="nameRules"
            label="title*"
            required
            variant="outlined"
            @change="setTaskTitle"
          ></v-text-field>
          <v-textarea
            outlined
            label="description*"
            required
            variant="outlined"
            v-model="this.$store.state.taskDescription"
            @change="setDescription"
          ></v-textarea>
          <p class="task-status-title">please select status of task</p>
          <v-row>
            <v-radio-group
              v-model="this.$store.state.status"
              inline
              @change="setStatus($event)"
            >
              <v-radio
                color="hsl(0, 85%, 70%)"
                label="pending"
                value="pending"
              ></v-radio>
              <v-radio
                color="hsl(34, 86%, 70%)"
                label="in progress"
                value="inProgress"
              ></v-radio>
              <v-radio
                color="hsl(138, 86%, 55%)"
                label="completed"
                value="completed"
              ></v-radio>
            </v-radio-group>
          </v-row>
          <v-combobox
            v-model="this.$store.state.tags"
            :items="items"
            label="tags"
            multiple
            chips
          ></v-combobox>
          <v-btn
            :style="{ borderRadius: `1rem`, textTransform: `lowercase` }"
            prepend-icon="mdi-cloud-upload"
            disabled
          >
            upload attachments
          </v-btn>
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
            !this.$store.state.taskTitle || !this.$store.state.taskDescription
              ? true
              : false
          "
          text
          @click="addTask"
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
    addTask() {
      let id = Math.floor(Math.random() * 100);
      const params = {
        id: id,
        title: this.$store.state.taskTitle,
        description: this.$store.state.taskDescription,
        status: this.$store.state.status,
        tags: this.$store.state.tags,
      };
      this.$store.commit("addTask", params);
      // this.$refs.form.reset();
      this.$store.commit("clearForm");
      this.dialog = false;
    },
    setStatus(e) {
      const status = e.target.value;
      this.$store.commit("setStatus", status);
    },
    setTaskTitle(e) {
      const taskTitle = e.target.value;
      this.$store.commit("setTaskTitle", taskTitle);
    },
    setDescription(e) {
      const description = e.target.value;
      this.$store.commit("setTaskDescription", description);
    },
    closeDialog() {
      this.dialog = false;
      // this.$refs.form.reset();
      this.$store.commit("clearForm");
    },
  },

  data() {
    return {
      dialog: false,
      picked: new Date(),
      items: [
        "#bugfix",
        "#hotfix",
        "#feature",
        "#main",
        "#development",
        "#staging",
        "#misc",
      ],
      inline: null,
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
.task-status-title {
  margin-bottom: 1rem;
}
</style>
