import React from 'react'

const Accepttask = ({data}) => {
  return (
      <div className="shrink-0 h-full w-75 p-5 bg-blue-400 rounded-xl ">
<div className='flex justify-between items-center  '>
<h3 className='bg-red-600 px-3 text-sm py-1 rounded'>{data.category}</h3>
<h4 className='text-sm'>{data.taskDate}</h4>
</div>
<h2 className='mt-5 text-xl font-bold'>{data.taskTitle} </h2>
<p className='text-sm mt-2'>{data.taskDescription}</p>
     <div className='flex justify-between mt-4'>
        <button className='bg-green-500 py-1 px-2 text-sm'>Mark as completed</button>
        <button className='bg-red-500 py-1 px-2 text-sm'>mark as failed</button>
     </div>
      </div>
  )
}

export default Accepttask