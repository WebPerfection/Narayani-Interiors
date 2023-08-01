import React from 'react';
import './AdminNav.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
function AdminNav() {
    const navigate=useNavigate()
    const logOut=()=>{
    localStorage.removeItem("adminAuthenticate")
    return navigate("/")
    }
    return (
        <><nav className="navbar">
            <div className="navbar-container container">
                <input type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <ul className="menu-items">
                    <li><Link to="/admin">Add Item</Link></li>
                    <li><Link to="/admin/GetAllData">items</Link></li>
                    <li><Link to="/admin/Users">Users</Link></li>
                    <li><Link to="/admin/AddTestimonial">Testimonial</Link></li>
                    {/* <li><Link to="/admin/Achievement">Achievement</Link></li> */}
                </ul>
                <Button onClick={logOut} >Log Out</Button>
            </div>
        </nav>
        </>
    );
}

export default AdminNav;
