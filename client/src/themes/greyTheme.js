import {
	white,
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
const greyTheme = {
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

	mainBackground: 'hsla(0, 0%, 12%, 1.0)',

	pictureBackground: 'hsla(0, 0%, 12%, 1.0)',

	controlBackground: barBackground,

	navigationBarBackground: barBackground,
	navigationBarHeight: '60px',

	sidebarBackground: barBackground,

	dropdownClosedBackground: barBackground,
	dropdownOpenBackground: 'hsla(0, 0%, 22%, 1)',

	buttonColor: iconAndTextColor,
	buttonBackground: 'hsla(0, 0%, 12%, 0.6)',
	buttonHoverBackground: 'hsla(0, 0%, 22%, 0.8)',
	buttonActiveBackground: 'hsla(0, 0%, 24%, 1.0)'
}

export default greyTheme
