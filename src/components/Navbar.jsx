import React from 'react'
import { useContext } from 'react'
import UserContent from '../contexts/UserContent';

const Navbar = () => {
    const {logout} = useContext(UserContent);

  return (
    <nav>
        <div>TodoList.</div>
        <div className='user' onClick={logout}>Logout</div>
    </nav>
    
  )
}

export default Navbar