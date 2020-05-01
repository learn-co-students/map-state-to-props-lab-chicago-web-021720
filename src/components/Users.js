import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          <ul>
          {this.props.users.map(user => {
            return <li>{user.username}</li>
          })}
          </ul>
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

const mapToStateProps = state => {
  return {users: state.users}
}

// connect this component to Redux
export default connect(mapToStateProps)(Users)
