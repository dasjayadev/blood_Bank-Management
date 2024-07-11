import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';


function Header() {

    const { user } = useSelector(state => state.auth);
    const navigate = useNavigate();

    // This is for logout
    function logoutHandler() {
        localStorage.clear('blood-token')
        navigate('/login')

    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="logo.png" alt="Blood Bank Logo" width="50" height="50" className="d-inline-block align-top" />
                    Blood Bank
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <span className="nav-link">{user?.name || user?.hospitalName || user?.organizationName}</span>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-light ms-2" onClick={logoutHandler}>Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
