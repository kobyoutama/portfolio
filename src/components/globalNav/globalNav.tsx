import React, { useEffect, useState } from "react";
import "./globalNav.css";
import { GlobalNavLink } from "../globalNavLink/globalNavLink";
import { Link } from "react-router-dom";

export const GlobalNav = () => {
    const [y, setyDelt] = useState({curr:0, prev:0});
    const [show, setshow] = useState(true);

    useEffect(()=>{
        const handleScroll = () => {
            setyDelt(prevState => {
                return {
                    curr:window.scrollY,
                    prev:prevState.curr
                }
            });
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    useEffect(() => {
        if(y.curr > 200 && y.curr > y.prev)
            setshow(false);
        else    
            setshow(true);
    
    }, [y]);

    return (<nav className={show ? "global-nav": "global-nav hide-nav"}>
        <Link to='/' className='title-size'>Koby S. Outama</Link>
        <ul>
            <GlobalNavLink to='/'>Home</GlobalNavLink>
            <GlobalNavLink to='/#/about'>About Me</GlobalNavLink>
            <li>
                <Link to="/Outama_Koby_Resume.pdf" target="_blank">Resume</Link>
            </li>
        </ul>
    </nav>
    );
  };
