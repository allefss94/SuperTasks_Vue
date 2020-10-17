import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3030';
Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    user: '',
    tasks: [],
  }),
  getters: {
    getUser: (state) => state.user,

    getTasks: (state) => state.tasks,
    getPendingTasks: (state) =>
      state.tasks.filter((task) => task.finished !== true),
    getFinishedTasks: (state) =>
      state.tasks.filter((task) => task.finished === true),
  },
  mutations: {
    reset: (state) => ((state.user = ''), (state.tasks = [])),

    setUser: (state, payload) => (state.user = payload),

    setTasks: (state, payload) => state.tasks.push(payload),
    changeStatus: (state, payload) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task._id === payload._id
      );
      state.tasks[taskIndex].finished = payload.finished;
    },
    removeTask: (state, payload) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task._id === payload._id
      );
      state.tasks.splice(taskIndex, 1);
    },
  },

  actions: {
    login: async ({ commit }, payload) => {
      const { data } = await axios.post('tasks', payload);
     
      for (const key in data) {
        commit('setTasks', data[key]);
      }
      commit('setUser', payload.name);
    },
    signUp: async ({ commit }, payload) => {
      await axios.post('user', payload).then(() => {
        commit('setUser', payload.name);
      });
    },

    changeTaskStatus: async ({ commit }, payload) => {
      await axios.put(`task/${payload._id}`, payload).then(() => {
        commit('changeStatus', payload);
      });
    },

    removeTask: async ({ commit }, payload) =>
      await axios
        .delete(`task/${payload._id}`)
        .then(() => commit('removeTask', payload)),

    addTask: async ({ commit }, payload) =>
      await axios.post('task', payload).then((res) => {
        commit('setTasks', res.data) 
      }),
  },
});
