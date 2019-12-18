import React from 'react'
import styled, { css } from 'styled-components'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import streamSaver from 'streamsaver'
import Button from './generic/Button'
import {
  CreateIcon,
  CopyToClipboardIcon,
  SaveIcon,
  DownloadIcon,
  FitToPictureToScreenSizeIcon
} from './generic/Icons'
import { setPicture, setLoadingPicture } from '../actions/picture'
import { setErrorMessage } from '../actions/error'
import {
  getPicture,
  getLoadingPicture,
  getCreatePictureButtonColor,
  getMaxNumberOfShapesInPicture
} from '../selectors'
import fitPictureToScreen from '../picture/fitPictureToScreen'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Container = styled.div`
  display: flex;
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

const CreatePictureButton = styled(Button)`
  ${props =>
    props.disabled &&
    css`
      background-color: ${props.theme.buttonActiveBackground};
      :hover {
        background-color: ${props.theme.buttonActiveBackground};
      }
      :active {
        background-color: ${props.theme.buttonActiveBackground};
      }
    `}
`

const Control = props => {
  const loadingPicture = useSelector(getLoadingPicture)
  const createPictureButtonColor = useSelector(getCreatePictureButtonColor)
  const picture = useSelector(getPicture)
  const maxNumberOfShapesInPicture = useSelector(getMaxNumberOfShapesInPicture)
  const dispatch = useDispatch()

  const handleCreatePicture = () => {
    dispatch(setLoadingPicture(true))
    axios
      .post('/pictures/new', {
        maxNumberOfShapesInPicture
      })
      .then(response => {
        if (response.status === 200) {
          console.log('response in front')
          const picture = {
            id: response.data.id,
            shapes: response.data.shapes
          }
          dispatch(setPicture(picture))
        }
        dispatch(setLoadingPicture(false))
      })
      .catch(error => {
        dispatch(setErrorMessage(error))
      })
  }

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

  const handlePrint = () => {
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

  return (
    <Container id="control">
      <Button
        id="download-button"
        onClick={() => handlePrint()}
        icon={<DownloadIcon />}
        helpText="download"
      />
      <CopyToClipboard text={getPictureAsText()}>
        <Button
          id="copy-to-clipboard-button"
          icon={<CopyToClipboardIcon />}
          helpText="clipboard"
        />
      </CopyToClipboard>
      {/* <Button
        id="save-picture-button"
        onClick={() => handleSavePicture()}
        icon={<SaveIcon />}
        helpText="save"
        disabled={loadingPicture}
      /> */}
      <Button
        onClick={() => fitPictureToScreen()}
        icon={<FitToPictureToScreenSizeIcon />}
        helpText="fit"
      />
      <CreatePictureButton
        id="create-picture-button"
        onClick={() => handleCreatePicture()}
        icon={<CreateIcon />}
        helpText="create"
        disabled={loadingPicture}
        createPictureButtonColor={createPictureButtonColor}
      />
    </Container>
  )
}

export default Control
