import styled from 'styled-components'
import theme from 'themes/default'
import { Link as RouterLink } from 'react-router-dom'

export const MenuDiv = styled.div`
	background-color: ${theme.menu.background};
	display:flex;
	flex:1 0 auto;
	flex-flow: column nowrap;
	overflow:hidden;
	max-width:${props => props.achordeon ? '250px;' : '50px'};
	transition: max-width 300ms ease-in-out;
	overflow:hidden;
`
const BaseItem = styled.div`
	border-bottom: ${theme.menu.bottomBorder};
	height: 50px;
	width: 100%;
	display:flex;
	align-items:center;
`

export const MenuHeader = BaseItem.extend`

`
export const IconDiv = styled.div`
	width: 50; 
	height: 100%; 
	min-width: 50px; 
	display: flex;
	align-items: center;
	justify-content: center;
`
export const ArrowIconDiv = IconDiv.extend`
	align-self: right;
`
export const Link = styled(RouterLink) `
	border-bottom: ${theme.menu.bottomBorder};
	text-decoration:none;
	outline:0;
	color:white;
	width: 250px;
	height:50px;
	font-weight:400;
	display:flex;
	align-items:center;
	justify-content: space-between;
	background: ${props => props.selected ? theme.menu.selected : null};
	&:hover{
		background:${theme.menu.hover}
	}
	-webkit-transition: all 100ms ease-in-out;
	-moz-transition: all 100ms ease-in-out;
	transition: all 100ms ease-in-out;
`