import styled from 'styled-components'
import theme from 'themes/default'

const AppContainer = styled.div`
	display:flex;
	flex-flow: column nowrap;
	height:100vh;
	width:100vw;
	background-color: ${theme.workspace.background};	
`

export default AppContainer

export const WorkspaceContainer = styled.div`
	flex: 1;
	display: flex;
	height: calc(100% - 70px);	
` 
/*
export const MenuItem = styled.div`
	flex:5;
	display: flex;
	flex-flow: column nowrap;
	margin: 5px 3px 5px 3px;
`

*/