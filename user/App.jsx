import React, { Component } from 'react';
import TodoView from './containers/TodoView.jsx';
import Form from './form/Form.jsx';
const App = () => {
  return (
    <div id="app">
      <h1>App</h1>
      <TodoView />
    </div>
  );
};

export default App;
