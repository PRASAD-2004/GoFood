import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';  // Ensure you import your custom CSS file

export default function Carousel() {
    return (
        <div className="custom-carousel">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className='carousel-caption'>
                        <form className='d-flex'>
                            <input className='form-control me-2 search-bar-black-border' type='search' placeholder='search' aria-label='search'/>
                         
                         
                         
                         
                            <button className='btn btn-success' type='submit'>Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://source.unsplash.com/random/1000x400/?pizza" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://source.unsplash.com/random/1000x400/?burger" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://source.unsplash.com/random/1000x400/?coke" alt="Third slide" />
                    </div>
                </div>
            </div>
        </div>
    );
}
