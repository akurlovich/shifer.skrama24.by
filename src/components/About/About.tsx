import React, { FC } from 'react'

const AboutInner: FC = () => {
	return (
		<div>About</div>
	)
}

export const About = React.memo(AboutInner)