import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
    <h1 style={{ textAlign:"center", color:"red"}}>404 Error: Page does not exist</h1>
        <div>
        <Link to="/feed" style={{ textAlign:"center", textDecoration: "none" }}>Return to Feed</Link>
        </div>
    </div>
  )
}

export default NotFound;