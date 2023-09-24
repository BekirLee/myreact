import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from './context'

class User extends Component {

    state = {
        isVisible: true,
        isActive: true  
    }

    onClick = (e) => {
        this.setState(
            {
                isVisible: !this.state.isVisible
            }
        )
    }

    deletingEvent = (dispatch, e) => {
        // e.stopPrepagaion();
        const { id } = this.props;
        this.setState({
            isActive: false
        })
        dispatch({ type: "delete", payload: { id } })
    }

    render() {

        // destructing
        const { name, profession, uni } = this.props;
        const { isVisible } = this.state;
        const { isActive } = this.state;

        return (
            < UserConsumer >
                {
                    value => {
                        const { dispatch } = value;
                        return (
                            <>
                                {
                                    isActive ?
                                        < div className='container'>
                                            <div className='card'>
                                                <div className='card=header' onClick={this.onClick}>
                                                    {name}
                                                    <i className="fa-solid fa-trash" onClick={this.deletingEvent.bind(this, dispatch)}></i>
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
                                        </div > : null
                                }
                            </>
                        )

                    }
                }

            </UserConsumer >
        )

        // return (
        //     <div className='container'>
        //         <div className='card'>
        //             <div className='card=header' onClick={this.onClick}>
        //                 {name}
        //                 <i className="fa-solid fa-trash" onClick={this.deletingEvent.bind(this, dispatch)}></i>
        //             </div>

        //             {
        //                 isVisible ?
        //                     <div className='card-body'>
        //                         {profession}
        //                         <br></br>
        //                         {uni}
        //                     </div> : null
        //             }

        //         </div>
        //     </div>
        // )
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