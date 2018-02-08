import styled from 'styled-components'
import media from 'theme/media'
// import theme from 'theme/default'
import {
	Icon
} from 'odeum-ui'


export const HelpOverlay = styled.div`
	background: #00000022;
	z-index: 98;
	height: 100vh;
	width: 100vw;
	position:fixed;
	top:0%;
	left:0%;
	cursor: auto;
	&.fade-enter  {
		opacity: 0.01;
  		transition: opacity 300ms ease-in;
	}
	&.fade-enter-active.fade-enter  {
		opacity: 1;
	}
		
	&.fade-leave {
		opacity: 1;
  		transition: opacity 300ms ease-in;
  	}
		
	&.fade-leave.fade-leave-active {
		opacity: 0.01;
		transition: opacity 300ms ease-in;
	}


`

export const HelpPopUp = styled.div`
	background: white;
	border: 3px solid ${props => props.theme.menu.background};
	z-index: 99;
	height: 40vh;
	width: 25vw;
	position: fixed;
    /* left: 50%;
	top: 30%; */
	left: calc(50% - 12.5vw);
	top: 10%;
	cursor: auto;
	border-radius: 5px;

`

export const Bold = styled.b`
	font-size: 12px;
	margin-left: 4px;
`

export const HelpIcon = styled(Icon) `
	&:hover{
		background: ${props => props.theme.tab.hover};
		color: white;
		border-left: 1px solid white;
	}
`

export const HelpDiv = styled.div`
	position: absolute;
	right: 0;
	display: flex;
	flex-flow: row nowrap;
	cursor: pointer;
	border-left: 1px solid #aaa;
	height: 30px;
	align-items: center;
	width: ${props => props.small ? '30px' : '130px'};
	justify-content: center;
	${media.giant`height:30px;`}
	${media.desktop`height:30px;`}
	${media.tablet`height:20px;`}
	${media.phone`height:10px;`}

	-webkit-transition: all 100ms ease-in-out;
	-moz-transition: all 100ms ease-in-out;
	transition: all 100ms ease-in-out;
`

export const HelpButton = styled.div`
	padding: 0 5px;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: center;
	&:hover{
		background: ${props => props.theme.tab.selected};
		color: white;
		border-left: 1px solid white;
		border-radius: 5px;
	}
	height: 30px;
	${media.giant`height:30px;`}
	${media.desktop`height:30px;`}
	${media.tablet`height:20px;`}
	${media.phone`height:10px;`}
`