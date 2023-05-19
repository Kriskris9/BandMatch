import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
        <h1 style={{ textAlign: "center", color: "red", fontSize: "2.2rem" }}>404 Error:</h1>
        <div style= {{textAlign: "center"}}>
            
            <p style={{ color: "black", fontSize: "1.33rem" }}>Page does not exist
            </p>
            <Link to="/" style={{ fontSize:"2rem", textDecoration: "none"}}>GO BACK</Link>
        </div>
        </>
    )
}

export default NotFound;