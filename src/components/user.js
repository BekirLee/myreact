import React, { Component } from 'react'

export default class user extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        name:{this.props.name}
                    </li>
                    <li>
                        Profession:{this.props.profession}
                    </li>
                    <li>
                        University:{this.props.uni}
                    </li>
                </ul>
            </div>
        )
    }
}
