import React from 'react'
import { Editor as Draft, EditorState, RichUtils, getDefaultKeyBinding } from 'draft-js'
import { InlineStyleControls } from './InlineStyleControls'
import { BlockStyleControls } from './BlockStyleControls'
import { HeaderBlockControls } from './HeaderBlockControls'
class Editor extends React.Component {
	constructor(props) {
		super(props)
		this.state = { editorState: EditorState.createEmpty() }
		this.onChange = (editorState) => this.setState({ editorState })
	}
	shouldComponentUpdate(nextState) {
		if (nextState !== this.state)
			return true
		else
			return true
	}
	_handleKeyCommand(command, editorState) {
		const newState = RichUtils.handleKeyCommand(editorState, command)
		if (newState) {
			this.onChange(newState)
			return true
		}
		return false
	}
	_mapKeyToEditorCommand(e) {
		switch (e.keyCode) {
			case 9: // TAB
				const newEditorState = RichUtils.onTab(
					e,
					this.state.editorState,
					4, /* maxDepth */
				)
				if (newEditorState !== this.state.editorState) {
					this.onChange(newEditorState)
				}
				return
			default:
				break
		}
		return getDefaultKeyBinding(e)
	}
	_toggleBlockType = (blockType) => {
		this.onChange(
			RichUtils.toggleBlockType(
				this.state.editorState,
				blockType
			)
		)
	}
	_toggleInlineStyle = (inlineStyle) => {
		this.onChange(
			RichUtils.toggleInlineStyle(
				this.state.editorState,
				inlineStyle
			)
		)
	}
	render() {
		const { editorState } = this.state
		// If the user changes block type before entering any text, we can
		// either style the placeholder or hide it. Let's just hide it now.
		// // let className = 'RichEditor-editor'
		// var contentState = editorState.getCurrentContent()
		// if (!contentState.hasText()) {
		// 	if (contentState.getBlockMap().first().getType() !== 'unstyled') {
		// 		className += ' RichEditor-hidePlaceholder'
		// 	}
		// }
		return (
			<div className="RichEditor-root" style={{ borderRadius: '3px', border: '1px solid #ddd' }}>
				<div style={{ display: 'flex', flexFlow: 'row nowrap', alignItems: 'center', borderRadius: '3px', marginTop: '10px', marginBottom: '10px' }}>
					<HeaderBlockControls
						editorState={editorState}
						onToggle={this._toggleBlockType}
					/>
					<BlockStyleControls
						editorState={editorState}
						onToggle={this._toggleBlockType}
					/>
					<InlineStyleControls
						editorState={editorState}
						onToggle={this._toggleInlineStyle}
					/>
				</div>
				<div onClick={this.focus} style={{ margin: '3px', paddingTop: '10px', borderTop: '1px solid #ddd' }}>
					<Draft
						blockStyleFn={getBlockStyle}
						customStyleMap={styleMap}
						editorState={editorState}
						handleKeyCommand={this._handleKeyCommand}
						keyBindingFn={this._mapKeyToEditorCommand}
						onChange={this.onChange}
						placeholder="Tell a story..."
						ref="editor"
						spellCheck={true}
					/>
				</div>
			</div>
		)
	}
}
// this is custom Styling buttons, this is what we need badly
const styleMap = {
	BOLD: {
		fontWeight: 700,
	},
	CODE: {
		backgroundColor: 'rgba(0, 0, 0, 0.05)',
		fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
		fontSize: 40,
		padding: 2,
	},
}
function getBlockStyle(block) {
	switch (block.getType()) {
		case 'blockquote': return 'RichEditor-blockquote'
		default: return null
	}
}

export default Editor