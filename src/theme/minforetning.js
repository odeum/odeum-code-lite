import ODEUM_Logo from 'theme/logo.svg'
import ODEUM_icon from 'theme/logo_icon.svg'

const MinFo = {
	app: {
		gridArea: 
		'"menupanel header"' 
		+ '"menupanel workspace"' 
		+ '"menupanel footer"',
		gridTemplateRows: '80px auto 40px',
		gridTemplateColumns: 'auto 1fr'
	},
	header: {
		height: '80px',
		background: '#2C3E50',
		color: '#FFF'
	},

	menu: {
		background: '#8395ab',
		color: '#b7c1cdff',
		selected: '',
		hover: '',
		bottomBorder: 'none'
	},

	footer: {
		background: '#F7F7F7',
		color: '#5E5E5E'
	},

	workspace: {
		background: '#ECF0F1',
		color: '#000'
	},

	tab: {
		background: '#8395ab',
		color: '#FFF',
		selected: '#b7c1cd',
		hover: '#5E5E5E',
		unselected: '#E3E5E5'
	},
	icon: {
		default: '#8395ab',
		selected: '#8395ab'
	},
	quicknav: {
		button: {
			background: '#216795',
			unselected: '#E3E5E5',
			color: '#FFF'
		},
		tab: {
			selected: '#3B97D3',
			unselected: '#000'
		}
	},
	logo: {
		margin: '5px',
		height: '35px',
		default: ODEUM_Logo,
		bigLogo: ODEUM_Logo,
		smallLogo: ODEUM_icon
	}
}

export default MinFo

