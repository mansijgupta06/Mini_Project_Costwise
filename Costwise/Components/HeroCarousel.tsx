"use client"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { url } from 'inspector';
import Image from 'next/image';

const heroImages = [
  { imgUrl: '/assets/images/hero-2.svg', alt:'smartwatch'},
  { imgUrl: '/assets/images/hero-1.svg', alt:'bag'},
  { imgUrl: '/assets/images/hero-3.svg', alt:'lamp'},
  { imgUrl: '/assets/images/hero-4.svg', alt:'chair'},
  { imgUrl: '/assets/images/hero-5.svg', alt:'airflyer'},
]

const HeroCarousel = () => {
  return (
    <div className='pt-10'>
     <Carousel
     showThumbs={false}
     autoPlay
     infiniteLoop
     interval={2000}
     showArrows={false}
     showStatus={false}
     className='sm:pl-20'
     >
              {heroImages.map((image)=>(
                <Image
                src={image.imgUrl}
                alt={image.alt}
                width={484}
                height={484}
             
                className='object-contain sm:h-80 w-40'
                key={image.alt}/>
              ))}
     </Carousel>
     
   
    </div>
  )
}

export default HeroCarousel