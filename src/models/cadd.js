import { queryCADDList } from '@/services/api';

export default {
  namespace: 'cadd',

  state: {
    cadd: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryCADDList, payload);
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
        cadd: action.payload,
      };
    },
  },
};