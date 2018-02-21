import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import {
	HelpPopUpTitleText,
	VerticalDivider, HorizontalDivider,
	DescriptionDivStyle, HelpComponentItem, Title
} from './HelpStyles'

export const HelpSection = (props) => {
	return (
		<React.Fragment>
			<HelpPopUpTitleText>{props.titleText}</HelpPopUpTitleText>
			<DescriptionDivStyle orientation={props.orientation} alignment={props.alignment}>
				<HelpComponentItem orientation={props.orientation}>
					<Title>{props.help_title}</Title>
					{props.help_description}
				</HelpComponentItem>
				{props.orientation === 'row' ? <VerticalDivider /> : <HorizontalDivider />}
				<HelpComponentItem orientation={props.orientation}>
					<Title>{props.help_title2}</Title>
					{props.link ? <Link to={props.link}>{props.help_description2}</Link> : props.help_description2}
				</HelpComponentItem>
			</DescriptionDivStyle>
		</React.Fragment>
	)
}

HelpSection.propTypes = {
	titleText: PropTypes.string,
	orientation: PropTypes.oneOf(['row', 'column']).isRequired,
	help_title: PropTypes.string,
	help_title2: PropTypes.string,
	help_description: PropTypes.string,
	help_description2: PropTypes.string,
	link: PropTypes.string
}