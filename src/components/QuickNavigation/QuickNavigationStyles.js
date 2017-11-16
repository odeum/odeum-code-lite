import styled from 'styled-components'


export const QuickNavButton = styled.div`
    background: ${props =>  props.theme.quicknav.button.background};
    border: none;
    border-radius: 7px;
    color: ${props => props.theme.quicknav.button.color};
    padding: 10px 15px;
    position:absolute;
    bottom: 10%;
    align-self:center;
`

export const QuickNavMenu = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-around;
    background:white;
    color:black;
    width: 100vw;
    height: ${props => props.quickNav ? '100px' : '0px'};
    overflow: hidden;
    position:absolute;
    z-index:2;
    transition: height 300ms ease-in-out;
    bottom: 0%;
`