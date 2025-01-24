import React, { FC } from 'react'

const FooterInner: FC = () => {
	return (
		<div>Footer</div>
	)
}

export const Footer = React.memo(FooterInner)