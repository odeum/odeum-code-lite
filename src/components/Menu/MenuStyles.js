import styled from 'styled-components'
import theme from 'themes/default'

export const MenuDiv = styled.div`
	background-color: ${theme.menu.background};
	display:flex;
	flex:1;
	flex-flow: column nowrap;
	overflow:hidden;
	max-width:250px;
`
const BaseItem = styled.div`
	border-bottom: 1px solid gray;
	height: 40px;
	width: 100%;
	display:flex;
	align-items:center;
	justify-content:center;
`

export const MenuHeader = BaseItem.extend`

`

export const MenuItem = BaseItem.extend`

`