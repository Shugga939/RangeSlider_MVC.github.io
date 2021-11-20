// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Model.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Model = /*#__PURE__*/function () {
  function Model(options) {
    _classCallCheck(this, Model);

    this.options = options || this.initDefoultOptions();

    this._checkCorrectValues(this.options);

    if (this.options.marks) this.checkMarksObject();
  }

  _createClass(Model, [{
    key: "getOptions",
    value: function getOptions() {
      return this.options;
    }
  }, {
    key: "setOption",
    value: function setOption(options) {
      this.options = _objectSpread(_objectSpread({}, this.options), options);

      this._checkCorrectValues(this.options);

      if (this.options.marks) this.checkMarksObject();
    }
  }, {
    key: "initDefoultOptions",
    value: function initDefoultOptions() {
      return {
        min_value: 0,
        max_value: 100,
        values: [30, 60],
        separator: ' - ',
        modifier: '',
        range: true,
        orientation: "vertical",
        label: '',
        step: '',
        marks: [{
          value: 0,
          label: "".concat(0)
        }, {
          value: 100,
          label: "".concat(100)
        }]
      };
    }
  }, {
    key: "_checkCorrectValues",
    value: function _checkCorrectValues(options) {
      var isRange = options.isRange;
      var step = options.step;
      if (!options.values) options.values = [];

      var min_value = options.min_value,
          max_value = options.max_value,
          _options$values = _slicedToArray(options.values, 2),
          val1 = _options$values[0],
          val2 = _options$values[1];

      checkStartingValues();

      if (!options.values || !checkOverstatementOrUnderstatement(val1, val2, min_value, max_value)) {
        options.values = [min_value, max_value];
        console.log(new Error('Укажите корректные значения в опциях'));
      }

      if (step && (isNaN(options.step) || step < 0)) options.step = (max_value - min_value) / 10;

      function checkOverstatementOrUnderstatement(val1, val2, min_value, max_value) {
        if (val1 === 0 && min_value === 0) val1 = true;
        if (val1 && val2) return val1 >= min_value && val1 <= max_value && val2 >= min_value && val2 <= max_value && val1 <= val2;
        if (val1 && !isRange) return val1 >= min_value && val1 <= max_value;
      }

      function checkStartingValues() {
        if (!min_value) {
          options.min_value = 0;
          min_value = 0;
        }

        if (!max_value) {
          options.max_value = 100;
          max_value = 100;
        }

        if (!val1 && val2) options.values = [min_value, val2];
        if (!val2 && val1) options.values = [val1, max_value];
      }
    }
  }, {
    key: "checkMarksObject",
    value: function checkMarksObject() {
      var _this = this;

      this.options.marks = this.options.marks.filter(function (element) {
        return element.value <= _this.options.max_value && element.value >= _this.options.min_value;
      });
    }
  }]);

  return Model;
}();

var _default = Model;
exports.default = _default;
},{}],"Helpers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parsePxInValue = parsePxInValue;
exports.parseValueInPx = parseValueInPx;

function parseValueInPx(val, obj_options, size_slider) {
  // парсим полученое значение в px
  var min_value = obj_options.min_value,
      max_value = obj_options.max_value;
  return size_slider * (val - min_value) / (max_value - min_value);
}

