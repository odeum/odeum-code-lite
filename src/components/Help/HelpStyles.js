import styled from 'styled-components'


export const HelpDiv = styled.div`
position:absolute;
right:0;
display:flex;
flex-flow: row nowrap;
cursor:pointer;
&:hover{
	background:#aaa;
	color:white;
}
border-left: 1px solid #aaa;
height: 30px;
align-items:center;
margin-right: 15px;
width: 130px;
justify-content:center;
`