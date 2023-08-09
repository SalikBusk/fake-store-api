import React from 'react'

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  hero?: boolean,
}

const Heading: React.FC<HeadingProps> = ({ 
  title, 
  subtitle,
  center,
  hero
}) => {
  return ( 
    <div className={center ? 'text-center' : 'text-start'}>
      <div className={`
        font-bold
        ${hero ? "text-5xl" : "text-2xl"}
        ${hero ? "font-serif" : ""}
        `}>
        {title}
      </div>
      <div className={`
        font-light
        text-neutral-500 
        mt-2
        ${hero ? "text-2xl" : "text-md"}
        ${hero ? "font-serif" : ""}
      `}>
        {subtitle}
      </div>
    </div>
   );
}
 
export default Heading;