import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import newItem from './new-item/addNew';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    newItem,
  },
  state: {
    data: [],
  },
  getters: {
    allData: state => state.data,
  },
  mutations: {
    removeItem: (state, id) => {
      state.data.splice(id, 1);
    },
    // not used at the moment.
    resetData: (state, data) => {
      /* eslint no-param-reassign: ["error",
      {"props": true, "ignorePropertyModificationsFor": ["state"] }] */
      state.data = data;
    },
    addItemToData: (state, newItemObject) => {
      state.data.push(newItemObject);
    },
  },
  actions: {
    getData: ({ commit, state }) => {
      // async thingies
      if (state.data.length !== 0) {
        return;
      }

      axios.get('/data.json')
        .then((res) => {
          const data = [];
          const response = res.data;
          const idArray = Object.keys(response);
          const idArrayLength = idArray.length;

          for (let i = 0; i < idArrayLength; i += 1) {
            const id = idArray[i];
            const destructuredObject = { ...response[id] };
            destructuredObject.id = id;

            data.push(destructuredObject);
          }

          commit('resetData', data);
        });
    },
    deleteItem: ({ commit, state }, index) => {
      const { id } = state.data[index];

      axios.delete(`/data/${id}.json`)
        .then((res) => {
          if (res.status === 200) {
            commit('removeItem', index);
          }
        });
    },
  },
});
