import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { WhiteThemeIcon, GreyThemeIcon, BlackThemeIcon } from './generic/Icons'
import Button from './generic/Button'
import { setSelectedTheme, toggleThemeDropdownIsOpen } from '../actions/theme'
import { getSelectedTheme, getThemeDropdownIsOpen } from '../selectors'
import Dropdown from './generic/Dropdown'

const StyledButton = styled(Button)`
	width: 100%;
`

const ThemeDropdown = () => {
	const selectedTheme = useSelector(getSelectedTheme)
	const themeDropdownIsOpen = useSelector(getThemeDropdownIsOpen)
	const dispatch = useDispatch()
	const handleOnClick = theme => {
		dispatch(setSelectedTheme(theme))
		dispatch(toggleThemeDropdownIsOpen())
	}

	return (
		<Dropdown
			selectedButtonName={selectedTheme}
			selectedOnClick={() => dispatch(toggleThemeDropdownIsOpen())}
			isOpen={themeDropdownIsOpen}
		>
			<StyledButton
				name='whiteTheme'
				onClick={() => handleOnClick('whiteTheme')}
				icon={<WhiteThemeIcon />}
				helpText='Theme'
				text='White theme'
			/>
			<StyledButton
				name='greyTheme'
				onClick={() => handleOnClick('greyTheme')}
				icon={<GreyThemeIcon />}
				helpText='Theme'
				text='Grey theme'
			/>
			<StyledButton
				name='blackTheme'
				onClick={() => handleOnClick('blackTheme')}
				icon={<BlackThemeIcon />}
				helpText='Theme'
				text='Black theme'
			/>
		</Dropdown>
	)
}

export default ThemeDropdown
