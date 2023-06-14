import './Contact.css'
import { GlobalNav } from "../../components/globalNav/globalNav";
import { RandomTextEffect } from "../../components/randomTextEffect";
import { useEffect } from 'react';

interface ContactProps{
    width:number;
}

export function Contact(){
    // useEffect(() => {
    //     props.width < 600 ? 
    //         setName("Koby S. Outama")
    //         : setName("Koby Shaiseththah Outama");  
    // });

    return(
        <div className="contact" id="contact">
            <h1 className="contact-title">contact me!</h1>    
            <div className='contact-desc'>
                <div>
                    <h2><span className="fas fa-phone"></span> 209-992-9639</h2>
                    <h2><span className="fas fa-envelope"></span> koutama@uci.edu</h2>
                </div>
                <div>
                    <h2><a href="https://github.com/kobyoutama" target="_blank"><span className="fab fa-github-square"></span> https://github.com/kobyoutama</a></h2>
                    <h2><a href="https://www.linkedin.com/in/koby-outama/" target="_blank"><span className="fab fa-linkedin"></span> https://www.linkedin.com/in/koby-outama/</a></h2>
                </div>
            </div>
        </div>
    )
}