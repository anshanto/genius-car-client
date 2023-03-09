import React, { useContext } from 'react';
import login from '../../assets/images/login/login.svg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { setAuthToken } from '../../utilities/api/SetAuthToken';
import SocialLogIn from '../SocialLogIn/SocialLogIn';

const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                // jwt token
                setAuthToken(user)
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <div className='m-8'>
                <div className="hero min-h-screen">
                    <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                        <div className="text-center lg:text-left">
                            <img className='w-11/12' src={login} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm border border-slate-300">
                            <h1 className="text-5xl font-bold">Sign Up</h1>
                            <form onSubmit={handleSignUp} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className="btn btn-primary bg-orange-500 border-none" value='signup' />
                                </div>
                            </form>
                            <div>
                                <SocialLogIn></SocialLogIn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;