import greenLogo from 'theme/logo_green.svg'

const greenTheme = {
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
		background: '#1B5E20',
		color: '#E8F5E9'
	},

	menu: {
		background: '#2E7D32',
		color: '#E8F5E9',
		selected: '#1B5E20',
		hover: '#66BB6A',
		border: '1px solid #1B5E20',
		textHover: '#E8F5E9',
		fontSize: '1em'
	},

	footer: {
		background: '#C8E6C9',
		color: '#A1A1A1'
	},

	workspace: {
		background: '#E8F5E9',
		color: '#000'
	},

	tab: {
		color: '#000',
		activeColor: '#fff',
		selected: '#43A047',
		hover: '#66BB6A',
		unselected: '#A5D6A7'
	},

	icon: {
		default: '#34495D',
		selected: '#E8F5E9'
	},

	quicknav: {
		button: {
			background: '#1B5E20',
			color: '#FFF',
			unselected: '#E3E5E5',
		},
		menu: {
			background: '#1B5E20',
			color: '#FFF',
			unselected: '#E3E5E5',
		},
		tab: {
			selected: '#43A047',
			unselected: '#000',

		}
	},
	logo: {
		margin: '5px',
		height: '35px',
		default: greenLogo
	}
}

export default greenTheme

