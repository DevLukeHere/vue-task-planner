<template>
  <v-container>
    <v-row no-gutters class="mb-6">
      <ProgressBar />
    </v-row>
    <v-row no-gutters offset class="mb-8 mt-16 button-container">
      <AddTaskButton />
      <FilterButton />
    </v-row>
    <v-row no-gutters offset class="mb-10">
      <Searchbar />
    </v-row>
    <v-row no-gutters>
      <v-col>
        <PendingColumn />
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
        <InProgressColumn />
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
        <CompletedColumn />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";
import AddTaskButton from "./AddTaskButton.vue";
import FilterButton from "./FilterButton.vue";
import PendingColumn from "./PendingColumn.vue";
import InProgressColumn from "./InProgressColumn.vue";
import CompletedColumn from "./CompletedColumn.vue";
import Searchbar from "./Searchbar.vue";

export default {
  name: "TaskPlanner",

  components: {
    ProgressBar,
    AddTaskButton,
    FilterButton,
    PendingColumn,
    InProgressColumn,
    CompletedColumn,
    Searchbar,
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
