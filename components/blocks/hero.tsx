import Image from 'next/image'
import Link from 'next/link'

import tobi from '@/assets/tobi.png'
import { ChevronRight } from 'lucide-react'

const Hero = () => {
	return (
		<section id='hero' className='flex flex-col items-center justify-center text-center min-h-[55vh] my-10'>
			<h1 className='text-7xl md:text-8xl font-bold leading-tight'>
				<span>Creating</span>{' '}
				<span className='bg-gradient-to-r from-yellow-400 via-red-400 to-blue-500 text-transparent bg-clip-text'>exceptional</span>
				<br />
				<span>websites</span>
			</h1>
			
			<p className='text-gray-600 text-xl md:text-2xl mt-8 max-w-2xl'>
				Ciao, sono Tobia Bartolomei, un Junior Front-end Web Developer, appassionato di tech, AI e finanza personale.
			</p>

			<div className='flex gap-1 items-center justify-center border border-black/20 bg-black/80 hover:bg-black duration-200 rounded-full w-fit p-2 mt-12'>
				<Link href='/about' className='flex gap-x-2'>
					<Image src={tobi} alt='Logo' width={30} height={30} className='w-9 rounded-full border-black/20 border-[1px] bg-white backdrop-blur-md mr-1' />
					<p className='px-1 flex items-center justify-center gap-1 text-white text-md'>About me <ChevronRight className='inline-block mt-0.5' size={20} /></p>
				</Link>
			</div>
		</section>
	)
}

export default Hero