<template>
  <TaskPlanner />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import TaskPlanner from '../components/TaskPlanner.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    TaskPlanner,
  },
});
</script>
