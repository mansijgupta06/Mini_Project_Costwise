import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navIcons = [
  {src:'/assets/icons/search.svg', alt:'search' },
  {src:'/assets/icons/black-heart.svg', alt:'black-heart'},
  {src:'/assets/icons/user.svg', alt:'seablackuser'}
]

const Navbar = () => {
  return (
    <header className="w-full py-3 ">
      <nav className='nav flex flex-row justify-between '>
      <Link href="/" className= "flex items-center gap-1 ">
       <Image
       src="./assets/icons/logo.svg"
       width={27}
       height={27}
       alt='logo'/>
       <p className='"nav-logo text-xl font-extrabold'>
        Cost<span className='text-primary font-extrabold'>Wise</span>
       </p>
      </Link>
      <div className='flex items-center gap-10'>
        {navIcons.map((icon)=>(
          <Image
          key={icon.alt}
          src={icon.src}
          alt={icon.alt}
          width={28}
          height={28}/>
          ))}
      </div>
      </nav>

    </header>
  )
}

export default Navbar