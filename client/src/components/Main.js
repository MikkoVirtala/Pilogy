import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Control from './Control'
import drag from '../picture/drag'
import { addZoom, removeZoom } from '../picture/zoom'
import { getPicture } from '../selectors'
import convertShapesToSVG from '../picture/convertShapesToSVG/convertShapesToSVG'
import setSVGToFitItsElements from '../picture/convertShapesToSVG/setSVGToFitItsElements'
import clearPicture from '../picture/clearPicture'
import fitPictureToScreen from '../picture/fitPictureToScreen'
import { setLoadingPicture } from '../actions/picture'

const Container = styled.div`
  position: relative;
  z-index: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.mainBackground};
`

const Picture = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  z-index: 2;
  transform: scale(1);
  cursor: move;
  background-color: ${props => props.theme.mainBackground};

  // border: 1px solid orange;
`

const Main = () => {
  const picture = useSelector(getPicture)
  console.log('picture: ', picture)
  const dispatch = useDispatch()
  useEffect(() => {
    if (picture.id) {
      clearPicture()
      let svg = convertShapesToSVG(picture.shapes)
      document.getElementById('picture').appendChild(svg)
      setSVGToFitItsElements(svg)
      fitPictureToScreen()
      dispatch(setLoadingPicture(false))
    }
    return () => clearPicture()
  })

  useEffect(() => {
    const main = document.getElementById('main')
    addZoom(main)

    return () => {
      removeZoom(main)
    }
  })

  useEffect(() => {
    drag(document.getElementById('picture'))
  })

  return (
    <Container id="main">
      <Picture id="picture" />
      <Control />
    </Container>
  )
}

export default Main
