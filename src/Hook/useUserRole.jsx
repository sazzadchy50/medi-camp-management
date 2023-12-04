// import React from 'react';
// import useAuth from './useAuth';
// import useSecureApi from './useSecureApi';
// import { useQuery } from '@tanstack/react-query';
// const useUserRole = () => {
//    const {user, loading} = useAuth();
   
//    const secureApi = useSecureApi()

//     const {data: userRole }= useQuery({
//         queryKey:[user?.email, "userRole"],
//         enabled: !loading,
//         queryFn: async()=>{
//             const res = await secureApi.get(`dashboard/users/${user?.email}`);
//             console.log('userRole', res.data);
//             return res.data;
//         },        
//         enabled:!!user?.email
//     })
//     return [userRole]
// };

// export default useUserRole;