import {
	white,
	black,
	transparent,
	smallWindowWidthLimit,
	sidebarWidth,
	helpTextFont,
	bodyFont,
	logoFont,
	largeFont
} from './genericConstants'

const barBackground = transparent
const iconAndTextColor = white
const blackTheme = {
	helpTextFont: helpTextFont,
	bodyFont: bodyFont,
	logoFont: logoFont,
	largeFont: largeFont,
	textColor: iconAndTextColor,

	sidebarWidth: sidebarWidth,

	smallWindowWidthLimit: smallWindowWidthLimit,

	shadow: 'none',

	iconSize: '24px',
	iconColor: iconAndTextColor,

	mainBackground: black,

	pictureBackground: black,

	controlBackground: barBackground,

	navigationBarBackground: barBackground,
	navigationBarHeight: '60px',

	sidebarBackground: barBackground,

	dropdownClosedBackground: barBackground,
	dropdownOpenBackground: 'hsla(0, 0%, 10%, 1)',

	buttonColor: iconAndTextColor,
	buttonBackground: 'hsla(0, 0%, 0%, 0.6)',
	buttonHoverBackground: 'hsla(0, 0%, 10%, 0.8)',
	buttonActiveBackground: 'hsla(0, 0%, 12%, 1.0)'
}

export default blackTheme
