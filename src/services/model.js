import request from './request';
// import defaultSettings from '../defaultSettings';

// const BASE_URL = defaultSettings.apiUrl
// const V1 = '/api/v1';
// const urlPrefix = BASE_URL + V1
const urlPrefix = '/api/v1';
export const submitContact = data => request.post(`${urlPrefix}/contact-us`, data);
 