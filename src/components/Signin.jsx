import React from 'react'
import { Link } from 'react-router-dom'

const signin = () => {
    return (
        <div>
            <h1>Sign in to your account!</h1>

            <form>
                <label>Username or e-mail: </label>
                <input type="text" required />
                <label>Password: </label>
                <input type="password" required />
                <button>Sign in</button>
                <Link to="/signup"><button>Sign up</button></Link>
            </form>
        </div>
    )
}

export default signin