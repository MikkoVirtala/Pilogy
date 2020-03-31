import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { getPicture } from '../selectors'
import Landing from './Landing'
import Picture from './Picture'

const Container = styled.div`
	position: relative;
	z-index: 1;
	overflow: hidden;
	width: 100%;
	height: 100%;
	cursor: ${props => (props.picture ? 'all-scroll' : 'default')};
	background-color: ${props => props.theme.mainBackground};
`

const Main = () => {
	const picture = useSelector(getPicture)

	return (
		<Container id='main' picture={picture}>
			{picture ? <Picture /> : <Landing />}
		</Container>
	)
}

export default Main
