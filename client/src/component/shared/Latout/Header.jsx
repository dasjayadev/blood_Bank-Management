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
                <Link className="navbar-brand " to="/">
                    <img style={{borderRadius:"40px"}} src="https://static.vecteezy.com/system/resources/previews/014/275/419/original/hand-holding-a-drop-of-blood-world-blood-donor-day-blood-donors-blood-donation-illustration-donor-logo-blood-donation-icon-blood-drop-logo-free-vector.jpg" alt="Blood Bank Logo" width="50" height="50" className="d-inline-block align-top" />
                    Blood Bank
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active mx-3" aria-current="page">{user?.name || user?.hospitalName || user?.originazationName}</NavLink>
                            <h6><span class="badge bg-secondary">{user?.role}</span></h6>
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
