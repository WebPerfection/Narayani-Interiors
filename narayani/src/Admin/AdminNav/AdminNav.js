import React from 'react';
import './AdminNav.css';
import { Link } from 'react-router-dom';
function AdminNav() {
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
                    <li><Link to="/admin/Home">Add Item</Link></li>
                    <li><Link to="/Admin/GetAllData">All items</Link></li>
                    <li><Link to="/Admin/AddCarousel">Add Carousel</Link></li>
                    <li><Link to="/Admin/Users">Users</Link></li>
                    <li><Link to="">Testimonial</Link></li>
                    <li><Link to="">Contact</Link></li>
                </ul>
                <h3 className="logo">Narayni-Interior</h3>
            </div>
        </nav>
        </>
    );
}

export default AdminNav;
