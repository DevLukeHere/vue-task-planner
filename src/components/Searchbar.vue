<template>
  <v-text-field
    v-if="this.$store.state.showSearch"
    :label="
      this.$store.state.pending.length == 0 &&
      this.$store.state.inProgress.length == 0 &&
      this.$store.state.completed.length == 0
        ? `you don't have any tasks available`
        : `search tasks by title`
    "
    class="searchbox-field"
    prepend-inner-icon="mdi-magnify"
    variant="outlined"
    :disabled="
      this.$store.state.pending.length == 0 &&
      this.$store.state.inProgress.length == 0 &&
      this.$store.state.completed.length == 0
        ? true
        : false
    "
  ></v-text-field>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Searchbar",
});
</script>

<style>
.searchbox-field {
  width: 100%;
}
</style>
