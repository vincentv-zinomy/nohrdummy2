import React, { useEffect, useRef } from 'react'

const test = () => {
    console.log()
    const divRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        if(divRef.current){
            console.log(divRef.current.getBoundingClientRect())
        }
    },[])

  return (
    <div className='w-screen h-screen' ref={divRef}>test</div>
  )
}

export default test