import { queryPipelineList } from '@/services/api';

export default {
  namespace: 'pipeline',

  state: {
    pipeline: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryPipelineList, payload);
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
        pipeline: action.payload,
      };
    },
  },
};
