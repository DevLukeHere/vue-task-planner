import { createStore } from "vuex";

// Create a new store instance.
export default createStore({
  state() {
    return {
      task: "",
      taskDescription: "",
      status: "",
      tags: [],
      pending: [],
      inProgress: [],
      completed: [],
      showSearch: false,
    };
  },
  mutations: {
    setTask(state, payload) {
      state.task = payload;
    },
    setTaskDescription(state, payload) {
      state.taskDescription = payload;
    },
    setPending(state, payload) {
      state.pending = [...state.pending, payload];
    },
    removePending(state, payload) {
      let index = state.pending.findIndex((c) => c.id == payload.id);
      state.pending.splice(index, 1);
    },
    clearForm(state, payload) {
      state.task = "";
      state.taskDescription = "";
      state.status = "";
      state.tags = [];
    },
    setShowSearch(state, payload) {
      state.showSearch = !state.showSearch;
    },
  },
});
