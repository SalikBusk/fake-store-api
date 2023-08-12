import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface CardSkeletonProps {
  cards: number;
}

const CardSkeleton = ({ cards }: CardSkeletonProps) => {
  return (
    <div className='grid grid-cols-4 gap-[10px]'>
      {Array(cards)
        .fill(0)
        .map((item, index) => (
          <figure key={index}>
            <Skeleton width={`100%`} height={`38vh`} />
            <figcaption>
              <Skeleton />
              <Skeleton count={2} />
            </figcaption>
          </figure>
        ))}
    </div>
  );
};

export default CardSkeleton;
