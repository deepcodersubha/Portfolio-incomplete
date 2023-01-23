import React, { useState,useEffect } from 'react'

import Navbar from './components/Navbar'
import DotGroup from './components/DotGroup'
import Landing from './components/Landing'

import useMediaQuery from './hooks/useMediaQuery'
import MySkills from './components/MySkills'



const App = () => {

  const [selectPage, setSelectPage] = useState('home')
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])


  return (
    <div className='bg-deep-blue'>
      <Navbar
        selectPage={selectPage}
        setSelectPage={setSelectPage}
        isTopOfPage={isTopOfPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup 
          selectPage={selectPage}
          setSelectPage={setSelectPage}
          />
        )}
        <Landing setSelectPage={setSelectPage} />
        <div className='w-5/6 mx-auto md:h-full'>
          <MySkills />
        </div>
      </div>

    </div>
  )
}

export default App 