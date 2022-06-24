<template>
  <div class="ml-4">
    <v-btn
      :style="{ textTransform: `lowercase` }"
      @click="setShowSearch"
      prepend-icon="mdi-feature-search-outline"
      >search & filter</v-btn
    >
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FilterButton",

  methods: {
    setShowSearch() {
      this.$store.commit("setShowSearch");
    },
  },
});
</script>

<style></style>
