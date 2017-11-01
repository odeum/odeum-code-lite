import styled from 'styled-components'
import theme from 'themes/default'
import { Link as RouterLink } from 'react-router-dom'

export const MenuDiv = styled.div`
	background-color: ${theme.menu.background};
	display:flex;
	flex:1;
	flex-flow: column nowrap;
	overflow:hidden;
	max-width:250px;
`
const BaseItem = styled.div`
	border-bottom: ${theme.menu.bottomBorder};
	height: 40px;
	width: 100%;
	display:flex;
	align-items:center;
	justify-content:center;
`

export const MenuHeader = BaseItem.extend`

`

export const MenuItemDiv = BaseItem.extend`

`

export const Link = styled(RouterLink) `
	text-decoration:none;
	outline:0;
	color:white;
	width:100%;
	height:40px;
	display:flex;
	align-items:center;
	background: ${props => props.selected ? theme.menu.selected : null};
	&:hover{
		background:${theme.menu.hover}
	}
`