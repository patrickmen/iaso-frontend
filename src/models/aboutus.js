import { queryAboutUsList } from '@/services/api';

export default {
  namespace: 'aboutus',

  state: {
    aboutus: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryAboutUsList, payload);
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
        aboutus: action.payload,
      };
    },
  },
};