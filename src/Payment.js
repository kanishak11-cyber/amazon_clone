import React from 'react';
import { useStateValue } from './StateProvider';
import "./Payment.css";
import CheckoutProduct from "./CheckoutProduct";
import {Link} from 'react-router-dom';
function Payment() {
    const [{ basket, user }, dispatch] = useStateValue()
    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Deleviery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.name}</p>
                        <p>{user?.email}</p>
                        <p>{user?.address}</p>
                        <p>{user?.city}</p>
                        <p>{user?.postalCode}</p>
                        <p>{user?.country}</p>
                    </div>
                </div>

                {/* payment section deleviery address */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review Order</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* payment section deleviery address */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        {/* strip */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Payment; 
