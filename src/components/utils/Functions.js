export const sizes = {
	giant: 1170,
	desktop: 992,
	tablet: 768,
	phone: 376
}
export const convertLabelToRoute = (label) => {
	let route = label.replace(/\s+/g, '-').toLowerCase()
	route = '/' + route
	return route
}
