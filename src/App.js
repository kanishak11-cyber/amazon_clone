import React,{useEffect} from 'react';
import './App.css'
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Signin from './Signin';
import { auth } from './firebase';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider';


function App() {
    const [{},dispatch] = useStateValue();
    useEffect(() => {
        // will only once when the app component loads       
        auth.onAuthStateChanged(authUser => {
            if(authUser){
                // console.log('user signed in')
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            }else{
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
                <Route path="/Signin">
                    <Signin/>
                </Route>
                    <Route path="/Checkout">
                        <Header />
                        <Checkout />
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