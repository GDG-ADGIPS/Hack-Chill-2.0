import React, { useState } from 'react'
import { useRef ,useEffect} from 'react'
import "./Prizes.css"
const Prizes = () => {
    const svg1=useRef(null)
    const svg2=useRef(null)
    const svg3=useRef(null)
    const svg4=useRef(null)
    useEffect(()=>{
        gsap.to(svg1.current,{
            duration: 1,
            left:0,
            top:0,
            rotate: 0,
            scrollTrigger: "#frames",
        })
        gsap.to(svg2.current,{
            duration: 1,
            right: 0,
            top:0,
            rotate: 0,
            scrollTrigger:"#frames",
        })
        gsap.to(svg3.current,{
            duration: 1,
            bottom:0,
            scrollTrigger:"#frames2",
        })
        gsap.to(svg4.current,{
            duration: 1,
            bottom: 0,
            scrollTrigger:"#frames2",
        })

    },[])
  return (
    <div id='prizes' className='mt-6'>
        <span>Prizes</span>
        <div className="frames flex w-full justify-center items-center relative bottom-9 gap-3" id='frames'>
            <img  ref={svg1} src='/pics/Frame100.svg' height={230} width={230} className='relative left-16 z-0 -rotate-12 top-4'/>
            <img src='/pics/Frame99.svg'  height={330} width={330} className='relative z-10'/>
            <img ref={svg2} src='/pics/Frame101.svg'  height={206} width={206} className='relative right-12 z-0 rotate-12 top-5'/>
        </div>
        <div className="frames2 w-full flex flex-col justify-center items-center mt-10  gap-2" id='frames2'>
            <img src="/pics/Frame90.svg" width={1100} className='relative z-0' />
            <img src="/pics/Frame91.svg" width={1100} className='relative z-10 bottom-14' ref={svg3}/>
            <img src="/pics/Frame92.svg" width={1100} className='relative z-20 bottom-28 ' ref={svg4}/>
        </div>
    </div>
  )
}

export default Prizes