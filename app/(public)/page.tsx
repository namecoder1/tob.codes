import { client } from "@/sanity/lib/client";
import Hero from "@/components/blocks/hero";
import { LAST_ARTICLE_QUERY, LAST_WORK_QUERY } from "@/sanity/lib/queries";
import LastArticle from "@/components/blocks/last-article";
import LastWork from "@/components/blocks/last-work";
import Image from "next/image";

import certificate from '@/assets/certificate.png'

import { BookOpenText, FolderGit2, GraduationCap, LibraryBig } from 'lucide-react'
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
        <LastArticle article={article} />
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
        <div className="relative w-full h-full py-4 bg-white object-fit rounded-2xl shadow-md">
          <Image src={certificate} alt="Certificate CS50" width={400} height={250} className="w-full h-full object-fit" />
          <p className="absolute bottom-3 right-3 bg-gray-200/70 backdrop-blur-sm px-2 py-1 rounded-xl border border-black/20 text-xs md:text-base">HarvardX: CS50&apos;s Introduction to Computer Science</p>
        </div>  
        <p className="mt-4">Ho ricevuto questo certificato dopo aver conseguito il corso di Harvard &quot;CS50&apos;s Introduction to Computer Science&quot;. È stata un&apos;interessante ed approfondita avventura nel mondo dei computer e di come ragionano. Ringrazio particolarmente il professore <span className="font-bold">David J. Malan</span> per la sua abilità nell&apos;insegnamento.</p>
      </div>
    </section>
  );
}

