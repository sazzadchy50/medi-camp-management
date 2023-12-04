import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://medi-camp-management-server.vercel.app/api/v1",
  // baseURL: "http://localhost:5000/api/v1",
});

const usePublicApi = () => {
  return axiosPublic;
};

export default usePublicApi;
