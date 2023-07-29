import React from 'react';
import Image from 'next/image';
import {partners} from "./partnersList";


function OurPartners() {
  return (
    <div className='ml-20 mb-20'>
      <div>Our Partners</div>
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