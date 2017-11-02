import styled from 'styled-components'
import theme from 'themes/default'
import { Link as RouterLink } from 'react-router-dom'

export const TabList = styled.div`
	flex: 1;
 	display: flex;
 	flex-flow: row;
 	list-style: none;
 	padding: 0;
 	margin: 0;
	max-height: 43px;
	align-items: end;
`

export const TabDiv = styled.div`
	display:flex;
	flex-flow: row nowrap;
	align-items:center;
	justify-content:center;
`

export const Link = styled(RouterLink) `
	text-decoration:none;
	align-items:center;
	justify-content:center;
	display:flex;
	height: 40px;
	margin-right:3px;
	max-width: 250px;
	width:100px;
	flex-flow:row nowrap;
	border-radius: 5px 5px 0px 0px;
	color:${props => props.selected ? '#fff' : '#000'};
	background: ${props => props.selected ? theme.tab.selected : theme.tab.unselected};
`

export const SceneDiv = styled.div`
	 display: flex;
	 flex: 5;
	 height: 100%;
	 flex-flow: column nowrap;
	 margin: 5px 5px 5px 5px;
` 