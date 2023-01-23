import React from 'react'
import { RxLinkedinLogo } from 'react-icons/rx'
import { AiFillFacebook,AiFillInstagram } from 'react-icons/ai'


const SocialMediaIcons = () => {
    return (
        <div className='flex justify-center md:justify-start my-10 gap-7'>
            <a
                className='hover:opacity-50 duration-500 transition'
                href="https://www.linkedin.com"
                target='_blank'
                rel='noreferrer'>
                <RxLinkedinLogo size={'40px'}/>
            </a>
            <a
                className='hover:opacity-50 duration-500 transition'
                href="https://www.facebook.com"
                target='_blank'
                rel='noreferrer'>
                <AiFillFacebook size={'40px'}/>
            </a>
            <a
                className='hover:opacity-50 duration-500 transition'
                href="https://www.instagram.com"
                target='_blank'
                rel='noreferrer'>
                <AiFillInstagram size={'40px'}/>
            </a>
            
        </div>
    )
}

export default SocialMediaIcons