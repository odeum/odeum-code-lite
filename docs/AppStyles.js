import React from 'react'
import styled from 'styled-components'
import logo from './odeum_code_logo.svg'


const LogoImage = styled.img`
	  height: ${(props) => props.size || '100px'};
`

export const Logo = (props) => {
	return (
		<LogoImage
			src={logo}
			size={props.size}
			alt={'ODEUM Code logo'} />
	)
}
