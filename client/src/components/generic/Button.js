import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { getHelpIsVisible } from '../../selectors'

const StyledButton = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	font: ${props => props.theme.font};
	background-color: ${props => props.theme.buttonBackground};
	color: ${props => props.theme.buttonColor};
	border: none;
	padding: 0;
	text-decoration: none;
	white-space: nowrap;
	overflow: hidden;

	@media (hover: hover) {
		:hover {
			background-color: ${props => props.theme.buttonHoverBackground};
		}
	}
	:focus {
		outline: none;
	}
	:active {
		background-color: ${props => props.theme.buttonActiveBackground};
	}
`

const IconAndHelpTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font: ${props => props.theme.font};
	min-width: 60px;
	min-height: 60px;
	width: 60px;
	height: 60px;
`

const Button = props => {
	const helpIsVisible = useSelector(getHelpIsVisible)
	return (
		<StyledButton
			id={props.id}
			className={props.className}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			<IconAndHelpTextContainer>
				{props.icon}
				{helpIsVisible && props.helpText}
			</IconAndHelpTextContainer>
			{props.text}
		</StyledButton>
	)
}

export default Button
