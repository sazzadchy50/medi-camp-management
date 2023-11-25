import axios from "axios";



const axiosSecure = axios.create({
    baseURL: "http://localhost:5000/api/v1"
})

const useSecureApi = () => {

    return axiosSecure;    
};

export default useSecureApi;