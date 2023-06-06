import './About.css'
import { GlobalNav } from "../../components/globalNav/globalNav";
import { RandomTextEffect } from "../../components/randomTextEffect";

export function About(){
    return(
        <div className="about">
            <h1>About Page</h1>    
            <div className='about-desc'>Type Type</div>
        </div>
    )
}