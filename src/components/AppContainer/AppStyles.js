import styled from 'styled-components'

export const AppDiv = styled.div`
	display: grid;
	grid-template-areas:
    "menupanel header"
    "menupanel workspace"
    "footer footer";
	grid-template-columns: max-content 1fr;
	grid-template-rows: 80px auto 40px;
	height: 100vh;
	width: 100vw;
	background-color: ${props => props.theme.workspace.background};	
`

export const Img = styled.img`
	
`