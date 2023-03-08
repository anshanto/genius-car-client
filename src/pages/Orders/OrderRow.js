import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const OrderRow = ({ order, handleDelete, handleStatus }) => {
    const { serviceName, price, message, service, _id, status } = order;
    const [orderService, setOrderService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => {
                setOrderService(data)
            })
    }, [service])
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-circle bg-orange-500 border-none'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                orderService?.img &&
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                    </div>
                </div>
            </td>
            <td>
                {message}
            </td>
            <td>${price}</td>
            <th>
                <button onClick={() => handleStatus(_id)} className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
            </th>
        </tr>
    );
};

export default OrderRow;