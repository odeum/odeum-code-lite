import { RoundButton } from './QuickNavigationStyles'
import Icon from '../utils/Icon/Icon'
import React from 'react'

const HeaderButton = ({ icon, onClick }) => {
	return (
		 <RoundButton onClick={onClick}><Icon icon={icon} iconSize={30} color={'inherit'} /></RoundButton>
	)
}

export default HeaderButton
