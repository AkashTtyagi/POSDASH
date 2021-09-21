import React from 'react';
import NavBar from '../NavBar/NavBar';
import Products from '../Products/Products';
import "./RightParent.css";

function RightParent() {
    return (
        <div className="rightParent">
            <NavBar />
            <Products />
        </div>
    )
}

export default RightParent
