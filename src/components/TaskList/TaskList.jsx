import React from 'react'
import Accepttask from './Accepttask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='taskList' className='h-[55%] flex items-center justify-items-start overflow-x-auto w-full gap-5 flex-nowrap py-5 mt-10'>
      {data.tasks.map((elem,idx)=>{
if(elem.active){
      return <Accepttask key={idx} data={elem}/>
}if(elem.newtask){
return <NewTask key={idx} data={elem}/>
}if(elem.completed){
      return <CompleteTask key={idx} data={elem}/>
}
if(elem.failed){
      return <FailedTask key={idx} data={elem}/>
}
      })}
    </div>
  )
}

export default TaskList