import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import {PortableText} from '@portabletext/react';
import { Dot } from "lucide-react";
import Link from "next/link";

const imageComponent = (props) => 
  props.value? (
    <Image
      className="rounded-lg not-prose w-full h-auto"
      src={urlFor(props.value)
        .width(600)
        .height(400)
        .quality(80)
        .auto("format")
        .url()}
      alt={props?.value?.alt || ""}
      width="600"
      height="400"
    />
  ) : null;




const components = {
  block: {
    normal: ({children}) => <p className="mb-3 leading-7">{children}</p>,
    h1: ({children}) => <h1 className="text-2xl font-bold mt-8 mb-3">{children}</h1>,
    h2: ({children}) => <h2 className="text-xl font-semibold mt-8 mb-2">{children}</h2>,
    h3: ({children}) => <h3 className="text-lg font-semibold mt-8 mb-1">{children}</h3>,
  },
  list: {
    bullet: ({children}) => <ul className="mt-xl flex flex-col items-start justify-start">{children}</ul>
  },
  listItem: {
    bullet: ({children}) => <li className="my-5 flex items-start gap-2"><Dot className="mt-1.5 flex-shrink-0" size={14} /><div>{children}</div></li>
  },
  types: {
    image: imageComponent
  },
  marks: {
    link: ({value, children}) => {
      return (
        <Link href={value?.href} target="_blank" className="underline underline-offset-2">{children}</Link>
      )
    },
  },
};

const TextBlock = (props) => {
  return <PortableText value={props.value} components={components} />
}

export default TextBlock;