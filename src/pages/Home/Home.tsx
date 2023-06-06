import './Home.css'
import { RandomTextEffect } from "../../components/randomTextEffect";

export function Home(){
    return(
        <div className="Home"> 
        <main className='Home-main'>
            <div className="Home-desc">
            <RandomTextEffect>Hello! My Name Is</RandomTextEffect>
            </div>
            <RandomTextEffect>Koby Shaiseththah Outama</RandomTextEffect>
            <div className="Home-desc">
            <RandomTextEffect>I am a UC Irvine graduate with a B.S.</RandomTextEffect>
            <RandomTextEffect speed={1250}>IN</RandomTextEffect>
            <RandomTextEffect speed={50}>Computer Science with a concentration in Information Systems.</RandomTextEffect>
            </div>
        </main>
        </div>
    )
}