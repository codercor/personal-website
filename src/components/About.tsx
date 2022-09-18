import React from 'react'

import AvatarImage from '../assets/avatar.png'
export default function About() {
    return (
        <div className='mt-[200px] h-[140px]'>
            <div className='relative bg-gray h-full w-[600px] mx-auto pl-[50px]'>
                <span className='text-white absolute top-[-30px] left-0 font-codaCaption'>01.</span>
                <img className='w-[140px] h-[140px] absolute trans right-[-70px] border-[10px] border-green rounded-full bg-grayMatte' src={AvatarImage} />
                <div className='pt-[56px]'>
                    <p className='text-white font-coda text-[24px]'>Hi, I'm</p>
                    <h1 className='text-white font-codaCaption text-[64px]'>Mustafa Cor</h1>
                    <p className='text-white opacity-[0.6] font-codaCaption text-[12px]'>I develop web applications</p>
                    <p className='text-white font-codaCaption text-[12px]'>
                        I’m a full-stack developer at <a href="https://coinoxs.com" target="_blank" className='text-gold'>Coinoxs</a> company and a trainer for beginners.
                        I’m also computer engineering student at Cukurova University.
                    </p>
                </div>
               {/* TEST GPG config  */}
            </div>
        </div>
    )
}