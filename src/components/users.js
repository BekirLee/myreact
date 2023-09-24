import React, { Component } from 'react'
import User from './user';
import UserConsumer from './context';


class Users extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    value => {
                        const {users} = value;
                        return (
                            <div>
                                {
                                    users.map(user => {
                                        return (
                                            <User
                                                key={user.id}
                                                name={user.name}
                                                profession={user.profession}
                                                uni={user.uni}
                                            />


                                        )
                                    })
                                }
                            </div>
                        )
                    }
                }

            </UserConsumer>
        )



    }
}


export default Users;