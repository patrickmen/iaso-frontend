import { queryIndustrialInstitutionList } from '@/services/api';

export default {
  namespace: 'industrialInstitution',

  state: {
    industrialInstitution: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryIndustrialInstitutionList, payload);
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
        industrialInstitution: action.payload,
      };
    },
  },
};