import React, { useState } from "react";
import "./style.css";

const TodoList = () => {
  const [inputData, setInputData] = useState("");
  const [item, setItem] = useState([]);

  const addItem = () => {
    if (!inputData) {
      alert =("plz write something");
    } else {
      setItem([...item, inputData]);
      setInputData("")
    }
  };

//   Remove all Element

const removeAll = () =>{
    setItem([]);
    alert("Are You Sure to remove the list") 
  }



  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./image/todo2.jpg" />
            <figcaption>Add your List Here ✌</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Items"
              className="form-control"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i className="fa fa-plus add-btn" onClick={addItem}></i>
          </div>

          {/* Show Our items */}

          <div className="showItems">
            {item.map((curEle, index) => {
              return (
                <div className="eachItem" key={index}>
                  <h3>{curEle}</h3>
                  
                </div>
              );
            })}
          </div>

          {/* Remove all button */}

          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll} >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;