import styled from 'styled-components'
import {
	Spreadsheet,
	Cog,
	PlusCircle,
	Disc,
	HelpCircle,
	Sun,
	Moon,
	Cloud,
	ErrorCircle,
	Save,
	CopyAlt,
	Download
} from 'styled-icons/boxicons-solid'
import { Plus, Minus, Expand } from 'styled-icons/boxicons-regular'

const ButtonIconStyle = props => `
  width: ${props.theme.iconSize};
  height: ${props.theme.iconSize};
  color: ${props.theme.iconColor};
  margin-top: 18px;
  margin-bottom: auto;
`

export const MenuIcon = styled(Spreadsheet)`
	${props => ButtonIconStyle(props)}
`
export const ErrorIcon = styled(ErrorCircle)`
	${props => ButtonIconStyle(props)}
`
export const HelpIcon = styled(HelpCircle)`
	${props => ButtonIconStyle(props)}
`
export const CogIcon = styled(Cog)`
	${props => ButtonIconStyle(props)}
`
export const DownloadIcon = styled(Download)`
	${props => ButtonIconStyle(props)}
`
export const CopyToClipboardIcon = styled(CopyAlt)`
	${props => ButtonIconStyle(props)}
`
export const SaveIcon = styled(Save)`
	${props => ButtonIconStyle(props)}
`
export const CreateIcon = styled(PlusCircle)`
	${props => ButtonIconStyle(props)}
`
export const CenterIcon = styled(Disc)`
	${props => ButtonIconStyle(props)}
`
export const WhiteThemeIcon = styled(Sun)`
	${props => ButtonIconStyle(props)}
`
export const GreyThemeIcon = styled(Cloud)`
	${props => ButtonIconStyle(props)}
`
export const BlackThemeIcon = styled(Moon)`
	${props => ButtonIconStyle(props)}
`
export const FitToPictureToScreenSizeIcon = styled(Expand)`
	${props => ButtonIconStyle(props)}
`

const IconStyle = props => `
  width: ${props.theme.iconSize};
  height: ${props.theme.iconSize};
  color: ${props.theme.iconColor};
  margin: auto;
`

export const PlusIcon = styled(Plus)`
	${props => IconStyle(props)}
`

export const MinusIcon = styled(Minus)`
	${props => IconStyle(props)}
`
