import React from 'react'

const NavBar = ({username}) => {
    console.log(username,"this ismy username")
  return (
    <div>
      
<nav class="bg-white">
  <h1 className='text-2xl text-center font-bold py-5' >Hello {username.username}</h1>
</nav>

    </div>
  )
}

export default NavBar
