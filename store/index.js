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
      selectedTask: [],
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
      let index = state.pending.findIndex(
        (pendingTask) => pendingTask.id == payload.id
      );
      state.pending.splice(index, 1);
    },
    setInProgress(state, payload) {
      state.inProgress = [...state.inProgress, payload];
    },
    removeInProgress(state, payload) {
      let index = state.inProgress.findIndex(
        (inProgressTask) => inProgressTask.id == payload.id
      );
      state.inProgress.splice(index, 1);
    },
    setCompleted(state, payload) {
      state.completed = [...state.completed, payload];
    },
    removeCompleted(state, payload) {
      let index = state.completed.findIndex(
        (completedTask) => completedTask.id == payload.id
      );
      state.completed.splice(index, 1);
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
    setSelectedTask(state, payload) {
      state.selectedTask = [payload];
    },
  },
});
