import { querySBDDList } from '@/services/api';

export default {
  namespace: 'sbdd',

  state: {
    sbdd: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(querySBDDList, payload);
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
        sbdd: action.payload,
      };
    },
  },
};