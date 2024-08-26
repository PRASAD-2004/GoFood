import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("authtoken");
        navigate('/');
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
                            {localStorage.getItem("authtoken") && (
                                <Link className="nav-link active fs-5" aria-current="page" to="/myorders">My Orders</Link>
                            )}
                        </div>
                    </div>
                    {!localStorage.getItem("authtoken") ? (
                        <div className='d-flex'>
                            <Link className="btn bg-white text-success mx-2" to="/login">Login</Link>
                            <Link className="btn bg-white text-success mx-1" to="/signup">Sign up</Link>
                        </div>
                    ) : (
                        <div className='d-flex'>
                            <button className='btn bg-white text-success mx-1'>My Cart</button>
                            <button className="btn bg-white text-danger mx-1" onClick={handleLogout}>Logout</button>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
}
