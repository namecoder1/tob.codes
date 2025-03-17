import WorkCard from '@/components/blocks/work'
import { client } from '@/sanity/lib/client'
import { LAST_WORK_QUERY, WORKS_QUERY } from '@/sanity/lib/queries'
import React from 'react'

import { FolderGit2 } from 'lucide-react'
import LastWork from '@/components/blocks/last-work'
import { Separator } from '@/components/ui/separator'

const WorkPage = async () => {
  const works = await client.fetch(WORKS_QUERY)
  const work = await client.fetch(LAST_WORK_QUERY)
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
			<h2 className='heading-md mb-4'>Tutti i progetti</h2>
      <div className='grid grid-cols-1 gap-y-10'>
        {works.map((work) => (
          <WorkCard work={work} key={work.id} />
        ))}
      </div>
    </section>
	)
}

export default WorkPage