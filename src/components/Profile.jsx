import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <>
    <div className='d-flex m-5 justify-content-center align-items-center profile' >
        <div>
            <img className='rounded-start-pill' src="../src/assets/img/magdalena.jpg" alt="user1" />
        </div>
        <div className='m-4'>
            <div className='' >
                <h2>user1234@mammamia.cl</h2>
            </div>
            <div>
                <Link to="/" className='btn btn-secondary btn-lg'>Logout</Link>
            </div>
        </div>
    </div>

    </>
  )
}

export default Profile