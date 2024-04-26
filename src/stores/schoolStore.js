// stores/schoolStore.js
import {defineStore} from "pinia"
import {schoolsGet} from "../services/SchoolService.js";

export const useSchoolStore = defineStore("schoolStore", {
  state: () => {
    return {
      items: [],
      page: 1,
      pageSize: 10,
      limit: 10,
      isLoading: false
    }
  },
  actions: {
    async getSchools() {
      this.isLoading = true

      try {
        const params = {
          page: this.page,
          limit: this.limit,
          pageSize: this.pageSize
        }
        const response = await schoolsGet(params)
        console.log(response.data)
        this.items = response.data.data
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log(error)
        if (error.response.status >= 500) {
          return false
        }





      }

    },
  },
})