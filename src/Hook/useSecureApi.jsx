import axios from "axios";

const axiosSecure = axios.create({
  // baseURL: "https://medi-camp-management-server.vercel.app/api/v1",
   baseURL: "http://localhost:5000/api/v1",
});

const useSecureApi = () => {
  return axiosSecure;
};

export default useSecureApi;
