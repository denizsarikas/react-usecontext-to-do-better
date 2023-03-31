import React from "react";
import { useTodoContext } from "../hooks/useTodoContext";

const Footer = () => {
  const { todo, dispatch } = useTodoContext();
  //console.log('todo degerleri', todo)
  const incompleteItemCount = todo.filter((item) => !item.completed).length;
  //console.log('yapilmamis task sayisi', incompleteItemCount)

  const handleShowAll = () => {
    const allItems = document.querySelectorAll('.checked, .unchecked');
    allItems.forEach(item => {
      item.style.display = 'flex';
    });
  };
  
  const handleShowActive = () => {
    const checkedItems = document.querySelectorAll(".checked");
    checkedItems.forEach((item) => {
      item.style.display = "none";
    })
    const uncheckedItems = document.querySelectorAll(".unchecked");
    uncheckedItems.forEach((item) => {
      item.style.display = "flex";
    });;
  };
  const handleShowCompleted = () => {
    const uncheckedItems = document.querySelectorAll(".unchecked");
    uncheckedItems.forEach((item) => {
      item.style.display = "none";
    });
    const checkedItems = document.querySelectorAll(".checked");
    checkedItems.forEach((item) => {
      item.style.display = "flex";
    });
  };
  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <>
      <div className="footerContainer">
        <div>
          <h2>{incompleteItemCount} items left to complete</h2>
        </div>
        <ul>
          <li>
            <button onClick={handleShowAll} className="footerButton">
              All
            </button>
            <button onClick={handleShowActive} className="footerButton">
              Active
            </button>
            <button onClick={handleShowCompleted} className="footerButton">
              Completed
            </button>
            <button className="clearCompleted" onClick={clearCompleted}>
              Clear Completed
            </button>
          </li>
        </ul>
        <div className="footer">
          <p>Patika Homework2</p>
          <p>Deniz Sarıkaş</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
