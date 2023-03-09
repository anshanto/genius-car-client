import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://y-three-ebon.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json()
            })
            .then(data => setOrders(data))
    }, [user?.email, logOut])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you want to delete');
        if (proceed) {
            fetch(`https://y-three-ebon.vercel.app/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Delete Successfully')
                        const remaining = orders.filter(odr => odr._id !== id);
                        setOrders(remaining)
                    }
                })
        }
    }

    const handleStatus = id => {
        fetch(`https://y-three-ebon.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(odr => odr._id !== id);
                    const approving = orders.find(odr => odr._id === id);
                    approving.status = 'Approved';
                    const newOrders = [approving, ...remaining]
                    setOrders(newOrders)
                }

            })
    }

    return (
        <div>
            <h2 className='text-3xl font-bold text-black mb-6'>You have placed {orders.length} orders</h2>
            <div>
                <div className="overflow-x-auto w-9/12 mx-auto">
                    <table className="table w-full mb-14">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Service</th>
                                <th>Message</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                orders.map(order =>
                                    <OrderRow
                                        key={order.id}
                                        order={order}
                                        handleDelete={handleDelete}
                                        handleStatus={handleStatus}
                                    ></OrderRow>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orders;