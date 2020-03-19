import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import streamSaver from 'streamsaver'
import Button from './generic/Button'
import {
	CopyToClipboardIcon,
	DownloadIcon,
	FitToPictureToScreenSizeIcon
} from './generic/Icons'
import { setErrorMessage } from '../actions/error'
import { closeRightSidebar } from '../actions/sidebar'
import { getPicture } from '../selectors'
import fitPictureToScreen from '../picture/fitPictureToScreen'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import CreatePictureButton from './generic/CreatePictureButton'

const Container = styled.div`
	display: ${props => (props.picture ? 'flex' : 'none')};
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: 0;
	z-index: 99;
	width: 100%;
	background-color: ${props => props.theme.controlBackground};
	box-shadow: ${props => props.theme.shadow};
`

const Control = props => {
	const picture = useSelector(getPicture)
	const dispatch = useDispatch()

	const handleSavePicture = () => {
		axios
			.post('/pictures', {
				picture: picture
			})
			.then(response => {
				console.log('response: ', response)
			})
			.catch(error => {
				dispatch(setErrorMessage('Network error'))
			})
	}

	const getPictureAsText = () =>
		document.getElementById('picture')
			? document.getElementById('picture').innerHTML
			: ''

	const download = () => {
		if (
			document.getElementById('picture') &&
			document.getElementById('picture').innerHTML
		) {
			const svg = document.getElementById('picture').innerHTML
			const fileStream = streamSaver.createWriteStream(`${picture.id}.svg`)
			new Response(svg).body.pipeTo(fileStream).then(error => {
				dispatch(setErrorMessage(error))
			})
		}
	}

	const handleDownload = () => {
		download()
		dispatch(closeRightSidebar())
	}

	const handleFitPictureToScreen = () => {
		fitPictureToScreen()
		dispatch(closeRightSidebar())
	}

	return (
		<Container id='control' picture={picture}>
			<Button
				id='download-button'
				onClick={handleDownload}
				icon={<DownloadIcon />}
				helpText='Download'
			/>
			{/* <CopyToClipboard text={getPictureAsText()}>
				<Button
					id='copy-to-clipboard-button'
					icon={<CopyToClipboardIcon />}
					helpText='Clipboard'
				/>
			</CopyToClipboard> */}
			{/* <Button
        id="save-picture-button"
        onClick={() => handleSavePicture()}
        icon={<SaveIcon />}
        helpText="Save"
        disabled={loadingPicture}
      /> */}
			<Button
				onClick={handleFitPictureToScreen}
				icon={<FitToPictureToScreenSizeIcon />}
				helpText='Fit'
			/>
			<CreatePictureButton />
		</Container>
	)
}

export default Control