function parsePxInValue(val, obj_options, size_slider) {
  var min_value = obj_options.min_value,
      max_value = obj_options.max_value;
  var value = max_value - min_value;
  return (val / size_slider * value + min_value).toFixed(0);
}
},{}],"subview/Marks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Helpers = require("../Helpers.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Marks = /*#__PURE__*/function () {
  function Marks(options, slider) {
    _classCallCheck(this, Marks);

    this.options = options;
    this.slider = slider;
    this.marks = document.createElement('div');
    this.marks.classList.add('marks');
  }

  _createClass(Marks, [{
    key: "render",
    value: function render(handle) {
      var _this = this;

      this.handle = handle;
      var slider = this.slider.getDOM_element();
      var half_width_handle = this.handle.getHandle1().offsetWidth / 2;
      var size_slider = this.options.orientation == 'vertical' ? slider.getBoundingClientRect().height : slider.getBoundingClientRect().width;
      var arrOfMarks = this.options.marks;
      arrOfMarks.forEach(function (element) {
        var mark = document.createElement('span');
        mark.textContent = element.label;
        mark.classList.add('mark');
        mark.setAttribute('data-value', element.value);

        if (_this.options.orientation == 'vertical') {
          _this.marks.classList.add('marks_vertical');

          mark.style.bottom = "".concat((0, _Helpers.parseValueInPx)(element.value, _this.options, size_slider) - size_slider - half_width_handle, "px");
        } else {
          _this.marks.classList.add('marks_horizontal');

          mark.style.left = "".concat((0, _Helpers.parseValueInPx)(element.value, _this.options, size_slider), "px");
        }

        _this.marks.append(mark);
      });
      this.slider.slider.append(this.marks);
    }
  }, {
    key: "updateStyle",
    value: function updateStyle() {
      Array.from(this.marks.children).forEach(function (el) {
        el.style.marginLeft = "-".concat(el.offsetWidth / 2, "px");
      });
    }
  }, {
    key: "delete",
    value: function _delete() {
      Array.from(this.marks.children).forEach(function (el) {
        el.remove();
      });
      this.marks.remove();
    }
  }, {
    key: "getDOM_element",
    value: function getDOM_element() {
      return this.marks;
    }
  }, {
    key: "setOptions",
    value: function setOptions(opt) {
      this.options = opt;
    }
  }]);

  return Marks;
}();

exports.default = Marks;
},{"../Helpers.js":"Helpers.js"}],"subview/Slider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Helpers = require("../Helpers.js");

var _Marks = _interopRequireDefault(require("./Marks.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Slider = /*#__PURE__*/function () {
  function Slider(options, app, observer) {
    _classCallCheck(this, Slider);

    this.options = options;
    this.app = app;
    this.observer = observer;
    this.slider = document.createElement('div');
    this.slider.classList.add('range-slider');
    this.marks = new _Marks.default(this.options, this);
    this.isRange = options.range == true;
    this.isVertical = options.orientation == "vertical";
    this.step = options.step;
  }

  _createClass(Slider, [{
    key: "renderSlider",
    value: function renderSlider(handle) {
      this.app.append(this.slider);

      if (this.options.marks.length) {
        this.handle = handle;
        this.marks.render(handle);
        this.marks.updateStyle();
      }
    }
  }, {
    key: "getDOM_element",
    value: function getDOM_element() {
      return this.slider;
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      this.options = options;
      this.isRange = options.range == true;

      if (this.options.marks.length) {
        this.marks.delete();
        this.marks.setOptions(this.options);
        this.marks.render(this.handle);
        this.marks.updateStyle();
      } else {
        this.marks.delete();
      }
    }
  }, {
    key: "update",
    value: function update(first_value, second_value) {
      this.first_value = first_value;
      this.second_value = this.isRange ? second_value : first_value;
    }
  }, {
    key: "addListener",
    value: function addListener(first_value, second_value, handle_obj) {
      var triggerEvent = new Event('mousedown');
      var that = this;
      this.first_value = first_value;
      this.second_value = this.isRange ? second_value : first_value;
      this.first_handle = handle_obj.getHandle1();
      this.second_handle = handle_obj.getHandle2();
      var size_slider = that.isVertical ? that.slider.getBoundingClientRect().height : that.slider.getBoundingClientRect().width;
      this.slider.addEventListener('mousedown', sliderMove);
      this.slider.addEventListener('touchstart', sliderMove);

      function sliderMove(event) {
        event.preventDefault();
        var clientX = event.touches ? event.touches[0].clientX : event.clientX;
        var clientY = event.touches ? event.touches[0].clientY : event.clientY;

        var _that$slider$getBound = that.slider.getBoundingClientRect(),
            y = _that$slider$getBound.y;

        var _that$slider$getBound2 = that.slider.getBoundingClientRect(),
            x = _that$slider$getBound2.x;

        var target;
        that.isVertical ? target = -(clientY - y - size_slider) : target = clientX - x;

        if (event.target != that.first_handle && event.target != that.second_handle) {
          if (that.marks) moveToMark();
          if (target < that.first_value) moveLeftHandle();
          if (target > that.first_value && target < that.second_value) moveBetweenHandle();
          if (target > that.second_value) moveRightHandle();
        }

        function moveToMark() {
          var marks = that.marks.getDOM_element();

          if (event.target.parentElement == marks) {
            _toConsumableArray(marks.children).forEach(function (element) {
              if (event.target == element) {
                target = (0, _Helpers.parseValueInPx)(element.dataset.value, that.options, size_slider);
              }
            });
          }
        }

        function moveLeftHandle() {
          if (target.toFixed(1) - 2 < 0) target = 0;
          if (that.step) parseTargetToStep();
          handle_obj.update_handle(that.first_handle, target);
          that.first_handle.dispatchEvent(triggerEvent);
        }

        function moveBetweenHandle() {
          if (target - that.first_value <= that.second_value - target) {
            if (that.step) parseTargetToStep();
            handle_obj.update_handle(that.first_handle, target);
            that.first_handle.dispatchEvent(triggerEvent);
          } else {
            if (that.step) parseTargetToStep();
            handle_obj.update_handle(that.second_handle, target);
            that.second_handle.dispatchEvent(triggerEvent);
          }
        }

        function moveRightHandle() {
          if (target.toFixed(1) >= size_slider - 1) {
            target = size_slider;
          }

          if (that.step) parseTargetToStep();

          if (that.isRange) {
            handle_obj.update_handle(that.second_handle, target);
            that.second_handle.dispatchEvent(triggerEvent);
          } else {
            handle_obj.update_handle(that.first_handle, target);
            that.first_handle.dispatchEvent(triggerEvent);
          }
        }

        function parseTargetToStep() {
          var _that$options = that.options,
              min_value = _that$options.min_value,
              max_value = _that$options.max_value;
          var step = that.options.step;
          var value = (max_value - min_value) / step;
          var val2 = step / value;
          var val3 = (0, _Helpers.parsePxInValue)(target, that.options, size_slider) / value;
          target = (0, _Helpers.parseValueInPx)(Math.round(val3 / val2) * step, that.options, size_slider);
        }
      }
    }
  }]);

  return Slider;
}();

exports.default = Slider;
},{"../Helpers.js":"Helpers.js","./Marks.js":"subview/Marks.js"}],"subview/Input.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Helpers = require("../Helpers.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Input = /*#__PURE__*/function () {
  function Input(options, app) {
    _classCallCheck(this, Input);

    this.options = options;
    this.app = app;
    this.input = document.createElement('input');
    this.input.classList.add('slider-value');
    this.input.type = 'text';
    this.isRange = options.range == true;
  }

  _createClass(Input, [{
    key: "renderInput",
    value: function renderInput() {
      this.app.append(this.input);
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      this.options = options;
      this.isRange = options.range == true;
    }
  }, {
    key: "update",
    value: function update(value_1, value_2, size_slider) {
      var _this$options = this.options,
          _this$options$separat = _this$options.separator,
          separator = _this$options$separat === void 0 ? '' : _this$options$separat,
          _this$options$modifie = _this$options.modifier,
          modifier = _this$options$modifie === void 0 ? '' : _this$options$modifie;
      var first_value = (0, _Helpers.parsePxInValue)(value_1, this.options, size_slider);
      var second_value = (0, _Helpers.parsePxInValue)(value_2, this.options, size_slider);

      if (this.isRange) {
        this.input.value = first_value + modifier + separator + second_value + modifier;
      } else {
        this.input.value = first_value + modifier;
      }
    }
  }, {
    key: "addListener",
    value: function addListener(handle, size_slider) {
      this.handle = handle;
      this.size_slider = size_slider;
      var that = this;
      this.first_handle = handle.getHandle1();
      this.second_handle = handle.getHandle2();
      this.input.addEventListener('change', function (event) {
        var val = that.input.value;
        var _that$options = that.options,
            min_value = _that$options.min_value,
            max_value = _that$options.max_value,
            _that$options$separat = _that$options.separator,
            separator = _that$options$separat === void 0 ? '' : _that$options$separat,
            _that$options$modifie = _that$options.modifier,
            modifier = _that$options$modifie === void 0 ? '' : _that$options$modifie;

        var _parseValue = parseValue(val),
            _parseValue2 = _slicedToArray(_parseValue, 2),
            val1 = _parseValue2[0],
            val2 = _parseValue2[1];

        if (val1 > val2 || val2 < val1) {
          var _ref = [val2, val1];
          val1 = _ref[0];
          val2 = _ref[1];
        }

        handle.update_handle(that.first_handle, (0, _Helpers.parseValueInPx)(val1, that.options, size_slider));

        if (that.isRange) {
          handle.update_handle(that.second_handle, (0, _Helpers.parseValueInPx)(val2, that.options, size_slider));
          that.input.value = val1 + modifier + separator + val2 + modifier;
        } else {
          that.input.value = val1 + modifier;
        }

        function parseValue(value) {
          var value1 = parseInt(value);
          var value2;

          if (separator && that.isRange) {
            value1 = parseInt(value.split(separator)[0]);
            value2 = parseInt(value.split(separator)[1]);
          } else if (modifier && that.isRange) {
            value1 = parseInt(value.split(modifier)[0]);
            value2 = parseInt(value.split(modifier)[1]);
          } else if (!that.isRang) {
            value1 = parseInt(value);
          }

          if (isNaN(value1)) value1 = min_value;
          if (isNaN(value2)) value2 = value1;
          return [checkMinMax(value1, min_value, max_value), checkMinMax(value2, min_value, max_value)];
        }

        function checkMinMax(val, minValue, maxValue) {
          if (val < minValue) return minValue;
          if (val > maxValue) return maxValue;
          return val;
        }
      });
    }
  }]);

  return Input;
}();

