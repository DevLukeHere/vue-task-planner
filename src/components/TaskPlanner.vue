<template>
  <v-container>
    <v-row no-gutters class="mb-6">
      <ProgressBar />
    </v-row>
    <v-row no-gutters offset class="mb-16 mt-16 button-container">
      <AddTaskButton />
      <FilterButton />
    </v-row>
    <v-row no-gutters>
      <v-col>
        <PendingColumn />
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
        <ProcessingColumn />
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
        <DoneColumn />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import logo from "../assets/logo.svg";
import ProgressBar from "./ProgressBar.vue";
import AddTaskButton from "./AddTaskButton.vue";
import FilterButton from "./FilterButton.vue";
import PendingColumn from "./PendingColumn.vue";
import ProcessingColumn from "./ProcessingColumn.vue";
import DoneColumn from "./DoneColumn.vue";

export default {
  name: "TaskPlanner",

  components: {
    ProgressBar,
    AddTaskButton,
    FilterButton,
    PendingColumn,
    ProcessingColumn,
    DoneColumn,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
h3,
h4 {
  text-align: center;
}
.button-container {
  justify-content: flex-end;
}
</style>
