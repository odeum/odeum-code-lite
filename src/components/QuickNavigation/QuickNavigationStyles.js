import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const QuickNav = styled.div`
    z-index: 1; 
    display: flex; 
    flex-flow: row nowrap;
    align-items: center; 
    justify-content: center;
`
export const Link = styled(NavLink) `
    text-decoration:none;
    color: inherit;
    display: flex;
	flex-flow: column;
    align-items:center;
    justify-content: center;
    height:100%;
    width:100%;
`
export const MenuItem = styled.div`
    background:${props => props.theme.tab.unselected};
    color: ${props => props.theme.quicknav.button.background};
    height:50px;
    display: flex;
	flex-flow: column;
    align-items:center;
    justify-content: center;
    border-radius:5px;
	min-width: 100px;
    margin:0px 7px;
    padding: 0px 7px;
    &:first-child{
        margin-left:1px;
    }
	&:hover{
		/* background: rgba(59,151,211,0.8); */
		border: 10px;
		border-color: rgba(59,151,211,0.3);
		box-shadow: 0 0 0 3px rgba(59,151,211,0.3);
		}

    cursor:pointer;
`

export const TabItem = styled(NavLink) `
    text-decoration: none;
    min-width: auto;
    padding:0px 15px;
    height: 20px;
    color:${({ activetab }) => activetab === 'true' ? 'royalblue' : 'black'};
    &:hover{
        color: royalblue;
    }
    cursor:pointer;
    display: flex;
    align-items:center;
    justify-content: space-evenly;
`

export const Spacer = styled.div`
    display: flex;
    width: 90vw;
    min-height: 1px;
    background: #cbc8c8;
`
export const MenuList = styled.div`
    display: flex;
    flex-flow: column wrap;
    height: 70px;
    max-height:70px;
    margin: 0;
    padding:0;
    line-height:15px;
    justify-content: space-evenly;
    align-items:center;
    overflow-x: auto;
    width:90vw;
`

export const TabList = styled.div`
    display: grid;
	grid-template-columns: repeat(${props => props.tabs}, auto);
	align-content: center;
    /* flex-flow: column wrap;
    align-items:center;
    justify-content:center; */
    height: 25px;
    max-height:50px;
    margin: 0;
    padding:20px 0px;
    line-height:20px;
    overflow-x: auto;
    width:90vw;
	white-space: nowrap;
	overflow-y:hidden;

`

export const QuickNavButton = styled.div`
    background: ${props => props.theme.quicknav.button.background};
    border: none;
    border-radius: 15px;
    color: ${props => props.theme.quicknav.button.color};
    padding: 10px 15px;
    position:fixed;
    bottom: 10%;
    align-self:center;
    cursor: pointer;
    &:hover{
        background: ${props => props.theme.tab.hover}
    }
	display: flex;
	align-items: center;
	justify-content: center;
`
export const QuickNavMenu = styled.div`
    display:grid;
	grid-template-columns: auto;
	grid-template-rows: 50px 1px 50px 1px 70px;
    justify-content: flex-end;
    align-items:center;
    flex-flow:column wrap;
    background:white;
    height:100%;
    max-height: 210px;
    border-radius: 5px;
    border: 1px solid #cbc8c8;
    padding: 5px;
`
export const QuickNavContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content: flex-end;
    flex-flow: column nowrap;
    color:black;
    width: 100vw;
    height: ${props => props.quickNav ? '100vh' : '0px'};
    overflow: hidden;
    position:fixed;
    z-index:2;
    transition: height 300ms ease-in-out;
    bottom: 0;
`