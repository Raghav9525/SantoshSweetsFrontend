
import React, { useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';
import { foods } from './Constant'
// import Navbar from './Navbar';


function Order() {

    const navigate = useNavigate()
    let {food_id } = useParams();
    // Convert id to an integer
    // console.log(food_id)
    food_id = parseInt(food_id);
    // user_id = parseInt(user_id);

    // Find the room data with the matching id
    const food = foods.find((food) => food.id === food_id);

    // set initial value to value state
    const [values, setValues] = useState({
        foodname: food.name,
        mobile: '',
        password: '',
        quantity: '',
        price: food.price
    });

    const [insertionStatus, setInsertionStatus] = useState(false)
    const [insertionStatusMsg, setInsertionStatusMsg] = useState('')



    const submitForm = (event) => {
        event.preventDefault();
        console.log("hey")
        // Send data to the database if there are no validation errors
        if (values.nam !== "") {
            axios.post(`https://santoshsweets.onrender.com/order/${food_id}`, values)
            .then((res) => {
                    if (res.status === 200) {
                        setInsertionStatus(true)
                        setInsertionStatusMsg("Please Click Process to Payment for Confirm Booking")
                    }
                }).catch((err) => {
                    console.log(err);
                    if (err.response) {
                        // Handle the error response here
                        setInsertionStatus(false)
                        setInsertionStatusMsg(err.response.data.error)

                    }
                });
        }
    }


    const handleInput = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    }

    // function payment_page(id) {
    //     console.log("Price: " + room.price);

    //     const timeDifference = new Date(values.checkout_date) - new Date(values.checkin_date); // Difference in milliseconds
    //     const daysDifference = timeDifference / (1000 * 60 * 60 * 24); // Convert milliseconds to days

    //     console.log(`Number of days: ${daysDifference}`);

    //     let bill = null

    //     // Check if room.price is a valid number before calculating the bill
    //     if (!isNaN(parseFloat(room.price))) {
    //         bill = parseFloat(room.price) * daysDifference;
    //         console.log("Bill: " + bill);
    //     } else {
    //         console.log("Invalid room price");
    //     }

    //     navigate(`/payment/${bill}`);
    // }


    return (
        <div id="roombook" className="container-fluid vh-80 pb-4">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <div className="card p-2 mt-4 mb-4 bg-white rounded">
                        <form onSubmit={submitForm}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputMobile" className="form-label">Mobile</label>
                                <input
                                    type="text"
                                    name="mobile"
                                    className="form-control"
                                    id="exampleInputMobile"
                                    onChange={handleInput}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                                <input
                                    type="text"
                                    name="password"
                                    className="form-control"
                                    id="exampleInputPassword"
                                    onChange={handleInput}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="quantity" className="form-label">Quantity</label>
                                <input
                                    type="text"
                                    name="quantity"
                                    className="form-control"
                                    id="quantity"
                                    onChange={handleInput}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary mb-2">Submit</button>
                        </form>
                        {insertionStatus && (
                            <button className="btn btn-primary" >Proceed to Payment</button>
                        )}
                        <p>{insertionStatusMsg}</p>
                    </div>
                </div>
            </div>
            <div className="col-2"></div>

        </div>
    );


}
export default Order