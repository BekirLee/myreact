import React, { Component } from 'react'

const UserContext = React.createContext();
// provider,consumer

export class UserProvider extends Component {
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
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;