import React, { useState } from 'react'
import '../css/dayone.css'   // 👈 import CSS file

export default function Dayone() {

  const [formData, setFormData] = useState({
    name: "",
    year: "",
    cgpa: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="form-container">
      <h2>Student Information</h2>
      <form className="student-form">
       
        <label className="form-label">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="form-input"
        />
        
       
        <label className="form-label">Year</label>
        <select 
          name="year" 
          value={formData.year} 
          onChange={handleChange} 
          className="form-select"
        >
          <option value="">Select year</option>
          <option value="First">First</option>
          <option value="Second">Second</option>
          <option value="Third">Third</option>
          <option value="Fourth">Fourth</option>
        </select>

   
        <label className="form-label">CGPA</label>
        <div className="form-radio-group" onChange={handleChange}>
          <label><input type="radio" name="cgpa" value="0-1" /> 0–1</label>
          <label><input type="radio" name="cgpa" value="1-2" /> 1–2</label>
          <label><input type="radio" name="cgpa" value="2-3" /> 2–3</label>
          <label><input type="radio" name="cgpa" value="3-4" /> 3–4</label>
          <label><input type="radio" name="cgpa" value="4" /> 4</label>
        </div>

        <div className="form-output">
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Year:</strong> {formData.year}</p>
          <p><strong>CGPA:</strong> {formData.cgpa}</p>
        </div>
      </form>
    </div>
  )
}
