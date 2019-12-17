import {
  white,
  black,
  transparent,
  smallWindowWidthLimit,
  sidebarWidth,
  font
} from './genericConstants'

const barBackground = transparent
const iconAndFontColor = black
const whiteTheme = {
  font: font,

  sidebarWidth: sidebarWidth,

  smallWindowWidthLimit: smallWindowWidthLimit,

  shadow: 'none',

  iconSize: '24px',
  iconColor: iconAndFontColor,

  mainBackground: white,

  pictureBackground: white,

  controlBackground: barBackground,

  navigationBarBackground: barBackground,
  navigationBarHeight: '60px',

  sidebarBackground: barBackground,

  dropdownClosedBackground: barBackground,
  dropdownOpenBackground: 'hsla(0, 0%, 98%, 1)',

  buttonBackground: 'hsla(0, 0%, 100%, 0.6)',
  buttonColor: iconAndFontColor,
  buttonHoverBackground: 'hsla(0, 0%, 98%, 0.8)',
  buttonActiveBackground: 'hsla(0, 0%, 96%, 1.0)'
}

export default whiteTheme
