<template>
  <v-container>
    <v-row justify="center">
      <h3>overall task completion</h3>
      <v-progress-linear
        :style="{ borderRadius: `1rem` }"
        model-value="10"
        color="blue-grey"
        height="20"
      >
        <template v-slot:default="{ value }">
          <p class="task-completion-text">10% completed</p>
        </template>
      </v-progress-linear>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProgressBar",
});
</script>

<style>
h3 {
  margin-bottom: 1rem;
}
.task-completion-text {
  font-weight: bold;
  font-size: 1rem;
}
</style>
