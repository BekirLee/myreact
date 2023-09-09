import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Users from './components/users';
import User from './components/user';

class APP extends Component {


  render() {
    return (
      <div className="App">
        <Users
          users={this.state.users}
        />
      </div>
    );

  }

}


export default APP;










