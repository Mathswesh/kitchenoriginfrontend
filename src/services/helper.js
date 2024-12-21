import axios from "axios";

export const BASE_URL = 'http://localhost:3001';

export const myaxios = axios.create({
    baseURL: BASE_URL,
})