import React from 'react'

function Card() {
  const data=[{img:'https://images.unsplash.com/photo-1649734926695-1b1664e98842?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ,name:"Amazon Web Services",description:"oipsum dolor sit amet,"},{img:'https://images.unsplash.com/photo-1653389527532-884074ac1c65?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ,name:"Swiggy ",description:"consectetur adsum dol"},{img:'https://images.unsplash.com/photo-1625138644438-47f3b3c66880?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ,name:"Zomato  Services",description:"orem ips lorem ipsum "},{img:"im.png"
    ,name:"MSI Web ",description:"l lore` lorem ipsum d"},];

  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center gap-5 flex-wrap'>
     
     { data.map((value,index)=>(<div key={index} className='w-52  h-56 overflow-hidden   bg-zinc-200 rounded-xl'> 
     <div className='h-32 ' >
         <img className='w-full object-cover  h-full' src={value.img}/>
     </div>
     <div className='w-full h-full  bg-slate-50 py-4 px-3'>
     <h1 className='font-semibold'>{value.name}
     </h1>
     <p>{value.description}
     </p>
     </div>

</div>))}

      
       
      

    </div>
  )
}

export default Card
