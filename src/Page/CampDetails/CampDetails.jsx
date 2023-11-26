import { useEffect } from "react";
import useCampData from "../../Hook/useCampData";
import useSecureApi from "../../Hook/useSecureApi";
import { useQuery } from "@tanstack/react-query";


const CampDetails = () => {
    const [camp] = useCampData()
    const SecureApi = useSecureApi()
    
   const {} = useQuery({
    queryKey:['campDetail'],
    queryFn: async()=>{
        const res = await SecureApi.get('')
    }
   })
    return (
        <div>
           {
            
            camp.name
           }
        </div>
    );
};

export default CampDetails;