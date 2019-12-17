import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setMaxNumberOfShapesInPicture } from '../../actions/picture'
import { PlusIcon, MinusIcon } from './Icons'
import { transparent } from '../../themes/genericConstants'

const SliderAndHelpTextContainer = styled.div`
  height: 60px;
  background-color: ${props => props.theme.buttonBackground};
  color: ${props => props.theme.buttonColor};
  padding-top: 18px;

  :hover {
    background-color: ${props => props.theme.buttonHoverBackground};
  }
  :active {
    background-color: ${props => props.theme.buttonActiveBackground};
  }
`

const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.transparent};
  border: none;
  padding: 0 20px;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  width: 240px;
  height: 24px;
`

const Slider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 2px;
  border-radius: 1px;
  background: ${props => props.theme.iconColor};
  outline: none;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background: ${props => props.theme.iconColor};
    cursor: pointer;
  }

  ::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background: ${props => props.theme.iconColor};
    cursor: pointer;
  }
`

const HelpText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 18px;
  font: ${props => props.theme.font};
`

const RangeSlider = props => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('10000')
  const handleOnChange = event => {
    const newValue = event.target.value
    setValue(newValue)
    dispatch(setMaxNumberOfShapesInPicture(newValue))
  }
  return (
    <>
      <SliderAndHelpTextContainer>
        <SliderContainer transparent={transparent}>
          <MinusIcon />
          <Slider
            name="max-number-of-shapes-in-picture-slider"
            type="range"
            min="10"
            max="60000"
            step="10"
            value={value}
            onChange={handleOnChange}
          />
          <PlusIcon />
        </SliderContainer>
        <HelpText>{props.helpText}</HelpText>
      </SliderAndHelpTextContainer>
    </>
  )
}

export default RangeSlider
