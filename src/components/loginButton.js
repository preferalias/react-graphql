import React from 'react';

export default props => {
    return (
      <li onClick={props.clickLogOut}>
        {this.props.isLoggedIn ? "Logout" : "Login"}
      </li>
    )
}
