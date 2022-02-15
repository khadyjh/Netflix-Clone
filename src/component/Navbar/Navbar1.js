
import './Navbar.css'
import React from 'react';
import {Navbar,Container,Nav} from "react-bootstrap"
import { Link } from 'react-router-dom';

function Navbar1() {
    return (
        <>
        <div>
           
                 
                        {/* <Link className='link' to="/">Home</Link> */}
                        <Link className='link' to="/fav">Favorite</Link>
                    
             
        </div>
        </>
    )
}

export default Navbar1;