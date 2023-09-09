import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {

    state = {
        isVisible: false
    }

    onClick = (e) => {
        this.setState(
            {
                isVisible: !this.state.isVisible
            }
        )
    }

    render() {

        // destructing
        const { name, profession, uni } = this.props;
        const { isVisible } = this.state;

        return (
            <div className='container'>
                <div className='card'>
                    <div className='card=header' onClick={this.onClick}>
                        {name}
                    </div>

                    {
                        isVisible ?
                            <div className='card-body'>
                                {profession}
                                <br></br>
                                {uni}
                            </div> : null
                    }

                </div>
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