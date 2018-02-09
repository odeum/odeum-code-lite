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
	transition: all 300ms ease;
`

export const HelpPopUpFAQ = styled.div`
	//border-top-left-radius: 15px;
	background:	#435C72;
	height: 200%;
`

export const HelpPopUpText = styled.div`
	text-align: center;
	vertical-align: middle;
	color: white;
	line-height: 200%;
	font-family: 'Arial Black'
`

export const DivWrapper = styled.div`
	display: flex;
  	flex-wrap: wrap;
`

export const SplitMoreInfoDiv = styled.div`
	text-align: center;
	vertical-align: middle;
	line-height: 100%;
	flex: 0 0 50%;
	padding: 10px;
`

export const HelpPopUpDivSplitLine = styled.div`
	width: 500px;
	float: left;
	border-right: 1px solid gray;
`

export const HelpPopUp = styled.div`
	background:  #ffffff;
	z-index: 99;
	height: 40vh;
	width: 25vw;
	position: absolute;
	bottom: 150%;
	right: 30%;
	cursor: auto;
	border-radius: 5px;
	transition: all 300ms ease;
	overflow: auto;
`

export const HeaderDivider = styled.div`
    position:absolute;
    left:50%;
    border-left:1px solid white;
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