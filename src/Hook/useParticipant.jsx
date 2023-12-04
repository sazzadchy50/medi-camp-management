import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useSecureApi from "./useSecureApi";
const useParticipant = () => {
  const { user, loading } = useAuth();
  // console.log('user', user);
  const secureApi = useSecureApi();

  const { data: isParticipant, isPending: isParticipantLoading } = useQuery({
    queryKey: [user?.email, "isParticipant"],
    enabled: !loading,
    queryFn: async () => {
      const res = await secureApi.get(`/dashboard/participant/${user?.email}`);
      console.log("participant", res.data);
      return res.data;
    },
  });
  return [isParticipant, isParticipantLoading];
};

export default useParticipant;
