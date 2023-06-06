import React from "react";
import "./globalNav.css";
import { GlobalNavLink } from "../globalNavLink/globalNavLink";
import { Link } from "react-router-dom";

export const GlobalNav = () => {
    return (<nav className="global-nav">
        <Link to='/' className='title-size'>Koby S. Outama</Link>
        <ul>
            <GlobalNavLink to='/'>Home</GlobalNavLink>
            <GlobalNavLink to='/about'>About Me</GlobalNavLink>
            <li>
                <Link to="/Outama_Koby_Resume.pdf" target="_blank" download>Resume</Link>
            </li>
        </ul>
    </nav>
    );
  };
