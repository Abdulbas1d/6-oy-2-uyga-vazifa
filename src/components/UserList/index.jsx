import React from 'react'
import User from '../User';
import './index.css'

function UserList(props) {
    const {users} = props;
  return (
    <div className='user-list-wrapper'>
       {
        users.length > 0 && users.map((user, index) => {
            return (
                <User user = {user} key = {index}></User>
            )
        })
       }
    </div>
  )
}

export default UserList
