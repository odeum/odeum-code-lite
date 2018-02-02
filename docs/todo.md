# TODO for odeum-app
<!-- TOC -->
- [TODO for odeum-app](#todo-for-odeum-app)
	- [Framework](#framework)
	- [Theme](#theme)
	- [Menu Panel](#menu-panel)
	- [Header](#header)
	- [Footer](#footer)
	- [Workspace](#workspace)
	- [QuickNav](#quicknav)
	- [Login](#login)
	- [Internet Explorer Compatibility](#internet-explorer-compatibility)
	- [Future:](#future)
		- [1.1.1. Foundation](#111-foundation)
		- [1.1.2. Extension](#112-extension)
		- [1.1.3. Advanced](#113-advanced)

<!-- /TOC -->

## Performance
- Tab
	-refactor activate() to shouldComponentUpdate()
- [ ] Re-renders
	- [x] Header
	- [x] Footer
	- [x] Icon from odeum-ui
		- needs more than PureComponent
		- Moved Icon inside Odeum-Code-lite
			-Temporary
			-Fixed the rerendering, will be moved back to odeum-ui
	- [x] MenuItem
	- [x] QuickNav
	- [ ] Routes & ThemeProvider
		- These might not be doable as it is internal to react-router / styled-components
	- [x] MenuPanel

## Framework
- [x] Update Demo Theme Tab Colors
- [ ] Store theme on localStorage
- [ ] Load Theme from localStorage and the preffered one
- [ ] Store isLoggedin state as a cookie
	- [ ] Expire after 15 mins
	- [ ] Refresh every 10 mins		
- [x] Set Global VW/VH
- [x] MenuPanel Check for Menu subchild
- [x] If not Menu don't render
- [x] error coding, use strict subchildren
- [x] Margin on logo
- [x] Footer dissapears on Tablet size (portrait) (Ipad Air 2)
- [x] display:grid on Skeleton
	- [x] QuickNavigation refactor to these changes
- [x] Custom theme gridArea,templateColumns,templateRows
- [x] Remove flex properties on skeleton components (MenuPanel, Header, Workspace/SceneDiv, Footer)

## Theme

- [x] Footer Color
- [x] Workspace Color
- [x] Tab Text Active/Inactive Color
- [x] QuickNav 
	- [x] ~~Hover Tab Text Color~~ 
		- Redundant, you can't really *hover* on a phone
	- [x] Menu Item text color
	
## Menu Panel

- [x] Redirect to Login / to 404 
- [x] refactor Arrows to arrows
- [x] One Method for rendering of the Switch/Routes
- [x] One Method for rendering MenuItems
- [x] bottomMenu/Top **Component** support 
	- [x] pass prop boolean bottom/top to component that needs to be on the footer/header of the menu panel
		- [x] top prop
		- [x] bottom prop
	- [x] create styled components for top/bottom 
- [x] bottom/top **MenuItem**
- [x] Custom Header (for ex: profile picture)
- [x] Setting active menu item coming from another internal link(go to theme Menu item -> click on any link)
- [x] Center Top MenuPanel
- [x] Custom menu Item Styling
	- [x] No Arrow Menu
	- [x] Text Hover Color Theme prop
	- [x] Font Size prop
- [x] Page Component is broken because type testing doesn't include Page in MenuPanel
```js
if(type === Menu || type === Page)
``` 
- [x] Margin Bottom on Top
```css
margin-bottom: auto;
```

## Header

- [x] Custom Component as Header

## Footer

- [x] Help button? true/false
- [x] label color
- [x] default footer without a mandatory component to be passed

## Workspace

- [ ] Overflow + Components transformation for Responsiveness 
	- [ ] CSS Wrap
- [x] -webkit-overflow-scrolling: touch; from  iOS

## QuickNav
- [ ] Active Menu onEnter
- [ ] Notfication that the button dissapeared
<!-- Or something like that -->
- [ ] Remove border onClick on QuickNav Button
- [x] Hide/Show QuickNav button
	- [ ] Animation
- [ ] Login true/false
- [x] Quick Navigation select first tab when only 1
	- needs more testing
- [x] '/' route as Home
- [x] Quick Navigation 'menu' icon default else from theme
- [x] Tab Styling in connection with the theme (Red Theme -> Red Active Text)
- [x] Header Buttons
- [x] Help Pop-up
- [x] Close Button
- [ ] Style Buttons 
- [ ] Active Tab Highlight to accomodate 'Protected'
- [x] Active Menu Highlight to accomodate 'Protected'
- [x] Menu with no tabs
- [ ] Top/Bottom Menu Items
	- currently they are rendered as MenuItems the ones are actual MenuItems
	- How do we handle Components that aren't MenuItems?
- [ ] [Login Form](#login)
- [ ] Login Menu item is rendered after Login

## Login

- [x] RedirectTo prop after Login is Done
- [x] Login Component
	- [x] Rudimentary Form
	- [ ] Validation
	- [ ] Error display
	- [ ] Styling
- [x] Protected Routes
- [x] Custom Login Form

## Internet Explorer Compatibility

- [ ] ~~Theme prop IE~~
	- removed - redundant
- [x] column & row setup function
- [x] vendor prefix

## Future:

### 1.1.1. Foundation
- [x] Custom themes available for integration through AppContainer + (test with custom theme)
- [x] Ommit exact prop when using: 
 	- ```<Menu route={'/'} exact>```
   <!-- - We can check whether route is set to only '/' and add "exact" automatically -->
- [x] Help label prop? Language ... 
- [x] Page component that basically wraps the functionality of ```<Menu>``` to create a page with a route and no label
- [x] Help Redux functions (functional approach)
- [x] Help pop-over menu (draft edition), show content from a static object helpItems = { 0: 'Help 0', 1: 'Help 1', ... 10: 'Help 10' }
	<!-- Help is not getting stuff from a static object but it renders the ID of the active tab/menuItem in a small pop up through Redux-->
- [ ] Help Pop-over Styling
- [x] Quick Navigation style object prop
- [ ] Quick Navigation select first tab when only 1
- [ ] Quick Navigation 'menu' icon default else from theme
- [ ] Function to open and close MenuPanel from code/state
- [ ] 404 - page not found component

### 1.1.2. Extension
- Form component
- Login component that composes the actual app login process and stores the login state. Login component is wrapping the main route component (<AppRouter />) to easily distinct between public and private routes. 
- Responsive API for component builders
- Search
- Notifications
- Error Boundaries
- Tip of the day (show tips or shout outs after a user logs in or starts the web app)
- Documentation
- How to - manual - README - [www.odeumcode.com](www.odeumcode.com)

### 1.1.3. Advanced
- React Native reusability study (what can we reuse?)
- Draggable Tabs (attach to user menu)
- Draggable Items (pages, folders, images etc...) move to Tab (Accept Drop)

