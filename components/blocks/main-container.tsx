import React from 'react'

function MainContainer({ children } : { children : React.ReactNode}) {
	return (
		<div className='mx-5 md:mx-10 my-5 md:my-10'>{children}</div>
	)
}

export default MainContainer