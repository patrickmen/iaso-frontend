import { queryNewsList } from '@/services/api';

export default {
  namespace: 'news',

  state: {
    news: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryNewsList, payload);
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
        news: action.payload,
      };
    }
  },
};
