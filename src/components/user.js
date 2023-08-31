import React, { Component } from 'react'

export default class user extends Component {
    render() {

        // destructing
        const { name, profession, uni } = this.props;

        return (
            <div>
                <ul>
                    <li>
                        name:{name}
                    </li>
                    <li>
                        Profession:{profession}
                    </li>
                    <li>
                        University:{uni}
                    </li>
                </ul>
            </div>
        )
    }
}
