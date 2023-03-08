import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Headder.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const menuItems =
        <>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/services'}>Services</Link></li>
            <li><Link to={'/blog'}>Blog</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            <li><Link to={'/orders'}>Orders</Link></li>
        </>

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => console.log(error))
    }
    return (
        <div className="navbar bg-base-100 w-10/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to={'/'} className="m-6">
                    <img className='w-3/4' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <>
                {
                    user?.email ?
                        <>
                            <div className='navbar-end'>
                                <button className="appoint-btn mr-7">Appointment</button>
                            </div>
                        </>
                        :
                        <>
                        </>
                }
            </>
            <>
                {
                    user?.uid ?
                        <>
                            <div className="flex-none gap-2">
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className=''>
                                            <div className="w-10 rounded-full">
                                                <p className='ml-2 text-xl font-bold text-black'>{user?.email}</p>
                                            </div>
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <button className="justify-between">
                                                <Link to={'/profile'}>Profile</Link>
                                                <span className="badge">New</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button onClick={handleLogOut}>
                                                <Link to={'/'}>Logout</Link>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className="navbar-end">
                                <button className="appoint-btn mr-7">Appointment</button>
                                <Link to={'/login'}>
                                    <button className='btn btn-primary bg-orange-500 border-none'>Login</button>
                                </Link>
                            </div>
                        </>
                }
            </>
        </div>
    );
};

export default Header;