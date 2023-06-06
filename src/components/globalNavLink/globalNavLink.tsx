import React from "react";
import { Link } from "react-scroll";
import { useMatch, useResolvedPath } from "react-router-dom";

interface linkProps{
    to:string,
    children: React.ReactNode,
}

export const GlobalNavLink = ({to, children}:linkProps) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} 
                spy={true}
                smooth={true}
                duration={500}>
                {children}
            </Link>
        </li>
    );
  };