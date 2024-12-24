import React from 'react'
import { Link,NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
        <header>
            <ul className='flex space-x-4'>
              <li> 
                <NavLink to ='' className={({isActive}) => 
                        `font-bold ${isActive? "text-purple-500" : "text-yellow-200" }`} > Home </NavLink> 
              </li>
              <li> 
                <NavLink to ='about' className={({isActive}) => 
                        `font-bold ${isActive? "text-purple-500" : "text-yellow-200" }`} > About </NavLink> 
              </li>
              <li> <NavLink to ='login' className={({isActive}) => 
                        `font-bold ${isActive? "text-purple-500" : "text-yellow-200" }`} > Login </NavLink> </li>
              
              <li> <NavLink to ='user' className={({isActive}) => 
                        `font-bold ${isActive? "text-purple-500" : "text-yellow-200" }`} > user </NavLink> </li>
              
            </ul>
        </header>
    </>
  )
}

export default Header


