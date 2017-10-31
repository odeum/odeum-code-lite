import styled from 'styled-components'
import theme from 'themes/default'
export const FrameworkContainer = styled.div`
	display:flex;
	flex-flow: column nowrap;
	height:100vh;
	width:100vw;
	background-color: ${theme.workspace.background};	
`

export const WorkspaceContainer = styled.div`
	flex: 1;
	display: flex;` 

export const MenuItem = styled.div`
	flex:5;
	display: flex;
	flex-flow: column nowrap;
	margin: 5px 5px 3px 5px;
`

export const Workspace = styled.div`
	flex:5;
	display:flex;
	flex-flow:row;
	background-color:white;
	margin-bottom: 5px;
`