import React, { FC } from 'react'

const CartInner: FC = () => {
	return (
		<div>Cart</div>
	)
}

export const Cart = React.memo(CartInner)