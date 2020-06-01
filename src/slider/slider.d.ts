interface SliderFunction {
  (config?: ImportedSliderConfig, 
    slide?: SliderCallBackFunction): JQuery;
}

interface JQuery {
  slider: ISlider
  setValue(value: number): void
  setFirstValue(value: number): void
  setSecondValue(value: number): void
  getFirstValue(): number
  getSecondValue(): number
}

interface ISlider extends SliderFunction {}

interface Slider {
  ROOT: HTMLElement
  getConfig(): SliderConfig
  calculateLeftHandleValue(position: number): void
  calculateRightHandleValue(position: number): void
}

interface ImportedSliderConfig {
  isRange?: boolean
  hasDefaultValues?: boolean
  minValue?: number
  maxValue?: number
  step?: number
  leftHandleValue?: number
  rightHandleValue?: number
  defaultValues?: number[] | string[]
}

interface SliderConfig {
  isRange: boolean
  hasDefaultValues: boolean
  isVertical: boolean
  valueLabelDisplayed: boolean
  limitsDisplayed: boolean
  minValue: number
  maxValue: number
  step: number
  leftHandleValue: number
  rightHandleValue: number
  defaultValues: number[] | string[]
}

interface SliderCallBackFunction {
  (firstValue: number, secondValue: number): void
}

interface SliderClasses {
  SLIDER: string
  SLIDER_VERTICAL: string
  HANDLE: string
  HANDLE_VERTICAL: string
  LEFT_HANDLE: string
  RIGHT_HANDLE: string
  RANGE_LINE: string
  RANGE_LINE_VERTICAL: string
  MAX_VALUE: string
  MAX_VALUE_VERTICAL: string
  MIN_VALUE: string
  MIN_VALUE_VERTICAL: string
  VALUE_LABEL: string
  LEFT_HANDLE_LABEL: string
  LEFT_HANDLE_LABEL_VERTICAL: string
  RIGHT_HANDLE_LABEL: string
  RIGHT_HANDLE_LABEL_VERTICAL: string
  DEFAULT_VALUE: string
  DEFAULT_VALUE_VERTICAL: string
  DEFAULT_VALUE_LABEL: string
  DEFAULT_VALUE_LABEL_VERTICAL: string
}

interface SliderView {
  ROOT: HTMLElement
  CLASSES: SliderClasses
  getConfig(): SliderConfig
}

interface HandleState {
  isDragged: boolean,
  value: number
}

interface ModelState {
  leftHandleValue: number
  rightHandleValue: number
}