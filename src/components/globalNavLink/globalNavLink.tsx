import React from "react";
import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";

interface linkProps{
    to:string,
    children: React.ReactNode,
    props?: LinkProps,
}

export const GlobalNavLink = ({to, children, ...props}:linkProps) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
  };