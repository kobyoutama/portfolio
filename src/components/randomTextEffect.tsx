import React, { HtmlHTMLAttributes, useEffect, useRef, useState } from "react";

interface TextNode{
    children: string;
    text?:string;
    className?: string;
    speed?: number;
}

export const RandomTextEffect:React.FC<TextNode> = ({speed, children, className, text}) => {
    const idx = useRef(-1);
    const randText = "!@#$%^&*?"
    const [curText, setText] = useState('');
    const [load, setLoad] = useState(false);
    
    let loadSpeed = speed ? speed : 75; 

    function genRandText(length:number){
        var genText = '';
        while(genText.length < length){
            genText += randText.charAt(Math.floor(Math.random()*randText.length));
        }
        return genText;
    };        

    useEffect(() => {
        // let codeText = genRandText(children.length);
        let codeText = children;
        function tick(){
            idx.current++;
            if(idx.current == children.length-1) setLoad(true);
            setText(prev => prev + codeText[idx.current]);
        }
        if(idx.current < codeText.length-1){
            let addChar = setInterval(tick, loadSpeed);
            return () => clearInterval(addChar);
        }

    },[curText, text, load]);

    return (
        <div className={className}>
            {text&&load?text:curText}
        </div>
     );
};