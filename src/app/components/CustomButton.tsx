import Link from 'next/link'
import React from 'react'

const CustomButton = ({text}:{text: string}) => {
  return (
    <Link href={''} className="customButtonOne">{text}</Link>
  )
}

export default CustomButton