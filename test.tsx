import axios, { AxiosInstance } from 'axios';
import { backendUrl } from './auth';
/**
 * @description Venly Wallet API configuration
 * @exports walletApi
 * @protected requires an access_token to use, the getAccessTokenMiddleware receives this token
 */

// Create Axios instance
const userApi: AxiosInstance = axios.create({
  baseURL: backendUrl,
});

// Function to append route to the base URL
const appendRoute = (route: string): string => {
  // Remove leading slash from the route if present
  const sanitizedRoute = route.replace(/^\//, '');
  return `${backendUrl}/${sanitizedRoute}`;
};

// Interceptor to append route to the URL before each request
userApi.interceptors.request.use((config: any) => {
  config.url = appendRoute(config.url);
  return config;
});

export default userApi;
