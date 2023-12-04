import useSecureApi from "./useSecureApi";
// import useAuth from "./useAuth"
import { useQuery } from "@tanstack/react-query";
const useCampData = () => {
  const SecureApi = useSecureApi();
//   const { user } = useAuth();

const {data: camp=[] , refetch, isPending: isLoading} = useQuery({
    queryKey: ['camp'],
    queryFn: async()=>{
        const res = await SecureApi.get(`/camp`)
        return res.data
     
    }
})
 console.log(camp);
  return [camp, refetch, isLoading]
};

export default useCampData;
