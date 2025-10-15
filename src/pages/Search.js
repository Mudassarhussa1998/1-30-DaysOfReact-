import React from 'react'
import '../css/Search.css';


export default function Search() {
    const students = [
        {
            name: "Ali Khan",
            class: "10th",
            section: "A",
            subjects: ["Math", "Physics", "Chemistry", "English"]
        },
        {
            name: "Sara Ahmed",
            class: "10th",
            section: "B",
            subjects: ["Biology", "Chemistry", "English", "Urdu"]
        },
        {
            name: "Hassan Raza",
            class: "9th",
            section: "A",
            subjects: ["Math", "Computer Science", "English", "Islamiat"]
        },
        {
            name: "Ayesha Noor",
            class: "8th",
            section: "C",
            subjects: ["Science", "Math", "English", "History"]
        },
        {
            name: "Bilal Hussain",
            class: "7th",
            section: "B",
            subjects: ["Math", "Geography", "Urdu", "English"]
        },
        {
            name: "Fatima Tariq",
            class: "9th",
            section: "C",
            subjects: ["Math", "Physics", "English", "Islamiat"]
        },
        {
            name: "Usman Ali",
            class: "10th",
            section: "A",
            subjects: ["Math", "Computer Science", "English", "Urdu"]
        },
        {
            name: "Mariam Zafar",
            class: "8th",
            section: "B",
            subjects: ["Science", "Math", "History", "English"]
        },
        {
            name: "Ahmad Shah",
            class: "9th",
            section: "B",
            subjects: ["Biology", "Chemistry", "Urdu", "English"]
        },
        {
            name: "Zara Iqbal",
            class: "10th",
            section: "C",
            subjects: ["Physics", "Math", "English", "Pak Studies"]
        },
        {
            name: "Hamza Qureshi",
            class: "8th",
            section: "A",
            subjects: ["Science", "English", "Urdu", "Math"]
        },
        {
            name: "Nimra Aslam",
            class: "9th",
            section: "C",
            subjects: ["Math", "Computer Science", "Urdu", "English"]
        },
        {
            name: "Taha Siddiqui",
            class: "7th",
            section: "A",
            subjects: ["Math", "Science", "History", "English"]
        },
        {
            name: "Laiba Khan",
            class: "10th",
            section: "B",
            subjects: ["Math", "Biology", "Chemistry", "English"]
        },
        {
            name: "Zeeshan Malik",
            class: "9th",
            section: "A",
            subjects: ["Physics", "Chemistry", "Math", "English"]
        }
    ];

   return (
    <div>
      <h2>Search</h2>

      <div className="students-container">
        {students.map((item, index) => (
          <div className="student-card" key={index}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
