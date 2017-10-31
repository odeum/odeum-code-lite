
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
background-color: ${theme.header.background};
color: ${theme.header.color};
${media.giant`height:100px;`}
${media.desktop`height:100px;`}
${media.tablet`height:50px;`}
${media.phone`height:50px;`}
`

export const LogoDiv = styled.div`
height:inherit;
`

export const LogoImg = styled.img`
height:inherit;
`
