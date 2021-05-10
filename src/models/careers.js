import { queryCareersList } from '@/services/api';

export default {
  namespace: 'careers',

  state: {
    careers: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryCareersList, payload);
      yield put({
        type: 'queryList',
        payload: Array.isArray(response.data) ? response.data : [],
      });
    }
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        careers: action.payload,
      };
    },
  },
};
