import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface ProductHeadProps {
    category: string,
    title: string,
    description: string,
}

export const ProductHead: React.FC<ProductHeadProps> = ({
    category,
    title,
    description
}) => {
  return (
    <div>
        <p className='font-[400] text-md text-neutral-500'>
            {category}
        </p>
        <h1 className='font-bold text-2xl text-black mt-2'>
            {title }
        </h1>
        <p className='font-[400] text-md text-neutral-500 my-5'>
            {description}
        </p>
    </div>
  )
}

export const ProductHeadSkeleton = () => {
    return (
        <div>
        <p>
            <Skeleton width={`25%`}/>
        </p>
        <h1 className='mt-2'>
            <Skeleton width={`35%`}/>
        </h1>
        <p className='my-5'>
            <Skeleton count={4}/>
        </p>
    </div>
    )
}