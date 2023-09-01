import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {
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

User.defaultProps = {
    name: "no info",
    profession: "no info",
    uni: "no info"
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    uni: PropTypes.string.isRequired,
}

export default User;