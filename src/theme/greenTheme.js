import ODEUM_icon from 'theme/logo_icon.svg'
import logoGreen from 'theme/logo_green.svg'

const greenTheme = {
	header: {
		background: '#1B5E20',
		color: '#E8F5E9'
	},

	menu: {
		background: '#2E7D32',
		color: '#E8F5E9',
		selected: '#1B5E20',
		hover: '#66BB6A',
		bottomBorder: '1px solid #1B5E20'
	},

	footer: {
		background: '#C8E6C9',
		color: '#A1A1A1'
	},

	workspace: {
		background: '#E8F5E9',
		color: '#fff'
	},

	tab: {
		background: '#A5D6A7',
		color: '#fff',
		selected: '#43A047',
		hover: '#66BB6A',
		unselected: '#A5D6A7'
	},
	icon: {
		default: '#34495D',
		selected: '#E8F5E9'
	},
	 logo: {
		 default: logoGreen,
		 bigLogo: logoGreen,
		 smallLogo: ODEUM_icon
	 }
}

export default greenTheme

