import React, { useState } from 'react'
import '../css/calculator.css'

export default function Calculator() {
    const [input, setInput] = useState('');

    const handleClick = (e) => {
        if( e === 'clear'){
            setInput("")
        }
        else if (e === "="){
            try {
                setInput(eval(input).toString()); 
            } catch {
                setInput("Error");
            
        }
        }else {
             setInput((prev) => prev + e);
        }
       
    }

    return (
        <div className="main">
            <div className="display">{input || "0"}</div>

            <div className="sub">
                <button onClick={() => handleClick("*")}>*</button>
                <button onClick={() => handleClick("/")}>/</button>
                <button onClick={() => handleClick("+")}>+</button>
                <button onClick={() => handleClick("-")}>-</button>
            </div>

            <div className="sub">
                <button onClick={() => handleClick("9")}>9</button>
                <button onClick={() => handleClick("8")}>8</button>
                <button onClick={() => handleClick("7")}>7</button>
                <button onClick={() => handleClick("6")}>6</button>
            </div>

            <div className="sub">
                <button onClick={() => handleClick("5")}>5</button>
                <button onClick={() => handleClick("4")}>4</button>
                <button onClick={() => handleClick("3")}>3</button>
                <button onClick={() => handleClick("2")}>2</button>
            </div>

            <div className="sub">
                <button onClick={() => handleClick("1")}>1</button>
                <button onClick={() => handleClick("0")}>0</button>
                <button onClick={() => handleClick("00")}>00</button>
                <button onClick={() => handleClick("clear")}>Clear</button>
            </div>

            <div className="sub">
                <button onClick={() => handleClick("=")}>=</button>
            </div>
        </div>
    );
}
