import React, { FC } from 'react'

const HeaderInner: FC = () => {
	return (
		<div>Header</div>
	)
}

export const Header = React.memo(HeaderInner)