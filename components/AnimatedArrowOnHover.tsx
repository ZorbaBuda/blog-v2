import React from 'react'

export default function AnimatedArrowOnHover() {
  
  return (
    <div className="text-white text-3xl p-2 group  w-fit grid [clip-path:polygon(0%_0%,100%_0%,40%_100%)]" >
   <div className="[grid-area:1/1] flex items-center justify-center h-8 w-8 transition ease-in-out 
   group-hover:delay-300 -translate-y-10 -translate-x-10 group-hover:translate-y-0 group-hover:translate-x-0">↘</div>
   <div className="[grid-area:1/1] flex items-center justify-center h-8 w-8 selection:transition ease-in-out delay-300 
   group-hover:delay-[0s] duration-300 group-hover:translate-y-10 group-hover:translate-x-10">↘</div>
</div>
  )
}
