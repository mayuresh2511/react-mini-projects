import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);

  return (
    <div>
        <h2>Welcome user {user}</h2>
    </div>
  )
}

export default Profile