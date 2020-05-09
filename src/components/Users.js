import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    const { users, userCount } = this.props
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {users.map(user => <li key={1}>{user.username}</li>)}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
        Total: {userCount}
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  console.log(state)
  console.log(state.users)
  console.log(state.users.length)
  return {
    users: state.users,
    userCount: state.users.length
   }
}
// connect this component to Redux
export default connect(mapStateToProps)(Users)
