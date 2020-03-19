import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import Button from './generic/Button'
import { MenuIcon, ErrorIcon, CogIcon, HelpIcon } from './generic/Icons'
import { toggleSidebarVisibility } from '../actions/sidebar'
import { toggleHelpVisibility } from '../actions/help'
import {
	getLeftSidebarIsVisible,
	getRightSidebarIsVisible,
	getErrorMessage
} from '../selectors'
// import { PilogyLogo } from '../resources/PilogyLogo1.svg'
// import Pilogyp from '../resources/PilogyLogo1.svg'
// import { ReactComponent as PilogyLogo1 } from '../resources/PilogyLogo1.svg'

const Container = styled.div`
	z-index: 102;
	position: fixed;
	top: 0;
	width: 100%;
	height: ${props => props.theme.navigationBarHeight};
	background-color: ${props => props.theme.navigationBarBackground};
	box-shadow: ${props => props.theme.shadow};
`

const Logo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	float: left;
	background-color: ${props => props.theme.buttonBackground};
	font: ${props => props.theme.logoFont};
	color: ${props => props.theme.textColor};
	min-width: 60px;
	min-height: 60px;
	width: 60px;
	height: 60px;
`

const ToggleLeftSidebarButton = styled(Button)`
	float: left;
`

const ShowErrorMessageButton = styled(Button)`
	float: right;
`

const ToggleHelpButton = styled(Button)`
	float: right;
`

const ToggleRightSidebarButton = styled(Button)`
	float: right;
`

const NavigationBar = () => {
	const smallWindowWidthLimit = useContext(ThemeContext).smallWindowWidthLimit
	const leftSidebarIsVisible = useSelector(getLeftSidebarIsVisible)
	const rightSidebarIsVisible = useSelector(getRightSidebarIsVisible)
	const errorMessage = useSelector(getErrorMessage)
	const dispatch = useDispatch()
	// console.log('PilogyLogo1: ', PilogyLogo1)

	const handleOnClick = sidebar => {
		windowHasSmallWidth() && setOtherSidebarsInvisible(sidebar)
		toggle(sidebar)
	}
	const windowHasSmallWidth = () => window.innerWidth < smallWindowWidthLimit
	const setOtherSidebarsInvisible = sidebar => {
		sidebar !== 'left' && leftSidebarIsVisible && toggle('left')
		sidebar !== 'right' && rightSidebarIsVisible && toggle('right')
	}
	const toggle = sidebar => dispatch(toggleSidebarVisibility(sidebar))

	return (
		<Container>
			{/* <ToggleLeftSidebarButton
				onClick={() => handleOnClick('left')}
				icon={<MenuIcon />}
				helpText='menu'
			/> */}
			{/* <PilogyLogo1 /> */}
			<Logo>
				{/* <img
					src={require('../resources/PilogyLogo1.svg')}
					width='24'
					height='24'
				/>
				ilogy */}
				Pilogy
			</Logo>
			<ToggleRightSidebarButton
				onClick={() => handleOnClick('right')}
				icon={<CogIcon />}
				helpText='Settings'
			/>
			<ToggleHelpButton
				onClick={() => dispatch(toggleHelpVisibility())}
				icon={<HelpIcon />}
				helpText='Help'
			/>
			{errorMessage && (
				<ShowErrorMessageButton
					onClick={() => dispatch(toggleHelpVisibility())}
					icon={<ErrorIcon />}
					helpText='Error'
				/>
			)}
		</Container>
	)
}

export default NavigationBar
