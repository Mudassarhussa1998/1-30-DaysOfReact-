import React, { useEffect, useState } from "react";

export default function Jokes() {
  const [jokes, setJokes] = useState([]);
  const apiKey = "PE9h1VNNStMguo1+V86D6g==orkpvCI8TVcgg3WA";

  // Function to fetch a new joke 
  const fetchJoke = () => {
    fetch("https://api.api-ninjas.com/v1/jokes", {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
      },
    })
      .then((res) => res.json())
      .then((data) => setJokes(data))
      .catch((err) => console.error("Error:", err));
  };

  useEffect(() => {
    // Fetch the first joke immediately
    fetchJoke();

    // Set interval to fetch a new joke every 5 seconds
    const interval = setInterval(fetchJoke, 10000);

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>😂 Joke of the Moment</h1>

      {jokes.length > 0 ? (
        <p style={{ fontSize: "20px", color: "purple" }}>{jokes[0].joke}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
