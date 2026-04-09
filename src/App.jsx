import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import Adimdashboard from './components/dashboard/Adimdashboard'
import { getLocalStorage, setLocalStorage } from './utils/Localstorage'
import { AuthContext } from './context/Authprovider'




const App = () => {

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  //   }
  // , )

  const [user, setUser] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState(null)
   const [userData,setUserData] = useContext(AuthContext)
//   console.log(authData);

useEffect(()=>{
     const loggedInUser = localStorage.getItem('loggedInUser')
     // console.log(loggedInUser);
if(loggedInUser){
     const userData = JSON.parse(loggedInUser)
     setUser(userData.role)
     setLoggedInUser(userData.data)
}
     
},[])

// useEffect(()=>{
//      if(authData){
// const loggedInUser = localStorage.getItem("loggedInUser")
// if(loggedInUser){
//      setUser(loggedInUser.role)
// }
//      }
// },[authData])



  const handleLogin = (email,password)=>{
     if(email == "admin@me.com" && password== "123"){
setUser("admin")
localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
     }else if(userData ){
          const employee = userData.find((e)=>email == e.email && password == e.password)
if(employee){
     setUser("employee")
     setLoggedInUser(employee)
     localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
}
  }else{
      alert("invalid credentIALS")
     }
  }

 
  
  return (
  <>
  {!user ? <Login handleLogin = {handleLogin}/> : ""}
  {user == "admin" ? <Adimdashboard changeUser={setUser} /> : (user == 'employee' ?  <EmployeeDashboard changeUser={setUser} data={loggedInUser}/> : null) }
  </>
  )
}

export default App