# odeum-code-lite

A scaled down "ODEUM Code" getting-started quickly framework

## Components:
- AppContainer
- Header
- MenuPanel (collapsable)
- Menu (menu item)
- Footer
- TabPanel
- Tab

## Added by you:
- ODEUM UI
- ODEUM Primitives
- Redux
- Routes
- Whatever ... 


### Theme
Default theme is ODEUM Code main theme. 

#### setTheme
The function **"setTheme"** loads and sets the theme to the theme in a JavbaScript .js file. The file contains objects for colors and fontd for the theme. 
If error loading theme, then the default theme i loaded. 
Default theme is imported into the <AppContainer>.
```js
const theme = './themes/odeumcode.js'
...
<AppContainer theme={setTheme(theme)}>
```
You can set the theme in the App constructor or in componentDidMount() as well as in the **AppContainer** component.

#### getTheme
The function **"getTheme"** is used by our components to load a theme object with the values from the theme file. 
```js
import { getTheme } from 'odeum-app'
...
const theme = getTheme()
...
const StyledHeaderContainer = styled.div`
  color: ${theme.header.color};
  background: ${theme.header.background};  
`
```


## Configuration:

- JSON config file(s) - colors, fonts, footer etc. or style objects


- Workspace component
