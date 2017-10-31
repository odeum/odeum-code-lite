import styled from 'styled-components'
import theme from 'themes/default'
import media from 'themes/media'


export const FooterDiv = styled.div`
display:flex;
flex-flow: row nowrap;
width:100vw;
height: 40px;
background: ${theme.footer.background};
color: ${theme.footer.color};
-webkit-box-shadow: 0 0 3px 0 #ccc;
-moz-box-shadow: 0 0 3px 0 #ccc;
box-shadow: 0 0 3px 0 #ccc;

color: #5e5e5e;
font-family: 'Source Sans Pro';
font-size: 13px;
font-weight: 300;
text-align: center;
user-select: none;

${media.giant`height:40px;`}
${media.desktop`height:40px;`}
${media.tablet`height:30px;`}
${media.phone`height:20px;`}
`