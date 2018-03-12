import { createStore } from 'redux'

const SET_HELP_ID = 'SetHelpID'
const APP_ID = 'APP_ID'
/**
 * @param {any} helpID
 * @private REDUX Action
 * @description Set the HelpID internal
 */

const setHelp = (helpID) => ({
	type: SET_HELP_ID,
	payload: helpID
})

const setApp = (appID) => ({
	type: APP_ID,
	payload: appID
})

const initialState = {
	app_id: '',
	helpID: 0
}
/**
 * @param {any} [state=initialState] 
 * @param {any} action 
 * @returns {state}
 * @description Help Reducers
 */

const HelpReducer = (state = initialState, action) => {
	switch (action.type) {
		case APP_ID:
			return {
				appID: action.payload
			}
		case SET_HELP_ID:
			return {

				helpID: action.payload
			}

		default:
			return state
	}
}

/**
 * @description Redux Store
 */
const store = createStore(HelpReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const SetHelpID = (id) => {
	store.dispatch(setHelp(id))
}

export const GetHelpID = () => {
	return store.getState().helpID
}

export const SetAppID = (id) => {
	store.dispatch(setApp(id))
}

export const GetAppID = (id) => {
	return store.getState().app_id
}