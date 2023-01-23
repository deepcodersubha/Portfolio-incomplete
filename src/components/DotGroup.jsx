import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const DotGroup = ({ selectPage, setSelectPage }) => {
const selectedStyle = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`
    return (
        <div className='flex flex-col gap-6 fixed top-[60%] right-7  '>
            <AnchorLink className={`${selectPage === 'home' ? selectedStyle : "bg-dark-grey"} w-3 h-3 rounded-full `} href="#home" onClick={() => setSelectPage('home')}>
            </AnchorLink>

            <AnchorLink className={`${selectPage === 'skills' ? selectedStyle : "bg-dark-grey"} w-3 h-3 rounded-full `} href="#skills" onClick={() => setSelectPage('skills')}>
            </AnchorLink>

            <AnchorLink className={`${selectPage === 'projects' ? selectedStyle : "bg-dark-grey"} w-3 h-3 rounded-full `} href="#projects" onClick={() => setSelectPage('projects')}>
            </AnchorLink>
            
            <AnchorLink className={`${selectPage === 'testimonials' ? selectedStyle : "bg-dark-grey"} w-3 h-3 rounded-full `} href="#testimonials" onClick={() => setSelectPage('testimonials')}>
            </AnchorLink>
            <AnchorLink className={`${selectPage === 'contact' ? selectedStyle : "bg-dark-grey"} w-3 h-3 rounded-full `} href="#contact" onClick={() => setSelectPage('contact')}>
            </AnchorLink>

        </div>
    )
}

export default DotGroup