import React, { useState } from "react";
import "../css/Search.css";

export default function Search() {
  const students = [
    { name: "Ali Khan", class: "10th", section: "A", subjects: ["Math", "Physics", "Chemistry", "English"] },
    { name: "Sara Ahmed", class: "10th", section: "B", subjects: ["Biology", "Chemistry", "English", "Urdu"] },
    { name: "Hassan Raza", class: "9th", section: "A", subjects: ["Math", "Computer Science", "English", "Islamiat"] },
    { name: "Ayesha Noor", class: "8th", section: "C", subjects: ["Science", "Math", "English", "History"] },
    { name: "Bilal Hussain", class: "7th", section: "B", subjects: ["Math", "Geography", "Urdu", "English"] },
    { name: "Fatima Tariq", class: "9th", section: "C", subjects: ["Math", "Physics", "English", "Islamiat"] },
    { name: "Usman Ali", class: "10th", section: "A", subjects: ["Math", "Computer Science", "English", "Urdu"] },
    { name: "Mariam Zafar", class: "8th", section: "B", subjects: ["Science", "Math", "History", "English"] },
    { name: "Ahmad Shah", class: "9th", section: "B", subjects: ["Biology", "Chemistry", "Urdu", "English"] },
    { name: "Zara Iqbal", class: "10th", section: "C", subjects: ["Physics", "Math", "English", "Pak Studies"] },
    { name: "Hamza Qureshi", class: "8th", section: "A", subjects: ["Science", "English", "Urdu", "Math"] },
    { name: "Nimra Aslam", class: "9th", section: "C", subjects: ["Math", "Computer Science", "Urdu", "English"] },
    { name: "Taha Siddiqui", class: "7th", section: "A", subjects: ["Math", "Science", "History", "English"] },
    { name: "Laiba Khan", class: "10th", section: "B", subjects: ["Math", "Biology", "Chemistry", "English"] },
    { name: "Zeeshan Malik", class: "9th", section: "A", subjects: ["Physics", "Chemistry", "Math", "English"] },
  ];

  const [input, setInput] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleSearch = (e) => setInput(e.target.value);

  const filtered = students.filter((user) =>
    user.name.toLowerCase().includes(input.toLowerCase())
  );

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
    setSelectedStudent(null);
  };

  return (
    <div className="search-container">
      <h2>Search Students</h2>

      <input
        type="text"
        placeholder="Search by name..."
        value={input}
        onChange={handleSearch}
        className="search-input"
      />

      <div className="students-container">
        {(input === "" ? students : filtered).map((student, index) => (
          <div
            className="student-card"
            key={index}
            onClick={() => handleStudentClick(student)}
          >
            <h4>{student.name}</h4>
            <p>
              Class: {student.class} | Section: {student.section}
            </p>
          </div>
        ))}
      </div>

      
      {showPopup && selectedStudent && (
        <div className="popup-overlay" onClick={handleClose}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleClose}>✖</button>
            <h3>{selectedStudent.name}</h3>
            <p><strong>Class:</strong> {selectedStudent.class}</p>
            <p><strong>Section:</strong> {selectedStudent.section}</p>
            <p><strong>Subjects:</strong> {selectedStudent.subjects.join(", ")}</p>
          </div>
        </div>
      )}
    </div>
  );
}
