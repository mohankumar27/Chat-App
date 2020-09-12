import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const englishSeries = [
  "Breaking Bad",
  "Game of Thrones",
  "Sherlock",
  "The Big Bang Theory",
  "Friends",
  "Suits",
];

function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState(englishSeries[0]);

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <select
            className="joinInput mt-20"
            onChange={(event) => setRoom(event.target.value)}
          >
            {englishSeries.map((series, index) => (
              <option key={index} value={series}>
                {series}
              </option>
            ))}
          </select>
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Join;
