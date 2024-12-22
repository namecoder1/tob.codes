import { client } from "@/sanity/lib/client";
import Hero from "@/components/blocks/hero";
import { LAST_ARTICLE_QUERY, LAST_WORK_QUERY } from "@/sanity/lib/queries";
import LastArticle from "@/components/blocks/last-article";
import LastWork from "@/components/blocks/last-work";
import Image from "next/image";

import certificate from '@/assets/certificate.png'

import { FolderGit2, GraduationCap, LibraryBig } from 'lucide-react'

export default async function Home() {
  const article = await client.fetch(LAST_ARTICLE_QUERY)
  const work = await client.fetch(LAST_WORK_QUERY)
  return (
    <section>
      <Hero />
      <div className="my-16">
        <h2 className="heading-md mb-4"><FolderGit2 className="inline-block mb-2 mr-1.5" size={30} />Ultimo Progetto</h2>        
        <LastWork work={work} />
      </div>
      <div className="my-16">
        <h2 className="heading-md mb-4"><LibraryBig className="inline-block mb-2 mr-1" size={30} />Ultimo Articolo</h2>
        <LastArticle article={article} />
      </div>
      <h2 className="heading-md mb-4"><GraduationCap className="inline-block mb-2 mr-1.5" size={30} />Education</h2>
      <div>
        <div className="relative w-full -z-0">
          <Image src={certificate} alt="Certificate CS50" width={400} height={300} className="w-full rounded-2xl shadow-md" />
          <p className="absolute bottom-3 right-3 bg-gray-200/70 backdrop-blur-sm px-2 py-1 rounded-xl border border-black/20 text-xs md:text-base">HarvardX: CS50&apos;s Introduction to Computer Science</p>
        </div>  
        <p className="mt-4">Ho ricevuto questo certificato dopo aver conseguito il corso di Harvard &quot;CS50&apos;s Introduction to Computer Science&quot;. È stata un&apos;interessante ed approfondita avventura nel mondo dei computer e di come ragionano. Ringrazio particolarmente il professore <span className="font-bold">David J. Malan</span> per la sua abilità nell&apos;insegnamento.</p>
      </div>
    </section>
  );
}

