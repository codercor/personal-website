import React from 'react'
import Logo from '../assets/logo.svg'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'




export default function Navbar() {

  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <MotionConfig
      transition={{ duration: 1, type: "spring", stiffness: 100, delay: 2 }}
    >
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
        }}

        className='hidden md:flex relative z-[3] justify-between items-center '>
        <img src={Logo} className="ml-[50px] " />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          className="flex items-center gap-[25px] px-[50px] bg-primary h-[80px]">
          <a href="#01" className="text-bgBlack font-rationale ">01.about</a>
          <button
            onClick={() => {
              window.open('/resume.pdf')
            }}
            className='bg-bgBlack cursor-pointer text-white px-5 py-3 ml-[50px] rounded-lg border-b-[3px] border-r-[3px] border-green' >resume.pdf</button>
        </motion.div>
      </motion.div>

      <div className='md:hidden flex justify-between items-center'>
        <img src={Logo} className="w-[50px]" />
        <Navbar.HambugerButton
          onClick={() => setIsOpen(!isOpen)}
          isOpen={isOpen}
        />
        <AnimatePresence mode="wait" >
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -100, x: 0 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 100,
              }}
              exit={{ opacity: 0, y: -100 }}
              className="flex w-full left-0 top-0 h-screen flex-col items-center absolute justify-center gap-[25px] z-[3]  bg-secondary bg-opacity-100">
              <a href="#01" className="text-bgBlack font-rationale ">01.about</a>
              <button
                onClick={() => {
                  window.open('/resume.pdf')
                }}
                className='bg-bgBlack text-white px-5 py-3 cursor-pointer  rounded-lg border-b-[3px] border-r-[3px] border-green' >resume.pdf</button>

            </motion.div>
          )}


        </AnimatePresence>
      </div>



    </MotionConfig>
  )
}

Navbar.HambugerButton = ({
  onClick,
  isOpen,
}: {
  onClick: () => void
  isOpen: boolean
}) => {
  const transition = { duration: 1, type: "spring", stiffness: 200 }
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0 z-50 md:hidden"
    >

      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: {
            rotate: 45 * 11, y: 10,
            backgroundColor: "#B2FF",
          },
          closed: {
            rotate: 0, y: 0,
            backgroundColor: "#B2FF9E",

          },
        }}
        transition={transition}
        className="w-8 h-1 rounded-full"
      />

      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 0, scale: 0.4, backgroundColor: "#B2FF", },
          closed: { opacity: 1, scale: 1, backgroundColor: "#B2FF9E", },
        }}
        transition={transition}
        className="w-8 h-1  rounded-full"
      />

      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { rotate: -45 * 11, y: -10, backgroundColor: "#B2FF", },
          closed: { rotate: 0, y: 0, backgroundColor: "#B2FF9E", },
        }}
        transition={transition}
        className="w-8 h-1 rounded-full"
      />
    </button>
  )
}
