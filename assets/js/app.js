!function(t){function e(e){for(var s,l,r=e[0],h=e[1],o=e[2],u=0,d=[];u<r.length;u++)l=r[u],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&d.push(a[l][0]),a[l]=0;for(s in h)Object.prototype.hasOwnProperty.call(h,s)&&(t[s]=h[s]);for(c&&c(e);d.length;)d.shift()();return n.push.apply(n,o||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,r=1;r<i.length;r++){var h=i[r];0!==a[h]&&(s=!1)}s&&(n.splice(e--,1),t=l(l.s=i[0]))}return t}var s={},a={0:0},n=[];function l(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=t,l.c=s,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(i,s,function(e){return t[e]}.bind(null,s));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/fsd4-slider/";var r=window.webpackJsonp=window.webpackJsonp||[],h=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var c=h;n.push([3,1]),i()}([function(t){t.exports=JSON.parse('{"SLIDER":"slider","SLIDER_VERTICAL":"slider_vertical","HANDLE":"slider__handle","HANDLE_VERTICAL":"slider__handle_vertical","LEFT_HANDLE":"slider__left-handle","RIGHT_HANDLE":"slider__right-handle","RANGE_LINE":"slider__range-line","RANGE_LINE_VERTICAL":"slider__range-line_vertical","MAX_VALUE":"slider__maxvalue","MAX_VALUE_VERTICAL":"slider__maxvalue_vertical","MIN_VALUE":"slider__minvalue","MIN_VALUE_VERTICAL":"slider__minvalue_vertical","VALUE_LABEL":"slider__value-label","LEFT_HANDLE_LABEL":"slider__left-handle-value-label","LEFT_HANDLE_LABEL_VERTICAL":"slider__left-handle-value-label_vertical","RIGHT_HANDLE_LABEL":"slider__right-handle-value-label","RIGHT_HANDLE_LABEL_VERTICAL":"slider__right-handle-value-label_vertical","DEFAULT_VALUE":"slider__default-value","DEFAULT_VALUE_VERTICAL":"slider__default-value_vertical","DEFAULT_VALUE_LABEL":"slider__default-value-label","DEFAULT_VALUE_LABEL_VERTICAL":"slider__default-value-label_vertical","SCALE_VALUE":"slider__scale-value","SCALE_VALUE_VERTICAL":"slider__scale-value_vertical","SCALE_VALUE_LABEL":"slider__scale-value-label","SCALE_VALUE_LABEL_VERTICAL":"slider__scale-value-label_vertical"}')},,,function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),i(4);for(var s=i(6),a=t(".page-wrapper"),n=0;n<4;n++)new s.DemoSlider(a[0],{})}).call(this,i(1))},function(t,e,i){var s=i(2),a=i(5);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var n={insert:"head",singleton:!1};s(a,n);t.exports=a.locals||{}},function(t,e,i){},function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.DemoSlider=void 0,i(7),i(9);var s=function(){function e(e,i){this.ROOT=this.createElement("div","demo-slider"),e.appendChild(this.ROOT),this.$SLIDER=t(this.createScale()).slider(i,this.sliderHandler.bind(this)),this.PANEL_WRAPPER=this.createElement("div","demo-slider__panel-wrapper"),this.ROOT.appendChild(this.PANEL_WRAPPER),this.$MIN_VALUE=t(this.createValueElement("Min value")),this.$MAX_VALUE=t(this.createValueElement("Max value")),this.$STEP=t(this.createValueElement("Step")),this.$POINTS_NUMBER=t(this.createValueElement("Points number")),this.$DEFAULT_VALUES=t(this.createValueElement("Default values","demo-slider__default-values")),this.$LEFT_HANDLE_INPUT=t(this.createValueElement("Left handle value")),this.$RIGHT_HANDLE_INPUT=t(this.createValueElement("Right handle value")),this.$VALUE_LABEL_SWITCHER=t(this.createSwitcher("Show value label","js-demo-slider__value-label-switcher")),this.$LIMITS_SWITCHER=t(this.createSwitcher("Show limits","js-demo-slider__limits-switcher")),this.$VERTICAL_SWITCHER=t(this.createSwitcher("Is vertical","js-demo-slider__vertical-switcher")),this.$RANGE_SWITCHER=t(this.createSwitcher("Is range","js-demo-slider__range-switcher")),this.$DEFAULT_VALUES_SWITCHER=t(this.createSwitcher("Has default values","js-demo-slider__default-values-switcher")),this.setInitialState(),this.bindEventListeners()}return e.prototype.createScale=function(){var t=this.createElement("div","demo-slider__scale-wrapper"),e=this.createElement("div","demo-slider__scale");return t.appendChild(e),this.ROOT.appendChild(t),e},e.prototype.createValueElement=function(t,e){var i=this.createElement("div","demo-slider__value"),s=this.createElement("p","",t),a=this.createElement("input","demo-slider__value-input");return e&&a.classList.add(e),i.appendChild(s),i.appendChild(a),this.PANEL_WRAPPER.appendChild(i),a},e.prototype.createSwitcher=function(t,e){var i=this.createElement("label","demo-slider__switcher"),s=this.createElement("input",e),a=this.createElement("p","",t);return s.setAttribute("type","checkbox"),i.appendChild(s),i.appendChild(a),this.PANEL_WRAPPER.appendChild(i),s},e.prototype.createElement=function(t,e,i){var s=document.createElement(t);return Array.isArray(e)?e.forEach((function(t){s.classList.add(t)})):""!==e&&s.classList.add(e),i&&(s.innerHTML=i),s},e.prototype.setInitialState=function(){this.$MIN_VALUE.attr("value",this.$SLIDER.config.minValue()),this.$MAX_VALUE.attr("value",this.$SLIDER.config.maxValue()),this.$STEP.attr("value",this.$SLIDER.config.step()),this.$POINTS_NUMBER.attr("value",this.$SLIDER.config.pointsNumber()),this.$DEFAULT_VALUES.attr("value",this.$SLIDER.config.defaultValues()),this.$LEFT_HANDLE_INPUT.val(this.$SLIDER.config.leftHandleValue()),this.$RIGHT_HANDLE_INPUT.val(this.$SLIDER.config.rightHandleValue()),this.$VALUE_LABEL_SWITCHER.attr("checked",this.$SLIDER.config.valueLabelDisplayed()),this.$LIMITS_SWITCHER.attr("checked",this.$SLIDER.config.limitsDisplayed()),this.$VERTICAL_SWITCHER.attr("checked",this.$SLIDER.config.isVertical()),this.$RANGE_SWITCHER.attr("checked",this.$SLIDER.config.isRange()),this.$DEFAULT_VALUES_SWITCHER.attr("checked",this.$SLIDER.config.hasDefaultValues())},e.prototype.sliderHandler=function(t,e){this.$LEFT_HANDLE_INPUT.val(t),this.$RIGHT_HANDLE_INPUT.val(e)},e.prototype.bindEventListeners=function(){this.$MIN_VALUE[0].addEventListener("change",this.minValueChangeHandler.bind(this)),this.$MAX_VALUE[0].addEventListener("change",this.maxValueChangeHandler.bind(this)),this.$STEP[0].addEventListener("change",this.stepChangeHandler.bind(this)),this.$POINTS_NUMBER[0].addEventListener("change",this.pointsNumberChangeHandler.bind(this)),this.$DEFAULT_VALUES[0].addEventListener("change",this.defaultValuesChangeHandler.bind(this)),this.$LEFT_HANDLE_INPUT[0].addEventListener("change",this.leftHandleValueChangeHandler.bind(this)),this.$RIGHT_HANDLE_INPUT[0].addEventListener("change",this.rightHandleChangeHandler.bind(this)),this.$VALUE_LABEL_SWITCHER[0].addEventListener("change",this.valueLabelSwitchHandler.bind(this)),this.$LIMITS_SWITCHER[0].addEventListener("change",this.limitsSwitchHandler.bind(this)),this.$VERTICAL_SWITCHER[0].addEventListener("change",this.verticalSwitchHandler.bind(this)),this.$RANGE_SWITCHER[0].addEventListener("change",this.rangeSwitchHandler.bind(this)),this.$DEFAULT_VALUES_SWITCHER[0].addEventListener("change",this.defaultValuesSwitchHandler.bind(this))},e.prototype.minValueChangeHandler=function(){var t=parseInt(this.$MIN_VALUE.val().replace(/-\D/g,""),10);isNaN(t)&&(t=this.$SLIDER.config.minValue()),this.$MIN_VALUE.val(this.$SLIDER.config.minValue(t))},e.prototype.maxValueChangeHandler=function(){var t=parseInt(this.$MAX_VALUE.val().replace(/-\D/g,""),10);isNaN(t)&&(t=this.$SLIDER.config.maxValue()),this.$MAX_VALUE.val(this.$SLIDER.config.maxValue(t))},e.prototype.stepChangeHandler=function(){var t=parseInt(this.$STEP.val().replace(/-\D/g,""),10);isNaN(t)&&(t=this.$SLIDER.config.step()),this.$STEP.val(this.$SLIDER.config.step(t))},e.prototype.pointsNumberChangeHandler=function(){var t=parseInt(this.$POINTS_NUMBER.val().replace(/-\D/g,""),10);isNaN(t)&&(t=this.$SLIDER.config.pointsNumber()),this.$POINTS_NUMBER.val(this.$SLIDER.config.pointsNumber(t))},e.prototype.defaultValuesChangeHandler=function(){var t,e=this.$DEFAULT_VALUES.val();t=""===e?this.$SLIDER.config.defaultValues():e.split(","),this.$DEFAULT_VALUES.val(this.$SLIDER.config.defaultValues(t))},e.prototype.leftHandleValueChangeHandler=function(){var t=parseInt(this.$LEFT_HANDLE_INPUT.val().replace(/-\D/g,""),10);isNaN(t)&&(t=this.$SLIDER.config.leftHandleValue()),this.$LEFT_HANDLE_INPUT.val(this.$SLIDER.config.leftHandleValue(t))},e.prototype.rightHandleChangeHandler=function(){var t=parseInt(this.$RIGHT_HANDLE_INPUT.val().replace(/-\D/g,""),10);isNaN(t)&&(t=this.$SLIDER.config.rightHandleValue()),this.$RIGHT_HANDLE_INPUT.val(this.$SLIDER.config.rightHandleValue(t))},e.prototype.valueLabelSwitchHandler=function(){this.$SLIDER.config.valueLabelDisplayed(this.$VALUE_LABEL_SWITCHER.prop("checked"))},e.prototype.limitsSwitchHandler=function(){this.$SLIDER.config.limitsDisplayed(this.$LIMITS_SWITCHER.prop("checked")),this.$DEFAULT_VALUES_SWITCHER.prop("checked",this.$SLIDER.config.hasDefaultValues())},e.prototype.verticalSwitchHandler=function(){this.$SLIDER.config.isVertical(this.$VERTICAL_SWITCHER.prop("checked"))},e.prototype.rangeSwitchHandler=function(){this.$SLIDER.config.isRange(this.$RANGE_SWITCHER.prop("checked"))},e.prototype.defaultValuesSwitchHandler=function(){this.$SLIDER.config.hasDefaultValues(this.$DEFAULT_VALUES_SWITCHER.prop("checked")),this.$LIMITS_SWITCHER.prop("checked",this.$SLIDER.config.limitsDisplayed())},e}();e.DemoSlider=s}).call(this,i(1))},function(t,e,i){var s=i(2),a=i(8);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var n={insert:"head",singleton:!1};s(a,n);t.exports=a.locals||{}},function(t,e,i){},function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var s=i(10),a=i(20);e.default=t.fn.slider=function(t,e){var i=new a.SliderConfig(t);new s.SliderController(this[0],i,e);return this.config={isRange:function(t){return void 0!==t&&i.isRange.set(t),i.isRange.get()},hasDefaultValues:function(t){return void 0!==t&&i.hasDefaultValues.set(t),i.hasDefaultValues.get()},isVertical:function(t){return void 0!==t&&i.isVertical.set(t),i.isVertical.get()},valueLabelDisplayed:function(t){return void 0!==t&&i.valueLabelDisplayed.set(t),i.valueLabelDisplayed.get()},limitsDisplayed:function(t){return void 0!==t&&i.limitsDisplayed.set(t),i.limitsDisplayed.get()},minValue:function(t){return void 0!==t&&i.minValue.set(t),i.minValue.get()},maxValue:function(t){return void 0!==t&&i.maxValue.set(t),i.maxValue.get()},step:function(t){return void 0!==t&&i.step.set(t),i.step.get()},leftHandleValue:function(t){return void 0!==t&&i.leftHandleValue.set(t),i.leftHandleValue.get()},rightHandleValue:function(t){return void 0!==t&&i.rightHandleValue.set(t),i.rightHandleValue.get()},defaultValues:function(t){return void 0!==t&&i.defaultValues.set(t),i.defaultValues.get()},pointsNumber:function(t){return void 0!==t&&i.pointsNumber.set(t),i.pointsNumber.get()}},this}}).call(this,i(1))},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SliderController=void 0;var s=i(11),a=i(17),n=i(18),l=function(){function t(t,e,i){this.ROOT=t,this.config=e,this.state=new n.SliderState,this.MODEL=new a.SliderModel(this.config,this.state),this.VIEW=new s.SliderView(this.ROOT,this.config,this.state),this.slide=i||function(){},this.config.leftHandleValue.addSubscriber(this.slideFunction.bind(this)),this.config.rightHandleValue.addSubscriber(this.slideFunction.bind(this))}return t.prototype.slideFunction=function(){var t=this.config.leftHandleValue.get(),e=this.config.rightHandleValue.get();this.slide(t,e)},t}();e.SliderController=l},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SliderView=void 0;var s,a=i(12),n=i(14),l=i(15),r=i(16);!function(t){t[t.Left=0]="Left",t[t.Right=1]="Right"}(s||(s={}));var h=function(){function t(t,e,r){var h=this;this.DEFAULT_VALUES=[],this.SCALE_VALUES=[],this.CLASSES=i(0),this.config=e,this.state=r,this.ROOT=t,this.ROOT.classList.add(this.CLASSES.SLIDER),this.switchVertical(),this.LEFT_HANDLE=new a.SliderHandle(this.ROOT,this.config,this.state,s.Left),this.RIGHT_HANDLE=new a.SliderHandle(this.ROOT,this.config,this.state,s.Right),this.RANGE_LINE=new l.SliderRangeLineView(this.ROOT,this.config),this.config.defaultValues.get().forEach((function(t,e){h.DEFAULT_VALUES[e]=new n.SliderDefaultValueLabel(h.ROOT,h.config,h.state,e)})),this.checkScaleValues(),this.config.defaultValues.addSubscriber(this.checkDefaultValues.bind(this)),this.config.isVertical.addSubscriber(this.switchVertical.bind(this)),this.config.minValue.addSubscriber(this.checkScaleValues.bind(this)),this.config.maxValue.addSubscriber(this.checkScaleValues.bind(this)),this.config.step.addSubscriber(this.checkScaleValues.bind(this)),this.config.pointsNumber.addSubscriber(this.checkScaleValues.bind(this)),this.bindEventListeners()}return t.prototype.checkDefaultValues=function(){var t=this;this.DEFAULT_VALUES.forEach((function(t){t.remove()})),this.DEFAULT_VALUES.length=0,this.config.defaultValues.get().forEach((function(e,i){t.DEFAULT_VALUES[i]=new n.SliderDefaultValueLabel(t.ROOT,t.config,t.state,i)}))},t.prototype.checkScaleValues=function(){this.SCALE_VALUES.forEach((function(t){t.remove()})),this.SCALE_VALUES.length=0;var t=this.config.pointsNumber.get(),e=this.config.maxValue.get()-this.config.minValue.get(),i=this.config.step.get(),s=Math.floor(e/i),a=t;t>s+1&&(a=s+1);for(var n=0;n<a;n+=1)this.SCALE_VALUES[n]=new r.SliderScaleValue(this.ROOT,this.config,this.state,n,a)},t.prototype.switchVertical=function(){!0===this.config.isVertical.get()?this.ROOT.classList.add(this.CLASSES.SLIDER_VERTICAL):this.ROOT.classList.remove(this.CLASSES.SLIDER_VERTICAL)},t.prototype.bindEventListeners=function(){this.ROOT.addEventListener("click",this.clickHandler.bind(this))},t.prototype.clickHandler=function(t){!1===this.config.isRange.get()&&t.target===this.ROOT&&this.state.leftHandlePosition.set(this.calculatePosition(t))},t.prototype.calculatePosition=function(t){return!0===this.config.isVertical.get()?this.calculateVerticalPosition(t.clientY):this.calculateHorizontalPosition(t.clientX)},t.prototype.calculateHorizontalPosition=function(t){var e=this.ROOT.getBoundingClientRect().left,i=this.ROOT.offsetWidth;return t<e?0:t>e+i?1:(t-e)/i},t.prototype.calculateVerticalPosition=function(t){var e=this.ROOT.offsetHeight,i=this.ROOT.getBoundingClientRect().top+e;return t<i-e?1:t>i?0:(i-t)/e},t}();e.SliderView=h},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SliderHandle=void 0;var s,a=i(13);!function(t){t[t.Left=0]="Left",t[t.Right=1]="Right"}(s||(s={}));var n=function(){function t(t,e,n,l){this.CONTAINER=t,this.config=e,this.state=n,this.SIDE=l,this.CLASSES=i(0),this.ROOT=this.createRootElement(),this.LABEL=new a.SliderValueLabelView(this.ROOT,this.config,this.SIDE),this.isDragged=!1,this.SIDE!==s.Left&&!0!==this.config.isRange.get()||this.CONTAINER.appendChild(this.ROOT),this.render(),this.config.isRange.addSubscriber(this.switchRightHandle.bind(this)),this.config.hasDefaultValues.addSubscriber(this.render.bind(this)),this.config.isVertical.addSubscriber(this.switchVertical.bind(this)),this.config.leftHandleValue.addSubscriber(this.render.bind(this)),this.config.rightHandleValue.addSubscriber(this.render.bind(this)),this.bindEventListeners()}return t.prototype.createRootElement=function(){var t=document.createElement("div");return t.classList.add(this.CLASSES.HANDLE),this.SIDE===s.Right?t.classList.add(this.CLASSES.RIGHT_HANDLE):t.classList.add(this.CLASSES.LEFT_HANDLE),!0===this.config.isVertical.get()&&t.classList.add(this.CLASSES.HANDLE_VERTICAL),t},t.prototype.switchRightHandle=function(){this.SIDE===s.Right&&(!0===this.config.isRange.get()?this.CONTAINER.appendChild(this.ROOT):this.ROOT.remove())},t.prototype.switchVertical=function(){var t=this;new Promise((function(e){t.changeVerticalClass(),e()})).then((function(){t.render()}))},t.prototype.changeVerticalClass=function(){!0===this.config.isVertical.get()?this.ROOT.classList.add(this.CLASSES.HANDLE_VERTICAL):this.ROOT.classList.remove(this.CLASSES.HANDLE_VERTICAL)},t.prototype.render=function(){var t;t=!0===this.config.hasDefaultValues.get()?this.calculateDefaultValuesShift():this.calculateShift(),this.SIDE===s.Left?t-=this.calculateExtraShift():t+=this.calculateExtraShift(),!0===this.config.isVertical.get()?(this.ROOT.style.left="",this.ROOT.style.bottom=t+"%"):(this.ROOT.style.bottom="",this.ROOT.style.left=t+"%")},t.prototype.calculateDefaultValuesShift=function(){var t=this.SIDE===s.Left?this.config.leftHandleValue.get():this.config.rightHandleValue.get(),e=this.config.defaultValues.get();return!0===this.config.hasDefaultValues.get()?100*t/(e.length-1):0},t.prototype.calculateShift=function(){var t=this.config.minValue.get(),e=this.config.maxValue.get();return 100*(((this.SIDE===s.Left?this.config.leftHandleValue.get():this.config.rightHandleValue.get())-t)/(e-t))},t.prototype.bindEventListeners=function(){this.ROOT.addEventListener("mousedown",this.drag.bind(this)),document.addEventListener("mouseup",this.drop.bind(this)),document.addEventListener("mousemove",this.watchMouse.bind(this))},t.prototype.drag=function(){this.isDragged=!0},t.prototype.drop=function(){this.isDragged=!1},t.prototype.watchMouse=function(t){if(!0===this.isDragged){var e=this.calculatePosition(t);this.SIDE===s.Left?this.state.leftHandlePosition.set(e):this.state.rightHandlePosition.set(e)}},t.prototype.calculatePosition=function(t){return!0===this.config.isVertical.get()?this.calculateVerticalPosition(t.clientY):this.calculateHorizontalPosition(t.clientX)},t.prototype.calculateHorizontalPosition=function(t){var e=this.CONTAINER.getBoundingClientRect().left,i=this.CONTAINER.offsetWidth;return t<e?0:t>e+i?1:(t-e)/i},t.prototype.calculateVerticalPosition=function(t){var e=this.CONTAINER.offsetHeight,i=this.CONTAINER.getBoundingClientRect().top+e;return t<i-e?1:t>i?0:(i-t)/e},t.prototype.calculateExtraShift=function(){if(!1===this.config.isRange.get())return 0;var t=this.config.leftHandleValue.get(),e=this.config.rightHandleValue.get(),i=this.calculateDistanceBetweenHandles(t,e),s=!0===this.config.isVertical.get()?this.ROOT.offsetHeight:this.ROOT.offsetWidth,a=!0===this.config.isVertical.get()?this.CONTAINER.offsetHeight:this.CONTAINER.offsetWidth;return s>i?100*((s-i)/2/a):0},t.prototype.calculateDistanceBetweenHandles=function(t,e){var i=0,s=!0===this.config.isVertical.get()?this.CONTAINER.offsetHeight:this.CONTAINER.offsetWidth;if(!0===this.config.hasDefaultValues.get()){i=s/this.config.defaultValues.get().length}else{var a=this.config.minValue.get();i=s/(this.config.maxValue.get()-a)}return(e-t)*i},t}();e.SliderHandle=n},function(t,e,i){"use strict";var s;Object.defineProperty(e,"__esModule",{value:!0}),e.SliderValueLabelView=void 0,function(t){t[t.Left=0]="Left",t[t.Right=1]="Right"}(s||(s={}));var a=function(){function t(t,e,a){this.CLASSES=i(0),this.CONTAINER=t,this.config=e,this.SIDE=a,this.ROOT=this.createRoot(),this.switchVertical(),this.switch(),this.config.isVertical.addSubscriber(this.switchVertical.bind(this)),this.config.valueLabelDisplayed.addSubscriber(this.switch.bind(this)),this.SIDE===s.Left?(this.updateValue(this.config.leftHandleValue.get()),this.config.leftHandleValue.addSubscriber(this.updateValue.bind(this))):(this.updateValue(this.config.rightHandleValue.get()),this.config.rightHandleValue.addSubscriber(this.updateValue.bind(this)))}return t.prototype.createRoot=function(){var t=document.createElement("div");return t.classList.add(this.CLASSES.VALUE_LABEL),this.SIDE===s.Right?t.classList.add(this.CLASSES.RIGHT_HANDLE_LABEL):t.classList.add(this.CLASSES.LEFT_HANDLE_LABEL),t},t.prototype.updateValue=function(t){if(!0===this.config.hasDefaultValues.get()){var e=this.config.defaultValues.get();this.ROOT.innerHTML=""+e[t]}else this.ROOT.innerHTML=""+t},t.prototype.switchVertical=function(){!0===this.config.isVertical.get()?this.SIDE===s.Left?this.ROOT.classList.add(this.CLASSES.LEFT_HANDLE_LABEL_VERTICAL):this.ROOT.classList.add(this.CLASSES.RIGHT_HANDLE_LABEL_VERTICAL):this.SIDE===s.Left?this.ROOT.classList.remove(this.CLASSES.LEFT_HANDLE_LABEL_VERTICAL):this.ROOT.classList.remove(this.CLASSES.RIGHT_HANDLE_LABEL_VERTICAL)},t.prototype.switch=function(){!0===this.config.valueLabelDisplayed.get()?this.CONTAINER.appendChild(this.ROOT):this.ROOT.remove()},t}();e.SliderValueLabelView=a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SliderDefaultValueLabel=void 0;var s=function(){function t(t,e,s,a){this.CONTAINER=t,this.config=e,this.state=s,this.index=a,this.CLASSES=i(0),this.ROOT=this.createRootElement(),this.LABEL=this.createLabel(),this.updateValue(),this.updateShift(),this.switch(),this.updateValueLink=this.updateValue.bind(this),this.updateShiftLink=this.updateShift.bind(this),this.switchLink=this.switch.bind(this),this.switchVerticalLink=this.switchVertical.bind(this),this.config.defaultValues.addSubscriber(this.updateValueLink),this.config.defaultValues.addSubscriber(this.updateShiftLink),this.config.hasDefaultValues.addSubscriber(this.switchLink),this.config.isVertical.addSubscriber(this.switchVerticalLink),this.config.isVertical.addSubscriber(this.updateShiftLink),this.bindEventListeners()}return t.prototype.remove=function(){this.config.defaultValues.removeSubscriber(this.updateValueLink),this.config.defaultValues.removeSubscriber(this.updateShiftLink),this.config.hasDefaultValues.removeSubscriber(this.switchLink),this.config.isVertical.removeSubscriber(this.switchVerticalLink),this.config.isVertical.removeSubscriber(this.updateShiftLink),this.ROOT.remove()},t.prototype.createRootElement=function(){var t=document.createElement("div");return t.classList.add(this.CLASSES.DEFAULT_VALUE),!0===this.config.isVertical.get()&&t.classList.add(this.CLASSES.DEFAULT_VALUE_VERTICAL),t},t.prototype.createLabel=function(){var t=document.createElement("div");return t.classList.add(""+this.CLASSES.DEFAULT_VALUE_LABEL),!0===this.config.isVertical.get()&&t.classList.add(""+this.CLASSES.DEFAULT_VALUE_LABEL_VERTICAL),this.ROOT.appendChild(t),t},t.prototype.updateShift=function(){var t=this.config.defaultValues.get(),e=100*this.index/(t.length-1);!0===this.config.isVertical.get()?this.ROOT.style.bottom=e+"%":this.ROOT.style.left=e+"%"},t.prototype.updateValue=function(){var t=this.config.defaultValues.get();this.LABEL.innerHTML=""+t[this.index]},t.prototype.switch=function(){!0===this.config.hasDefaultValues.get()?this.CONTAINER.appendChild(this.ROOT):this.ROOT.remove()},t.prototype.switchVertical=function(t){!0===t?(this.ROOT.style.left="",this.ROOT.classList.add(this.CLASSES.DEFAULT_VALUE_VERTICAL),this.LABEL.classList.add(this.CLASSES.DEFAULT_VALUE_LABEL_VERTICAL)):(this.ROOT.style.top="",this.ROOT.classList.remove(this.CLASSES.DEFAULT_VALUE_VERTICAL),this.LABEL.classList.remove(this.CLASSES.DEFAULT_VALUE_LABEL_VERTICAL))},t.prototype.bindEventListeners=function(){this.ROOT.addEventListener("click",this.clickHandler.bind(this))},t.prototype.clickHandler=function(){if(!1===this.config.isRange.get()){var t=this.config.defaultValues.get(),e=this.index/(t.length-1);this.state.leftHandlePosition.set(e)}},t}();e.SliderDefaultValueLabel=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SliderRangeLineView=void 0;var s=function(){function t(t,e){this.CLASSES=i(0),this.CONTAINER=t,this.config=e,this.ROOT=this.createRootElement(),this.render(),this.switchVertical(),this.config.leftHandleValue.addSubscriber(this.render.bind(this)),this.config.rightHandleValue.addSubscriber(this.render.bind(this)),this.config.isVertical.addSubscriber(this.render.bind(this)),this.config.isVertical.addSubscriber(this.switchVertical.bind(this)),this.config.isRange.addSubscriber(this.render.bind(this))}return t.prototype.createRootElement=function(){var t=document.createElement("div");return t.classList.add(this.CLASSES.RANGE_LINE),this.CONTAINER.appendChild(t),t},t.prototype.switchVertical=function(){!0===this.config.isVertical.get()?this.ROOT.classList.add(this.CLASSES.RANGE_LINE_VERTICAL):this.ROOT.classList.remove(this.CLASSES.RANGE_LINE_VERTICAL)},t.prototype.render=function(){!0===this.config.isVertical.get()?this.renderVertical():this.renderHorizontal()},t.prototype.renderVertical=function(){this.ROOT.style.left="",this.ROOT.style.right="",!0===this.config.isRange.get()?(this.ROOT.style.top=this.calculateRightShift()+"%",this.ROOT.style.bottom=this.calculateLeftShift()+"%"):(this.ROOT.style.top=100-this.calculateLeftShift()+"%",this.ROOT.style.bottom="0%")},t.prototype.renderHorizontal=function(){this.ROOT.style.top="",this.ROOT.style.bottom="",!0===this.config.isRange.get()?(this.ROOT.style.left=this.calculateLeftShift()+"%",this.ROOT.style.right=this.calculateRightShift()+"%"):(this.ROOT.style.left="0%",this.ROOT.style.right=100-this.calculateLeftShift()+"%")},t.prototype.calculateLeftShift=function(){return 100*this.calculatePosition(this.config.leftHandleValue.get())},t.prototype.calculateRightShift=function(){var t=this.config.rightHandleValue.get();return 100-100*this.calculatePosition(t)},t.prototype.calculatePosition=function(t){var e=this.config.minValue.get(),i=this.config.maxValue.get(),s=this.config.defaultValues.get();return!0===this.config.hasDefaultValues.get()?t/(s.length-1):(t-e)/(i-e)},t}();e.SliderRangeLineView=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SliderScaleValue=void 0;var s=function(){function t(t,e,s,a,n){this.container=t,this.config=e,this.state=s,this.index=a,this.pointsNumber=n,this.classes=i(0),this.root=this.createRoot(),this.label=this.createLabel(),this.shift=0,this.switchLink=this.switch.bind(this),this.switchVerticalLink=this.switchVertical.bind(this),this.config.limitsDisplayed.addSubscriber(this.switchLink),this.config.isVertical.addSubscriber(this.switchVerticalLink),this.switch(this.config.limitsDisplayed.get()),this.bindEventListeners(),this.update()}return t.prototype.setShift=function(t){this.shift=t>100?1:t<0?0:t/100,!0===this.config.isVertical.get()?this.root.style.bottom=100*this.shift+"%":this.root.style.left=100*this.shift+"%"},t.prototype.setValue=function(t){this.label.innerHTML=""+t},t.prototype.remove=function(){this.config.limitsDisplayed.removeSubscriber(this.switchLink),this.config.isVertical.removeSubscriber(this.switchVerticalLink),this.root.remove()},t.prototype.update=function(){var t=this.config.maxValue.get()-this.config.minValue.get(),e=t/(this.pointsNumber-1)*this.index,i=e%this.config.step.get();e-=i,this.index!==this.pointsNumber-1&&i>this.config.step.get()/2&&(e+=this.config.step.get()),this.shift=e/t,this.label.innerHTML=""+(this.config.minValue.get()+e),!0===this.config.isVertical.get()?this.root.style.bottom=100*this.shift+"%":this.root.style.left=100*this.shift+"%"},t.prototype.createRoot=function(){var t=document.createElement("div");return t.classList.add(this.classes.SCALE_VALUE),!0===this.config.isVertical.get()&&t.classList.add(this.classes.SCALE_VALUE_VERTICAL),t},t.prototype.createLabel=function(){var t=document.createElement("div");return t.classList.add(""+this.classes.SCALE_VALUE_LABEL),!0===this.config.isVertical.get()&&t.classList.add(""+this.classes.SCALE_VALUE_LABEL_VERTICAL),this.root.appendChild(t),t},t.prototype.switch=function(t){!0===t&&!1===this.config.hasDefaultValues.get()?this.container.appendChild(this.root):this.root.remove()},t.prototype.switchVertical=function(t){!0===t?(this.root.style.left="",this.root.classList.add(this.classes.SCALE_VALUE_VERTICAL),this.label.classList.add(this.classes.SCALE_VALUE_LABEL_VERTICAL)):(this.root.style.top="",this.root.classList.remove(this.classes.SCALE_VALUE_VERTICAL),this.label.classList.remove(this.classes.SCALE_VALUE_LABEL_VERTICAL)),this.update()},t.prototype.bindEventListeners=function(){this.root.addEventListener("click",this.clickHandler.bind(this))},t.prototype.clickHandler=function(){!1===this.config.isRange.get()&&this.state.leftHandlePosition.set(this.shift)},t}();e.SliderScaleValue=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SliderModel=void 0;var s=function(){function t(t,e){this.config=t,this.state=e,this.state.leftHandlePosition.addSubscriber(this.calculateLeftHandleValue.bind(this)),this.state.rightHandlePosition.addSubscriber(this.calculateRightHandleValue.bind(this))}return t.prototype.calculateLeftHandleValue=function(t){return this.config.hasDefaultValues.get()?this.config.leftHandleValue.set(this.calculateDefaultValue(t)):this.config.leftHandleValue.set(this.calculateValue(t)),this.config.leftHandleValue.get()},t.prototype.calculateRightHandleValue=function(t){return this.config.hasDefaultValues.get()?this.config.rightHandleValue.set(this.calculateDefaultValue(t)):this.config.rightHandleValue.set(this.calculateValue(t)),this.config.rightHandleValue.get()},t.prototype.calculateValue=function(t){var e=this.config.minValue.get(),i=this.config.maxValue.get(),s=this.config.step.get(),a=i-e,n=Math.floor(t*a);return n%s>s/2&&(n+=s),n=n-n%s+e},t.prototype.calculateDefaultValue=function(t){var e=this.config.defaultValues.get();return void 0!==this.config.defaultValues?Math.round((e.length-1)*t):0},t}();e.SliderModel=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SliderState=void 0;var s=i(19),a=function(){function t(t,e){this.leftHandlePosition=new s.SliderStateItem(t||0,this.checkPosition),this.rightHandlePosition=new s.SliderStateItem(e||0,this.checkPosition)}return t.prototype.checkPosition=function(t){var e=t;return e<0&&(e=0),e>1&&(e=1),e},t}();e.SliderState=a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SliderStateItem=void 0;var s=function(){function t(t,e){this.subscribers=[],this.value=t,this.checkValue=e||function(t){return t}}return t.prototype.set=function(t){this.value=this.checkValue(t),this.publish(this.value)},t.prototype.get=function(){return this.value},t.prototype.addSubscriber=function(t){this.subscribers.push(t)},t.prototype.removeSubscriber=function(t){this.subscribers=this.subscribers.filter((function(e){return e!==t}))},t.prototype.publish=function(t){this.subscribers.forEach((function(e){e(t)}))},t}();e.SliderStateItem=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SliderConfig=void 0;var s=i(21),a=function(){function t(t){var e=Object.assign(this.getDefaultConfig(),t);this.isRange=this.setIsRange(e.isRange),this.hasDefaultValues=this.setHasDefaultValues(e.hasDefaultValues),this.isVertical=this.setBoolean(e.isVertical),this.valueLabelDisplayed=this.setBoolean(e.valueLabelDisplayed),this.limitsDisplayed=this.setLimitsDisplayed(e.limitsDisplayed),this.minValue=this.setMinValue(e.minValue),this.maxValue=this.setMaxValue(e.maxValue),this.step=this.setStep(e.step),this.defaultValues=this.setDefaultValues(e.defaultValues),this.leftHandleValue=this.setLeftHandleValue(e.leftHandleValue),this.rightHandleValue=this.setRightHandleValue(e.rightHandleValue),this.pointsNumber=this.setPointsNumber(e.pointsNumber)}return t.prototype.getDefaultConfig=function(){return{isRange:!1,hasDefaultValues:!1,isVertical:!1,valueLabelDisplayed:!0,limitsDisplayed:!0,minValue:0,maxValue:100,step:1,defaultValues:["first","second","third"],leftHandleValue:20,rightHandleValue:80,pointsNumber:5}},t.prototype.setBoolean=function(t){return new s.SliderConfigItem(t)},t.prototype.setIsRange=function(t){var e=new s.SliderConfigItem(t);return e.addSubscriber(this.updateHandlesValues.bind(this)),e},t.prototype.setHasDefaultValues=function(t){var e=new s.SliderConfigItem(t,this.checkHasDefaultValues.bind(this));return e.addSubscriber(this.updateHandlesValues.bind(this)),e},t.prototype.setLimitsDisplayed=function(t){var e=!0!==this.hasDefaultValues.get()&&t;return new s.SliderConfigItem(e,this.checkLimitsDisplayed.bind(this))},t.prototype.setMinValue=function(t){var e=new s.SliderConfigItem(t,this.checkMinValue.bind(this));return e.addSubscriber(this.updateHandlesValues.bind(this)),e},t.prototype.setMaxValue=function(t){var e=t<this.minValue.get()?this.minValue.get():t,i=new s.SliderConfigItem(e,this.checkMaxValue.bind(this));return i.addSubscriber(this.updateHandlesValues.bind(this)),i},t.prototype.setStep=function(t){var e=this.checkStep(t);return new s.SliderConfigItem(e,this.checkStep.bind(this))},t.prototype.setDefaultValues=function(t){var e=new s.SliderConfigItem(t);return e.addSubscriber(this.updateHandlesValues.bind(this)),e},t.prototype.setLeftHandleValue=function(t){var e=this.checkHandleValue(t);return new s.SliderConfigItem(e,this.checkLeftHandleValue.bind(this))},t.prototype.setRightHandleValue=function(t){var e=this.checkRightHandleValue(t);return new s.SliderConfigItem(e,this.checkRightHandleValue.bind(this))},t.prototype.setPointsNumber=function(t){var e=this.checkPointsNumberValue(t);return new s.SliderConfigItem(e,this.checkPointsNumberValue.bind(this))},t.prototype.updateHandlesValues=function(){this.leftHandleValue.set(this.leftHandleValue.get()),this.rightHandleValue.set(this.rightHandleValue.get()),this.leftHandleValue.set(this.leftHandleValue.get())},t.prototype.checkHasDefaultValues=function(t){return!0===t&&this.limitsDisplayed.set(!1),t},t.prototype.checkLimitsDisplayed=function(t){return!0===t&&this.hasDefaultValues.set(!1),t},t.prototype.checkMinValue=function(t){return t>this.maxValue.get()?this.maxValue.get():t},t.prototype.checkMaxValue=function(t){return t<this.minValue.get()?this.minValue.get():t},t.prototype.checkStep=function(t){return t>=1?t:1},t.prototype.checkLeftHandleValue=function(t){var e=this.checkHandleValue(t);return!0===this.isRange.get()&&e>this.rightHandleValue.get()&&(e=this.rightHandleValue.get()),e},t.prototype.checkRightHandleValue=function(t){var e=t;if(this.isRange.get())(e=this.checkHandleValue(t))<this.leftHandleValue.get()&&(e=this.leftHandleValue.get());else{var i=this.defaultValues.get().length;e=this.hasDefaultValues.get()?i-1:this.maxValue.get()}return e},t.prototype.checkHandleValue=function(t){var e=t;if(this.hasDefaultValues.get()){var i=this.defaultValues.get().length;e<0&&(e=0),e>i-1&&(e=i-1)}else{var s=this.step.get();e%s!=0&&(e-=e%s),e<this.minValue.get()&&(e=this.minValue.get()),e>this.maxValue.get()&&(e=this.maxValue.get())}return e},t.prototype.checkPointsNumberValue=function(t){return t>0?t:1},t}();e.SliderConfig=a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SliderConfigItem=void 0;var s=function(){function t(t,e){this.subscribers=[],this.value=t,this.checkValue=e||function(t){return t}}return t.prototype.set=function(t){this.value=this.checkValue(t),this.publish(this.value)},t.prototype.get=function(){return this.value},t.prototype.addSubscriber=function(t){this.subscribers.push(t)},t.prototype.removeSubscriber=function(t){this.subscribers=this.subscribers.filter((function(e){return e!==t}))},t.prototype.publish=function(t){this.subscribers.forEach((function(e){e(t)}))},t}();e.SliderConfigItem=s}]);