import React from 'react'
import Image from 'next/image'
import Twitter from '../../public/assets/social_twitter.png'
import Google from '../../public/assets/social_google.png'
import Discord from '../../public/assets/social_discord.png'
import Facebook from '../../public/assets/social_facebook.png'
import Instagram from '../../public/assets/social_instagram.png'

type Props = {
    isDark?:boolean;
};

export default function SocialLinks({isDark=false}:Props){
  return (
    <div className='flex justify-between items-center gap-7'>
        <a href='https://twitter.com' target='_blank' rel="noreferrer">
            <Image
            className={`${isDark?"brightness-0":""} hover:opacity-50`}
            src={Twitter}
            alt='twitter'
            height={20}
            width={20}
            />
        </a>
        <a href='https://facebook.com' target='_blank' rel="noreferrer">
            <Image
            className={`${isDark?"brightness-0":""} hover:opacity-50`}
            src={Facebook}
            alt='facebook'
            height={20}
            width={20}
            />
        </a>
        <a href='https://instagram.com' target='_blank' rel="noreferrer">
            <Image
            className={`${isDark?"brightness-0":""} hover:opacity-50`}
            src={Instagram}
            alt='instagram'
            height={20}
            width={20}
            />
        </a>
        <a href='https://google.com' target='_blank' rel="noreferrer">
            <Image
            className={`${isDark?"brightness-0":""} hover:opacity-50`}
            src={Google}
            alt='google'
            height={20}
            width={20}
            />
        </a>
        <a href='https://discord.com' target='_blank' rel="noreferrer">
            <Image
            className={`${isDark?"brightness-0":""} hover:opacity-50`}
            src={Discord}
            alt='discord'
            height={20}
            width={20}
            />
        </a>
    </div>
  )
}