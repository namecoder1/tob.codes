import { Separator } from '@/components/ui/separator'
import Pin from '@/components/ui/pin'
import { client } from '@/sanity/lib/client'
import { APPS_QUERY, LAST_APP_QUERY } from '@/sanity/lib/queries'
import { Download, Eye, LayoutGrid } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LastApp from '@/components/blocks/last-app'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { appStore, playStore } from '@/assets'

export const metadata: Metadata = {
	title: 'Apps | tob.codes',
	description: 'Lista delle apps sviluppate da me come indie developer',
	openGraph: {
		title: 'Apps | tob.codes',
		description: 'Lista delle apps sviluppate da me come indie developer',
		images: [
			{ url: 'https://tob.codes/og-image.jpeg' }
		]
	}
}

const AppsPage = async () => {
  const lastApp = await client.fetch(LAST_APP_QUERY)
  const apps = await client.fetch(APPS_QUERY)

  if (!lastApp) return null

  return (
    <div className='fade-in-alternate'>
      <div className='flex flex-col gap-3 mb-6'>
        <h1 className='heading-lg mb-2 flex items-center justify-start gap-2'>
          <div className="inline-block">
            <div className="bg-[#abff77] border-2 border-blue-950/20 rounded-2xl flex p-[8px] w-fit">
              <LayoutGrid className="inline-block" size={28} />
            </div>
          </div>
          Apps
        </h1>
        <Separator className='bg-black/20' />
      </div>
      <div className='flex flex-col'>
        <h2 className='heading-md mb-4'>Ultima Uscita</h2>
        <LastApp app={lastApp} />
      </div>
      <h2 className='heading-md mb-4 mt-16'>Tutte le apps</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {apps.map((app: any) => (
          <Card key={app.id} className='bg-white border border-black/20 rounded-[2rem] flex flex-col items-start gap-4 w-full'>
            <CardHeader>
              <CardTitle className='flex items-start justify-start gap-4'>
                <Image src={app.image} alt={app.title} width={100} height={100} className='rounded-3xl border border-black/20' />
                <div className='flex flex-col items-start'>
                  <h3 className='heading-sm'>{app.title}</h3>
                  <p className='text-sm text-black/50 mb-2 mt-1'>{app.tag.join(', ')}</p>
                  <Pin title={<span className='flex items-center gap-1'><Image src={app.platform === 'Android' ? playStore : appStore} alt={app.platform} width={20} height={20} /> {app.platform}</span>} />
                  </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{app.description}</p>
            </CardContent>
            <CardFooter className='flex gap-4 w-full'>
              <Button className='w-full' variant='outline' asChild>
                <Link href={`/apps/${app.slug}`}>
                  <Eye className='inline-block' size={16} />
                    Leggi di più
                </Link>
              </Button>
              <Button className='w-full' asChild>
                <Link href={`/apps/${app.slug}`}>
                  <Download className='inline-block' size={16} />
                    Scarica
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default AppsPage