/* eslint no-param-reassign: ["error", {"props": false}] */
import moment from 'moment';
import axios from 'axios';

const getInitialState = () => ({
  type: 'food',
  direction: '-',
  ammount: '',
  comment: '',
  date: moment().format('YYYY-MM-DD'),
});

const state = getInitialState();

const getters = {
  type: innerState => innerState.type,
  direction: innerState => innerState.direciton,
  ammount: innerState => innerState.ammount,
  comment: innerState => innerState.comment,
  date: innerState => innerState.date,
};

const mutations = {
  resetNewItemState: (innerState) => {
    const keys = Object.keys(innerState);
    const initialState = getInitialState();

    keys.forEach((key) => {
      innerState[key] = initialState[key];
    });
  },
  changeType: (innerState, newType) => {
    innerState.type = newType;
  },
  changeDirection: (innerState, newDirection) => {
    innerState.direction = newDirection;
  },
  changeAmmount: (innerState, newAmmount) => {
    innerState.ammount = newAmmount;
  },
  changeComment: (innerState, newComment) => {
    innerState.comment = newComment;
  },
  changeDate: (innerState, newDate) => {
    innerState.date = newDate;
  },
};

const actions = {
  submitAddNewForm: ({ commit, state: localState }) => {
    axios.post('/data.json', localState)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(res.statusText);
        }

        const newItem = {
          ...localState,
          id: res.data.name,
        };

        commit('addItemToData', newItem);
        commit('resetNewItemState');
      })
      .catch((err) => {
      // eslint-disable-next-line no-console
        console.log(err);
      });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
