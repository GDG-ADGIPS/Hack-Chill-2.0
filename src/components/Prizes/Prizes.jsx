import { useRef ,useEffect} from 'react'
import "./Prizes.css"
const Prizes = () => {
    useEffect(()=>{
        gsap.matchMedia().add("(min-width: 800px)", () => {
        gsap.to("#img1",{
            duration: 1,
            left:0,
            top:0,
            ease:"bounce",
            rotate: 0,
            scrollTrigger: {
                trigger:"#frames",
                start: "center 70%",

            },
        })
        gsap.to("#img2",{
            duration: 1,
            right: 0,
            top:0,
            ease:"bounce",
            rotate: 0,
             scrollTrigger: {
                trigger:"#frames",
                start: "center 70%",
                
            },
        })
        gsap.to("#img3",{
            duration: 1,
            bottom:0,
            scrollTrigger: {
                trigger:"#frames2",
                start: "center 80%",
                
            },
        })
        gsap.to("#img4",{
            duration: 1,
            bottom: 0,
            scrollTrigger: {
                trigger:"#frames2",
                start: "center 80%",
                
            },
        })
        
           
          });
         
            
           

    },[])
  return (
    <div id='prizes' className='mt-6'>
        <div className="prizes-heading">
          <img
            src="/pics/prizes.svg"
            alt="prizes"
            className="heading"
          />
        </div>
        <div className="frames flex w-full justify-center items-center relative bottom-9 gap-3" id='frames'>
            <img id='img1' src='/pics/Frame100.svg' height={230} width={230} className='relative left-16 z-0 -rotate-12 top-4'/>
            <img src='/pics/Frame99.svg'  height={330} width={330} className='relative z-10'/>
            <img id='img2' src='/pics/Frame101.svg'  height={206} width={206} className='relative right-12 z-0 rotate-12 top-5'/>
        </div>
        <div className="frames2 w-full flex flex-col justify-center items-center mt-10  gap-2" id='frames2'>
            <img src="/pics/Frame90.svg" width={1100} className='relative z-0' />
            <img src="/pics/Frame91.svg" width={1100} className='relative z-10 bottom-14' id='img3'/>
            <img src="/pics/Frame92.svg" width={1100} className='relative z-20 bottom-28 ' id='img4'/>
        </div>
    </div>
  )
}

export default Prizes