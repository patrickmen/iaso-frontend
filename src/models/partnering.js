import { queryPartneringList } from '@/services/api';

export default {
  namespace: 'partnering',

  state: {
    partnering: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryPartneringList, payload);
      yield put({
        type: 'queryList',
        payload: Array.isArray(response.data) ? response.data : [],
      });
    },
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        partnering: action.payload,
      };
    },
  },
};
