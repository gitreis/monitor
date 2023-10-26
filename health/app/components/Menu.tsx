'use client'

import { Calendar, List, Pen } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Add from './Add'
import Print from './Print'
import Room from './Bed'
import Alert from './Alert'
import Start from './Start'

const Menu = () => {
  return (
      <ul className='bg-blue-300 basis-8 '>
        <li><Link href='/'><Start></Start></Link></li>
        <li><Link href='/register'><Add></Add></Link></li>
        <li><Link href='/edit'> <Pen></Pen></Link></li>
        <li><Link href='/pacients'><List></List></Link></li>
        <li><Link href='/notifications'><Alert></Alert></Link></li>
        <li><Link href='/calendar'><Calendar></Calendar></Link></li>
        <li><Link href='/report'><Print></Print></Link></li>
        <li><Link href='/room'><Room></Room></Link></li>
      </ul>
  )
}

export default Menu