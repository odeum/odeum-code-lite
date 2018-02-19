import styled from 'styled-components'
import media from 'theme/media'
// import theme from 'theme/default'
import {
	Icon
} from 'odeum-ui'

export const transitionStyles = {
	entering: { visibility: '', opacity: 1 },
	entered: { opacity: 1 },
	exiting: { opacity: 0 },
	exited: { opacity: 0, visibility: 'hidden' }
}

export const HelpOverlay = styled.div`
	z-index: 98;
	height: 100vh;
	width: 100vw;
	position:fixed;
	top:0%;
	left:0%;
	cursor: auto;
`

export const HelpPopUpTitleText = styled.div`
	background:	#435C72;
	text-align: center;
	vertical-align: middle;
	color: white;
	font-family: 'Arial Black';
	padding: 5px;
	font-size: 0.9em;
`

export const HelpPopUp = styled.div`
	//background: #e3e3e3; /* dirty gray */
	background: white;
    border: 1px solid #cbc8c8;
	border-radius: 4px;
	z-index: 99;
	height: 40vh;
	width: 25vw;
	min-width: 330px;
	position: absolute;
	bottom: 150%;
	right: 30%;
	cursor: auto;
	border-radius: 5px;
	transition: all 300ms ease;
	overflow: auto;
		/*&::after {
			position: static;
			margin-left: 80%;
			margin-top: -100px;
			width: 200%;fa
			height: 0;
			content:'';
			border-left: 15px solid transparent;
			border-right: 15px solid transparent;
			border-top: 15px solid #2C3E50;
	}*/
`

export const VerticalDivider = styled.div`
	position:absolute;
    left:50%;
    top: calc(70%-3vw);
	bottom: auto;
	margin-top: 5%;
	padding-bottom: 5vw;
	border-left:1px solid #e3e3e3;
`

export const HorizontalDivider = styled.div`
	overflow: hidden;
	margin-top: 16%;
	position:absolute;
    top:auto;
    left: 5%;
    right: 5%;
	border-top:1px solid #e3e3e3;
`

export const QuestionDescriptionTextStyle = styled.div`
	margin-top: -10px;
	margin-bottom : 5%;
	padding-left: 1%;
	padding-right: 3%;
	word-wrap: 'normal';
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

export const DescriptionDivStyle = styled.div`
	display: flex;
	flex-flow: ${p => p.orientation};
	text-align: ${p => p.alignment};
	padding: auto;

`

export const HelpComponentItem = styled.div`
	flex: 1;
`