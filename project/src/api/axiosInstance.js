// src/api/axiosInstance.js

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000", // EC2 Django 서버 주소
  withCredentials: true, // 필요하면 쿠키 인증 등을 위해 사용
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;