import styled from 'styled-components'


export const OptionButton = styled.span`
color:${p => p.theme.button.color};
background: ${p => p.active ? p.theme.button.selected : p.theme.button.background};
padding:5px;
/* border: 1px solid #3e3e3e; */
&:hover{
	background: ${p => p.theme.button.hover};
	color: ${p => p.theme.button.color};
	cursor: pointer;
}
transition: all 100ms ease;
`

export const ButtonContainer = styled.div`
	border: 1px solid #3e3e3e;
	display:flex;
	flex-flow: row nowrap;
	border-radius: 3px;
	overflow:hidden;
	margin: 3px;
> * {
	:nth-child(even){
	    border: 1px solid #3e3e3e;
    	border-left: 0px;
		border-right: 0px;
		border-top:0px;
		border-bottom:0px;
	}
	:nth-child(odd){
		border: 1px solid #3e3e3e;
		border-top:0px;
		border-bottom:0px;
	}
	:first-child{
		border-left:0px;
	}
}
`