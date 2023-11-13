
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./Navbar";
import { foods } from './Constant'
import { useNavigate } from 'react-router-dom';
import './style.css';
import { FaIndianRupeeSign } from 'react-icons/fa6';

function Foods() {
    const navigate = useNavigate();

    function order(id) {
        navigate(`/order/${id}`);
    }

    // function viewDetails(id){
    //     navigate(`/roomdetails/${id}`);
    // }

    return (
        <>
            <div class="pages-section pt-3">
                <div class="container mt-3 room" style={{ backgroundColor: "#333333" }}>
                    <div className="row">
                        {foods.map((food) => (
                            <div className="col-sm-4" key={food.id}>
                                <div className="card mb-5">
                                    <div>
                                        <img className="d-block w-100 img-fluid mx-auto" src={food.imageSrc} alt="food-img" style={{ height: "210px" }} />
                                    </div>
                                    <div className="card-body">
                                        <h4>{food.name}</h4>
                                        <h2 className="text-primary">
                                            <FaIndianRupeeSign className="text-primary" />{food.price}
                                        </h2>

     
                                        <button className="btn btn-primary me-2" onClick={() => booking(food.id)}>Book Now</button>
                                        {/* <button class="btn btn-primary" >View Details</button> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Foods