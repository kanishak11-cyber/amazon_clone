/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import './App.css'
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Signin from './Signin';
import { auth } from './firebase';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import Payment from './Payment'
import Orders from './Orders'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// const stripePromise = loadStripe(pk_test_51K3AciSBQNjrVgCiNY906Aco7Du9nDPXXSEWSx7PjGzaCmFeKAd15HgizBv2DAuLiVb9VXH00nxoBKWRbf8KYSS4004gfn0UZc);
const stripePromise = loadStripe('pk_test_51K3AciSBQNjrVgCiNY906Aco7Du9nDPXXSEWSx7PjGzaCmFeKAd15HgizBv2DAuLiVb9VXH00nxoBKWRbf8KYSS4004gfn0UZc');
function App() {
    const [{ }, dispatch] = useStateValue();
    useEffect(() => {
        // will only once when the app component loads       
        auth.onAuthStateChanged(authUser => {
            if (authUser) {
                // console.log('user signed in')
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            } else {
                // console.log('user signed out')
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        })
    }, [])

    return (
        //BEM
        <Router>
            <div className="App">

                <Switch>
                    <Route path="/orders">
                        <Header />
                        <Orders />
                    </Route>
                    <Route path="/Signin">
                        <Signin />
                    </Route>
                    <Route path="/Checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path="/Payment">
                        <Header />
                        <Elements stripe={stripePromise}>
                            <Payment />
                        </Elements>
                    </Route>
                    <Route path='/'>
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;