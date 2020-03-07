import React from 'react'
import styled from 'styled-components'
import CreatePictureButton from './generic/CreatePictureButton'

const CreatePictureText = styled.div`
	font: ${props => props.theme.largeFont};
	color: ${props => props.theme.textColor};
	margin: 8px;
`

const CreatePictureTextAndButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	font: ${props => props.theme.largeFont};
	color: ${props => props.theme.textColor};

	@media screen and (max-width: 480px) {
		flex-direction: column;
	}
`

const Landing = () => {
	return (
		<CreatePictureTextAndButtonContainer>
			<CreatePictureText>Press</CreatePictureText>
			<CreatePictureButton />
			<CreatePictureText>to create</CreatePictureText>
			<CreatePictureText>a new picture!</CreatePictureText>
		</CreatePictureTextAndButtonContainer>
	)
}

export default Landing
