export function spanRowCalc(grid, gridName) {
	try {

		var rows = 0
		var grids = grid.split('"')
		grids = grids.filter(c => c.length > 0)
		grids.forEach((child, i) => {
			if (child.includes(gridName))
				rows = rows + 1
		})
		return rows
	}
	catch (ex) {
		console.error('CSS Grid Theme props are wrong')
	}
}

export function spanCalc(grid, gridName, pos) {
	try {

		var r = 0
		var col = 0
		var grids = grid.split('"')
		grids = grids.filter(c => c.length > 0)
		grids.forEach((child, row) => {
			child.split(' ').forEach((c, column) => {
				if (c.includes(gridName))
				{
					r = r + 1 
					col = col + 1
				}
			})
		})
		if (pos === 'column')
			return col
		else
			return r
	}
	catch (ex) {
		console.error('CSS Grid Theme props are wrong')
	}
}
export function rowColCalc(grid, gridName, pos) {
	try {

		var r = 0
		var col = 0
		var grids = grid.split('"')
		grids = grids.filter(c => c.length > 0)
		grids.forEach((child, row) => {
			child.split(' ').forEach((c, column) => {
				if (c.includes(gridName))
				{
					r = r === 0 ? row + 1 : r
					col = col === 0 ? column + 1 : col
				}
			})
		})
		if (pos === 'column')
			return col
		else
			return r
	}
	catch (ex) {
		console.error('CSS Grid Theme props are wrong')
	}
}
export const convertLabelToRoute = (label) => {
	let route = label.replace(/\s+/g, '-').toLowerCase()
	route = '/' + route
	return route
}

export const isExact = (route) => {
	if (route === "" || route === "/")
		return true
	else
		return false
}