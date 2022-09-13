import Image from 'next/image'


const HeaderForm = () => {
  return (
    <div className='absolute bottom-0 right-0 w-2/5 h-1/3' style={{ background : "#3559c7"}}>
        <p className='text-base font-bold text-center text-white' style={{ marginTop:"2vw", fontSize:"1.5vw"}}>Feature Projects</p>
        <p className='text-center text-white ' style={{ marginTop:"2vw", fontSize:"1vw"}}>The National University of <br/> Architecture</p>
        <div>    
            <button className='absolute bottom-0 left-0 flex flex-row w-1/2 bg-black border-r-2' style={{ fontSize:"1vw", padding:"1vw 7vw" }}>
                <img src='/leftvector.svg' style={{padding: "0vw", width: "2vw"}}/>
                Back
            </button>
            <button className='absolute bottom-0 right-0 flex flex-row w-1/2 bg-black border-r-2' style={{ fontSize:"1vw", padding:"1vw 7vw" }}>Next
                <img src='/rightvector.svg' style={{padding: "0vw", width: "2vw"}}/>
            </button>     
        </div>
    </div>
  )
}

export default HeaderForm