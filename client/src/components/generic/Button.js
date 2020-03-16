import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { getHelpIsVisible } from '../../selectors'

const StyledButton = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	cursor: pointer;
	font: ${props => props.theme.bodyFont};
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

const IconAndLoadingAndHelpTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	font: ${props => props.theme.helpTextFont};
	min-width: 60px;
	min-height: 60px;
	width: 60px;
	height: 60px;
`

const LoadingAndHelpTextContainer = styled.label`
	cursor: pointer;
	margin-bottom: 4px;
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
			<IconAndLoadingAndHelpTextContainer>
				{props.icon}
				<LoadingAndHelpTextContainer>
					{props.loading ? props.loadingText : helpIsVisible && props.helpText}
				</LoadingAndHelpTextContainer>
			</IconAndLoadingAndHelpTextContainer>
			{props.text}
		</StyledButton>
	)
}

export default Button
