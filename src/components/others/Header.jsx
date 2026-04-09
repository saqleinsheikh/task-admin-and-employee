import React, { useState } from 'react'

const Header = (props) => {
  // console.log(data);
  // const [user, setUser] = useState('')

  // if(!data){
  //   setUser('admin')
  // }else{
  //   setUser(data.firstName)
  // }

  const logOutuser = ()=>{
    localStorage.setItem('loggedInUser','')
props.changeUser("")
    // console.log(props.changeUser);
    // window.location.reload()
  }

  return (
    <div className='flex justify-between items-end '>
        <h1 className='text-2xl font-medium'>hello <br /><span className='text-3xl font-semibold'>UserName </span></h1>
        <button onClick={logOutuser} className='bg-red-600 text-white px-5 py-3 rounded-b-sm'>LogOut</button>
    </div>
  )
}

export default Header