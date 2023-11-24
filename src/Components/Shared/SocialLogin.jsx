
import useAuth from '../../Hook/useAuth';
import { FaGoogle } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';
import usePublicApi from '../../Hook/usePublicApi';

const SocialLogin = () => {
    const {googleSignIn} = useAuth()
    const axiosPublic = usePublicApi();
    const navigate = useNavigate()
    const handleGoogle =()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);

            const userInfo= {
                name: result.user?.displayName,
                email: result.user.email,
                image: result.user?.photoURL,
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/')
            })
        })
    }
    return (
        <div>
            <div className='divider' />
            <div className='flex justify-center mb-5'>
                <button className='btn'
                    onClick={handleGoogle}
                >
                    <FaGoogle className=''/>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;