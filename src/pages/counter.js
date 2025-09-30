import React, { useState } from 'react'

export default function Counter() {

    const [Timer , settimer] = useState(0);

    const handletimer = (e) => {
        

    }

  return (
    <div>
        <button value="Timer" onClick={ handletimer}>Add </button>
        Counter : {Timer} ;
    </div>
  )
}
