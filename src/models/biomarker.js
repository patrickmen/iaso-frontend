import { queryBiomarkerList } from '@/services/api';

export default {
  namespace: 'biomarker',

  state: {
    biomarker: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryBiomarkerList, payload);
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
        biomarker: action.payload,
      };
    },
  },
};