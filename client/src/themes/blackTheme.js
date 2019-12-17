import {
  white,
  black,
  transparent,
  smallWindowWidthLimit,
  sidebarWidth,
  font
} from './genericConstants'

const barBackground = transparent
const iconAndFontColor = white
const blackTheme = {
  font: font,

  sidebarWidth: sidebarWidth,

  smallWindowWidthLimit: smallWindowWidthLimit,

  shadow: 'none',

  iconSize: '24px',
  iconColor: iconAndFontColor,

  mainBackground: black,

  pictureBackground: black,

  controlBackground: barBackground,

  navigationBarBackground: barBackground,
  navigationBarHeight: '60px',

  sidebarBackground: barBackground,

  dropdownClosedBackground: barBackground,
  dropdownOpenBackground: 'hsla(0, 0%, 10%, 1)',

  buttonBackground: 'hsla(0, 0%, 0%, 0.6)',
  buttonColor: iconAndFontColor,
  buttonHoverBackground: 'hsla(0, 0%, 10%, 0.8)',
  buttonActiveBackground: 'hsla(0, 0%, 12%, 1.0)'
}

export default blackTheme
