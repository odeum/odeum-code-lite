import styled from 'styled-components'
// import them from 'theme/default'
// import theme from 'styled-theming'


export const AppDiv = styled.div`
	display: flex;
	flex-flow: column nowrap;
	height: 100vh;
	width: 100vw;
	background-color: ${props => props.theme.workspace.background};	
`

export const Img = styled.img`
	
`