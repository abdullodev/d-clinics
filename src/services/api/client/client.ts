import axios from "axios";

import { getTokenStorage } from "services/storage/custom";
// import { IApiResponse } from "../types/Api.type";

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/back-api/admin/`,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
    Authorization: getTokenStorage()
      ? `Bearer ${getTokenStorage()}`
      : undefined,
    Cookies: `Authorization=Bearer ${getTokenStorage()}`,
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (window.location.origin.includes("localhost")) {
      config.headers.username = "dev";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  // (response: IApiResponse) => {
  (response) => {
    console.log("Response: ", response);
    return response?.data?.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
