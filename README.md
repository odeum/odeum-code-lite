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
Default theme is ODEUM Code theme. The theme file contains objects for colors and fonts for the selected theme.

A theme is passed as a theme prop to the <AppContainer> component. 

If no theme is provided to the AppContainer by the user, the AppContainer loads the default theme provided in the odeum-app package.

```js
import theme from './themes/bluehorizon.js'
...
<AppContainer theme={theme}>
```

We might provide setTheme and getTheme functions to pattern check the contents of the theme file to ensure that the objects contains the required values. 


## Configuration:
All components exported from **odeum-ui** and **odeum-app** has propTypes and defaultProps. 

All defaultProps are loaded with default values so a fully scaled down App template will look like this:
[App_default.js](./src/App_default.js)

A template with named values and more props passed would look like this:
[App_normal.js](./src/App_normal.js)

### Logo
Default logo is odeumcode_logo.svg which is loaded default by Header component unless it is overwritten by the Header prop "logo={'pathtologo.svg'}"

- JSON config file(s) - colors, fonts, footer etc. or style objects.
- Workspace components can be functional components passed as render props or class components.
