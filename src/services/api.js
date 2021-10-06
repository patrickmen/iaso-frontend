import { stringify } from 'qs';
import request from '@/utils/request';
// import defaultSettings from '../defaultSettings';

// const BASE_URL = defaultSettings.apiUrl

// About Us API
export async function queryAboutUsList(params) {
  return request(`/api/v1/about-us?${stringify(params)}`);
}

// Target Protein API
export async function queryTargetValidationList(params) {
  return request(`/api/v1/technology/target-validation?${stringify(params)}`);
}

// SBDD API
export async function querySBDDList(params) {
  return request(`/api/v1/technology/sbdd?${stringify(params)}`);
}

// Biomarker API
export async function queryBiomarkerList(params) {
  return request(`/api/v1/technology/biomarker-development?${stringify(params)}`);
}

// Products API
export async function queryProductsList(params) {
  return request(`/api/v1/products?${stringify(params)}`);
}

// Academic Institution API
export async function queryAcademicInstitutionList(params) {
  return request(`/api/v1/partnering/academic-institution?${stringify(params)}`);
}

// Biotech Company API
export async function queryBiotechCompanyList(params) {
  return request(`/api/v1/partnering/biotech-company?${stringify(params)}`);
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
