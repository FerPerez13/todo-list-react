import React from 'react';

import Toolbar from '../components/Toolbar';
import TodoItem from '../components/TodoItem';

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        <div className="boxTodoList">
          <Toolbar />
          <div className="todo-list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
          </div>
          <div className="button-new" />
        </div>
      </div>
    );
  }
}
