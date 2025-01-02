import Footer from "@/components/blocks/footer";
import MainContainer from "@/components/blocks/main-container";
import MenuBar from "@/components/blocks/menubar";
import Navbar from "@/components/blocks/navbar";

import { Analytics } from '@vercel/analytics/next';


import { Poppins } from 'next/font/google'
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
	weight: ['100', '200', '300', '400', '500', '600', '700' , '800', '900'] ,
  display: 'swap',
})

async function FrontendLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<main className={`${poppins.variable}`}>
			<div className="hidden md:block"><Navbar /></div>
			<div className="md:hidden block"><MenuBar /></div>
			<section className="max-w-4xl mx-auto md:mt-20">
				<MainContainer>
					{children}
				</MainContainer>
			<Footer />
			</section>
			<Analytics /> 		
		</main>
	)
}

export default FrontendLayout