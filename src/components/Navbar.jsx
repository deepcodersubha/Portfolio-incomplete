import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../hooks/useMediaQuery'

import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'

const Link = ({ page, selectPage, setSelectPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink className={`${selectPage === lowerCasePage ? "text-yellow" : ""}  hover:text-yellow transition duration-500`} href={`#${lowerCasePage}`} onClick={() => setSelectPage(lowerCasePage)}>
            {page}
        </AnchorLink>
    )
}

const Navbar = ({ isTopOfPage ,selectPage, setSelectPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false)
    const isAboveSmallScreen = useMediaQuery("(min-width:768px)")
    const navbarbackground = isTopOfPage ? "" : "bg-red";

    return (
        <nav className={`${navbarbackground} z-40 w-full fixed top-0 py-6 `}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold">PortFolio</h4>
                {isAboveSmallScreen ? (
                    <div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
                        <Link page="Home"
                            selectPage={selectPage}
                            setSelectPage={setSelectPage} />
                        <Link page="Skills"
                            selectPage={selectPage}
                            setSelectPage={setSelectPage} />
                        <Link page="Projects"
                            selectPage={selectPage}
                            setSelectPage={setSelectPage} />
                        <Link page="Testimonials"
                            selectPage={selectPage}
                            setSelectPage={setSelectPage} />
                        <Link page="Contact"
                            selectPage={selectPage}
                            setSelectPage={setSelectPage} />

                    </div>
                ) : (
                    <div>
                        <button className='rounded-full bg-red p-2' onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <GiHamburgerMenu />
                        </button>
                        {/* mobile menu */}
                        {!isAboveSmallScreen && isMenuToggled && (
                            <div className='fixed right-0 bottom-0 h-full bg-blue w-[300px]'>
                                <div className='flex justify-end p-12 '>
                                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}><RxCross2 /></button>
                                </div>
                                <div className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue' >
                                    <Link page="Home"
                                        selectPage={selectPage}
                                        setSelectPage={setSelectPage} />
                                    <Link page="Skills"
                                        selectPage={selectPage}
                                        setSelectPage={setSelectPage} />
                                    <Link page="Projects"
                                        selectPage={selectPage}
                                        setSelectPage={setSelectPage} />
                                    <Link page="Testimonials"
                                        selectPage={selectPage}
                                        setSelectPage={setSelectPage} />
                                    <Link page="Contact"
                                        selectPage={selectPage}
                                        setSelectPage={setSelectPage} />
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar