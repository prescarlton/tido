import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { DefaultResponse } from 'shared/types/api'

let isRefreshing = false
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const refreshSubscribers: any[] = []

function subscribeTokenRefresh(callback: () => void) {
  refreshSubscribers.push(callback)
}

function onRefreshed() {
  refreshSubscribers.map((callback: () => void) => callback())
}

const ApiBaseUrl = `${import.meta.env.VITE_API_ENDPOINT}`

const instance = axios.create({
  baseURL: ApiBaseUrl,
  withCredentials: true,
})

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error)
    if (!error.config.url?.includes('/refresh')) {
      return handleError(error)
    }
    // Logout user and redirect
    localStorage.removeItem('auth')
    window.location.href = `/login`
    return error
  }
)

function refreshAccessToken() {
  return instance.request({
    baseURL: `${import.meta.env.VITE_API_ENDPOINT}`, // need to make a clean request without previous baseURL configuration
    url: '/auth/refresh',
  })
}

// Handle global app errors
// We can handle generic app errors depending on the status code
function handleError(error: AxiosError) {
  const { config, response } = error
  const originalConfig = config
  // fix for newer axios versions

  switch (response?.status) {
    case 500: {
      // Handle InternalServerError
      break
    }
    case 403: {
      // Handle Forbidden
      break
    }
    case 401: {
      // Handle Unauthorized
      if (!isRefreshing) {
        isRefreshing = true
        refreshAccessToken().then(() => {
          isRefreshing = false
          onRefreshed()
        })
      }
      if (originalConfig) {
        const retryOrigReq = new Promise((resolve) => {
          subscribeTokenRefresh(() => {
            resolve(axios(originalConfig))
          })
        })
        return retryOrigReq
      }
      break
    }

    case 429: {
      // Handle TooManyRequests
      break
    }
  }

  return Promise.reject(error)
}

interface ApiServiceProps {
  baseURL?: string
  interceptResponse?: () => AxiosResponse
  interceptRequest?: () => AxiosRequestConfig
}

export function CreateApiService({
  baseURL = '',
  interceptResponse,
  interceptRequest,
}: ApiServiceProps) {
  if (interceptRequest) {
    instance.interceptors.request.use(interceptRequest)
  }
  if (interceptResponse) {
    instance.interceptors.response.use(interceptResponse)
  }

  const buildURL = (url: string) => `${baseURL}${url}`
  return {
    get: <T = DefaultResponse, R = AxiosResponse<T>>(
      url: string,
      config?: AxiosRequestConfig
    ): Promise<R> => instance.get(buildURL(url), config),
    post: <T = DefaultResponse, R = AxiosResponse<T>, D = object>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig
    ): Promise<R> => instance.post(buildURL(url), data, config),
    put: <T = DefaultResponse, R = AxiosResponse<T>, D = object>(
      url: string,
      data: D,
      config?: AxiosRequestConfig
    ): Promise<R> => instance.put(buildURL(url), data, config),
    delete: <T = DefaultResponse, R = AxiosResponse<T>>(
      url: string,
      config?: AxiosRequestConfig
    ): Promise<R> => instance.delete(buildURL(url), config),
    request: <T = DefaultResponse, R = AxiosResponse<T>>(
      config: AxiosRequestConfig
    ): Promise<R> => instance.request(config),
  }
}

const ApiService = instance

export default ApiService
