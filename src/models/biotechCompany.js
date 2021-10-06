import { queryBiotechCompanyList } from '@/services/api';

export default {
  namespace: 'biotechCompany',

  state: {
    biotechCompany: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryBiotechCompanyList, payload);
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
        biotechCompany: action.payload,
      };
    },
  },
};