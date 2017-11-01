
// these sizes are arbitrary and you can set them to whatever you wish
import styled from 'styled-components'
import theme from 'themes/default'
import media from 'themes/media'

export const HeaderDiv = styled.div`
color: #333;
display: flex;
flexFlow: row nowrap;
width: 100vw;
height:100px;
align-items: center;
justify-content:space-between;
background-color: ${theme.header.background};
color: ${theme.header.color};
${media.giant`height:100px;`}
${media.desktop`height:100px;`}
${media.tablet`height:70px;`}
${media.phone`height:50px;`}
`

export const LogoDiv = styled.div`
height:100%;
max-height: 50px;
align-self:center;
`

export const LogoImg = styled.img`
width:100%;
height:100%;
`
