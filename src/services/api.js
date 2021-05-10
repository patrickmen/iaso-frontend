import { stringify } from 'qs';
import request from '@/utils/request';
// import defaultSettings from '../defaultSettings';

// const BASE_URL = defaultSettings.apiUrl

// About Us API
export async function queryAboutUsList(params) {
  return request(`/api/v1/about-us?${stringify(params)}`);
}

// Target Protein API
export async function queryTargetProteinList(params) {
  return request(`/api/v1/technology/target-protein?${stringify(params)}`);
}

// SBDD API
export async function querySBDDList(params) {
  return request(`/api/v1/technology/sbdd?${stringify(params)}`);
}

// Products API
export async function queryProductsList(params) {
  return request(`/api/v1/products?${stringify(params)}`);
}

// Partnering API
export async function queryPartneringList(params) {
  return request(`/api/v1/partnering?${stringify(params)}`);
}

// News API
export async function queryNewsList(params) {
  return request(`/api/v1/news?${stringify(params)}`);
}

// Pipeline API
export async function queryPipelineList(params) {
  return request(`/api/v1/pipeline?${stringify(params)}`);
}

// Careers API
export async function queryCareersList(params) {
  return request(`/api/v1/careers?${stringify(params)}`);
}
