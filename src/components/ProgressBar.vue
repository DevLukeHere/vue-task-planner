<template>
  <v-container>
    <v-row justify="center">
      <h3>Progress</h3>
      <v-progress-linear
        model-value="20"
        color="light-green darken-4"
        height="10"
        striped
      ></v-progress-linear>
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
</style>
