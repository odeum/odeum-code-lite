import styled from 'styled-components'

export const QuickHelpPopUp = styled.div`
    background: white;
    border: 1px solid #cbc8c8;
    margin-top: -9vw;
    top: auto;
    height: 100vw;
    width: 90vw;
	position: absolute;
    border-radius: 5px;
    overflow: auto;
`

export const transitionStyles = {
	entering: { visibility: '', opacity: 1 },
	entered: { opacity: 1 },
	exiting: { opacity: 0 },
	exited: { opacity: 0, visibility: 'hidden' }
}

export const HelpPopUpFAQ = styled.div`
    background:	#435C72;
`

export const HelpPopUpText = styled.div`
	text-align: center;
	vertical-align: middle;
	color: white;
	font-family: 'Arial Black';
	padding: 5px;
	font-size: 3vw
`
    
export const HelpPopUpDivSplitLine = styled.div`
	margin-top: 15px;
	width: 500px;
	float: left;
	border-right: 1px solid gray;
`

export const DivWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`

export const SplitMoreInfoDiv = styled.div`
	text-align: center;
	vertical-align: middle;
	flex: 0 0 50%;
	padding: 20px;
	line-height: 12px;
	justify-content: center;
`

export const Question = styled.div`
	padding-top: 10px;
	padding-left: 3%;
	padding-right: 3%;
	word-wrap: 'normal';
`

export const QuestionDescriptionTextStyle = styled.div`
	margin-top: -4.2vw;
`