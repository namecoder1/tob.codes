import { Sidebar } from '@/components/blocks/sidebar'
import AboutBlock from '@/components/blocks/about-block'
import { ScrollArea } from '@/components/ui/scroll-area'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import Image from 'next/image'

import tobi from '@/assets/tobi.png'
import CS50 from '@/components/blocks/cs50'
import Skills from '@/components/blocks/skills'
import { client } from '@/sanity/lib/client'
import { ABOUT_WORKS_QUERY } from '@/sanity/lib/queries'

const AboutPage = async () => {
const works = await client.fetch(ABOUT_WORKS_QUERY)
  return (
    <section className="flex min-h-full gap-x-6">
      <Sidebar />
			<ScrollArea className="sm:h-[860px] w-fit rounded-md sm:pr-3 fade-in-alternate">
				<Image src={tobi} className="rounded-full border content-center p-2 bg-gray-100 border-black/20 w-28 mb-3 sm:hidden" width={50} height={50} alt="Foto Tobia Bartolomei" />
				<div className='sm:pl-5'>
					<hgroup>
						<h1 className='text-5xl font-extrabold tracking-tight max-w-[100px] sm:max-w-full'>Tobia Bartolomei</h1>
						<h2 className='text-3xl font-normal text-balance'>Junior Front-end Web Developer</h2>
					</hgroup>
					<CS50 />	
					<ul className='mt-4 flex items-center justify-start gap-x-1.5'>
						<li className='w-fit border border-black/20 px-2 py-1 rounded-xl text-sm'>
							<Link href='https://github.com/namecoder1' target='_blank' className='flex items-center justify-center gap-1'>
								<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" >
									<path d="M44,24c0,8.96-5.88,16.54-14,19.08V38c0-1.71-0.72-3.24-1.86-4.34c5.24-0.95,7.86-4,7.86-9.66c0-2.45-0.5-4.39-1.48-5.9 c0.44-1.71,0.7-4.14-0.52-6.1c-2.36,0-4.01,1.39-4.98,2.53C27.57,14.18,25.9,14,24,14c-1.8,0-3.46,0.2-4.94,0.61 C18.1,13.46,16.42,12,14,12c-1.42,2.28-0.84,4.74-0.3,6.12C12.62,19.63,12,21.57,12,24c0,5.66,2.62,8.71,7.86,9.66 c-0.67,0.65-1.19,1.44-1.51,2.34H16c-1.44,0-2-0.64-2.77-1.68c-0.77-1.04-1.6-1.74-2.59-2.03c-0.53-0.06-0.89,0.37-0.42,0.75 c1.57,1.13,1.68,2.98,2.31,4.19C13.1,38.32,14.28,39,15.61,39H18v4.08C9.88,40.54,4,32.96,4,24C4,12.95,12.95,4,24,4 S44,12.95,44,24z"></path>
								</svg>
								<p className='hidden sm:block'>GitHub</p>
							</Link>
						</li>
						<li className='w-fit border border-black/20 px-2 py-1 rounded-xl text-sm'>
							<Link href='https://github.com/namecoder1' target='_blank' className='flex items-center justify-center gap-1'>
								<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
									<path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
								</svg>
								<p className='hidden sm:block'>LinkedIn</p>
							</Link>
						</li>
						<li className='w-fit border border-black/20 px-2 py-1 rounded-xl text-sm'>
							<Link href='https://https://www.threads.net/@tobia.bartolomei' target='_blank' className='flex items-center justify-center gap-1'>
								<svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" width="20" height="20" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 439.999 511.429">
									<path fillRule="nonzero" d="M342.382 237.037a175.843 175.843 0 00-6.707-3.045c-3.947-72.737-43.692-114.379-110.428-114.805-38.505-.256-72.972 15.445-94.454 48.041l36.702 25.178c15.265-23.159 39.221-28.097 56.864-28.097.203 0 .408 0 .61.003 21.973.139 38.555 6.528 49.287 18.987 7.81 9.071 13.034 21.606 15.62 37.425-19.482-3.312-40.552-4.329-63.077-3.039-63.449 3.656-104.24 40.661-101.5 92.081 1.39 26.083 14.384 48.522 36.586 63.18 18.773 12.391 42.95 18.451 68.078 17.08 33.183-1.819 59.214-14.48 77.376-37.631 13.793-17.579 22.516-40.362 26.368-69.068 15.814 9.543 27.535 22.103 34.007 37.2 11.007 25.665 11.648 67.84-22.764 102.222-30.15 30.121-66.392 43.151-121.164 43.554-60.757-.45-106.707-19.934-136.582-57.914-27.976-35.563-42.434-86.93-42.973-152.675.539-65.745 14.997-117.113 42.973-152.675 29.875-37.979 75.824-57.464 136.581-57.914 61.197.455 107.948 20.033 138.967 58.195 15.21 18.713 26.677 42.248 34.236 69.688l43.011-11.476c-9.163-33.775-23.581-62.881-43.203-87.017C357.031 25.59 298.872.519 223.935 0h-.3C148.851.518 91.343 25.683 52.709 74.794 18.331 118.498.598 179.308.002 255.534l-.002.18.002.18c.596 76.226 18.329 137.037 52.707 180.741 38.634 49.11 96.142 74.277 170.926 74.794h.3c66.487-.462 113.352-17.868 151.96-56.442 50.511-50.463 48.991-113.717 32.342-152.548-11.944-27.847-34.716-50.464-65.855-65.402zm-114.795 107.93c-27.809 1.566-56.7-10.917-58.124-37.652-1.056-19.823 14.108-41.942 59.83-44.577 5.237-.302 10.375-.45 15.422-.45 16.609 0 32.146 1.613 46.272 4.702-5.268 65.798-36.173 76.483-63.4 77.977z"/>
								</svg>
								<p className='hidden sm:block'>Threads</p>
							</Link>
						</li>
						<li className='w-fit border border-black/20 px-2 py-1 rounded-xl text-sm'>
							<Link href='mailto:contact@tob.codes' target='_blank' className='flex items-center justify-center gap-1'>
								<Mail size={20} />
								<p className='hidden sm:block'>Email</p>
							</Link>
						</li>
					</ul>
					<p className='leading-7 my-6'>
						Sono uno sviluppatore italiano di Pesaro appassionato del mondo tech e di finanza personale.
						<span className='font-bold'> Creo e pubblico</span> web apps,
						 mi piace <span className='font-bold'>sperimentare con AI</span> e 
						 annessi tools e adoro <span className='font-bold'>risolvere i problemi</span> della
						  mia vita quotidiana programmando.
					</p>
				</div>
				<AboutBlock id='intro' title='Introduzione'>
					<p className='leading-7 mb-2'>
						Fin da piccolino ho sviluppato una <span className='font-bold'>forte curiosità verso i computer</span> tanto da passarci interi pomeriggi, 
						modificando impostazioni e addentrandomi sempre più a fondo (spesso combinando problemi).
					</p>
					<p className='leading-7 mb-2'>
						Verso i 17 anni ho deciso di scoprire il mondo dello sviluppo web, ma con un approccio più semplice e meno approfondito, 
						usando WordPress e la creazione a blocchi tramite Elementor. Ho continuato questa strada finchè non ho sentito il <span className='font-bold'>bisogno
						di capirci di più</span> personalizzando ancora più a fondo le mie creazioni.
					</p>
					<p className='leading-7'>
						Ho incominciato a studiare la vera programmazione a Gennaio del 2024 partendo dalle basi di HTML e CSS.
						Sono molto curioso e motivato nell&apos;approccio a questo mondo, mi piace studiare il funzionamento delle cose &apos;sotto il cofano&apos; 
						per capirle davvero appieno. Mi piace creare UI minimal e moderne, aiutare l&apos;utente guidandolo attraverso la navigazione
						dentro al sito, dando una particolare importanza alla cura dei dettagli.
					</p>
				</AboutBlock>
				<AboutBlock id='skills' title='Competenze'>
					<Skills />
				</AboutBlock>
				<AboutBlock id='experience' title='Esperienza'>
					<p className='leading-7 mb-2'>
						Ho avuto la fortuna di scoprire il corso di Harvard: CS50 Introduction to Computer Science; mi sono appassionato
						molto e devo dire che non ci ho messo tanto a completarlo.
					</p>
					<p className='leading-7 mb-2'>
						Il corso è stato incredibilmente <span className='font-bold'>ben strutturato</span> e mi ha fornito una <span className='font-bold'>solida base di conoscenze</span>  in informatica. 
						Grazie a CS50, ho acquisito competenze in vari linguaggi di programmazione e ho imparato a risolvere problemi complessi in modo efficace.
					</p>
					<p className='leading-7 mb-2'>
						Prima di questo ho intrapreso un corso sulla nota piattaforma <Link href='https://www.oreilly.com/' target='_blannk' className='font-bold'>O&apos;Reilly </Link>
						chiamato <span className='italic'>&quot;Modern HTML & CSS from the Beginning (Including SASS)&quot;</span>; un videocorso di 24.5 ore creato da Brad Traversy che mi ha 
						permesso di introdurmi nel mondo del web development.
					</p>
				</AboutBlock>
				<AboutBlock id='projects' title='Progetti'>
					<ul className='flex flex-col items-center justify-center gap-y-2 my-2'>
						{works.map((work) => (
							<Link href={`${work.link}`} target='_blank' key={work.id} className='flex items-start justify-between w-full'>
								<div className='flex flex-col-reverse items-start justify-start'>
									<hgroup className='flex flex-col items-start justify-start'>
										<h3 className='text-lg sm:text-2xl font-bold'>{work.title}</h3>
										<h4 className='text-lg underline underline-offset-2'>{work.category}</h4>
									</hgroup>
								</div>
								<p className='border py-1.5 px-2 border-black/20 rounded-2xl text-sm sm:text-base'>{work.pubDate}</p>
							</Link>
						))}
					</ul>
				</AboutBlock>
				<AboutBlock id='contact' title='Contatti'>
					<p className='mb-2'>Puoi contattarmi all&apos;indirizzo email: <Link href='mailto:contact@tob.codes' className='underline underline-offset-2'>contact@tob.codes</Link>.</p>
					<p>Per qualsiasi problema riscontrato su questo sito web si prega di indirizzare le proprie segnalazioni all indirizzo email: <Link href='mailto:help@tob.codes' className='underline underline-offset-2'>help@tob.codes</Link>.</p>
				</AboutBlock>
			</ScrollArea>
    </section>
  )

}

export default AboutPage