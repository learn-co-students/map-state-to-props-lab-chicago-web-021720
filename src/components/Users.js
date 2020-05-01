import React, { Component } from 'react';
import { connect } from 'react-redux';


class Users extends Component {


  displayUsers = () => {
    return this.props.users.map(user=> {
      return <li>{user.username}</li>
    })  
  }

  displayUserTotal = () => {
    return this.props.users.length
  }

  render() {

    

    return (
      <div>
        <ul>
          Users!<br/>
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {this.displayUsers()}
          {/* In addition, display the total number of users curently in the store */}
          Total: {this.displayUserTotal()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { users: state.users }
}


export default connect(mapStateToProps)(Users);
