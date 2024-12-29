import { backendBaseUrl } from "@/constants/varibles";
import axios from "axios";

const options = {
  baseURL: backendBaseUrl,
  withCredentials: true,
};
const axiosInstance = axios.create(options);
export default axiosInstance;
