import ODEUM_Logo from 'theme/logo_red.svg'
import ODEUM_icon from 'theme/logo_icon.svg'

const theme = {
	header: {
		background: '#7c1313',
		color: '#FFEBEE'
	},

	menu: {
		background: '#C62828',
		color: '#FFEBEE',
		selected: '#EF5350',
		hover: '#F44336',
		bottomBorder: '1px solid #CF7840'
	},

	footer: {
		background: '#FFEBEE',
		color: '#A1A1A1'
	},

	workspace: {
		background: '#FFEBEE',
		color: '#fff'
	},

	tab: {
		background: '#C4682C',
		color: '#fff',
		selected: '#EF5350',
		hover: '#F44336',
		unselected: '#FFCDD2'
	},
	icon: {
		default: '#34495D',
		selected: '#FFF'
	},
	quicknav: {
		button: {
			background: '#7c1313',
			color: '#FFF'
		}
	},
	 logo: {
		 default: ODEUM_Logo,
		 bigLogo: ODEUM_Logo,
		 smallLogo: ODEUM_icon
	 }
}

export default theme

