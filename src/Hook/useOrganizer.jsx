import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

import useSecureApi from "./useSecureApi";

const useOrganizer = () => {
  const { user,loading } = useAuth();
  // console.log('user', user);
  const secureApi = useSecureApi()
  
  const { data: isOrganizer, isPending: isOrganizerLoading } = useQuery({
    queryKey: [user?.email, "isOrganizer"],
    enabled: !loading ,
    queryFn: async () => {
      const res = await secureApi.get(`/dashboard/organizer/${user?.email}`);
      console.log('organizer', res.data);
      return res.data;
    },
    
  });
  return [isOrganizer, isOrganizerLoading];
};

export default useOrganizer;
