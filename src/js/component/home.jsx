import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setToDos] = useState([]);

  // Add into array -> concat
  // Delete from array -> filter
  // Update -> map

  return (
    <div className="container">
      <h1>My To Do's</h1>
      <ul className="card list-group">
        <li className="list-group-item">
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyUp={(e) => {
              if (e.key == "Enter") {
                setToDos([...todos, inputValue]);
                setInputValue("");
              }
            }}
            placeholder="What Do You Need To Do?"
          ></input>
        </li>

        {todos.map((item, index) => (
          <li className="list-group-item">
            {item}{" "}
            <i
              class="fas fa-trash-alt "
              onClick={() =>
                setToDos(
                  todos.filter((t, currentIndex) => index != currentIndex)
                )
              }
            ></i>
          </li>
        ))}
        <li className="list-group-item">{todos.length} Items Left</li>
      </ul>
    </div>
  );
};

export default Home;
