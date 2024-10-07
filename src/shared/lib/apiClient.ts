/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosResponse } from 'axios';

const api = axios.create({
    baseURL: process.env.BASE_URL,
    headers: { 'Content-Type': 'application/json' },
});

export type AxiosApiError = AxiosError;
export type AxiosApiResponse<T = any, D = any> = AxiosResponse<T, D>;

export default api;
