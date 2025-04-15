import { client } from "@/sanity/lib/client";
import Hero from "@/components/blocks/hero";
import { LAST_ARTICLE_QUERY, LAST_WORK_QUERY } from "@/sanity/lib/queries";
import LastArticle from "@/components/blocks/last-article";
import LastWork from "@/components/blocks/last-work";
import CertificateSwapper from "@/components/blocks/cert-swapper";

import x_certificate from '@/assets/cs50x-cert.png'
import p_certificate from '@/assets/cs50p-cert.png'

import { BookOpenText, FolderGit2, GraduationCap, LibraryBig } from 'lucide-react'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home | tob.codes',
  description: 'Sviluppatore web appassionato di tecnologia e innovazione. Portfolio, progetti e articoli su web development, React, Next.js e molto altro.',
  openGraph: {
    title: 'Home | tob.codes',
    description: 'Sviluppatore web appassionato di tecnologia e innovazione. Portfolio, progetti e articoli su web development, React, Next.js e molto altro.',
    images: [
      { url: 'https://tob.codes/og-image.png' }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home | tob.codes',
    description: 'Sviluppatore web appassionato di tecnologia e innovazione. Portfolio, progetti e articoli su web development, React, Next.js e molto altro.',
    images: [
      { url: 'https://tob.codes/og-image.png' }
    ]
  }
}

export default async function Home() {
  const article = await client.fetch(LAST_ARTICLE_QUERY)
  const work = await client.fetch(LAST_WORK_QUERY)
  return (
    <section>
      <Hero />
      <div className="my-32 flex flex-col gap-3">
        <h2 className="heading-lg mb-4 flex items-center gap-2">
          <div className="inline-block">
            <div className="bg-[#FFDD4B] border-2 border-yellow-700/20 rounded-2xl flex p-[8px] w-fit">
              <FolderGit2 className="inline-block" size={28} />
            </div>
          </div>
          Ultimo Progetto
        </h2>        
        <LastWork work={work} />
      </div>
      <div className="my-32 flex flex-col gap-3">
        <h2 className="heading-lg mb-4 flex items-center gap-2">
          <div className="inline-block">
            <div className="bg-[#77b4ff] border-2 border-blue-950/20 rounded-2xl flex p-[8px] w-fit">
              <LibraryBig className="inline-block" size={28} />
            </div>
          </div>
          Ultimo Articolo
        </h2>
        <LastArticle article={article} showTitle={false} />
        <Button className="w-fit mt-10 mx-auto" asChild>
          <Link href="/blog" className="flex items-center gap-1">
            <BookOpenText className="inline-block" />
            Tutti gli articoli
          </Link>
        </Button>
      </div>
      <div className="my-32 flex flex-col gap-3">
        <h2 className="heading-lg mb-4 flex items-center gap-2">
          <div className="inline-block">
            <div className="bg-[#e57979] border-2 border-red-900/20 rounded-2xl flex p-[8px] w-fit">
              <GraduationCap className="inline-block" size={28} />
            </div>
          </div>
          Education
        </h2>
        <div className="relative w-full h-full py-4 bg-white rounded-3xl shadow-md flex flex-col items-center">
          <div className="certificate-container relative w-full">
            <CertificateSwapper 
              xCertificate={x_certificate} 
              pCertificate={p_certificate} 
            />
          </div>
        </div>  
        <p className="mt-4">Ho ricevuto questo certificato dopo aver conseguito il corso di Harvard &quot;CS50&apos;s Introduction to Computer Science&quot;. È stata un&apos;interessante ed approfondita avventura nel mondo dei computer e di come ragionano. 
          Ho successivamente completato il corso su Python con l&apos;obiettivo di imparare tutto ciò che concerne il mondo dell&apos;AI e degli LLM.
        </p>
      </div>
    </section>
  );
}
