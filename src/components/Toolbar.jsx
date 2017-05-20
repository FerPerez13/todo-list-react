import React from 'react';


export default class Toolbar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="toolbar">
        <div className="toolbar-text">Texto de Toolbar</div>
      </div>
    );
  }
}
