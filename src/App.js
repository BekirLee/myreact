import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Users from './components/users';
import User from './components/user';

class APP extends Component {

  state = {

    users: [

      {
        id: 1,
        name: "Nihad",
        profession: "IT",
        uni: "aztu"
      },
      {
        id: 2,
        name: "Vuqar",
        profession: "Teacher",
        uni: "Sheki"
      },
      {
        id: 3,
        name: "Humay",
        profession: "Teacher",
        uni: "Sheki"
      }
    ]
  }
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










