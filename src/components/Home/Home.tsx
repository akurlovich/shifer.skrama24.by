import React from 'react'
import { FC } from 'react'
import { NavLink } from 'react-router'
import rim from '../../assets/img/rim.jpg'

const HomeInner: FC = () => {
	return (
		<>
			<div>Home</div>
			<img src="src/assets/img/rim.jpg" alt="" />
			<div>second</div>
			<img src={rim} alt="" />
			<nav>
				<NavLink to='/' end>Домой</NavLink>
				<NavLink to='/cart' end>Козрина</NavLink>
				<NavLink to='/about' end>О нас</NavLink>
			</nav>
		</>
	)
}

export const Home = React.memo(HomeInner)