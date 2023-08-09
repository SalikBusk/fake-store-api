import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const HeroSkeleton = () => {
  return (
    <div>
        <Skeleton width={`100%`} height={`85vh`}/>
    </div>
  )
}

export default HeroSkeleton