import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const { title, price, __id } = useLoaderData();
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.yourPhone.value;
        const message = form.message.value;

        const order = {
            service: __id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        fetch('https://y-three-ebon.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order Place Successfully')
                    form.reset()
                }
            })
            .catch(err => console.error(err))
    }
    return (
        <div className=''>
            <div className='mb-28'>
                <h2 className='text-2xl font-bold text-center mb-1'>{title}</h2>
                <p className='text-xl mb-6 font-semibold text-orange-500'>Price: {price}</p>
                <form onSubmit={handleSubmit}>
                    <div className='w-9/12 mx-auto bg-slate-200 rounded'>
                        <div className='p-3'>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-10 bg-slate-200'>
                                <input name='firstName' type="text" placeholder="First Name" className="input w-full input-bordered" />
                                <input name='lastName' type="text" placeholder="Last Name" className="input w-full input-bordered" />
                                <input name='yourPhone' type="text" placeholder="Your Phone" className="input w-full input-bordered" required />
                                <input name='yourEmail' type="text" placeholder="Your Email" className="input w-full input-bordered" defaultValue={user?.email} readOnly />
                            </div>
                        </div>
                        <div className='p-3'>
                            <textarea name='message' placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full pb-32" ></textarea>
                        </div>
                    </div>
                    <div className='w-9/12 mx-auto'>
                        <button type='submit' className="btn btn-block mt-3 bg-orange-600 border-none">Order Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;