import { queryTargetProteinList } from '@/services/api';

export default {
  namespace: 'targetProtein',

  state: {
    targetProtein: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryTargetProteinList, payload);
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
        targetProtein: action.payload,
      };
    },
  },
};