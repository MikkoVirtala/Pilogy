import React from 'react'
import { useSelector } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'
import themes from '../themes/themes'
import NavigationBar from './NavigationBar'
import Sidebar from './generic/Sidebar'
import RightSidebar from './RightSidebar'
import Main from './Main'
import { getSelectedTheme, getLeftSidebarIsVisible } from '../selectors'

const Container = styled.div`
  height: 100%;
`

const LeftSidebar = styled(Sidebar)`
  z-index: 100;
  left: 0;
`

const App = () => {
  return (
    <ThemeProvider theme={themes[useSelector(getSelectedTheme)]}>
      <Container>
        <LeftSidebar visible={useSelector(getLeftSidebarIsVisible)} />
        <NavigationBar />
        <Main />
        <RightSidebar />
      </Container>
    </ThemeProvider>
  )
}

export default App
