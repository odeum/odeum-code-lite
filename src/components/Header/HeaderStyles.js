
// these sizes are arbitrary and you can set them to whatever you wish
import styled from 'styled-components'
// import theme from 'theme/default'
import media from 'theme/media'
import { Link as RouterLink } from 'react-router-dom'

export const HeaderDiv = styled.div`
	color: #333;
	display: flex;
	flex-flow: row nowrap;
	width: 100vw;
	height: ${props => props.theme.header.height ? props.theme.header.height : '80px'};
	align-items: center;
	justify-content: ${props => props.quicknav ? () => { console.log(props.quicknav); return 'center' } : 'space-between'};
	background-color: ${props => props.theme.header.background};
	color: ${props => props.theme.header.color};
	${media.giant`height:80px;`}
	${media.desktop`height:80px;`}
	${media.tablet`height:60px;`}
	${media.phone`height:60px;`}
`

export const LogoDiv = styled(RouterLink) `
	height: 50%;
	max-height: ${props => props.theme.logo.height ? props.theme.logo.height : '35px'};
	align-self: center;
	padding: 5px;
`

export const LogoImg = styled.img`
	height: 100%;

`
