import Image from 'next/image'
import React from 'react'

import cs50 from '@/assets/cs50.png'

const CS50 = () => {
	return (
		<div className="flex items-center backdrop-blur-sm bottom-3 right-3 border border-black/20 px-3 py-2 rounded-2xl w-fit my-2 gap-2">
			<Image src={cs50} alt='Harvard School' width={30} height={30} />
			<div className='flex flex-col items-start justify-start'>
				<p className='font-semibold'>Harvard School of Engineering and Applied Sciences</p>
				<p className='text-sm'>HarvardX: CS50&apos;s Introduction to Computer Science</p>
			</div>
		</div>
	)
}

export default CS50


