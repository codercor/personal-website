import React, { ReactNode, forwardRef } from 'react'
import LinksWidget from '../components/LinksWidget'
import Navbar from '../components/Navbar'

interface IMainLayoutProps {
    children: ReactNode,
    ref?: any
}

export default forwardRef(function MainLayout(props: IMainLayoutProps) {
    return (
        <div
            ref={props.ref}
            className='md:max-w-[1280px] lg:max-w-[1440px] relative mx-auto w-full h-[100vh] bg-bgBlack  px-2 pt-[50px] md:px-0'>
            <Navbar />
            <LinksWidget />
            <div className='md:max-w-[1280px] lg:max-w-[1440px] h-[400px] w-full mx-auto '>
                {props.children}
            </div>
        </div>
    )
})