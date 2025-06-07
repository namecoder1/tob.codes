import Link from 'next/link';
import { HomeIcon, FolderGit2, CircleUser, LibraryBig, Images, LayoutGrid } from 'lucide-react';

const MenuBar = () => {
	return (
		<nav className="z-30 fade-in-bottom-alternate fixed bottom-4 left-1/2 bg-white/70 border border-gray-300 backdrop-blur-md rounded-lg shadow-md flex items-center px-4 py-2">
			<Link href="/">
				<HomeIcon size={28} className="text-gray-800 hover:text-black transition" />
			</Link>
			<div className="w-[1px] h-6 bg-gray-500 mx-4" />
			<ul className="flex gap-4">
				<li>
					<Link href="/about">
						<CircleUser size={28} className="text-gray-800 hover:text-black transition" />
					</Link>
				</li>
				<li>
					<Link href="/works">
						<FolderGit2 size={28} className="text-gray-800 hover:text-black transition" />
					</Link>
				</li>
				<li>
					<Link href="/apps">
						<LayoutGrid size={28} className="text-gray-800 hover:text-black transition" />
					</Link>
				</li>
				<li>
					<Link href="/blog">
						<LibraryBig size={28} className="text-gray-800 hover:text-black transition" />
					</Link>
				</li>
				<li>
					<Link href="/gallery">
						<Images size={28} className="text-gray-800 hover:text-black transition" />
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default MenuBar;