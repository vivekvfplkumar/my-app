import React from 'react'

function Navbar() {
  return (
    <section>
        <nav className='navbar-Container'>
            <div className='imag-Container'>
                <img src='/image/logo.png'/>
            </div>
            <div >
                <ul className='list-Components'>
                    <li className='list1'>Services</li>
                    <li className='list1'>About Us</li>
                    <li className='list1'>Tool</li>
                    <li className='list1'>Contact Us</li>
                </ul>
            </div>
            <div className='flex-login'>
              <div>Sign Up </div>
              <div>|| </div>
              <div>Log In</div>
            </div>

        </nav>
    </section>
  )
}

export default Navbar