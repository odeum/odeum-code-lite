
import styled from 'styled-components'
import media from '../../theme/media'
import { Link as RouterLink } from 'react-router-dom'
import { rowColCalc, spanCalc } from '../utils/Functions'

export const HeaderDiv = styled.div`
	grid-area:header;
	color: #333;
	display: flex;
	flex-flow: row nowrap;
	/* width: 100vw; */
	height: ${props => props.theme.header.height ? props.theme.header.height : '80px'};
	align-items: center;
	justify-content: ${props =>  props.quicknav && 'center' };
	/* justify-content: ${props => props.quicknav ? 'center' : 'space-between'}; */
	background-color: ${props => props.theme.header.background};
	color: ${props => props.theme.header.color};
	${media.giant`height:80px;`}
	${media.desktop`height:80px;`}
	${media.tablet`height:60px;`}
	${media.phone`height:60px;`}
	-ms-grid-column: ${p => rowColCalc(p.theme.app.gridArea, 'header', 'column')};
	-ms-grid-row: ${p => rowColCalc(p.theme.app.gridArea, 'header', 'row')};
	-ms-grid-column-span: ${p => spanCalc(p.theme.app.gridArea, 'header', 'column')};
	-ms-grid-row-span: ${p => spanCalc(p.theme.app.gridArea, 'header', 'row')};
`

export const LogoDiv = styled(RouterLink)`
	/* height: 50%; */
	height: ${props => props.theme.logo.height ? props.theme.logo.height : '35px'};
	align-self: center;
	margin: ${props => props.theme.logo.margin ? props.theme.logo.margin : '5px'};
`

export const LogoImg = styled.img`
	height: 100%;
`
