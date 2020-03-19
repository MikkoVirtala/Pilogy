import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: block;
	overflow-x: hidden;
	overflow-y: hidden;
	position: fixed;
	top: 0;
	width: ${props => (props.visible ? `${props.theme.sidebarWidth}` : '0')};
	height: 100vh;
	background-color: ${props => props.theme.sidebarBackground};
	box-shadow: ${props => (props.visible ? `${props.theme.shadow}` : 'none')};
	transition-property: width, box-shadow;
	transition-duration: 0.44s, 0s;
	transition-delay: 0s, ${props => (props.visible ? '0s' : '0.24s')};
`

const Sidebar = props => (
	<Container className={props.className} visible={props.visible}>
		{props.children}
	</Container>
)

export default Sidebar
