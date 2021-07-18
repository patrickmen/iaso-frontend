import { queryDELList } from '@/services/api';

export default {
  namespace: 'del',

  state: {
    del: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryDELList, payload);
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
        del: action.payload,
      };
    },
  },
};