import React from "react";
import './header.styles.scss';

import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg';



const Header=()=>(

<div className='header'>
    <Link className='logocontainer' to="/shop">
        <Logo className='logo'>
        </Logo>
        </Link>


        <div className="options">
                <Link className="option" to="/shop">shop</Link>
                <Link className="option" to="/shop">contacts</Link>
                
            </div>


    


</div>




)


export default Header;