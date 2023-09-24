import './App.css';
import { Component } from 'react';
import Users from './components/users';
import Navbar from './components/nav';

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
        name: "Ramil",
        profession: "IT",
        uni: "aztu"
      },

      {
        id: 3,
        name: "Ali",
        profession: "IT",
        uni: "aztu"
      },
    ]
  }
  render() {
    return (
      <div className="App">
        <Navbar text="User Info"></Navbar>
        <Users users={this.state.users} />
      </div>
    );
  }
}


export default APP;










