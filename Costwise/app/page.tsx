import HeroCarousel from '@/Components/HeroCarousel'
import Searchbar from '@/Components/Searchbar'
import Image from 'next/image'
import React from 'react'

const home = () => {
  return (
    <>
    <section className='px-6 md:px-20 py-10'>
      <div className='flex flex-col pr-4 xl:flex-row  gap-20'>
        <div className='flex flex-col xl:w-[50%] justify-center '>
          <p className='small-text w-full flex flex-row pt-3 text-primary' >
            Smart Shopping Starts here:
            <Image
            src='./assets/icons/arrow-right.svg'
            alt='arrow-right'
            width={16}
            height={16}/>
          </p>
          <h1 className='head-text'>
            Unleash the Power of <span className = 'text-primary'> CostWise</span>
          </h1>
          <p className='mt-4'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
          </p>
          <Searchbar/>
        </div>
        <div className=' xl:w-[40%]'>
        <HeroCarousel/>
        </div>
      </div>
    </section>





    <section className='trending-section px-4'>
      <h2 className="section-text ">Trending</h2>

      <div className='flex flex-wrap gap-x-8 gap-y-19'>
        {['Apple Iphone 15 pro', 'Book', 'Sneakers'].map((product)=>
        (<div> {product}</div>)
        )}

      </div>

    </section>
    
    </>
  )
}

export default home