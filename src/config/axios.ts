import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const api = axios.create({
  baseURL: 'https://www.workato.com/api/',
})

api.defaults.headers['Content-Type'] = 'application/json';

const requestInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
  if(config.headers){
    config.headers.Authorization = `Bearer wrkaus-eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI4ZDRmZjcwNC02YjE2LTQ3YTktODI1Ny05ZTJmMmI5MzJiYmEiLCJqdGkiOiIyZDI5ZjgyYi1iNTVjLTRmZjUtYTQyOS0xMjA1YWEzZWMwNWMiLCJleHAiOjE3MDg2ODc4ODV9.FMNkEL9cIjDY4Zc_FZ2ejOt11zvwowxHgRLwKpbTB05QonGfjk78XvjBfwWzkwQHQ7NCa0JBTrmq2-MsI9IKt9PXTk0FCgAG-uHHsaPraJNZ-5EjujcxgAmU8OhmBrVM-JfrLUBpfAx_Ea0gRvlCFn_nET23EHskpqAK7HwKxJqKm4XV-ZtG-1LJCXlx19_WayB05WrKDHAiXk46UbR8vvnFEq_B_59wOtwAVGh1CBQF39jwifp5W0Bt3duNQdSsaSYh1ijE_-SoHTdrYt6X22RPrCPSWMRyXxnt6T1Z64jFMs1_errwPb4jD0Bvk61jO3KsL5eFazEN9yuIgJ9QodZR854MG-BcDzoxlp3Ci9gaFoDpk0puf7-7MELbmAATxazdyKcpD7VZdXuAcx-zrsgf1K2dChgavdi9FstsHRKviifpg1AxSh9ONQhd7rRLffFQ10koi8dtqVdCZAPEdw10mHomej2tPNuyiVTyE_mhk90SoGu4Ujw6o3GGLYlUDM6milMlup5Qnpk5ybBdNuENwYMgDfSNIMtPYTvHr3AJG1subroBwDASCkFBg0lDbyg8GaclDcfJ8oiypv5p0VArHyPf4857k2g6gBQ-Y2FwteSqUZmnpscME-X4MVFxhuvoJDTr3e3p_-6dcWst-LH5vpLUZCUbvV-ydHqjsl4`
  }
    return config
}

const responseInterceptor = (response: AxiosResponse) => {
  return response
}

const responseErrorInterceptor = (error: AxiosError) => {
return error;
}
// @ts-ignore

api.interceptors.request.use(requestInterceptor)
api.interceptors.response.use(responseInterceptor, responseErrorInterceptor)

export default api