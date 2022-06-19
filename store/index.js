import { createStore } from "vuex";

// Create a new store instance.
export default createStore({
  state() {
    return {
      task: "",
      taskDescription: "",
      pending: [],
      inProgress: [],
      completed: [],
    };
  },
  mutations: {
    setTask(state, payload) {
      return (state.task = payload);
    },
    setTaskDescription(state, payload) {
      return (state.taskDescription = payload);
    },
    setPending(state, payload) {
      return (state.pending = [...state.pending, payload]);
    },
  },
});
