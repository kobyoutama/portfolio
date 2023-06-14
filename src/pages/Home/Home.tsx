import './Home.css'
import { RandomTextEffect } from "../../components/randomTextEffect";
import { useEffect, useState } from 'react';

interface HomeProp{
    width:number
}

export function Home(props: HomeProp){
    let defaultName = props.width<600 ?"Koby S. Outama":"Koby Shaisethah Outama";
    const [name, setName] = useState(defaultName);
    
    useEffect(() => {
        props.width < 600 ? 
            setName("Koby S. Outama")
            : setName("Koby Shaiseththah Outama");  
    });

    return(
        <div className="Home" id='home'> 
        <main className='Home-main'>
            <RandomTextEffect className='Home-desc'>Hello! My Name Is</RandomTextEffect>
            <RandomTextEffect text={name}>{defaultName}</RandomTextEffect>
            <div className="Home-desc">
            <RandomTextEffect>I am a UC Irvine graduate with a</RandomTextEffect>
            <RandomTextEffect>Bachelor of Science in</RandomTextEffect>
            <RandomTextEffect speed={50}>Computer Science with a concentration in Information Systems.</RandomTextEffect>
            </div>
        </main>
        </div>
    )
}