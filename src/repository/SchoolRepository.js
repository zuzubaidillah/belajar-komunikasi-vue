/*
import ApiService from "../api/ApiService.js";

const urlMockApi = 'http://localhost:3001/api/';
export default {

  getSchools(params) {
    return ApiService.get(`${urlMockApi}/schools`, {params})
  }
}*/


import ApiService from "../api/ApiService.js";

export default {

  getSchools(params) {
    return ApiService.get(`/schools`, { params: params })
  },

  postSchool(formData) {
    return ApiService.post(`/school`, formData)
  },

  getSchoolById(schoolId) {
    return ApiService.get(`/school/${schoolId}`, { params: {} })
  }
}