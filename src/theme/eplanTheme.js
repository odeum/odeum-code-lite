import ODEUM_icon from 'theme/logo_icon.svg'
import eplanLogo from 'theme/eplanTheme_logo.svg'

const eplanTheme = {
	header: {
		background: '#2C3E50',
		color: '#FFF'
	},

	menu: {
		background: '#3B97D3',
		color: '#FFF',
		selected: '#216795',
		hover: '#81C1EA',
		bottomBorder: '1px solid #3087bf'
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
		background: '#3B97D3',
		color: '#FFF',
		selected: '#3B97D3',
		hover: '#81C1EA',
		unselected: '#E3E5E5'
	},
	icon: {
		default: '#34495D',
		selected: '#FFF'
	},
	 logo: {
		 default: eplanLogo,
		 bigLogo: eplanLogo,
		 smallLogo: ODEUM_icon
	 }
}

export default eplanTheme

