import React from 'react'
import Logo from '../assets/logo.svg'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center '>
      <img src={Logo} className="ml-[50px]" />
      <div className="flex items-center gap-[25px] px-[50px] bg-primary h-[80px]">
        <a href="#01" className="text-bgBlack font-rationale ">01.about</a>
        <a href="#03" className="text-bgBlack font-rationale">02.experience</a>
        <a href="#04" className="text-bgBlack font-rationale">03.projects</a>
        <a href="#05" className="text-bgBlack font-rationale">04.contact</a>
        <button className='bg-bgBlack text-white px-5 py-3 ml-[50px] rounded-lg border-b-[3px] border-r-[3px] border-green' >resume.pdf</button>
      </div>
    </div>
  )
}
