import { expect } from "chai"
import { SliderHandle } from "../../../src/slider/view/sliderHandleView"
import { SliderConfig } from "../../../src/slider/sliderConfig/sliderConfig";

enum Side{Left, Right}
const jsdom = require("jsdom")
const { JSDOM } = jsdom
const dom = new JSDOM("<!doctype html><html><body><div class='slider'></div></body></html>");
(global as any).window = dom.window;
(global as any).document = window.document;

const CLASSES: SliderClasses = require("../../../src/slider/sliderClasses.json")
/*const defaultConfig = {
  isRange: false,
  hasDefaultValues: false,
  isVertical: false,
  valueLabelDisplayed: true,
  limitsDisplayed: true,
  minValue: 0,
  maxValue: 100,
  step: 1,
  leftHandleValue: 0,
  rightHandleValue: 100,
  defaultValues: ["first", "second", "third"]
}*/

describe("SliderHandleView", () => {
  describe("default mode", () => {
    it("should create root element with handle class in container", () => {
      let container = document.createElement("div")
      let config = new SliderConfig({
  
      })
      let handle = new SliderHandle(container, config, Side.Left)
  
      expect(container.querySelectorAll(`.${CLASSES.LEFT_HANDLE}`).length).to.equal(1)
    })
  
    it("should add vertical class if isVertical == true", () => {
      let container = document.createElement("div")
      let config = new SliderConfig({
        isVertical: true
      })
      let handle = new SliderHandle(container, config, Side.Left)
  
      expect(container.querySelectorAll(`.${CLASSES.HANDLE_VERTICAL}`).length).to.equal(1)
    })

    it("should not add vertical class if isVertical == false", () => {
      let container = document.createElement("div")
      let config = new SliderConfig({
        isVertical: false
      })
      let handle = new SliderHandle(container, config, Side.Left)
  
      expect(container.querySelectorAll(`.${CLASSES.HANDLE_VERTICAL}`).length).to.equal(0)
    })
  
    it("should add right handle to container if isRange == true", () => {
      let container = document.createElement("div")
      let config = new SliderConfig({
        isRange: true
      })
      let handle = new SliderHandle(container, config, Side.Right)
  
      expect(container.querySelectorAll(`.${CLASSES.RIGHT_HANDLE}`).length).to.equal(1)
    })

    it("should not add right handle to container if isRange == false", () => {
      let container = document.createElement("div")
      let config = new SliderConfig({
        isRange: false
      })
      let handle = new SliderHandle(container, config, Side.Right)
  
      expect(container.querySelectorAll(`.${CLASSES.RIGHT_HANDLE}`).length).to.equal(0)
    })
  
    it("should set leftHandle shift according with leftHandleValue", () => {
      let container = document.createElement("div")
      let config = new SliderConfig({
        leftHandleValue: 20,
        minValue: 0,
        maxValue: 100
      })
      let handle = new SliderHandle(container, config, Side.Left)
  
      let foundHandle = container.querySelector(`.${CLASSES.LEFT_HANDLE}`) as HTMLElement
      expect(foundHandle.style.left).to.equal("20%")
    })

    it("should set rightHandle shift according with rightHandleValue", () => {
      let container = document.createElement("div")
      let config = new SliderConfig({
        isRange: true,
        leftHandleValue: 0,
        rightHandleValue: 20,
        minValue: 0,
        maxValue: 100
      })
      let handle = new SliderHandle(container, config, Side.Right)
  
      let foundHandle = container.querySelector(`.${CLASSES.RIGHT_HANDLE}`) as HTMLElement
      expect(foundHandle.style.left).to.equal("20%")
    })
  })

  describe("defaultValues mode", () => {
    it("should set leftHandle shift according with leftHandleValue", () => {
      let container = document.createElement("div")
      let config = new SliderConfig({
        hasDefaultValues: true,
        defaultValues: ["first", "second", "third"],
        leftHandleValue: 1
      })
      let handle = new SliderHandle(container, config, Side.Left)
  
      let foundHandle = container.querySelector(`.${CLASSES.LEFT_HANDLE}`) as HTMLElement
      expect(foundHandle.style.left).to.equal("50%")
    })

    it("should set rightHandle shift according with rightHandleValue", () => {
      let container = document.createElement("div")
      let config = new SliderConfig({
        isRange: true,
        hasDefaultValues: true,
        defaultValues: ["first", "second", "third"],
        leftHandleValue: 0,
        rightHandleValue: 1
      })
      let handle = new SliderHandle(container, config, Side.Right)
  
      let foundHandle = container.querySelector(`.${CLASSES.RIGHT_HANDLE}`) as HTMLElement
      expect(foundHandle.style.left).to.equal("50%")
    })
  })

  describe("isRange.set()", () => {
    it("should append root to container if it`s rightHandle and true was given", () => {
      let container = document.createElement("div")
      let config = new SliderConfig({
        isRange: false
      })
      let handle = new SliderHandle(container, config, Side.Right)

      config.isRange.set(true)

      expect(container.querySelectorAll(`.${CLASSES.RIGHT_HANDLE}`).length).to.equal(1)
    })

    it("should remove root from container if it`s rightHandle and false was given", () => {
      let container = document.createElement("div")
      let config = new SliderConfig({
        isRange: true
      })
      let handle = new SliderHandle(container, config, Side.Right)

      config.isRange.set(false)

      expect(container.querySelectorAll(`.${CLASSES.RIGHT_HANDLE}`).length).to.equal(0)
    })
  })

  describe("hasDefauleValues.set()", () => {
    it("should set leftHandle shift to 50% if leftHandleValue == 1 and true was given", () => {
      let container = document.createElement("div")
      let config = new SliderConfig({
        hasDefaultValues: false,
        minValue: 0,
        leftHandleValue: 1
      })
      let handle = new SliderHandle(container, config, Side.Left)

      config.hasDefaultValues.set(true)

      let foundHandle = container.querySelector(`.${CLASSES.LEFT_HANDLE}`) as HTMLElement
      expect(foundHandle.style.left).to.equal("50%")
    })

    it("should set rightHandle shift to 50% if rightHandleValue == 1 and true was given", () => {
      let container = document.createElement("div")
      let config = new SliderConfig({
        isRange: true,
        hasDefaultValues: false,
        minValue: 0,
        leftHandleValue: 0,
        rightHandleValue: 1
      })
      let handle = new SliderHandle(container, config, Side.Right)

      config.hasDefaultValues.set(true)

      let foundHandle = container.querySelector(`.${CLASSES.RIGHT_HANDLE}`) as HTMLElement
      expect(foundHandle.style.left).to.equal("50%")
    })

    it("should set leftHandle shift to 1% if leftHandleValue == 1 and false was given", () => {
      let container = document.createElement("div")
      let config = new SliderConfig({
        hasDefaultValues: true,
        defaultValues: ["first", "second", "third"],
        minValue: 0,
        maxValue: 100,
        leftHandleValue: 1
      })
      let handle = new SliderHandle(container, config, Side.Left)

      config.hasDefaultValues.set(false)

      let foundHandle = container.querySelector(`.${CLASSES.LEFT_HANDLE}`) as HTMLElement
      expect(foundHandle.style.left).to.equal("1%")
    })

    it("should set rightHandle shift to 1% if rightHandleValue == 1 and false was given", () => {
      let container = document.createElement("div")
      let config = new SliderConfig({
        isRange: true,
        hasDefaultValues: true,
        defaultValues: ["first", "second", "third"],
        minValue: 0,
        maxValue: 100,
        leftHandleValue: 0,
        rightHandleValue: 1
      })
      let handle = new SliderHandle(container, config, Side.Right)

      config.hasDefaultValues.set(false)

      let foundHandle = container.querySelector(`.${CLASSES.RIGHT_HANDLE}`) as HTMLElement
      expect(foundHandle.style.left).to.equal("1%")
    })
  })

  describe("isVertical.set()", () => {
    it("should add vertical class if given true", () => {
      let container = document.createElement("div")
      let config = new SliderConfig({
        isVertical: false
      })
      let handle = new SliderHandle(container, config, Side.Left)

      config.isVertical.set(true)

      expect(container.querySelectorAll(`.${CLASSES.HANDLE_VERTICAL}`).length).to.equal(1)
    })

    it("should remove vertical class if given false", () => {
      let container = document.createElement("div")
      let config = new SliderConfig({
        isVertical: true
      })
      let handle = new SliderHandle(container, config, Side.Left)

      config.isVertical.set(false)

      expect(container.querySelectorAll(`.${CLASSES.HANDLE_VERTICAL}`).length).to.equal(0)
    })

    it("should set leftHandle left shift to bottom shift if true was given", () => {
      let container = document.createElement("div")
      let config = new SliderConfig({
        isVertical: false,
        minValue: 0,
        maxValue: 100,
        leftHandleValue: 20
      })
      let handle = new SliderHandle(container, config, Side.Left)

      config.isVertical.set(true)

      let foundHandle = container.querySelector(`.${CLASSES.LEFT_HANDLE}`) as HTMLElement
      expect(foundHandle.style.left).to.equal("")
      expect(foundHandle.style.bottom).to.equal("20%")
    })

    it("should set rightHandle left shift to bottom shift if true was given", () => {
      let container = document.createElement("div")
      let config = new SliderConfig({
        isRange: true,
        isVertical: false,
        minValue: 0,
        maxValue: 100,
        rightHandleValue: 80
      })
      let handle = new SliderHandle(container, config, Side.Right)

      config.isVertical.set(true)

      let foundHandle = container.querySelector(`.${CLASSES.RIGHT_HANDLE}`) as HTMLElement
      expect(foundHandle.style.left).to.equal("")
      expect(foundHandle.style.bottom).to.equal("80%")
    })

    it("should set leftHandle bottom shift to left shift if false was given", () => {
      let container = document.createElement("div")
      let config = new SliderConfig({
        isVertical: true,
        minValue: 0,
        maxValue: 100,
        leftHandleValue: 20
      })
      let handle = new SliderHandle(container, config, Side.Left)

      config.isVertical.set(false)

      let foundHandle = container.querySelector(`.${CLASSES.LEFT_HANDLE}`) as HTMLElement
      expect(foundHandle.style.left).to.equal("20%")
      expect(foundHandle.style.bottom).to.equal("")
    })

    it("should set rightHandle bottom shift to left shift if false was given", () => {
      let container = document.createElement("div")
      let config = new SliderConfig({
        isRange: true,
        isVertical: true,
        minValue: 0,
        maxValue: 100,
        rightHandleValue: 80
      })
      let handle = new SliderHandle(container, config, Side.Right)

      config.isVertical.set(false)

      let foundHandle = container.querySelector(`.${CLASSES.RIGHT_HANDLE}`) as HTMLElement
      expect(foundHandle.style.left).to.equal("80%")
      expect(foundHandle.style.bottom).to.equal("")
    })
  })

  describe("leftHandleValue.set()", () => {
    it("should change leftHandle shift according with leftHandleValue", () => {
      let container = document.createElement("div")
      let config = new SliderConfig({
        minValue: 0,
        maxValue: 100,
        leftHandleValue: 20
      })
      let handle = new SliderHandle(container, config, Side.Left)

      config.leftHandleValue.set(40)

      let foundHandle = container.querySelector(`.${CLASSES.LEFT_HANDLE}`) as HTMLElement
      expect(foundHandle.style.left).to.equal("40%")
    })
  })

  describe("rightHandleValue.set()", () => {
    it("should change rightHandle shift according with rightHandleValue", () => {
      let container = document.createElement("div")
      let config = new SliderConfig({
        isRange: true,
        minValue: 0,
        maxValue: 100,
        rightHandleValue: 80
      })
      let handle = new SliderHandle(container, config, Side.Right)

      config.rightHandleValue.set(60)

      let foundHandle = container.querySelector(`.${CLASSES.RIGHT_HANDLE}`) as HTMLElement
      expect(foundHandle.style.left).to.equal("60%")
    })
  })

  describe("defaultValues.set()", () => {
    it("should change leftHandle shift according with leftHandleValue", () => {
      let container = document.createElement("div")
      let config = new SliderConfig({
        hasDefaultValues: true,
        defaultValues: ["first", "second", "third"],
        minValue: 0,
        maxValue: 100,
        leftHandleValue: 1
      })
      let handle = new SliderHandle(container, config, Side.Left)

      config.defaultValues.set(["first", "second", "third", "forth", "fifth"])

      let foundHandle = container.querySelector(`.${CLASSES.LEFT_HANDLE}`) as HTMLElement
      expect(foundHandle.style.left).to.equal("25%")
    })

    it("should change rightHandle shift according with rightHandleValue", () => {
      let container = document.createElement("div")
      let config = new SliderConfig({
        isRange: true,
        hasDefaultValues: true,
        defaultValues: ["first", "second", "third"],
        minValue: 0,
        maxValue: 100,
        rightHandleValue: 3
      })
      let handle = new SliderHandle(container, config, Side.Right)

      config.defaultValues.set(["first", "second", "third", "forth", "fifth"])

      let foundHandle = container.querySelector(`.${CLASSES.RIGHT_HANDLE}`) as HTMLElement
      expect(foundHandle.style.left).to.equal("50%")
    })
  })
})