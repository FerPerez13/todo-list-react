import React from 'react';
import * as firebase from 'firebase';

import Toolbar from '../components/Toolbar';
import TodoItem from '../components/TodoItem';

export default class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      isFIrebaseActive: false,
    };
  }

  newCard() {
    console.log('Nueva targeta');
    const todo = {
      title: 'Titulo',
      description: 'Descripcion',
    };
    firebase.database().ref('/todoList').push().set(todo);
    return this;
  }

  initFirebase() {
    if (!this.state.isFIrebaseActive) {
      // Initialize Firebase
      const config = {
        apiKey: 'AIzaSyA-dqPtW1-ELjpeDUUud-mqA6SHibGEHOI',
        databaseURL: 'https://todo-list-react-4af45.firebaseio.com',
      };
      firebase.initializeApp(config);
      this.setState({ isFIrebaseActive: true });
    }
  }

  render() {
    this.initFirebase();

    const firebaseItems = firebase.database().ref('/todoList');
    const items = firebaseItems.on('child_changed', (snapshot) => {
      snapshot.val();
    });
    console.log(items);

    return (
      <div>
        <div className="boxTodoList">
          <Toolbar />
          <div className="todo-list">
            <TodoItem />
            {items}
          </div>
          <button className="button-new" onClick={this.newCard} />
        </div>
      </div>
    );
  }
}
