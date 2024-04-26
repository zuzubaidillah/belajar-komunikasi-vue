import axios from "axios";

const ApiService = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  withCredentials: true
})

// Simplify the retrieval of token and adding it to the request headers
ApiService.interceptors.request.use(
  (config) => {
    /*const token = 'ini token'
    config.headers.Authorization = `Bearer ${token}`*/
    return config
  },
  (error) => Promise.reject(error)
)

ApiService.interceptors.response.use(
  async (response) => {
    // Anda bisa melakukan pengecekan atau transformasi pada response di sini
    return response
  },
  async (error) => {
    // Anda bisa menggunakan async/await di sini jika perlu
    // logika yang lain
    if (error.response.status >= 500) {
      alert('Layanan sedang sibuk')
    }
    return Promise.reject(error)
  }
)

export default ApiService