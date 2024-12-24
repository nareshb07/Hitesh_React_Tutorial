import React from 'react'
import { NavLink } from 'react-router-dom'  

function footer() {
  return (
    <div>
       <ul className='flex space-x-4'>
              <li> 
                <NavLink to ='' > Privacy and Polices </NavLink> 
              </li>
              <li> 
                <NavLink to ='about' > About </NavLink> 
              </li>
              <li> Contact </li>
              <li> More Info </li>
            </ul>
    </div>
  )
}

export default footer
