type AboutBlockT = {
	id: string;
	title: string;
	description?: string;
	children?: React.ReactNode;
}

const AboutBlock = ({ id, title, description, children } : AboutBlockT) => {
	if(children){
		return (
			<div id={id} className="sm:px-5 mb-6">
				<h1 className="heading-md">{title}</h1>
				<p className="mt-1">{description}</p>
				{children}
			</div>
		)
	}
	return (
		<div id={id} className="sm:px-5 mb-6">
			<h1 className="heading-md">{title}</h1>
			<p className="mt-1">{description}</p>
		</div>
	)
}

export default AboutBlock