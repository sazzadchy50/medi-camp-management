import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useSecureApi from "./useSecureApi";

const useProfessional = () => {
  const { user, loading } = useAuth();
  // console.log('user', user);
  const secureApi = useSecureApi();

  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled:!!user?.email && !loading,
    queryFn: async () => {
      const res = await secureApi.get(`/users/${user?.email}`);
      console.log("useAdmin", res.data);
      return res.data?.admin;
    },

  });
  return [isAdmin, isAdminLoading];
};

export default useProfessional;
