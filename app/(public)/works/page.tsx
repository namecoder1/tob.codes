import WorkCard from '@/components/blocks/work'
import { client } from '@/sanity/lib/client'
import { LAST_WORK_QUERY, PERS_WORKS_QUERY, WORKS_QUERY } from '@/sanity/lib/queries'
import React from 'react'

import { FolderGit2 } from 'lucide-react'
import LastWork from '@/components/blocks/last-work'
import { Separator } from '@/components/ui/separator'
import { Metadata } from 'next'
import PersWorkCard from '@/components/blocks/pers-work'

export const metadata: Metadata = {
	title: 'Progetti | tob.codes',
	description: 'Progetti per clienti e personali realizzati da Tobia Bartolomei',
	openGraph: {
		title: 'Progetti | tob.codes',
		description: 'Progetti per clienti e personali realizzati da Tobia Bartolomei',
		images: [
			{ url: 'https://tob.codes/og-image.jpeg' }
		]
	}
}

// Add revalidation to ensure content is fresh
export const revalidate = 60

const WorkPage = async () => {
  const works = await client.fetch(WORKS_QUERY)
  const work = await client.fetch(LAST_WORK_QUERY)
  const persWorks = await client.fetch(PERS_WORKS_QUERY)
	return (
    <section className='fade-in-alternate'>
      <div className='flex flex-col gap-3 mb-6'>
        <h1 className='heading-lg mb-2 flex items-center justify-start gap-2.5'>
          <div className="inline-block">
            <div className="bg-[#FFDD4B] border-2 border-yellow-700/20 rounded-2xl flex p-[8px] w-fit">
              <FolderGit2 className="inline-block" size={28} />
            </div>
          </div>
          Progetti
        </h1>
        <Separator className='bg-black/20' />
      </div>
      <div>
        <h2 className='heading-md mb-4'>Ultimo Progetto</h2>
        <LastWork work={work} />
      </div>
      <Separator className='my-10 md:my-16' />
			<h2 className='heading-md mb-4'>Progetti Lavorativi</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {works.map((work) => (
          <WorkCard work={work} key={work.id} />
        ))}
      </div>
      <Separator className='my-10 md:my-16' />
			<h2 className='heading-md mb-4'>Progetti Personali</h2>
      <div className='grid grid-cols-1 gap-y-6'>
        {persWorks.map((work) => (
          <PersWorkCard persWork={work} key={work.id} />
        ))}
      </div>
    </section>
	)
}

export default WorkPage