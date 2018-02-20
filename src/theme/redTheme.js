import redLogo from 'theme/logo_red.svg'

const theme = {
	app: {
		gridArea:
			'"header header"'
			+ '"menupanel workspace"'
			+ '"footer footer"',
		gridTemplateRows: 'auto 1fr auto',
		gridTemplateColumns: 'auto 1fr'
	},

	header: {
		height: '80px',
		background: '#7c1313',
		color: '#FFEBEE'
	},

	menu: {
		background: '#C62828',
		color: '#FFEBEE',
		selected: '#EF5350',
		hover: '#F44336',
		border: '1px solid #CF7840',
		textHover: '#FFEBEE',
		fontSize: '1em'
	},

	footer: {
		background: '#FFEBEE',
		color: '#A1A1A1'
	},

	workspace: {
		background: '#FFEBEE',
		color: '#000'
	},

	tab: {
		color: '#000',
		activeColor: '#FFF',
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
			unselected: '#E3E5E5',
			color: '#FFF'
		},
		menu: {
			background: '#7c1313',
			unselected: '#E3E5E5',
			color: '#FFF'
		},
		tab: {
			selected: '#EF5350',
			unselected: '#000'
		}
	},
	logo: {
		margin: '5px',
		height: '35px',
		default: redLogo
	}
}

export default theme

