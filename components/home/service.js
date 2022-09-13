import ServiceBox from './serviceBox'
const Service = () =>{
    return (
        <section className='p-20 mt-10' style={{ background : "#f6f8f7"}} id="services">
            <p className='text-4xl font-bold text-center text-black'>Services</p>
            <div className='flex flex-row flex-wrap justify-evenly md:flex-row md:flex-nowrap'>
                <ServiceBox src='/services6.svg' text='Construction' color="#FFFFFF" font='#2947a9'/>
                <ServiceBox src='/services5.svg' text='Renovation' color="#2947a9" font='white'/>
                <ServiceBox src='/services4.svg' text='Consultation' color="#FFFFFF" font='#2947a9'/>
            </div>
            <div className='flex flex-row flex-wrap justify-evenly md:flex-row md:flex-nowrap'> 
                <ServiceBox src='/services3.svg' text='Repair Services' color="#2947a9" font='white'/>
                <ServiceBox src='/services2.svg' text='Architecture' color="#FFFFFF" font='#2947a9'/>
                <ServiceBox src='/services1.svg' text='Electric' color="#2947a9" font='white'/>
            </div>  
        </section>
    )

}
export default Service