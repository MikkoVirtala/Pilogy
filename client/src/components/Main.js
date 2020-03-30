import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import Control from './Control'
import drag from '../picture/drag'
import { getPicture } from '../selectors'
import convertShapesToSVG from '../picture/convertShapesToSVG/convertShapesToSVG'
import setSVGToFitItsElements from '../picture/convertShapesToSVG/setSVGToFitItsElements'
import clearPicture from '../picture/clearPicture'
import fitPictureToScreen from '../picture/fitPictureToScreen'
import { setLoadingPicture } from '../actions/picture'
import Landing from './Landing'

const Container = styled.div`
	position: relative;
	z-index: 1;
	overflow: hidden;
	width: 100%;
	height: 100%;
	cursor: ${props => (props.picture ? 'all-scroll' : 'default')};
	background-color: ${props => props.theme.mainBackground};
`

const Picture = styled.div`
	width: 500px;
	height: 500px;
	z-index: 2;
	cursor: all-scroll;
	background-color: ${props => props.theme.mainBackground};
`

const PictureWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`

const Main = () => {
	const picture = useSelector(getPicture)
	console.log('picture: ', picture)
	const dispatch = useDispatch()

	useEffect(() => {
		window.addEventListener('resize', fitPictureToScreen)
		return () => window.removeEventListener('resize', fitPictureToScreen)
	})

	useEffect(() => {
		if (picture) {
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
		drag(document.getElementById('picture'))
	})

	useEffect(() => {
		const transformComponent = document.getElementsByClassName(
			'react-transform-component'
		)
		if (transformComponent && transformComponent[0]) {
			transformComponent[0].style.overflow = 'visible'
		}
	})

	return (
		<Container id='main' picture={picture}>
			{picture ? (
				<PictureWrapper>
					<TransformWrapper>
						<TransformComponent>
							<Picture id='picture' />
						</TransformComponent>
					</TransformWrapper>
				</PictureWrapper>
			) : (
				<Landing />
			)}
			<Control />
		</Container>
	)
}

export default Main
