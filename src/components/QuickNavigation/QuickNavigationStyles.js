import styled from 'styled-components'

export const MenuItem = styled.div`
    background:${props => props.theme.quicknav.button.background};
    color: ${props => props.theme.quicknav.button.color};
    height:50px;
    width: 100px;
    display: flex;
    align-items:center;
    justify-content: space-evenly;
    border-radius:4px;
    margin:0px 15px;
    &:first-child{
        margin-left:1px;
    }
`

export const TabItem = styled.div`
    min-width: 50px;
    margin:0px 30px;
    height: 30px;
    &:hover{
        color: royalblue;
    }
    &:first-child{
        margin-left:15px;
    }
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
    height: 45px;
    max-height:45px;
    margin: 0;
    padding:0;
    line-height:15px;
    justify-content: space-evenly;
    align-items:center;
    overflow-x: auto;
    width:90vw;
`

export const TabList = styled.div`
    display: flex;
    flex-flow: column wrap;
    height: 35px;
    max-height:35px;
    margin: 0;
    padding:0;
    line-height:15px;
    justify-content: space-evenly;
    align-items:center;
    overflow-x: auto;
    width:90vw;
`

export const QuickNavButton = styled.div`
    background: ${props => props.theme.quicknav.button.background};
    border: none;
    border-radius: 7px;
    color: ${props => props.theme.quicknav.button.color};
    padding: 10px 15px;
    position:absolute;
    bottom: 10%;
    align-self:center;
    cursor: pointer;
    &:hover{
        background: ${props => props.theme.tab.hover}
    }
`

export const QuickNavMenu = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-around;
    flex-flow: column nowrap;
    background:white;
    color:black;
    width: 100vw;
    height: ${props => props.quickNav ? '210px' : '0px'};
    overflow: hidden;
    position:absolute;
    z-index:2;
    transition: height 300ms ease-in-out;
    bottom: 0%;
`