import React from 'react'

interface ProductGalleryProps {
    image: string,
    title: string,
}

const ProductGallery: React.FC<ProductGalleryProps> = ({image, title}) => {
  return (
    <section>
        <img className='w-full h-[70vh] object-contain' src={image} alt={title} />
    </section>
  )
}

export default ProductGallery