import React, { useState } from 'react'

export default function Accordion() {

    const faqs = [
        { id: 1, question: "What is React?", answer: "React is a JavaScript library for building UIs." },
        { id: 2, question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript." },
        { id: 3, question: "What are components?", answer: "Components are reusable building blocks in React." }
    ];

    const [isopen, setisopen] = useState(null);

    const handleChange = (index) => {
        setisopen(isopen === index ? null : index);
    }

    return (
        <div >Accordion
            {
                faqs.map((item, index) => (
                    <div key={index} onClick={() => handleChange(index)}>
                        {item.question}


                        <span className="text-xl">{isopen === index ? "−" : "+"}</span>


                        {isopen === index && (
                            <p className="mt-2 text-gray-600">{item.answer}</p>

                        )}
                    </div>
                ))

            }
        </div>
    )
}
