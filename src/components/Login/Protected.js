import React, { PureComponent } from 'react'

class Protected extends PureComponent {
	// render() {
	// 	if (this.props.isProtected === undefined) {
	// 		return null
	// 	} else { 
	// 		console.log(this.props.children)
	// 		return (
	// 			<div>
	// 				{!this.props.isProtected ? this.props.children : null}										
	// 			</div>
	// 		)}
	// }
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}

export default Protected