exports.default = Input;
},{"../Helpers.js":"Helpers.js"}],"subview/Labels.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Labels = /*#__PURE__*/function () {
  function Labels(options, handle) {
    _classCallCheck(this, Labels);

    this.options = options;
    this.handle = handle;
    this.label1 = document.createElement('span');
    this.label1.classList.add('value_label');
    this.label2 = document.createElement('span');
    this.label2.classList.add('value_label');
  }

  _createClass(Labels, [{
    key: "render",
    value: function render() {
      this.handle.getHandle1().append(this.label1);
      if (this.options.range) this.handle.getHandle2().append(this.label2);

      if (this.options.orientation == "vertical") {
        this.label1.classList.add('label_vertical');
        if (this.options.range == true) this.label2.classList.add('label_vertical');
      } else {
        this.label1.classList.add('label_horizontal');
        if (this.options.range == true) this.label2.classList.add('label_horizontal');
      }
    }
  }, {
    key: "setOptions",
    value: function setOptions(opt) {
      this.options = opt;
    }
  }, {
    key: "delete",
    value: function _delete() {
      this.label1.remove();
      this.label2.remove();
    }
  }, {
    key: "update",
    value: function update(first_value, second_value) {
      this.label1.textContent = first_value;
      var half_width_handle = this.handle.getHandle1().offsetWidth / 2;
      var half_size_firstLabel;

      if (this.options.orientation == "vertical") {
        half_size_firstLabel = this.label1.offsetHeight / 2;
        this.label1.style.marginTop = "".concat(half_width_handle - half_size_firstLabel - this.label1.clientTop, "px");
      } else {
        half_size_firstLabel = this.label1.offsetWidth / 2;
        this.label1.style.marginLeft = "".concat(half_width_handle - half_size_firstLabel - this.label1.clientLeft, "px");
      }

      if (this.options.range == true) {
        this.label2.textContent = second_value;
        var half_size_secondLabel;

        if (this.options.orientation == "vertical") {
          half_size_secondLabel = this.label2.offsetHeight / 2;
          this.label2.style.marginTop = "".concat(half_width_handle - half_size_secondLabel - this.label2.clientTop, "px");
        } else {
          half_size_secondLabel = this.label2.offsetWidth / 2;
          this.label2.style.marginLeft = "".concat(half_width_handle - half_size_secondLabel - this.label2.clientLeft, "px");
        }
      }
    }
  }]);

  return Labels;
}();

