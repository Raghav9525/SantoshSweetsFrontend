

import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from './Signup'
import Home  from './Home';
import Order from './Order';
import Foods from './Foods';
// import Login from './Login';


// import { useSelector, useDispatch } from 'react-redux';

function Dashboard() {
    // const authentication = useSelector((state) => state.authentication);

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/foods" element={<Foods />} />
                {/* <Route path="/login" element={<Login />} /> */}

                <Route path="/order/:food_id" element={<Order />} />
                <Route path="/signup/:id" element={<Signup />} />
                
            </Routes>
        </div>
    );
}

export default Dashboard;
