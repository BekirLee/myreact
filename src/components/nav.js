import React from "react";
import PropTypes from "prop-types"

function Navbar(props) {
    return (
        <div className="header">
            <h1>
                {props.text}
            </h1>
        </div>
    )
}

Navbar.proptype = {
    text: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    text: "default app"
}

export default Navbar;