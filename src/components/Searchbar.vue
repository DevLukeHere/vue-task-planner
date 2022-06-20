<template>
  <v-text-field
    v-if="this.$store.state.showSearch"
    label="search for task title"
    class="searchbox-field"
    prepend-inner-icon="mdi-magnify"
    variant="outlined"
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
