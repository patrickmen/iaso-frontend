import { queryTargetValidationList } from '@/services/api';

export default {
  namespace: 'targetValidation',

  state: {
    targetValidation: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryTargetValidationList, payload);
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
        targetValidation: action.payload,
      };
    },
  },
};