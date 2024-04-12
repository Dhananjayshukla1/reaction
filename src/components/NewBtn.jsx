import React from 'react'

function NewBtn() {
  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col gap-10 justify-center items-center'>
       <div className='w-60 px-3 py-2 bg-zinc-100 rounded'>
       <button onClick={()=>{alert("hey")}} className='px-2 py-1 bg-orange-600 text-xs  text-zinc-100 rounded-xl '>Download Now</button>
       </div>
    </div>
  )
}

export default NewBtn
