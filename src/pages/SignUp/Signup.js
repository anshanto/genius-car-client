import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGofore, FaLinkedin } from "react-icons/fa";
import login from '../../assets/images/login/login.svg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

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
                                <p className='text-base mb-4'>or, Sign Up with</p>
                                <button className="btn btn-circle btn-outline mr-2">
                                    <FaFacebook></FaFacebook>
                                </button>
                                <button className="btn btn-circle btn-outline mr-2">
                                    <FaLinkedin></FaLinkedin>
                                </button>
                                <button className="btn btn-circle btn-outline">
                                    <FaGofore></FaGofore>
                                </button>
                                <p className='text-base m-8'>Have an account? <span className='text-orange-500 font-bold'><Link to={'/login'}>Login</Link></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;