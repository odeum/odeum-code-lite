import styled from 'styled-components'
import theme from 'themes/default'

export const TabList = styled.div`
flex: 1;
 display: flex;
 flex-flow: row;
 list-style: none;
 padding: 0;
 margin: 0;
max-height: 40px;
background-color:${theme.tab.background};
margin-bottom: 5px;
`