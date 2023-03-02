import api from '../config/axios'

export const runBot = async (): Promise<any> => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
  }
  try {
    const response = await api.put('recipes/5345359/start',{},
        {headers: headers}
    )
    if (response.data.success === false) throw response.data
    return response.data
  } catch (e: any) {
    throw e;
  }
}