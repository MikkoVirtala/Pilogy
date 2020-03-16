import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { getRightSidebarIsVisible } from '../selectors'
import Sidebar from './generic/Sidebar'
import ThemeDropdown from './ThemeDropdown'
import RangeSlider from './generic/RangeSlider'

const StyledSidebar = styled(Sidebar)`
	z-index: 101;
	right: 0;
`

const RightSidebar = () => {
	return (
		<StyledSidebar visible={useSelector(getRightSidebarIsVisible)}>
			<ThemeDropdown />
			<RangeSlider text='Picture complexity' />
		</StyledSidebar>
	)
}

export default RightSidebar
