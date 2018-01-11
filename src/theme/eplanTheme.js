import ODEUM_icon from 'theme/logo_icon.svg'
import eplanLogo from 'theme/eplanTheme_logo.svg'

const eplanTheme = {
	app: {
		gridArea: 
		'"header header"' 
		+ '"menupanel workspace"' 
		+ '"footer footer"',
		gridTemplateRows: 'auto 1fr auto',
		gridTemplateColumns: 'auto 1fr'
	},
	header: {
		background: '#E98832',
		color: '#FFF'
	},

	menu: {
		background: '#FF9600',
		color: '#fff',
		selected: '#F8BB31',
		hover: '#FFA726',
		bottomBorder: '1px solid #EF6C00'
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
		background: '#F39C12',
		color: '#000',
		selected: '#F39C12',
		hover: '#FFA726',
		unselected: '#E3E5E5'
	},
	icon: {
		default: '#34495D',
		selected: '#FFF'
	},
	quicknav: {
		button: {
			background: '#E98832',
			color: '#F7F7F7'
		},
		tab: {
			selected: '#F39C12',
			unselected: '#000'
		}

	},
	logo: {
		default: eplanLogo,
		bigLogo: eplanLogo,
		smallLogo: ODEUM_icon
	}
}

export default eplanTheme

