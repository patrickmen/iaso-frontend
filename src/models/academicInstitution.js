import { queryAcademicInstitutionList } from '@/services/api';

export default {
  namespace: 'academicInstitution',

  state: {
    academicInstitution: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryAcademicInstitutionList, payload);
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
        academicInstitution: action.payload,
      };
    },
  },
};