import React, { Component, useState, useEffect } from 'react';
import Form from '../form/Form.jsx';
import TodoList from '../components/TodoList.jsx';

const todoView = ({ todoName }) => {
  const [todoState, setTodoState] = useState([]);

  //todoState: [] is what your state is gonna look like

  //useeffect is like your component did mount/unmount/udpate type shit
  useEffect(() => {
    fetch('/todo/get')
      .then((res) => res.json())
      .then((data) => {
        setTodoState(data);
      })
      .catch((err) => console.log(err));
  }, []);

  //iteraet throughthe array so that you grab the info that you really want to show in the frontend(to the client)
  const todoArr = [];
  for (let i = 0; i < todoState.length; i++) {
    todoArr.push(<TodoList todoName={todoState[i].todo} key={i} />);
  }

  return (
    <div id="todoView">
      <h1>Todo View (Black)</h1>
      <Form />
      {todoArr}
    </div>
  );
};

export default todoView;
