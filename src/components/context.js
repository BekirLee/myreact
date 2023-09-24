import React, { Component } from 'react'

const UserContext = React.createContext();
// provider,consumer
const reducer = (action, state) => {
    switch (action) {
        case "delete":
            return {
                ...state,
                users: state.filter(user => action.payload !== user.id)


            }
        default:
            return state
    }
}
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
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
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