exports.default = Labels;
},{}],"subview/Handle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Helpers = require("../Helpers.js");

var _Labels = _interopRequireDefault(require("./Labels.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Handle = /*#__PURE__*/function () {
  function Handle(options, slider, observer) {
    _classCallCheck(this, Handle);

    this.options = options;
    this.slider = slider;
    this.observer = observer;
    this.handle_1 = document.createElement('span');
    this.handle_1.classList.add('slider-handle');
    this.handle_2 = document.createElement('span');
    this.handle_2.classList.add('slider-handle');
    this.labels = new _Labels.default(this.options, this);
    this.isRange = options.range == true;
    this.isVertical = options.orientation == "vertical";
    this.step = options.step;
  }

  _createClass(Handle, [{
    key: "getHandle1",
    value: function getHandle1() {
      return this.handle_1;
    }
  }, {
    key: "getHandle2",
    value: function getHandle2() {
      return this.handle_2;
    }
  }, {
    key: "setOptions",
    value: function setOptions(options, first_value, second_value) {
      this.options = options;
      this.isRange = options.range == true;
      this.step = options.step;
      this.first_value = first_value;
      this.second_value = second_value;

      if (this.isRange) {
        this.handle_1.after(this.handle_2);
        this.updateStyle();
        this.addListener();
      } else {
        this.handle_2.remove();
      }

      if (this.options.label == true) {
        this.labels.setOptions(options);
        this.labels.render();
      } else {
        this.labels.delete();
      }
    }
  }, {
    key: "update_handle",
    value: function update_handle(handle, spacing_target) {
      this.isVertical ? handle.style.bottom = "".concat(spacing_target, "px") : handle.style.left = "".concat(spacing_target, "px");
      handle == this.handle_1 ? this.first_value = spacing_target : this.second_value = spacing_target;
      this.observer.broadcast(this.first_value, this.second_value);

      if (this.options.label == true) {
        this.labels.update((0, _Helpers.parsePxInValue)(this.first_value, this.options, this.size_slider), (0, _Helpers.parsePxInValue)(this.second_value, this.options, this.size_slider));
      }
    }
  }, {
    key: "renderHandles",
    value: function renderHandles() {
      var _this = this;

      var arrOfHandles = [this.handle_1];
      if (this.isRange) arrOfHandles.push(this.handle_2);
      arrOfHandles.forEach(function (el) {
        _this.slider.append(el);
      });
      if (this.options.label == true) this.labels.render();
    }
  }, {
    key: "updateStyle",
    value: function updateStyle() {
      var half_width_handle;
      this.isVertical ? half_width_handle = this.handle_1.offsetHeight / 2 : half_width_handle = this.handle_1.offsetWidth / 2;
      var borderWidth_of_slider = this.isVertical ? this.slider.clientTop : this.slider.clientLeft;
      var margin = half_width_handle + borderWidth_of_slider;

      if (this.isVertical) {
        this.handle_1.style.marginBottom = "-".concat(margin, "px");
        if (this.isRange) this.handle_2.style.marginBottom = "-".concat(margin, "px");
      } else {
        this.handle_1.style.marginLeft = "-".concat(margin, "px");
        if (this.isRange) this.handle_2.style.marginLeft = "-".concat(margin, "px");
      }
    }
  }, {
    key: "addListener",
    value: function addListener() {
      var that = this;
      var slider = this.slider;
      this.size_slider = this.isVertical ? slider.getBoundingClientRect().height : slider.getBoundingClientRect().width;
      var borderWidth_of_slider = this.isVertical ? slider.clientTop : slider.clientLeft;
      this.handle_1.addEventListener('mousedown', HandleMove);
      this.handle_1.addEventListener('touchstart', HandleMove);

      if (this.isRange) {
        this.handle_2.addEventListener('mousedown', HandleMove);
        this.handle_2.addEventListener('touchstart', HandleMove);
      }

      function HandleMove(event) {
        event.preventDefault();
        event.stopPropagation();
        document.addEventListener('mousemove', MouseMove);
        document.addEventListener('mouseup', MouseUp);
        document.addEventListener('touchmove', MouseMove);
        document.addEventListener('touchend', MouseUp);
        var handle = this;

        var _slider$getBoundingCl = slider.getBoundingClientRect(),
            x = _slider$getBoundingCl.x;

        var _slider$getBoundingCl2 = slider.getBoundingClientRect(),
            y = _slider$getBoundingCl2.y;

        var clientX = event.touches ? event.touches[0].clientX : event.clientX;
        var clientY = event.touches ? event.touches[0].clientY : event.clientY;
        var shift;
        var margin_handle;

        if (that.isVertical) {
          shift = clientY - handle.getBoundingClientRect().top - handle.offsetHeight / 2 || '0';
          margin_handle = parseInt(getComputedStyle(handle).marginTop);
        } else {
          shift = clientX - handle.getBoundingClientRect().left || handle.offsetHeight / 2;
          margin_handle = parseInt(getComputedStyle(handle).marginLeft);
        }

        function MouseMove(event) {
          var clientX = event.touches ? event.touches[0].clientX : event.clientX;
          var clientY = event.touches ? event.touches[0].clientY : event.clientY;
          var target;
          var newRight = that.size_slider;
          var val1 = (0, _Helpers.parsePxInValue)(that.first_value, that.options, that.size_slider);
          var val2 = (0, _Helpers.parsePxInValue)(that.second_value, that.options, that.size_slider);
          that.isVertical ? target = -(clientY - y - shift - margin_handle - that.size_slider) : target = clientX - x - shift - margin_handle - borderWidth_of_slider;
          that.step ? moveIfStep() : moveIfNotStep();

          function moveIfNotStep() {
            if (handle == that.handle_1) {
              if (that.isRange) newRight = that.second_value;
              if (target < 0) target = 0;
            } else {
              if (target < that.first_value) target = that.first_value;
            }

            if (target > newRight) {
              target = newRight;
            }

            that.update_handle(handle, target);
          }

          function moveIfStep() {
            var step = that.step;
            var target_up;
            var target_down;
            handle == that.handle_1 ? target_up = (0, _Helpers.parseValueInPx)(+val1 + +step, that.options, that.size_slider) : target_up = (0, _Helpers.parseValueInPx)(+val2 + +step, that.options, that.size_slider);
            handle == that.handle_1 ? target_down = (0, _Helpers.parseValueInPx)(+val1 - +step, that.options, that.size_slider) : target_down = (0, _Helpers.parseValueInPx)(+val2 - +step, that.options, that.size_slider);
            if (target_up > newRight) target_up = newRight;
            if (target_down < 0) target_down = 0;

            if (target >= target_up) {
              if (that.isRange && handle == that.handle_1) newRight = that.second_value;

              if (target_up > newRight) {
                target_up = newRight;
              }

              that.update_handle(handle, target_up);
            }

            if (target <= target_down) {
              if (that.isRange && handle == that.handle_2 && target_down < that.first_value) target_down = that.first_value;

              if (target_down < 0) {
                target_down = 0;
              }

              that.update_handle(handle, target_down);
            }
          }
        }

        function MouseUp() {
          document.removeEventListener('mouseup', MouseUp);
          document.removeEventListener('mousemove', MouseMove);
          document.removeEventListener('touchmove', MouseMove);
          document.removeEventListener('touchend', MouseUp);
        }
      }
    }
  }]);

  return Handle;
}();

exports.default = Handle;
},{"../Helpers.js":"Helpers.js","./Labels.js":"subview/Labels.js"}],"subview/RangeLine.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RangeLine = /*#__PURE__*/function () {
  function RangeLine(options, slider) {
    _classCallCheck(this, RangeLine);

    this.rangeLine = document.createElement('span');
    this.rangeLine.classList.add('slider-range');
    this.isRange = options.range == true;
    this.isVertical = options.orientation == "vertical";
    this.slider = slider;
  }

  _createClass(RangeLine, [{
    key: "renderLine",
    value: function renderLine() {
      this.slider.append(this.rangeLine);
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      this.options = options;
      this.isRange = options.range == true;
    }
  }, {
    key: "update",
    value: function update(first_value, second_value) {
      var that = this;
      this.isRange ? update_if_isRange() : update_if_notRange();

      function update_if_isRange() {
        if (that.isVertical) {
          that.rangeLine.style.height = "".concat(second_value - first_value, "px");
          that.rangeLine.style.bottom = "".concat(first_value - that.borderWidth_of_slider, "px");
        } else {
          that.rangeLine.style.width = "".concat(second_value - first_value, "px");
          that.rangeLine.style.left = "".concat(first_value + that.half_width_handle - parseInt(getComputedStyle(that.slider).paddingLeft), "px");
        }
      }

      function update_if_notRange() {
        if (that.isVertical) {
          that.rangeLine.style.height = "".concat(first_value + parseInt(getComputedStyle(that.slider).paddingTop), "px");
          that.rangeLine.style.bottom = "".concat(-that.borderWidth_of_slider, "px");
        } else {
          that.rangeLine.style.width = "".concat(first_value + parseInt(getComputedStyle(that.slider).paddingLeft), "px");
          that.rangeLine.style.left = "".concat(that.half_width_handle - parseInt(getComputedStyle(that.slider).paddingLeft), "px");
        }
      }
    }
  }, {
    key: "updateStyle",
    value: function updateStyle(handle) {
      this.half_width_handle = handle.offsetWidth / 2;
      this.borderWidth_of_slider = this.isVertical ? this.slider.clientTop : this.slider.clientLeft;
      var margin = this.half_width_handle + this.borderWidth_of_slider;
      this.isVertical ? this.rangeLine.style.marginTop = "-".concat(margin, "px") : this.rangeLine.style.marginLeft = "-".concat(margin, "px");
    }
  }]);

  return RangeLine;
}();

