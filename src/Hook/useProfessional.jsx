import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useSecureApi from "./useSecureApi";
const useProfessional = () => {
  const { user, loading } = useAuth();
  // console.log('user', user);
  const secureApi = useSecureApi();

  const { data: isHealthProfessional, isPending: isHealthProfessionalLoading } = useQuery({
    queryKey: [user?.email, "isHealthProfessional"],
    enabled: !loading,
    queryFn: async () => {
      const res = await secureApi.get(`/dashboard/healthProfessional/${user?.email}`);
      console.log("healthProfessional", res.data);
      return res.data;
    },
  });
  return [isHealthProfessional, isHealthProfessionalLoading];
};

export default useProfessional;
