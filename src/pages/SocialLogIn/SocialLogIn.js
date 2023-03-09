import React, { useContext } from 'react';
import { FaFacebook, FaGofore, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { setAuthToken } from '../../utilities/api/SetAuthToken';


const SocialLogIn = () => {
    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                // jwt token
                setAuthToken(user)
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <p className='text-base mb-4'>or, Login with</p>
            <button className="btn btn-circle btn-outline mr-2">
                <FaFacebook></FaFacebook>
            </button>
            <button className="btn btn-circle btn-outline mr-2">
                <FaLinkedin></FaLinkedin>
            </button>
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                <FaGofore></FaGofore>
            </button>
            <p className='text-base m-8'>new to this website? <span className='text-orange-500 font-bold'><Link to={'/signup'}>Sign Up</Link></span></p>
        </div>
    );
};

export default SocialLogIn;