import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from './Footer';
import Crad from '../Components/Crad';
import Carousel from '../Components/Carousel';

export default function Home() {

    const [search,setsearch] = useState('')
    const [foodcat, setFoodCat] = useState([]);
    const [fooditem, setFoodItem] = useState([]);

    const loaddata = async () => {
        try {
            let response = await fetch('http://localhost:5000/api/fooddata', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            response = await response.json();
            console.log(response);

            setFoodCat(response.foodcollections);
            setFoodItem(response.fooditems);
        } catch (error) {
            console.error("Error fetching food data:", error);
        }
    };

    useEffect(() => {
        loaddata();
    }, []);

    return (
        <>
            <div><Navbar /></div>
            <div><Carousel /></div>
            <div className='container'>
                {
                    foodcat.length > 0
                        ? foodcat.map((data, index) => (
                            <div key={index} className='row mb-3'>
                                <h3>{data.CategoryName}</h3>
                                <hr />
                                {
                                    fooditem.length > 0
                                        ? fooditem
                                            .filter((item) => item.CategoryName === data.CategoryName)
                                            .map((filteredItem, idx) => (
                                                <div key={idx} className='col-12 col-md-6 col-lg-3 m-3'>
                                                    <Crad item={filteredItem} />
                                                </div>
                                            ))
                                        : <div>No items found</div>
                                }
                            </div>
                        ))
                        : <div>Loading...</div>
                }
            </div>
            <div><Footer /></div>
        </>
    );
}
