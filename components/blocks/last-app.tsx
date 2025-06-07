import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Pin from '../ui/pin'
import  { playStore, appStore }  from '@/assets/index'

const LastApp = ({ app }: { app: any }) => {
  const { title, slug, image, description, platform } = app

  return (
    <Link key={app.id} href={`/apps/${slug}`} className='bg-white border border-black/20 rounded-[2rem] p-4 flex flex-col sm:flex-row items-center gap-4'>
      <Image 
        priority 
        src={image || ''} 
        alt={`${title} logo`} 
        width={100}
        height={100}
        className='object-cover h-full w-1/4 shadow-sm rounded-3xl border border-gray-300' 
      />		
      <div className='flex w-full flex-col justify-between h-full gap-2 p-2'>
        <hgroup className='flex items-center justify-between gap-1'>
          <h2 className='heading-md'>{title}</h2>
          <Pin title={<span className='flex items-center gap-1'><Image src={platform === 'Android' ? playStore : appStore} alt={platform} width={20} height={20} /> {platform}</span>} />
        </hgroup>
        <p className='text-sm text-black/50 w-full'>{description}</p>
      </div>
    </Link>
  )
}

export default LastApp