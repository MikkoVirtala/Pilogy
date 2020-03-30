import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import { getPicture } from '../selectors'
import convertShapesToSVG from '../picture/convertShapesToSVG/convertShapesToSVG'
import setSVGToFitItsElements from '../picture/convertShapesToSVG/setSVGToFitItsElements'
import clearPicture from '../picture/clearPicture'
import fitPictureToScreen from '../picture/fitPictureToScreen'
import { setLoadingPicture } from '../actions/picture'

const PictureWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`

const PictureRoot = styled.div`
	width: 500px;
	height: 500px;
	z-index: 2;
	cursor: all-scroll;
	background-color: ${props => props.theme.mainBackground};
`

const Picture = () => {
	const picture = useSelector(getPicture)
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
		const transformComponent = document.getElementsByClassName(
			'react-transform-component'
		)
		if (transformComponent && transformComponent[0]) {
			transformComponent[0].style.overflow = 'visible'
		}
	})

	return (
		<PictureWrapper>
			<TransformWrapper
				options={{ minScale: 0.1, maxScale: 100000 }}
				wheel={{ step: 2.5 }}
			>
				<TransformComponent>
					<PictureRoot id='picture' />
				</TransformComponent>
			</TransformWrapper>
		</PictureWrapper>
	)
}

export default Picture
