import Image from 'next/image'
import Link from 'next/link'

import tobi from '@/assets/tobi.png'
import { ChevronRight } from 'lucide-react'

const Hero = () => {
	return (
		<section id='hero' className='my-10'>
			<h1 className='text-5xl break-words leading-tight font-bold max-w-2xl'>Creating exceptional <br /> websites that deliver results.</h1>
			<p className='max-w-3xl mt-3'>Mi chiamo Tobia Bartolomei e sono un Junior Front-end Web Developer, appassionato di tech e finanza personale.</p>
			<div className='flex gap-1 items-center justify-start border border-black/20 bg-black hover:bg-black/80 duration-200 rounded-3xl w-fit p-1 my-5'>
				<Link href='/about' className='flex'>
					<Image src={tobi} alt='Logo' width={30} height={30} className='w-sm rounded-full border-black/20 border-[1px] bg-white backdrop-blur-md mr-1' />
					<p className='px-1 flex items-center justify-center gap-1 text-white text-sm'>About me <ChevronRight className='inline-block mt-0.5' size={17} /></p>
				</Link>
			</div>
		</section>
	)
}

export default Hero