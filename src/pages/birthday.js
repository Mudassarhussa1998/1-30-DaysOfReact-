import React, { useState } from 'react'

export default function Birthday() {

  const [data, setdata] = useState({
    name: '',
    age: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [people, setpeople] = useState([
    { Name: "Mudassar", Age: "20", BirthdayDate: "14/10/2004" },
    { Name: "Muzamil", Age: "21", BirthdayDate: "15/10/2004" },
    { Name: "Ali", Age: "22", BirthdayDate: "16/10/2004" },
  ]);

  const handlesubmit = () => {
    if (data.name === '' || data.age === '' || data.date === '') {
      alert("Please fill all the fields");
    } else {
      // Convert YYYY-MM-DD -> DD/MM/YYYY
      const formattedDate = data.date.split('-').reverse().join('/');
      setpeople(prev => [
        ...prev,
        { Name: data.name, Age: data.age, BirthdayDate: formattedDate }
      ]);
      setdata({ name: '', age: '', date: '' });
    }
  };

  const handleRemove = (index) => {
    setpeople(prevList => prevList.filter((_, i) => i !== index));
  };

  // 🗓️ Get today's date and month
  const today = new Date();
  const todayDay = String(today.getDate()).padStart(2, '0');
  const todayMonth = String(today.getMonth() + 1).padStart(2, '0');

  // 🎂 Filter people whose birthday matches today's day and month
  const todaysBirthdays = people.filter(person => {
    const [day, month] = person.BirthdayDate.split('/'); // e.g. "14/10/2004" -> ["14", "10", "2004"]
    return day === todayDay && month === todayMonth;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6 flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-4 text-purple-600">🎉 Birthday Reminder App</h1>

        {/* Input Form */}
        <div className="flex flex-col gap-3 mb-6">
          <input
            name="name"
            onChange={handleChange}
            value={data.name}
            placeholder="Name"
            type="text"
            className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            name="age"
            onChange={handleChange}
            value={data.age}
            placeholder="Age"
            type="number"
            className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            name="date"
            onChange={handleChange}
            value={data.date}
            type="date"
            className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            onClick={handlesubmit}
            className="bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition duration-200"
          >
            ➕ Add Birthday
          </button>
        </div>

        {/* All People */}
        <h2 className="text-xl font-semibold mb-2 text-gray-700">🎂 All Birthdays</h2>
        <div className="space-y-2">
          {people.map((item, index) => (
            <div key={index} className="flex justify-between items-center bg-purple-50 p-3 rounded-lg shadow-sm">
              <div>
                <p className="font-medium">{item.Name}</p>
                <p className="text-sm text-gray-500">Age: {item.Age} | {item.BirthdayDate}</p>
              </div>
              <button
                onClick={() => handleRemove(index)}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                ✖
              </button>
            </div>
          ))}
        </div>

        {/* Today's Birthdays */}
        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
          🎉 Birthdays Today ({todayDay}/{todayMonth})
        </h2>
        {todaysBirthdays.length > 0 ? (
          todaysBirthdays.map((person, index) => (
            <div key={index} className="bg-green-100 border border-green-300 p-3 rounded-lg shadow-sm text-center font-medium text-green-700">
              🎂 {person.Name} turns {person.Age} today!
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No birthdays today 😢</p>
        )}
      </div>
    </div>
  );
}
