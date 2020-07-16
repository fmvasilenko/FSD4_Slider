import { SliderConfig } from '../sliderConfig/sliderConfig';
import { SliderState } from '../sliderState/sliderState';

class SliderDefaultValueLabel {
  private CONTAINER: HTMLElement;

  private config: SliderConfig;

  private state: SliderState;

  private CLASSES: SliderClasses;

  private ROOT: HTMLElement;

  private LABEL: HTMLElement;

  private index: number;

  constructor(
    container: HTMLElement,
    config: SliderConfig,
    state: SliderState,
    index: number,
  ) {
    this.CONTAINER = container;
    this.config = config;
    this.state = state;
    this.index = index;
    this.CLASSES = require('../sliderClasses.json');
    this.ROOT = this.createRootElement();
    this.LABEL = this.createLabel();

    this.updateValue();
    this.updateShift();
    this.switch();

    this.config.defaultValues.addSubscriber(this.updateValue.bind(this));
    this.config.defaultValues.addSubscriber(this.updateShift.bind(this));
    this.config.hasDefaultValues.addSubscriber(this.switch.bind(this));
    this.config.isVertical.addSubscriber(this.switchVertical.bind(this));
    this.config.isVertical.addSubscriber(this.updateShift.bind(this));

    this.bindEventListeners();
  }

  public remove() {
    this.ROOT.remove();
  }

  private createRootElement(): HTMLElement {
    const root = document.createElement('div');

    root.classList.add(this.CLASSES.DEFAULT_VALUE);
    if (this.config.isVertical.get() === true) root.classList.add(this.CLASSES.DEFAULT_VALUE_VERTICAL);

    return root;
  }

  private createLabel(): HTMLElement {
    const label = document.createElement('div');

    label.classList.add(`${this.CLASSES.DEFAULT_VALUE_LABEL}`);
    if (this.config.isVertical.get() === true) label.classList.add(`${this.CLASSES.DEFAULT_VALUE_LABEL_VERTICAL}`);

    this.ROOT.appendChild(label);
    return label;
  }

  private updateShift() {
    const defaultValues = this.config.defaultValues.get() as number[] | string[];
    const shift = (100 * this.index) / (defaultValues.length - 1);

    if (this.config.isVertical.get() === true) this.ROOT.style.bottom = `${shift}%`;
    else this.ROOT.style.left = `${shift}%`;
  }

  private updateValue() {
    const defaultValues = this.config.defaultValues.get() as number[] | string[];
    this.LABEL.innerHTML = `${defaultValues[this.index]}`;
  }

  private switch() {
    if (this.config.hasDefaultValues.get() === true) this.CONTAINER.appendChild(this.ROOT);
    else this.ROOT.remove();
  }

  private switchVertical(value: boolean) {
    if (value === true) {
      this.ROOT.style.left = '';
      this.ROOT.classList.add(this.CLASSES.DEFAULT_VALUE_VERTICAL);
      this.LABEL.classList.add(this.CLASSES.DEFAULT_VALUE_LABEL_VERTICAL);
    } else {
      this.ROOT.style.top = '';
      this.ROOT.classList.remove(this.CLASSES.DEFAULT_VALUE_VERTICAL);
      this.LABEL.classList.remove(this.CLASSES.DEFAULT_VALUE_LABEL_VERTICAL);
    }
  }

  private bindEventListeners() {
    this.ROOT.addEventListener('click', this.clickHandler.bind(this));
  }

  private clickHandler() {
    if (this.config.isRange.get() === false) {
      const defaultValues = this.config.defaultValues.get() as number[] | string[];
      const position = this.index / (defaultValues.length - 1);
      this.state.leftHandlePosition.set(position);
    }
  }
}

export { SliderDefaultValueLabel };
