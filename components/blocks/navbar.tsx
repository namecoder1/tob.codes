
import Link from 'next/link'
import { HomeIcon, FolderGit2, CircleUser, LibraryBig, Images } from 'lucide-react'
import Clock from './clock';

type MenuLinkP = {
	slug: string;
	title?: string;
	children?: React.ReactNode
}

const Navbar = () => {
	return (
<header className="fixed top-0 left-0 w-full flex items-center justify-evenly mt-3 px-3 z-50">
  <p className="fade-in-left-alternate py-1 px-3 border w-fit rounded-3xl shadow-xl bg-white/70 backdrop-blur-md h-10 flex items-center justify-center">
    <span>Pesaro, Italy</span>
  </p>
  <nav className="fade-in-top-alternate h-10 bg-white/70 backdrop-blur-md py-1 px-1 border w-fit rounded-3xl flex mx-auto shadow-xl">
    <MenuLink slug="/"><HomeIcon size={20} /></MenuLink>
    <div className="bg-border w-[1px] my-1 mx-1" />
    <ul className="flex gap-1">
      <li><MenuLink slug="/about"><CircleUser size={20} /><span className="text-sm">About</span></MenuLink></li>
      <li><MenuLink slug="/works"><FolderGit2 size={20} /><span className="text-sm">Progetti</span></MenuLink></li>
      <li><MenuLink slug="/blog"><LibraryBig size={20} /><span className="text-sm">Blog</span></MenuLink></li>
      <li><MenuLink slug="/gallery"><Images size={20} /><span className="text-sm">Gallery</span></MenuLink></li>
    </ul>
  </nav>
  <Clock />
</header>
	)
}

export default Navbar

const MenuLink = ({slug, title, children} : MenuLinkP) => {
	if(children) {
		return (
		<Link href={slug} className='hover:bg-gray-50/70 duration-300 ease-in-out py-0.5 px-3 flex items-center justify-center gap-1 rounded-3xl h-full'>	
			{children}
		</Link>			
		)}
	return (
		<Link href={slug}>
			{title}
		</Link>
	)
}