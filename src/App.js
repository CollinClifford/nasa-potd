import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [nasa, setNasa] = useState([]);
  const [click, setClick] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=txc47bebccE5ijp8zJDkagO87n7RFaX71TA28mIk`
    )
      .then((response) => response.json())
      .then(setNasa)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const image = nasa.hdurl;

  const date = new Date();
  const [month, day, year] = [
    date.getMonth(),
    date.getDay(),
    date.getFullYear(),
  ];

  console.log(`Today's date is ${month}/${day}/${year}`);

  const clickHandler = () => {
    setClick(!click);
  };

  if (!image) {
    return <p>Loading...</p>;
  } else {
    if (click) {
      return (
        <div className="App">
          <p>
            Today's date is {month}/{day}/{year}
          </p>
          <img src={image} alt={nasa.title} />
          <p onClick={clickHandler}>{nasa.title}</p>
          <p>{nasa.explanation}</p>
        </div>
      );
    } else {
      return (
        <div className="App">
          <p>
            Today's date is {month}/{day}/{year}
          </p>
          <img src={image} alt={nasa.title} />
          <p onClick={clickHandler}>{nasa.title}</p>
        </div>
      );
    }
  }
}

export default App;