exports.default = RangeLine;
},{}],"Observer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Observer = /*#__PURE__*/function () {
  function Observer() {
    _classCallCheck(this, Observer);

    this.observers = [];
  }

  _createClass(Observer, [{
    key: "subscribe",
    value: function subscribe(fn) {
      this.observers.push(fn);
    }
  }, {
    key: "broadcast",
    value: function broadcast(value1, value2) {
      this.observers.forEach(function (func) {
        switch (func.name) {
          case 'updateValue':
            {
              func(value1, value2);
            }
        }
      });
    }
  }]);

  return Observer;
}();

var _default = Observer;
exports.default = _default;
},{}],"View.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Slider = _interopRequireDefault(require("./subview/Slider.js"));

var _Input = _interopRequireDefault(require("./subview/Input.js"));

var _Handle = _interopRequireDefault(require("./subview/Handle.js"));

var _RangeLine = _interopRequireDefault(require("./subview/RangeLine.js"));

var _Observer = _interopRequireDefault(require("./Observer.js"));

var _Helpers = require("./Helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var View = /*#__PURE__*/function () {
  function View(element) {
    _classCallCheck(this, View);

    if (!element.classList.contains('slider')) {
      this.app = document.createElement('div');
      this.app.classList.add('slider');
      element.append(this.app);
    } else {
      this.app = element;
    }

    this.observer = new _Observer.default();
  }

  _createClass(View, [{
    key: "update",
    value: function update(options) {
      this.options = options;
      this.initValues();
      this.initStyles();
      this.slider_object.setOptions(options);
      this.handle.setOptions(options, this.first_value, this.second_value);
      this.rangeLine.setOptions(options);
      this.input.setOptions(options);
      this.handle.update_handle(this.handle.getHandle1(), this.first_value);
      this.handle.update_handle(this.handle.getHandle2(), this.second_value);
    }
  }, {
    key: "renderDOM",
    value: function renderDOM(options) {
      this.options = options;
      this.slider_object = new _Slider.default(this.options, this.app, this.observer);
      this.slider = this.slider_object.getDOM_element();
      this.input = new _Input.default(this.options, this.app);
      this.handle = new _Handle.default(this.options, this.slider, this.observer);
      this.rangeLine = new _RangeLine.default(this.options, this.slider);
      this.input.renderInput();
      this.handle.renderHandles();
      this.rangeLine.renderLine();
      this.slider_object.renderSlider(this.handle);
    }
  }, {
    key: "initValues",
    value: function initValues() {
      var isVertical = this.options.orientation == "vertical";
      this.size_slider = isVertical ? this.slider.getBoundingClientRect().height : this.slider.getBoundingClientRect().width;
      this.first_value = (0, _Helpers.parseValueInPx)(this.options.values[0], this.options, this.size_slider);
      this.second_value = (0, _Helpers.parseValueInPx)(this.options.values[1], this.options, this.size_slider);
    }
  }, {
    key: "initStyles",
    value: function initStyles() {
      this.handle.updateStyle();
      this.rangeLine.updateStyle(this.handle.getHandle1());
    }
  }, {
    key: "initScripts",
    value: function initScripts() {
      var that = this;
      addListeners();
      addObserver();

      function addListeners() {
        that.handle.addListener();
        that.slider_object.addListener(that.first_value, that.second_value, that.handle);
        that.input.addListener(that.handle, that.size_slider);
        that.handle.update_handle(that.handle.getHandle1(), that.first_value);
        that.handle.update_handle(that.handle.getHandle2(), that.second_value);
        that.rangeLine.update(that.first_value, that.second_value, that.handle.getHandle1());
        that.input.update(that.first_value, that.second_value, that.size_slider);
      }

      function addObserver() {
        that.observer.subscribe(updateValue);

        function updateValue(val1, val2) {
          that.first_value = val1;
          that.second_value = val2;
          that.rangeLine.update(that.first_value, that.second_value, that.options);
          that.input.update(that.first_value, that.second_value, that.size_slider);
          that.slider_object.update(that.first_value, that.second_value);
        }
      }
    }
  }]);

  return View;
}();

