import Image from 'next/image'
import HeaderForm from './headerForm.js'
import HeaderTitle from './headerTitle.js'

const Header = () => {
  return (
    <header id="header" className='relative justify-between reex-wrap reflex md:flex-nowrap' style={{ backgroundImage: "url(/background.png)" , backgroundSize: "cover" , height: "100vh" , backgroundRepeat: "no-repeat" }}>
      <HeaderTitle/>
      <HeaderForm/>
    </header>
  
  )
}

export default Header
