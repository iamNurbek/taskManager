import React, { Component, useEffect, useState } from 'react';

const TodoList = ({ todoName }) => {
  function deleteTodo() {
    const [todoState, setTodoState] = useState([]);
    //put deleting functionality here

    useEffect(() => {
      fetch('/todo/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'Application/JSON',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setTodoState(data);
        })
        .catch((err) => console.log('Encountered error in DELETE fetch', err));
    }, []);
  }

  return (
    <div id="todoList">
      <h1>Todo List (Green) </h1>
      <li>{todoName}</li>
      <button onClick={deleteTodo}> Delete </button>
    </div>
  );
};

export default TodoList;
