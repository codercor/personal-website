import AvatarImage from '../assets/avatar.png'
import { motion } from 'framer-motion'

export default function About() {
    return <> <div
        className='md:min-h-[140px] md:hidden block  min-h-[80px] w-full mx-auto relative'
    >
        <motion.div
            initial={{ 
                borderRadius: 0,

             }}
            animate={{
                borderRadius: 10,

                 }}
            transition={{
                duration: 1,
                type: "spring",
                stiffness: 100,
                repeat: Infinity,
                repeatType: "mirror",
            }}
        
        className="w-full bg-gray h-[55px] items-center flex flex-col gap-4">
            <div className="w-[80px] z-[2] bg-grayMatte rounded-full 
            animate-bounce
            hover:animate-spin
            border-[10px] border-green">
                <img src={AvatarImage} />
            </div>
            <span className='text-white absolute top-1 left-0 font-codaCaption'>01.</span>
            <p className='text-white font-coda text-[20px]'>Hi, I'm</p>
            <h1 className='text-white font-codaCaption text-[24px] md:text-[64px] z-[2]'>Mustafa Cor</h1>
            <p className='text-white opacity-[0.6] font-codaCaption text-[12px]'>I develop web applications</p>
            <p className='text-white font-codaCaption text-[12px] text-center'>
                I’m a full-stack developer at <a href="https://coinoxs.com" target="_blank" className='text-gold'>Coinoxs</a> company and a trainer for beginners.                     </p>
        </motion.div>

    </div >

        <div className='hidden md:block   min-w-full  min-h-[140px] mx-auto'>
            <div className='relative h-full max-w-[80vw] md:max-w-[600px] mx-auto pl-[50px]'>
                <div className="absolute rounded-md bg-gray w-full h-[80px] md:h-[140px] left-0 top-0"> </div>
                <span className='text-white absolute top-[-30px] left-0 font-codaCaption'>01.</span>
                <img className='md:w-[140px] hover:animate-spin md:h-[140px] h-[80px] absolute trans right-[-30px] md:right-[-70px] border-[10px] border-green rounded-full bg-grayMatte' src={AvatarImage} />
                <div className='pt-[56px]'>
                    <p className='text-white font-coda text-[24px]'>Hi, I'm</p>
                    <h1 className='text-white font-codaCaption text-[24px] md:text-[64px] z-[2]'>Mustafa Cor</h1>
                    <p className='text-white opacity-[0.6] font-codaCaption text-[12px]'>I develop web applications</p>
                    <p className='text-white font-codaCaption text-[12px]'>
                        I’m a full-stack developer at <a href="https://coinoxs.com" target="_blank" className='text-gold'>Coinoxs</a> company and a trainer for beginners.
                    </p>
                </div>
                {/* TEST GPG config 2 */}
            </div>
        </div>

    </>
}