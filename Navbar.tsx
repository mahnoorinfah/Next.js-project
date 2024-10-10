import Link from 'next/link';
import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const Navebar = () => {
  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-centre '>
        <div className='text-x1 font-medium '>MAHNOOR
            <ul className='gap-10 lg:gap-16 hidden md:flex text-orange-500 '>
                <li className='menuLink' ><Link href='#head'>Portfolio</Link></li>
                <li className='menuLink'><Link href='#about'>About</Link></li>
                <li className='menuLink'><Link href='#contact'>Contact </Link></li>

            </ul>
            <GiHamburgerMenu className='md:hidden' size={30}/>
        </div>
      </div>
    </div>
  )
}

export default Navebar
