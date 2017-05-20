import React from 'react';

export default class TodoItem extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="todo-card">
        <div className="card-content">
          <div className="delete-box" />
          <div className="info-box">
            <div className="todo-title">Título</div>
            <div className="todo-description">Descripción</div>
          </div>
          <div className="edit-box" />
        </div>
      </div>
    );
  }
}
