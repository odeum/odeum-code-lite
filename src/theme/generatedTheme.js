export const theme = {
	app: { 
		gridArea: '"header header""menupanel workspace""footer footer"',
		gridTemplateRows: 'auto 1fr auto',
		gridTemplateColumns: 'auto 1fr',
		width: '100vw',
		height: '100vh',
	},
	header: { 
		height: '80px',
		background: '#2C3E50',
		color: '#FFF',
	},
	menu: { 
		background: '#3B97D3',
		color: '#FFF',
		selected: '#216795',
		hover: '#81C1EA',
		border: '1px solid #3087bf',
		textHover: '#FFF',
		fontSize: 'inherit',
	},
	footer: { 
		background: '#F7F7F7',
		color: '#5E5E5E',
	},
	workspace: { 
		background: '#ECF0F1',
		color: '#000',
	},
	tab: { 
		background: '#3B97D3',
		color: '#FFF',
		selected: '#3B97D3',
		hover: '#81C1EA',
		unselected: '#E3E5E5',
	},
	icon: { 
		default: '#34495D',
		selected: '#FFF',
	},
	quicknav: { 
		button: { 
			background: '#216795',
			unselected: '#E3E5E5',
			color: '#FFF',
		},
		tab: { 
			selected: '#3B97D3',
			unselected: '#000',
		},
	},
	logo: { 
		margin: '5px',
		height: '35px',
		default: '/static/media/logo.5d5d9eef.svg',
	},
	input: { 
		color: '#2C3E50',
		background: '#ECF0F1',
		focusColor: '#13A085',
		borderRadius: '4px',
	},
	button: { 
		background: '#216795',
		color: 'white',
		height: '30px',
	},
}