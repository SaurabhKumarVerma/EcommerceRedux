// import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
// import Config from "react-native-config";
// import ECommerceAsyncStore from "../asyncStorage/userStorage";
// import reactotron from "reactotron-react-native";
// interface AuthResponse {
//   accessToken: string;
//   refreshToken: string;
// }

// class ApiService {
//   private axiosInstance: AxiosInstance;

//   constructor() {
//     this.axiosInstance = axios.create({
//       baseURL: Config.API_URL,
//     });

//     // Add request interceptor
//     this.axiosInstance.interceptors.request.use(
//       async (config: AxiosRequestConfig) => {
//         const accessToken = await this.getAccessToken();
//         if (accessToken) {
//           config.headers.Authorization = `Bearer ${accessToken}`;
//         }
//         return config;
//       },
//       (error) => {
//         return Promise.reject(error);
//       }
//     );

//     // Add response interceptor
//     this.axiosInstance.interceptors.response.use(
//       (response: AxiosResponse) => {
//         return response;
//       },
//       async (error) => {
//         const originalRequest = error.config;
//         if (error.response.status === 401 && !originalRequest._retry) {
//           originalRequest._retry = true;
//           await this.refreshTokenAndRetry(originalRequest);
//         } else if (error.response.status === 403) {
//           await this.logout();
//         }
//         return Promise.reject(error);
//       }
//     );
//   }

//   private async getAccessToken(): Promise<string | null> {
//     const token = ECommerceAsyncStore.getAccessToken()
//       .then((result) => {
//         return JSON.stringify(result);
//       })
//       .catch((e) => {
//         __DEV__ && reactotron.log!("GetTokenError in API", e);
//         return null;
//       });
//     // Implement logic to retrieve access token from AsyncStorage or any other storage
//     // Return null if token doesn't exist or is expired
//     // Placeholder, replace with actual implementation

//     return token;
//   }

//   private async refreshTokenAndRetry(
//     originalRequest: AxiosRequestConfig
//   ): Promise<void> {
//     try {
//       const refreshToken = await this.getRefreshToken();
//       if (refreshToken) {
//         const response = await axios.post<AuthResponse>(
//           "https://api.escuelajs.co/api/v1/auth/refresh-token",
//           { refreshToken }
//         );
//         if (response.data.accessToken) {
//           // Store the new access token
//           // Example implementation using AsyncStorage:
//           ECommerceAsyncStore.saveUserToken(response.data.accessToken);
//           originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
//           return this.axiosInstance(originalRequest);
//         }
//       }
//     } catch (error) {
//       // Handle refresh token failure
//       console.error("Failed to refresh token:", error);
//       await this.logout();
//     }
//   }

//   private async getRefreshToken(): Promise<string | null> {
//     // Implement logic to retrieve refresh token from AsyncStorage or any other storage
//     let refreshToken = ECommerceAsyncStore.getUserRefreshToken()
//       .then((result) => {
//         return JSON.stringify(result);
//       })
//       .catch(() => {
//         return null;
//       });
//     return refreshToken;
//   }

//   private async logout(): Promise<void> {
//     // Implement logout functionality, such as clearing AsyncStorage or resetting app state
//     // Example implementation using AsyncStorage:
//     // await AsyncStorage.removeItem('accessToken');
//     // await AsyncStorage.removeItem('refreshToken');
//     // Reset app state or navigate to logout screen
//     ECommerceAsyncStore.removeUserToken();
//   }

// public async get<T = any>(
//   url: string,
//   config?: AxiosRequestConfig
// ): Promise<AxiosResponse<T>> {
//   return this.axiosInstance.get<T>(url, config);
// }

//   public async post<T = any>(
//     url: string,
//     data?: any,
//     config?: AxiosRequestConfig
//   ): Promise<AxiosResponse<T>> {
//     return this.axiosInstance.post<T>(url, data, config);
//   }
//   public async delete<T = any>(
//     url: string,
//     config?: AxiosRequestConfig
//   ): Promise<AxiosResponse<T>> {
//     return this.axiosInstance.delete<T>(url, config);
//   }

//   public async put<T = any>(
//     url: string,
//     data?: any,
//     config?: AxiosRequestConfig
//   ): Promise<AxiosResponse<T>> {
//     return this.axiosInstance.put<T>(url, data, config);
//   }
// }

// // Create a singleton instance of the ApiService
// const apiService = new ApiService();

// export default apiService;

import axios, { AxiosInstance } from "axios";
import Config from "react-native-config";

interface IApiService {
  // api: AxiosInstance;
  get<T>(url: string): Promise<T>;
  post<T>(url: string, data: any): Promise<T>;
  put<T>(url: string, data: any): Promise<T>;
  delete<T>(url: string): Promise<T>;
}

class ApiService implements IApiService {
  private api: AxiosInstance;

  constructor() {
    this.createApiInstance();
  }

  private async createApiInstance() {
    this.api = axios.create({
      baseURL: Config.API_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public get<T>(url: string): Promise<T> {
    return this.api.get(url).then((response) => response.data as T);
  }

  public post<T>(url: string, data: any): Promise<T> {
    return this.api.post(url, data).then((response) => response.data as T);
  }

  public put<T>(url: string, data: any): Promise<T> {
    return this.api.put(url, data).then((response) => response.data as T);
  }

  public delete<T>(url: string): Promise<T> {
    return this.api.delete(url).then((response) => response.data as T);
  }
}
const apiService = new ApiService();
export default apiService;
