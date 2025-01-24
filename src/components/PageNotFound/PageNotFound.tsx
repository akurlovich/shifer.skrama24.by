import React, { FC } from 'react'

const PageNotFoundInner: FC = () => {
	return (
		<div>PageNotFound</div>
	)
}

export const PageNotFound = React.memo(PageNotFoundInner)