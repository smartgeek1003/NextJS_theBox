import Link from 'next/link'
import { useState } from 'react'
import cn from 'classnames'
import Image from 'next/image'

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

  return (
    <section className='fixed z-10 w-full bg-white' data-scroll-section>
      <div className='flex flex-wrap items-center justify-between mx-6 mt-2 sm:mx-4 md:mx-12'>
        <div>
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
        <button
          className='flex items-center px-3 py-2 text-white border border-white rounded md:hidden'
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}>
          <svg
            className='fill-current h-7 w-7'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
           style={{ background: "black" , border : "black solid 2px" , borderRadius : "2px 2px"}}>
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'/>
          </svg>
        </button>
        <ul className={cn(
            'md:flex flex-col rounded shadow-sm bg-b-gray md:bg-transparent p-6 md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto float-right',
            mobileMenuIsOpen ? `block menu-drop` : `hidden`
          )}
        >
          {[
            { title: 'Home', route: '#header' },
            { title: 'About Us', route: '#aboutUs' },
            { title: 'Projects', route: '#projects' },
            { title: 'Services', route: '#services' },
            { title: 'Contact Us', route: '#contactUs' },
          ].map(({ route, title}, key) => (
            <li className='mt-3 md:mt-0 md:ml-6' key={key}>
                <a className='inline-block mr-16 text-lg text-black md:block hover:text-yellow-300' href={ route } data-scroll-to>{title}</a>
            </li>
          ))}
          <div
            className={cn(
              'flex mt-6 justify-between',
              mobileMenuIsOpen ? `block` : `hidden`
            )}
          >
          </div>
        </ul>
      </div>
    </section>
  )
}
