
import TextBlock from '@/components/ui/text-block'
import { client } from '@/sanity/lib/client'
import { APP_SUPPORT_QUERY } from '@/sanity/lib/queries'

import { notFound } from 'next/navigation'
import React from 'react'

const AppSupportPage = async ({ searchParams }: { searchParams: Promise<{ id: string }> }) => {
  const { id } = await searchParams

  const app = await client.fetch(APP_SUPPORT_QUERY, { id })

  if (!app) {
    return notFound()
  }

  return (
    <div>
      <h1 className='heading-lg mb-2 flex items-center justify-start gap-2'>{app.title}</h1>
      <TextBlock value={app.body} />
    </div>
  )
}

export default AppSupportPage