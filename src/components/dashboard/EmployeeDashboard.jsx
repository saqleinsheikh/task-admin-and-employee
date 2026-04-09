import React from 'react'
import Header from '../others/Header'
import TaskLiskNumber from '../others/TaskLiskNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  // console.log(props);
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      {/* <h1>{data.id}</h1> */}
        <Header changeUser={props.changeUser} data ={props.data}/>
        <TaskLiskNumber data ={props.data}/>
        <TaskList data ={props.data}/>
    </div>
  )
}

export default EmployeeDashboard