/* eslint-disable object-curly-newline */
import autobind from 'autobind-decorator';
import { HandleView, HandleType } from './HandleView';
import { RangeLineView } from './RangeLineView';
import { ScaleValueView } from './ScaleValueView';
import classes from '../slider.classes';

const POINTS_NUMBER_LIMIT = 10;

class View {
  private root: HTMLElement;

  private leftHandle: HandleView;

  private rightHandle: HandleView;

  private rangeLine: RangeLineView;

  private scaleValues: ScaleValueView[] = [];

  private scaleClickSubscriber: (position: number) => void = () => {};

  private isVertical = false;

  constructor(container: HTMLElement) {
    this.root = View.createRoot(container);
    this.leftHandle = new HandleView(this.root, HandleType.First);
    this.rightHandle = new HandleView(this.root, HandleType.Second);
    this.rangeLine = new RangeLineView(this.root);
    this.bindEventlisteners();
  }

  @autobind
  public updateIsRange(state: State) {
    this.rightHandle.switchHandle(state);
    this.rangeLine.render(state);
  }

  @autobind
  public updateIsVertical(state: State) {
    this.isVertical = state.isVertical;
    this.switchVertical(state);
    this.leftHandle.switchVertical(state);
    this.rightHandle.switchVertical(state);
    this.rangeLine.switchVertical(state);
    this.scaleValues.forEach((scaleValue: ScaleValueView) => {
      scaleValue.switchVertical(state);
    });
  }

  @autobind
  public updateValueLabelDisplayed(state: State) {
    this.leftHandle.switchLabel(state);
    this.rightHandle.switchLabel(state);
  }

  @autobind
  public updateScaleDisplayed(state: State) {
    this.scaleValues.forEach((scaleValue: ScaleValueView) => {
      scaleValue.switchLabel(state);
    });
  }

  @autobind
  public updateStep(state: State) {
    this.updateScale(state);
  }

  @autobind
  public updateMin(state: State) {
    this.updateScale(state);
  }

  @autobind
  public updateMax(state: State) {
    this.updateScale(state);
  }

  @autobind
  public updateFirstValue(state: State) {
    this.leftHandle.updateValue(state);
    this.rightHandle.updateValue(state);
    this.rangeLine.render(state);
  }

  @autobind
  public updateSecondValue(state: State) {
    this.leftHandle.updateValue(state);
    this.rightHandle.updateValue(state);
    this.rangeLine.render(state);
  }

  public setLeftHandlePositionSubscriber(subscriber: (position: number) => void) {
    this.leftHandle.setPositionSubscriber(subscriber);
  }

  public setRightHandlePositionSubscriber(subscriber: (position: number) => void) {
    this.rightHandle.setPositionSubscriber(subscriber);
  }

  public setScaleClickSubscriber(subscriber: (position: number) => void) {
    this.scaleClickSubscriber = subscriber;
  }

  private static createRoot(container: HTMLElement): HTMLElement {
    const root = document.createElement('div');
    root.classList.add(classes.root);
    container.appendChild(root);
    return root;
  }

  private switchVertical(state: State) {
    const { isVertical } = state;

    if (isVertical) this.root.classList.add(classes.rootVertical);
    else this.root.classList.remove(classes.rootVertical);
  }

  private updateScale(state: State) {
    this.removeScaleValues();
    this.createScaleValues(View.calculatePointsNumber(state), state);
  }

  private createScaleValues(pointsNumber: number, state: State) {
    const { min, max, step } = state;
    const range = max - min;

    for (let i = 0; i < pointsNumber; i += 1) {
      this.scaleValues[i] = new ScaleValueView(this.root, state, i, pointsNumber);
      this.scaleValues[i].setClickSubscriber(this.scaleClickSubscriber);
    }

    if ((range / step) % pointsNumber) {
      this.scaleValues.push(new ScaleValueView(this.root, state, pointsNumber + 1, pointsNumber));
      this.scaleValues[this.scaleValues.length - 1].setClickSubscriber(this.scaleClickSubscriber);
    }
  }

  private removeScaleValues() {
    this.scaleValues.forEach((scaleValue: ScaleValueView) => scaleValue.remove());
    this.scaleValues.length = 0;
  }

  private static calculatePointsNumber(state: State) {
    const { min, max, step } = state;
    const range = max - min;
    const stepsNumber = Math.floor(range / step) + 1;

    let calcPointsNumber = stepsNumber;
    while (calcPointsNumber > POINTS_NUMBER_LIMIT) {
      calcPointsNumber = Math.floor(calcPointsNumber / 2);
    }

    return calcPointsNumber > 1 ? calcPointsNumber : 0;
  }

  private bindEventlisteners() {
    this.root.addEventListener('click', this.clickHandler);
  }

  @autobind
  private clickHandler(event: MouseEvent) {
    this.scaleClickSubscriber(this.calculatePosition(event));
  }

  private calculatePosition(event: MouseEvent): number {
    let position = this.isVertical === true
      ? this.calculateVerticalPosition(event.clientY)
      : this.calculateHorizontalPosition(event.clientX);

    if (position > 1) position = 1;
    if (position < 0) position = 0;

    return position;
  }

  private calculateHorizontalPosition(x: number): number {
    const scaleBeginning = this.root.getBoundingClientRect().left;
    const length = this.root.offsetWidth;
    return (x - scaleBeginning) / length;
  }

  private calculateVerticalPosition(y: number): number {
    const length = this.root.offsetHeight;
    const scaleBeginning = this.root.getBoundingClientRect().top + length;
    return (scaleBeginning - y) / length;
  }
}

export { View };
