import './Footer.css'
const space = String.fromCodePoint(160)
export function Footer(){
    return(
        <div className="footer">
            v2 {String.fromCodePoint(0x000A9)} Made with{space}<img src={process.env.PUBLIC_URL+"/react_icon.png"} alt='react'/> <img src={process.env.PUBLIC_URL+"/typescript_icon.png"} alt='typescript'/>{space}by Koby Outama. Circa 2023.
        </div>
    )
}