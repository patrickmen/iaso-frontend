import { queryProductsList } from '@/services/api';

export default {
  namespace: 'products',

  state: {
    products: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryProductsList, payload);
      yield put({
        type: 'queryList',
        payload: Array.isArray(response) ? response : [],
      });
    }
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        products: action.payload,
      };
    }
  },
};
