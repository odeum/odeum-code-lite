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
Default theme is ODEUM Code main theme. The theme file contains objects for colors and fonts for the selected theme.

A theme is passed as a theme prop to the <AppContainer> component. 

If no theme is provided to the AppContainer by the user, the AppContainer loads the default theme provided in the odeum-app package.

```js
import theme from './themes/bluehorizon.js'
...
<AppContainer theme={theme}>
```


## Configuration:

- JSON config file(s) - colors, fonts, footer etc. or style objects

- Workspace component
