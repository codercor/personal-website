import React, { ReactNode } from 'react'
import LinksWidget from '../components/LinksWidget'
import Navbar from '../components/Navbar'

interface IMainLayoutProps {
    children: ReactNode
}

export default function MainLayout(props: IMainLayoutProps) {
    return (
        <div className='w-full h-[100vh] bg-bgBlack border-2 px-5 pt-[50px] md:px-0'>
            <Navbar/>
            <LinksWidget/>
            <div className='md:max-w-[1280px] lg:max-w-[1440px] w-auto mx-auto'>
                {props.children}
            </div>
        </div>
    )
}