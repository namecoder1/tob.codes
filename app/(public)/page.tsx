import { client } from "@/sanity/lib/client";
import Hero from "@/components/blocks/hero";
import { LAST_ARTICLE_QUERY, LAST_WORK_QUERY } from "@/sanity/lib/queries";
import LastArticle from "@/components/blocks/last-article";
import LastWork from "@/components/blocks/last-work";


export default async function Home() {
  const article = await client.fetch(LAST_ARTICLE_QUERY)
  const work = await client.fetch(LAST_WORK_QUERY)
  return (
    <section>
      <Hero />
      <div className="my-16">
        <h2 className="heading-md mb-4">Ultimo Progetto</h2>        
        <LastWork work={work} />
      </div>
      <div className="my-16">
        <h2 className="heading-md mb-4">Ultimo Articolo</h2>
        <LastArticle article={article} />
      </div>
    </section>
  );
}
