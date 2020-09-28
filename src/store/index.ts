import Vue from "vue";
import Vuex from "vuex";
import ToDoModel from "@/models/ToDoModel";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: Array<ToDoModel>(),
  },
  mutations: {
    ADD_TODO(state, toDoModel: ToDoModel) {
      state.todos.push(toDoModel);
    },
  },
  actions: {
    addToDo(context, todoModel: ToDoModel) {
      return new Promise((resolve, reject) => {
        context.commit("ADD_TODO", todoModel);
        resolve();
      });
    },
  },
  modules: {},
});
