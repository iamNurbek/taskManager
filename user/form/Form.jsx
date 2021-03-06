import React, { Component, useState } from 'react';
import TodoList from '../components/TodoList.jsx';
import ReactDOM from 'react-dom';

function Form() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    // event.preventDefault();

    const bodyObject = {
      todo: name,
    };

    fetch('/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(bodyObject),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log('❌❌ Error in Post Fetch ❌❌', err));
  };

  return (
    <div className="inputBox">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" className="addBtn" />
      </form>
    </div>
  );
}

export default Form;
