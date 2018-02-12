import React from 'react'
import EditorButton from './EditorButton'
import { ButtonContainer } from './HelpEditorStyles'

var INLINE_STYLES = [
	{ label: 'Bold', style: 'BOLD' },
	{ label: 'Italic', style: 'ITALIC' },
	{ label: 'Underline', style: 'UNDERLINE' },
	{ label: 'Code', style: 'CODE' }, //tied to styleMap
]
export const InlineStyleControls = (props) => {
	var currentStyle = props.editorState.getCurrentInlineStyle()
	return (
		<ButtonContainer>
			{INLINE_STYLES.map(type =>
				<EditorButton
					key={type.label}
					active={currentStyle.has(type.style)}
					label={type.label}
					onToggle={props.onToggle}
					style={type.style}
				/>
			)}
		</ButtonContainer>
	)
}