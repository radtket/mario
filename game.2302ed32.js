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
})({"FuCt":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/* eslint-disable no-void */
/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
/* eslint-disable  */
var kaboom = function () {
  var __defProp = Object.defineProperty;
  var __name = function __name(target, value) {
    return __defProp(target, 'name', {
      value: value,
      configurable: true
    });
  };
  var __esm = function __esm(fn, res) {
    return function __init() {
      return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
    };
  };
  var __commonJS = function __commonJS(cb, mod) {
    return function __require() {
      return mod || (0, cb[Object.keys(cb)[0]])((mod = {
        exports: {}
      }).exports, mod), mod.exports;
    };
  };
  var __toBinary = /* @__PURE__ */function () {
    var table = new Uint8Array(128);
    for (var i = 0; i < 64; i++) table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
    return function (base64) {
      var n = base64.length;
      var bytes = new Uint8Array((n - (base64[n - 1] == '=') - (base64[n - 2] == '=')) * 3 / 4 | 0);
      for (var i2 = 0, j = 0; i2 < n;) {
        var c0 = table[base64.charCodeAt(i2++)];
        var c1 = table[base64.charCodeAt(i2++)];
        var c2 = table[base64.charCodeAt(i2++)];
        var c3 = table[base64.charCodeAt(i2++)];
        bytes[j++] = c0 << 2 | c1 >> 4;
        bytes[j++] = c1 << 4 | c2 >> 2;
        bytes[j++] = c2 << 6 | c3;
      }
      return bytes;
    };
  }();

  // src/math.ts
  function deg2rad(deg) {
    return deg * Math.PI / 180;
  }
  function rad2deg(rad) {
    return rad * 180 / Math.PI;
  }
  function clamp(val, min, max) {
    if (min > max) {
      return clamp(val, max, min);
    }
    return Math.min(Math.max(val, min), max);
  }
  function _lerp(a, b, t) {
    return a + (b - a) * t;
  }
  function map(v, l1, h1, l2, h2) {
    return l2 + (v - l1) / (h1 - l1) * (h2 - l2);
  }
  function mapc(v, l1, h1, l2, h2) {
    return clamp(map(v, l1, h1, l2, h2), l2, h2);
  }
  function vec2() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === 0) {
      return vec2(0, 0);
    }
    if (args.length === 1) {
      if (typeof args[0] === 'number') {
        return vec2(args[0], args[0]);
      }
      if (isVec2(args[0])) {
        return vec2(args[0].x, args[0].y);
      }
      if (Array.isArray(args[0]) && args[0].length === 2) {
        return vec2.apply(null, args[0]);
      }
    }
    return {
      x: args[0],
      y: args[1],
      clone: function clone() {
        return vec2(this.x, this.y);
      },
      add: function add() {
        var p2 = vec2.apply(void 0, arguments);
        return vec2(this.x + p2.x, this.y + p2.y);
      },
      sub: function sub() {
        var p2 = vec2.apply(void 0, arguments);
        return vec2(this.x - p2.x, this.y - p2.y);
      },
      scale: function scale() {
        var s = vec2.apply(void 0, arguments);
        return vec2(this.x * s.x, this.y * s.y);
      },
      dist: function dist() {
        var p2 = vec2.apply(void 0, arguments);
        return Math.sqrt((this.x - p2.x) * (this.x - p2.x) + (this.y - p2.y) * (this.y - p2.y));
      },
      len: function len() {
        return this.dist(vec2(0, 0));
      },
      unit: function unit() {
        return this.scale(1 / this.len());
      },
      normal: function normal() {
        return vec2(this.y, -this.x);
      },
      dot: function dot(p2) {
        return this.x * p2.x + this.y + p2.y;
      },
      angle: function angle() {
        var p2 = vec2.apply(void 0, arguments);
        return Math.atan2(this.y - p2.y, this.x - p2.x);
      },
      lerp: function lerp(p2, t) {
        return vec2(_lerp(this.x, p2.x, t), _lerp(this.y, p2.y, t));
      },
      toFixed: function toFixed(n) {
        return vec2(this.x.toFixed(n), this.y.toFixed(n));
      },
      eq: function eq(other) {
        return this.x === other.x && this.y === other.y;
      },
      str: function str() {
        return "(".concat(this.x, ", ").concat(this.y, ")");
      }
    };
  }
  function vec2FromAngle(a) {
    return vec2(Math.cos(a), Math.sin(a));
  }
  function vec3(x, y, z) {
    return {
      x: x,
      y: y,
      z: z,
      xy: function xy() {
        return vec2(this.x, this.y);
      }
    };
  }
  function isVec2(p) {
    return p !== void 0 && p.x !== void 0 && p.y !== void 0;
  }
  function isVec3(p) {
    return p !== void 0 && p.x !== void 0 && p.y !== void 0 && p.z !== void 0;
  }
  function isColor(c) {
    return c !== void 0 && c.r !== void 0 && c.g !== void 0 && c.b !== void 0 && c.a !== void 0;
  }
  function isMat4(m) {
    if (m !== void 0 && Array.isArray(m.m) && m.m.length === 16) {
      return m;
    }
  }
  function rgb() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (args.length === 0) {
      return rgba();
    }
    if (args.length === 1) {
      if (isColor(args[0])) {
        return rgba(args[0]);
      }
      if (Array.isArray(args[0]) && args[0].length === 3) {
        return rgb.apply(null, args[0]);
      }
    }
    return rgba(args[0], args[1], args[2], 1);
  }
  function rgba() {
    var _args$;
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    if (args.length === 0) {
      return rgba(1, 1, 1, 1);
    }
    if (args.length === 1) {
      if (isColor(args[0])) {
        return rgba(args[0].r, args[0].g, args[0].b, args[0].a);
      }
      if (Array.isArray(args[0]) && args[0].length === 4) {
        return rgba.apply(null, args[0]);
      }
    }
    return {
      r: args[0],
      g: args[1],
      b: args[2],
      a: (_args$ = args[3]) !== null && _args$ !== void 0 ? _args$ : 1,
      clone: function clone() {
        return rgba(this.r, this.g, this.b, this.a);
      },
      lighten: function lighten(a) {
        return rgba(this.r + a, this.g + a, this.b + a, this.a);
      },
      darken: function darken(a) {
        return this.lighten(-a);
      },
      invert: function invert() {
        return rgba(1 - this.r, 1 - this.g, 1 - this.b, this.a);
      },
      isDark: function isDark() {
        var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;
        return this.r + this.g + this.b < 3 * p;
      },
      isLight: function isLight() {
        var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;
        return this.r + this.g + this.b > 3 * p;
      },
      eq: function eq(other) {
        return this.r === other.r && this.g === other.g && this.b === other.g && this.a === other.a;
      }
    };
  }
  function quad(x, y, w, h) {
    return {
      x: x,
      y: y,
      w: w,
      h: h,
      scale: function scale(other) {
        return quad(this.x + this.w * other.x, this.y + this.h * other.y, this.w * other.w, this.h * other.h);
      },
      clone: function clone() {
        return quad(this.x, this.y, this.w, this.h);
      },
      eq: function eq(other) {
        return this.x === other.x && this.y === other.y && this.w === other.w && this.h === other.h;
      }
    };
  }
  function mat4(m) {
    return {
      m: m ? _toConsumableArray(m) : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      clone: function clone() {
        return mat4(this.m);
      },
      mult: function mult(other) {
        var out = [];
        for (var i = 0; i < 4; i++) {
          for (var j = 0; j < 4; j++) {
            out[i * 4 + j] = this.m[0 * 4 + j] * other.m[i * 4 + 0] + this.m[1 * 4 + j] * other.m[i * 4 + 1] + this.m[2 * 4 + j] * other.m[i * 4 + 2] + this.m[3 * 4 + j] * other.m[i * 4 + 3];
          }
        }
        return mat4(out);
      },
      multVec4: function multVec4(p) {
        return {
          x: p.x * this.m[0] + p.y * this.m[4] + p.z * this.m[8] + p.w * this.m[12],
          y: p.x * this.m[1] + p.y * this.m[5] + p.z * this.m[9] + p.w * this.m[13],
          z: p.x * this.m[2] + p.y * this.m[6] + p.z * this.m[10] + p.w * this.m[14],
          w: p.x * this.m[3] + p.y * this.m[7] + p.z * this.m[11] + p.w * this.m[15]
        };
      },
      multVec3: function multVec3(p) {
        var p4 = this.multVec4({
          x: p.x,
          y: p.y,
          z: p.z,
          w: 1
        });
        return vec3(p4.x, p4.y, p4.z);
      },
      multVec2: function multVec2(p) {
        return vec2(p.x * this.m[0] + p.y * this.m[4] + 0 * this.m[8] + 1 * this.m[12], p.x * this.m[1] + p.y * this.m[5] + 0 * this.m[9] + 1 * this.m[13]);
      },
      translate: function translate(p) {
        return this.mult(mat4([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, p.x, p.y, 0, 1]));
      },
      scale: function scale(s) {
        return this.mult(mat4([s.x, 0, 0, 0, 0, s.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]));
      },
      rotateX: function rotateX(a) {
        return this.mult(mat4([1, 0, 0, 0, 0, Math.cos(a), -Math.sin(a), 0, 0, Math.sin(a), Math.cos(a), 0, 0, 0, 0, 1]));
      },
      rotateY: function rotateY(a) {
        return this.mult(mat4([Math.cos(a), 0, -Math.sin(a), 0, 0, 1, 0, 0, Math.sin(a), 0, Math.cos(a), 0, 0, 0, 0, 1]));
      },
      rotateZ: function rotateZ(a) {
        return this.mult(mat4([Math.cos(a), -Math.sin(a), 0, 0, Math.sin(a), Math.cos(a), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]));
      },
      invert: function invert() {
        var out = [];
        var f00 = this.m[10] * this.m[15] - this.m[14] * this.m[11];
        var f01 = this.m[9] * this.m[15] - this.m[13] * this.m[11];
        var f02 = this.m[9] * this.m[14] - this.m[13] * this.m[10];
        var f03 = this.m[8] * this.m[15] - this.m[12] * this.m[11];
        var f04 = this.m[8] * this.m[14] - this.m[12] * this.m[10];
        var f05 = this.m[8] * this.m[13] - this.m[12] * this.m[9];
        var f06 = this.m[6] * this.m[15] - this.m[14] * this.m[7];
        var f07 = this.m[5] * this.m[15] - this.m[13] * this.m[7];
        var f08 = this.m[5] * this.m[14] - this.m[13] * this.m[6];
        var f09 = this.m[4] * this.m[15] - this.m[12] * this.m[7];
        var f10 = this.m[4] * this.m[14] - this.m[12] * this.m[6];
        var f11 = this.m[5] * this.m[15] - this.m[13] * this.m[7];
        var f12 = this.m[4] * this.m[13] - this.m[12] * this.m[5];
        var f13 = this.m[6] * this.m[11] - this.m[10] * this.m[7];
        var f14 = this.m[5] * this.m[11] - this.m[9] * this.m[7];
        var f15 = this.m[5] * this.m[10] - this.m[9] * this.m[6];
        var f16 = this.m[4] * this.m[11] - this.m[8] * this.m[7];
        var f17 = this.m[4] * this.m[10] - this.m[8] * this.m[6];
        var f18 = this.m[4] * this.m[9] - this.m[8] * this.m[5];
        out[0] = this.m[5] * f00 - this.m[6] * f01 + this.m[7] * f02;
        out[4] = -(this.m[4] * f00 - this.m[6] * f03 + this.m[7] * f04);
        out[8] = this.m[4] * f01 - this.m[5] * f03 + this.m[7] * f05;
        out[12] = -(this.m[4] * f02 - this.m[5] * f04 + this.m[6] * f05);
        out[1] = -(this.m[1] * f00 - this.m[2] * f01 + this.m[3] * f02);
        out[5] = this.m[0] * f00 - this.m[2] * f03 + this.m[3] * f04;
        out[9] = -(this.m[0] * f01 - this.m[1] * f03 + this.m[3] * f05);
        out[13] = this.m[0] * f02 - this.m[1] * f04 + this.m[2] * f05;
        out[2] = this.m[1] * f06 - this.m[2] * f07 + this.m[3] * f08;
        out[6] = -(this.m[0] * f06 - this.m[2] * f09 + this.m[3] * f10);
        out[10] = this.m[0] * f11 - this.m[1] * f09 + this.m[3] * f12;
        out[14] = -(this.m[0] * f08 - this.m[1] * f10 + this.m[2] * f12);
        out[3] = -(this.m[1] * f13 - this.m[2] * f14 + this.m[3] * f15);
        out[7] = this.m[0] * f13 - this.m[2] * f16 + this.m[3] * f17;
        out[11] = -(this.m[0] * f14 - this.m[1] * f16 + this.m[3] * f18);
        out[15] = this.m[0] * f15 - this.m[1] * f17 + this.m[2] * f18;
        var det = this.m[0] * out[0] + this.m[1] * out[4] + this.m[2] * out[8] + this.m[3] * out[12];
        for (var i = 0; i < 4; i++) {
          for (var j = 0; j < 4; j++) {
            out[i * 4 + j] *= 1 / det;
          }
        }
        return mat4(out);
      }
    };
  }
  function wave(lo, hi, t) {
    return lo + (Math.sin(t) + 1) / 2 * (hi - lo);
  }
  function makeRng(seed) {
    return {
      seed: seed,
      gen: function gen() {
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }
        if (args.length === 0) {
          this.seed = (A * this.seed + C) % M;
          return this.seed / M;
        }
        if (args.length === 1) {
          if (typeof args[0] === 'number') {
            return this.gen(0, args[0]);
          }
          if (isVec2(args[0])) {
            return this.gen(vec2(0, 0), args[0]);
          }
          if (isColor(args[0])) {
            return this.gen(rgba(0, 0, 0, 0), args[0]);
          }
        } else if (args.length === 2) {
          if (typeof args[0] === 'number' && typeof args[1] === 'number') {
            return this.gen() * (args[1] - args[0]) + args[0];
          }
          if (isVec2(args[0]) && isVec2(args[1])) {
            return vec2(this.gen(args[0].x, args[1].x), this.gen(args[0].y, args[1].y));
          }
          if (isColor(args[0]) && isColor(args[1])) {
            return rgba(this.gen(args[0].r, args[1].r), this.gen(args[0].g, args[1].g), this.gen(args[0].b, args[1].b), this.gen(args[0].a, args[1].a));
          }
        }
      }
    };
  }
  function randSeed(seed) {
    if (seed != null) {
      defRNG.seed = seed;
    }
    return defRNG.seed;
  }
  function rand() {
    var _defRNG;
    return (_defRNG = defRNG).gen.apply(_defRNG, arguments);
  }
  function chance(p) {
    return rand() <= p;
  }
  function choose(list) {
    return list[Math.floor(rand(list.length))];
  }
  function colRectRect(r1, r2) {
    return r1.p2.x >= r2.p1.x && r1.p1.x <= r2.p2.x && r1.p2.y >= r2.p1.y && r1.p1.y <= r2.p2.y;
  }
  function overlapRectRect(r1, r2) {
    return r1.p2.x > r2.p1.x && r1.p1.x < r2.p2.x && r1.p2.y > r2.p1.y && r1.p1.y < r2.p2.y;
  }
  function colRectPt(r, pt) {
    return pt.x >= r.p1.x && pt.x <= r.p2.x && pt.y >= r.p1.y && pt.y < r.p2.y;
  }
  var A;
  var C;
  var M;
  var defRNG;
  var init_math = __esm({
    'src/math.ts': function src_mathTs() {
      __name(deg2rad, 'deg2rad');
      __name(rad2deg, 'rad2deg');
      __name(clamp, 'clamp');
      __name(_lerp, 'lerp');
      __name(map, 'map');
      __name(mapc, 'mapc');
      __name(vec2, 'vec2');
      __name(vec2FromAngle, 'vec2FromAngle');
      __name(vec3, 'vec3');
      __name(isVec2, 'isVec2');
      __name(isVec3, 'isVec3');
      __name(isColor, 'isColor');
      __name(isMat4, 'isMat4');
      __name(rgb, 'rgb');
      __name(rgba, 'rgba');
      __name(quad, 'quad');
      __name(mat4, 'mat4');
      __name(wave, 'wave');
      A = 1103515245;
      C = 12345;
      M = 2147483648;
      defRNG = makeRng(Date.now());
      __name(makeRng, 'makeRng');
      __name(randSeed, 'randSeed');
      __name(rand, 'rand');
      __name(chance, 'chance');
      __name(choose, 'choose');
      __name(colRectRect, 'colRectRect');
      __name(overlapRectRect, 'overlapRectRect');
      __name(colRectPt, 'colRectPt');
    }
  });

  // src/utils.ts
  function deepEq(o1, o2) {
    var t1 = _typeof(o1);
    var t2 = _typeof(o2);
    if (t1 !== t2) {
      return false;
    }
    if (t1 === 'object' && t2 === 'object') {
      var k1 = Object.keys(o1);
      var k2 = Object.keys(o2);
      if (k1.length !== k2.length) {
        return false;
      }
      for (var _i = 0, _k = k1; _i < _k.length; _i++) {
        var k = _k[_i];
        var v1 = o1[k];
        var v2 = o2[k];
        if (!(typeof v1 === 'function' && typeof v2 === 'function')) {
          if (!deepEq(v1, v2)) {
            return false;
          }
        }
      }
      return true;
    }
    return o1 === o2;
  }
  var init_utils = __esm({
    'src/utils.ts': function src_utilsTs() {
      __name(deepEq, 'deepEq');
    }
  });

  // src/gfx.ts
  function originPt(orig) {
    switch (orig) {
      case 'topleft':
        return vec2(-1, -1);
      case 'top':
        return vec2(0, -1);
      case 'topright':
        return vec2(1, -1);
      case 'left':
        return vec2(-1, 0);
      case 'center':
        return vec2(0, 0);
      case 'right':
        return vec2(1, 0);
      case 'botleft':
        return vec2(-1, 1);
      case 'bot':
        return vec2(0, 1);
      case 'botright':
        return vec2(1, 1);
      default:
        return orig;
    }
  }
  function gfxInit(gl, gconf) {
    var texFilter = function () {
      switch (gconf.texFilter) {
        case 'linear':
          return gl.LINEAR;
        case 'nearest':
          return gl.NEAREST;
        default:
          return gl.NEAREST;
      }
    }();
    var gfx = function (_gconf$clearColor) {
      var defProg = makeProgram(DEF_VERT, DEF_FRAG);
      var emptyTex = makeTex(new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1));
      var c = (_gconf$clearColor = gconf.clearColor) !== null && _gconf$clearColor !== void 0 ? _gconf$clearColor : rgba(0, 0, 0, 1);
      gl.clearColor(c.r, c.g, c.b, c.a);
      gl.enable(gl.BLEND);
      gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      var vbuf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vbuf);
      gl.bufferData(gl.ARRAY_BUFFER, QUEUE_COUNT * 4, gl.DYNAMIC_DRAW);
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      var ibuf = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibuf);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, QUEUE_COUNT * 2, gl.DYNAMIC_DRAW);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
      var bgTex = makeTex(new ImageData(new Uint8ClampedArray([128, 128, 128, 255, 190, 190, 190, 255, 190, 190, 190, 255, 128, 128, 128, 255]), 2, 2));
      return {
        drawCalls: 0,
        lastDrawCalls: 0,
        defProg: defProg,
        curProg: defProg,
        defTex: emptyTex,
        curTex: emptyTex,
        curUniform: {},
        vbuf: vbuf,
        ibuf: ibuf,
        vqueue: [],
        iqueue: [],
        transform: mat4(),
        transformStack: [],
        clearColor: c,
        bgTex: bgTex
      };
    }();
    frameStart();
    frameEnd();
    function powerOfTwo(n) {
      return Math.log(n) / Math.log(2) % 1 === 0;
    }
    __name(powerOfTwo, 'powerOfTwo');
    function makeTex(data) {
      var id = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, id);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, data);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, texFilter);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, texFilter);
      var wrap = function () {
        if (powerOfTwo(data.width) && powerOfTwo(data.height)) {
          return gl.REPEAT;
        }
        return gl.CLAMP_TO_EDGE;
      }();
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrap);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrap);
      gl.bindTexture(gl.TEXTURE_2D, null);
      return {
        width: data.width,
        height: data.height,
        bind: function bind() {
          gl.bindTexture(gl.TEXTURE_2D, id);
        },
        unbind: function unbind() {
          gl.bindTexture(gl.TEXTURE_2D, null);
        }
      };
    }
    __name(makeTex, 'makeTex');
    function makeProgram() {
      var vertSrc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEF_VERT;
      var fragSrc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEF_FRAG;
      var msg;
      var vcode = VERT_TEMPLATE.replace('{{user}}', vertSrc !== null && vertSrc !== void 0 ? vertSrc : DEF_VERT);
      var fcode = FRAG_TEMPLATE.replace('{{user}}', fragSrc !== null && fragSrc !== void 0 ? fragSrc : DEF_FRAG);
      var vertShader = gl.createShader(gl.VERTEX_SHADER);
      var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(vertShader, vcode);
      gl.shaderSource(fragShader, fcode);
      gl.compileShader(vertShader);
      gl.compileShader(fragShader);
      if (msg = gl.getShaderInfoLog(vertShader)) {
        throw new Error(msg);
      }
      if (msg = gl.getShaderInfoLog(fragShader)) {
        throw new Error(msg);
      }
      var id = gl.createProgram();
      gl.attachShader(id, vertShader);
      gl.attachShader(id, fragShader);
      gl.bindAttribLocation(id, 0, 'a_pos');
      gl.bindAttribLocation(id, 1, 'a_uv');
      gl.bindAttribLocation(id, 2, 'a_color');
      gl.linkProgram(id);
      if (msg = gl.getProgramInfoLog(id)) {
        if (msg !== '\n') {
          throw new Error(msg);
        }
      }
      return {
        bind: function bind() {
          gl.useProgram(id);
        },
        unbind: function unbind() {
          gl.useProgram(null);
        },
        bindAttribs: function bindAttribs() {
          gl.vertexAttribPointer(0, 3, gl.FLOAT, false, STRIDE * 4, 0);
          gl.enableVertexAttribArray(0);
          gl.vertexAttribPointer(1, 2, gl.FLOAT, false, STRIDE * 4, 12);
          gl.enableVertexAttribArray(1);
          gl.vertexAttribPointer(2, 4, gl.FLOAT, false, STRIDE * 4, 20);
          gl.enableVertexAttribArray(2);
        },
        send: function send(uniform) {
          this.bind();
          for (var name in uniform) {
            var val = uniform[name];
            var loc = gl.getUniformLocation(id, name);
            if (typeof val === 'number') {
              gl.uniform1f(loc, val);
            } else if (isMat4(val)) {
              gl.uniformMatrix4fv(loc, false, new Float32Array(val.m));
            } else if (isColor(val)) {
              gl.uniform4f(loc, val.r, val.g, val.b, val.a);
            } else if (isVec3(val)) {
              gl.uniform3f(loc, val.x, val.y, val.z);
            } else if (isVec2(val)) {
              gl.uniform2f(loc, val.x, val.y);
            }
          }
          this.unbind();
        }
      };
    }
    __name(makeProgram, 'makeProgram');
    function makeFont(tex, gw, gh, chars) {
      var cols = tex.width / gw;
      var rows = tex.height / gh;
      var qw = 1 / cols;
      var qh = 1 / rows;
      var map2 = {};
      var charMap = chars.split('').entries();
      var _iterator = _createForOfIteratorHelper(charMap),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            i = _step$value[0],
            ch = _step$value[1];
          map2[ch] = vec2(i % cols * qw, Math.floor(i / cols) * qh);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return {
        tex: tex,
        map: map2,
        qw: qw,
        qh: qh
      };
    }
    __name(makeFont, 'makeFont');
    function drawRaw(verts, indices) {
      var _tex, _prog;
      var tex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : gfx.defTex;
      var prog = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : gfx.defProg;
      var uniform = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      tex = (_tex = tex) !== null && _tex !== void 0 ? _tex : gfx.defTex;
      prog = (_prog = prog) !== null && _prog !== void 0 ? _prog : gfx.defProg;
      if (tex !== gfx.curTex || prog !== gfx.curProg || !deepEq(gfx.curUniform, uniform) || gfx.vqueue.length + verts.length * STRIDE > QUEUE_COUNT || gfx.iqueue.length + indices.length > QUEUE_COUNT) {
        flush();
      }
      gfx.curTex = tex;
      gfx.curProg = prog;
      gfx.curUniform = uniform;
      var nIndices = indices.map(function (i) {
        return i + gfx.vqueue.length / STRIDE;
      });
      var nVerts = verts.map(function (v) {
        var pt = toNDC(gfx.transform.multVec2(v.pos.xy()));
        return [pt.x, pt.y, v.pos.z, v.uv.x, v.uv.y, v.color.r, v.color.g, v.color.b, v.color.a];
      }).flat();
      nIndices.forEach(function (i) {
        return gfx.iqueue.push(i);
      });
      nVerts.forEach(function (v) {
        return gfx.vqueue.push(v);
      });
    }
    __name(drawRaw, 'drawRaw');
    function flush() {
      if (!gfx.curTex || !gfx.curProg || gfx.vqueue.length === 0 || gfx.iqueue.length === 0) {
        return;
      }
      gfx.curProg.send(gfx.curUniform);
      gl.bindBuffer(gl.ARRAY_BUFFER, gfx.vbuf);
      gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(gfx.vqueue));
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gfx.ibuf);
      gl.bufferSubData(gl.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(gfx.iqueue));
      gfx.curProg.bind();
      gfx.curProg.bindAttribs();
      gfx.curTex.bind();
      gl.drawElements(gl.TRIANGLES, gfx.iqueue.length, gl.UNSIGNED_SHORT, 0);
      gfx.curTex.unbind();
      gfx.curProg.unbind();
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
      gfx.iqueue = [];
      gfx.vqueue = [];
      gfx.drawCalls++;
    }
    __name(flush, 'flush');
    function frameStart() {
      gl.clear(gl.COLOR_BUFFER_BIT);
      if (!gconf.clearColor) {
        drawQuad({
          width: width(),
          height: height(),
          quad: quad(0, 0, width() * scale() / BG_GRID_SIZE, height() * scale() / BG_GRID_SIZE),
          tex: gfx.bgTex
        });
      }
      gfx.drawCalls = 0;
      gfx.transformStack = [];
      gfx.transform = mat4();
    }
    __name(frameStart, 'frameStart');
    function frameEnd() {
      flush();
      gfx.lastDrawCalls = gfx.drawCalls;
    }
    __name(frameEnd, 'frameEnd');
    function drawCalls() {
      return gfx.lastDrawCalls;
    }
    __name(drawCalls, 'drawCalls');
    function toNDC(pt) {
      return vec2(pt.x / width() * 2 - 1, -pt.y / height() * 2 + 1);
    }
    __name(toNDC, 'toNDC');
    function pushMatrix(m) {
      gfx.transform = m.clone();
    }
    __name(pushMatrix, 'pushMatrix');
    function pushTranslate(p) {
      if (!p || p.x === 0 && p.y === 0) {
        return;
      }
      gfx.transform = gfx.transform.translate(p);
    }
    __name(pushTranslate, 'pushTranslate');
    function pushScale(p) {
      if (!p || p.x === 1 && p.y === 1) {
        return;
      }
      gfx.transform = gfx.transform.scale(p);
    }
    __name(pushScale, 'pushScale');
    function pushRotateX(a) {
      if (!a) {
        return;
      }
      gfx.transform = gfx.transform.rotateX(a);
    }
    __name(pushRotateX, 'pushRotateX');
    function pushRotateY(a) {
      if (!a) {
        return;
      }
      gfx.transform = gfx.transform.rotateY(a);
    }
    __name(pushRotateY, 'pushRotateY');
    function pushRotateZ(a) {
      if (!a) {
        return;
      }
      gfx.transform = gfx.transform.rotateZ(a);
    }
    __name(pushRotateZ, 'pushRotateZ');
    function pushTransform() {
      gfx.transformStack.push(gfx.transform.clone());
    }
    __name(pushTransform, 'pushTransform');
    function popTransform() {
      if (gfx.transformStack.length > 0) {
        gfx.transform = gfx.transformStack.pop();
      }
    }
    __name(popTransform, 'popTransform');
    function drawQuad() {
      var _conf$scale, _conf$z;
      var conf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var w = conf.width || 0;
      var h = conf.height || 0;
      var pos = conf.pos || vec2(0, 0);
      var origin = originPt(conf.origin || DEF_ORIGIN);
      var offset = origin.scale(vec2(w, h).scale(-0.5));
      var scale2 = vec2((_conf$scale = conf.scale) !== null && _conf$scale !== void 0 ? _conf$scale : 1);
      var rot = conf.rot || 0;
      var q = conf.quad || quad(0, 0, 1, 1);
      var z = 1 - ((_conf$z = conf.z) !== null && _conf$z !== void 0 ? _conf$z : 0);
      var color = conf.color || rgba(1, 1, 1, 1);
      pushTransform();
      pushTranslate(pos);
      pushRotateZ(rot);
      pushScale(scale2);
      pushTranslate(offset);
      drawRaw([{
        pos: vec3(-w / 2, h / 2, z),
        uv: vec2(conf.flipX ? q.x + q.w : q.x, conf.flipY ? q.y : q.y + q.h),
        color: color
      }, {
        pos: vec3(-w / 2, -h / 2, z),
        uv: vec2(conf.flipX ? q.x + q.w : q.x, conf.flipY ? q.y + q.h : q.y),
        color: color
      }, {
        pos: vec3(w / 2, -h / 2, z),
        uv: vec2(conf.flipX ? q.x : q.x + q.w, conf.flipY ? q.y + q.h : q.y),
        color: color
      }, {
        pos: vec3(w / 2, h / 2, z),
        uv: vec2(conf.flipX ? q.x : q.x + q.w, conf.flipY ? q.y : q.y + q.h),
        color: color
      }], [0, 1, 3, 1, 2, 3], conf.tex, conf.prog, conf.uniform);
      popTransform();
    }
    __name(drawQuad, 'drawQuad');
    function drawTexture(tex) {
      var _conf$quad;
      var conf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var q = (_conf$quad = conf.quad) !== null && _conf$quad !== void 0 ? _conf$quad : quad(0, 0, 1, 1);
      var w = tex.width * q.w;
      var h = tex.height * q.h;
      var scale2 = vec2(1);
      if (conf.tiled) {
        var repX = Math.ceil((conf.width || w) / w);
        var repY = Math.ceil((conf.height || h) / h);
        var origin = originPt(conf.origin || DEF_ORIGIN).add(vec2(1, 1)).scale(0.5);
        var offset = origin.scale(repX * w, repY * h);
        for (var i = 0; i < repX; i++) {
          for (var j = 0; j < repY; j++) {
            drawQuad(_objectSpread(_objectSpread({}, conf), {}, {
              pos: (conf.pos || vec2(0)).add(vec2(w * i, h * j)).sub(offset),
              scale: scale2.scale(conf.scale || vec2(1)),
              tex: tex,
              quad: q,
              width: w,
              height: h,
              origin: 'topleft'
            }));
          }
        }
      } else {
        if (conf.width && conf.height) {
          scale2.x = conf.width / w;
          scale2.y = conf.height / h;
        } else if (conf.width) {
          scale2.x = conf.width / w;
          scale2.y = scale2.x;
        } else if (conf.height) {
          scale2.y = conf.height / h;
          scale2.x = scale2.y;
        }
        drawQuad(_objectSpread(_objectSpread({}, conf), {}, {
          scale: scale2.scale(conf.scale || vec2(1)),
          tex: tex,
          quad: q,
          width: w,
          height: h
        }));
      }
    }
    __name(drawTexture, 'drawTexture');
    function drawRect(pos, w, h) {
      var conf = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      drawQuad(_objectSpread(_objectSpread({}, conf), {}, {
        pos: pos,
        width: w,
        height: h
      }));
    }
    __name(drawRect, 'drawRect');
    function drawRectStroke(pos, w, h) {
      var conf = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var offset = originPt(conf.origin || DEF_ORIGIN).scale(vec2(w, h)).scale(0.5);
      var p1 = pos.add(vec2(-w / 2, -h / 2)).sub(offset);
      var p2 = pos.add(vec2(-w / 2, h / 2)).sub(offset);
      var p3 = pos.add(vec2(w / 2, h / 2)).sub(offset);
      var p4 = pos.add(vec2(w / 2, -h / 2)).sub(offset);
      drawLine(p1, p2, conf);
      drawLine(p2, p3, conf);
      drawLine(p3, p4, conf);
      drawLine(p4, p1, conf);
    }
    __name(drawRectStroke, 'drawRectStroke');
    function drawLine(p1, p2) {
      var conf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var w = conf.width || 1;
      var h = p1.dist(p2);
      var rot = Math.PI / 2 - p1.angle(p2);
      drawQuad(_objectSpread(_objectSpread({}, conf), {}, {
        pos: p1.add(p2).scale(0.5),
        width: w,
        height: h,
        rot: rot,
        origin: 'center'
      }));
    }
    __name(drawLine, 'drawLine');
    function drawTri(p1, p2, p3) {
      var conf = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var z = conf.z;
      var color = conf.color || rgb(1, 1, 1);
      drawRaw([{
        pos: vec3(p1.x, p1.y, z),
        uv: vec2(0, 0),
        color: color
      }, {
        pos: vec3(p2.x, p2.y, z),
        uv: vec2(0, 0),
        color: color
      }, {
        pos: vec3(p3.x, p3.y, z),
        uv: vec2(0, 0),
        color: color
      }], [0, 1, 2], gfx.defTex, conf.prog, conf.uniform);
    }
    __name(drawTri, 'drawTri');
    function fmtText(text, font) {
      var conf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var chars = "".concat(text).split('');
      var gw = font.qw * font.tex.width;
      var gh = font.qh * font.tex.height;
      var size = conf.size || gh;
      var scale2 = vec2(size / gh).scale(vec2(conf.scale || 1));
      var cw = scale2.x * gw;
      var ch = scale2.y * gh;
      var curX = 0;
      var th = ch;
      var tw = 0;
      var flines = [];
      var curLine = [];
      var lastSpace = null;
      var cursor = 0;
      while (cursor < chars.length) {
        var char = chars[cursor];
        if (char === '\n') {
          th += ch;
          curX = 0;
          lastSpace = null;
          flines.push(curLine);
          curLine = [];
        } else if (conf.width ? curX + cw > conf.width : false) {
          th += ch;
          curX = 0;
          if (lastSpace != null) {
            cursor -= curLine.length - lastSpace;
            char = chars[cursor];
            curLine = curLine.slice(0, lastSpace);
          }
          lastSpace = null;
          flines.push(curLine);
          curLine = [];
        }
        if (char !== '\n') {
          curLine.push(char);
          curX += cw;
          if (char === ' ') {
            lastSpace = curLine.length;
          }
        }
        tw = Math.max(tw, curX);
        cursor++;
      }
      flines.push(curLine);
      if (conf.width) {
        tw = conf.width;
      }
      var fchars = [];
      var pos = vec2(conf.pos || 0);
      var offset = originPt(conf.origin || DEF_ORIGIN).scale(0.5);
      var ox = -offset.x * cw - (offset.x + 0.5) * (tw - cw);
      var oy = -offset.y * ch - (offset.y + 0.5) * (th - ch);
      flines.forEach(function (line, ln) {
        var oxl = (tw - line.length * cw) * (offset.x + 0.5);
        line.forEach(function (char, cn) {
          var qpos = font.map[char];
          var x = cn * cw;
          var y = ln * ch;
          if (qpos) {
            fchars.push({
              tex: font.tex,
              quad: quad(qpos.x, qpos.y, font.qw, font.qh),
              ch: char,
              pos: vec2(pos.x + x + ox + oxl, pos.y + y + oy),
              color: conf.color,
              origin: conf.origin,
              scale: scale2,
              z: conf.z
            });
          }
        });
      });
      return {
        width: tw,
        height: th,
        chars: fchars
      };
    }
    __name(fmtText, 'fmtText');
    function drawText(txt, font) {
      var conf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      drawFmtText(fmtText(txt, font, conf));
    }
    __name(drawText, 'drawText');
    function drawFmtText(ftext) {
      var _iterator2 = _createForOfIteratorHelper(ftext.chars),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var ch = _step2.value;
          drawQuad({
            tex: ch.tex,
            width: ch.tex.width * ch.quad.w,
            height: ch.tex.height * ch.quad.h,
            pos: ch.pos,
            scale: ch.scale,
            color: ch.color,
            quad: ch.quad,
            origin: 'center',
            z: ch.z
          });
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    __name(drawFmtText, 'drawFmtText');
    function width() {
      return gl.drawingBufferWidth / scale();
    }
    __name(width, 'width');
    function height() {
      return gl.drawingBufferHeight / scale();
    }
    __name(height, 'height');
    function scale() {
      var _gconf$scale;
      return (_gconf$scale = gconf.scale) !== null && _gconf$scale !== void 0 ? _gconf$scale : 1;
    }
    __name(scale, 'scale');
    function clearColor() {
      return gfx.clearColor.clone();
    }
    __name(clearColor, 'clearColor');
    return {
      width: width,
      height: height,
      scale: scale,
      makeTex: makeTex,
      makeProgram: makeProgram,
      makeFont: makeFont,
      drawTexture: drawTexture,
      drawText: drawText,
      drawFmtText: drawFmtText,
      drawRect: drawRect,
      drawRectStroke: drawRectStroke,
      drawLine: drawLine,
      drawTri: drawTri,
      fmtText: fmtText,
      frameStart: frameStart,
      frameEnd: frameEnd,
      pushTransform: pushTransform,
      popTransform: popTransform,
      pushMatrix: pushMatrix,
      drawCalls: drawCalls,
      clearColor: clearColor
    };
  }
  var DEF_ORIGIN;
  var STRIDE;
  var QUEUE_COUNT;
  var BG_GRID_SIZE;
  var VERT_TEMPLATE;
  var FRAG_TEMPLATE;
  var DEF_VERT;
  var DEF_FRAG;
  var init_gfx = __esm({
    'src/gfx.ts': function src_gfxTs() {
      init_math();
      init_utils();
      DEF_ORIGIN = 'topleft';
      STRIDE = 9;
      QUEUE_COUNT = 65536;
      BG_GRID_SIZE = 64;
      VERT_TEMPLATE = "\nattribute vec3 a_pos;\nattribute vec2 a_uv;\nattribute vec4 a_color;\n\nvarying vec3 v_pos;\nvarying vec2 v_uv;\nvarying vec4 v_color;\n\nvec4 def_vert() {\n\treturn vec4(a_pos, 1.0);\n}\n\n{{user}}\n\nvoid main() {\n\tvec4 pos = vert(a_pos, a_uv, a_color);\n\tv_pos = a_pos;\n\tv_uv = a_uv;\n\tv_color = a_color;\n\tgl_Position = pos;\n}\n";
      FRAG_TEMPLATE = "\nprecision mediump float;\n\nvarying vec3 v_pos;\nvarying vec2 v_uv;\nvarying vec4 v_color;\n\nuniform sampler2D u_tex;\n\nvec4 def_frag() {\n\treturn v_color * texture2D(u_tex, v_uv);\n}\n\n{{user}}\n\nvoid main() {\n\tgl_FragColor = frag(v_pos, v_uv, v_color, u_tex);\n\tif (gl_FragColor.a == 0.0) {\n\t\tdiscard;\n\t}\n}\n";
      DEF_VERT = "\nvec4 vert(vec3 pos, vec2 uv, vec4 color) {\n\treturn def_vert();\n}\n";
      DEF_FRAG = "\nvec4 frag(vec3 pos, vec2 uv, vec4 color, sampler2D tex) {\n\treturn def_frag();\n}\n";
      __name(originPt, 'originPt');
      __name(gfxInit, 'gfxInit');
    }
  });

  // src/app.ts
  function processBtnState(s) {
    if (s === 'pressed' || s === 'rpressed') {
      return 'down';
    }
    if (s === 'released') {
      return 'up';
    }
    return s;
  }
  function appInit() {
    var _gconf$canvas, _gconf$scale2;
    var gconf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var app = {
      canvas: (_gconf$canvas = gconf.canvas) !== null && _gconf$canvas !== void 0 ? _gconf$canvas : function (_gconf$root) {
        var canvas = document.createElement('canvas');
        ((_gconf$root = gconf.root) !== null && _gconf$root !== void 0 ? _gconf$root : document.body).appendChild(canvas);
        return canvas;
      }(),
      keyStates: {},
      charInputted: [],
      mouseMoved: false,
      mouseState: 'up',
      mousePos: vec2(0, 0),
      time: 0,
      realTime: 0,
      skipTime: false,
      dt: 0,
      scale: (_gconf$scale2 = gconf.scale) !== null && _gconf$scale2 !== void 0 ? _gconf$scale2 : 1,
      isTouch: false,
      loopID: null,
      stopped: false,
      fps: 0,
      fpsBuf: [],
      fpsTimer: 0
    };
    var keyMap = {
      ArrowLeft: 'left',
      ArrowRight: 'right',
      ArrowUp: 'up',
      ArrowDown: 'down',
      ' ': 'space'
    };
    var preventDefaultKeys = ['space', 'left', 'right', 'up', 'down', 'tab', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11'];
    if (gconf.fullscreen) {
      app.canvas.width = window.innerWidth;
      app.canvas.height = window.innerHeight;
    } else {
      app.canvas.width = (gconf.width || 640) * app.scale;
      app.canvas.height = (gconf.height || 480) * app.scale;
    }
    var styles = ['outline: none', 'cursor: default'];
    if (gconf.crisp) {
      styles.push('image-rendering: pixelated');
      styles.push('image-rendering: crisp-edges');
    }
    app.canvas.style = styles.join(';');
    app.canvas.setAttribute('tabindex', '0');
    var gl = app.canvas.getContext('webgl', {
      antialias: true,
      depth: true,
      stencil: true,
      alpha: true,
      preserveDrawingBuffer: true
    });
    app.isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    app.canvas.addEventListener('mousemove', function (e) {
      app.mousePos = vec2(e.offsetX, e.offsetY).scale(1 / app.scale);
      app.mouseMoved = true;
    });
    app.canvas.addEventListener('mousedown', function () {
      app.mouseState = 'pressed';
    });
    app.canvas.addEventListener('mouseup', function () {
      app.mouseState = 'released';
    });
    app.canvas.addEventListener('touchstart', function (e) {
      if (!gconf.touchToMouse) return;
      e.preventDefault();
      var t = e.touches[0];
      app.mousePos = vec2(t.clientX, t.clientY).scale(1 / app.scale);
      app.mouseState = 'pressed';
    });
    app.canvas.addEventListener('touchmove', function (e) {
      if (!gconf.touchToMouse) return;
      e.preventDefault();
      var t = e.touches[0];
      app.mousePos = vec2(t.clientX, t.clientY).scale(1 / app.scale);
      app.mouseMoved = true;
    });
    app.canvas.addEventListener('touchend', function (e) {
      if (!gconf.touchToMouse) return;
      app.mouseState = 'released';
    });
    app.canvas.addEventListener('touchcancel', function (e) {
      if (!gconf.touchToMouse) return;
      app.mouseState = 'released';
    });
    app.canvas.addEventListener('keydown', function (e) {
      var k = keyMap[e.key] || e.key.toLowerCase();
      if (preventDefaultKeys.includes(k)) {
        e.preventDefault();
      }
      if (k.length === 1) {
        app.charInputted.push(k);
      }
      if (k === 'space') {
        app.charInputted.push(' ');
      }
      if (e.repeat) {
        app.keyStates[k] = 'rpressed';
      } else {
        app.keyStates[k] = 'pressed';
      }
    });
    app.canvas.addEventListener('keyup', function (e) {
      var k = keyMap[e.key] || e.key.toLowerCase();
      app.keyStates[k] = 'released';
    });
    app.canvas.focus();
    document.addEventListener('visibilitychange', function () {
      switch (document.visibilityState) {
        case 'visible':
          app.skipTime = true;
          break;
        case 'hidden':
          break;
      }
    });
    function mousePos() {
      return app.mousePos.clone();
    }
    __name(mousePos, 'mousePos');
    function mouseClicked() {
      return app.mouseState === 'pressed';
    }
    __name(mouseClicked, 'mouseClicked');
    function mouseDown() {
      return app.mouseState === 'pressed' || app.mouseState === 'down';
    }
    __name(mouseDown, 'mouseDown');
    function mouseReleased() {
      return app.mouseState === 'released';
    }
    __name(mouseReleased, 'mouseReleased');
    function mouseMoved() {
      return app.mouseMoved;
    }
    __name(mouseMoved, 'mouseMoved');
    function keyPressed(k) {
      return app.keyStates[k] === 'pressed';
    }
    __name(keyPressed, 'keyPressed');
    function keyPressedRep(k) {
      return app.keyStates[k] === 'pressed' || app.keyStates[k] === 'rpressed';
    }
    __name(keyPressedRep, 'keyPressedRep');
    function keyDown(k) {
      return app.keyStates[k] === 'pressed' || app.keyStates[k] === 'rpressed' || app.keyStates[k] === 'down';
    }
    __name(keyDown, 'keyDown');
    function keyReleased(k) {
      return app.keyStates[k] === 'released';
    }
    __name(keyReleased, 'keyReleased');
    function charInputted() {
      return _toConsumableArray(app.charInputted);
    }
    __name(charInputted, 'charInputted');
    function dt() {
      return app.dt;
    }
    __name(dt, 'dt');
    function time() {
      return app.time;
    }
    __name(time, 'time');
    function fps() {
      return app.fps;
    }
    __name(fps, 'fps');
    function screenshot() {
      return app.canvas.toDataURL();
    }
    __name(screenshot, 'screenshot');
    function cursor(c) {
      if (c) {
        app.canvas.style.cursor = c !== null && c !== void 0 ? c : 'default';
      }
      return app.canvas.style.cursor;
    }
    __name(cursor, 'cursor');
    function run(f) {
      var frame = /* @__PURE__ */__name(function (t) {
        var realTime = t / 1e3;
        var realDt = realTime - app.realTime;
        app.realTime = realTime;
        if (!app.skipTime) {
          app.dt = realDt;
          app.time += app.dt;
          app.fpsBuf.push(1 / app.dt);
          app.fpsTimer += app.dt;
          if (app.fpsTimer >= 1) {
            app.fpsTimer = 0;
            app.fps = Math.round(app.fpsBuf.reduce(function (a, b) {
              return a + b;
            }) / app.fpsBuf.length);
            app.fpsBuf = [];
          }
        }
        app.skipTime = false;
        f();
        for (var k in app.keyStates) {
          app.keyStates[k] = processBtnState(app.keyStates[k]);
        }
        app.mouseState = processBtnState(app.mouseState);
        app.charInputted = [];
        app.mouseMoved = false;
        if (!app.stopped) {
          app.loopID = requestAnimationFrame(frame);
        }
      }, 'frame');
      app.loopID = requestAnimationFrame(frame);
    }
    __name(run, 'run');
    function quit() {
      cancelAnimationFrame(app.loopID);
      app.stopped = true;
    }
    __name(quit, 'quit');
    return {
      gl: gl,
      mousePos: mousePos,
      keyDown: keyDown,
      keyPressed: keyPressed,
      keyPressedRep: keyPressedRep,
      keyReleased: keyReleased,
      mouseDown: mouseDown,
      mouseClicked: mouseClicked,
      mouseReleased: mouseReleased,
      mouseMoved: mouseMoved,
      charInputted: charInputted,
      cursor: cursor,
      dt: dt,
      time: time,
      fps: fps,
      screenshot: screenshot,
      run: run,
      quit: quit,
      focused: function focused() {
        return document.activeElement === app.canvas;
      },
      focus: function focus() {
        return app.canvas.focus();
      },
      canvas: function canvas() {
        return app.canvas;
      },
      isTouch: function isTouch() {
        return app.isTouch;
      }
    };
  }
  var init_app = __esm({
    'src/app.ts': function src_appTs() {
      init_math();
      __name(processBtnState, 'processBtnState');
      __name(appInit, 'appInit');
    }
  });

  // src/assets/burp.mp3
  var burp_default;
  var init_burp = __esm({
    'src/assets/burp.mp3': function src_assets_burpMp3() {
      burp_default = __toBinary('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L5QNSqT5iiySS9Ja2SV//5ME0ak//+4KgAAABgQBAADAMDgYCAEgCteQ0fZH6+ICXA357+MPfhR/+ywRf/U///LVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5JknQAFoWhGLm5gBClBmT3GiAAAAAGkHAAAIAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV');
    }
  });

  // src/audio.ts
  function audioInit() {
    var audio = function () {
      var ctx2 = new (window.AudioContext || window.webkitAudioContext)();
      var gainNode = ctx2.createGain();
      var masterNode = gainNode;
      masterNode.connect(ctx2.destination);
      return {
        ctx: ctx2,
        gainNode: gainNode,
        masterNode: masterNode
      };
    }();
    var burpBuf;
    audio.ctx.decodeAudioData(burp_default.buffer.slice(0), function (buf) {
      burpBuf = buf;
    }, function () {
      throw new Error('failed to make burp');
    });
    function volume(v) {
      if (v !== void 0) {
        audio.gainNode.gain.value = clamp(v, MIN_GAIN, MAX_GAIN);
      }
      return audio.gainNode.gain.value;
    }
    __name(volume, 'volume');
    function play(sound) {
      var _conf$seek;
      var conf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        loop: false,
        volume: 1,
        speed: 1,
        detune: 0,
        seek: 0
      };
      var _stopped = false;
      var srcNode = audio.ctx.createBufferSource();
      srcNode.buffer = sound;
      srcNode.loop = !!conf.loop;
      var gainNode = audio.ctx.createGain();
      srcNode.connect(gainNode);
      gainNode.connect(audio.masterNode);
      var pos = (_conf$seek = conf.seek) !== null && _conf$seek !== void 0 ? _conf$seek : 0;
      srcNode.start(0, pos);
      var startTime = audio.ctx.currentTime - pos;
      var stopTime = null;
      var handle = {
        stop: function stop() {
          if (_stopped) {
            return;
          }
          this.pause();
          startTime = audio.ctx.currentTime;
        },
        play: function play(seek) {
          if (!_stopped) {
            return;
          }
          var oldNode = srcNode;
          srcNode = audio.ctx.createBufferSource();
          srcNode.buffer = oldNode.buffer;
          srcNode.loop = oldNode.loop;
          srcNode.playbackRate.value = oldNode.playbackRate.value;
          if (srcNode.detune) {
            srcNode.detune.value = oldNode.detune.value;
          }
          srcNode.connect(gainNode);
          var pos2 = seek !== null && seek !== void 0 ? seek : this.time();
          srcNode.start(0, pos2);
          startTime = audio.ctx.currentTime - pos2;
          _stopped = false;
          stopTime = null;
        },
        pause: function pause() {
          if (_stopped) {
            return;
          }
          srcNode.stop();
          _stopped = true;
          stopTime = audio.ctx.currentTime;
        },
        paused: function paused() {
          return _stopped;
        },
        stopped: function stopped() {
          return _stopped;
        },
        speed: function speed(val) {
          if (val !== void 0) {
            srcNode.playbackRate.value = clamp(val, MIN_SPEED, MAX_SPEED);
          }
          return srcNode.playbackRate.value;
        },
        detune: function detune(val) {
          if (!srcNode.detune) {
            return 0;
          }
          if (val !== void 0) {
            srcNode.detune.value = clamp(val, MIN_DETUNE, MAX_DETUNE);
          }
          return srcNode.detune.value;
        },
        volume: function volume(val) {
          if (val !== void 0) {
            gainNode.gain.value = clamp(val, MIN_GAIN, MAX_GAIN);
          }
          return gainNode.gain.value;
        },
        loop: function loop() {
          srcNode.loop = true;
        },
        unloop: function unloop() {
          srcNode.loop = false;
        },
        duration: function duration() {
          return sound.duration;
        },
        time: function time() {
          if (_stopped) {
            return stopTime - startTime;
          }
          return audio.ctx.currentTime - startTime;
        }
      };
      handle.speed(conf.speed);
      handle.detune(conf.detune);
      handle.volume(conf.volume);
      return handle;
    }
    __name(play, 'play');
    function ctx() {
      return audio.ctx;
    }
    __name(ctx, 'ctx');
    function burp(conf) {
      return play(burpBuf, conf);
    }
    __name(burp, 'burp');
    return {
      ctx: ctx,
      volume: volume,
      play: play,
      burp: burp
    };
  }
  var MIN_GAIN;
  var MAX_GAIN;
  var MIN_SPEED;
  var MAX_SPEED;
  var MIN_DETUNE;
  var MAX_DETUNE;
  var init_audio = __esm({
    'src/audio.ts': function src_audioTs() {
      init_math();
      init_burp();
      MIN_GAIN = 0;
      MAX_GAIN = 3;
      MIN_SPEED = 0;
      MAX_SPEED = 3;
      MIN_DETUNE = -1200;
      MAX_DETUNE = 1200;
      __name(audioInit, 'audioInit');
    }
  });

  // src/assets/unscii_8x8.png
  var unscii_8x8_default;
  var init_unscii_8x8 = __esm({
    'src/assets/unscii_8x8.png': function src_assets_unscii_8x8Png() {
      unscii_8x8_default = 'data:image/png;base64,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';
    }
  });

  // src/assets/mark.png
  var mark_default;
  var init_mark = __esm({
    'src/assets/mark.png': function src_assets_markPng() {
      mark_default = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAWCAYAAAA1vze2AAAAAXNSR0IArs4c6QAAALBJREFUSInFlsESwyAIRNlOP5w/pxfjpLgIqTrlJkN8rqtECA8L8j7wa5GZaY2AoY5CfbIMSKBf894HSwAC63O/tszqoi22+4qe36TiHpeiZSXE/LFGJioAlVWFgM492bWFR4w/DmEe/VdJ5dSwb5iPIcRMH4EYoHRPKiBA06P+zlaYgWZ3TFpHOdJWfIPc3oU9YBisghiAJqS16KewCBAmL1gFFP0NqxCR2oMifUx8AEs8Sqk46+g8AAAAAElFTkSuQmCC';
    }
  });

  // src/assets.ts
  function loadImg(src) {
    var img = new Image();
    img.src = src;
    img.crossOrigin = 'anonymous';
    return new Promise(function (resolve, reject) {
      img.onload = function () {
        resolve(img);
      };
      img.onerror = function () {
        reject("failed to load ".concat(src));
      };
    });
  }
  function isDataUrl(src) {
    return src.startsWith('data:');
  }
  function assetsInit(gfx, audio) {
    var gconf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var assets = {
      lastLoaderID: 0,
      loadRoot: '',
      loaders: {},
      sprites: {},
      sounds: {},
      fonts: {},
      shaders: {}
    };
    function addLoader(prom) {
      var _gconf$errHandler;
      var id = assets.lastLoaderID;
      assets.loaders[id] = false;
      assets.lastLoaderID++;
      prom.catch((_gconf$errHandler = gconf.errHandler) !== null && _gconf$errHandler !== void 0 ? _gconf$errHandler : console.error).finally(function () {
        return assets.loaders[id] = true;
      });
    }
    __name(addLoader, 'addLoader');
    function loadProgress() {
      var total = 0;
      var loaded = 0;
      for (var id in assets.loaders) {
        total += 1;
        if (assets.loaders[id]) {
          loaded += 1;
        }
      }
      return loaded / total;
    }
    __name(loadProgress, 'loadProgress');
    function loadRoot(path) {
      if (path !== void 0) {
        assets.loadRoot = path;
      }
      return assets.loadRoot;
    }
    __name(loadRoot, 'loadRoot');
    function loadFont(name, src, gw, gh) {
      var chars = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : ASCII_CHARS;
      var loader = new Promise(function (resolve, reject) {
        var path = isDataUrl(src) ? src : assets.loadRoot + src;
        loadImg(path).then(function (img) {
          var font = gfx.makeFont(gfx.makeTex(img), gw, gh, chars);
          assets.fonts[name] = font;
          resolve(font);
        }).catch(reject);
      });
      addLoader(loader);
      return loader;
    }
    __name(loadFont, 'loadFont');
    function loadSprite(name, src) {
      var conf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        sliceX: 1,
        sliceY: 1,
        anims: {}
      };
      function loadRawSprite(name2, src2) {
        var conf2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
          sliceX: 1,
          sliceY: 1,
          gridWidth: 0,
          gridHeight: 0,
          anims: {}
        };
        var frames = [];
        var tex = gfx.makeTex(src2);
        var sliceX = conf2.sliceX || tex.width / (conf2.gridWidth || tex.width);
        var sliceY = conf2.sliceY || tex.height / (conf2.gridHeight || tex.height);
        var qw = 1 / sliceX;
        var qh = 1 / sliceY;
        for (var j = 0; j < sliceY; j++) {
          for (var i = 0; i < sliceX; i++) {
            frames.push(quad(i * qw, j * qh, qw, qh));
          }
        }
        var sprite = {
          tex: tex,
          frames: frames,
          anims: conf2.anims || {}
        };
        assets.sprites[name2] = sprite;
        return sprite;
      }
      __name(loadRawSprite, 'loadRawSprite');
      var loader = new Promise(function (resolve, reject) {
        if (!src) {
          return reject("expected sprite src for \"".concat(name, "\""));
        }
        if (typeof src === 'string') {
          var path = isDataUrl(src) ? src : assets.loadRoot + src;
          loadImg(path).then(function (img) {
            resolve(loadRawSprite(name, img, conf));
          }).catch(reject);
        } else {
          resolve(loadRawSprite(name, src, conf));
        }
      });
      addLoader(loader);
      return loader;
    }
    __name(loadSprite, 'loadSprite');
    function loadShader(name, vert, frag) {
      var isUrl = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      function loadRawShader(name2, vert2, frag2) {
        var shader = gfx.makeProgram(vert2, frag2);
        assets.shaders[name2] = shader;
        return shader;
      }
      __name(loadRawShader, 'loadRawShader');
      var loader = new Promise(function (resolve, reject) {
        if (!vert && !frag) {
          return reject('no shader');
        }
        function resolveUrl(url) {
          return url ? fetch(assets.loadRoot + url).then(function (r) {
            if (r.ok) {
              return r.text();
            }
            throw new Error("failed to load ".concat(url));
          }).catch(reject) : new Promise(function (r) {
            return r(null);
          });
        }
        __name(resolveUrl, 'resolveUrl');
        if (isUrl) {
          Promise.all([resolveUrl(vert), resolveUrl(frag)]).then(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
              vcode = _ref2[0],
              fcode = _ref2[1];
            resolve(loadRawShader(name, vcode, fcode));
          }).catch(reject);
        } else {
          try {
            resolve(loadRawShader(name, vert, frag));
          } catch (err) {
            reject(err);
          }
        }
      });
      addLoader(loader);
      return loader;
    }
    __name(loadShader, 'loadShader');
    function loadSound(name, src) {
      var url = assets.loadRoot + src;
      var loader = new Promise(function (resolve, reject) {
        if (!src) {
          return reject("expected sound src for \"".concat(name, "\""));
        }
        if (typeof src === 'string') {
          fetch(url).then(function (res) {
            if (res.ok) {
              return res.arrayBuffer();
            }
            throw new Error("failed to load ".concat(url));
          }).then(function (data) {
            return new Promise(function (resolve2, reject2) {
              audio.ctx().decodeAudioData(data, resolve2, reject2);
            });
          }).then(function (buf) {
            assets.sounds[name] = buf;
            resolve(buf);
          }).catch(reject);
        }
      });
      addLoader(loader);
      return loader;
    }
    __name(loadSound, 'loadSound');
    function defFont() {
      return assets.fonts[DEF_FONT];
    }
    __name(defFont, 'defFont');
    loadFont(DEF_FONT, unscii_8x8_default, 8, 8);
    loadSprite('mark', mark_default);
    return {
      loadRoot: loadRoot,
      loadSprite: loadSprite,
      loadSound: loadSound,
      loadFont: loadFont,
      loadShader: loadShader,
      loadProgress: loadProgress,
      addLoader: addLoader,
      defFont: defFont,
      sprites: assets.sprites,
      fonts: assets.fonts,
      sounds: assets.sounds,
      shaders: assets.shaders
    };
  }
  var ASCII_CHARS;
  var DEF_FONT;
  var init_assets = __esm({
    'src/assets.ts': function src_assetsTs() {
      init_math();
      init_unscii_8x8();
      init_mark();
      ASCII_CHARS = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
      DEF_FONT = 'unscii';
      __name(loadImg, 'loadImg');
      __name(isDataUrl, 'isDataUrl');
      __name(assetsInit, 'assetsInit');
    }
  });

  // src/logger.ts
  function loggerInit(gfx, assets) {
    var _conf$max;
    var conf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      max: 8
    };
    var logs = [];
    var max = (_conf$max = conf.max) !== null && _conf$max !== void 0 ? _conf$max : 8;
    function draw() {
      if (logs.length > max) {
        logs = logs.slice(0, max);
      }
      var pos = vec2(0, gfx.height());
      logs.forEach(function (log, i) {
        var txtAlpha = map(i, 0, max, 1, 0.5);
        var bgAlpha = map(i, 0, max, 0.8, 0.2);
        var col = function () {
          switch (log.type) {
            case 'info':
              return rgba(1, 1, 1, txtAlpha);
            case 'error':
              return rgba(1, 0, 0.5, txtAlpha);
          }
        }();
        var ftext = gfx.fmtText(log.msg, assets.defFont(), {
          pos: pos,
          origin: 'botleft',
          color: col,
          size: LOG_SIZE / gfx.scale(),
          width: gfx.width()
        });
        gfx.drawRect(pos, ftext.width, ftext.height, {
          origin: 'botleft',
          color: rgba(0, 0, 0, bgAlpha)
        });
        gfx.drawFmtText(ftext);
        pos.y -= ftext.height;
      });
    }
    __name(draw, 'draw');
    function error(msg) {
      console.error(msg);
      logs.unshift({
        type: 'error',
        msg: msg
      });
    }
    __name(error, 'error');
    function info(msg) {
      logs.unshift({
        type: 'info',
        msg: msg
      });
    }
    __name(info, 'info');
    function clear() {
      logs = [];
    }
    __name(clear, 'clear');
    return {
      info: info,
      error: error,
      draw: draw,
      clear: clear
    };
  }
  var LOG_SIZE;
  var init_logger = __esm({
    'src/logger.ts': function src_loggerTs() {
      init_math();
      LOG_SIZE = 16;
      __name(loggerInit, 'loggerInit');
    }
  });

  // src/net.ts
  function netInit(url) {
    var handlers = {};
    var sendQueue = [];
    var socket = null;
    function connected() {
      return socket !== null && socket.readyState === 1;
    }
    __name(connected, 'connected');
    function connect() {
      var ws = new WebSocket(url);
      return new Promise(function (resolve, reject) {
        ws.onopen = function () {
          resolve(ws);
          socket = ws;
          var _iterator3 = _createForOfIteratorHelper(sendQueue),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var msg = _step3.value;
              ws.send(msg);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        };
        ws.onerror = function () {
          reject("failed to connect to ".concat(url));
        };
        ws.onmessage = function (e) {
          var msg = JSON.parse(e.data);
          if (handlers[msg.type]) {
            var _iterator4 = _createForOfIteratorHelper(handlers[msg.type]),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var handler = _step4.value;
                handler(msg.id, msg.data);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        };
      });
    }
    __name(connect, 'connect');
    function recv(type, handler) {
      if (!handlers[type]) {
        handlers[type] = [];
      }
      handlers[type].push(handler);
    }
    __name(recv, 'recv');
    function send(type, data) {
      var msg = JSON.stringify({
        type: type,
        data: data
      });
      if (socket) {
        socket.send(msg);
      } else {
        sendQueue.push(msg);
      }
    }
    __name(send, 'send');
    function close() {
      if (socket) {
        socket.close();
      }
    }
    __name(close, 'close');
    return {
      connect: connect,
      close: close,
      connected: connected,
      recv: recv,
      send: send
    };
  }
  var init_net = __esm({
    'src/net.ts': function src_netTs() {
      __name(netInit, 'netInit');
    }
  });

  // src/kaboom.ts
  var require_kaboom = __commonJS({
    'src/kaboom.ts': function src_kaboomTs(exports, module) {
      init_math();
      init_gfx();
      init_app();
      init_audio();
      init_assets();
      init_logger();
      init_net();
      var IDList = /*#__PURE__*/function (_Map) {
        function IDList() {
          var _this;
          _classCallCheck(this, IDList);
          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }
          _this = _callSuper(this, IDList, [].concat(args));
          _this.lastID = 0;
          return _this;
        }
        _inherits(IDList, _Map);
        return _createClass(IDList, [{
          key: "push",
          value: function push(v) {
            var id = this.lastID;
            this.set(id, v);
            this.lastID++;
            return id;
          }
        }, {
          key: "pushd",
          value: function pushd(v) {
            var _this2 = this;
            var id = this.push(v);
            return function () {
              return _this2.delete(id);
            };
          }
        }]);
      }(/*#__PURE__*/_wrapNativeSuper(Map));
      __name(IDList, 'IDList');
      module.exports = function () {
        var _gconf$touchToMouse;
        var gconf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          width: 640,
          height: 480,
          scale: 1,
          fullscreen: false,
          debug: false,
          crisp: false,
          canvas: null,
          connect: null,
          logMax: 8,
          root: document.body
        };
        var app = appInit({
          width: gconf.width,
          height: gconf.height,
          scale: gconf.scale,
          fullscreen: gconf.fullscreen,
          crisp: gconf.crisp,
          canvas: gconf.canvas,
          root: gconf.root,
          touchToMouse: (_gconf$touchToMouse = gconf.touchToMouse) !== null && _gconf$touchToMouse !== void 0 ? _gconf$touchToMouse : true
        });
        var gfx = gfxInit(app.gl, {
          clearColor: gconf.clearColor ? rgba(gconf.clearColor) : void 0,
          scale: gconf.scale,
          texFilter: gconf.texFilter
        });
        var audio = audioInit();
        var assets = assetsInit(gfx, audio, {
          errHandler: function errHandler(err) {
            logger.error(err);
          }
        });
        var logger = loggerInit(gfx, assets, {
          max: gconf.logMax
        });
        var net = gconf.connect ? netInit(gconf.connect) : null;
        var NetMsg;
        (function (NetMsg2) {
          NetMsg2.AddObj = 'ADD_OBJ';
          NetMsg2.UpdateObj = 'UPDATE_OBJ';
          NetMsg2.DestroyObj = 'DESTROY_OBJ';
          NetMsg2.Disconnect = 'DISCONNECT';
        })(NetMsg || (NetMsg = {}));
        function sync(obj) {
          if (!net) {
            throw new Error('not connected to any websockets');
          }
          game.travelers.push(obj._id);
          send(NetMsg.AddObj, obj._data());
        }
        __name(sync, 'sync');
        if (net) {
          recv(NetMsg.AddObj, function (id, data) {
            if (!game.visitors[id]) {
              game.visitors[id] = {};
            }
          });
          recv(NetMsg.DestroyObj, function (id, data) {
            if (!game.visitors[id]) {
              return;
            }
            var oid = game.visitors[id][data.id];
            if (oid != null) {
              _destroy(game.objs.get(oid));
              delete game.visitors[id][data.id];
            }
          });
          recv(NetMsg.Disconnect, function (id, data) {
            if (game.visitors[id]) {
              for (var _i2 = 0, _Object$values = Object.values(game.visitors[id]); _i2 < _Object$values.length; _i2++) {
                var oid = _Object$values[_i2];
                _destroy(game.objs.get(oid));
              }
              delete game.visitors[id];
            }
          });
        }
        function recv(ty, handler) {
          if (!net) {
            throw new Error('not connected to any websockets');
          }
          net.recv(ty, function (data, id) {
            try {
              handler(data, id);
            } catch (err) {
              logger.error(err);
            }
          });
        }
        __name(recv, 'recv');
        function send(ty, data) {
          if (!net) {
            throw new Error('not connected to any websockets');
          }
          net.send(ty, data);
        }
        __name(send, 'send');
        function dt() {
          return app.dt() * debug.timeScale;
        }
        __name(dt, 'dt');
        function play(id) {
          var conf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var pb = audio.play(new AudioBuffer({
            length: 1,
            numberOfChannels: 1,
            sampleRate: 44100
          }));
          ready(function () {
            var sound = assets.sounds[id];
            if (!sound) {
              throw new Error("sound not found: \"".concat(id, "\""));
            }
            var pb2 = audio.play(sound, conf);
            for (var k in pb2) {
              pb[k] = pb2[k];
            }
          });
          return pb;
        }
        __name(play, 'play');
        function isCamLayer(layer2) {
          var _game$layers;
          return !((_game$layers = game.layers[layer2 !== null && layer2 !== void 0 ? layer2 : game.defLayer]) !== null && _game$layers !== void 0 && _game$layers.noCam);
        }
        __name(isCamLayer, 'isCamLayer');
        function mousePos(layer2) {
          return isCamLayer(layer2) ? game.camMousePos : app.mousePos();
        }
        __name(mousePos, 'mousePos');
        function drawSprite(id) {
          var _conf$frame;
          var conf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var spr = function () {
            if (typeof id === 'string') {
              return assets.sprites[id];
            }
            return id;
          }();
          if (!spr) {
            throw new Error("sprite not found: \"".concat(id, "\""));
          }
          var q = spr.frames[(_conf$frame = conf.frame) !== null && _conf$frame !== void 0 ? _conf$frame : 0];
          gfx.drawTexture(spr.tex, _objectSpread(_objectSpread({}, conf), {}, {
            quad: q.scale(conf.quad || quad(0, 0, 1, 1))
          }));
        }
        __name(drawSprite, 'drawSprite');
        function drawText(txt) {
          var _conf$font;
          var conf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var fid = (_conf$font = conf.font) !== null && _conf$font !== void 0 ? _conf$font : DEF_FONT;
          var font = assets.fonts[fid];
          if (!font) {
            throw new Error("font not found: ".concat(fid));
          }
          gfx.drawText(txt, font, conf);
        }
        __name(drawText, 'drawText');
        var DEF_GRAVITY = 980;
        var DEF_ORIGIN2 = 'topleft';
        var game = {
          loaded: false,
          events: {},
          objEvents: {},
          actions: new IDList(),
          renders: new IDList(),
          objs: new IDList(),
          timers: new IDList(),
          cam: {
            pos: vec2(gfx.width() / 2, gfx.height() / 2),
            scale: vec2(1, 1),
            angle: 0,
            shake: 0
          },
          camMousePos: app.mousePos(),
          camMatrix: mat4(),
          layers: {},
          defLayer: null,
          gravity: DEF_GRAVITY,
          data: {},
          travelers: [],
          visitors: {},
          on: function on(ev, cb) {
            if (!this.events[ev]) {
              this.events[ev] = new IDList();
            }
            return this.events[ev].pushd(cb);
          },
          trigger: function trigger(ev) {
            for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
              args[_key6 - 1] = arguments[_key6];
            }
            if (this.events[ev]) {
              this.events[ev].forEach(function (cb) {
                return cb.apply(void 0, args);
              });
            }
          },
          scenes: {}
        };
        function layers(list, def) {
          list.forEach(function (name, idx) {
            game.layers[name] = {
              alpha: 1,
              order: idx + 1,
              noCam: false
            };
          });
          if (def) {
            game.defLayer = def;
          }
        }
        __name(layers, 'layers');
        function camPos() {
          if (arguments.length > 0) {
            game.cam.pos = vec2.apply(void 0, arguments);
          }
          return game.cam.pos.clone();
        }
        __name(camPos, 'camPos');
        function camScale() {
          if (arguments.length > 0) {
            game.cam.scale = vec2.apply(void 0, arguments);
          }
          return game.cam.scale.clone();
        }
        __name(camScale, 'camScale');
        function camRot(angle) {
          if (angle !== void 0) {
            game.cam.angle = angle;
          }
          return game.cam.angle;
        }
        __name(camRot, 'camRot');
        function camShake(intensity) {
          game.cam.shake = intensity;
        }
        __name(camShake, 'camShake');
        function camIgnore(layers2) {
          layers2.forEach(function (name) {
            if (game.layers[name]) {
              game.layers[name].noCam = true;
            }
          });
        }
        __name(camIgnore, 'camIgnore');
        var COMP_EVENTS = new Set(['add', 'load', 'update', 'draw', 'destroy', 'inspect']);
        function add(comps) {
          var compStates = {};
          var customState = {};
          var events = {};
          var tags = [];
          var obj = {
            hidden: false,
            paused: false,
            _id: null,
            use: function use(comp) {
              var _this3 = this;
              if (comp === void 0) {
                return;
              }
              var ty = _typeof(comp);
              if (ty === 'string') {
                tags.push(comp);
                return;
              }
              if (ty !== 'object') {
                throw new Error("invalid comp type: ".concat(ty));
              }
              var stateContainer = customState;
              if (comp.id) {
                compStates[comp.id] = {};
                stateContainer = compStates[comp.id];
              }
              var _loop = function _loop(k) {
                  if (k === 'id' || k === 'require') {
                    return 0; // continue
                  }
                  if (typeof comp[k] === 'function') {
                    var func = comp[k].bind(_this3);
                    if (COMP_EVENTS.has(k)) {
                      _this3.on(k, func);
                      return 0; // continue
                    } else {
                      stateContainer[k] = func;
                    }
                  } else {
                    stateContainer[k] = comp[k];
                  }
                  if (!_this3[k]) {
                    Object.defineProperty(_this3, k, {
                      get: function get() {
                        if (comp.id) {
                          return compStates[comp.id][k];
                        }
                        return customState[k];
                      },
                      set: function set(val) {
                        if (comp.id) {
                          compStates[comp.id][k] = val;
                        } else {
                          customState[k] = val;
                        }
                      }
                    });
                  }
                },
                _ret;
              for (var k in comp) {
                _ret = _loop(k);
                if (_ret === 0) continue;
              }
            },
            c: function c(id) {
              return compStates[id];
            },
            exists: function exists() {
              return this._id !== void 0;
            },
            is: function is(tag) {
              if (tag === '*') {
                return true;
              }
              if (Array.isArray(tag)) {
                var _iterator5 = _createForOfIteratorHelper(tag),
                  _step5;
                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var t = _step5.value;
                    if (!tags.includes(t)) {
                      return false;
                    }
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
                return true;
              }
              return tags.includes(tag);
            },
            on: function on(ev, cb) {
              if (!events[ev]) {
                events[ev] = new IDList();
              }
              return events[ev].pushd(cb);
            },
            action: function action(cb) {
              return this.on('update', cb);
            },
            trigger: function trigger(ev) {
              var _this4 = this;
              for (var _len7 = arguments.length, args = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
                args[_key7 - 1] = arguments[_key7];
              }
              if (events[ev]) {
                events[ev].forEach(function (cb) {
                  return cb.call.apply(cb, [_this4].concat(args));
                });
              }
              var gEvents = game.objEvents[ev];
              if (gEvents) {
                gEvents.forEach(function (e) {
                  if (_this4.is(e.tag)) {
                    e.cb.apply(e, [_this4].concat(args));
                  }
                });
              }
            },
            rmTag: function rmTag(t) {
              var idx = tags.indexOf(t);
              if (idx > -1) {
                tags.splice(idx, 1);
              }
            },
            _inspect: function _inspect() {
              var info = [];
              if (events.inspect) {
                var _iterator6 = _createForOfIteratorHelper(events.inspect.values()),
                  _step6;
                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var inspect = _step6.value;
                    info.push(inspect());
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }
              }
              return {
                tags: tags,
                info: info
              };
            },
            destroy: function destroy() {
              _destroy(this);
            }
          };
          var _iterator7 = _createForOfIteratorHelper(comps),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var _comp = _step7.value;
              obj.use(_comp);
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
          obj._id = game.objs.push(obj);
          obj.trigger('add');
          ready(function () {
            return obj.trigger('load');
          });
          for (var id in compStates) {
            var comp = compStates[id];
            var deps = comp.require || [];
            var _iterator8 = _createForOfIteratorHelper(deps),
              _step8;
            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var dep = _step8.value;
                if (!obj.c(dep)) {
                  throw new Error("comp '".concat(id, "' requires comp '").concat(dep, "'"));
                }
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }
          return obj;
        }
        __name(add, 'add');
        function readd(obj) {
          if (!obj.exists()) {
            return;
          }
          game.objs.delete(obj._id);
          var id = game.objs.push(obj);
          obj._id = id;
          return obj;
        }
        __name(readd, 'readd');
        function on(event, tag, cb) {
          if (!game.objEvents[event]) {
            game.objEvents[event] = new IDList();
          }
          return game.objEvents[event].pushd({
            tag: tag,
            cb: cb
          });
        }
        __name(on, 'on');
        function action(tag, cb) {
          if (typeof tag === 'function' && cb === void 0) {
            return game.actions.pushd(tag);
          }
          if (typeof tag === 'string') {
            return on('update', tag, cb);
          }
        }
        __name(action, 'action');
        function render(tag, cb) {
          if (typeof tag === 'function' && cb === void 0) {
            return game.renders.pushd(tag);
          }
          if (typeof tag === 'string') {
            return on('update', tag, cb);
          }
        }
        __name(render, 'render');
        function collides(t1, t2, f) {
          return action(t1, function (o1) {
            o1._checkCollisions(t2, function (o2) {
              f(o1, o2);
            });
          });
        }
        __name(collides, 'collides');
        function overlaps(t1, t2, f) {
          return action(t1, function (o1) {
            o1._checkOverlaps(t2, function (o2) {
              f(o1, o2);
            });
          });
        }
        __name(overlaps, 'overlaps');
        function clicks(t, f) {
          return action(t, function (o) {
            if (o.isClicked()) {
              f(o);
            }
          });
        }
        __name(clicks, 'clicks');
        function wait(t, f) {
          return new Promise(function (resolve) {
            game.timers.push({
              time: t,
              cb: function cb() {
                if (f) {
                  f();
                }
                resolve();
              }
            });
          });
        }
        __name(wait, 'wait');
        function loop(t, f) {
          var stopped = false;
          var newF = /* @__PURE__ */__name(function () {
            if (stopped) {
              return;
            }
            f();
            wait(t, newF);
          }, 'newF');
          newF();
          return function () {
            return stopped = true;
          };
        }
        __name(loop, 'loop');
        function keyDown(k, f) {
          if (Array.isArray(k)) {
            var cancellers = k.map(function (key) {
              return keyDown(key, f);
            });
            return function () {
              return cancellers.forEach(function (cb) {
                return cb();
              });
            };
          }
          return game.on('input', function () {
            return app.keyDown(k) && f();
          });
        }
        __name(keyDown, 'keyDown');
        function keyPress(k, f) {
          if (Array.isArray(k)) {
            var cancellers = k.map(function (key) {
              return keyPress(key, f);
            });
            return function () {
              return cancellers.forEach(function (cb) {
                return cb();
              });
            };
          }
          return game.on('input', function () {
            return app.keyPressed(k) && f();
          });
        }
        __name(keyPress, 'keyPress');
        function keyPressRep(k, f) {
          if (Array.isArray(k)) {
            var cancellers = k.map(function (key) {
              return keyPressRep(key, f);
            });
            return function () {
              return cancellers.forEach(function (cb) {
                return cb();
              });
            };
          }
          return game.on('input', function () {
            return app.keyPressedRep(k) && f();
          });
        }
        __name(keyPressRep, 'keyPressRep');
        function keyRelease(k, f) {
          if (Array.isArray(k)) {
            var cancellers = k.map(function (key) {
              return keyRelease(key, f);
            });
            return function () {
              return cancellers.forEach(function (cb) {
                return cb();
              });
            };
          }
          return game.on('input', function () {
            return app.keyReleased(k) && f();
          });
        }
        __name(keyRelease, 'keyRelease');
        function mouseDown(f) {
          return game.on('input', function () {
            return app.mouseDown() && f();
          });
        }
        __name(mouseDown, 'mouseDown');
        function mouseClick(f) {
          return game.on('input', function () {
            return app.mouseClicked() && f();
          });
        }
        __name(mouseClick, 'mouseClick');
        function mouseRelease(f) {
          return game.on('input', function () {
            return app.mouseReleased() && f();
          });
        }
        __name(mouseRelease, 'mouseRelease');
        function mouseMove(f) {
          return game.on('input', function () {
            return app.mouseMoved() && f();
          });
        }
        __name(mouseMove, 'mouseMove');
        function charInput(f) {
          return game.on('input', function () {
            return app.charInputted().forEach(function (ch) {
              return f(ch);
            });
          });
        }
        __name(charInput, 'charInput');
        function touchStart(f) {
          return game.on('input', function () {});
        }
        __name(touchStart, 'touchStart');
        function touchMove(f) {
          return game.on('input', function () {});
        }
        __name(touchMove, 'touchMove');
        function touchEnd(f) {
          return game.on('input', function () {});
        }
        __name(touchEnd, 'touchEnd');
        function touchIsActive(id) {
          return false;
        }
        __name(touchIsActive, 'touchIsActive');
        function get(t) {
          var objs = _toConsumableArray(game.objs.values()).sort(function (o1, o2) {
            var _game$layers$order, _game$layers2, _o1$layer, _game$layers$order2, _game$layers3, _o2$layer;
            var l1 = (_game$layers$order = (_game$layers2 = game.layers[(_o1$layer = o1.layer) !== null && _o1$layer !== void 0 ? _o1$layer : game.defLayer]) === null || _game$layers2 === void 0 ? void 0 : _game$layers2.order) !== null && _game$layers$order !== void 0 ? _game$layers$order : 0;
            var l2 = (_game$layers$order2 = (_game$layers3 = game.layers[(_o2$layer = o2.layer) !== null && _o2$layer !== void 0 ? _o2$layer : game.defLayer]) === null || _game$layers3 === void 0 ? void 0 : _game$layers3.order) !== null && _game$layers$order2 !== void 0 ? _game$layers$order2 : 0;
            return l1 - l2;
          });
          if (!t) {
            return objs;
          }
          return objs.filter(function (obj) {
            return obj.is(t);
          });
        }
        __name(get, 'get');
        function every(t, f) {
          if (typeof t === 'function' && f === void 0) {
            return get().map(t);
          }
          if (typeof t === 'string') {
            return get(t).map(f);
          }
        }
        __name(every, 'every');
        function revery(t, f) {
          if (typeof t === 'function' && f === void 0) {
            return get().reverse().map(t);
          }
          if (typeof t === 'string') {
            return get(t).reverse().map(f);
          }
        }
        __name(revery, 'revery');
        function _destroy(obj) {
          if (!obj.exists()) {
            return;
          }
          obj.trigger('destroy');
          game.objs.delete(obj._id);
          delete obj._id;
        }
        __name(_destroy, 'destroy');
        function destroyAll(t) {
          every(t, function (obj) {
            _destroy(obj);
          });
        }
        __name(destroyAll, 'destroyAll');
        function gravity(g) {
          if (g !== void 0) {
            game.gravity = g;
          }
          return game.gravity;
        }
        __name(gravity, 'gravity');
        function gameFrame(ignorePause) {
          game.trigger('nextFrame');
          delete game.events.nextFrame;
          var doUpdate = ignorePause || !debug.paused;
          if (doUpdate) {
            game.timers.forEach(function (t, id) {
              t.time -= dt();
              if (t.time <= 0) {
                t.cb();
                game.timers.delete(id);
              }
            });
          }
          revery(function (obj) {
            if (!obj.paused && doUpdate) {
              obj.trigger('update');
            }
          });
          if (doUpdate) {
            game.actions.forEach(function (a) {
              return a();
            });
          }
          var size = vec2(gfx.width(), gfx.height());
          var cam = game.cam;
          var shake = vec2FromAngle(rand(0, Math.PI * 2)).scale(cam.shake);
          cam.shake = _lerp(cam.shake, 0, 5 * dt());
          game.camMatrix = mat4().translate(size.scale(0.5)).scale(cam.scale).rotateZ(cam.angle).translate(size.scale(-0.5)).translate(cam.pos.scale(-1).add(size.scale(0.5)).add(shake));
          every(function (obj) {
            if (!obj.hidden) {
              gfx.pushTransform();
              if (isCamLayer(obj.layer)) {
                gfx.pushMatrix(game.camMatrix);
              }
              obj.trigger('draw');
              gfx.popTransform();
            }
          });
          game.renders.forEach(function (r) {
            return r();
          });
        }
        __name(gameFrame, 'gameFrame');
        function drawInspect() {
          var _gconf$inspectColor;
          var inspecting = null;
          var font = assets.defFont();
          var lcolor = rgba((_gconf$inspectColor = gconf.inspectColor) !== null && _gconf$inspectColor !== void 0 ? _gconf$inspectColor : [0, 1, 1, 1]);
          function drawInspectTxt(pos2, txt, scale2) {
            var pad = vec2(4).scale(1 / scale2);
            var ftxt = gfx.fmtText(txt, font, {
              size: 12 / scale2,
              pos: pos2.add(vec2(pad.x, pad.y))
            });
            gfx.drawRect(pos2, ftxt.width + pad.x * 2, ftxt.height + pad.x * 2, {
              color: rgba(0, 0, 0, 1)
            });
            gfx.drawFmtText(ftxt);
          }
          __name(drawInspectTxt, 'drawInspectTxt');
          function drawObj(obj, f) {
            var isCam = isCamLayer(obj.layer);
            var scale2 = gfx.scale() * (isCam ? (game.cam.scale.x + game.cam.scale.y) / 2 : 1);
            if (isCam) {
              gfx.pushTransform();
              gfx.pushMatrix(game.camMatrix);
            }
            f(scale2);
            if (isCam) {
              gfx.popTransform();
            }
          }
          __name(drawObj, 'drawObj');
          revery(function (obj) {
            if (!obj.area) {
              return;
            }
            if (obj.hidden) {
              return;
            }
            drawObj(obj, function (scale2) {
              if (!inspecting) {
                if (obj.isHovered()) {
                  inspecting = obj;
                }
              }
              var lwidth = (inspecting === obj ? 6 : 2) / scale2;
              var a = obj._worldArea();
              var w = a.p2.x - a.p1.x;
              var h = a.p2.y - a.p1.y;
              gfx.drawRectStroke(a.p1, w, h, {
                width: lwidth,
                color: lcolor
              });
            });
          });
          if (inspecting) {
            drawObj(inspecting, function (scale2) {
              var mpos = mousePos(inspecting.layer);
              var lines = [];
              var data = inspecting._inspect();
              var _iterator9 = _createForOfIteratorHelper(data.tags),
                _step9;
              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var tag = _step9.value;
                  lines.push("\"".concat(tag, "\""));
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }
              var _iterator10 = _createForOfIteratorHelper(data.info),
                _step10;
              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var info = _step10.value;
                  for (var field in info) {
                    lines.push("".concat(field, ": ").concat(info[field]));
                  }
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }
              drawInspectTxt(mpos, lines.join('\n'), scale2);
            });
          }
          drawInspectTxt(vec2(0), "".concat(app.fps()), gfx.scale());
        }
        __name(drawInspect, 'drawInspect');
        function pos() {
          return {
            id: 'pos',
            pos: vec2.apply(void 0, arguments),
            move: function move() {
              var p = vec2.apply(void 0, arguments);
              var dx = p.x * dt();
              var dy = p.y * dt();
              this.pos.x += dx;
              this.pos.y += dy;
            },
            screenPos: function screenPos() {
              return game.camMatrix.multVec2(this.pos);
            },
            inspect: function inspect() {
              return {
                pos: "(".concat(~~this.pos.x, ", ").concat(~~this.pos.y, ")")
              };
            }
          };
        }
        __name(pos, 'pos');
        function scale() {
          if (arguments.length === 0) {
            return scale(1);
          }
          return {
            id: 'scale',
            scale: vec2.apply(void 0, arguments)
          };
        }
        __name(scale, 'scale');
        function rotate(r) {
          return {
            id: 'rotate',
            angle: r !== null && r !== void 0 ? r : 0
          };
        }
        __name(rotate, 'rotate');
        function color() {
          return {
            id: 'color',
            color: rgba.apply(void 0, arguments)
          };
        }
        __name(color, 'color');
        function origin(o) {
          return {
            id: 'origin',
            origin: o
          };
        }
        __name(origin, 'origin');
        function layer(l) {
          return {
            id: 'layer',
            layer: l,
            inspect: function inspect() {
              var _this$layer;
              return {
                layer: (_this$layer = this.layer) !== null && _this$layer !== void 0 ? _this$layer : game.defLayer
              };
            }
          };
        }
        __name(layer, 'layer');
        function isSameLayer(o1, o2) {
          var _o1$layer2, _o2$layer2;
          return ((_o1$layer2 = o1.layer) !== null && _o1$layer2 !== void 0 ? _o1$layer2 : game.defLayer) === ((_o2$layer2 = o2.layer) !== null && _o2$layer2 !== void 0 ? _o2$layer2 : game.defLayer);
        }
        __name(isSameLayer, 'isSameLayer');
        function area(p1, p2) {
          var colliding = {};
          var overlapping = {};
          return {
            id: 'area',
            area: {
              p1: p1,
              p2: p2
            },
            areaWidth: function areaWidth() {
              var _this$_worldArea = this._worldArea(),
                p12 = _this$_worldArea.p1,
                p22 = _this$_worldArea.p2;
              return p22.x - p12.x;
            },
            areaHeight: function areaHeight() {
              var _this$_worldArea2 = this._worldArea(),
                p12 = _this$_worldArea2.p1,
                p22 = _this$_worldArea2.p2;
              return p22.y - p12.y;
            },
            isClicked: function isClicked() {
              return app.mouseClicked() && this.isHovered();
            },
            isHovered: function isHovered() {
              return this.hasPt(mousePos(this.layer));
            },
            isCollided: function isCollided(other) {
              if (!other.area) {
                return false;
              }
              if (!isSameLayer(this, other)) {
                return false;
              }
              var a1 = this._worldArea();
              var a2 = other._worldArea();
              return colRectRect(a1, a2);
            },
            isOverlapped: function isOverlapped(other) {
              if (!other.area) {
                return false;
              }
              if (!isSameLayer(this, other)) {
                return false;
              }
              var a1 = this._worldArea();
              var a2 = other._worldArea();
              return overlapRectRect(a1, a2);
            },
            clicks: function clicks(f) {
              var _this5 = this;
              this.action(function () {
                if (_this5.isClicked()) {
                  f();
                }
              });
            },
            hovers: function hovers(f) {
              var _this6 = this;
              this.action(function () {
                if (_this6.isHovered()) {
                  f();
                }
              });
            },
            collides: function collides(tag, f) {
              var _this7 = this;
              this.action(function () {
                _this7._checkCollisions(tag, f);
              });
            },
            overlaps: function overlaps(tag, f) {
              var _this8 = this;
              this.action(function () {
                _this8._checkOverlaps(tag, f);
              });
            },
            hasPt: function hasPt(pt) {
              var a = this._worldArea();
              return colRectPt({
                p1: a.p1,
                p2: a.p2
              }, pt);
            },
            pushOut: function pushOut(obj) {
              if (obj === this) {
                return null;
              }
              if (!obj.area) {
                return null;
              }
              if (!isSameLayer(this, obj)) {
                return null;
              }
              var a1 = this._worldArea();
              var a2 = obj._worldArea();
              if (!colRectRect(a1, a2)) {
                return null;
              }
              var disLeft = a1.p2.x - a2.p1.x;
              var disRight = a2.p2.x - a1.p1.x;
              var disTop = a1.p2.y - a2.p1.y;
              var disBottom = a2.p2.y - a1.p1.y;
              var min = Math.min(disLeft, disRight, disTop, disBottom);
              switch (min) {
                case disLeft:
                  this.pos.x -= disLeft;
                  return {
                    obj: obj,
                    side: 'right',
                    dis: -disLeft
                  };
                case disRight:
                  this.pos.x += disRight;
                  return {
                    obj: obj,
                    side: 'left',
                    dis: disRight
                  };
                case disTop:
                  this.pos.y -= disTop;
                  return {
                    obj: obj,
                    side: 'bottom',
                    dis: -disTop
                  };
                case disBottom:
                  this.pos.y += disBottom;
                  return {
                    obj: obj,
                    side: 'top',
                    dis: disBottom
                  };
              }
              return null;
            },
            pushOutAll: function pushOutAll() {
              var _this9 = this;
              return every(function (other) {
                return other.solid ? _this9.pushOut(other) : null;
              }).filter(function (res) {
                return res != null;
              });
            },
            _checkCollisions: function _checkCollisions(tag, f) {
              var _this10 = this;
              every(tag, function (obj) {
                if (_this10 === obj) {
                  return;
                }
                if (colliding[obj._id]) {
                  return;
                }
                if (_this10.isCollided(obj)) {
                  f(obj);
                  colliding[obj._id] = obj;
                }
              });
              for (var id in colliding) {
                var obj = colliding[id];
                if (!this.isCollided(obj)) {
                  delete colliding[id];
                }
              }
            },
            _checkOverlaps: function _checkOverlaps(tag, f) {
              var _this11 = this;
              every(tag, function (obj) {
                if (_this11 === obj) {
                  return;
                }
                if (overlapping[obj._id]) {
                  return;
                }
                if (_this11.isOverlapped(obj)) {
                  f(obj);
                  overlapping[obj._id] = obj;
                }
              });
              for (var id in overlapping) {
                var obj = overlapping[id];
                if (!this.isOverlapped(obj)) {
                  delete overlapping[id];
                }
              }
            },
            _worldArea: function _worldArea() {
              var a = this.area;
              var pos2 = this.pos || vec2(0);
              var scale2 = this.scale || vec2(1);
              var p12 = pos2.add(a.p1.scale(scale2));
              var p22 = pos2.add(a.p2.scale(scale2));
              var area2 = {
                p1: vec2(Math.min(p12.x, p22.x), Math.min(p12.y, p22.y)),
                p2: vec2(Math.max(p12.x, p22.x), Math.max(p12.y, p22.y))
              };
              return area2;
            }
          };
        }
        __name(area, 'area');
        function getAreaFromSize(w, h, o) {
          var size = vec2(w, h);
          var offset = originPt(o || DEF_ORIGIN2).scale(size).scale(-0.5);
          return area(offset.sub(size.scale(0.5)), offset.add(size.scale(0.5)));
        }
        __name(getAreaFromSize, 'getAreaFromSize');
        function sprite(id) {
          var conf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var spr = null;
          var _curAnim = null;
          function calcTexScale(tex, q, w, h) {
            var scale2 = vec2(1, 1);
            if (w && h) {
              scale2.x = w / (tex.width * q.w);
              scale2.y = h / (tex.height * q.h);
            } else if (w) {
              scale2.x = w / (tex.width * q.w);
              scale2.y = scale2.x;
            } else if (h) {
              scale2.y = h / (tex.height * q.h);
              scale2.x = scale2.y;
            }
            return scale2;
          }
          __name(calcTexScale, 'calcTexScale');
          return {
            id: 'sprite',
            width: 0,
            height: 0,
            animSpeed: conf.animSpeed || 0.1,
            frame: conf.frame || 0,
            quad: conf.quad || quad(0, 0, 1, 1),
            add: function add() {
              if (!conf.noArea) {
                this.use(area(vec2(0), vec2(0)));
              }
            },
            load: function load() {
              spr = assets.sprites[id];
              if (!spr) {
                throw new Error("sprite not found: \"".concat(id, "\""));
              }
              var q = _objectSpread({}, spr.frames[0]);
              if (conf.quad) {
                q = q.scale(conf.quad);
              }
              var scale2 = calcTexScale(spr.tex, q, conf.width, conf.height);
              this.width = spr.tex.width * q.w * scale2.x;
              this.height = spr.tex.height * q.h * scale2.y;
              if (!conf.noArea) {
                this.use(getAreaFromSize(this.width, this.height, this.origin));
              }
            },
            draw: function draw() {
              drawSprite(spr, {
                pos: this.pos,
                scale: this.scale,
                rot: this.angle,
                color: this.color,
                frame: this.frame,
                origin: this.origin,
                quad: this.quad,
                prog: assets.shaders[this.shader],
                uniform: this.uniform,
                flipX: conf.flipX,
                flipY: conf.flipY,
                tiled: conf.tiled,
                width: conf.width,
                height: conf.height
              });
            },
            update: function update() {
              if (!_curAnim) {
                return;
              }
              var anim = spr.anims[_curAnim.name];
              _curAnim.timer += dt();
              if (_curAnim.timer >= this.animSpeed) {
                this.frame++;
                if (this.frame > anim.to) {
                  if (_curAnim.loop) {
                    this.frame = anim.from;
                  } else {
                    this.frame--;
                    this.stop();
                  }
                }
                if (_curAnim) {
                  _curAnim.timer -= this.animSpeed;
                }
              }
            },
            play: function play(name) {
              var _this12 = this;
              var loop2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
              if (!spr) {
                ready(function () {
                  _this12.play(name, loop2);
                });
                return;
              }
              var anim = spr.anims[name];
              if (!anim) {
                throw new Error("anim not found: ".concat(name));
              }
              if (_curAnim) {
                this.stop();
              }
              _curAnim = {
                name: name,
                loop: loop2,
                timer: 0
              };
              this.frame = anim.from;
              this.trigger('animPlay', name);
            },
            stop: function stop() {
              if (!_curAnim) {
                return;
              }
              var prevAnim = _curAnim.name;
              _curAnim = null;
              this.trigger('animEnd', prevAnim);
            },
            changeSprite: function changeSprite(id2) {
              var _this13 = this;
              if (!spr) {
                ready(function () {
                  _this13.changeSprite(id2);
                });
                return;
              }
              spr = assets.sprites[id2];
              if (!spr) {
                throw new Error("sprite not found: \"".concat(id2, "\""));
              }
              var q = _objectSpread({}, spr.frames[0]);
              if (conf.quad) {
                q.x += conf.quad.x * q.w;
                q.y += conf.quad.y * q.h;
                q.w *= conf.quad.w;
                q.h *= conf.quad.h;
              }
              this.width = spr.tex.width * q.w;
              this.height = spr.tex.height * q.h;
              if (!conf.noArea) {
                this.use(getAreaFromSize(this.width, this.height, this.origin));
              }
              _curAnim = null;
              this.frame = 0;
            },
            numFrames: function numFrames() {
              if (!spr) {
                return 0;
              }
              return spr.frames.length;
            },
            curAnim: function curAnim() {
              var _curAnim2;
              return (_curAnim2 = _curAnim) === null || _curAnim2 === void 0 ? void 0 : _curAnim2.name;
            },
            flipX: function flipX(b) {
              conf.flipX = b;
            },
            flipY: function flipY(b) {
              conf.flipY = b;
            },
            inspect: function inspect() {
              var info = {};
              if (_curAnim) {
                info.curAnim = "\"".concat(_curAnim.name, "\"");
              }
              return info;
            }
          };
        }
        __name(sprite, 'sprite');
        function text(t, size) {
          var conf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return {
            id: 'text',
            text: t,
            textSize: size || 16,
            font: conf.font,
            width: 0,
            height: 0,
            add: function add() {
              if (!conf.noArea) {
                this.use(area(vec2(0), vec2(0)));
              }
            },
            load: function load() {
              if (!conf.noArea) {
                var _this$font, _this$scale, _this$scale2;
                var font = assets.fonts[(_this$font = this.font) !== null && _this$font !== void 0 ? _this$font : DEF_FONT];
                var ftext = gfx.fmtText("".concat(this.text), font, {
                  pos: this.pos,
                  scale: this.scale,
                  rot: this.angle,
                  size: this.textSize,
                  origin: this.origin,
                  color: this.color,
                  width: conf.width
                });
                this.width = ftext.width / (((_this$scale = this.scale) === null || _this$scale === void 0 ? void 0 : _this$scale.x) || 1);
                this.height = ftext.height / (((_this$scale2 = this.scale) === null || _this$scale2 === void 0 ? void 0 : _this$scale2.y) || 1);
                this.use(getAreaFromSize(this.width, this.height, this.origin));
              }
            },
            draw: function draw() {
              var _this$font2;
              var font = assets.fonts[(_this$font2 = this.font) !== null && _this$font2 !== void 0 ? _this$font2 : DEF_FONT];
              var ftext = gfx.fmtText("".concat(this.text), font, {
                pos: this.pos,
                scale: this.scale,
                rot: this.angle,
                size: this.textSize,
                origin: this.origin,
                color: this.color,
                width: conf.width
              });
              this.width = ftext.width;
              this.height = ftext.height;
              gfx.drawFmtText(ftext);
            }
          };
        }
        __name(text, 'text');
        function rect(w, h) {
          var conf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return {
            id: 'rect',
            width: w,
            height: h,
            add: function add() {
              if (!this.area && !conf.noArea) {
                this.use(getAreaFromSize(this.width, this.height, this.origin));
              }
            },
            draw: function draw() {
              gfx.drawRect(this.pos, this.width, this.height, {
                scale: this.scale,
                rot: this.angle,
                color: this.color,
                origin: this.origin,
                prog: assets.shaders[this.shader],
                uniform: this.uniform
              });
            }
          };
        }
        __name(rect, 'rect');
        function solid() {
          return {
            id: 'solid',
            solid: true
          };
        }
        __name(solid, 'solid');
        var DEF_MAX_VEL = 960;
        var DEF_JUMP_FORCE = 480;
        function body() {
          var _conf$maxVel, _conf$jumpForce;
          var conf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var velY = 0;
          var _curPlatform = null;
          var lastPlatformPos = null;
          var maxVel = (_conf$maxVel = conf.maxVel) !== null && _conf$maxVel !== void 0 ? _conf$maxVel : DEF_MAX_VEL;
          return {
            id: 'body',
            jumpForce: (_conf$jumpForce = conf.jumpForce) !== null && _conf$jumpForce !== void 0 ? _conf$jumpForce : DEF_JUMP_FORCE,
            update: function update() {
              this.move(0, velY);
              var targets = this.pushOutAll();
              var justOff = false;
              if (_curPlatform) {
                if (!_curPlatform.exists() || !this.isCollided(_curPlatform)) {
                  _curPlatform = null;
                  lastPlatformPos = null;
                  justOff = true;
                } else if (lastPlatformPos) {
                  this.pos = this.pos.add(_curPlatform.pos.sub(lastPlatformPos));
                  lastPlatformPos = _curPlatform.pos.clone();
                }
              }
              if (!_curPlatform) {
                velY = Math.min(velY + gravity() * dt(), maxVel);
                var _iterator11 = _createForOfIteratorHelper(targets),
                  _step11;
                try {
                  for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                    var target = _step11.value;
                    if (target.side === 'bottom' && velY > 0) {
                      _curPlatform = target.obj;
                      velY = 0;
                      lastPlatformPos = _curPlatform.pos.clone();
                      if (!justOff) {
                        this.trigger('grounded', _curPlatform);
                      }
                    } else if (target.side === 'top' && velY < 0) {
                      velY = 0;
                      this.trigger('headbutt', target.obj);
                    }
                  }
                } catch (err) {
                  _iterator11.e(err);
                } finally {
                  _iterator11.f();
                }
              }
            },
            curPlatform: function curPlatform() {
              return _curPlatform;
            },
            grounded: function grounded() {
              return _curPlatform !== null;
            },
            falling: function falling() {
              return velY > 0;
            },
            jump: function jump(force) {
              _curPlatform = null;
              velY = -force || -this.jumpForce;
            }
          };
        }
        __name(body, 'body');
        function shader(id) {
          var uniform = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var prog = assets.shaders[id];
          return {
            id: 'shader',
            shader: id,
            uniform: uniform
          };
        }
        __name(shader, 'shader');
        var debug = {
          paused: false,
          inspect: false,
          timeScale: 1,
          showLog: true,
          fps: app.fps,
          objCount: function objCount() {
            return game.objs.size;
          },
          stepFrame: function stepFrame() {
            gameFrame(true);
          },
          drawCalls: gfx.drawCalls,
          clearLog: logger.clear,
          log: logger.info,
          error: logger.error
        };
        function gridder(level, p) {
          return {
            id: 'gridder',
            gridPos: p.clone(),
            setGridPos: function setGridPos(p2) {
              this.gridPos = p2.clone();
              this.pos = vec2(level.offset().x + this.gridPos.x * level.gridWidth(), level.offset().y + this.gridPos.y * level.gridHeight());
            },
            moveLeft: function moveLeft() {
              this.setGridPos(this.gridPos.add(vec2(-1, 0)));
            },
            moveRight: function moveRight() {
              this.setGridPos(this.gridPos.add(vec2(1, 0)));
            },
            moveUp: function moveUp() {
              this.setGridPos(this.gridPos.add(vec2(0, -1)));
            },
            moveDown: function moveDown() {
              this.setGridPos(this.gridPos.add(vec2(0, 1)));
            }
          };
        }
        __name(gridder, 'gridder');
        function addLevel(map2, conf) {
          var objs = [];
          var _offset = vec2(conf.pos || 0);
          var longRow = 0;
          var level = {
            offset: function offset() {
              return _offset.clone();
            },
            gridWidth: function gridWidth() {
              return conf.width;
            },
            gridHeight: function gridHeight() {
              return conf.height;
            },
            getPos: function getPos() {
              var p = vec2.apply(void 0, arguments);
              return vec2(_offset.x + p.x * conf.width, _offset.y + p.y * conf.height);
            },
            spawn: function spawn(sym, p) {
              var comps = function () {
                if (Array.isArray(sym)) {
                  return sym;
                }
                if (conf[sym]) {
                  if (typeof conf[sym] === 'function') {
                    return conf[sym]();
                  }
                  if (Array.isArray(conf[sym])) {
                    return _toConsumableArray(conf[sym]);
                  }
                } else if (conf.any) {
                  return conf.any(sym);
                }
              }();
              if (!comps) {
                return;
              }
              comps.push(pos(_offset.x + p.x * conf.width, _offset.y + p.y * conf.height));
              var obj = add(comps);
              objs.push(obj);
              obj.use(gridder(this, p));
              return obj;
            },
            width: function width() {
              return longRow * conf.width;
            },
            height: function height() {
              return map2.length * conf.height;
            },
            destroy: function destroy() {
              for (var _i3 = 0, _objs = objs; _i3 < _objs.length; _i3++) {
                var obj = _objs[_i3];
                _destroy(obj);
              }
            }
          };
          map2.forEach(function (row, i) {
            var syms = row.split('');
            longRow = Math.max(syms.length, longRow);
            syms.forEach(function (sym, j) {
              level.spawn(sym, vec2(j, i));
            });
          });
          return level;
        }
        __name(addLevel, 'addLevel');
        function commonProps(props) {
          var _props$pos, _props$rot, _props$scale, _props$color;
          return [pos((_props$pos = props.pos) !== null && _props$pos !== void 0 ? _props$pos : vec2(0)), rotate((_props$rot = props.rot) !== null && _props$rot !== void 0 ? _props$rot : 0), scale(vec2((_props$scale = props.scale) !== null && _props$scale !== void 0 ? _props$scale : 1)), color((_props$color = props.color) !== null && _props$color !== void 0 ? _props$color : rgb(1, 1, 1)), origin(props.origin)];
        }
        __name(commonProps, 'commonProps');
        function addSprite(name) {
          var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return add([sprite(name, props), props.body && body(), props.solid && solid(), props.layer && layer(props.layer), props.origin && origin(props.origin), props.data].concat(_toConsumableArray(commonProps(props)), _toConsumableArray(props.tags || [])));
        }
        __name(addSprite, 'addSprite');
        function addRect(w, h) {
          var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return add([rect(w, h, props), props.body && body(), props.solid && solid(), props.layer && layer(props.layer), props.origin && origin(props.origin), props.data].concat(_toConsumableArray(commonProps(props)), _toConsumableArray(props.tags || [])));
        }
        __name(addRect, 'addRect');
        function addText(txt, size) {
          var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return add([text(txt, size, props), props.body && body(), props.solid && solid(), props.layer && layer(props.layer), props.origin && origin(props.origin), props.data].concat(_toConsumableArray(commonProps(props)), _toConsumableArray(props.tags || [])));
        }
        __name(addText, 'addText');
        function ready(cb) {
          if (game.loaded) {
            cb();
          } else {
            game.on('load', cb);
          }
        }
        __name(ready, 'ready');
        function scene(id, def) {
          game.scenes[id] = def;
        }
        __name(scene, 'scene');
        function go(id) {
          for (var _len8 = arguments.length, args = new Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
            args[_key8 - 1] = arguments[_key8];
          }
          game.on('nextFrame', function () {
            var _game$scenes;
            game.events = {};
            game.objEvents = {
              add: new IDList(),
              update: new IDList(),
              draw: new IDList(),
              destroy: new IDList()
            };
            game.actions = new IDList();
            game.renders = new IDList();
            game.objs = new IDList();
            game.timers = new IDList();
            game.cam = {
              pos: vec2(gfx.width() / 2, gfx.height() / 2),
              scale: vec2(1, 1),
              angle: 0,
              shake: 0
            };
            game.camMousePos = app.mousePos();
            game.camMatrix = mat4();
            game.layers = {};
            game.defLayer = null;
            game.gravity = DEF_GRAVITY;
            (_game$scenes = game.scenes)[id].apply(_game$scenes, args);
            if (gconf.debug) {
              regDebugInput();
            }
          });
        }
        __name(go, 'go');
        function getData(key, def) {
          try {
            return JSON.parse(window.localStorage[key]);
          } catch (_unused) {
            if (def) {
              setData(key, def);
              return def;
            }
            return null;
          }
        }
        __name(getData, 'getData');
        function setData(key, data) {
          window.localStorage[key] = JSON.stringify(data);
        }
        __name(setData, 'setData');
        var ctx = {
          loadRoot: assets.loadRoot,
          loadSprite: assets.loadSprite,
          loadSound: assets.loadSound,
          loadFont: assets.loadFont,
          loadShader: assets.loadShader,
          addLoader: assets.addLoader,
          width: gfx.width,
          height: gfx.height,
          dt: dt,
          time: app.time,
          screenshot: app.screenshot,
          focused: app.focused,
          focus: app.focus,
          cursor: app.cursor,
          ready: ready,
          isTouch: app.isTouch,
          layers: layers,
          camPos: camPos,
          camScale: camScale,
          camRot: camRot,
          camShake: camShake,
          camIgnore: camIgnore,
          gravity: gravity,
          add: add,
          readd: readd,
          destroy: _destroy,
          destroyAll: destroyAll,
          get: get,
          every: every,
          revery: revery,
          sync: sync,
          send: send,
          recv: recv,
          pos: pos,
          scale: scale,
          rotate: rotate,
          color: color,
          origin: origin,
          layer: layer,
          area: area,
          sprite: sprite,
          text: text,
          rect: rect,
          solid: solid,
          body: body,
          shader: shader,
          on: on,
          action: action,
          render: render,
          collides: collides,
          overlaps: overlaps,
          clicks: clicks,
          keyDown: keyDown,
          keyPress: keyPress,
          keyPressRep: keyPressRep,
          keyRelease: keyRelease,
          mouseDown: mouseDown,
          mouseClick: mouseClick,
          mouseRelease: mouseRelease,
          mouseMove: mouseMove,
          charInput: charInput,
          touchStart: touchStart,
          touchMove: touchMove,
          touchEnd: touchEnd,
          touchIsActive: touchIsActive,
          mousePos: mousePos,
          keyIsDown: app.keyDown,
          keyIsPressed: app.keyPressed,
          keyIsPressedRep: app.keyPressedRep,
          keyIsReleased: app.keyReleased,
          mouseIsDown: app.mouseDown,
          mouseIsClicked: app.mouseClicked,
          mouseIsReleased: app.mouseReleased,
          mouseIsMoved: app.mouseMoved,
          loop: loop,
          wait: wait,
          play: play,
          volume: audio.volume,
          burp: audio.burp,
          makeRng: makeRng,
          rand: rand,
          randSeed: randSeed,
          vec2: vec2,
          rgb: rgb,
          rgba: rgba,
          quad: quad,
          choose: choose,
          chance: chance,
          lerp: _lerp,
          map: map,
          mapc: mapc,
          wave: wave,
          deg2rad: deg2rad,
          rad2deg: rad2deg,
          drawSprite: drawSprite,
          drawText: drawText,
          drawRect: gfx.drawRect,
          drawRectStroke: gfx.drawRectStroke,
          drawLine: gfx.drawLine,
          drawTri: gfx.drawTri,
          debug: debug,
          addLevel: addLevel,
          addSprite: addSprite,
          addRect: addRect,
          addText: addText,
          scene: scene,
          go: go,
          getData: getData,
          setData: setData
        };
        if (gconf.plugins) {
          var _iterator12 = _createForOfIteratorHelper(gconf.plugins),
            _step12;
          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var src = _step12.value;
              var map2 = src(ctx);
              for (var k in map2) {
                ctx[k] = map2[k];
              }
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }
        }
        if (gconf.global) {
          Object.entries(ctx).forEach(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
              key = _ref4[0],
              value = _ref4[1];
            window[key] = value;
          });
        }
        app.run(function () {
          gfx.frameStart();
          if (!game.loaded) {
            var progress = assets.loadProgress();
            if (progress === 1) {
              game.loaded = true;
              game.trigger('load');
              if (net) {
                net.connect().catch(logger.error);
              }
            } else {
              var w = gfx.width() / 2;
              var h = 24 / gfx.scale();
              var pos2 = vec2(gfx.width() / 2, gfx.height() / 2).sub(vec2(w / 2, h / 2));
              gfx.drawRect(vec2(0), gfx.width(), gfx.height(), {
                color: rgb(0, 0, 0)
              });
              gfx.drawRectStroke(pos2, w, h, {
                width: 4 / gfx.scale()
              });
              gfx.drawRect(pos2, w * progress, h);
            }
          } else {
            try {
              game.camMousePos = game.camMatrix.invert().multVec2(app.mousePos());
              game.trigger('input');
              gameFrame();
              if (debug.inspect) {
                drawInspect();
              }
            } catch (e) {
              logger.error(e.stack);
              app.quit();
            }
            if (debug.showLog) {
              logger.draw();
            }
          }
          gfx.frameEnd();
        });
        function regDebugInput() {
          keyPress('f1', function () {
            debug.inspect = !debug.inspect;
          });
          keyPress('f2', function () {
            debug.clearLog();
          });
          keyPress('f8', function () {
            debug.paused = !debug.paused;
            logger.info("".concat(debug.paused ? 'paused' : 'unpaused'));
          });
          keyPress('f7', function () {
            debug.timeScale = clamp(debug.timeScale - 0.2, 0, 2);
            logger.info("time scale: ".concat(debug.timeScale.toFixed(1)));
          });
          keyPress('f9', function () {
            debug.timeScale = clamp(debug.timeScale + 0.2, 0, 2);
            logger.info("time scale: ".concat(debug.timeScale.toFixed(1)));
          });
          keyPress('f10', function () {
            debug.stepFrame();
            logger.info("stepped frame");
          });
        }
        __name(regDebugInput, 'regDebugInput');
        if (gconf.debug) {
          regDebugInput();
        }
        return ctx;
      };
    }
  });
  return require_kaboom();
}();
var _default = exports.default = kaboom;
},{}],"IEHn":[function(require,module,exports) {
"use strict";

var _kaboom = _interopRequireDefault(require("./kaboom"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import asepritePlugin from 'kaboom/plugins/aseprite';
/* eslint-disable  */
(0, _kaboom.default)({
  global: true,
  fullscreen: true,
  scale: 2,
  clearColor: [0, 0, 0, 1]
});

// // load assets
// loadRoot("/");
loadSprite("guy", "guy.png");
loadSprite("spike", "spike.png");
loadSprite("steel", "steel.png");
loadSprite("prize", "jumpy.png");
loadSprite("apple", "apple.png");
loadSprite("coin", "coin.png");

// // define some constants
var JUMP_FORCE = 320;
var MOVE_SPEED = 120;
var FALL_DEATH = 640;

// define layers, draw "ui" on top, and "game" is the default layer
layers(["game", "ui"], "game");

// camera will ignore "ui" layer
camIgnore(["ui"]);

// add level to scene
var level = addLevel(["           $    ", "  %      ====   ", "                ", "                ", "       ^^       ", "==============="], {
  // TODO: derive grid size from sprite size instead of hardcode
  // grid size
  width: 11,
  height: 11,
  // define each object as a list of components
  "=": [sprite("steel"), solid()],
  "$": [sprite("coin"), "coin"],
  "%": [sprite("prize"), solid(), "prize"],
  "^": [sprite("spike"), area(vec2(0, 6), vec2(11, 11)), "dangerous"],
  "#": [sprite("apple"), "apple"]
});

// add score counter obj
var score = add([text("0"), pos(6, 6), layer("ui"), {
  value: 0
}]);

// define a custom component that handles player grow big logic
function big() {
  var timer = 0;
  var _isBig = false;
  return {
    update: function update() {
      if (_isBig) {
        timer -= dt();
        if (timer <= 0) {
          this.smallify();
        }
      }
    },
    isBig: function isBig() {
      return _isBig;
    },
    smallify: function smallify() {
      this.scale = vec2(1);
      timer = 0;
      _isBig = false;
    },
    biggify: function biggify(time) {
      this.scale = vec2(2);
      timer = time;
      _isBig = true;
    }
  };
}

// define player object
var player = add([sprite("guy"), pos(0, 0), scale(1),
// makes it fall to gravity and jumpable
body(),
// as we defined above
big()]);

// action() runs every frame
player.action(function () {
  // center camera to player
  camPos(player.pos);
  // check fall death
  if (player.pos.y >= FALL_DEATH) {
    go("lose", {
      score: score.value
    });
  }
});

// if player collides with any obj with "dangerous" tag, lose
player.collides("dangerous", function () {
  go("lose", {
    score: score.value
  });
});

// grow an apple if player's head bumps into an obj with "prize" tag
player.on("headbutt", function (obj) {
  if (obj.is("prize")) {
    level.spawn("#", obj.gridPos.sub(0, 1));
  }
});

// player grows big collides with an "apple" obj
player.collides("apple", function (a) {
  destroy(a);
  // as we defined in the big() component
  player.biggify(3);
});

// increase score if meets coin
player.collides("coin", function (c) {
  destroy(c);
  score.value++;
  score.text = score.value;
});

// jump with space
keyPress("space", function () {
  // these 2 functions are provided by body() component
  if (player.grounded()) {
    player.jump(JUMP_FORCE);
  }
});
keyDown("left", function () {
  player.move(-MOVE_SPEED, 0);
});
keyDown("right", function () {
  player.move(MOVE_SPEED, 0);
});
scene("lose", function (_ref) {
  var score = _ref.score;
  add([text("Score: " + score, 24), origin("center"), pos(width() / 2, height() / 2)]);
});
},{"./kaboom":"FuCt"}]},{},["IEHn"], null)
//# sourceMappingURL=game.2302ed32.js.map