var _default = View;
exports.default = _default;
},{"./subview/Slider.js":"subview/Slider.js","./subview/Input.js":"subview/Input.js","./subview/Handle.js":"subview/Handle.js","./subview/RangeLine.js":"subview/RangeLine.js","./Observer.js":"Observer.js","./Helpers.js":"Helpers.js"}],"Controller.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Controller = /*#__PURE__*/function () {
  function Controller(model, view) {
    _classCallCheck(this, Controller);

    this.model = model;
    this.view = view;
    this.view.renderDOM(this.model.getOptions());
    this.view.initValues();
    this.view.initStyles();
    this.view.initScripts();
  }

  _createClass(Controller, [{
    key: "setOptions",
    value: function setOptions(opt) {
      this.model.setOption(opt);
      this.view.update(this.model.getOptions());
    }
  }]);

  return Controller;
}();

var _default = Controller;
exports.default = _default;
},{}],"RangeSlider.js":[function(require,module,exports) {
"use strict";

var _Model = _interopRequireDefault(require("./Model.js"));

var _View = _interopRequireDefault(require("./View.js"));

var _Controller = _interopRequireDefault(require("./Controller.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Slider = function (options, element) {
  return new _Controller.default(new _Model.default(options), new _View.default(element));
};
},{"./Model.js":"Model.js","./View.js":"View.js","./Controller.js":"Controller.js"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57212" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","RangeSlider.js"], null)
//# sourceMappingURL=/RangeSlider.js.map