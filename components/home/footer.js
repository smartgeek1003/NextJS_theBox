import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
    return(
        <section className="p-20 ">
            <div className='flex flex-row'>
                <div className='w-1/2'>
                    <div className="flex flex-row" style={{marginBottom: "2vw"}}>
                        <p style={{ color: "black"}}><span style={{ fontSize: "", color: "#2947a9"}}>Address:</span> 6391 Elgin ST. Celina, Delaware 10299</p>
                    </div>
                    <div className="flex flex-row" style={{marginBottom: "2vw"}}>
                        <p style={{ color: "black"}}><span style={{ fontSize: "", color: "#2947a9"}}>Phone:</span> +84 1102 2703</p>
                    </div>
                    <div className="flex flex-row" style={{marginBottom: "2vw"}}>
                        <p style={{ color: "black"}}><span style={{ fontSize: "", color: "#2947a9"}}>Email:</span> hello@thebox.com</p>
                    </div>
                    <div className="flex flex-row" style={{marginBottom: "2vw"}}>
                        <>
                            <Link href='/'>
                            <Image
                                className='p-0 m-0 '
                                src='/mark.svg'
                                width={60}
                                height={50}
                                priority
                                alt='logo'
                            />            
                            </Link>
                            <Image
                                className='p-0 m-0 '
                                src='/theBox.svg'
                                width={145}
                                height={50}
                                priority
                                alt='logo'
                            />
                        </>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className="flex flex-row" style={{marginBottom: "2vw"}}>
                        <p style={{ color: "black"}}><span style={{ color: "#2947a9"}}>NEWSLETTER:</span></p>
                    </div>
                    <div className="flex flex-row" style={{marginTop: "-1vw", marginBottom:"2vw"}}>
                        <input style={{ fontSize:"1vw", border: "solid #e0e3eb 1px", marginRight:"1vw", padding: "0.6vw", width:"30vw", borderRadius: "0.5vw"}} type="text" name="text" placeholder="Your email here"/>
                        <button style={{width:"10vw", fontSize: "1vw", background:"#f9995d",borderRadius:"0.5vw", color:"white"}}>Subscribe</button>
                    </div>
                    <div className="flex flex-col" style={{marginBottom: "2vw"}}>
                        <p style={{ color: "black"}}><span style={{ color: "#2947a9"}}>SOCIAL:</span></p>
                        <p className='flex flex-row' style={{ marginTop: "1vw"}}>
                            <img  src='/images/footer/footer1.svg' style={{ width:"50px",marginRight:"0.5vw"}}/>
                            <img  src='/images/footer/footer2.svg' style={{ width:"50px",marginRight:"0.5vw"}}/>
                            <img  src='/images/footer/footer3.svg' style={{ width:"50px",marginRight:"0.5vw"}}/>
                        </p>  
                    </div>
                </div>
            </div>  
        </section>

    )
}
export default Footer