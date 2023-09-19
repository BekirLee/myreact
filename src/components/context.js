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