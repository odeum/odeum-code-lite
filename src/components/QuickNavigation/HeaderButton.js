import { Icon } from 'odeum-ui'
import React from 'react'
import PropTypes from 'prop-types'

import { RoundButton } from './QuickNavigationStyles'

const HeaderButton = ({ icon, onClick }) => {
	return (
		<RoundButton onClick={onClick ? onClick : HeaderButton.defaultProps.onClick}>
			<Icon icon={icon ? icon : HeaderButton.defaultProps.icon} iconSize={30} color={'inherit'} />
		</RoundButton>
	)
}
HeaderButton.propTypes = {
	icon: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
}
HeaderButton.defaultProps = {
	icon: 'info',
	onClick: () => console.error('Undefined button')
}
export default HeaderButton
