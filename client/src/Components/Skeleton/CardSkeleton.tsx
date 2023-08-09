import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface CardSkeletonProps {
  cards: number;
}

const CardSkeleton = ({ cards }: CardSkeletonProps) => {
  return (
    <div>
      {Array(cards)
        .fill(0)
        .map((item, index) => (
          <figure key={index}>
            <Skeleton width={`100%`} height={`38vh`} />
            <figcaption>
              <Skeleton />
              <Skeleton count={3} />
            </figcaption>
          </figure>
        ))}
    </div>
  );
};

export default CardSkeleton;
