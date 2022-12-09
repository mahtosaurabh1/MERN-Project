import React, { useEffect, useState } from 'react'
import '../Styles/allplans.css';
import Tick from '../Images/check-mark.png'
import { Link, Outlet, useNavigate } from 'react-router-dom';

function AllPlans() {
    const [arr, arrset] = useState([]);
     let auth=localStorage.getItem('user');
     let navigate=useNavigate();
    auth?<Outlet/>:navigate('/login')
    useEffect(() => {
        getproducts();
      }, []);

    const getproducts = async () => {
        let result = await fetch("http://localhost:5000/allplans");
        result = await result.json();
        arrset(result);
      };
   
    useEffect(async () => {
       
    }, [])
    return (
        <div className='allplansCard'>
            <div className='h1Box'>
                <h1 className='h1'>START EATING HEALTHY TODAY</h1>
                <div className="line"></div>
            </div>
            <div className='allplanDetails'>
                <div className='planDetails'>
                    {arr && arr?.map((ele, key) =>
                        <div className='apCard' key={key}>
                            <h3 className='h3'>{ele.name}</h3>
                            <div className='pCard1'>
                                <div className='priceBox'>
                                    <div className='price'>Rs {ele.price}</div>
                                    <div className="duration">/month</div>
                                </div>
                                <p className="point">That’s only 2₹ per meal</p>
                            </div>

                            <div className='pCard2'>
                                <div className='ppoints'>
                                    <img src={Tick} alt='' className='img' />
                                    <p className='point'>{ele.duration} meal every day</p>
                                </div>
                                <div className='ppoints'>
                                    <img src={Tick} alt='' className='img' />
                                    <p className='point'>{ele.discount} discount available.</p>
                                </div>
                                <div className='ppoints'>
                                    <img src={Tick} alt='' className='img' />
                                    <p className='point'>{ele.ratingsAverage} rated meal.</p>
                                </div>
                            </div>

                            <button className='btn'> <Link to="/planDetail" >I'm Hungry</Link></button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}
export default AllPlans;
