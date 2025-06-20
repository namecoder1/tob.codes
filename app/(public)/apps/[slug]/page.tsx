import { client } from '@/sanity/lib/client'
import { APP_QUERY } from '@/sanity/lib/queries'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'
import TextBlock from '@/components/ui/text-block'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import Pin from '@/components/ui/pin'
import { appStore, playStore } from '@/assets'

// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
// }

const AppPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params

  const app = await client.fetch(APP_QUERY, { slug })

  if (!app) {
    return notFound()
  }

  return (
    <div className='fade-in-alternate'>
      <div className='flex flex-col gap-3 mb-4'>
        <h1 className='heading-lg mb-2 flex items-center justify-start gap-2'>
          <div className="inline-block mr-0.5">
            <Image src={app.image || ''} alt={app.title || ''} width={50} height={50} className='rounded-2xl border border-black/20' />
          </div>
          {app.title}
        </h1>
        <p className='text-base text-black/50 p-6 mb-4 rounded-2xl bg-white'>
        {app.description}
        </p>
        <Separator className='bg-black/20' />
        <div className='flex items-center justify-between gap-2'>
          <p className='text-sm text-black/50 flex items-center justify-start gap-2'>
            {app.tag?.map((tag: string) => <span key={tag} className='text-white bg-black rounded-full px-2 py-1'>{tag}</span>)}
          </p>
          <Pin title={<span className='flex items-center gap-1'><Image src={app.platform === 'Android' ? playStore : appStore} alt={app.platform || ''} width={20} height={20} /> {app.platform}</span>} />
        </div>
        <TextBlock value={app.text} />
        <div className='flex gap-4 items-center justify-center'>
          <Button asChild className='w-full'>
            <Link href={`${app.slug}/support?id=${app.id}`}>
              Support
            </Link>
          </Button>
          <Button asChild className='w-full'>
            <Link href={`${app.slug}/privacy-policy?id=${app.id}`}>
              Privacy Policy
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AppPage