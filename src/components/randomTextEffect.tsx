import React, { useEffect, useRef, useState } from "react";

interface TextNode{
    children: string;
    speed?: number;
}

export const RandomTextEffect:React.FC<TextNode> = ({speed, children}) => {
    const [curText, setText] = useState('');
    const idx = useRef(-1);
    const randText = "!@#$%^&*?"
    const [newSpeed, setSpeed] = useState(speed || 75);
    function genRandText(length:number){
        var genText = '';
        while(genText.length < length){
            genText += randText.charAt(Math.floor(Math.random()*randText.length));
        }
        return genText;
    };        

    useEffect(() => {
        // let codeText = genRandText(text.length);
        let codeText = children;
        function tick(){
            idx.current++;
            setText(prev => prev + codeText[idx.current]);
        }
        if(idx.current < codeText.length-1){
            let addChar = setInterval(tick, newSpeed);
            return () => clearInterval(addChar);
        }

    },[curText]);

    return (
        <div>
            {curText}
        </div>
     );
};