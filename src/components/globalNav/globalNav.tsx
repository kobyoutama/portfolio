import React, { useEffect, useState } from "react";
import "./globalNav.css";
import { GlobalNavLink } from "../globalNavLink/globalNavLink";
import { Link } from "react-scroll";

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
        if(y.curr < 10 || y.curr < y.prev)
            setshow(true);
        else    
            setshow(false);
    
    }, [y]);

    return (<nav className={show ? "global-nav": "global-nav hide-nav"}>
        <Link to='home' 
            className='title-size' 
            spy={true}
            smooth={true}
            duration={500}>Koby S. Outama</Link>
        <ul>
            <GlobalNavLink to='home'>Home</GlobalNavLink>
            <GlobalNavLink to='about'>About Me</GlobalNavLink>
            <GlobalNavLink to='contact'>Contact</GlobalNavLink>
            <li>
                <Link to="/Outama_Koby_Resume.pdf" target="_blank">Resume</Link>
            </li>
        </ul>
    </nav>
    );
  };
