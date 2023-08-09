import React from 'react'

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  hero?: boolean,
  card?: boolean,
}

const Heading: React.FC<HeadingProps> = ({ 
  title, 
  subtitle,
  center,
  hero,
  card
}) => {
  return ( 
    <div className={center ? 'text-center' : 'text-start'}>
      <div className={`
        font-bold
        ${hero ? "text-5xl" : "text-2xl"}
        ${hero ? "font-serif" : ""}
        ${card ? "text-[12px]" : "text-2xl"}
        ${card ? "font-serif" : ""}
        `}>
        {title}
      </div>
      <div className={`
        font-light
        text-neutral-500 
        mt-2
        ${hero ? "text-2xl" : "text-md"}
        ${hero ? "font-serif" : ""}
        ${card ? "text-sm" : "text-2xl"}
        ${card ? "font-serif" : ""}
      `}>
        {subtitle}
      </div>
    </div>
   );
}
 
export default Heading;