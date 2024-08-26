import React, { useState } from 'react';

export default function Crad({ item }) {
    const [quantity, setQuantity] = useState(1);
    const [selectedOption, setSelectedOption] = useState(Object.keys(item.options[0])[0]);

    const handleQuantityChange = (e) => {
        setQuantity(Number(e.target.value));
    };

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const totalPrice = item.options[0][selectedOption] * quantity;

    return (
        <div className='m-1'>
            <div className="card m-2" style={{ width: "18rem", maxHeight: "500px", backgroundColor: "beige" }}>
                <img className="card-img-top" src={item.img} alt={item.name} style={{ width: "18rem", height: "200px" }} />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success' value={quantity} onChange={handleQuantityChange}>
                            {Array.from(Array(6), (e, i) => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                        <select className='m-2 h-100 bg-success rounded' value={selectedOption} onChange={handleOptionChange}>
                            {Object.entries(item.options[0]).map(([key, value], index) => (
                                <option key={index} value={key}>{key.charAt(0).toUpperCase() + key.slice(1)} - ₹{value}</option>
                            ))}
                        </select>
                        <p>Total price: ₹{totalPrice}</p>
                    </div>
                    <hr />
                    <div className='d-inline btn m-1 h-100 bg-success text-white'>Add to cart</div>
                </div>
            </div>
        </div>
    );
}
