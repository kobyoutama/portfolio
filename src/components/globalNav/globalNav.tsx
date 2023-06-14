import React, { useEffect, useState } from "react";
import "./globalNav.css";
import { GlobalNavLink } from "../globalNavLink/globalNavLink";
import { Link as DomLink } from "react-router-dom";
import { Link } from "react-scroll";

interface GlobalNavProp{
    width:number
}

export const GlobalNav = (props:GlobalNavProp) => {
    let defaultName = props.width<600 ?"Koby S. Outama":"Koby Shaisethah Outama";
    
    const [y, setyDelt] = useState({curr:0, prev:0});
    const [show, setshow] = useState(true);
    const [name, setName] = useState(defaultName);
    const [minDisp, setMinDisp] = useState(props.width<600);

    useEffect(() => {
        if(props.width < 600){
            setName("Outama");
            setMinDisp(true);
        } 
        else {
            setName("Koby Outama");
            setMinDisp(false);
        }  
    });

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
    }, []);

    useEffect(() => {
        if(y.curr < 10 || y.curr < y.prev)
            setshow(true);
        else    
            setshow(false);
    
    }, [y]);

    return (<nav className={show ? "global-nav" : "global-nav hide-nav"}>
        <div>
            <Link to='home' 
                className='title-size' 
                spy={true}
                smooth={true}
                duration={500}>{name}</Link>
        </div>
        <div>
            <ul>
                <GlobalNavLink to='home'>
                    {minDisp?<span aria-hidden="true" className="fas fa-home" title="home"></span>
                        :"Home"}</GlobalNavLink>
                <GlobalNavLink to='about'>
                    {minDisp?<span aria-hidden="true" className="fas fa-user" title="about-me"></span>
                        :"About Me"}</GlobalNavLink>
                <GlobalNavLink to='contact'>
                    {minDisp?<span aria-hidden="true" className="fas fa-phone" title="contact"></span>
                        :"Contact"}</GlobalNavLink>
                <li>
                    <DomLink to="%PUBLIC_URL%/Outama_Koby_Resume.pdf" target="_blank">
                        {minDisp?<span aria-hidden="true" className="fas fa-file"></span>
                            :"Resume"}</DomLink>
                </li>
            </ul>
        </div>

    </nav>
    );
  };
