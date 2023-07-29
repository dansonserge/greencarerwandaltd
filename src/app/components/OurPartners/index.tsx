import React from 'react';
import Image from 'next/image';
import {partners} from "./partnersList";


function OurPartners() {
  return (
    <div className='ml-10 mb-20'>
      <div className='gradient-accent-color font-black text-2xl'>Our Partners</div>
      <div className='flex overflow-x-auto gap-8 h-40 no-scrollbar'>
        {
          partners.map((partner, index)=>{
            return (
                <Image key={index} src={partner.image} alt={partner.name}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default OurPartners