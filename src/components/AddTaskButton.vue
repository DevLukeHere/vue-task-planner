<template>
  <v-dialog v-model="dialog" persistent>
    <template v-slot:activator="{ props }">
      <v-btn prepend-icon="mdi-sticker-plus-outline" v-bind="props"
        >add task</v-btn
      >
    </template>
    <v-card :style="{ borderRadius: `1rem` }">
      <v-card-title :style="{ justifyContent: `space-between` }"
        >task details
        <v-btn
          @click="dialog = false"
          icon="mdi-close"
          :style="{ background: `transparent`, boxShadow: `none` }"
        ></v-btn
      ></v-card-title>
      <v-card-subtitle>please enter task details.</v-card-subtitle>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="task"
            :rules="nameRules"
            label="title*"
            required
            variant="outlined"
            @change="setTask"
          ></v-text-field>
          <v-textarea
            outlined
            label="description*"
            required
            variant="outlined"
            v-model="description"
            @change="setDescription"
          ></v-textarea>
          <p class="task-status-title">task status</p>
          <v-row>
            <v-radio-group v-model="inline" inline>
              <v-radio
                color="hsl(0, 85%, 70%)"
                label="pending"
                value="pending"
              ></v-radio>
              <v-radio
                color="hsl(34, 86%, 70%)"
                label="processing"
                value="processing"
              ></v-radio>
              <v-radio
                color="hsl(138, 86%, 55%)"
                label="done"
                value="done"
              ></v-radio>
            </v-radio-group>
          </v-row>
          <v-combobox
            v-model="select"
            :items="items"
            label="tags"
            multiple
            chips
          ></v-combobox>
          <v-btn
            :style="{ borderRadius: `1rem`, textTransform: `lowercase` }"
            prepend-icon="mdi-cloud-upload"
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
      items: [
        "#bugfix",
        "#hotfix",
        "#feature",
        "#main",
        "#development",
        "#staging",
      ],
      select: [],
      radioGroup: 3,
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
.v-combobox__selection {
  margin-top: 0.5rem;
}
.task-status-title {
  margin-bottom: 1rem;
}
</style>
