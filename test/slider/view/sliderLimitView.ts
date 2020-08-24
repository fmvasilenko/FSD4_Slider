/* eslint-disable @typescript-eslint/no-unused-vars */
import { expect } from 'chai';
import { SliderLimitView } from '../../../src/slider/view/SliderLimitView';
import { SliderConfig } from '../../../src/slider/sliderConfig/SliderConfig';
import { SliderState } from '../../../src/slider/sliderState/SliderState';

const jsdom = require('jsdom');
const CLASSES: SliderClasses = require('../../../src/slider/sliderClasses.json');

const { JSDOM } = jsdom;
const dom = new JSDOM('<!doctype html><html><body><div class="slider"></div></body></html>');
(global as any).window = dom.window;
(global as any).document = window.document;

enum Type { MinVal, MaxVal }

function createMouseEvent(type: string, x: number, y: number): MouseEvent {
  const mouseEvent = document.createEvent('MouseEvents');
  mouseEvent.initMouseEvent(type, true, true, window, 1, 0, 0, x, y, false, false, false, false, 0, null);
  return mouseEvent;
}

describe('sliderLimitView', () => {
  describe('defaultMode', () => {
    it('should create minValue root elemment and add to container if config.limitsDisplayed == true', () => {
      const container = document.createElement('div');
      const config = new SliderConfig({
        limitsDisplayed: true,
      });
      const state = new SliderState();
      const limit = new SliderLimitView(container, config, state, Type.MinVal);

      expect(container.querySelectorAll(`.${CLASSES.MIN_VALUE}`).length).to.equal(1);
    });

    it('should create maxValue root element and add to container if config.limitsDisplayed == true', () => {
      const container = document.createElement('div');
      const config = new SliderConfig({
        limitsDisplayed: true,
      });
      const state = new SliderState();
      const limit = new SliderLimitView(container, config, state, Type.MaxVal);

      expect(container.querySelectorAll(`.${CLASSES.MAX_VALUE}`).length).to.equal(1);
    });

    it('should not add root elemment to container if config.limitsDisplayed == false', () => {
      const container = document.createElement('div');
      const config = new SliderConfig({
        limitsDisplayed: false,
      });
      const state = new SliderState();
      const limit = new SliderLimitView(container, config, state, Type.MinVal);

      expect(container.querySelectorAll(`.${CLASSES.MIN_VALUE}`).length).to.equal(0);
    });

    it('should add vertical class if config.isVertical == true', () => {
      const container = document.createElement('div');
      const config = new SliderConfig({
        limitsDisplayed: true,
        isVertical: true,
      });
      const state = new SliderState();
      const limit = new SliderLimitView(container, config, state, Type.MinVal);

      const foundLimit = container.querySelector(`.${CLASSES.MIN_VALUE}`);
      expect(foundLimit?.classList.contains(`${CLASSES.MIN_VALUE_VERTICAL}`)).to.equal(true);
    });

    it('should not add vertical class if config.isVertical == false', () => {
      const container = document.createElement('div');
      const config = new SliderConfig({
        limitsDisplayed: true,
        isVertical: false,
      });
      const state = new SliderState();
      const limit = new SliderLimitView(container, config, state, Type.MinVal);

      const foundLimit = container.querySelector(`.${CLASSES.MIN_VALUE}`);
      expect(foundLimit?.classList.contains(`${CLASSES.MIN_VALUE_VERTICAL}`)).to.equal(false);
    });

    it('should put minValue inside of the root if Type == minValue', () => {
      const container = document.createElement('div');
      const config = new SliderConfig({
        minValue: 10,
        limitsDisplayed: true,
      });
      const state = new SliderState();
      const limit = new SliderLimitView(container, config, state, Type.MinVal);

      const foundLimit = container.querySelector(`.${CLASSES.MIN_VALUE}`);
      expect(foundLimit?.innerHTML).to.equal('10');
    });

    it('should put maxValue inside of the root if Type == maxValue', () => {
      const container = document.createElement('div');
      const config = new SliderConfig({
        maxValue: 120,
        limitsDisplayed: true,
      });
      const state = new SliderState();
      const limit = new SliderLimitView(container, config, state, Type.MaxVal);

      const foundLimit = container.querySelector(`.${CLASSES.MAX_VALUE}`);
      expect(foundLimit?.innerHTML).to.equal('120');
    });
  });

  describe('defaultValues mode', () => {
    it('should not add limits', () => {
      const container = document.createElement('div');
      const config = new SliderConfig({
        hasDefaultValues: true,
        limitsDisplayed: true,
      });
      const state = new SliderState();
      const limit = new SliderLimitView(container, config, state, Type.MinVal);

      expect(container.querySelectorAll(`.${CLASSES.MIN_VALUE}`).length).to.equal(0);
    });
  });

  describe('config.minValue.set()', () => {
    it('should change innerHTML if Type == minValue', () => {
      const container = document.createElement('div');
      const config = new SliderConfig({
        limitsDisplayed: true,
        minValue: 10,
      });
      const state = new SliderState();
      const limit = new SliderLimitView(container, config, state, Type.MinVal);

      config.minValue.set(20);

      const foundLimit = container.querySelector(`.${CLASSES.MIN_VALUE}`);
      expect(foundLimit?.innerHTML).to.equal('20');
    });

    it('should not change innerHTML if Type == maxValue', () => {
      const container = document.createElement('div');
      const config = new SliderConfig({
        limitsDisplayed: true,
        minValue: 10,
        maxValue: 100,
      });
      const state = new SliderState();
      const limit = new SliderLimitView(container, config, state, Type.MaxVal);

      config.minValue.set(20);

      const foundLimit = container.querySelector(`.${CLASSES.MAX_VALUE}`);
      expect(foundLimit?.innerHTML).to.equal('100');
    });
  });

  describe('config.maxValue.set()', () => {
    it('should change innerHTML if Type == maxValue', () => {
      const container = document.createElement('div');
      const config = new SliderConfig({
        limitsDisplayed: true,
        maxValue: 100,
      });
      const state = new SliderState();
      const limit = new SliderLimitView(container, config, state, Type.MaxVal);

      config.maxValue.set(200);

      const foundLimit = container.querySelector(`.${CLASSES.MAX_VALUE}`);
      expect(foundLimit?.innerHTML).to.equal('200');
    });

    it('should not change innerHTML if Type == minValue', () => {
      const container = document.createElement('div');
      const config = new SliderConfig({
        limitsDisplayed: true,
        minValue: 10,
        maxValue: 100,
      });
      const state = new SliderState();
      const limit = new SliderLimitView(container, config, state, Type.MinVal);

      config.maxValue.set(200);

      const foundLimit = container.querySelector(`.${CLASSES.MIN_VALUE}`);
      expect(foundLimit?.innerHTML).to.equal('10');
    });
  });

  describe('config.limitsDisplayed.set()', () => {
    it('should display the limit if given true', () => {
      const container = document.createElement('div');
      const config = new SliderConfig({
        limitsDisplayed: false,
      });
      const state = new SliderState();
      const limit = new SliderLimitView(container, config, state, Type.MinVal);

      config.limitsDisplayed.set(true);

      expect(container.querySelectorAll(`.${CLASSES.MIN_VALUE}`).length).to.equal(1);
    });

    it('should hide limit if given false', () => {
      const container = document.createElement('div');
      const config = new SliderConfig({
        limitsDisplayed: true,
      });
      const state = new SliderState();
      const limit = new SliderLimitView(container, config, state, Type.MinVal);

      config.limitsDisplayed.set(false);

      expect(container.querySelectorAll(`.${CLASSES.MIN_VALUE}`).length).to.equal(0);
    });
  });

  describe('click', () => {
    it('should change leftHandlePosition to 0 if it`s minValue and isRange === false', () => {
      const container = document.createElement('div');
      const config = new SliderConfig({
        limitsDisplayed: true,
      });
      const state = new SliderState(0.2, 0.8);
      const limit = new SliderLimitView(container, config, state, Type.MinVal);

      const mouseClick = createMouseEvent('click', 100, 100);

      const foundLimit = container.querySelector(`.${CLASSES.MIN_VALUE}`);
      foundLimit?.dispatchEvent(mouseClick);

      expect(state.leftHandlePosition.get()).to.equal(0);
    });

    it('should change leftHandlePosition to 1 if it`s maxValue and isRange === false', () => {
      const container = document.createElement('div');
      const config = new SliderConfig({
        limitsDisplayed: true,
      });
      const state = new SliderState(0.2, 0.8);
      const limit = new SliderLimitView(container, config, state, Type.MaxVal);

      const mouseClick = createMouseEvent('click', 100, 100);

      const foundLimit = container.querySelector(`.${CLASSES.MAX_VALUE}`);
      foundLimit?.dispatchEvent(mouseClick);

      expect(state.leftHandlePosition.get()).to.equal(1);
    });
  });
});
