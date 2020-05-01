import React, { Component } from 'react';
import { connect } from 'react-redux';


class Users extends Component {

  constructor() {
    super()
    this.renderUsers = this.renderUsers.bind(this)
  }

  renderUsers() {
    return this.props.users.map((user, index) => <li key={index}>{user.username}</li>)
  }

  render() {
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {this.renderUsers()}
        </ul>
        <p>          
          {/* In addition, display the total number of users curently in the store */}
          Total Users: {this.props.users.length}
        </p>
      </div>
    )
  }
}


//add mapStateToProps here
const mapStateToProps = (state) => ({ users: state.users })

// connect this component to Redux
export default connect(mapStateToProps)(Users)
