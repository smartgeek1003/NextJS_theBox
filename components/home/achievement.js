import Image from 'next/image'
import Infobox from './infobox'

const Achievement = () => {
  return (
    <>
      <p className='mt-20 text-4xl font-bold text-center text-black'>Our Reputation</p>
      <section className='flex flex-row flex-wrap gap-10 mx-12 mt-16 mr-12 justify-evenly md:flex-row md:flex-nowrap md:gap-24 '>
        <Infobox src='/achevement2.svg' number='Best Services' text='Nullam senectus porttitor in eget. Eget ruturum leo interdum'/>
        <Infobox src='/achevement2.svg' number='Best teams' text='Nullam senectus porttitor in eget. Eget ruturum leo interdum'/>
        <Infobox src='/achevement1.svg' number='Best Designs' text='Nullam senectus porttitor in eget. Eget ruturum leo interdum'/>
      </section>
    </>
  )
}

export default Achievement
