import React from 'react'
import Heading from './Heading'

interface HeroProps {
    background?: string,
    image?: string,
    title: string,
    subtitle: string,
}

const Hero: React.FC<HeroProps> = ({
    background,
    image,
    title,
    subtitle,
}) => {
  return (
    <section className='w-full h-[85vh] overflow-hidden rounded-[20px]'>
        <figure className='relative w-full h-full'>
            {background ? (
                <img className='w-full h-full object-cover' src={background} alt="" />
            ): (
                <div className='w-full h-full bg-gray-200'/>
            )}
            <figcaption className='absolute inset-0 w-full h-full flex flex-row justify-around items-center'>
                <div>
                    <Heading title={title} subtitle={subtitle} hero/>
                </div>
                <img src={image} alt="" />
            </figcaption>
        </figure>
    </section>
  )
}

export default Hero