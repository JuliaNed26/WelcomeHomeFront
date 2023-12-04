import {AxiosRequestHeaders} from 'axios';
import apiClient from './api-client';
const BASE_URL = 'http://10.0.2.2:5006/';

const contentTypes: any = {
  json: 'application/json',
  mfd: 'multipart/form-data',
};


// Base function for GET requests

const get = (
  route: string,
  { params = {} }: { params?: Record<string, string | number> } = {}
) => {
  let dynamicRoute = route;
  if (params) {
    Object.keys(params).forEach((param) => {
      const paramValue = params[param].toString();
      dynamicRoute = dynamicRoute.replace(`{${param}}`, paramValue);
    });
  }

  return apiClient(`${BASE_URL}/${dynamicRoute}`);
};


// Base function for POST requests

const post = async (
  route: string,
  {body, type = '', user = {}, params = {}}: {body: any; type: string; user: any; params?: Record<string, string | number> },
) => {
  let headers: AxiosRequestHeaders = {Accept: 'application/json'};
  if (user.token) {
    headers.Authorization = `bearer ${user.token}`;
  }
  if (type !== '') {
    headers['Content-Type'] = contentTypes[type];
  }
  let dynamicRoute = route;
  if (params) {
    Object.keys(params).forEach((param) => {
      const paramValue = params[param].toString();
      dynamicRoute = dynamicRoute.replace(`{${param}}`, paramValue);
    });
  }
  return apiClient({
    method: 'post',
    url: `${BASE_URL}/${dynamicRoute}`,
    headers,
    data: body,
  });
};



// Base function for PUT requests

export const put = async (
  route: string,
  { body, type = '', user = {}, params = {} }: { body: any; type: string; user: any; params?: Record<string, string | number> },
) => {
  let headers: AxiosRequestHeaders = {Accept: 'application/json'};
  if (user.token) {
    headers.Authorization = `bearer ${user.token}`;
  }
  if (type !== '') {
    headers['Content-Type'] = contentTypes[type];
  }

  let dynamicRoute = route;
  
  if (params) {
    Object.keys(params).forEach((param) => {
      const paramValue = params[param].toString();
      dynamicRoute = dynamicRoute.replace(`{${param}}`, paramValue);
    });
  }

  return apiClient({
    method: 'put',
    url: `${BASE_URL}/${dynamicRoute}`,
    headers,
    data: body,
  });
};



// Base function for DELETE requests

export const del = async (
  route: string,
  { type = '', user = {}, params = {} }: { type: string; user: any; params?: Record<string, string | number> },
) => {
  let headers: AxiosRequestHeaders = {Accept: 'application/json'};
  if (user.token) {
    headers.Authorization = `bearer ${user.token}`;
  }
  if (type !== '') {
    headers['Content-Type'] = contentTypes[type];
  }
  let dynamicRoute = route;

  if (params) {
    Object.keys(params).forEach((param) => {
      const paramValue = params[param].toString();
      dynamicRoute = dynamicRoute.replace(`{${param}}`, paramValue);
    });
  }

  return apiClient({
    method: 'delete',
    url: `${BASE_URL}/${dynamicRoute}`,
  });
};
// Routes
const routes = {
  login: 'Auth/Login',
  register: 'Auth/Register',
  registerVolonteer:'Auth/RegisterVolunteer',
  refresh:'Auth/Refresh',
  logout:'Auth/Logout',
  city:'City',
  cityCountryId:'City/country/{countryId}',
  country:'Country',
  documentId:'Document/{id}',
  document:'Document',
  neededDocuments:'Document/step/{stepId}/needed',
  receivedDocuments:'Document/step/{stepId}/received',
  establishmentId:'Establishment/{id}',
  establishment:'Establishment',
  establishmentByType:'Establishment/byType/{cityId}',
  establishmentByCity:'Establishment/byCity/{cityId}',
  socPayout:'api/SocialPayout',
  socPayoutId:'api/SocialPayout/{id}',
  stepId:'/Step/{id}',
  step:'/Step',
  byEstablishmentType:'byEstablishmentType/{establishmentTypeId}',
  userId:'User/{id}',
  user:'User',
  userCategoryId:'UserCategory/{id}',
  userCategory:'UserCategory',
  volunteerId:'Volunteer/{id}',
  volunteer:'Volunteer',
  establishmentVolunteer: 'Establishment/Volunteer',
  getPayments: 'payments',
};

export {routes, get, post};
export {login} from './auth';
export {getPayments} from './payments';
