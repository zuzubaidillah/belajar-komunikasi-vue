import repository from '../repository/SchoolRepository.js'

export const schoolsGet = async (params) => {
  if (!params.page || !params.pageSize) {
    throw new Error('Client Request not complete.')
  }

  const payload = {
    page: params.page,
    pageSize: params.pageSize
  }

  try {
    return await repository.getSchools(payload)
  } catch (error) {
    console.error('call server error:', error)
    console.error(error.response)
    if (error.response.status >= 500) {
      alert('layanan sedang sibuk')
    }
    throw error
  }
}
