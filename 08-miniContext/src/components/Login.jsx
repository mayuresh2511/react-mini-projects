import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser(username)
    }

  return (
    <>
        <div>
            <form>
                <input
                type='text'
                value={username}
                onChange = {(e) => setUsername(e.target.value)}
                placeholder='username'
                />

                <input
                type='password'
                value={password}
                onChange = {(e) => setPassword(e.target.value)}
                placeholder='password'
                />

                <button
                onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
        </div>
        {/* <div>
            <h1>Welcome user {username}</h1>
        </div> */}
    </>
  )
}

export default Login