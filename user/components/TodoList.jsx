import React, { Component, useEffect, useState } from 'react';

const TodoList = ({ todoName, id }) => {
  function deleteTodo(id) {
    fetch(`/todo/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/JSON',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(`this should be delete `, data);
      })
      .catch((err) => console.log('Encountered error in DELETE fetch', err));
    window.location.reload(false);
  }

  return (
    <div id="todoList">
      <p className="todoList"> {todoName} </p>
      <button className="deleteButton" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoList;
