import { client } from '@/sanity/lib/client'
import { SKILLS_QUERY } from '@/sanity/lib/queries'
import { Progress } from '@/components/ui/progress'
import React from 'react'
import Image from 'next/image'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


const Skills = async () => {
	const skills = await client.fetch(SKILLS_QUERY)
	return (
		<div>
			{skills.map((skill) => {
				return (
					<div className='flex items-center my-4 gap-x-4'>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									<Image src={`${skill.image}`} alt={`${skill.title}`} width={35} height={35} />
								</TooltipTrigger>
								<TooltipContent>
									<p>{skill.title}</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
						<Progress value={skill.progress} />
					</div>
				)
			})}
		</div>
	)
}

export default Skills