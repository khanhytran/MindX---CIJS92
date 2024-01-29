import React, { useState } from 'react'
import './style.css'

export default function HomePage() {
    const [input, setInput] = useState("")
    
    const calProcess = (e) => {
        const value = e.target.innerText;
        if (value === "C") {
            setInput("");
          } else if (value === "=") {
            setInput(eval(input));
          }else {
            setInput(input+value)
          }
    }
  return (
    <div className='container'>
        <div className='calculate'>
            <div className="display">
                <p className='input'>{input}</p>
            </div>
            <div className='key'>
                <div className='row'>
                    <button className='btn' onClick={calProcess}>7</button>
                    <button className='btn' onClick={calProcess}>8</button>
                    <button className='btn' onClick={calProcess}>9</button>
                    <button className='btn' onClick={calProcess}>/</button>
                </div>
                <div className='row'>
                    <button className='btn' onClick={calProcess}>4</button>
                    <button className='btn' onClick={calProcess}>5</button>
                    <button className='btn' onClick={calProcess}>6</button>
                    <button className='btn' onClick={calProcess}>*</button>
                </div>
                <div className='row'>
                    <button className='btn' onClick={calProcess}>1</button>
                    <button className='btn' onClick={calProcess}>2</button>
                    <button className='btn' onClick={calProcess}>3</button>
                    <button className='btn' onClick={calProcess}>-</button>
                </div>
                <div className='row'>
                    <button className='btn' onClick={calProcess}>0</button>
                    <button className='btn green' onClick={calProcess}>=</button>
                    <button className='btn' onClick={calProcess}>C</button>
                    <button className='btn ora' onClick={calProcess}>+</button>
                </div>
            </div>
        </div>
    </div>
  )
}
