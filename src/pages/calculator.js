import React from 'react'
import '../css/calculator.css' 

export default function Calculator() {
    return (
        <div>
            <div className='main' >
                <div>
                    {}
                </div>
                <div className='sub'>
                    <div>*</div>
                    <div>/</div>
                    <div>+</div>
                    <div>-</div>

                </div>
                <div className='sub'>
                    <div>9</div>
                    <div>8</div>
                    <div>7</div>
                    <div>6</div>
                </div>
                
               <div className='sub'>
                    <div>5</div>
                    <div>4</div>
                    <div>3</div>
                    <div>2</div>
                </div>

                <div className='sub'>
                    <div>1</div>
                    <div>0</div>
                    <div>00</div>
                    <div>clear</div>
                    
                </div>
            </div>

        </div>
    )
}
