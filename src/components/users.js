import React, { Component } from 'react'
import User from './user';

class Users extends Component {
    render() {
        const { users } = this.props;
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


export default Users;