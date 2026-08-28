(self["webpackChunkspruha"] = self["webpackChunkspruha"] || []).push([["src_app_components_pages_pages_module_ts"],{

/***/ 50894:
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/coercion.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _isNumberValue: () => (/* binding */ _isNumberValue),
/* harmony export */   coerceArray: () => (/* binding */ coerceArray),
/* harmony export */   coerceBooleanProperty: () => (/* binding */ coerceBooleanProperty),
/* harmony export */   coerceCssPixelValue: () => (/* binding */ coerceCssPixelValue),
/* harmony export */   coerceElement: () => (/* binding */ coerceElement),
/* harmony export */   coerceNumberProperty: () => (/* binding */ coerceNumberProperty),
/* harmony export */   coerceStringArray: () => (/* binding */ coerceStringArray)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);


/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Coerces a data-bound value (typically a string) to a boolean. */
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== 'false';
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function coerceNumberProperty(value, fallbackValue = 0) {
  return _isNumberValue(value) ? Number(value) : fallbackValue;
}
/**
 * Whether the provided value is considered a number.
 * @docs-private
 */
function _isNumberValue(value) {
  // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
  // and other non-number values as NaN, where Number just uses 0) but it considers the string
  // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Coerces a value to a CSS pixel value. */
function coerceCssPixelValue(value) {
  if (value == null) {
    return '';
  }
  return typeof value === 'string' ? value : `${value}px`;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Coerces an ElementRef or an Element into an element.
 * Useful for APIs that can accept either a ref or the native element itself.
 */
function coerceElement(elementOrRef) {
  return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Coerces a value to an array of trimmed non-empty strings.
 * Any input that is not an array, `null` or `undefined` will be turned into a string
 * via `toString()` and subsequently split with the given separator.
 * `null` and `undefined` will result in an empty array.
 * This results in the following outcomes:
 * - `null` -&gt; `[]`
 * - `[null]` -&gt; `["null"]`
 * - `["a", "b ", " "]` -&gt; `["a", "b"]`
 * - `[1, [2, 3]]` -&gt; `["1", "2,3"]`
 * - `[{ a: 0 }]` -&gt; `["[object Object]"]`
 * - `{ a: 0 }` -&gt; `["[object", "Object]"]`
 *
 * Useful for defining CSS classes or table columns.
 * @param value the value to coerce into an array of strings
 * @param separator split-separator if value isn't an array
 */
function coerceStringArray(value, separator = /\s+/) {
  const result = [];
  if (value != null) {
    const sourceValues = Array.isArray(value) ? value : `${value}`.split(separator);
    for (const sourceValue of sourceValues) {
      const trimmedString = `${sourceValue}`.trim();
      if (trimmedString) {
        result.push(trimmedString);
      }
    }
  }
  return result;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/***/ }),

/***/ 25665:
/*!******************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/layout.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreakpointObserver: () => (/* binding */ BreakpointObserver),
/* harmony export */   Breakpoints: () => (/* binding */ Breakpoints),
/* harmony export */   LayoutModule: () => (/* binding */ LayoutModule),
/* harmony export */   MediaMatcher: () => (/* binding */ MediaMatcher)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 50894);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 30240);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 32667);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 70909);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 40803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 74110);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 50112);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 92887);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 13045);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 90749);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 21077);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ 47071);






/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class LayoutModule {}
LayoutModule.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
  args: [{}]
}];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Global registry for all dynamically-created, injected media queries. */
const mediaQueriesForWebkitCompatibility = new Set();
/** Style tag that holds all of the dynamically-created media queries. */
let mediaQueryStyleNode;
/** A utility for calling matchMedia queries. */
class MediaMatcher {
  constructor(_platform) {
    this._platform = _platform;
    this._matchMedia = this._platform.isBrowser && window.matchMedia ?
    // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
    // call it from a different scope.
    window.matchMedia.bind(window) : noopMatchMedia;
  }
  /**
   * Evaluates the given media query and returns the native MediaQueryList from which results
   * can be retrieved.
   * Confirms the layout engine will trigger for the selector query provided and returns the
   * MediaQueryList for the query provided.
   */
  matchMedia(query) {
    if (this._platform.WEBKIT) {
      createEmptyStyleRule(query);
    }
    return this._matchMedia(query);
  }
}
MediaMatcher.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
  factory: function MediaMatcher_Factory() {
    return new MediaMatcher((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform));
  },
  token: MediaMatcher,
  providedIn: "root"
});
MediaMatcher.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
  args: [{
    providedIn: 'root'
  }]
}];
MediaMatcher.ctorParameters = () => [{
  type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform
}];
/**
 * For Webkit engines that only trigger the MediaQueryListListener when
 * there is at least one CSS selector for the respective media query.
 */
function createEmptyStyleRule(query) {
  if (mediaQueriesForWebkitCompatibility.has(query)) {
    return;
  }
  try {
    if (!mediaQueryStyleNode) {
      mediaQueryStyleNode = document.createElement('style');
      mediaQueryStyleNode.setAttribute('type', 'text/css');
      document.head.appendChild(mediaQueryStyleNode);
    }
    if (mediaQueryStyleNode.sheet) {
      mediaQueryStyleNode.sheet.insertRule(`@media ${query} {.fx-query-test{ }}`, 0);
      mediaQueriesForWebkitCompatibility.add(query);
    }
  } catch (e) {
    console.error(e);
  }
}
/** No-op matchMedia replacement for non-browser platforms. */
function noopMatchMedia(query) {
  // Use `as any` here to avoid adding additional necessary properties for
  // the noop matcher.
  return {
    matches: query === 'all' || query === '',
    media: query,
    addListener: () => {},
    removeListener: () => {}
  };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Utility for checking the matching state of @media queries. */
class BreakpointObserver {
  constructor(_mediaMatcher, _zone) {
    this._mediaMatcher = _mediaMatcher;
    this._zone = _zone;
    /**  A map of all media queries currently being listened for. */
    this._queries = new Map();
    /** A subject for all other observables to takeUntil based on. */
    this._destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  /** Completes the active subject, signalling to all other observables to complete. */
  ngOnDestroy() {
    this._destroySubject.next();
    this._destroySubject.complete();
  }
  /**
   * Whether one or more media queries match the current viewport size.
   * @param value One or more media queries to check.
   * @returns Whether any of the media queries match.
   */
  isMatched(value) {
    const queries = splitQueries((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceArray)(value));
    return queries.some(mediaQuery => this._registerQuery(mediaQuery).mql.matches);
  }
  /**
   * Gets an observable of results for the given queries that will emit new results for any changes
   * in matching of the given queries.
   * @param value One or more media queries to check.
   * @returns A stream of matches for the given queries.
   */
  observe(value) {
    const queries = splitQueries((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceArray)(value));
    const observables = queries.map(query => this._registerQuery(query).observable);
    let stateObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)(observables);
    // Emit the first state immediately, and then debounce the subsequent emissions.
    stateObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.concat)(stateObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)), stateObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(0)));
    return stateObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(breakpointStates => {
      const response = {
        matches: false,
        breakpoints: {}
      };
      breakpointStates.forEach(({
        matches,
        query
      }) => {
        response.matches = response.matches || matches;
        response.breakpoints[query] = matches;
      });
      return response;
    }));
  }
  /** Registers a specific query to be listened for. */
  _registerQuery(query) {
    // Only set up a new MediaQueryList if it is not already being listened for.
    if (this._queries.has(query)) {
      return this._queries.get(query);
    }
    const mql = this._mediaMatcher.matchMedia(query);
    // Create callback for match changes and add it is as a listener.
    const queryObservable = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Observable(observer => {
      // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
      // back into the zone because matchMedia is only included in Zone.js by loading the
      // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
      // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
      // patches it.
      const handler = e => this._zone.run(() => observer.next(e));
      mql.addListener(handler);
      return () => {
        mql.removeListener(handler);
      };
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(mql), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(({
      matches
    }) => ({
      query,
      matches
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._destroySubject));
    // Add the MediaQueryList to the set of queries.
    const output = {
      observable: queryObservable,
      mql
    };
    this._queries.set(query, output);
    return output;
  }
}
BreakpointObserver.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
  factory: function BreakpointObserver_Factory() {
    return new BreakpointObserver((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MediaMatcher), (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
  },
  token: BreakpointObserver,
  providedIn: "root"
});
BreakpointObserver.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
  args: [{
    providedIn: 'root'
  }]
}];
BreakpointObserver.ctorParameters = () => [{
  type: MediaMatcher
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
}];
/**
 * Split each query string into separate query strings if two queries are provided as comma
 * separated.
 */
function splitQueries(queries) {
  return queries.map(query => query.split(',')).reduce((a1, a2) => a1.concat(a2)).map(query => query.trim());
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// PascalCase is being used as Breakpoints is used like an enum.
// tslint:disable-next-line:variable-name
const Breakpoints = {
  XSmall: '(max-width: 599.98px)',
  Small: '(min-width: 600px) and (max-width: 959.98px)',
  Medium: '(min-width: 960px) and (max-width: 1279.98px)',
  Large: '(min-width: 1280px) and (max-width: 1919.98px)',
  XLarge: '(min-width: 1920px)',
  Handset: '(max-width: 599.98px) and (orientation: portrait), ' + '(max-width: 959.98px) and (orientation: landscape)',
  Tablet: '(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), ' + '(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)',
  Web: '(min-width: 840px) and (orientation: portrait), ' + '(min-width: 1280px) and (orientation: landscape)',
  HandsetPortrait: '(max-width: 599.98px) and (orientation: portrait)',
  TabletPortrait: '(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)',
  WebPortrait: '(min-width: 840px) and (orientation: portrait)',
  HandsetLandscape: '(max-width: 959.98px) and (orientation: landscape)',
  TabletLandscape: '(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)',
  WebLandscape: '(min-width: 1280px) and (orientation: landscape)'
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 47071:
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/platform.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Platform: () => (/* binding */ Platform),
/* harmony export */   PlatformModule: () => (/* binding */ PlatformModule),
/* harmony export */   _getShadowRoot: () => (/* binding */ _getShadowRoot),
/* harmony export */   _supportsShadowDom: () => (/* binding */ _supportsShadowDom),
/* harmony export */   getRtlScrollAxisType: () => (/* binding */ getRtlScrollAxisType),
/* harmony export */   getSupportedInputTypes: () => (/* binding */ getSupportedInputTypes),
/* harmony export */   normalizePassiveListenerOptions: () => (/* binding */ normalizePassiveListenerOptions),
/* harmony export */   supportsPassiveEventListeners: () => (/* binding */ supportsPassiveEventListeners),
/* harmony export */   supportsScrollBehavior: () => (/* binding */ supportsScrollBehavior)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 89650);



/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
let hasV8BreakIterator;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try {
  hasV8BreakIterator = typeof Intl !== 'undefined' && Intl.v8BreakIterator;
} catch (_a) {
  hasV8BreakIterator = false;
}
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
class Platform {
  constructor(_platformId) {
    this._platformId = _platformId;
    // We want to use the Angular platform check because if the Document is shimmed
    // without the navigator, the following checks will fail. This is preferred because
    // sometimes the Document may be shimmed without the user's knowledge or intention
    /** Whether the Angular application is being rendered in the browser. */
    this.isBrowser = this._platformId ? (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this._platformId) : typeof document === 'object' && !!document;
    /** Whether the current browser is Microsoft Edge. */
    this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    /** Whether the current rendering engine is Microsoft Trident. */
    this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
    // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
    /** Whether the current rendering engine is Blink. */
    this.BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT;
    // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
    // ensure that Webkit runs standalone and is not used as another engine's base.
    /** Whether the current rendering engine is WebKit. */
    this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
    /** Whether the current platform is Apple iOS. */
    this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);
    // It's difficult to detect the plain Gecko engine, because most of the browsers identify
    // them self as Gecko-like browsers and modify the userAgent's according to that.
    // Since we only cover one explicit Firefox case, we can simply check for Firefox
    // instead of having an unstable check for Gecko.
    /** Whether the current browser is Firefox. */
    this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    /** Whether the current platform is Android. */
    // Trident on mobile adds the android platform to the userAgent to trick detections.
    this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
    // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
    // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
    // Safari browser should also use Webkit as its layout engine.
    /** Whether the current browser is Safari. */
    this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
  }
}
Platform.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
  factory: function Platform_Factory() {
    return new Platform((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
  },
  token: Platform,
  providedIn: "root"
});
Platform.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
  args: [{
    providedIn: 'root'
  }]
}];
Platform.ctorParameters = () => [{
  type: Object,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
    args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
  }]
}];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class PlatformModule {}
PlatformModule.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
  args: [{}]
}];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Cached result Set of input types support by the current browser. */
let supportedInputTypes;
/** Types of `<input>` that *might* be supported. */
const candidateInputTypes = [
// `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
// first changing it to something else:
// The specified value "" does not conform to the required format.
// The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
'color', 'button', 'checkbox', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'];
/** @returns The input types supported by this browser. */
function getSupportedInputTypes() {
  // Result is cached.
  if (supportedInputTypes) {
    return supportedInputTypes;
  }
  // We can't check if an input type is not supported until we're on the browser, so say that
  // everything is supported when not on the browser. We don't use `Platform` here since it's
  // just a helper function and can't inject it.
  if (typeof document !== 'object' || !document) {
    supportedInputTypes = new Set(candidateInputTypes);
    return supportedInputTypes;
  }
  let featureTestInput = document.createElement('input');
  supportedInputTypes = new Set(candidateInputTypes.filter(value => {
    featureTestInput.setAttribute('type', value);
    return featureTestInput.type === value;
  }));
  return supportedInputTypes;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Cached result of whether the user's browser supports passive event listeners. */
let supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 */
function supportsPassiveEventListeners() {
  if (supportsPassiveEvents == null && typeof window !== 'undefined') {
    try {
      window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
        get: () => supportsPassiveEvents = true
      }));
    } finally {
      supportsPassiveEvents = supportsPassiveEvents || false;
    }
  }
  return supportsPassiveEvents;
}
/**
 * Normalizes an `AddEventListener` object to something that can be passed
 * to `addEventListener` on any browser, no matter whether it supports the
 * `options` parameter.
 * @param options Object to be normalized.
 */
function normalizePassiveListenerOptions(options) {
  return supportsPassiveEventListeners() ? options : !!options.capture;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Cached result of the way the browser handles the horizontal scroll axis in RTL mode. */
let rtlScrollAxisType;
/** Cached result of the check that indicates whether the browser supports scroll behaviors. */
let scrollBehaviorSupported;
/** Check whether the browser supports scroll behaviors. */
function supportsScrollBehavior() {
  if (scrollBehaviorSupported == null) {
    // If we're not in the browser, it can't be supported. Also check for `Element`, because
    // some projects stub out the global `document` during SSR which can throw us off.
    if (typeof document !== 'object' || !document || typeof Element !== 'function' || !Element) {
      scrollBehaviorSupported = false;
      return scrollBehaviorSupported;
    }
    // If the element can have a `scrollBehavior` style, we can be sure that it's supported.
    if ('scrollBehavior' in document.documentElement.style) {
      scrollBehaviorSupported = true;
    } else {
      // At this point we have 3 possibilities: `scrollTo` isn't supported at all, it's
      // supported but it doesn't handle scroll behavior, or it has been polyfilled.
      const scrollToFunction = Element.prototype.scrollTo;
      if (scrollToFunction) {
        // We can detect if the function has been polyfilled by calling `toString` on it. Native
        // functions are obfuscated using `[native code]`, whereas if it was overwritten we'd get
        // the actual function source. Via https://davidwalsh.name/detect-native-function. Consider
        // polyfilled functions as supporting scroll behavior.
        scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported = false;
      }
    }
  }
  return scrollBehaviorSupported;
}
/**
 * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
 * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
 */
function getRtlScrollAxisType() {
  // We can't check unless we're on the browser. Just assume 'normal' if we're not.
  if (typeof document !== 'object' || !document) {
    return 0 /* NORMAL */;
  }

  if (rtlScrollAxisType == null) {
    // Create a 1px wide scrolling container and a 2px wide content element.
    const scrollContainer = document.createElement('div');
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = 'rtl';
    containerStyle.width = '1px';
    containerStyle.overflow = 'auto';
    containerStyle.visibility = 'hidden';
    containerStyle.pointerEvents = 'none';
    containerStyle.position = 'absolute';
    const content = document.createElement('div');
    const contentStyle = content.style;
    contentStyle.width = '2px';
    contentStyle.height = '1px';
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = 0 /* NORMAL */;
    // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
    // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
    // dealing with one of the other two types of browsers.
    if (scrollContainer.scrollLeft === 0) {
      // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
      // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
      // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
      // return 0 when we read it again.
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? 1 /* NEGATED */ : 2 /* INVERTED */;
    }

    scrollContainer.parentNode.removeChild(scrollContainer);
  }
  return rtlScrollAxisType;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let shadowDomIsSupported;
/** Checks whether the user's browser support Shadow DOM. */
function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    const head = typeof document !== 'undefined' ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }
  return shadowDomIsSupported;
}
/** Gets the shadow root of an element, if supported and the element is inside the Shadow DOM. */
function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    const rootNode = element.getRootNode ? element.getRootNode() : null;
    // Note that this should be caught by `_supportsShadowDom`, but some
    // teams have been able to hit this code path on unsupported browsers.
    if (typeof ShadowRoot !== 'undefined' && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }
  return null;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 78142:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@ks89/angular-modal-gallery/fesm2015/ks89-angular-modal-gallery.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* binding */ Action),
/* harmony export */   AdvancedLayout: () => (/* binding */ AdvancedLayout),
/* harmony export */   ButtonType: () => (/* binding */ ButtonType),
/* harmony export */   ButtonsStrategy: () => (/* binding */ ButtonsStrategy),
/* harmony export */   DescriptionStrategy: () => (/* binding */ DescriptionStrategy),
/* harmony export */   GalleryModule: () => (/* binding */ GalleryModule),
/* harmony export */   GalleryService: () => (/* binding */ GalleryService),
/* harmony export */   GridLayout: () => (/* binding */ GridLayout),
/* harmony export */   Image: () => (/* binding */ Image),
/* harmony export */   ImageEvent: () => (/* binding */ ImageEvent),
/* harmony export */   ImageModalEvent: () => (/* binding */ ImageModalEvent),
/* harmony export */   KS_DEFAULT_ACCESSIBILITY_CONFIG: () => (/* binding */ KS_DEFAULT_ACCESSIBILITY_CONFIG),
/* harmony export */   KS_DEFAULT_BTN_CLOSE: () => (/* binding */ KS_DEFAULT_BTN_CLOSE),
/* harmony export */   KS_DEFAULT_BTN_DELETE: () => (/* binding */ KS_DEFAULT_BTN_DELETE),
/* harmony export */   KS_DEFAULT_BTN_DOWNLOAD: () => (/* binding */ KS_DEFAULT_BTN_DOWNLOAD),
/* harmony export */   KS_DEFAULT_BTN_EXTURL: () => (/* binding */ KS_DEFAULT_BTN_EXTURL),
/* harmony export */   KS_DEFAULT_BTN_FULL_SCREEN: () => (/* binding */ KS_DEFAULT_BTN_FULL_SCREEN),
/* harmony export */   KS_DEFAULT_SIZE: () => (/* binding */ KS_DEFAULT_SIZE),
/* harmony export */   LineLayout: () => (/* binding */ LineLayout),
/* harmony export */   LoadingType: () => (/* binding */ LoadingType),
/* harmony export */   PlainGalleryStrategy: () => (/* binding */ PlainGalleryStrategy),
/* harmony export */   "ɵa": () => (/* binding */ KsHammerGestureConfig),
/* harmony export */   "ɵb": () => (/* binding */ setupKeyboardService),
/* harmony export */   "ɵba": () => (/* binding */ MarginDirective),
/* harmony export */   "ɵbb": () => (/* binding */ MaxSizeDirective),
/* harmony export */   "ɵc": () => (/* binding */ COMPONENTS),
/* harmony export */   "ɵd": () => (/* binding */ ModalGalleryComponent),
/* harmony export */   "ɵe": () => (/* binding */ CarouselComponent),
/* harmony export */   "ɵf": () => (/* binding */ BackgroundComponent),
/* harmony export */   "ɵg": () => (/* binding */ PlainGalleryComponent),
/* harmony export */   "ɵh": () => (/* binding */ CurrentImageComponent),
/* harmony export */   "ɵi": () => (/* binding */ AccessibleComponent),
/* harmony export */   "ɵj": () => (/* binding */ KEYBOARD_CONFIGURATION),
/* harmony export */   "ɵk": () => (/* binding */ KeyboardService),
/* harmony export */   "ɵm": () => (/* binding */ IdValidatorService),
/* harmony export */   "ɵn": () => (/* binding */ CarouselPreviewsComponent),
/* harmony export */   "ɵo": () => (/* binding */ UpperButtonsComponent),
/* harmony export */   "ɵp": () => (/* binding */ DotsComponent),
/* harmony export */   "ɵq": () => (/* binding */ PreviewsComponent),
/* harmony export */   "ɵr": () => (/* binding */ LoadingSpinnerComponent),
/* harmony export */   "ɵs": () => (/* binding */ DIRECTIVES),
/* harmony export */   "ɵt": () => (/* binding */ ClickOutsideDirective),
/* harmony export */   "ɵu": () => (/* binding */ SizeDirective),
/* harmony export */   "ɵv": () => (/* binding */ KeyboardNavigationDirective),
/* harmony export */   "ɵw": () => (/* binding */ WrapDirective),
/* harmony export */   "ɵx": () => (/* binding */ DirectionDirective),
/* harmony export */   "ɵy": () => (/* binding */ ATagBgImageDirective),
/* harmony export */   "ɵz": () => (/* binding */ DescriptionDirective)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 30240);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 49520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 13045);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 37574);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 75162);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 21077);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ 25665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 23380);







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to close the modal gallery clicking on the semi-transparent background.
 * In fact, it listens for a click on all elements that aren't 'inside' and it emits
 * an event using `\@Output clickOutside`.
 */
class ClickOutsideDirective {
  constructor() {
    /**
     * Output to emit an event if the clicked element class doesn't contain 'inside' or it is 'hidden'. The payload is a boolean.
     */
    this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /**
   * Method called by Angular itself every click thanks to `\@HostListener`.
   * @param {?} event
   * @return {?}
   */
  onClick(event) {
    event.stopPropagation();
    /** @type {?} */
    const targetElement = event.target;
    if (!this.clickOutsideEnable || !targetElement) {
      return;
    }
    /** @type {?} */
    let isInside = false;
    /** @type {?} */
    let isHidden = false;
    if (typeof targetElement.className !== 'string') {
      // it happens with @fortawesome/fontawesome 5
      // for some reasons className is an object with 2 empty properties inside
      isInside = true;
    } else {
      // in normal scenarios, use classname, because it's a simple string
      isInside = targetElement.className && targetElement.className.startsWith('inside');
      isHidden = targetElement.className.includes('hidden');
    }
    // if inside => don't close modal gallery
    // if hidden => close modal gallery
    /*
        i i' h | close
        0 1  0 |   1 => close modal gallery
        0 1  1 |   1 => close modal gallery
        1 0  0 |   0
        1 0  1 |   1 => close modal gallery
     */
    if (!isInside || isHidden) {
      // close modal gallery
      this.clickOutside.emit(true);
    }
  }
}
ClickOutsideDirective.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
  args: [{
    selector: '[ksClickOutside]'
  }]
}];
ClickOutsideDirective.propDecorators = {
  clickOutsideEnable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  clickOutside: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  onClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
    args: ['click', ['$event']]
  }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to change the size of an element.
 */
class SizeDirective {
  /**
   * @param {?} renderer
   * @param {?} el
   */
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
  }
  /**
   * Method ´ngOnInit´ to apply the style of this directive.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   * @return {?}
   */
  ngOnInit() {
    this.applyStyle();
  }
  /**
   * Method ´ngOnChanges´ to apply the style of this directive.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   * @return {?}
   */
  ngOnChanges() {
    this.applyStyle();
  }
  /**
   * Private method to change both width and height of an element.
   * @private
   * @return {?}
   */
  applyStyle() {
    if (!this.sizeConfig) {
      return;
    }
    // apply [style.width]
    this.renderer.setStyle(this.el.nativeElement, 'width', this.sizeConfig.width);
    this.renderer.setStyle(this.el.nativeElement, 'height', this.sizeConfig.height);
  }
}
SizeDirective.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
  args: [{
    selector: '[ksSize]'
  }]
}];
/** @nocollapse */
SizeDirective.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
}];
SizeDirective.propDecorators = {
  sizeConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class KeyboardNavigationDirective {
  constructor() {
    this.keyPress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /**
   * Listener to catch keyboard's events and call the right method based on the key.
   * For instance, pressing esc, this will call `closeGallery(Action.KEYBOARD)` and so on.
   * If you passed a valid `keyboardConfig` esc, right and left buttons will be customized based on your data.
   * @param {?} e KeyboardEvent caught by the listener.
   * @return {?}
   */
  onKeyDown(e) {
    if (!this.isOpen) {
      return;
    }
    this.keyPress.emit(e.keyCode);
  }
}
KeyboardNavigationDirective.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
  args: [{
    selector: '[ksKeyboardNavigation]'
  }]
}];
KeyboardNavigationDirective.propDecorators = {
  isOpen: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  keyPress: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  onKeyDown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
    args: ['window:keydown', ['$event']]
  }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to change the flex-wrap css property of an element.
 */
class WrapDirective {
  /**
   * @param {?} renderer
   * @param {?} el
   */
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
  }
  /**
   * Method ´ngOnInit´ to apply the style of this directive.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   * @return {?}
   */
  ngOnInit() {
    this.applyStyle();
  }
  /**
   * Method ´ngOnChanges´ to apply the style of this directive.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   * @return {?}
   */
  ngOnChanges() {
    this.applyStyle();
  }
  /**
   * Private method to change both widht and flex-wrap css properties.
   * @private
   * @return {?}
   */
  applyStyle() {
    // TODO is this right???? If wrap os false I cannot apply width and flex-wrap
    if (!this.wrap) {
      return;
    }
    this.renderer.setStyle(this.el.nativeElement, 'width', this.width);
    this.renderer.setStyle(this.el.nativeElement, 'flex-wrap', this.wrap ? 'wrap' : 'nowrap');
  }
}
WrapDirective.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
  args: [{
    selector: '[ksWrap]'
  }]
}];
/** @nocollapse */
WrapDirective.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
}];
WrapDirective.propDecorators = {
  wrap: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  width: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to change the flex-direction of an element, based on two inputs (`direction` and `justify`).
 */
class DirectionDirective {
  /**
   * @param {?} renderer
   * @param {?} el
   */
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
  }
  /**
   * Method ´ngOnInit´ to apply the style of this directive.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   * @return {?}
   */
  ngOnInit() {
    this.applyStyle();
  }
  /**
   * Method ´ngOnChanges´ to apply the style of this directive.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   * @return {?}
   */
  ngOnChanges() {
    this.applyStyle();
  }
  /**
   * Private method to change both direction and justify of an element.
   * @private
   * @return {?}
   */
  applyStyle() {
    if (!this.direction || !this.justify) {
      return;
    }
    this.renderer.setStyle(this.el.nativeElement, 'flex-direction', this.direction);
    this.renderer.setStyle(this.el.nativeElement, 'justify-content', this.justify);
  }
}
DirectionDirective.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
  args: [{
    selector: '[ksDirection]'
  }]
}];
/** @nocollapse */
DirectionDirective.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
}];
DirectionDirective.propDecorators = {
  direction: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  justify: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 The MIT License (MIT)

 Copyright (c) 2017-2018 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Class `Image` that represents an image with both `modal` and `plain` configurations.
 * Both image `id` and `modal` are mandatory, instead `plain` is optional.
 */
class Image {
  /**
   * @param {?} id
   * @param {?} modal
   * @param {?=} plain
   */
  constructor(id, modal, plain) {
    this.id = id;
    this.modal = modal;
    this.plain = plain;
  }
}
/**
 * Class `ImageEvent` that represents the event payload with the result and the triggered action.
 */
class ImageEvent {
  /**
   * @param {?} action
   * @param {?} result
   */
  constructor(action, result) {
    this.action = action;
    this.result = result;
  }
}
/**
 * Class `ImageModalEvent` that represents the event payload with the result and the triggered action.
 */
class ImageModalEvent extends ImageEvent {
  /**
   * @param {?} action
   * @param {?} result
   */
  constructor(action, result) {
    super(action, result);
  }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to add an image to an `<a>` tag with some additional custom properties.
 */
class ATagBgImageDirective {
  /**
   * @param {?} renderer
   * @param {?} el
   */
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
  }
  /**
   * Method ´ngOnInit´ to apply the style of this directive.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   * @return {?}
   */
  ngOnInit() {
    this.applyStyle();
  }
  /**
   * Method ´ngOnChanges´ to apply the style of this directive.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   * @return {?}
   */
  ngOnChanges() {
    this.applyStyle();
  }
  /**
   * Private method to add an image as background of an `<a>` tag.
   * @private
   * @return {?}
   */
  applyStyle() {
    if (!this.image || !this.image.plain && !this.image.modal) {
      return;
    }
    /** @type {?} */
    const imgPath = this.image.plain && this.image.plain.img ? this.image.plain.img : this.image.modal.img;
    this.renderer.setStyle(this.el.nativeElement, 'background', `url("${imgPath}") ${this.style}`);
  }
}
ATagBgImageDirective.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
  args: [{
    selector: '[ksATagBgImage]'
  }]
}];
/** @nocollapse */
ATagBgImageDirective.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
}];
ATagBgImageDirective.propDecorators = {
  image: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  style: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to customize the description.
 */
class DescriptionDirective {
  /**
   * @param {?} renderer
   * @param {?} el
   */
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
  }
  /**
   * Method ´ngOnInit´ to apply the style of this directive.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   * @return {?}
   */
  ngOnInit() {
    this.applyStyle();
  }
  /**
   * Method ´ngOnChanges´ to apply the style of this directive.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   * @return {?}
   */
  ngOnChanges() {
    this.applyStyle();
  }
  /**
   * Private method to change description's style.
   * @private
   * @return {?}
   */
  applyStyle() {
    if (!this.description) {
      return;
    }
    if (this.description.style) {
      this.renderer.setStyle(this.el.nativeElement, 'background', this.description.style.bgColor);
      this.renderer.setStyle(this.el.nativeElement, 'color', this.description.style.textColor);
      if (this.description.style.width) {
        this.renderer.setStyle(this.el.nativeElement, 'width', this.description.style.width);
      }
      if (this.description.style.height) {
        this.renderer.setStyle(this.el.nativeElement, 'height', this.description.style.height);
      }
      if (this.description.style.position) {
        this.renderer.setStyle(this.el.nativeElement, 'position', this.description.style.position);
      }
      if (this.description.style.top) {
        this.renderer.setStyle(this.el.nativeElement, 'top', this.description.style.top);
      }
      if (this.description.style.bottom) {
        this.renderer.setStyle(this.el.nativeElement, 'bottom', this.description.style.bottom);
      }
      if (this.description.style.left) {
        this.renderer.setStyle(this.el.nativeElement, 'left', this.description.style.left);
      }
      if (this.description.style.right) {
        this.renderer.setStyle(this.el.nativeElement, 'right', this.description.style.right);
      }
      this.renderer.setStyle(this.el.nativeElement, 'margin-top', this.description.style.marginTop ? this.description.style.marginTop : '0px');
      this.renderer.setStyle(this.el.nativeElement, 'margin-bottom', this.description.style.marginBottom ? this.description.style.marginBottom : '0px');
      this.renderer.setStyle(this.el.nativeElement, 'margin-left', this.description.style.marginLeft ? this.description.style.marginLeft : '0px');
      this.renderer.setStyle(this.el.nativeElement, 'margin-right', this.description.style.marginRight ? this.description.style.marginRight : '0px');
    }
  }
}
DescriptionDirective.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
  args: [{
    selector: '[ksDescription]'
  }]
}];
/** @nocollapse */
DescriptionDirective.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
}];
DescriptionDirective.propDecorators = {
  description: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to change margins of an element.
 */
class MarginDirective {
  /**
   * @param {?} renderer
   * @param {?} el
   */
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
  }
  /**
   * Method ´ngOnInit´ to apply the style of this directive.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   * @return {?}
   */
  ngOnInit() {
    this.applyStyle();
  }
  /**
   * Method ´ngOnChanges´ to apply the style of this directive.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   * @return {?}
   */
  ngOnChanges() {
    this.applyStyle();
  }
  /**
   * Private method to change both width and height of an element.
   * @private
   * @return {?}
   */
  applyStyle() {
    if (this.marginLeft) {
      this.renderer.setStyle(this.el.nativeElement, 'margin-left', this.marginLeft);
    }
    if (this.marginRight) {
      this.renderer.setStyle(this.el.nativeElement, 'margin-right', this.marginRight);
    }
    if (this.marginTop) {
      this.renderer.setStyle(this.el.nativeElement, 'margin-top', this.marginTop);
    }
    if (this.marginBottom) {
      this.renderer.setStyle(this.el.nativeElement, 'margin-bottom', this.marginBottom);
    }
  }
}
MarginDirective.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
  args: [{
    selector: '[ksMargin]'
  }]
}];
/** @nocollapse */
MarginDirective.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
}];
MarginDirective.propDecorators = {
  marginLeft: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  marginRight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  marginTop: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  marginBottom: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to change the max size of an element.
 */
class MaxSizeDirective {
  /**
   * @param {?} renderer
   * @param {?} el
   */
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
  }
  /**
   * Method ´ngOnInit´ to apply the style of this directive.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   * @return {?}
   */
  ngOnInit() {
    this.applyStyle();
  }
  /**
   * Method ´ngOnChanges´ to apply the style of this directive.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   * @return {?}
   */
  ngOnChanges() {
    this.applyStyle();
  }
  /**
   * Private method to change both max-width and max-height of an element.
   * @private
   * @return {?}
   */
  applyStyle() {
    if (!this.sizeConfig) {
      return;
    }
    if (this.sizeConfig.maxWidth) {
      this.renderer.setStyle(this.el.nativeElement, 'max-width', this.sizeConfig.maxWidth);
    }
    if (this.sizeConfig.maxHeight) {
      this.renderer.setStyle(this.el.nativeElement, 'max-height', this.sizeConfig.maxHeight);
    }
  }
}
MaxSizeDirective.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
  args: [{
    selector: '[ksMaxSize]'
  }]
}];
/** @nocollapse */
MaxSizeDirective.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
}];
MaxSizeDirective.propDecorators = {
  sizeConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Array of all directives.
 * @type {?}
 */
const DIRECTIVES = [ClickOutsideDirective, SizeDirective, KeyboardNavigationDirective, WrapDirective, DirectionDirective, ATagBgImageDirective, DescriptionDirective, MarginDirective, MaxSizeDirective];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component with the semi-transparent background.
 */
class BackgroundComponent {}
BackgroundComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
  args: [{
    selector: 'ks-background',
    template: "<div class=\"ng-overlay\" *ngIf=\"isOpen\"\n     [attr.aria-label]=\"accessibilityConfig?.backgroundAriaLabel\"\n     [title]=\"accessibilityConfig?.backgroundTitle\"></div>\n",
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
    styles: [".ng-overlay{position:fixed;top:0;left:0;width:100vw;height:100vh;background:#000;opacity:.8;z-index:9999}"]
  }]
}];
BackgroundComponent.propDecorators = {
  isOpen: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  accessibilityConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 The MIT License (MIT)

 Copyright (c) 2017-2018 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/** @enum {number} */
const Action = {
  NORMAL: 0,
  CLICK: 1,
  KEYBOARD: 2,
  SWIPE: 3,
  LOAD: 4,
  AUTOPLAY: 5
};
Action[Action.NORMAL] = 'NORMAL';
Action[Action.CLICK] = 'CLICK';
Action[Action.KEYBOARD] = 'KEYBOARD';
Action[Action.SWIPE] = 'SWIPE';
Action[Action.LOAD] = 'LOAD';
Action[Action.AUTOPLAY] = 'AUTOPLAY';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const KEYBOARD_CONFIGURATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('KEYBOARD_CONFIGURATION');
/**
 * Service to intercept ctrl+s (or cmd+s on macOS) using a third-party library, called Mousetrap.
 */
class KeyboardService {
  /**
   * Constructor of `KeyboardService` to init `mousetrap` and `shortcuts` private variables.
   * @param {?} config
   */
  constructor(config) {
    // this.config is always defined, because forced by forRoot inside the module
    // when empty, it's simply an empty object: {}
    this.config = config;
    this.shortcuts = this.config && this.config.shortcuts ? this.config.shortcuts : ['ctrl+s', 'meta+s'];
    // temporary workaround to fix this issue: https://github.com/Ks89/angular-modal-gallery/issues/142
    if (this.config && !this.config.disableSsrWorkaround) {
      // To prevent issues with angular-universal on server-side
      if (typeof window !== 'undefined') {
        __webpack_require__(/*! mousetrap */ 99882);
        this.mousetrap = new /** @type {?} */Mousetrap();
      }
    }
  }
  /**
   * Method to add a lister for ctrl+s/cmd+s keyboard events.
   * @param {?} onBind
   * @return {?}
   */
  add(onBind) {
    // temporary workaround to fix this issue: https://github.com/Ks89/angular-modal-gallery/issues/142
    if (this.config && !this.config.disableSsrWorkaround) {
      // To prevent issues with angular-universal on server-side
      if (typeof window !== 'undefined') {
        this.mousetrap.bind(this.shortcuts,
        /**
        * @param {?} event
        * @param {?} combo
        * @return {?}
        */
        (event, combo) => {
          if (event.preventDefault) {
            event.preventDefault();
          } else {
            // internet explorer
            event.returnValue = false;
          }
          onBind(event, combo);
        });
      }
    }
  }
  /**
   * Method to reset all listeners. Please, call this function when needed
   * to free resources ad prevent leaks.
   * @return {?}
   */
  reset() {
    // temporary workaround to fix this issue: https://github.com/Ks89/angular-modal-gallery/issues/142
    if (this.config && !this.config.disableSsrWorkaround) {
      // To prevent issues with angular-universal on server-side
      if (typeof window !== 'undefined') {
        this.mousetrap.reset();
      }
    }
  }
}
KeyboardService.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
}];
/** @nocollapse */
KeyboardService.ctorParameters = () => [{
  type: undefined,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
    args: [KEYBOARD_CONFIGURATION]
  }]
}];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Service to call methods on a gallery by its galleryId.
 */
class GalleryService {
  constructor() {
    this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.autoPlay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /**
   * Method to open the modal gallery with the galleryId passed as parameter.
   * It will automatically shows the image at position index.
   * @throws a error with a message if galleryId is either undefined, < 0 or index is < 0
   * @param {?} galleryId number or undefined that represents the unique id of the gallery.
   * @param {?} index number of the image that you want to open.
   * @return {?}
   */
  openGallery(galleryId, index) {
    if (galleryId === undefined || galleryId < 0 || index < 0) {
      throw new Error('Cannot open gallery via GalleryService with either index<0 or galleryId<0 or galleryId===undefined');
    }
    this.navigate.emit({
      galleryId: galleryId,
      index: index
    });
  }
  /**
   * Method to navigate to a specific index of the modal gallery with the galleryId passed as parameter.
   * At the moment, it's like openGallery, but in upcoming releases it will change the behaviour.
   * @throws a error with a message if galleryId is either undefined, < 0 or index is < 0
   * @param {?} galleryId number or undefined that represents the unique id of the gallery.
   * @param {?} index number of the image that you want to open.
   * @return {?}
   */
  navigateGallery(galleryId, index) {
    if (galleryId === undefined || galleryId < 0 || index < 0) {
      throw new Error('Cannot navigate via GalleryService with either index<0 or galleryId<0 or galleryId===undefined');
    }
    this.navigate.emit({
      galleryId: galleryId,
      index: index
    });
  }
  /**
   * Method to close the modal gallery with the galleryId passed as parameter.
   * @throws a error with a message if galleryId is either undefined or < 0
   * @param {?} galleryId number or undefined that represents the unique id of the gallery.
   * @return {?}
   */
  closeGallery(galleryId) {
    if (galleryId === undefined || galleryId < 0) {
      throw new Error('Cannot close gallery via GalleryService with galleryId<0 or galleryId===undefined');
    }
    this.close.emit(galleryId);
  }
  /**
   * Service to update an image with a new object
   * @throws a error with a message if galleryId is either undefined, < 0 or index is < 0
   *
   * \@since 6.3.0
   * @param {?} galleryId number or undefined that represents the unique id of the gallery.
   * @param {?} index number of the image that you want to update.
   * @param {?} image
   * @return {?}
   */
  updateGallery(galleryId, index, image) {
    if (galleryId === undefined || galleryId < 0 || index < 0) {
      throw new Error('Cannot update gallery via GalleryService with either index<0 or galleryId<0 or galleryId===undefined');
    }
    if (!image) {
      throw new Error('Cannot update gallery via GalleryService, because image is not valid');
    }
    this.update.emit({
      galleryId: galleryId,
      index: index,
      image: image
    });
  }
  /**
   * Service to play modal-gallery
   * @throws a error with a message if galleryId is either undefined or < 0
   *
   * \@since 7.2.0
   * @param {?} galleryId number or undefined that represents the unique id of the gallery.
   * @return {?}
   */
  play(galleryId) {
    if (galleryId === undefined || galleryId < 0) {
      throw new Error('Cannot play gallery via GalleryService with galleryId<0 or galleryId===undefined');
    }
    this.autoPlay.emit({
      galleryId: galleryId,
      result: true
    });
  }
  /**
   * Service to stop modal-gallery
   * @throws a error with a message if galleryId is either undefined or < 0
   *
   * \@since 7.2.0
   * @param {?} galleryId number or undefined that represents the unique id of the gallery.
   * @return {?}
   */
  stop(galleryId) {
    if (galleryId === undefined || galleryId < 0) {
      throw new Error('Cannot stop gallery via GalleryService with galleryId<0 or galleryId===undefined');
    }
    this.autoPlay.emit({
      galleryId: galleryId,
      result: false
    });
  }
}
GalleryService.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
  args: [{
    providedIn: 'root'
  }]
}];
/** @nocollapse */
GalleryService.ngInjectableDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.defineInjectable)({
  factory: function GalleryService_Factory() {
    return new GalleryService();
  },
  token: GalleryService,
  providedIn: "root"
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Code of the keyboard's key `enter`
 * @type {?}
 */
const ENTER_CODE = 'Enter';
/**
 * Code of the keyboard's key `space`
 * @type {?}
 */
const SPACE_CODE = 'Space';
/**
 * KeyCode of the main mouse button
 * @type {?}
 */
const MOUSE_MAIN_BUTTON_CLICK = 0;
/**
 * Const NEXT
 * @type {?}
 */
const NEXT = 1;
/**
 * Const PREV
 * @type {?}
 */
const PREV = -1;
/**
 * Const NOTHING to represents a situation when it isn't both NEXT and PREV
 * @type {?}
 */
const NOTHING = 0;
/**
 * Const to represent the right direction
 * @type {?}
 */
const DIRECTION_RIGHT = 'right';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Provides some useful methods to add accessibility features to subclasses.
 * In particular, it exposes a method to handle navigation event with both Keyboard and Mouse
 * and another with also the direction (right or left).
 */
class AccessibleComponent {
  constructor() {}
  /**
   * Method to handle navigation events with both Keyboard and Mouse.
   * @param {?} direction
   * @param {?} event
   * @return {?} number -1 for PREV, 1 for NEXT and 0 for NOTHING
   */
  handleNavigationEvent(direction, event) {
    if (!event) {
      return NOTHING;
    }
    if (event instanceof KeyboardEvent) {
      return this.handleKeyboardNavigationEvent(direction, event);
    } else if (event instanceof MouseEvent) {
      return this.handleMouseNavigationEvent(direction, event);
    }
    return NOTHING;
  }
  /**
   * Method to handle events over an image, for instance a keypress with the Keyboard or a Mouse click.
   * @param {?} event
   * @return {?} number 1 for NEXT and 0 for NOTHING
   */
  handleImageEvent(event) {
    if (!event) {
      return NOTHING;
    }
    if (event instanceof KeyboardEvent) {
      return this.handleImageKeyboardEvent(event);
    } else if (event instanceof MouseEvent) {
      return this.handleImageMouseEvent(event);
    }
    return NOTHING;
  }
  /**
   * Private method to handle keyboard events over an image.
   * @private
   * @param {?} event
   * @return {?} number 1 for NEXT and 0 for NOTHING
   */
  handleImageKeyboardEvent(event) {
    /** @type {?} */
    const key = event.code;
    if (key === SPACE_CODE || key === ENTER_CODE) {
      return NEXT;
    }
    return NOTHING;
  }
  /**
   * Private method to handle mouse events over an image.
   * @private
   * @param {?} event
   * @return {?} number 1 for NEXT and 0 for NOTHING
   */
  handleImageMouseEvent(event) {
    /** @type {?} */
    const mouseBtn = event.button;
    if (mouseBtn === MOUSE_MAIN_BUTTON_CLICK) {
      return NEXT;
    }
    return NOTHING;
  }
  /**
   * Method to handle events over an image, for instance a keypress with the Keyboard or a Mouse click.
   * @private
   * @param {?} direction
   * @param {?} event
   * @return {?} number -1 for PREV, 1 for NEXT and 0 for NOTHING
   */
  handleKeyboardNavigationEvent(direction, event) {
    /** @type {?} */
    const key = event.code;
    if (key === SPACE_CODE || key === ENTER_CODE) {
      return direction === DIRECTION_RIGHT ? NEXT : PREV;
    }
    return NOTHING;
  }
  /**
   * Method to handle events over an image, for instance a keypress with the Keyboard or a Mouse click.
   * @private
   * @param {?} direction
   * @param {?} event
   * @return {?} number -1 for PREV, 1 for NEXT and 0 for NOTHING
   */
  handleMouseNavigationEvent(direction, event) {
    /** @type {?} */
    const mouseBtn = event.button;
    if (mouseBtn === MOUSE_MAIN_BUTTON_CLICK) {
      return direction === DIRECTION_RIGHT ? NEXT : PREV;
    }
    return NOTHING;
  }
}
AccessibleComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
  args: [{
    selector: 'ks-accessible',
    template: ``,
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
  }]
}];
/** @nocollapse */
AccessibleComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const DescriptionStrategy = {
  ALWAYS_HIDDEN: 1,
  ALWAYS_VISIBLE: 2,
  HIDE_IF_EMPTY: 3
};
DescriptionStrategy[DescriptionStrategy.ALWAYS_HIDDEN] = 'ALWAYS_HIDDEN';
DescriptionStrategy[DescriptionStrategy.ALWAYS_VISIBLE] = 'ALWAYS_VISIBLE';
DescriptionStrategy[DescriptionStrategy.HIDE_IF_EMPTY] = 'HIDE_IF_EMPTY';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 The MIT License (MIT)

 Copyright (c) 2017-2018 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/** @enum {number} */
const Keyboard = {
  ESC: 27,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39,
  UP_ARROW: 38,
  DOWN_ARROW: 40
};
Keyboard[Keyboard.ESC] = 'ESC';
Keyboard[Keyboard.LEFT_ARROW] = 'LEFT_ARROW';
Keyboard[Keyboard.RIGHT_ARROW] = 'RIGHT_ARROW';
Keyboard[Keyboard.UP_ARROW] = 'UP_ARROW';
Keyboard[Keyboard.DOWN_ARROW] = 'DOWN_ARROW';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const LoadingType = {
  STANDARD: 1,
  CIRCULAR: 2,
  BARS: 3,
  DOTS: 4,
  CUBE_FLIPPING: 5,
  CIRCLES: 6,
  EXPLOSING_SQUARES: 7
};
LoadingType[LoadingType.STANDARD] = 'STANDARD';
LoadingType[LoadingType.CIRCULAR] = 'CIRCULAR';
LoadingType[LoadingType.BARS] = 'BARS';
LoadingType[LoadingType.DOTS] = 'DOTS';
LoadingType[LoadingType.CUBE_FLIPPING] = 'CUBE_FLIPPING';
LoadingType[LoadingType.CIRCLES] = 'CIRCLES';
LoadingType[LoadingType.EXPLOSING_SQUARES] = 'EXPLOSING_SQUARES';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 The MIT License (MIT)

 Copyright (c) 2017-2018 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Utility function to get the index of the input `image` from `arrayOfImages`
 * @throws an Error if either image or arrayOfImages are not valid,
 *  or if the input image doesn't contain an 'id', or the 'id' is < 0
 * @param {?} image
 * @param {?} arrayOfImages
 * @return {?} number the index of the image. -1 if not found.
 */
function getIndex(image, arrayOfImages) {
  if (!image) {
    throw new Error('image must be a valid Image object');
  }
  if (!arrayOfImages) {
    throw new Error('arrayOfImages must be a valid Image[]');
  }
  if (!image.id && image.id !== 0) {
    // id = 0 is admitted
    throw new Error(`A numeric Image 'id' is mandatory`);
  }
  if (image.id < 0) {
    throw new Error(`Image 'id' must be >= 0`);
  }
  return arrayOfImages.findIndex(
  /**
  * @param {?} val
  * @return {?}
  */
  val => val.id === image.id);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component with the current image with some additional elements like arrows and side previews.
 */
class CurrentImageComponent extends AccessibleComponent {
  /**
   * @param {?} _platformId
   * @param {?} _ngZone
   * @param {?} ref
   */
  constructor(_platformId, _ngZone, ref) {
    super();
    this._platformId = _platformId;
    this._ngZone = _ngZone;
    this.ref = ref;
    /**
     * Output to emit an event when images are loaded. The payload contains an `ImageLoadEvent`.
     */
    this.loadImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Output to emit any changes of the current image. The payload contains an `ImageModalEvent`.
     */
    this.changeImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Output to emit an event when the modal gallery is closed. The payload contains an `ImageModalEvent`.
     */
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Subject to play modal-gallery.
     */
    this.start$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Subject to stop modal-gallery.
     */
    this.stop$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Enum of type `Action` that represents a normal action.
     * Declared here to be used inside the template.
     */
    this.normalAction = Action.NORMAL;
    /**
     * Enum of type `Action` that represents a mouse click on a button.
     * Declared here to be used inside the template.
     */
    this.clickAction = Action.CLICK;
    /**
     * Enum of type `Action` that represents a keyboard action.
     * Declared here to be used inside the template.
     */
    this.keyboardAction = Action.KEYBOARD;
    /**
     * Boolean that it's true when you are watching the first image (currently visible).
     * False by default
     */
    this.isFirstImage = false;
    /**
     * Boolean that it's true when you are watching the last image (currently visible).
     * False by default
     */
    this.isLastImage = false;
    /**
     * Boolean that it's true if an image of the modal gallery is still loading.
     * True by default
     */
    this.loading = true;
    /**
     * Private object without type to define all swipe actions used by hammerjs.
     */
    this.SWIPE_ACTION = {
      LEFT: 'swipeleft',
      RIGHT: 'swiperight',
      UP: 'swipeup',
      DOWN: 'swipedown'
    };
  }
  /**
   * Listener to stop the gallery when the mouse pointer is over the current image.
   * @return {?}
   */
  onMouseEnter() {
    // if carousel feature is disable, don't do anything in any case
    if (!this.configSlide || !this.configSlide.playConfig) {
      return;
    }
    if (!this.configSlide.playConfig.pauseOnHover) {
      return;
    }
    this.stopCarousel();
  }
  /**
   * Listener to play the gallery when the mouse pointer leave the current image.
   * @return {?}
   */
  onMouseLeave() {
    // if carousel feature is disable, don't do anything in any case
    if (!this.configSlide || !this.configSlide.playConfig) {
      return;
    }
    if (!this.configSlide.playConfig.pauseOnHover || !this.configSlide.playConfig.autoPlay) {
      return;
    }
    this.playCarousel();
  }
  /**
   * Method ´ngOnInit´ to build `configCurrentImage` applying default values.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   * @return {?}
   */
  ngOnInit() {
    /** @type {?} */
    const defaultLoading = {
      enable: true,
      type: LoadingType.STANDARD
    };
    /** @type {?} */
    const defaultDescriptionStyle = {
      bgColor: 'rgba(0, 0, 0, .5)',
      textColor: 'white',
      marginTop: '0px',
      marginBottom: '0px',
      marginLeft: '0px',
      marginRight: '0px'
    };
    /** @type {?} */
    const defaultDescription = {
      strategy: DescriptionStrategy.ALWAYS_VISIBLE,
      imageText: 'Image ',
      numberSeparator: '/',
      beforeTextDescription: ' - ',
      style: defaultDescriptionStyle
    };
    /** @type {?} */
    const defaultCurrentImageConfig = {
      navigateOnClick: true,
      loadingConfig: defaultLoading,
      description: defaultDescription,
      downloadable: false,
      invertSwipe: false
    };
    this.configCurrentImage = Object.assign({}, defaultCurrentImageConfig, this.currentImageConfig);
    this.configCurrentImage.description = Object.assign({}, defaultDescription, this.configCurrentImage.description);
    this.configSlide = Object.assign({}, this.slideConfig);
  }
  /**
   * Method ´ngOnChanges´ to update `loading` status and emit events.
   * If the gallery is open, then it will also manage boundary arrows and sliding.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   * @param {?} changes
   * @return {?}
   */
  ngOnChanges(changes) {
    /** @type {?} */
    const images = changes.images;
    /** @type {?} */
    const currentImage = changes.currentImage;
    if (currentImage && currentImage.previousValue !== currentImage.currentValue) {
      this.updateIndexes();
    } else if (images && images.previousValue !== images.currentValue) {
      this.updateIndexes();
    }
    /** @type {?} */
    const slideConfig = changes.slideConfig;
    if (slideConfig && slideConfig.previousValue !== slideConfig.currentValue) {
      this.configSlide = Object.assign({}, this.slideConfig);
    }
  }
  /**
   * @return {?}
   */
  ngAfterContentInit() {
    // interval doesn't play well with SSR and protractor,
    // so we should run it in the browser and outside Angular
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this._platformId)) {
      this._ngZone.runOutsideAngular(
      /**
      * @return {?}
      */
      () => {
        this.start$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(
        /**
        * @return {?}
        */
        () => this.configSlide && this.configSlide.playConfig && this.configSlide.playConfig.autoPlay && this.configSlide.playConfig.interval), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(
        /**
        * @param {?} interval
        * @return {?}
        */
        interval => interval > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(
        /**
        * @param {?} interval
        * @return {?}
        */
        interval => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.timer)(interval).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.stop$)))).subscribe(
        /**
        * @return {?}
        */
        () => this._ngZone.run(
        /**
        * @return {?}
        */
        () => {
          if (!this.isLastImage) {
            this.nextImage(Action.AUTOPLAY);
          }
          this.ref.markForCheck();
        }));
        this.start$.next();
      });
    }
  }
  /**
   * Method to handle keypress based on the `keyboardConfig` input. It gets the keyCode of
   * the key that triggered the keypress event to navigate between images or to close the modal gallery.
   * @param {?} keyCode
   * @return {?}
   */
  onKeyPress(keyCode) {
    /** @type {?} */
    const esc = this.keyboardConfig && this.keyboardConfig.esc ? this.keyboardConfig.esc : Keyboard.ESC;
    /** @type {?} */
    const right = this.keyboardConfig && this.keyboardConfig.right ? this.keyboardConfig.right : Keyboard.RIGHT_ARROW;
    /** @type {?} */
    const left = this.keyboardConfig && this.keyboardConfig.left ? this.keyboardConfig.left : Keyboard.LEFT_ARROW;
    switch (keyCode) {
      case esc:
        this.close.emit(new ImageModalEvent(Action.KEYBOARD, true));
        break;
      case right:
        this.nextImage(Action.KEYBOARD);
        break;
      case left:
        this.prevImage(Action.KEYBOARD);
        break;
    }
  }
  /**
   * Method to get the image description based on input params.
   * If you provide a full description this will be the visible description, otherwise,
   * it will be built using the `Description` object, concatenating its fields.
   * @throws an Error if description isn't available
   * @param {?=} image
   * @return {?} String description of the image (or the current image if not provided)
   */
  getDescriptionToDisplay(image = this.currentImage) {
    if (!this.configCurrentImage || !this.configCurrentImage.description) {
      throw new Error('Description input must be a valid object implementing the Description interface');
    }
    /** @type {?} */
    const imageWithoutDescription = !image.modal || !image.modal.description || image.modal.description === '';
    switch (this.configCurrentImage.description.strategy) {
      case DescriptionStrategy.HIDE_IF_EMPTY:
        return imageWithoutDescription ? '' : image.modal.description + '';
      case DescriptionStrategy.ALWAYS_HIDDEN:
        return '';
      default:
        // ----------- DescriptionStrategy.ALWAYS_VISIBLE -----------------
        return this.buildTextDescription(image, imageWithoutDescription);
    }
  }
  /**
   * Method to get `alt attribute`.
   * `alt` specifies an alternate text for an image, if the image cannot be displayed.
   * @param {?=} image
   * @return {?} String alt description of the image (or the current image if not provided)
   */
  getAltDescriptionByImage(image = this.currentImage) {
    if (!image) {
      return '';
    }
    return image.modal && image.modal.description ? image.modal.description : `Image ${getIndex(image, this.images) + 1}`;
  }
  /**
   * Method to get the title attributes based on descriptions.
   * This is useful to prevent accessibility issues, because if DescriptionStrategy is ALWAYS_HIDDEN,
   * it prevents an empty string as title.
   * @throws an Error if description isn't available
   * @param {?=} image
   * @return {?} String title of the image based on descriptions
   */
  getTitleToDisplay(image = this.currentImage) {
    if (!this.configCurrentImage || !this.configCurrentImage.description) {
      throw new Error('Description input must be a valid object implementing the Description interface');
    }
    /** @type {?} */
    const imageWithoutDescription = !image.modal || !image.modal.description || image.modal.description === '';
    /** @type {?} */
    const description = this.buildTextDescription(image, imageWithoutDescription);
    return description;
  }
  /**
   * Method to get the left side preview image.
   * @return {?} Image the image to show as size preview on the left
   */
  getLeftPreviewImage() {
    /** @type {?} */
    const currentIndex = getIndex(this.currentImage, this.images);
    if (currentIndex === 0 && this.configSlide.infinite) {
      // the current image is the first one,
      // so the previous one is the last image
      // because infinite is true
      return this.images[this.images.length - 1];
    }
    this.handleBoundaries(currentIndex);
    return this.images[Math.max(currentIndex - 1, 0)];
  }
  /**
   * Method to get the right side preview image.
   * @return {?} Image the image to show as size preview on the right
   */
  getRightPreviewImage() {
    /** @type {?} */
    const currentIndex = getIndex(this.currentImage, this.images);
    if (currentIndex === this.images.length - 1 && this.configSlide.infinite) {
      // the current image is the last one,
      // so the next one is the first image
      // because infinite is true
      return this.images[0];
    }
    this.handleBoundaries(currentIndex);
    return this.images[Math.min(currentIndex + 1, this.images.length - 1)];
  }
  /**
   * Method called by events from both keyboard and mouse on an image.
   * This will invoke the nextImage method.
   * @param {?} event
   * @param {?=} action
   * @return {?}
   */
  onImageEvent(event, action = Action.NORMAL) {
    // check if triggered by a mouse click
    // If yes, It should block navigation when navigateOnClick is false
    if (action === Action.CLICK && !this.configCurrentImage.navigateOnClick) {
      // a user has requested to block navigation via configCurrentImage.navigateOnClick property
      return;
    }
    /** @type {?} */
    const result = super.handleImageEvent(event);
    if (result === NEXT) {
      this.nextImage(action);
    }
  }
  /**
   * Method called by events from both keyboard and mouse on a navigation arrow.
   * @param {?} direction
   * @param {?} event
   * @param {?=} action
   * @param {?=} disable
   * @return {?}
   */
  onNavigationEvent(direction, event, action = Action.NORMAL, disable = false) {
    if (disable) {
      return;
    }
    /** @type {?} */
    const result = super.handleNavigationEvent(direction, event);
    if (result === NEXT) {
      this.nextImage(action);
    } else if (result === PREV) {
      this.prevImage(action);
    }
  }
  /**
   * Method to go back to the previous image.
   * @param {?=} action Enum of type `Action` that represents the source
   *  action that moved back to the previous image. `Action.NORMAL` by default.
   * @return {?}
   */
  prevImage(action = Action.NORMAL) {
    // check if prevImage should be blocked
    if (this.isPreventSliding(0)) {
      return;
    }
    /** @type {?} */
    const prevImage = this.getPrevImage();
    this.loading = !prevImage.previouslyLoaded;
    this.changeImage.emit(new ImageModalEvent(action, getIndex(prevImage, this.images)));
    this.start$.next();
  }
  /**
   * Method to go back to the previous image.
   * @param {?=} action Enum of type `Action` that represents the source
   *  action that moved to the next image. `Action.NORMAL` by default.
   * @return {?}
   */
  nextImage(action = Action.NORMAL) {
    // check if nextImage should be blocked
    if (this.isPreventSliding(this.images.length - 1)) {
      return;
    }
    /** @type {?} */
    const nextImage = this.getNextImage();
    this.loading = !nextImage.previouslyLoaded;
    this.changeImage.emit(new ImageModalEvent(action, getIndex(nextImage, this.images)));
    this.start$.next();
  }
  /**
   * Method to emit an event as loadImage output to say that the requested image if loaded.
   * This method is invoked by the javascript's 'load' event on an img tag.
   * @param {?} event
   * @return {?}
   */
  onImageLoad(event) {
    /** @type {?} */
    const loadImageData = {
      status: true,
      index: getIndex(this.currentImage, this.images),
      id: this.currentImage.id
    };
    this.loadImage.emit(loadImageData);
    this.loading = false;
  }
  /**
   * Method used by Hammerjs to support touch gestures (you can also invert the swipe direction with configCurrentImage.invertSwipe).
   * @param {?=} action String that represent the direction of the swipe action. 'swiperight' by default.
   * @return {?}
   */
  swipe(action = this.SWIPE_ACTION.RIGHT) {
    switch (action) {
      case this.SWIPE_ACTION.RIGHT:
        if (this.configCurrentImage.invertSwipe) {
          this.prevImage(Action.SWIPE);
        } else {
          this.nextImage(Action.SWIPE);
        }
        break;
      case this.SWIPE_ACTION.LEFT:
        if (this.configCurrentImage.invertSwipe) {
          this.nextImage(Action.SWIPE);
        } else {
          this.prevImage(Action.SWIPE);
        }
        break;
      // case this.SWIPE_ACTION.UP:
      //   break;
      // case this.SWIPE_ACTION.DOWN:
      //   break;
    }
  }
  /**
   * Method used in `modal-gallery.component` to get the index of an image to delete.
   * @param {?=} image
   * @return {?} number the index of the image
   */
  getIndexToDelete(image = this.currentImage) {
    return getIndex(image, this.images);
  }
  /**
   * Method to play modal gallery.
   * @return {?}
   */
  playCarousel() {
    this.start$.next();
  }
  /**
   * Stops modal gallery from cycling through items.
   * @return {?}
   */
  stopCarousel() {
    this.stop$.next();
  }
  /**
   * Method to cleanup resources. In fact, this will stop the modal gallery.
   * This is an Angular's lifecycle hook that is called when this component is destroyed.
   * @return {?}
   */
  ngOnDestroy() {
    this.stopCarousel();
  }
  /**
   * Private method to update both `isFirstImage` and `isLastImage` based on
   * the index of the current image.
   * @private
   * @param {?} currentIndex
   * @return {?}
   */
  handleBoundaries(currentIndex) {
    if (this.images.length === 1) {
      this.isFirstImage = true;
      this.isLastImage = true;
      return;
    }
    if (!this.configSlide || this.configSlide.infinite === true) {
      // infinite sliding enabled
      this.isFirstImage = false;
      this.isLastImage = false;
    } else {
      switch (currentIndex) {
        case 0:
          // execute this only if infinite sliding is disabled
          this.isFirstImage = true;
          this.isLastImage = false;
          break;
        case this.images.length - 1:
          // execute this only if infinite sliding is disabled
          this.isFirstImage = false;
          this.isLastImage = true;
          break;
        default:
          this.isFirstImage = false;
          this.isLastImage = false;
          break;
      }
    }
  }
  /**
   * Private method to check if next/prev actions should be blocked.
   * It checks if configSlide.infinite === false and if the image index is equals to the input parameter.
   * If yes, it returns true to say that sliding should be blocked, otherwise not.
   * @private
   * @param {?} boundaryIndex
   * @return {?} boolean true if configSlide.infinite === false and the current index is
   *  either the first or the last one.
   */
  isPreventSliding(boundaryIndex) {
    return !!this.configSlide && this.configSlide.infinite === false && getIndex(this.currentImage, this.images) === boundaryIndex;
  }
  /**
   * Private method to get the next index.
   * This is necessary because at the end, when you call next again, you'll go to the first image.
   * That happens because all modal images are shown like in a circle.
   * @private
   * @return {?}
   */
  getNextImage() {
    /** @type {?} */
    const currentIndex = getIndex(this.currentImage, this.images);
    /** @type {?} */
    let newIndex = 0;
    if (currentIndex >= 0 && currentIndex < this.images.length - 1) {
      newIndex = currentIndex + 1;
    } else {
      newIndex = 0; // start from the first index
    }

    return this.images[newIndex];
  }
  /**
   * Private method to get the previous index.
   * This is necessary because at index 0, when you call prev again, you'll go to the last image.
   * That happens because all modal images are shown like in a circle.
   * @private
   * @return {?}
   */
  getPrevImage() {
    /** @type {?} */
    const currentIndex = getIndex(this.currentImage, this.images);
    /** @type {?} */
    let newIndex = 0;
    if (currentIndex > 0 && currentIndex <= this.images.length - 1) {
      newIndex = currentIndex - 1;
    } else {
      newIndex = this.images.length - 1; // start from the last index
    }

    return this.images[newIndex];
  }
  /**
   * Private method to build a text description.
   * This is used also to create titles.
   * @private
   * @param {?} image
   * @param {?} imageWithoutDescription
   * @return {?} String description built concatenating image fields with a specific logic.
   */
  buildTextDescription(image, imageWithoutDescription) {
    if (!this.configCurrentImage || !this.configCurrentImage.description) {
      throw new Error('Description input must be a valid object implementing the Description interface');
    }
    // If customFullDescription use it, otherwise proceed to build a description
    if (this.configCurrentImage.description.customFullDescription && this.configCurrentImage.description.customFullDescription !== '') {
      return this.configCurrentImage.description.customFullDescription;
    }
    /** @type {?} */
    const currentIndex = getIndex(image, this.images);
    // If the current image hasn't a description,
    // prevent to write the ' - ' (or this.description.beforeTextDescription)
    /** @type {?} */
    const prevDescription = this.configCurrentImage.description.imageText ? this.configCurrentImage.description.imageText : '';
    /** @type {?} */
    const midSeparator = this.configCurrentImage.description.numberSeparator ? this.configCurrentImage.description.numberSeparator : '';
    /** @type {?} */
    const middleDescription = currentIndex + 1 + midSeparator + this.images.length;
    if (imageWithoutDescription) {
      return prevDescription + middleDescription;
    }
    /** @type {?} */
    const currImgDescription = image.modal && image.modal.description ? image.modal.description : '';
    /** @type {?} */
    const endDescription = this.configCurrentImage.description.beforeTextDescription + currImgDescription;
    return prevDescription + middleDescription + endDescription;
  }
  /**
   * Private method to call handleBoundaries when ngOnChanges is called.
   * @private
   * @return {?}
   */
  updateIndexes() {
    /** @type {?} */
    let index;
    try {
      index = getIndex(this.currentImage, this.images);
    } catch (err) {
      console.error('Cannot get the current image index in current-image');
      throw err;
    }
    if (this.isOpen) {
      this.handleBoundaries(index);
    }
  }
}
CurrentImageComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
  args: [{
    selector: 'ks-current-image',
    template: "<main class=\"main-image-container\"\n      ksKeyboardNavigation [isOpen]=\"isOpen\" (keyPress)=\"onKeyPress($event)\"\n      [attr.aria-label]=\"accessibilityConfig.mainContainerAriaLabel\"\n      [title]=\"accessibilityConfig.mainContainerTitle\">\n\n  <div class=\"left-sub-container\">\n    <a class=\"nav-left {{isFirstImage ? 'no-pointer' : ''}}\"\n       [attr.aria-label]=\"accessibilityConfig.mainPrevImageAriaLabel\"\n       [tabindex]=\"isFirstImage ? -1 : 0\" role=\"button\"\n       (click)=\"onNavigationEvent('left', $event, normalAction, isFirstImage)\" (keyup)=\"onNavigationEvent('left', $event, normalAction, isFirstImage)\">\n      <div class=\"inside {{isFirstImage ? 'empty-arrow-image' : 'left-arrow-image'}}\"\n           aria-hidden=\"true\"\n           [title]=\"isFirstImage ? '' : accessibilityConfig.mainPrevImageTitle\"></div>\n    </a>\n\n    <ng-container *ngIf=\"configSlide?.sidePreviews?.show\">\n      <ng-container *ngIf=\"getLeftPreviewImage() as leftPreview\">\n        <img *ngIf=\"!isFirstImage; else firstImage\"\n             class=\"inside current-image-previous\"\n             [src]=\"leftPreview.plain?.img ? leftPreview.plain.img : leftPreview.modal.img\"\n             [hidden]=\"loading\"\n             ksSize [sizeConfig]=\"{width: configSlide.sidePreviews?.size.width, height: configSlide.sidePreviews?.size.height}\"\n             [attr.aria-label]=\"leftPreview.modal.ariaLabel\"\n             [title]=\"leftPreview.modal.title ? leftPreview.modal.title : getDescriptionToDisplay(leftPreview)\"\n             alt=\"{{leftPreview.modal.alt ? leftPreview.modal.alt : getAltDescriptionByImage(leftPreview)}}\"\n             [tabindex]=\"0\" role=\"img\"\n             (click)=\"onNavigationEvent('left', $event, clickAction)\" (keyup)=\"onNavigationEvent('left', $event, keyboardAction)\"/>\n        <ng-template #firstImage>\n          <div class=\"current-image-previous hidden\"\n               ksSize [sizeConfig]=\"{width: configSlide.sidePreviews?.size.width, height: configSlide.sidePreviews?.size.height}\"></div>\n        </ng-template>\n      </ng-container>\n    </ng-container>\n  </div>\n\n\n  <figure id=\"current-figure\" [style.display]=\"loading ? 'none' : ''\">\n    <img id=\"current-image\"\n         class=\"inside\"\n         [ngClass]=\"'rotate' + (currentImage.modal && currentImage.modal.angle ? currentImage.modal.angle : '0')\"\n         [src]=\"currentImage.modal.img\"\n         [attr.aria-label]=\"currentImage.modal.ariaLabel\"\n         [title]=\"currentImage.modal.title ? currentImage.modal.title : getTitleToDisplay()\"\n         alt=\"{{currentImage.modal.alt ? currentImage.modal.alt : getAltDescriptionByImage()}}\"\n         [tabindex]=\"0\" role=\"img\"\n         (load)=\"onImageLoad($event)\"\n         (click)=\"onImageEvent($event, clickAction)\" (keyup)=\"onImageEvent($event, keyboardAction)\"\n         (swipeleft)=\"swipe($event.type)\"\n         (swiperight)=\"swipe($event.type)\"/>\n    <figcaption *ngIf=\"getDescriptionToDisplay() !== ''\"\n                class=\"inside description\"\n                ksDescription [description]=\"configCurrentImage?.description\"\n                [innerHTML]=\"getDescriptionToDisplay()\">\n    </figcaption>\n  </figure>\n\n  <div class=\"right-sub-container\">\n    <ng-container *ngIf=\"slideConfig?.sidePreviews?.show\">\n      <ng-container *ngIf=\"getRightPreviewImage() as rightPreview\">\n        <img *ngIf=\"!isLastImage; else lastImage\"\n             class=\"inside current-image-next\"\n             [src]=\"rightPreview.plain?.img ? rightPreview.plain.img : rightPreview.modal.img\"\n             [hidden]=\"loading\"\n             ksSize [sizeConfig]=\"{width: slideConfig.sidePreviews?.size.width, height: slideConfig.sidePreviews?.size.height}\"\n             [attr.aria-label]=\"rightPreview.modal.ariaLabel\"\n             [title]=\"rightPreview.modal.title ? rightPreview.modal.title : getDescriptionToDisplay(rightPreview)\"\n             alt=\"{{rightPreview.modal.alt ? rightPreview.modal.alt : getAltDescriptionByImage(rightPreview)}}\"\n             [tabindex]=\"0\" role=\"img\"\n             (click)=\"onNavigationEvent('right', $event, clickAction)\" (keyup)=\"onNavigationEvent('right', $event, keyboardAction)\"/>\n        <ng-template #lastImage>\n          <div class=\"current-image-next hidden\"\n               ksSize [sizeConfig]=\"{width: slideConfig.sidePreviews?.size.width, height: slideConfig.sidePreviews?.size.height}\">\n          </div>\n        </ng-template>\n      </ng-container>\n    </ng-container>\n\n    <ng-container *ngIf=\"loading && configCurrentImage?.loadingConfig?.enable\">\n      <ks-loading-spinner [loadingConfig]=\"configCurrentImage?.loadingConfig\"\n                          [accessibilityConfig]=\"accessibilityConfig\"></ks-loading-spinner>\n    </ng-container>\n\n    <a class=\"nav-right {{isFirstImage ? 'no-pointer' : ''}}\"\n       [attr.aria-label]=\"accessibilityConfig.mainNextImageAriaLabel\"\n       [tabindex]=\"isLastImage ? -1 : 0\" role=\"button\"\n       (click)=\"onNavigationEvent('right', $event, normalAction, isLastImage)\" (keyup)=\"onNavigationEvent('right', $event, normalAction, isLastImage)\">\n      <div class=\"inside {{isLastImage ? 'empty-arrow-image' : 'right-arrow-image'}}\"\n           aria-hidden=\"true\"\n           [title]=\"isLastImage ? '' : accessibilityConfig.mainNextImageTitle\"></div>\n    </a>\n  </div>\n</main>\n",
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
    styles: [":host{display:flex;flex-direction:column;justify-content:center}.main-image-container{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.main-image-container .nav,.main-image-container>.left-sub-container>.nav-left,.main-image-container>.right-sub-container>.nav-right{-webkit-animation:1s animatezoom;animation:1s animatezoom;cursor:pointer;transition:.5s}.main-image-container .nav:hover,.main-image-container>.left-sub-container>.nav-left:hover,.main-image-container>.right-sub-container>.nav-right:hover{transform:scale(1.1)}.main-image-container>.left-sub-container{display:flex;flex-direction:row;justify-content:space-around;align-items:center}.main-image-container>.left-sub-container>.nav-left{margin-right:5px;margin-left:15px}.main-image-container>.left-sub-container>.nav-left.no-pointer{cursor:default!important}.main-image-container>.right-sub-container{display:flex;flex-direction:row;justify-content:space-around;align-items:center}.main-image-container>.right-sub-container>.nav-right{margin-right:15px;margin-left:5px}.main-image-container>.right-sub-container>.nav-right.no-pointer{cursor:default!important}.main-image-container #current-figure{-webkit-animation:.8s fadein-visible;animation:.8s fadein-visible;text-align:center;margin:0;position:relative}.main-image-container #current-figure>#current-image{max-width:100%;height:auto;display:block}.main-image-container #current-figure figcaption{padding:10px;position:absolute;bottom:0;left:0;right:0}.main-image-container #current-figure figcaption .description{font-weight:700;text-align:center}#current-image{height:auto;max-width:80vw;max-height:60vh;cursor:pointer}@media screen and (min-width:70vw){#current-image{max-width:70vw}}@-webkit-keyframes fadein-visible{from{opacity:0}to{opacity:1}}@keyframes fadein-visible{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@-webkit-keyframes fadein-semi-visible08{from{opacity:0}to{opacity:.8}}@keyframes fadein-semi-visible08{from{opacity:0}to{opacity:.8}}@-webkit-keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}@keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}", ".arrow-image,.empty-arrow-image,.left-arrow-image,.right-arrow-image{width:30px;height:30px;background-size:30px}.empty-arrow-image{background:#000;opacity:0}.left-arrow-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:.5s}.left-arrow-image:hover{transform:scale(1.2)}.right-arrow-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:.5s}.right-arrow-image:hover{transform:scale(1.2)}", "@media only screen and (max-width:1024px),only screen and (max-device-width:1024px){.current-image-next,.current-image-previous{display:none}}@media only screen and (min-device-width:1025px){.current-image-next,.current-image-preview,.current-image-previous{height:auto;cursor:pointer;opacity:.5;-webkit-animation:.8s fadein-semi-visible05;animation:.8s fadein-semi-visible05}.current-image-next:hover,.current-image-preview:hover,.current-image-previous:hover{opacity:1;transition:.5s}.current-image-previous{margin-left:10px;margin-right:5px}.current-image-next{margin-right:10px;margin-left:5px}}@-webkit-keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}"]
  }]
}];
/** @nocollapse */
CurrentImageComponent.ctorParameters = () => [{
  type: undefined,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
    args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
  }]
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
}];
CurrentImageComponent.propDecorators = {
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  currentImage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  images: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  isOpen: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  currentImageConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  slideConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  accessibilityConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  keyboardConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  loadImage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  changeImage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  close: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  onMouseEnter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
    args: ['mouseenter']
  }],
  onMouseLeave: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
    args: ['mouseleave']
  }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Class `LineLayout` to configure a linear plain gallery.
 */
class LineLayout {
  /**
   * @param {?} size
   * @param {?} breakConfig
   * @param {?} justify
   */
  constructor(size, breakConfig, justify) {
    this.size = size;
    this.breakConfig = breakConfig;
    this.justify = justify;
  }
}
/**
 * Class `GridLayout` to configure a grid plain gallery.
 */
class GridLayout {
  /**
   * @param {?} size
   * @param {?} breakConfig
   */
  constructor(size, breakConfig) {
    this.size = size;
    this.breakConfig = breakConfig;
  }
}
/**
 * Class `AdvancedLayout` to configure a fully custom plain gallery.
 */
class AdvancedLayout {
  /**
   * @param {?} modalOpenerByIndex
   * @param {?} hideDefaultPlainGallery
   */
  constructor(modalOpenerByIndex, hideDefaultPlainGallery) {
    this.modalOpenerByIndex = modalOpenerByIndex;
    this.hideDefaultPlainGallery = hideDefaultPlainGallery;
  }
}
/** @enum {number} */
const PlainGalleryStrategy = {
  // don't use 0 here
  // the first index is 1 and all of the following members are auto-incremented from that point on
  ROW: 1,
  COLUMN: 2,
  GRID: 3,
  CUSTOM: 4 // full custom strategy
};

PlainGalleryStrategy[PlainGalleryStrategy.ROW] = 'ROW';
PlainGalleryStrategy[PlainGalleryStrategy.COLUMN] = 'COLUMN';
PlainGalleryStrategy[PlainGalleryStrategy.GRID] = 'GRID';
PlainGalleryStrategy[PlainGalleryStrategy.CUSTOM] = 'CUSTOM';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default accessibility configuration.
 * @type {?}
 */
const KS_DEFAULT_ACCESSIBILITY_CONFIG = {
  backgroundAriaLabel: 'Modal gallery full screen background',
  backgroundTitle: '',
  plainGalleryContentAriaLabel: 'Plain gallery content',
  plainGalleryContentTitle: '',
  modalGalleryContentAriaLabel: 'Modal gallery content',
  modalGalleryContentTitle: '',
  loadingSpinnerAriaLabel: 'The current image is loading. Please be patient.',
  loadingSpinnerTitle: 'The current image is loading. Please be patient.',
  mainContainerAriaLabel: 'Current image and navigation',
  mainContainerTitle: '',
  mainPrevImageAriaLabel: 'Previous image',
  mainPrevImageTitle: 'Previous image',
  mainNextImageAriaLabel: 'Next image',
  mainNextImageTitle: 'Next image',
  dotsContainerAriaLabel: 'Image navigation dots',
  dotsContainerTitle: '',
  dotAriaLabel: 'Navigate to image number',
  previewsContainerAriaLabel: 'Image previews',
  previewsContainerTitle: '',
  previewScrollPrevAriaLabel: 'Scroll previous previews',
  previewScrollPrevTitle: 'Scroll previous previews',
  previewScrollNextAriaLabel: 'Scroll next previews',
  previewScrollNextTitle: 'Scroll next previews',
  carouselContainerAriaLabel: 'Current image and navigation',
  carouselContainerTitle: '',
  carouselPrevImageAriaLabel: 'Previous image',
  carouselPrevImageTitle: 'Previous image',
  carouselNextImageAriaLabel: 'Next image',
  carouselNextImageTitle: 'Next image',
  carouselPreviewsContainerAriaLabel: 'Image previews',
  carouselPreviewsContainerTitle: '',
  carouselPreviewScrollPrevAriaLabel: 'Scroll previous previews',
  carouselPreviewScrollPrevTitle: 'Scroll previous previews',
  carouselPreviewScrollNextAriaLabel: 'Scroll next previews',
  carouselPreviewScrollNextTitle: 'Scroll next previews'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Service to check if the provided id is unique
 */
class IdValidatorService {
  constructor() {
    this.ids = new Map();
  }
  /**
   * Method to check and reserve an id for the current instance of the library.
   * In this way, no other instances can use the same id.
   * @throws a error with a message if galleryId is neither unique, < 0 or an integer
   * @param {?} galleryId number or undefined that represents the unique id of the gallery.
   * @return {?} boolean true if success. false is never returned, instead an exception is thrown
   */
  checkAndAdd(galleryId) {
    if (!Number.isInteger(galleryId) || galleryId < 0) {
      throw new Error('You must provide a valid [id]="unique integer > 0 here" to the gallery/carousel in your template');
    }
    if (this.ids.get(galleryId)) {
      throw new Error(`Cannot create gallery with id=${galleryId} because already used in your application. This must be a unique integer >= 0`);
    }
    this.ids.set(galleryId, galleryId);
    return true;
  }
  /**
   * Method to remove a reserved id. In this way you are able to use the id again for another instance of the library.
   * @throws a error with a message if galleryId is neither integer or < 0
   * @param {?} galleryId number or undefined that represents the unique id of the gallery.
   * @return {?} boolean true if success. false is never returned, instead an exception is thrown
   */
  remove(galleryId) {
    if (!Number.isInteger(galleryId) || galleryId < 0) {
      throw new Error('You must provide a valid [id]="unique integer > 0 here" to the gallery/carousel in your template');
    }
    // if (this.ids.find(id => id === galleryId)) {
    //   throw new Error(`Cannot create gallery with id=${galleryId} because already used in your application. This must be a unique number >= 0.`);
    // }
    this.ids.delete(galleryId);
    return true;
  }
}
IdValidatorService.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
  args: [{
    providedIn: 'root'
  }]
}];
/** @nocollapse */
IdValidatorService.ngInjectableDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.defineInjectable)({
  factory: function IdValidatorService_Factory() {
    return new IdValidatorService();
  },
  token: IdValidatorService,
  providedIn: "root"
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Main Component of this library with both the plain and modal galleries.
 */
class ModalGalleryComponent {
  /**
   * Constructor with the injection of ´KeyboardService´, an object to support Server-Side Rendering and other useful services.
   * @param {?} keyboardService
   * @param {?} galleryService
   * @param {?} platformId
   * @param {?} changeDetectorRef
   * @param {?} idValidatorService
   */
  constructor(keyboardService, galleryService, platformId, changeDetectorRef, idValidatorService) {
    this.keyboardService = keyboardService;
    this.galleryService = galleryService;
    this.platformId = platformId;
    this.changeDetectorRef = changeDetectorRef;
    this.idValidatorService = idValidatorService;
    /**
     * Boolean to enable modal-gallery close behaviour when clicking
     * on the semi-transparent background. Enabled by default.
     */
    this.enableCloseOutside = true;
    /**
     * Object of type `AccessibilityConfig` to init custom accessibility features.
     * For instance, it contains titles, alt texts, aria-labels and so on.
     */
    this.accessibilityConfig = KS_DEFAULT_ACCESSIBILITY_CONFIG;
    /**
     * Output to emit an event when the modal gallery is closed.
     */
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Output to emit an event when an image is changed.
     */
    this.show = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Output to emit an event when the current image is the first one.
     */
    this.firstImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Output to emit an event when the current image is the last one.
     */
    this.lastImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Output to emit an event when the modal gallery is closed.
     */
    this.hasData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Output to emit an event when a button is clicked, but before that the action is triggered.
     */
    this.buttonBeforeHook = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Output to emit an event when a button is clicked, but after that the action is triggered.
     */
    this.buttonAfterHook = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Output to emit an event when someone clicks either an arrow of modal gallery or also in previews.
     */
    this.arrow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Boolean that it is true if the modal gallery is visible. False by default.
     */
    this.opened = false;
    /**
     * Boolean to open the modal gallery. False by default.
     */
    this.showGallery = false;
  }
  /**
   * HostListener to catch browser's back button and destroy the gallery.
   * This prevents weired behaviour about scrolling.
   * Added to fix this issue: https://github.com/Ks89/angular-modal-gallery/issues/159
   * @param {?} e
   * @return {?}
   */
  onPopState(e) {
    this.closeGallery();
  }
  /**
   * Method ´ngOnChanges´ to re-init images if input is changed.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called before `ngOnInit()` and whenever one or more data-bound input properties change.
   * @param {?} changes `SimpleChanges` object of current and previous property values provided by Angular.
   * @return {?}
   */
  ngOnChanges(changes) {
    /** @type {?} */
    const imagesChange = changes.modalImages;
    /** @type {?} */
    const plainGalleryConfigChange = changes.plainGalleryConfig;
    if (imagesChange && !imagesChange.firstChange && imagesChange.previousValue !== imagesChange.currentValue) {
      this.initImages();
    }
    if (plainGalleryConfigChange) {
      // const prevPlainGalleryConfigChange: any = plainGalleryConfigChange.previousValue;
      /** @type {?} */
      const currPlainGalleryConfigChange = plainGalleryConfigChange.currentValue;
      if (currPlainGalleryConfigChange.layout && currPlainGalleryConfigChange.layout instanceof AdvancedLayout && currPlainGalleryConfigChange.layout.modalOpenerByIndex !== -1) {
        // console.log('opening modal gallery from custom plain gallery, index: ', currPlainGalleryConfigChange);
        this.showModalGallery(currPlainGalleryConfigChange.layout.modalOpenerByIndex);
      }
    }
  }
  /**
   * Method ´ngOnInit´ to init images calling `initImages()`.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   * @return {?}
   */
  ngOnInit() {
    this.idValidatorService.checkAndAdd(this.id);
    // id is a mandatory input and must a number > 0
    if (!this.id && this.id !== 0 || this.id < 0) {
      throw new Error(`'[id]="a number >= 0"' is a mandatory input from 6.0.0 in angular-modal-gallery.` + `If you are using multiple instances of this library, please be sure to use different ids`);
    }
    // call initImages to init images and to emit `hasData` event
    this.initImages();
    /** @type {?} */
    const defaultSlideConfig = {
      infinite: false,
      playConfig: /** @type {?} */{
        autoPlay: false,
        interval: 5000,
        pauseOnHover: true
      },
      sidePreviews: /** @type {?} */{
        show: true,
        size: {
          width: '100px',
          height: 'auto'
        }
      }
    };
    this.configSlide = Object.assign({}, defaultSlideConfig, this.slideConfig);
    this.galleryServiceNavigateSubscription = this.galleryService.navigate.subscribe(
    /**
    * @param {?} payload
    * @return {?}
    */
    payload => {
      if (!payload) {
        return;
      }
      // if galleryId is not valid OR galleryId is related to another instance and not this one
      if (payload.galleryId === undefined || payload.galleryId < 0 || payload.galleryId !== this.id) {
        return;
      }
      // if image index is not valid
      if (payload.index < 0 || payload.index > this.images.length) {
        return;
      }
      this.showModalGallery(payload.index, true);
    });
    this.galleryServiceCloseSubscription = this.galleryService.close.subscribe(
    /**
    * @param {?} galleryId
    * @return {?}
    */
    galleryId => {
      if (galleryId < 0 || this.id !== galleryId) {
        return;
      }
      this.closeGallery(Action.NORMAL, true);
    });
    this.galleryServiceUpdateSubscription = this.galleryService.update.subscribe(
    /**
    * @param {?} payload
    * @return {?}
    */
    payload => {
      if (!payload) {
        return;
      }
      // if galleryId is not valid OR galleryId is related to another instance and not this one
      if (payload.galleryId === undefined || payload.galleryId < 0 || payload.galleryId !== this.id) {
        return;
      }
      // if either image index or image are not valid
      if (payload.index < 0 || payload.index > this.images.length || !payload.image) {
        return;
      }
      /** @type {?} */
      const currentIndex = getIndex(payload.image, this.images);
      this.images = this.images.map(
      /**
      * @param {?} image
      * @param {?} index
      * @return {?}
      */
      (image, index) => {
        if (image.id === payload.index) {
          return (/** @type {?} */payload.image
          );
        }
        return image;
      });
      if (currentIndex === payload.index) {
        this.currentImage = this.images[payload.index];
      }
      this.changeDetectorRef.markForCheck();
    });
    this.galleryServiceAutoPlaySubscription = this.galleryService.autoPlay.subscribe(
    /**
    * @param {?} payload
    * @return {?}
    */
    payload => {
      // if galleryId is not valid OR galleryId is related to another instance and not this one
      if (payload.galleryId === undefined || payload.galleryId < 0 || payload.galleryId !== this.id) {
        return;
      }
      this.configSlide.playConfig.autoPlay = payload.result;
    });
  }
  /**
   * Method called by custom upper buttons.
   * @param {?} event
   * @return {?}
   */
  onCustomEmit(event) {
    /** @type {?} */
    const eventToEmit = this.getButtonEventToEmit(event);
    this.buttonBeforeHook.emit(eventToEmit);
    // console.log('on onCustomEmit', eventToEmit);
    this.buttonAfterHook.emit(eventToEmit);
  }
  // TODO implement on refresh
  // /**
  //  * Method called by the refresh upper button.
  //  * STILL NOT IMPLEMENTED, SO DON'T USE IT
  //  * @param ButtonEvent event payload
  //  */
  // onRefresh(event: ButtonEvent) {
  //   const eventToEmit: ButtonEvent = this.getButtonEventToEmit(event);
  //
  //   this.buttonBeforeHook.emit(eventToEmit);
  //   // console.log('TODO implement on refresh inside the library', eventToEmit);
  //
  //   this.currentImage = Object.assign({}, this.currentImage, { previouslyLoaded: false });
  //
  //   // TODO add logic to hide and show the current image
  //
  //   // console.log('onRefresh', this.currentImage);
  //
  //   // const indexNum: number = this.currentImageComponent.getIndex();
  //
  //   // this.images = this.images.map((val: InternalLibImage, index: number) => {
  //   //   if (index !== 2) {
  //   //     return val;
  //   //   } else {
  //   //     const img: InternalLibImage = Object.assign({}, val, {previouslyLoaded: false});
  //   //     return img;
  //   //   }
  //   // });
  //   //
  //   // this.closeGallery();
  //   // this.showModalGallery(2);
  //
  //   this.buttonAfterHook.emit(eventToEmit);
  // }
  // /**
  //  * Method called by the rotate upper button.
  //  * @param ButtonEvent event payload
  //  */
  // onRotate(event: ButtonEvent) {
  //   const eventToEmit: ButtonEvent = this.getButtonEventToEmit(event);
  //   this.buttonBeforeHook.emit(eventToEmit);
  //
  //   // TODO implement rotation logic
  //
  //   this.buttonAfterHook.emit(eventToEmit);
  // }
  /**
   * Method called by the full-screen upper button.
   * @param {?} event
   * @return {?}
   */
  onFullScreen(event) {
    /** @type {?} */
    const eventToEmit = this.getButtonEventToEmit(event);
    this.buttonBeforeHook.emit(eventToEmit);
    /** @type {?} */
    const doc = /** @type {?} */document;
    /** @type {?} */
    const docEl = /** @type {?} */document.documentElement;
    /** @type {?} */
    const fullscreenDisabled = !doc.fullscreenElement && !doc.webkitFullscreenElement && !doc.mozFullScreenElement && !doc.msFullscreenElement;
    if (fullscreenDisabled) {
      if (docEl.requestFullscreen) {
        docEl.requestFullscreen();
      } else if (docEl.webkitRequestFullscreen) {
        docEl.webkitRequestFullscreen();
      } else if (docEl.mozRequestFullScreen) {
        docEl.mozRequestFullScreen();
      } else if (docEl.msRequestFullscreen) {
        docEl.msRequestFullscreen();
      }
    } else {
      if (doc.exitFullscreen) {
        doc.exitFullscreen();
      } else if (doc.msExitFullscreen) {
        doc.msExitFullscreen();
      } else if (doc.mozCancelFullScreen) {
        doc.mozCancelFullScreen();
      } else if (doc.webkitExitFullscreen) {
        doc.webkitExitFullscreen();
      }
    }
    this.buttonAfterHook.emit(eventToEmit);
  }
  /**
   * Method called by the delete upper button.
   * @param {?} event
   * @return {?}
   */
  onDelete(event) {
    /** @type {?} */
    const eventToEmit = this.getButtonEventToEmit(event);
    this.buttonBeforeHook.emit(eventToEmit);
    if (this.images.length === 1) {
      this.closeGallery();
    }
    /** @type {?} */
    const imageIndexToDelete = this.currentImageComponent.getIndexToDelete(event.image);
    if (imageIndexToDelete === this.images.length - 1) {
      // last image
      this.currentImageComponent.prevImage();
    } else {
      this.currentImageComponent.nextImage();
    }
    this.buttonAfterHook.emit(eventToEmit);
  }
  /**
   * Method called by the navigate upper button.
   * @param {?} event
   * @return {?}
   */
  onNavigate(event) {
    /** @type {?} */
    const eventToEmit = this.getButtonEventToEmit(event);
    this.buttonBeforeHook.emit(eventToEmit);
    // To support SSR
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
      if (eventToEmit.image && eventToEmit.image.modal.extUrl) {
        // where I should open this link? The current tab or another one?
        if (eventToEmit.button && eventToEmit.button.extUrlInNewTab) {
          // in this case I should use target _blank to open the url in a new tab, however these is a security issue.
          // Prevent Reverse Tabnabbing's attacks (https://www.owasp.org/index.php/Reverse_Tabnabbing)
          // Some resources:
          // - https://www.owasp.org/index.php/HTML5_Security_Cheat_Sheet#Tabnabbing
          // - https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c
          // - https://developer.mozilla.org/en-US/docs/Web/API/Window/open
          /** @type {?} */
          const newWindow = window.open(eventToEmit.image.modal.extUrl, 'noopener,noreferrer,');
          newWindow.opener = null; // required to prevent security issues
        } else {
          window.location.href = eventToEmit.image.modal.extUrl;
        }
      }
    }
    this.buttonAfterHook.emit(eventToEmit);
  }
  /**
   * Method called by the download upper button.
   * @param {?} event
   * @return {?}
   */
  onDownload(event) {
    /** @type {?} */
    const eventToEmit = this.getButtonEventToEmit(event);
    this.buttonBeforeHook.emit(eventToEmit);
    this.downloadImage();
    this.buttonAfterHook.emit(eventToEmit);
  }
  /**
   * Method called by the close upper button.
   * @param {?} event
   * @param {?=} action
   * @return {?}
   */
  onCloseGallery(event, action = Action.NORMAL) {
    /** @type {?} */
    const eventToEmit = this.getButtonEventToEmit(event);
    this.buttonBeforeHook.emit(eventToEmit);
    this.closeGallery(action);
    this.buttonAfterHook.emit(eventToEmit);
  }
  /**
   * Method to close the modal gallery specifying the action.
   * It also reset the `keyboardService` to prevent multiple listeners.
   * @param {?=} action
   * @param {?=} isCalledByService
   * @return {?}
   */
  closeGallery(action = Action.NORMAL, isCalledByService = false) {
    this.close.emit(new ImageModalEvent(action, true));
    this.opened = false;
    this.keyboardService.reset();
    // shows scrollbar
    document.body.style.overflow = 'visible';
    if (isCalledByService) {
      // the following is required, otherwise the view will not be updated
      // this happens only if called by gallery.service
      this.changeDetectorRef.markForCheck();
    }
  }
  /**
   * Method called when you click on an image of your plain (or inline) gallery.
   * @param {?} index
   * @return {?}
   */
  onShowModalGallery(index) {
    this.showModalGallery(index);
  }
  /**
   * Method to show the modal gallery displaying the image with
   * the index specified as input parameter.
   * It will also register a new `keyboardService` to catch keyboard's events to download the current
   * image with keyboard's shortcuts. This service, will be removed either when modal gallery component
   * will be destroyed or when the gallery is closed invoking the `closeGallery` method.
   * @param {?} index
   * @param {?=} isCalledByService
   * @return {?}
   */
  showModalGallery(index, isCalledByService = false) {
    // hides scrollbar
    document.body.style.overflow = 'hidden';
    this.keyboardService.add(
    /**
    * @param {?} event
    * @param {?} combo
    * @return {?}
    */
    (event, combo) => {
      if (event.preventDefault) {
        event.preventDefault();
      } else {
        // internet explorer
        event.returnValue = false;
      }
      this.downloadImage();
    });
    this.opened = true;
    this.currentImage = this.images[index];
    // emit a new ImageModalEvent with the index of the current image
    this.show.emit(new ImageModalEvent(Action.LOAD, index + 1));
    if (isCalledByService) {
      // the following is required, otherwise the view will not be updated
      // this happens only if called by gallery.service
      this.changeDetectorRef.markForCheck();
    }
  }
  /**
   * Method called when the image changes and used to update the `currentImage` object.
   * @param {?} event
   * @return {?}
   */
  onChangeCurrentImage(event) {
    /** @type {?} */
    const newIndex = /** @type {?} */event.result;
    if (newIndex < 0 || newIndex >= this.images.length) {
      return;
    }
    this.currentImage = this.images[newIndex];
    // emit first/last event based on newIndex value
    this.emitBoundaryEvent(event.action, newIndex);
    // emit current visible image index
    this.show.emit(new ImageModalEvent(event.action, newIndex + 1));
  }
  /**
   * @return {?}
   */
  isPlainGalleryVisible() {
    if (this.plainGalleryConfig && this.plainGalleryConfig.layout && this.plainGalleryConfig.layout instanceof AdvancedLayout) {
      return !this.plainGalleryConfig.layout.hideDefaultPlainGallery;
    }
    return true;
  }
  /**
   * Method called when you click 'outside' (i.e. on the semi-transparent background)
   * to close the modal gallery if `enableCloseOutside` is true.
   * @param {?} event
   * @return {?}
   */
  onClickOutside(event) {
    if (event && this.enableCloseOutside) {
      this.closeGallery(Action.CLICK);
    }
  }
  /**
   * Method called when an image is loaded and the loading spinner has gone.
   * It sets the previouslyLoaded flag inside the Image to hide loading spinner when displayed again.
   * @param {?} event
   * @return {?}
   */
  onImageLoad(event) {
    // console.log('modal-image onImageLoad', event);
    // console.log('modal-image onImageLoad images before', this.images);
    // sets as previously loaded the image with index specified by `event.status`
    this.images = this.images.map(
    /**
    * @param {?} img
    * @return {?}
    */
    img => {
      if (img && img.id === event.id) {
        return Object.assign({}, img, {
          previouslyLoaded: event.status
        });
      }
      return img;
    });
    // console.log('modal-image onImageLoad images after', this.images);
  }
  /**
   * Method called when a dot is clicked and used to update the current image.
   * @param {?} index
   * @return {?}
   */
  onClickDot(index) {
    this.currentImage = this.images[index];
  }
  /**
   * Method called when an image preview is clicked and used to update the current image.
   * @param {?} event
   * @return {?}
   */
  onClickPreview(event) {
    this.onChangeCurrentImage(event);
  }
  // onClickArrow(event: InteractionEvent) {
  //   // TODO validate before to emit
  //   this.arrow.emit(event);
  // }
  /**
   * Method to download the current image, only if `downloadable` is true.
   * It contains also a logic to enable downloading features also for IE11.
   * @return {?}
   */
  downloadImage() {
    if (this.currentImageConfig && !this.currentImageConfig.downloadable) {
      return;
    }
    // If IE11 or Microsoft Edge use msSaveBlob(...)
    if (this.isIEorEdge()) {
      // I cannot use fetch API because IE11 doesn't support it,
      // so I have to switch to XMLHttpRequest
      this.downloadImageOnlyIEorEdge();
    } else {
      // for all other browsers
      this.downloadImageAllBrowsers();
    }
  }
  /**
   * Method to cleanup resources. In fact, this will reset keyboard's service.
   * This is an Angular's lifecycle hook that is called when this component is destroyed.
   * @return {?}
   */
  ngOnDestroy() {
    this.keyboardService.reset();
    this.idValidatorService.remove(this.id);
    if (this.galleryServiceNavigateSubscription) {
      this.galleryServiceNavigateSubscription.unsubscribe();
    }
    if (this.galleryServiceCloseSubscription) {
      this.galleryServiceCloseSubscription.unsubscribe();
    }
    if (this.galleryServiceUpdateSubscription) {
      this.galleryServiceUpdateSubscription.unsubscribe();
    }
    if (this.galleryServiceAutoPlaySubscription) {
      this.galleryServiceAutoPlaySubscription.unsubscribe();
    }
  }
  /**
   * Private method to download the current image for all browsers except for IE11.
   * @private
   * @return {?}
   */
  downloadImageAllBrowsers() {
    /** @type {?} */
    const link = document.createElement('a');
    link.href = /** @type {?} */this.currentImage.modal.img;
    link.setAttribute('download', this.getFileName(this.currentImage));
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  /**
   * Private method to download the current image only for IE11 using
   * custom javascript's methods available only on IE.
   * @private
   * @return {?}
   */
  downloadImageOnlyIEorEdge() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
      /** @type {?} */
      const req = new XMLHttpRequest();
      req.open('GET', /** @type {?} */this.currentImage.modal.img, true);
      req.responseType = 'arraybuffer';
      req.onload =
      /**
      * @param {?} event
      * @return {?}
      */
      event => {
        /** @type {?} */
        const blob = new Blob([req.response], {
          type: 'image/png'
        });
        window.navigator.msSaveBlob(blob, this.getFileName(this.currentImage));
      };
      req.send();
    }
  }
  /**
   * Private method to get the `ButtonEvent` to emit, merging the input `ButtonEvent`
   * with the current image.
   * @private
   * @param {?} event
   * @return {?} ButtonEvent event payload with the current image included
   */
  getButtonEventToEmit(event) {
    return Object.assign(event, {
      image: this.currentImage
    });
  }
  /**
   * Private method to get the file name from an input path.
   * This is used either to get the image's name from its path or from the Image itself,
   * if specified as 'downloadFileName' by the user.
   * @private
   * @param {?} image
   * @return {?} string string file name of the input image.
   */
  getFileName(image) {
    if (!image.modal.downloadFileName || image.modal.downloadFileName.length === 0) {
      return (/** @type {?} */this.currentImage.modal.img.replace(/^.*[\\\/]/, '')
      );
    } else {
      return image.modal.downloadFileName;
    }
  }
  /**
   * Private method to initialize `images` as array of `Image`s.
   * Also, it will emit ImageowmodaModalEvent to say that images are loaded.
   * @private
   * @return {?}
   */
  initImages() {
    // I'm not cloning the array, but I'm doing this to cast it to an array of InternalLibImages
    this.images = /** @type {?} */this.modalImages;
    this.hasData.emit(new ImageModalEvent(Action.LOAD, true));
    this.showGallery = this.images.length > 0;
  }
  /**
   * Private method to emit events when either the last or the first image are visible.
   * @private
   * @param {?} action Enum of type Action that represents the source of the event that changed the
   *  current image to the first one or the last one.
   * @param {?} indexToCheck is the index number of the image (the first or the last one).
   * @return {?}
   */
  emitBoundaryEvent(action, indexToCheck) {
    // to emit first/last event
    switch (indexToCheck) {
      case 0:
        this.firstImage.emit(new ImageModalEvent(action, true));
        break;
      case this.images.length - 1:
        this.lastImage.emit(new ImageModalEvent(action, true));
        break;
    }
  }
  /**
   * Private method to check if this library is running on
   * Microsoft browsers or not (i.e. it detects both IE11 and Edge)
   * supporting also Server-Side Rendering.
   * Inspired by https://msdn.microsoft.com/it-it/library/hh779016(v=vs.85).aspx
   * @private
   * @return {?} any the result
   */
  isIEorEdge() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
      // if both Blob constructor and msSaveOrOpenBlob are supported by the current browser
      return window.Blob && window.navigator.msSaveOrOpenBlob;
    }
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformServer)(this.platformId)) {
      // server only
      return true;
    }
  }
}
ModalGalleryComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
  args: [{
    selector: 'ks-modal-gallery',
    exportAs: 'ksModalGallery',
    template: "<ks-plain-gallery [images]=\"images\"\n                  [showGallery]=\"showGallery && isPlainGalleryVisible()\"\n                  [plainGalleryConfig]=\"plainGalleryConfig\"\n                  [accessibilityConfig]=\"accessibilityConfig\"\n                  (show)=\"onShowModalGallery($event)\"></ks-plain-gallery>\n\n<ks-background [isOpen]=\"opened\"\n               [accessibilityConfig]=\"accessibilityConfig\"></ks-background>\n\n<div id=\"modal-gallery-wrapper\" *ngIf=\"opened\"\n     [attr.aria-label]=\"accessibilityConfig.modalGalleryContentAriaLabel\"\n     [title]=\"accessibilityConfig.modalGalleryContentTitle\"\n     ksClickOutside [clickOutsideEnable]=\"enableCloseOutside\"\n     (clickOutside)=\"onClickOutside($event)\">\n\n  <div id=\"flex-min-height-ie-fix\">\n    <div id=\"modal-gallery-container\">\n\n      <ks-upper-buttons [currentImage]=\"currentImage\"\n                        [buttonsConfig]=\"buttonsConfig\"\n                        (delete)=\"onDelete($event)\"\n                        (navigate)=\"onNavigate($event)\"\n                        (download)=\"onDownload($event)\"\n                        (close)=\"onCloseGallery($event)\"\n                        (fullscreen)=\"onFullScreen($event)\"\n                        (customEmit)=\"onCustomEmit($event)\"></ks-upper-buttons>\n                        <!--(rotate)=\"onRotate($event)\"-->\n\n      <ks-current-image [id]=\"id\"\n                        [images]=\"images\"\n                        [currentImage]=\"currentImage\"\n                        [isOpen]=\"opened\"\n                        [slideConfig]=\"configSlide\"\n                        [keyboardConfig]=\"keyboardConfig\"\n                        [accessibilityConfig]=\"accessibilityConfig\"\n                        [currentImageConfig]=\"currentImageConfig\"\n                        (loadImage)=\"onImageLoad($event)\"\n                        (changeImage)=\"onChangeCurrentImage($event)\"\n                        (close)=\"onCloseGallery($event)\"></ks-current-image>\n\n      <div>\n        <ks-dots [images]=\"images\"\n                 [currentImage]=\"currentImage\"\n                 [dotsConfig]=\"dotsConfig\"\n                 [accessibilityConfig]=\"accessibilityConfig\"\n                 (clickDot)=\"onClickDot($event)\"></ks-dots>\n\n        <ks-previews [images]=\"images\"\n                     [currentImage]=\"currentImage\"\n                     [previewConfig]=\"previewConfig\"\n                     [accessibilityConfig]=\"accessibilityConfig\"\n                     (clickPreview)=\"onClickPreview($event)\"></ks-previews>\n      </div>\n    </div>\n  </div>\n</div>\n",
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
    styles: ["#modal-gallery-wrapper{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:10000}#flex-min-height-ie-fix{display:flex;flex-direction:column;justify-content:center}#modal-gallery-container{display:flex;flex-direction:column;justify-content:space-between;min-height:100vh}"]
  }]
}];
/** @nocollapse */
ModalGalleryComponent.ctorParameters = () => [{
  type: KeyboardService
}, {
  type: GalleryService
}, {
  type: Object,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
    args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
  }]
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
}, {
  type: IdValidatorService
}];
ModalGalleryComponent.propDecorators = {
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  modalImages: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  buttonsConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  enableCloseOutside: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  currentImageConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  dotsConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  previewConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  slideConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  accessibilityConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  keyboardConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  plainGalleryConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  close: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  show: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  firstImage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  lastImage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  hasData: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  buttonBeforeHook: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  buttonAfterHook: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  arrow: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  currentImageComponent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
    args: [CurrentImageComponent]
  }],
  onPopState: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
    args: ['window:popstate', ['$event']]
  }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component with configurable inline/plain carousel.
 */
class CarouselComponent extends AccessibleComponent {
  /**
   * @param {?} _platformId
   * @param {?} _ngZone
   * @param {?} galleryService
   * @param {?} ref
   * @param {?} sanitizer
   */
  constructor(_platformId, _ngZone, galleryService, ref, sanitizer) {
    super();
    this._platformId = _platformId;
    this._ngZone = _ngZone;
    this.galleryService = galleryService;
    this.ref = ref;
    this.sanitizer = sanitizer;
    /**
     * Attribute to set ariaLabel of the host component
     */
    this.ariaLabel = `Carousel`;
    /**
     * Object of type `DotsConfig` to init DotsComponent's features.
     * For instance, it contains a param to show/hide this component.
     */
    this.dotsConfig = {
      visible: true
    };
    /**
     * boolean to enable/disable infinite sliding. Enabled by default.
     */
    this.infinite = true;
    /**
     * Object of type `AccessibilityConfig` to init custom accessibility features.
     * For instance, it contains titles, alt texts, aria-labels and so on.
     */
    this.accessibilityConfig = KS_DEFAULT_ACCESSIBILITY_CONFIG;
    /**
     * Output to emit an event when an image is changed.
     */
    this.show = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Output to emit an event when the current image is the first one.
     */
    this.firstImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Output to emit an event when the current image is the last one.
     */
    this.lastImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Enum of type `Action` that represents a mouse click on a button.
     * Declared here to be used inside the template.
     */
    this.clickAction = Action.CLICK;
    /**
     * Enum of type `Action` that represents a keyboard action.
     * Declared here to be used inside the template.
     */
    this.keyboardAction = Action.KEYBOARD;
    /**
     * Boolean that it's true when you are watching the first image (currently visible).
     * False by default
     */
    this.isFirstImage = false;
    /**
     * Boolean that it's true when you are watching the last image (currently visible).
     * False by default
     */
    this.isLastImage = false;
    /**
     * Object of type `PlainGalleryConfig` to force ks-modal-gallery to hide plain-gallery
     */
    this.plainGalleryHidden = {
      strategy: PlainGalleryStrategy.CUSTOM,
      layout: new AdvancedLayout(-1, true)
    };
    /**
     * Subject to play the carousel.
     */
    this.start$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Subject to stop the carousel.
     */
    this.stop$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Private object without type to define all swipe actions used by hammerjs.
     */
    this.SWIPE_ACTION = {
      LEFT: 'swipeleft',
      RIGHT: 'swiperight',
      UP: 'swipeup',
      DOWN: 'swipedown'
    };
  }
  /**
   * Listener to stop the gallery when the mouse pointer is over the current image.
   * @return {?}
   */
  onMouseEnter() {
    if (!this.configPlay.pauseOnHover) {
      return;
    }
    this.stopCarousel();
  }
  /**
   * Listener to play the gallery when the mouse pointer leave the current image.
   * @return {?}
   */
  onMouseLeave() {
    if (!this.configPlay.pauseOnHover || !this.configPlay.autoPlay) {
      return;
    }
    this.playCarousel();
  }
  /**
   * Listener to navigate carousel images with keyboard (left).
   * @return {?}
   */
  onKeyDownLeft() {
    if (!this.configCarousel.keyboardEnable) {
      return;
    }
    this.prevImage();
  }
  /**
   * Listener to navigate carousel images with keyboard (right).
   * @return {?}
   */
  onKeyDownLRight() {
    if (!this.configCarousel.keyboardEnable) {
      return;
    }
    this.nextImage();
  }
  /**
   * @param {?} changes
   * @return {?}
   */
  ngOnChanges(changes) {
    // handle changes of dotsConfig
    /** @type {?} */
    const configDotsChange = changes.dotsConfig;
    if (configDotsChange && configDotsChange.currentValue !== configDotsChange.previousValue) {
      this.configDots = configDotsChange.currentValue;
    }
    // handle changes of carouselConfig
    /** @type {?} */
    const carouselConfigChange = changes.carouselConfig;
    if (carouselConfigChange && carouselConfigChange.currentValue !== carouselConfigChange.previousValue) {
      this.configCarousel = carouselConfigChange.currentValue;
    }
    // handle changes of playConfig starting/stopping the carousel accordingly
    /** @type {?} */
    const playConfigChange = changes.playConfig;
    if (playConfigChange) {
      /** @type {?} */
      const playConfigChangePrev = playConfigChange.previousValue;
      /** @type {?} */
      const playConfigChangeCurr = playConfigChange.currentValue;
      if (playConfigChangePrev !== playConfigChangeCurr) {
        this.configPlay = playConfigChange.currentValue;
        // if autoplay is enabled, and this is not the
        // first change (to prevent multiple starts at the beginning)
        if (playConfigChangeCurr.autoPlay && !playConfigChange.isFirstChange()) {
          this.start$.next();
        } else {
          this.stopCarousel();
        }
      }
    }
  }
  /**
   * @return {?}
   */
  ngOnInit() {
    this.currentImage = this.images[0];
    /** @type {?} */
    const defaultDescriptionStyle = {
      bgColor: 'rgba(0, 0, 0, .5)',
      textColor: 'white',
      marginTop: '0px',
      marginBottom: '0px',
      marginLeft: '0px',
      marginRight: '0px'
    };
    /** @type {?} */
    const defaultDescription = {
      strategy: DescriptionStrategy.ALWAYS_HIDDEN,
      imageText: 'Image ',
      numberSeparator: '/',
      beforeTextDescription: ' - ',
      style: defaultDescriptionStyle
    };
    /** @type {?} */
    const defaultCurrentImageConfig = {
      description: defaultDescription,
      invertSwipe: false
    };
    /** @type {?} */
    const defaultCurrentCarouselConfig = {
      maxWidth: '100%',
      maxHeight: '400px',
      showArrows: true,
      objectFit: 'cover',
      keyboardEnable: true,
      modalGalleryEnable: false,
      legacyIE11Mode: false
    };
    /** @type {?} */
    const defaultCurrentCarouselPlay = {
      autoPlay: true,
      interval: 5000,
      pauseOnHover: true
    };
    this.configCurrentImageCarousel = Object.assign({}, defaultCurrentImageConfig, this.carouselImageConfig);
    this.configCurrentImageCarousel.description = Object.assign({}, defaultDescription, this.configCurrentImageCarousel.description);
    /** @type {?} */
    const defaultConfig = {
      visible: true
    };
    this.configDots = Object.assign(defaultConfig, this.dotsConfig);
    this.configCarousel = Object.assign({}, defaultCurrentCarouselConfig, this.carouselConfig);
    this.configPlay = Object.assign({}, defaultCurrentCarouselPlay, this.playConfig);
    // check values
    if (this.configPlay.interval <= 0) {
      throw new Error(`Carousel's interval must be a number >= 0`);
    }
    this.manageSlideConfig();
  }
  /**
   * @return {?}
   */
  ngAfterContentInit() {
    // interval doesn't play well with SSR and protractor,
    // so we should run it in the browser and outside Angular
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this._platformId)) {
      this._ngZone.runOutsideAngular(
      /**
      * @return {?}
      */
      () => {
        this.start$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(
        /**
        * @return {?}
        */
        () => this.configPlay.interval), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(
        /**
        * @param {?} interval
        * @return {?}
        */
        interval => interval > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(
        /**
        * @param {?} interval
        * @return {?}
        */
        interval => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.timer)(interval).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.stop$)))).subscribe(
        /**
        * @return {?}
        */
        () => this._ngZone.run(
        /**
        * @return {?}
        */
        () => {
          if (this.configPlay.autoPlay) {
            this.nextImage();
          }
          this.ref.markForCheck();
        }));
        this.start$.next();
      });
    }
  }
  /**
   * Method used in template to sanitize an url when you need legacyIE11Mode.
   * In this way you can set an url as background of a div.
   * @param {?} unsafeStyle is a string and represents the url to sanitize.
   * @return {?} a SafeStyle object that can be used in template without problems.
   */
  sanitizeUrlBgStyle(unsafeStyle) {
    // Method used only to sanitize background-image style before add it to background property when legacyIE11Mode is enabled
    return this.sanitizer.bypassSecurityTrustStyle('url(' + unsafeStyle + ')');
  }
  /**
   * Method called when a dot is clicked and used to update the current image.
   * @param {?} index
   * @return {?}
   */
  onClickDot(index) {
    this.changeCurrentImage(this.images[index], Action.NORMAL);
  }
  /**
   * Method called by events from both keyboard and mouse on a navigation arrow.
   * @param {?} direction
   * @param {?} event
   * @param {?=} action
   * @return {?}
   */
  onNavigationEvent(direction, event, action = Action.NORMAL) {
    /** @type {?} */
    const result = super.handleNavigationEvent(direction, event);
    if (result === NEXT) {
      this.nextImage(action);
    } else if (result === PREV) {
      this.prevImage(action);
    }
  }
  /**
   * Method triggered when you click on the current image.
   * Also, if modalGalleryEnable is true, you can open the modal-gallery.
   * @return {?}
   */
  onClickCurrentImage() {
    if (!this.configCarousel.modalGalleryEnable) {
      return;
    }
    /** @type {?} */
    const index = getIndex(this.currentImage, this.images);
    this.galleryService.openGallery(this.id, index);
  }
  /**
   * Method to get the image description based on input params.
   * If you provide a full description this will be the visible description, otherwise,
   * it will be built using the `Description` object, concatenating its fields.
   * @throws an Error if description isn't available
   * @param {?=} image
   * @return {?} String description of the image (or the current image if not provided)
   */
  getDescriptionToDisplay(image = this.currentImage) {
    if (!this.configCurrentImageCarousel || !this.configCurrentImageCarousel.description) {
      throw new Error('Description input must be a valid object implementing the Description interface');
    }
    /** @type {?} */
    const imageWithoutDescription = !image.modal || !image.modal.description || image.modal.description === '';
    switch (this.configCurrentImageCarousel.description.strategy) {
      case DescriptionStrategy.HIDE_IF_EMPTY:
        return imageWithoutDescription ? '' : image.modal.description + '';
      case DescriptionStrategy.ALWAYS_HIDDEN:
        return '';
      default:
        // ----------- DescriptionStrategy.ALWAYS_VISIBLE -----------------
        return this.buildTextDescription(image, imageWithoutDescription);
    }
  }
  /**
   * Method used by Hammerjs to support touch gestures (you can also invert the swipe direction with configCurrentImage.invertSwipe).
   * @param {?=} action String that represent the direction of the swipe action. 'swiperight' by default.
   * @return {?}
   */
  swipe(action = this.SWIPE_ACTION.RIGHT) {
    switch (action) {
      case this.SWIPE_ACTION.RIGHT:
        if (this.configCurrentImageCarousel.invertSwipe) {
          this.prevImage(Action.SWIPE);
        } else {
          this.nextImage(Action.SWIPE);
        }
        break;
      case this.SWIPE_ACTION.LEFT:
        if (this.configCurrentImageCarousel.invertSwipe) {
          this.nextImage(Action.SWIPE);
        } else {
          this.prevImage(Action.SWIPE);
        }
        break;
      // case this.SWIPE_ACTION.UP:
      //   break;
      // case this.SWIPE_ACTION.DOWN:
      //   break;
    }
  }
  /**
   * Method to go back to the previous image.
   * @param {?=} action Enum of type `Action` that represents the source
   *  action that moved back to the previous image. `Action.NORMAL` by default.
   * @return {?}
   */
  prevImage(action = Action.NORMAL) {
    // check if prevImage should be blocked
    if (this.isPreventSliding(0)) {
      return;
    }
    this.changeCurrentImage(this.getPrevImage(), action);
    this.manageSlideConfig();
    this.start$.next();
  }
  /**
   * Method to go back to the previous image.
   * @param {?=} action Enum of type `Action` that represents the source
   *  action that moved to the next image. `Action.NORMAL` by default.
   * @return {?}
   */
  nextImage(action = Action.NORMAL) {
    // check if nextImage should be blocked
    if (this.isPreventSliding(this.images.length - 1)) {
      return;
    }
    this.changeCurrentImage(this.getNextImage(), action);
    this.manageSlideConfig();
    this.start$.next();
  }
  /**
   * Method used in the template to track ids in ngFor.
   * @param {?} index
   * @param {?} item
   * @return {?} number the id of the item
   */
  trackById(index, item) {
    return item.id;
  }
  /**
   * Method called when an image preview is clicked and used to update the current image.
   * @param {?} event an ImageEvent object with the relative action and the index of the clicked preview.
   * @return {?}
   */
  onClickPreview(event) {
    /** @type {?} */
    const imageFound = this.images[/** @type {?} */event.result];
    if (!!imageFound) {
      this.manageSlideConfig();
      this.changeCurrentImage( /** @type {?} */imageFound, event.action);
    }
  }
  /**
   * Method to play carousel.
   * @return {?}
   */
  playCarousel() {
    this.start$.next();
  }
  /**
   * Stops the carousel from cycling through items.
   * @return {?}
   */
  stopCarousel() {
    this.stop$.next();
  }
  // TODO remove this because duplicated
  /**
   * Method to get `alt attribute`.
   * `alt` specifies an alternate text for an image, if the image cannot be displayed.
   * @param {?=} image
   * @return {?} String alt description of the image (or the current image if not provided)
   */
  getAltDescriptionByImage(image = this.currentImage) {
    if (!image) {
      return '';
    }
    return image.modal && image.modal.description ? image.modal.description : `Image ${getIndex(image, this.images) + 1}`;
  }
  // TODO remove this because duplicated
  /**
   * Method to get the title attributes based on descriptions.
   * This is useful to prevent accessibility issues, because if DescriptionStrategy is ALWAYS_HIDDEN,
   * it prevents an empty string as title.
   * @throws an Error if description isn't available
   * @param {?=} image
   * @return {?} String title of the image based on descriptions
   */
  getTitleToDisplay(image = this.currentImage) {
    if (!this.configCurrentImageCarousel || !this.configCurrentImageCarousel.description) {
      throw new Error('Description input must be a valid object implementing the Description interface');
    }
    /** @type {?} */
    const imageWithoutDescription = !image.modal || !image.modal.description || image.modal.description === '';
    /** @type {?} */
    const description = this.buildTextDescription(image, imageWithoutDescription);
    return description;
  }
  /**
     * Method to reset carousel (force image with index 0 to be the current image and re-init also previews)
     */
  // temporary removed because never tested
  // reset() {
  //   if (this.configPlay && this.configPlay.autoPlay) {
  //     this.stopCarousel();
  //   }
  //   this.currentImage = this.images[0];
  //   this.handleBoundaries(0);
  //   if (this.configPlay && this.configPlay.autoPlay) {
  //     this.playCarousel();
  //   }
  //   this.ref.markForCheck();
  // }
  /**
   * Method to cleanup resources. In fact, this will stop the carousel.
   * This is an Angular's lifecycle hook that is called when this component is destroyed.
   * @return {?}
   */
  ngOnDestroy() {
    this.stopCarousel();
  }
  /**
   * Method to change the current image, receiving the new image as input the relative action.
   * @private
   * @param {?} image an Image object that represents the new image to set as current.
   * @param {?} action Enum of type `Action` that represents the source action that triggered the change.
   * @return {?}
   */
  changeCurrentImage(image, action) {
    this.currentImage = image;
    /** @type {?} */
    const index = getIndex(image, this.images);
    // emit first/last event based on newIndex value
    this.emitBoundaryEvent(action, index);
    // emit current visible image index
    this.show.emit(new ImageModalEvent(action, index + 1));
  }
  /**
   * Private method to get the next index.
   * This is necessary because at the end, when you call next again, you'll go to the first image.
   * That happens because all modal images are shown like in a circle.
   * @private
   * @return {?}
   */
  getNextImage() {
    /** @type {?} */
    const currentIndex = getIndex(this.currentImage, this.images);
    /** @type {?} */
    let newIndex = 0;
    if (currentIndex >= 0 && currentIndex < this.images.length - 1) {
      newIndex = currentIndex + 1;
    } else {
      newIndex = 0; // start from the first index
    }

    return this.images[newIndex];
  }
  /**
   * Private method to get the previous index.
   * This is necessary because at index 0, when you call prev again, you'll go to the last image.
   * That happens because all modal images are shown like in a circle.
   * @private
   * @return {?}
   */
  getPrevImage() {
    /** @type {?} */
    const currentIndex = getIndex(this.currentImage, this.images);
    /** @type {?} */
    let newIndex = 0;
    if (currentIndex > 0 && currentIndex <= this.images.length - 1) {
      newIndex = currentIndex - 1;
    } else {
      newIndex = this.images.length - 1; // start from the last index
    }

    return this.images[newIndex];
  }
  /**
   * Private method to build a text description.
   * This is used also to create titles.
   * @private
   * @param {?} image
   * @param {?} imageWithoutDescription
   * @return {?} String description built concatenating image fields with a specific logic.
   */
  buildTextDescription(image, imageWithoutDescription) {
    if (!this.configCurrentImageCarousel || !this.configCurrentImageCarousel.description) {
      throw new Error('Description input must be a valid object implementing the Description interface');
    }
    // If customFullDescription use it, otherwise proceed to build a description
    if (this.configCurrentImageCarousel.description.customFullDescription && this.configCurrentImageCarousel.description.customFullDescription !== '') {
      return this.configCurrentImageCarousel.description.customFullDescription;
    }
    /** @type {?} */
    const currentIndex = getIndex(image, this.images);
    // If the current image hasn't a description,
    // prevent to write the ' - ' (or this.description.beforeTextDescription)
    /** @type {?} */
    const prevDescription = this.configCurrentImageCarousel.description.imageText ? this.configCurrentImageCarousel.description.imageText : '';
    /** @type {?} */
    const midSeparator = this.configCurrentImageCarousel.description.numberSeparator ? this.configCurrentImageCarousel.description.numberSeparator : '';
    /** @type {?} */
    const middleDescription = currentIndex + 1 + midSeparator + this.images.length;
    if (imageWithoutDescription) {
      return prevDescription + middleDescription;
    }
    /** @type {?} */
    const currImgDescription = image.modal && image.modal.description ? image.modal.description : '';
    /** @type {?} */
    const endDescription = this.configCurrentImageCarousel.description.beforeTextDescription + currImgDescription;
    return prevDescription + middleDescription + endDescription;
  }
  /**
   * Private method to update both `isFirstImage` and `isLastImage` based on
   * the index of the current image.
   * @private
   * @param {?} currentIndex
   * @return {?}
   */
  handleBoundaries(currentIndex) {
    if (this.images.length === 1) {
      this.isFirstImage = true;
      this.isLastImage = true;
      return;
    }
    switch (currentIndex) {
      case 0:
        // execute this only if infinite sliding is disabled
        this.isFirstImage = true;
        this.isLastImage = false;
        break;
      case this.images.length - 1:
        // execute this only if infinite sliding is disabled
        this.isFirstImage = false;
        this.isLastImage = true;
        break;
      default:
        this.isFirstImage = false;
        this.isLastImage = false;
        break;
    }
  }
  /**
   * Private method to manage boundary arrows and sliding.
   * This is based on the slideConfig input to enable/disable 'infinite sliding'.
   * @private
   * @return {?}
   */
  manageSlideConfig() {
    /** @type {?} */
    let index;
    try {
      index = getIndex(this.currentImage, this.images);
    } catch (err) {
      console.error('Cannot get the current image index in current-image');
      throw err;
    }
    if (this.infinite === true) {
      // enable infinite sliding
      this.isFirstImage = false;
      this.isLastImage = false;
    } else {
      this.handleBoundaries(index);
    }
  }
  /**
   * Private method to emit events when either the last or the first image are visible.
   * @private
   * @param {?} action Enum of type Action that represents the source of the event that changed the
   *  current image to the first one or the last one.
   * @param {?} indexToCheck is the index number of the image (the first or the last one).
   * @return {?}
   */
  emitBoundaryEvent(action, indexToCheck) {
    // to emit first/last event
    switch (indexToCheck) {
      case 0:
        this.firstImage.emit(new ImageModalEvent(action, true));
        break;
      case this.images.length - 1:
        this.lastImage.emit(new ImageModalEvent(action, true));
        break;
    }
  }
  /**
   * Private method to check if next/prev actions should be blocked.
   * It checks if slideConfig.infinite === false and if the image index is equals to the input parameter.
   * If yes, it returns true to say that sliding should be blocked, otherwise not.
   * @private
   * @param {?} boundaryIndex
   * @return {?} boolean true if slideConfig.infinite === false and the current index is
   *  either the first or the last one.
   */
  isPreventSliding(boundaryIndex) {
    return !this.infinite && getIndex(this.currentImage, this.images) === boundaryIndex;
  }
}
CarouselComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
  args: [{
    selector: 'ks-carousel',
    template: "<main id=\"carousel-container\"\n      [attr.aria-label]=\"accessibilityConfig.carouselContainerAriaLabel\"\n      [title]=\"accessibilityConfig.carouselContainerTitle\"\n      ksMaxSize [sizeConfig]=\"{maxWidth: configCarousel?.maxWidth,\n                               maxHeight: ''}\">\n\n\n  <!-- Workaround to support 2 ng-content in the same template in 2 ngIf (https://github.com/angular/angular/issues/22972) -->\n  <ng-template #content><ng-content></ng-content></ng-template>\n\n  <!-- Normal figure used by all browsers except for IE11, because\n    it doesn't support object-fit cover.-->\n  <figure class=\"current-figure\" *ngIf=\"configCarousel?.legacyIE11Mode === false; else legacyMode\"\n          ksSize [sizeConfig]=\"{width: configCarousel?.maxWidth,\n                                height: ''}\">\n\n    <a class=\"nav-left\" *ngIf=\"configCarousel?.showArrows\"\n       [attr.aria-label]=\"accessibilityConfig.carouselPrevImageAriaLabel\"\n       [tabindex]=\"isLastImage && !infinite ? -1 : 0\" role=\"button\"\n       (click)=\"onNavigationEvent('left', $event, clickAction)\" (keyup)=\"onNavigationEvent('left', $event, keyboardAction)\">\n      <div class=\"inside {{(isFirstImage && !infinite) || !configCarousel.showArrows ? 'empty-arrow-image' : 'left-arrow-image'}}\"\n           aria-hidden=\"true\"\n           [title]=\"accessibilityConfig.carouselPrevImageTitle\"></div>\n    </a>\n\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n\n    <img id=\"current-image\"\n         [style.object-fit]=\"configCarousel?.objectFit\"\n         ksMaxSize [sizeConfig]=\"{maxWidth: configCarousel?.maxWidth,\n                                  maxHeight: configCarousel?.maxHeight}\"\n         [src]=\"currentImage.modal.img\"\n         [attr.aria-label]=\"currentImage.modal.ariaLabel\"\n         [title]=\"currentImage.modal.title ? currentImage.modal.title : getTitleToDisplay()\"\n         alt=\"{{currentImage.modal.alt ? currentImage.modal.alt : getAltDescriptionByImage()}}\"\n         [tabindex]=\"0\" role=\"img\"\n         (click)=\"onClickCurrentImage()\"\n         (swipeleft)=\"swipe($event.type)\"\n         (swiperight)=\"swipe($event.type)\"/>\n\n    <figcaption *ngIf=\"getDescriptionToDisplay() !== ''\"\n                class=\"description\"\n                ksDescription [description]=\"configCurrentImageCarousel?.description\"\n                [innerHTML]=\"getDescriptionToDisplay()\"></figcaption>\n\n    <a class=\"nav-right\" *ngIf=\"configCarousel?.showArrows\"\n       [attr.aria-label]=\"accessibilityConfig.carouselNextImageAriaLabel\"\n       [tabindex]=\"isLastImage && !infinite ? -1 : 0\" role=\"button\"\n       (click)=\"onNavigationEvent('right', $event, clickAction)\" (keyup)=\"onNavigationEvent('right', $event, keyboardAction)\">\n      <div class=\"inside {{(isLastImage && !infinite) || !configCarousel.showArrows ? 'empty-arrow-image' : 'right-arrow-image'}}\"\n           aria-hidden=\"true\"\n           [title]=\"accessibilityConfig.carouselNextImageTitle\"></div>\n    </a>\n\n    <div id=\"dots\">\n      <ks-dots [currentImage]=\"currentImage\"\n               [dotsConfig]=\"configDots\"\n               [accessibilityConfig]=\"accessibilityConfig\"\n               [images]=\"images\"\n               (clickDot)=\"onClickDot($event)\"></ks-dots>\n    </div>\n\n  </figure>\n\n  <!-- Legacy mode to support img cover also on IE11,\n    because it doesn't support natively object-fit cover. -->\n  <ng-template #legacyMode>\n    <div class=\"current-figure\"\n         ksSize [sizeConfig]=\"{width: configCarousel?.maxWidth,\n                               height: ''}\">\n\n      <a class=\"nav-left\" *ngIf=\"configCarousel?.showArrows\"\n         [attr.aria-label]=\"accessibilityConfig.carouselPrevImageAriaLabel\"\n         [tabindex]=\"isLastImage && !infinite ? -1 : 0\" role=\"button\"\n         (click)=\"onNavigationEvent('left', $event, clickAction)\" (keyup)=\"onNavigationEvent('left', $event, keyboardAction)\">\n        <div class=\"inside {{(isFirstImage && !infinite) || !configCarousel.showArrows ? 'empty-arrow-image' : 'left-arrow-image'}}\"\n             aria-hidden=\"true\"\n             [title]=\"accessibilityConfig.carouselPrevImageTitle\"></div>\n      </a>\n\n      <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n\n      <div id=\"current-image-legacy\"\n           [style.background-color]=\"'transparent'\"\n           [style.background-image]=\"sanitizeUrlBgStyle(currentImage.modal.img + '')\"\n           [style.background-position]=\"'center center'\"\n           [style.background-size]=\"'cover'\"\n           [style.background-repeat]=\"'no-repeat'\"\n           [style.background-attachment]=\"'scroll'\"\n           ksSize [sizeConfig]=\"{width: '100%',\n                                 height: configCarousel?.maxHeight}\"\n           ksMaxSize [sizeConfig]=\"{maxWidth: configCarousel?.maxWidth}\"\n           [attr.aria-label]=\"currentImage.modal.ariaLabel\"\n           [title]=\"currentImage.modal.title ? currentImage.modal.title : getTitleToDisplay()\"\n           [tabindex]=\"0\" role=\"img\"\n           (click)=\"onClickCurrentImage()\"\n           (swipeleft)=\"swipe($event.type)\"\n           (swiperight)=\"swipe($event.type)\">\n\n        <div *ngIf=\"getDescriptionToDisplay() !== ''\"\n             class=\"description-ie11\"\n             ksDescription [description]=\"configCurrentImageCarousel?.description\"\n             [innerHTML]=\"getDescriptionToDisplay()\"></div>\n      </div>\n\n      <a class=\"nav-right\" *ngIf=\"configCarousel?.showArrows\"\n         [attr.aria-label]=\"accessibilityConfig.carouselNextImageAriaLabel\"\n         [tabindex]=\"isLastImage && !infinite ? -1 : 0\" role=\"button\"\n         (click)=\"onNavigationEvent('right', $event, clickAction)\" (keyup)=\"onNavigationEvent('right', $event, keyboardAction)\">\n        <div class=\"inside {{(isLastImage && !infinite) || !configCarousel.showArrows ? 'empty-arrow-image' : 'right-arrow-image'}}\"\n             aria-hidden=\"true\"\n             [title]=\"accessibilityConfig.carouselNextImageTitle\"></div>\n      </a>\n\n      <div id=\"dots-ie11\">\n        <ks-dots [currentImage]=\"currentImage\"\n                 [dotsConfig]=\"configDots\"\n                 [accessibilityConfig]=\"accessibilityConfig\"\n                 [images]=\"images\"\n                 (clickDot)=\"onClickDot($event)\"></ks-dots>\n      </div>\n\n    </div>\n  </ng-template>\n\n</main>\n\n<ks-carousel-previews [images]=\"images\"\n                      [currentImage]=\"currentImage\"\n                      [carouselConfig]=\"configCarousel\"\n                      [previewConfig]=\"previewConfig\"\n                      [accessibilityConfig]=\"accessibilityConfig\"\n                      (clickPreview)=\"onClickPreview($event)\"></ks-carousel-previews>\n\n<ks-modal-gallery [id]=\"id\" [modalImages]=\"images\" [plainGalleryConfig]=\"plainGalleryHidden\"></ks-modal-gallery>\n",
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
    styles: [":host{display:flex;flex-direction:column;justify-content:flex-start;align-items:center}#carousel-container{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%}#carousel-container>.current-figure{-webkit-animation:.8s fadein-visible;animation:.8s fadein-visible;text-align:center;margin:0;position:relative}#carousel-container>.current-figure .nav,#carousel-container>.current-figure>.nav-left,#carousel-container>.current-figure>.nav-right{-webkit-animation:1s animatezoom;animation:1s animatezoom;cursor:pointer;transition:.5s;top:50%;position:absolute}#carousel-container>.current-figure .nav:hover,#carousel-container>.current-figure>.nav-left:hover,#carousel-container>.current-figure>.nav-right:hover{transform:scale(1.1)}#carousel-container>.current-figure>.nav-left{left:5px}#carousel-container>.current-figure>.nav-right{right:5px}#carousel-container>.current-figure>#current-image,#carousel-container>.current-figure>#current-image-legacy{width:100%;height:auto;display:block}#carousel-container>.current-figure>#current-image-legacy>.description-ie11{bottom:0;width:100%;position:absolute;padding-top:10px;padding-bottom:10px}#carousel-container>.current-figure>figcaption{padding:10px;position:absolute;bottom:0;left:0;right:0}#carousel-container>.current-figure>figcaption .description{font-weight:700;text-align:center}#carousel-container>.current-figure>#dots,#carousel-container>.current-figure>#dots-ie11{position:absolute;bottom:20px;width:100%}", ".arrow-image,.empty-arrow-image,.left-arrow-image,.right-arrow-image{width:30px;height:30px;background-size:30px}.empty-arrow-image{background:#000;opacity:0}.left-arrow-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:.5s}.left-arrow-image:hover{transform:scale(1.2)}.right-arrow-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:.5s}.right-arrow-image:hover{transform:scale(1.2)}"]
  }]
}];
/** @nocollapse */
CarouselComponent.ctorParameters = () => [{
  type: undefined,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
    args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
  }]
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
}, {
  type: GalleryService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer
}];
CarouselComponent.propDecorators = {
  ariaLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
    args: ['attr.aria-label']
  }],
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  images: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  carouselConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  playConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  carouselImageConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  dotsConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  previewConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  infinite: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  accessibilityConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  show: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  firstImage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  lastImage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  onMouseEnter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
    args: ['mouseenter']
  }],
  onMouseLeave: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
    args: ['mouseleave']
  }],
  onKeyDownLeft: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
    args: ['keydown.arrowLeft']
  }],
  onKeyDownLRight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
    args: ['keydown.arrowRight']
  }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component with image previews for carousel
 */
class CarouselPreviewsComponent extends AccessibleComponent {
  /**
   * @param {?} ref
   * @param {?} breakpointObserver
   * @param {?} sanitizer
   */
  constructor(ref, breakpointObserver, sanitizer) {
    super();
    this.ref = ref;
    this.breakpointObserver = breakpointObserver;
    this.sanitizer = sanitizer;
    /**
     * Variable to change the max-width of the host component
     */
    this.hostMaxWidth = '100%';
    /**
     * Variable to set aria-label of the host component
     */
    this.ariaLabel = `Carousel previews`;
    /**
     * Output to emit the clicked preview. The payload contains the `InternalLibImage` associated to the clicked preview.
     */
    this.clickPreview = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Enum of type `Action` that represents a mouse click on a button.
     * Declared here to be used inside the template.
     */
    this.clickAction = Action.CLICK;
    /**
     * Enum of type `Action` that represents a keyboard action.
     * Declared here to be used inside the template.
     */
    this.keyboardAction = Action.KEYBOARD;
    /**
     * Array of `InternalLibImage` exposed to the template. This field is initialized
     * applying transformations, default values and so on to the input of the same type.
     */
    this.previews = [];
    /**
     * Private property with the default max height of previews.
     */
    this.defaultMaxHeight = '200px';
    // listen for width changes and update preview heights accordingly
    this.breakpointSubscription = breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Small, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Medium, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Large, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.XLarge]).subscribe(
    /**
    * @param {?} result
    * @return {?}
    */
    result => {
      if (!this.configPreview) {
        return;
      }
      if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.XSmall]) {
        this.updateHeight(this.configPreview.breakpoints.xSmall);
      } else if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Small]) {
        this.updateHeight(this.configPreview.breakpoints.small);
      } else if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Medium]) {
        this.updateHeight(this.configPreview.breakpoints.medium);
      } else if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Large]) {
        this.updateHeight(this.configPreview.breakpoints.large);
      } else if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.XLarge]) {
        this.updateHeight(this.configPreview.breakpoints.xLarge);
      }
    });
  }
  /**
   * Method to update the height of previews, passing the desired height as input.
   * @private
   * @param {?} configBreakpointHeight is a number that represent the desired height to set.
   * @return {?}
   */
  updateHeight(configBreakpointHeight) {
    /** @type {?} */
    const newConfigPreview = Object.assign({}, this.configPreview);
    if (this.previewConfig && this.previewConfig.maxHeight) {
      /** @type {?} */
      const heightNum = +this.previewConfig.maxHeight.replace('px', '').replace('%', '');
      newConfigPreview.maxHeight = Math.min(configBreakpointHeight, heightNum) + 'px';
    } else {
      /** @type {?} */
      const heightNum = +this.defaultMaxHeight.replace('px', '').replace('%', '');
      newConfigPreview.maxHeight = Math.min(configBreakpointHeight, heightNum) + 'px';
    }
    this.configPreview = newConfigPreview;
    this.ref.markForCheck();
  }
  /**
   * Method ´ngOnInit´ to build `configPreview` applying a default value and also to
   * init the `previews` array.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   * @return {?}
   */
  ngOnInit() {
    /** @type {?} */
    const defaultBreakpoints = {
      xSmall: 100,
      small: 100,
      medium: 150,
      large: 200,
      xLarge: 200
    };
    /** @type {?} */
    const defaultPreviewConfig = {
      visible: true,
      number: 4,
      arrows: true,
      clickable: true,
      width: 100 / 4 + '%',
      maxHeight: this.defaultMaxHeight,
      breakpoints: defaultBreakpoints
    };
    this.configPreview = Object.assign({}, defaultPreviewConfig, this.previewConfig);
    // if number is <= 0 reset to default
    if (this.configPreview && this.configPreview.number <= 0) {
      this.configPreview.number = defaultPreviewConfig.number;
    }
    // Init preview image width based on the number of previews in PreviewConfig
    // Don't move this line above, because I need to be sure that both configPreview.number
    // and configPreview.size are initialized
    this.configPreview.width = 100 / this.configPreview.number + '%';
    // change the max-width of this component if there is a specified width !== 100% in carouselConfig
    if (this.carouselConfig && this.carouselConfig.maxWidth !== '100%') {
      this.hostMaxWidth = this.carouselConfig.maxWidth;
    }
    // init previews based on currentImage and the full array of images
    this.initPreviews(this.currentImage, this.images);
    // apply custom height based on responsive breakpoints
    // This is required, because the breakpointSubscription is not triggered at creation,
    // but only when the width changes
    /** @type {?} */
    const isXsmallScreen = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.XSmall);
    /** @type {?} */
    const isSmallScreen = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Small);
    /** @type {?} */
    const isMediumScreen = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Medium);
    /** @type {?} */
    const isLargeScreen = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Large);
    /** @type {?} */
    const isxLargeScreen = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.XLarge);
    if (isXsmallScreen) {
      this.updateHeight(this.configPreview.breakpoints.xSmall);
    } else if (isSmallScreen) {
      this.updateHeight(this.configPreview.breakpoints.small);
    } else if (isMediumScreen) {
      this.updateHeight(this.configPreview.breakpoints.medium);
    } else if (isLargeScreen) {
      this.updateHeight(this.configPreview.breakpoints.large);
    } else if (isxLargeScreen) {
      this.updateHeight(this.configPreview.breakpoints.xLarge);
    }
  }
  /**
   * Method to check if an image is active (i.e. a preview image).
   * @param {?} preview
   * @return {?} boolean true if is active, false otherwise
   */
  isActive(preview) {
    if (!preview || !this.currentImage) {
      return false;
    }
    return preview.id === this.currentImage.id;
  }
  /**
   * Method ´ngOnChanges´ to update `previews` array.
   * Also, both `start` and `end` local variables will be updated accordingly.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   * @param {?} changes
   * @return {?}
   */
  ngOnChanges(changes) {
    /** @type {?} */
    const simpleChange = changes.currentImage;
    if (!simpleChange) {
      return;
    }
    /** @type {?} */
    const prev = simpleChange.previousValue;
    /** @type {?} */
    const current = simpleChange.currentValue;
    if (current && changes.images && changes.images.previousValue && changes.images.currentValue) {
      // I'm in this if statement, if input images are changed (for instance, because I removed one of them with the 'delete button',
      // or because users changed the images array while modal gallery is still open).
      // In this case, I have to re-init previews, because the input array of images is changed.
      this.initPreviews(current, changes.images.currentValue);
    }
    if (prev && current && prev.id !== current.id) {
      // to manage infinite sliding I have to reset both `start` and `end` at the beginning
      // to show again previews from the first image.
      // This happens when you navigate over the last image to return to the first one
      /** @type {?} */
      let prevIndex;
      /** @type {?} */
      let currentIndex;
      try {
        prevIndex = getIndex(prev, this.images);
        currentIndex = getIndex(current, this.images);
      } catch (err) {
        console.error('Cannot get previous and current image indexes in previews');
        throw err;
      }
      // apply a formula to get a values to be used to decide if go next, return back or stay without doing anything
      /** @type {?} */
      const calc = Math.floor((this.end - this.start) / 2) + this.start;
      if (prevIndex === this.images.length - 1 && currentIndex === 0) {
        // first image
        this.setBeginningIndexesPreviews();
        this.previews = this.images.filter(
        /**
        * @param {?} img
        * @param {?} i
        * @return {?}
        */
        (img, i) => i >= this.start && i < this.end);
        return;
      }
      // the same for the opposite case, when you navigate back from the fist image to go to the last one.
      if (prevIndex === 0 && currentIndex === this.images.length - 1) {
        // last image
        this.setEndIndexesPreviews();
        this.previews = this.images.filter(
        /**
        * @param {?} img
        * @param {?} i
        * @return {?}
        */
        (img, i) => i >= this.start && i < this.end);
        return;
      }
      if (this.configPreview.number % 2 === 0) {
        if (calc > currentIndex) {
          this.previous();
        } else {
          this.next();
        }
      } else {
        if (calc > currentIndex) {
          this.previous();
        }
        if (calc < currentIndex) {
          this.next();
        }
      }
    }
  }
  /**
   * Method called by events from both keyboard and mouse on a preview.
   * This will trigger the `clickpreview` output with the input preview as its payload.
   * @param {?} preview
   * @param {?} event
   * @param {?=} action
   * @return {?}
   */
  onImageEvent(preview, event, action = Action.NORMAL) {
    if (!this.configPreview || !this.configPreview.clickable) {
      return;
    }
    /** @type {?} */
    const clickedImageIndex = this.images.indexOf(preview);
    /** @type {?} */
    const result = super.handleImageEvent(event);
    if (result === NEXT) {
      this.clickPreview.emit( /** @type {?} */{
        action: action,
        result: clickedImageIndex
      });
    } else if (result === PREV) {
      this.clickPreview.emit( /** @type {?} */{
        action: action,
        result: clickedImageIndex
      });
    }
  }
  /**
   * Method called by events from both keyboard and mouse on a navigation arrow.
   * @param {?} direction
   * @param {?} event
   * @return {?}
   */
  onNavigationEvent(direction, event) {
    /** @type {?} */
    const result = super.handleNavigationEvent(direction, event);
    if (result === NEXT) {
      this.next();
    } else if (result === PREV) {
      this.previous();
    }
  }
  /**
   * Method to get aria-label text for a preview image.
   * @param {?} preview
   * @return {?}
   */
  getAriaLabel(preview) {
    if (!preview.plain) {
      return preview.modal.ariaLabel || '';
    }
    return preview.plain.ariaLabel || preview.modal.ariaLabel || '';
  }
  /**
   * Method to get title text for a preview image.
   * @param {?} preview
   * @return {?}
   */
  getTitle(preview) {
    if (!preview.plain) {
      return preview.modal.title || '';
    }
    return preview.plain.title || preview.modal.title || '';
  }
  /**
   * Method to get alt text for a preview image.
   * @param {?} preview
   * @return {?}
   */
  getAlt(preview) {
    if (!preview.plain) {
      return preview.modal.alt || '';
    }
    return preview.plain.alt || preview.modal.alt || '';
  }
  /**
   * Method used in the template to track ids in ngFor.
   * @param {?} index
   * @param {?} item
   * @return {?} number the id of the item
   */
  trackById(index, item) {
    return item.id;
  }
  /**
   * Method used in template to sanitize an url when you need legacyIE11Mode.
   * In this way you can set an url as background of a div.
   * @param {?} unsafeStyle is a string and represents the url to sanitize.
   * @return {?} a SafeStyle object that can be used in template without problems.
   */
  sanitizeUrlBgStyle(unsafeStyle) {
    // Method used only to sanitize background-image style before add it to background property when legacyIE11Mode is enabled
    return this.sanitizer.bypassSecurityTrustStyle('url(' + unsafeStyle + ')');
  }
  /**
   * Method to get the background-size value when IE11LegacyMode is enabled.
   * This prevent weired behaviour on IE11 when previews are really small, but original images (.png/.jgp/...) are big.
   * Using 'cover' it's not enough, because it's causing empty background in some cases.
   * After some experiments, I decided to use the double of the height and auto as width.
   * @return {?}
   */
  getIE11LegacyBgSize() {
    if (this.configPreview && this.configPreview.maxHeight) {
      /** @type {?} */
      const bgHeight = +this.configPreview.maxHeight.replace('px', '');
      return '100% ' + bgHeight * 2 + 'px';
    }
    return 'cover';
  }
  /**
   * Method to cleanup resources. In fact, it cleans breakpointSubscription.
   * This is an Angular's lifecycle hook that is called when this component is destroyed.
   * @return {?}
   */
  ngOnDestroy() {
    if (this.breakpointSubscription) {
      this.breakpointSubscription.unsubscribe();
    }
  }
  /**
   * Private method to init previews based on the currentImage and the full array of images.
   * The current image in mandatory to show always the current preview (as highlighted).
   * @private
   * @param {?} currentImage
   * @param {?} images
   * @return {?}
   */
  initPreviews(currentImage, images) {
    /** @type {?} */
    let index;
    try {
      index = getIndex(currentImage, images);
    } catch (err) {
      throw err;
    }
    switch (index) {
      case 0:
        // first image
        this.setBeginningIndexesPreviews();
        break;
      case images.length - 1:
        // last image
        this.setEndIndexesPreviews();
        break;
      // default:
      //   // other images
      //   // TODO unused because it starts always at image 0
      //   this.setIndexesPreviews();
      //   break;
    }

    this.previews = images.filter(
    /**
    * @param {?} img
    * @param {?} i
    * @return {?}
    */
    (img, i) => i >= this.start && i < this.end);
  }
  /**
   * Private method to init both `start` and `end` to the beginning.
   * @private
   * @return {?}
   */
  setBeginningIndexesPreviews() {
    this.start = 0;
    this.end = Math.min( /** @type {?} */this.configPreview.number, this.images.length);
  }
  /**
   * Private method to init both `start` and `end` to the end.
   * @private
   * @return {?}
   */
  setEndIndexesPreviews() {
    this.start = this.images.length - 1 - ( /** @type {?} */this.configPreview.number - 1);
    this.end = this.images.length;
  }
  /**
   * Private method to update the visible previews navigating to the right (next).
   * @private
   * @return {?}
   */
  next() {
    // check if nextImage should be blocked
    if (this.isPreventSliding(this.images.length - 1)) {
      return;
    }
    if (this.end === this.images.length) {
      return;
    }
    this.start++;
    this.end = Math.min(this.end + 1, this.images.length);
    this.previews = this.images.filter(
    /**
    * @param {?} img
    * @param {?} i
    * @return {?}
    */
    (img, i) => i >= this.start && i < this.end);
  }
  /**
   * Private method to update the visible previews navigating to the left (previous).
   * @private
   * @return {?}
   */
  previous() {
    // check if prevImage should be blocked
    if (this.isPreventSliding(0)) {
      return;
    }
    if (this.start === 0) {
      return;
    }
    this.start = Math.max(this.start - 1, 0);
    this.end = Math.min(this.end - 1, this.images.length);
    this.previews = this.images.filter(
    /**
    * @param {?} img
    * @param {?} i
    * @return {?}
    */
    (img, i) => i >= this.start && i < this.end);
  }
  /**
   * Private method to block/permit sliding between previews.
   * @private
   * @param {?} boundaryIndex
   * @return {?} boolean if true block sliding, otherwise not
   */
  isPreventSliding(boundaryIndex) {
    return getIndex(this.currentImage, this.images) === boundaryIndex;
  }
}
CarouselPreviewsComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
  args: [{
    selector: 'ks-carousel-previews',
    template: "<nav *ngIf=\"configPreview?.visible\"\n     class=\"previews-container\"\n     [attr.aria-label]=\"accessibilityConfig?.carouselPreviewsContainerAriaLabel\"\n     [title]=\"accessibilityConfig?.carouselPreviewsContainerTitle\">\n\n  <a class=\"nav-left\"\n     [attr.aria-label]=\"accessibilityConfig?.carouselPreviewScrollPrevAriaLabel\"\n     [tabindex]=\"configPreview.arrows && start > 0 ? 0 : -1\" role=\"button\"\n     (click)=\"onNavigationEvent('left', $event)\" (keyup)=\"onNavigationEvent('left', $event)\">\n    <div class=\"inside {{configPreview.arrows && start > 0 ? 'left-arrow-preview-image' : 'empty-arrow-preview-image'}}\"\n         aria-hidden=\"true\"\n         [title]=\"accessibilityConfig?.carouselPreviewScrollPrevTitle\"></div>\n  </a>\n\n  <div class=\"preview-inner-container\">\n    <ng-container *ngFor=\"let preview of previews; trackBy: trackById; let index = index\">\n      <ng-container *ngIf=\"!carouselConfig?.legacyIE11Mode; else legacyMode\">\n        <img *ngIf=\"preview?.modal?.img\"\n             class=\"inside preview-image{{isActive(preview) ? ' active' : ''}}{{!configPreview.clickable ? ' unclickable' : ''}}\"\n             [src]=\"preview.plain?.img ? preview.plain.img : preview.modal.img\"\n             ksSize [sizeConfig]=\"{width: configPreview?.width,\n                                 height: configPreview?.maxHeight}\"\n             [attr.aria-label]=\"getAriaLabel(preview)\"\n             [title]=\"getTitle(preview)\"\n             alt=\"{{getAlt(preview)}}\"\n             [tabindex]=\"0\" role=\"img\"\n             (click)=\"onImageEvent(preview, $event, clickAction)\" (keyup)=\"onImageEvent(preview, $event, keyboardAction)\"/>\n      </ng-container>\n      <ng-template #legacyMode>\n        <div *ngIf=\"preview?.modal?.img\"\n             class=\"inside preview-ie11-image{{isActive(preview) ? ' active' : ''}}{{!configPreview.clickable ? ' unclickable' : ''}}\"\n             [style.background-color]=\"'transparent'\"\n             [style.background-image]=\"sanitizeUrlBgStyle(preview.plain?.img ? preview.plain.img : preview.modal.img)\"\n             [style.background-position]=\"'center center'\"\n             [style.background-size]=\"getIE11LegacyBgSize()\"\n             [style.background-repeat]=\"'no-repeat'\"\n             [style.background-attachment]=\"'scroll'\"\n             ksSize [sizeConfig]=\"{width: configPreview?.width,\n                                 height: configPreview?.maxHeight}\"\n             [attr.aria-label]=\"getAriaLabel(preview)\"\n             [title]=\"getTitle(preview)\"\n             [tabindex]=\"0\" role=\"img\"\n             (click)=\"onImageEvent(preview, $event, clickAction)\" (keyup)=\"onImageEvent(preview, $event, keyboardAction)\"></div>\n      </ng-template>\n    </ng-container>\n  </div>\n\n  <a class=\"nav-right\"\n     [attr.aria-label]=\"accessibilityConfig?.carouselPreviewScrollNextAriaLabel\"\n     [tabindex]=\"configPreview.arrows && end < images.length ? 0 : -1\" role=\"button\"\n     (click)=\"onNavigationEvent('right', $event)\" (keyup)=\"onNavigationEvent('right', $event)\">\n    <div class=\"inside {{configPreview.arrows && end < images.length ? 'right-arrow-preview-image' : 'empty-arrow-preview-image'}}\"\n         aria-hidden=\"true\"\n         [title]=\"accessibilityConfig?.carouselPreviewScrollNextTitle\"></div>\n  </a>\n\n</nav>\n",
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
    styles: [":host{position:relative;margin-top:3px;margin-bottom:3px;width:100%}.previews-container{align-items:center;-webkit-animation:.8s fadein-semi-visible08;animation:.8s fadein-semi-visible08;display:flex;flex-direction:row;justify-content:center;margin-bottom:0}.previews-container>.preview-inner-container{display:flex;flex-direction:row;justify-content:center;align-items:center;flex-wrap:nowrap;width:100%}.previews-container>.preview-inner-container>.preview-image{cursor:pointer;-o-object-fit:cover;object-fit:cover}.previews-container>.preview-inner-container>.preview-image.unclickable{cursor:not-allowed}.previews-container>.preview-inner-container>.preview-ie11-image{cursor:pointer}.previews-container>.preview-inner-container>.preview-ie11-image.unclickable{cursor:not-allowed}.previews-container .nav,.previews-container>.nav-left,.previews-container>.nav-right{position:absolute;top:calc(50% - 7px);color:#919191;z-index:1000;cursor:pointer;transition:.5s}.previews-container .nav:hover,.previews-container>.nav-left:hover,.previews-container>.nav-right:hover{transform:scale(1.1)}.previews-container>.nav-left{margin-right:10px;left:10px}.previews-container>.nav-left>.left-arrow-preview-image{opacity:1}.previews-container>.nav-right{margin-left:10px;right:10px}.previews-container>.nav-right>.right-arrow-preview-image{opacity:1}", ".arrow-preview-image,.empty-arrow-preview-image,.left-arrow-preview-image,.right-arrow-preview-image{width:15px;height:15px;opacity:.5}.empty-arrow-preview-image{background:#000;opacity:0}.left-arrow-preview-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:.5s}.left-arrow-preview-image:hover{transform:scale(1.2)}.right-arrow-preview-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:.5s}.right-arrow-preview-image:hover{transform:scale(1.2)}"]
  }]
}];
/** @nocollapse */
CarouselPreviewsComponent.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
}, {
  type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.BreakpointObserver
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer
}];
CarouselPreviewsComponent.propDecorators = {
  hostMaxWidth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
    args: ['style.max-width']
  }],
  ariaLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
    args: ['attr.aria-label']
  }],
  carouselConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  currentImage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  images: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  previewConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  accessibilityConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  clickPreview: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const ButtonsStrategy = {
  // don't use 0 here
  // the first index is 1 and all of the following members are auto-incremented from that point on
  DEFAULT: 1,
  SIMPLE: 2,
  ADVANCED: 3,
  FULL: 4,
  CUSTOM: 5
};
ButtonsStrategy[ButtonsStrategy.DEFAULT] = 'DEFAULT';
ButtonsStrategy[ButtonsStrategy.SIMPLE] = 'SIMPLE';
ButtonsStrategy[ButtonsStrategy.ADVANCED] = 'ADVANCED';
ButtonsStrategy[ButtonsStrategy.FULL] = 'FULL';
ButtonsStrategy[ButtonsStrategy.CUSTOM] = 'CUSTOM';
/** @enum {number} */
const ButtonType = {
  // don't use 0 here
  // the first index is 1 and all of the following members are auto-incremented from that point on
  // REFRESH = 1,
  DELETE: 1,
  EXTURL: 2,
  DOWNLOAD: 3,
  CLOSE: 4,
  CUSTOM: 5,
  FULLSCREEN: 6
  // ROTATE
};

ButtonType[ButtonType.DELETE] = 'DELETE';
ButtonType[ButtonType.EXTURL] = 'EXTURL';
ButtonType[ButtonType.DOWNLOAD] = 'DOWNLOAD';
ButtonType[ButtonType.CLOSE] = 'CLOSE';
ButtonType[ButtonType.CUSTOM] = 'CUSTOM';
ButtonType[ButtonType.FULLSCREEN] = 'FULLSCREEN';
/**
 * Array of admitted types of buttons.
 * @type {?}
 */
const WHITELIST_BUTTON_TYPES = [
// ButtonType.REFRESH,
ButtonType.FULLSCREEN, ButtonType.DELETE, ButtonType.EXTURL, ButtonType.DOWNLOAD, ButtonType.CLOSE, ButtonType.CUSTOM
// ButtonType.ROTATE
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default button size object
 * @type {?}
 */
const KS_DEFAULT_SIZE = {
  height: 'auto',
  width: '30px'
};
/**
 * Default close button object
 * @type {?}
 */
const KS_DEFAULT_BTN_CLOSE = {
  className: 'close-image',
  size: KS_DEFAULT_SIZE,
  type: ButtonType.CLOSE,
  title: 'Close this modal image gallery',
  ariaLabel: 'Close this modal image gallery'
};
/**
 * Default download button object
 * @type {?}
 */
const KS_DEFAULT_BTN_DOWNLOAD = {
  className: 'download-image',
  size: KS_DEFAULT_SIZE,
  type: ButtonType.DOWNLOAD,
  title: 'Download the current image',
  ariaLabel: 'Download the current image'
};
/**
 * Default exturl button object
 * @type {?}
 */
const KS_DEFAULT_BTN_EXTURL = {
  className: 'ext-url-image',
  size: KS_DEFAULT_SIZE,
  type: ButtonType.EXTURL,
  title: 'Navigate the current image',
  ariaLabel: 'Navigate the current image'
};
// /**
//  * Default refresh button object
//  */
// export const KS_DEFAULT_BTN_REFRESH: ButtonConfig = {
//   className: 'refresh-image',
//   size: KS_DEFAULT_SIZE,
//   type: ButtonType.REFRESH,
//   title: 'Refresh all images',
//   ariaLabel: 'Refresh all images'
// };
/**
 * Default delete button object
 * @type {?}
 */
const KS_DEFAULT_BTN_DELETE = {
  className: 'delete-image',
  size: KS_DEFAULT_SIZE,
  type: ButtonType.DELETE,
  title: 'Delete the current image',
  ariaLabel: 'Delete the current image'
};
/**
 * Default full-screen button object
 * @type {?}
 */
const KS_DEFAULT_BTN_FULL_SCREEN = {
  className: 'fullscreen-image',
  size: KS_DEFAULT_SIZE,
  type: ButtonType.FULLSCREEN,
  title: 'Switch to full-screen',
  ariaLabel: 'Switch to full-screen'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component with all upper buttons.
 * Also it emits click events as outputs.
 */
class UpperButtonsComponent extends AccessibleComponent {
  constructor() {
    super(...arguments);
    /**
     * Output to emit clicks on refresh button. The payload contains a `ButtonEvent`.
     */
    this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Output to emit clicks on delete button. The payload contains a `ButtonEvent`.
     */
    this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Output to emit clicks on navigate button. The payload contains a `ButtonEvent`.
     */
    this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Output to emit clicks on download button. The payload contains a `ButtonEvent`.
     */
    this.download = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Output to emit clicks on close button. The payload contains a `ButtonEvent`.
     */
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Output to emit clicks on full-screen button. The payload contains a `ButtonEvent`.
     */
    this.fullscreen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    // /**
    //  * Output to emit clicks on rotate button. The payload contains a `ButtonEvent`.
    //  */
    // @Output()
    // rotate: EventEmitter<ButtonEvent> = new EventEmitter<ButtonEvent>();
    /**
     * Output to emit clicks on all custom buttons. The payload contains a `ButtonEvent`.
     */
    this.customEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Default buttons array for standard configuration
     */
    this.defaultButtonsDefault = [KS_DEFAULT_BTN_CLOSE];
    /**
     * Default buttons array for simple configuration
     */
    this.simpleButtonsDefault = [KS_DEFAULT_BTN_DOWNLOAD, ...this.defaultButtonsDefault];
    /**
     * Default buttons array for advanced configuration
     */
    this.advancedButtonsDefault = [KS_DEFAULT_BTN_EXTURL, ...this.simpleButtonsDefault];
    /**
     * Default buttons array for full configuration
     */
    this.fullButtonsDefault = [/*KS_DEFAULT_BTN_REFRESH, */
    KS_DEFAULT_BTN_FULL_SCREEN, KS_DEFAULT_BTN_DELETE, ...this.advancedButtonsDefault];
  }
  /**
   * Method ´ngOnInit´ to build `configButtons` applying a default value and also to
   * init the `buttons` array.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   * @return {?}
   */
  ngOnInit() {
    /** @type {?} */
    const defaultConfig = {
      visible: true,
      strategy: ButtonsStrategy.DEFAULT
    };
    this.configButtons = Object.assign(defaultConfig, this.buttonsConfig);
    switch (this.configButtons.strategy) {
      case ButtonsStrategy.SIMPLE:
        this.buttons = this.addButtonIds(this.simpleButtonsDefault);
        break;
      case ButtonsStrategy.ADVANCED:
        this.buttons = this.addButtonIds(this.advancedButtonsDefault);
        break;
      case ButtonsStrategy.FULL:
        this.buttons = this.addButtonIds(this.fullButtonsDefault);
        break;
      case ButtonsStrategy.CUSTOM:
        this.buttons = this.addButtonIds(this.validateCustomButtons(this.configButtons.buttons));
        break;
      case ButtonsStrategy.DEFAULT:
      default:
        this.buttons = this.addButtonIds(this.defaultButtonsDefault);
        break;
    }
  }
  /**
   * Method called by events from both keyboard and mouse on a button.
   * This will call a private method to trigger an output with the right payload.
   * @throws an error if the button type is unknown
   * @param {?} button
   * @param {?} event
   * @param {?=} action
   * @return {?}
   */
  onEvent(button, event, action = Action.CLICK) {
    if (!event) {
      return;
    }
    /** @type {?} */
    const dataToEmit = {
      button: button,
      // current image initialized as null
      // (I'll fill this value inside the parent of this component
      image: null,
      action: action
    };
    switch (button.type) {
      // case ButtonType.REFRESH:
      //   this.triggerOnMouseAndKeyboard(this.refresh, event, dataToEmit);
      //   break;
      case ButtonType.DELETE:
        this.triggerOnMouseAndKeyboard(this.delete, event, dataToEmit);
        break;
      case ButtonType.EXTURL:
        if (!this.currentImage || !this.currentImage.modal || !this.currentImage.modal.extUrl) {
          return;
        }
        this.triggerOnMouseAndKeyboard(this.navigate, event, dataToEmit);
        break;
      case ButtonType.DOWNLOAD:
        this.triggerOnMouseAndKeyboard(this.download, event, dataToEmit);
        break;
      case ButtonType.CLOSE:
        this.triggerOnMouseAndKeyboard(this.close, event, dataToEmit);
        break;
      case ButtonType.CUSTOM:
        this.triggerOnMouseAndKeyboard(this.customEmit, event, dataToEmit);
        break;
      case ButtonType.FULLSCREEN:
        this.triggerOnMouseAndKeyboard(this.fullscreen, event, dataToEmit);
        break;
      // case ButtonType.ROTATE:
      //   this.triggerOnMouseAndKeyboard(this.rotate, event, dataToEmit);
      //   break;
      default:
        throw new Error(`Unknown button's type into ButtonConfig`);
    }
  }
  /**
   * Method used in the template to track ids in ngFor.
   * @param {?} index
   * @param {?} item
   * @return {?} number the id of the item or undefined if the item is not valid
   */
  trackById(index, item) {
    return item ? item.id : undefined;
  }
  /**
   * Private method to emit an event using the specified output as an `EventEmitter`.
   * @private
   * @param {?} emitter
   * @param {?} event
   * @param {?} dataToEmit
   * @return {?}
   */
  triggerOnMouseAndKeyboard(emitter, event, dataToEmit) {
    if (!emitter) {
      throw new Error(`UpperButtonsComponent unknown emitter in triggerOnMouseAndKeyboard`);
    }
    /** @type {?} */
    const result = super.handleImageEvent(event);
    if (result === NEXT) {
      emitter.emit(dataToEmit);
    }
  }
  /**
   * Private method to add ids to the array of buttons.
   * It adds ids in a reverse way, to be sure that the last button will always have id = 0.
   * This is really useful in unit testing to be sure that close button always have id = 0, download 1 and so on...
   * It's totally transparent to the user.
   * @private
   * @param {?} buttons
   * @return {?} ButtonConfig[] the input array with incremental numeric ids
   */
  addButtonIds(buttons) {
    return buttons.map(
    /**
    * @param {?} val
    * @param {?} i
    * @return {?}
    */
    (val, i) => Object.assign(val, {
      id: buttons.length - 1 - i
    }));
  }
  /**
   * Private method to validate custom buttons received as input.
   * @throws an error is exists a button with an unknown type
   * @private
   * @param {?=} buttons
   * @return {?} ButtonConfig[] the same input buttons config array
   */
  validateCustomButtons(buttons = []) {
    buttons.forEach(
    /**
    * @param {?} val
    * @return {?}
    */
    val => {
      /** @type {?} */
      const indexOfButtonType = WHITELIST_BUTTON_TYPES.findIndex(
      /**
      * @param {?} type
      * @return {?}
      */
      type => type === val.type);
      if (indexOfButtonType === -1) {
        throw new Error(`Unknown ButtonType. For custom types use ButtonType.CUSTOM`);
      }
    });
    return buttons;
  }
}
UpperButtonsComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
  args: [{
    selector: 'ks-upper-buttons',
    template: "<header class=\"buttons-container\">\n\n  <ng-container *ngIf=\"!configButtons || configButtons?.visible\">\n    <a *ngFor=\"let btn of buttons; trackBy: trackById; let index = index\"\n       class=\"upper-button\"\n       ksSize [sizeConfig]=\"{width: btn.size?.width, height: btn.size?.height}\"\n       [ngStyle]=\"{'font-size': btn.fontSize}\"\n       [attr.aria-label]=\"btn.ariaLabel\"\n       [tabindex]=\"0\" role=\"button\"\n       (click)=\"onEvent(btn, $event)\" (keyup)=\"onEvent(btn, $event)\">\n      <div class=\"inside {{btn.className}}\" aria-hidden=\"true\" title=\"{{btn.title}}\"></div>\n    </a>\n  </ng-container>\n</header>\n",
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
    styles: [".buttons-container{display:flex;flex-direction:row;justify-content:flex-end}.buttons-container>.upper-button{-ms-grid-row-align:center;align-self:center;margin-right:30px;margin-top:28px;font-size:50px;text-decoration:none;cursor:pointer;-webkit-animation:.6s animatezoom;animation:.6s animatezoom;color:#fff}@-webkit-keyframes animatezoom{from{transform:scale(0)}to{transform:scale(1)}}@keyframes animatezoom{from{transform:scale(0)}to{transform:scale(1)}}.base-btn,.close-image,.copy,.delete-image,.download-image,.ext-url-image,.fullscreen-image,.refresh-image,.rotate-image{width:30px;height:30px;background-size:30px;opacity:.8;transition:.5s}.base-btn:hover,.close-image:hover,.copy:hover,.delete-image:hover,.download-image:hover,.ext-url-image:hover,.fullscreen-image:hover,.refresh-image:hover,.rotate-image:hover{transform:scale(1.2)}.rotate-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDY0IDY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTMzLDJjNy43NDYsMCwxNS4wMjgsMy4wMTcsMjAuNTA1LDguNDk0YzEwLjEzOCwxMC4xMzcsMTEuMzEsMjYuMzk2LDIuNzQsMzcuODQ5TDUyLDUyLjU4OVY0NGgtMnYxMWwxLDFoMTF2LTJoLTguNTgyICAgIGw0LjI5Mi00LjI5M2wwLjA5Mi0wLjEwNmM5LjIxMS0xMi4yNDcsNy45NzItMjkuNjY3LTIuODgzLTQwLjUyMUM0OS4wNjQsMy4yMjUsNDEuMjgsMCwzMywwVjJ6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTcuNzU1LDE1LjY1N0wxMiwxMS40MTFWMjBoMlY5bC0xLTFIMnYyaDguNTgyTDYuMjksMTQuMjkzbC0wLjA5MiwwLjEwNkMtMy4wMTMsMjYuNjQ2LTEuNzczLDQ0LjA2Niw5LjA4MSw1NC45MiAgICBDMTQuOTM2LDYwLjc3NSwyMi43Miw2NCwzMSw2NHYtMmMtNy43NDYsMC0xNS4wMjgtMy4wMTctMjAuNTA1LTguNDk0QzAuMzU3LDQzLjM2OS0wLjgxNCwyNy4xMSw3Ljc1NSwxNS42NTd6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=)}.fullscreen-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTMgNTMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUzIDUzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNNTIuOTIzLDAuNjE4Yy0wLjEwMS0wLjI0NC0wLjI5Ni0wLjQzOS0wLjU0MS0wLjU0MUM1Mi4yNiwwLjAyNyw1Mi4xMywwLDUyLDBINDBjLTAuNTUyLDAtMSwwLjQ0OC0xLDFzMC40NDgsMSwxLDFoOS41ODYgICBMMzMuMjkzLDE4LjI5M2MtMC4zOTEsMC4zOTEtMC4zOTEsMS4wMjMsMCwxLjQxNEMzMy40ODgsMTkuOTAyLDMzLjc0NCwyMCwzNCwyMHMwLjUxMi0wLjA5OCwwLjcwNy0wLjI5M0w1MSwzLjQxNFYxMyAgIGMwLDAuNTUyLDAuNDQ4LDEsMSwxczEtMC40NDgsMS0xVjFDNTMsMC44Nyw1Mi45NzMsMC43NCw1Mi45MjMsMC42MTh6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTE4LjI5MywzMy4yOTNMMiw0OS41ODZWNDBjMC0wLjU1Mi0wLjQ0OC0xLTEtMXMtMSwwLjQ0OC0xLDF2MTJjMCwwLjEzLDAuMDI3LDAuMjYsMC4wNzcsMC4zODIgICBjMC4xMDEsMC4yNDQsMC4yOTYsMC40MzksMC41NDEsMC41NDFDMC43NCw1Mi45NzMsMC44Nyw1MywxLDUzaDEyYzAuNTUyLDAsMS0wLjQ0OCwxLTFzLTAuNDQ4LTEtMS0xSDMuNDE0bDE2LjI5My0xNi4yOTMgICBjMC4zOTEtMC4zOTEsMC4zOTEtMS4wMjMsMC0xLjQxNFMxOC42ODQsMzIuOTAyLDE4LjI5MywzMy4yOTN6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTEsMTRjMC41NTIsMCwxLTAuNDQ4LDEtMVYzLjQxNGwxNi4yOTIsMTYuMjkyYzAuMTk1LDAuMTk1LDAuNDUxLDAuMjkzLDAuNzA3LDAuMjkzczAuNTEyLTAuMDk4LDAuNzA3LTAuMjkzICAgYzAuMzkxLTAuMzkxLDAuMzkxLTEuMDIzLDAtMS40MTRMMy40MTQsMkgxM2MwLjU1MiwwLDEtMC40NDgsMS0xcy0wLjQ0OC0xLTEtMUgxQzAuODcsMCwwLjc0LDAuMDI3LDAuNjE4LDAuMDc3ICAgQzAuMzczLDAuMTc5LDAuMTc5LDAuMzczLDAuMDc3LDAuNjE4QzAuMDI3LDAuNzQsMCwwLjg3LDAsMXYxMkMwLDEzLjU1MiwwLjQ0OCwxNCwxLDE0eiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik01MiwzOWMtMC41NTIsMC0xLDAuNDQ4LTEsMXY5LjU4NkwzNC43MDcsMzMuMjkyYy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwcy0wLjM5MSwxLjAyMywwLDEuNDE0TDQ5LjU4Niw1MUg0MCAgIGMtMC41NTIsMC0xLDAuNDQ4LTEsMXMwLjQ0OCwxLDEsMWgxMmMwLjEzLDAsMC4yNi0wLjAyNywwLjM4Mi0wLjA3N2MwLjI0NC0wLjEwMSwwLjQzOS0wLjI5NiwwLjU0MS0wLjU0MSAgIEM1Mi45NzMsNTIuMjYsNTMsNTIuMTMsNTMsNTJWNDBDNTMsMzkuNDQ4LDUyLjU1MiwzOSw1MiwzOXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.delete-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4Ni40IDQ4Ni40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODYuNCA0ODYuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTQ0Niw3MEgzNDQuOFY1My41YzAtMjkuNS0yNC01My41LTUzLjUtNTMuNWgtOTYuMmMtMjkuNSwwLTUzLjUsMjQtNTMuNSw1My41VjcwSDQwLjRjLTcuNSwwLTEzLjUsNi0xMy41LDEzLjUgICAgUzMyLjksOTcsNDAuNCw5N2gyNC40djMxNy4yYzAsMzkuOCwzMi40LDcyLjIsNzIuMiw3Mi4yaDIxMi40YzM5LjgsMCw3Mi4yLTMyLjQsNzIuMi03Mi4yVjk3SDQ0NmM3LjUsMCwxMy41LTYsMTMuNS0xMy41ICAgIFM0NTMuNSw3MCw0NDYsNzB6IE0xNjguNiw1My41YzAtMTQuNiwxMS45LTI2LjUsMjYuNS0yNi41aDk2LjJjMTQuNiwwLDI2LjUsMTEuOSwyNi41LDI2LjVWNzBIMTY4LjZWNTMuNXogTTM5NC42LDQxNC4yICAgIGMwLDI0LjktMjAuMyw0NS4yLTQ1LjIsNDUuMkgxMzdjLTI0LjksMC00NS4yLTIwLjMtNDUuMi00NS4yVjk3aDMwMi45djMxNy4ySDM5NC42eiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0yNDMuMiw0MTFjNy41LDAsMTMuNS02LDEzLjUtMTMuNVYxNTguOWMwLTcuNS02LTEzLjUtMTMuNS0xMy41cy0xMy41LDYtMTMuNSwxMy41djIzOC41ICAgIEMyMjkuNyw0MDQuOSwyMzUuNyw0MTEsMjQzLjIsNDExeiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0xNTUuMSwzOTYuMWM3LjUsMCwxMy41LTYsMTMuNS0xMy41VjE3My43YzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MjA4LjkgICAgQzE0MS42LDM5MC4xLDE0Ny43LDM5Ni4xLDE1NS4xLDM5Ni4xeiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0zMzEuMywzOTYuMWM3LjUsMCwxMy41LTYsMTMuNS0xMy41VjE3My43YzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MjA4LjkgICAgQzMxNy44LDM5MC4xLDMyMy44LDM5Ni4xLDMzMS4zLDM5Ni4xeiIgZmlsbD0iI0ZGRkZGRiIvPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.ext-url-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPjxnPjxnPjxnPjxwYXRoIGQ9Ik00ODAsMjg4djExMmMwLDQ0LjE4My0zNS44MTcsODAtODAsODBIMTEyYy00NC4xODMsMC04MC0zNS44MTctODAtODBWMTEyYzAtNDQuMTgzLDM1LjgxNy04MCw4MC04MGg5NlYwaC05NiAgICAgQzUwLjE0NCwwLDAsNTAuMTQ0LDAsMTEydjI4OGMwLDYxLjg1Niw1MC4xNDQsMTEyLDExMiwxMTJoMjg4YzYxLjg1NiwwLDExMi01MC4xNDQsMTEyLTExMlYyODhINDgweiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0xNzYsNDE2aDMyVjI4OGMwLTEyNS43NiwxMDcuNTItMTI4LDExMi0xMjhoMTA1LjQ0bC04NC42NCw4NC42NGwyMi41NiwyMi41NmwxMTItMTEyYzYuMjA0LTYuMjQxLDYuMjA0LTE2LjMxOSwwLTIyLjU2ICAgICBsLTExMi0xMTJsLTIyLjcyLDIyLjcybDg0LjgsODQuNjRIMzIwYy0xLjQ0LDAtMTQ0LDEuNzYtMTQ0LDE2MFY0MTZ6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.download-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3MS4yIDQ3MS4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzEuMiA0NzEuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTQ1Ny43LDIzMC4xNWMtNy41LDAtMTMuNSw2LTEzLjUsMTMuNXYxMjIuOGMwLDMzLjQtMjcuMiw2MC41LTYwLjUsNjAuNUg4Ny41Yy0zMy40LDAtNjAuNS0yNy4yLTYwLjUtNjAuNXYtMTI0LjggICAgYzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MTI0LjhjMCw0OC4zLDM5LjMsODcuNSw4Ny41LDg3LjVoMjk2LjJjNDguMywwLDg3LjUtMzkuMyw4Ny41LTg3LjV2LTEyMi44ICAgIEM0NzEuMiwyMzYuMjUsNDY1LjIsMjMwLjE1LDQ1Ny43LDIzMC4xNXoiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJNMjI2LjEsMzQ2Ljc1YzIuNiwyLjYsNi4xLDQsOS41LDRzNi45LTEuMyw5LjUtNGw4NS44LTg1LjhjNS4zLTUuMyw1LjMtMTMuOCwwLTE5LjFjLTUuMy01LjMtMTMuOC01LjMtMTkuMSwwbC02Mi43LDYyLjggICAgVjMwLjc1YzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MjczLjlsLTYyLjgtNjIuOGMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xICAgIEwyMjYuMSwzNDYuNzV6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=)}.close-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3NS4yIDQ3NS4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzUuMiA0NzUuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTQwNS42LDY5LjZDMzYwLjcsMjQuNywzMDEuMSwwLDIzNy42LDBzLTEyMy4xLDI0LjctMTY4LDY5LjZTMCwxNzQuMSwwLDIzNy42czI0LjcsMTIzLjEsNjkuNiwxNjhzMTA0LjUsNjkuNiwxNjgsNjkuNiAgICBzMTIzLjEtMjQuNywxNjgtNjkuNnM2OS42LTEwNC41LDY5LjYtMTY4UzQ1MC41LDExNC41LDQwNS42LDY5LjZ6IE0zODYuNSwzODYuNWMtMzkuOCwzOS44LTkyLjcsNjEuNy0xNDguOSw2MS43ICAgIHMtMTA5LjEtMjEuOS0xNDguOS02MS43Yy04Mi4xLTgyLjEtODIuMS0yMTUuNywwLTI5Ny44QzEyOC41LDQ4LjksMTgxLjQsMjcsMjM3LjYsMjdzMTA5LjEsMjEuOSwxNDguOSw2MS43ICAgIEM0NjguNiwxNzAuOCw0NjguNiwzMDQuNCwzODYuNSwzODYuNXoiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJNMzQyLjMsMTMyLjljLTUuMy01LjMtMTMuOC01LjMtMTkuMSwwbC04NS42LDg1LjZMMTUyLDEzMi45Yy01LjMtNS4zLTEzLjgtNS4zLTE5LjEsMGMtNS4zLDUuMy01LjMsMTMuOCwwLDE5LjEgICAgbDg1LjYsODUuNmwtODUuNiw4NS42Yy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWMyLjYsMi42LDYuMSw0LDkuNSw0czYuOS0xLjMsOS41LTRsODUuNi04NS42bDg1LjYsODUuNmMyLjYsMi42LDYuMSw0LDkuNSw0ICAgIGMzLjUsMCw2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xbC04NS40LTg1LjZsODUuNi04NS42QzM0Ny42LDE0Ni43LDM0Ny42LDEzOC4yLDM0Mi4zLDEzMi45eiIgZmlsbD0iI0ZGRkZGRiIvPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.refresh-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4OS43MTEgNDg5LjcxMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDg5LjcxMSA0ODkuNzExOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48Zz48cGF0aCBkPSJNMTEyLjE1Niw5Ny4xMTFjNzIuMy02NS40LDE4MC41LTY2LjQsMjUzLjgtNi43bC01OC4xLDIuMmMtNy41LDAuMy0xMy4zLDYuNS0xMywxNGMwLjMsNy4zLDYuMywxMywxMy41LDEzICAgIGMwLjIsMCwwLjMsMCwwLjUsMGw4OS4yLTMuM2M3LjMtMC4zLDEzLTYuMiwxMy0xMy41di0xYzAtMC4yLDAtMC4zLDAtMC41di0wLjFsMCwwbC0zLjMtODguMmMtMC4zLTcuNS02LjYtMTMuMy0xNC0xMyAgICBjLTcuNSwwLjMtMTMuMyw2LjUtMTMsMTRsMi4xLDU1LjNjLTM2LjMtMjkuNy04MS00Ni45LTEyOC44LTQ5LjNjLTU5LjItMy0xMTYuMSwxNy4zLTE2MCw1Ny4xYy02MC40LDU0LjctODYsMTM3LjktNjYuOCwyMTcuMSAgICBjMS41LDYuMiw3LDEwLjMsMTMuMSwxMC4zYzEuMSwwLDIuMS0wLjEsMy4yLTAuNGM3LjItMS44LDExLjctOS4xLDkuOS0xNi4zQzM2LjY1NiwyMTguMjExLDU5LjA1NiwxNDUuMTExLDExMi4xNTYsOTcuMTExeiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik00NjIuNDU2LDE5NS41MTFjLTEuOC03LjItOS4xLTExLjctMTYuMy05LjljLTcuMiwxLjgtMTEuNyw5LjEtOS45LDE2LjNjMTYuOSw2OS42LTUuNiwxNDIuNy01OC43LDE5MC43ICAgIGMtMzcuMywzMy43LTg0LjEsNTAuMy0xMzAuNyw1MC4zYy00NC41LDAtODguOS0xNS4xLTEyNC43LTQ0LjlsNTguOC01LjNjNy40LTAuNywxMi45LTcuMiwxMi4yLTE0LjdzLTcuMi0xMi45LTE0LjctMTIuMmwtODguOSw4ICAgIGMtNy40LDAuNy0xMi45LDcuMi0xMi4yLDE0LjdsOCw4OC45YzAuNiw3LDYuNSwxMi4zLDEzLjQsMTIuM2MwLjQsMCwwLjgsMCwxLjItMC4xYzcuNC0wLjcsMTIuOS03LjIsMTIuMi0xNC43bC00LjgtNTQuMSAgICBjMzYuMywyOS40LDgwLjgsNDYuNSwxMjguMyw0OC45YzMuOCwwLjIsNy42LDAuMywxMS4zLDAuM2M1NS4xLDAsMTA3LjUtMjAuMiwxNDguNy01Ny40ICAgIEM0NTYuMDU2LDM1Ny45MTEsNDgxLjY1NiwyNzQuODExLDQ2Mi40NTYsMTk1LjUxMXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPg==)}.copy{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4OC4zIDQ4OC4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODguMyA0ODguMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTMxNC4yNSw4NS40aC0yMjdjLTIxLjMsMC0zOC42LDE3LjMtMzguNiwzOC42djMyNS43YzAsMjEuMywxNy4zLDM4LjYsMzguNiwzOC42aDIyN2MyMS4zLDAsMzguNi0xNy4zLDM4LjYtMzguNlYxMjQgICAgQzM1Mi43NSwxMDIuNywzMzUuNDUsODUuNCwzMTQuMjUsODUuNHogTTMyNS43NSw0NDkuNmMwLDYuNC01LjIsMTEuNi0xMS42LDExLjZoLTIyN2MtNi40LDAtMTEuNi01LjItMTEuNi0xMS42VjEyNCAgICBjMC02LjQsNS4yLTExLjYsMTEuNi0xMS42aDIyN2M2LjQsMCwxMS42LDUuMiwxMS42LDExLjZWNDQ5LjZ6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTQwMS4wNSwwaC0yMjdjLTIxLjMsMC0zOC42LDE3LjMtMzguNiwzOC42YzAsNy41LDYsMTMuNSwxMy41LDEzLjVzMTMuNS02LDEzLjUtMTMuNWMwLTYuNCw1LjItMTEuNiwxMS42LTExLjZoMjI3ICAgIGM2LjQsMCwxMS42LDUuMiwxMS42LDExLjZ2MzI1LjdjMCw2LjQtNS4yLDExLjYtMTEuNiwxMS42Yy03LjUsMC0xMy41LDYtMTMuNSwxMy41czYsMTMuNSwxMy41LDEzLjVjMjEuMywwLDM4LjYtMTcuMywzOC42LTM4LjYgICAgVjM4LjZDNDM5LjY1LDE3LjMsNDIyLjM1LDAsNDAxLjA1LDB6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=)}"]
  }]
}];
UpperButtonsComponent.propDecorators = {
  currentImage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  buttonsConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  refresh: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  delete: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  navigate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  download: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  close: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  fullscreen: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  customEmit: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component with clickable dots (small circles) to navigate between images inside the modal gallery.
 */
class DotsComponent extends AccessibleComponent {
  constructor() {
    super(...arguments);
    /**
     * Object of type `DotsConfig` to init DotsComponent's features.
     * For instance, it contains a param to show/hide this component.
     */
    this.dotsConfig = {
      visible: true
    };
    /**
     * Output to emit clicks on dots. The payload contains a number that represent
     * the index of the clicked dot.
     */
    this.clickDot = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /**
   * Method ´ngOnInit´ to build `configDots` applying a default value.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   * @return {?}
   */
  ngOnInit() {
    /** @type {?} */
    const defaultConfig = {
      visible: true
    };
    this.configDots = Object.assign(defaultConfig, this.dotsConfig);
  }
  /**
   * Method ´ngOnChanges´ to change `configDots` if the input dotsConfig is changed.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * @param {?} changes
   * @return {?}
   */
  ngOnChanges(changes) {
    /** @type {?} */
    const dotsConfigChanges = changes.dotsConfig;
    if (dotsConfigChanges && dotsConfigChanges.currentValue !== dotsConfigChanges.previousValue) {
      this.configDots = dotsConfigChanges.currentValue;
    }
  }
  /**
   * Method to check if an image is active (i.e. the current image).
   * It checks currentImage and images to prevent errors.
   * @param {?} index
   * @return {?} boolean true if is active (and input params are valid), false otherwise
   */
  isActive(index) {
    if (!this.currentImage || !this.images || this.images.length === 0) {
      return false;
    }
    /** @type {?} */
    let imageIndex;
    try {
      imageIndex = getIndex(this.currentImage, this.images);
    } catch (err) {
      console.error(`Internal error while trying to show the active 'dot'`, err);
      return false;
    }
    return index === imageIndex;
  }
  /**
   * Method called by events from keyboard and mouse.
   * @param {?} index
   * @param {?} event
   * @return {?}
   */
  onDotEvent(index, event) {
    /** @type {?} */
    const result = super.handleImageEvent(event);
    if (result === NEXT) {
      this.clickDot.emit(index);
    }
  }
  /**
   * Method used in the template to track ids in ngFor.
   * @param {?} index
   * @param {?} item
   * @return {?} number the id of the item
   */
  trackById(index, item) {
    return item.id;
  }
}
DotsComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
  args: [{
    selector: 'ks-dots',
    template: "<nav class=\"dots-container\" [attr.aria-label]=\"accessibilityConfig?.dotsContainerAriaLabel\"\n     [title]=\"accessibilityConfig?.dotsContainerTitle\">\n  <ng-container *ngIf=\"!configDots || configDots?.visible\">\n    <div class=\"inside dot\"\n         *ngFor=\"let img of images; trackBy: trackById; let index = index\"\n         [ngClass]=\"{'active': isActive(index)}\"\n         [attr.aria-label]=\"accessibilityConfig?.dotAriaLabel + ' ' + (index + 1)\"\n         [tabindex]=\"0\" role=\"navigation\"\n         (click)=\"onDotEvent(index, $event)\" (keyup)=\"onDotEvent(index, $event)\"></div>\n  </ng-container>\n</nav>\n",
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
    styles: [".dots-container{display:flex;flex-direction:row;justify-content:center;margin-bottom:30px}.dots-container>.dot{background:#fff;border-radius:5px;height:10px;margin-left:4px;margin-right:4px;width:10px;cursor:pointer;opacity:.5}.dots-container>.dot:hover{opacity:.9;transition:opacity .5s}.dots-container>.dot.active{cursor:pointer;opacity:.9}@-webkit-keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@-webkit-keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}@keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}"]
  }]
}];
DotsComponent.propDecorators = {
  currentImage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  images: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  dotsConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  accessibilityConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  clickDot: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component with image previews
 */
class PreviewsComponent extends AccessibleComponent {
  constructor() {
    super(...arguments);
    /**
     * Output to emit the clicked preview. The payload contains the `ImageEvent` associated to the clicked preview.
     */
    this.clickPreview = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    // /**
    //  * Output to emit the clicked arrow. The payload contains which arrow (left or right).
    //  */
    // @Output()
    // clickArrow: EventEmitter<InteractionEvent> = new EventEmitter<InteractionEvent>();
    /**
     * Enum of type `Action` that represents a mouse click on a button.
     * Declared here to be used inside the template.
     */
    this.clickAction = Action.CLICK;
    /**
     * Enum of type `Action` that represents a keyboard action.
     * Declared here to be used inside the template.
     */
    this.keyboardAction = Action.KEYBOARD;
    /**
     * Array of `InternalLibImage` exposed to the template. This field is initialized
     * applying transformations, default values and so on to the input of the same type.
     */
    this.previews = [];
    /**
     * Default preview's size object, also used in the template to apply default sizes to ksSize's directive.
     */
    this.defaultPreviewSize = {
      height: '50px',
      width: 'auto'
    };
    /**
     * Default preview's config object
     */
    this.defaultPreviewConfig = {
      visible: true,
      number: 3,
      arrows: true,
      clickable: true,
      // alwaysCenter: false, // TODO still not implemented
      size: this.defaultPreviewSize
    };
  }
  /**
   * Method ´ngOnInit´ to build `configPreview` applying a default value and also to
   * init the `previews` array.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   * @return {?}
   */
  ngOnInit() {
    this.configPreview = Object.assign({}, this.defaultPreviewConfig, this.previewConfig);
    // if number is <= 0 reset to default
    if (this.configPreview && this.configPreview.number && this.configPreview.number <= 0) {
      this.configPreview.number = this.defaultPreviewConfig.number;
    }
    // init previews based on currentImage and the full array of images
    this.initPreviews(this.currentImage, this.images);
  }
  /**
   * Method to check if an image is active (i.e. a preview image).
   * @param {?} preview
   * @return {?} boolean true if is active, false otherwise
   */
  isActive(preview) {
    if (!preview || !this.currentImage) {
      return false;
    }
    return preview.id === this.currentImage.id;
  }
  // TODO improve this method to simplify the sourcecode + remove duplicated codelines
  /**
   * Method ´ngOnChanges´ to update `previews` array.
   * Also, both `start` and `end` local variables will be updated accordingly.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   * @param {?} changes
   * @return {?}
   */
  ngOnChanges(changes) {
    /** @type {?} */
    const images = changes.images;
    /** @type {?} */
    const currentImage = changes.currentImage;
    /** @type {?} */
    let prev;
    /** @type {?} */
    let current;
    if (currentImage) {
      prev = currentImage.previousValue;
      current = currentImage.currentValue;
    } else {
      current = this.currentImage;
    }
    if (current && images && images.previousValue && images.currentValue) {
      // I'm in this if statement, if input images are changed (for instance, because I removed one of them with the 'delete button',
      // or because users changed the images array while modal gallery is still open).
      // In this case, I have to re-init previews, because the input array of images is changed.
      this.initPreviews(current, images.currentValue);
    }
    if (prev && current && prev.id !== current.id) {
      this.updatePreviews(prev, current);
    }
  }
  /**
   * Method called by events from both keyboard and mouse on a preview.
   * This will trigger the `clickpreview` output with the input preview as its payload.
   * @param {?} preview
   * @param {?} event
   * @param {?=} action
   * @return {?}
   */
  onImageEvent(preview, event, action = Action.NORMAL) {
    if (!this.configPreview || !this.configPreview.clickable) {
      return;
    }
    /** @type {?} */
    const result = super.handleImageEvent(event);
    if (result === NEXT || result === PREV) {
      this.clickPreview.emit(new ImageModalEvent(action, getIndex(preview, this.images)));
    }
  }
  /**
   * Method called by events from both keyboard and mouse on a navigation arrow.
   * It also emits an event to specify which arrow.
   * @param {?} direction
   * @param {?} event
   * @param {?=} action
   * @return {?}
   */
  onNavigationEvent(direction, event, action = Action.NORMAL) {
    /** @type {?} */
    const result = super.handleNavigationEvent(direction, event);
    if (result === NEXT) {
      // this.clickArrow.emit(<InteractionEvent>{ source: 'modal-previews', payload: DIRECTION_RIGHT, action: action });
      this.next();
    } else if (result === PREV) {
      // this.clickArrow.emit(<InteractionEvent>{ source: 'modal-previews', payload: DIRECTION_LEFT, action: action });
      this.previous();
    }
  }
  /**
   * Method used in the template to track ids in ngFor.
   * @param {?} index
   * @param {?} item
   * @return {?} number the id of the item
   */
  trackById(index, item) {
    return item.id;
  }
  /**
   * Private method to init previews based on the currentImage and the full array of images.
   * The current image in mandatory to show always the current preview (as highlighted).
   * @private
   * @param {?} currentImage
   * @param {?} images
   * @return {?}
   */
  initPreviews(currentImage, images) {
    /** @type {?} */
    let index;
    try {
      index = getIndex(currentImage, images);
    } catch (err) {
      throw err;
    }
    switch (index) {
      case 0:
        // first image
        this.setBeginningIndexesPreviews();
        break;
      case images.length - 1:
        // last image
        this.setEndIndexesPreviews();
        break;
      default:
        // other images
        this.setIndexesPreviews();
        break;
    }
    this.previews = images.filter(
    /**
    * @param {?} img
    * @param {?} i
    * @return {?}
    */
    (img, i) => i >= this.start && i < this.end);
  }
  /**
   * Private method to init both `start` and `end` to the beginning.
   * @private
   * @return {?}
   */
  setBeginningIndexesPreviews() {
    this.start = 0;
    this.end = Math.min( /** @type {?} */this.configPreview.number, this.images.length);
  }
  /**
   * Private method to init both `start` and `end` to the end.
   * @private
   * @return {?}
   */
  setEndIndexesPreviews() {
    this.start = this.images.length - 1 - ( /** @type {?} */this.configPreview.number - 1);
    this.end = this.images.length;
  }
  /**
   * Private method to update both `start` and `end` based on the currentImage.
   * @private
   * @return {?}
   */
  setIndexesPreviews() {
    this.start = getIndex(this.currentImage, this.images) - Math.floor( /** @type {?} */this.configPreview.number / 2);
    this.end = getIndex(this.currentImage, this.images) + Math.floor( /** @type {?} */this.configPreview.number / 2) + 1;
  }
  /**
   * Private method to update the visible previews navigating to the right (next).
   * @private
   * @return {?}
   */
  next() {
    // check if nextImage should be blocked
    if (this.isPreventSliding(this.images.length - 1)) {
      return;
    }
    if (this.end === this.images.length) {
      return;
    }
    this.start++;
    this.end = Math.min(this.end + 1, this.images.length);
    this.previews = this.images.filter(
    /**
    * @param {?} img
    * @param {?} i
    * @return {?}
    */
    (img, i) => i >= this.start && i < this.end);
  }
  /**
   * Private method to update the visible previews navigating to the left (previous).
   * @private
   * @return {?}
   */
  previous() {
    // check if prevImage should be blocked
    if (this.isPreventSliding(0)) {
      return;
    }
    if (this.start === 0) {
      return;
    }
    this.start = Math.max(this.start - 1, 0);
    this.end = Math.min(this.end - 1, this.images.length);
    this.previews = this.images.filter(
    /**
    * @param {?} img
    * @param {?} i
    * @return {?}
    */
    (img, i) => i >= this.start && i < this.end);
  }
  /**
   * Private method to block/permit sliding between previews.
   * @private
   * @param {?} boundaryIndex
   * @return {?} boolean if true block sliding, otherwise not
   */
  isPreventSliding(boundaryIndex) {
    return !!this.slideConfig && this.slideConfig.infinite === false && getIndex(this.currentImage, this.images) === boundaryIndex;
  }
  /**
   * Private method to handle navigation changing the previews array and other variables.
   * @private
   * @param {?} prev
   * @param {?} current
   * @return {?}
   */
  updatePreviews(prev, current) {
    // to manage infinite sliding I have to reset both `start` and `end` at the beginning
    // to show again previews from the first image.
    // This happens when you navigate over the last image to return to the first one
    /** @type {?} */
    let prevIndex;
    /** @type {?} */
    let currentIndex;
    try {
      prevIndex = getIndex(prev, this.images);
      currentIndex = getIndex(current, this.images);
    } catch (err) {
      console.error('Cannot get previous and current image indexes in previews');
      throw err;
    }
    if (prevIndex === this.images.length - 1 && currentIndex === 0) {
      // first image
      this.setBeginningIndexesPreviews();
      this.previews = this.images.filter(
      /**
      * @param {?} img
      * @param {?} i
      * @return {?}
      */
      (img, i) => i >= this.start && i < this.end);
      return;
    }
    // the same for the opposite case, when you navigate back from the fist image to go to the last one.
    if (prevIndex === 0 && currentIndex === this.images.length - 1) {
      // last image
      this.setEndIndexesPreviews();
      this.previews = this.images.filter(
      /**
      * @param {?} img
      * @param {?} i
      * @return {?}
      */
      (img, i) => i >= this.start && i < this.end);
      return;
    }
    // otherwise manage standard scenarios
    if (prevIndex > currentIndex) {
      this.previous();
    } else if (prevIndex < currentIndex) {
      this.next();
    }
  }
}
PreviewsComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
  args: [{
    selector: 'ks-previews',
    template: "<nav class=\"previews-container\"\n     [attr.aria-label]=\"accessibilityConfig?.previewsContainerAriaLabel\"\n     [title]=\"accessibilityConfig?.previewsContainerTitle\">\n\n  <ng-container *ngIf=\"configPreview?.visible\">\n    <a class=\"nav-left\"\n       [attr.aria-label]=\"accessibilityConfig?.previewScrollPrevAriaLabel\"\n       [tabindex]=\"configPreview.arrows && start > 0 ? 0 : -1\" role=\"button\"\n       (click)=\"onNavigationEvent('left', $event)\" (keyup)=\"onNavigationEvent('left', $event)\">\n      <div class=\"inside {{configPreview.arrows && start > 0 ? 'left-arrow-preview-image' : 'empty-arrow-preview-image'}}\"\n           aria-hidden=\"true\"\n           [title]=\"accessibilityConfig?.previewScrollPrevTitle\"></div>\n    </a>\n\n    <ng-container *ngFor=\"let preview of previews; trackBy: trackById; let index = index\">\n      <img *ngIf=\"preview?.modal?.img\"\n           class=\"inside preview-image {{isActive(preview) ? 'active' : ''}}{{!configPreview.clickable ? ' unclickable' : ''}}\"\n           [src]=\"preview.plain?.img ? preview.plain.img : preview.modal.img\"\n           ksSize [sizeConfig]=\"{width: configPreview.size ? configPreview.size.width : defaultPreviewSize.width,\n                                 height: configPreview.size ? configPreview.size.height : defaultPreviewSize.height}\"\n           [attr.aria-label]=\"preview.modal.ariaLabel ? preview.modal.ariaLabel : ''\"\n           [title]=\"preview.modal.title ? preview.modal.title : ''\"\n           alt=\"{{preview.modal.alt ? preview.modal.alt : ''}}\"\n           [tabindex]=\"0\" role=\"img\"\n           (click)=\"onImageEvent(preview, $event, clickAction)\" (keyup)=\"onImageEvent(preview, $event, keyboardAction)\"/>\n    </ng-container>\n\n\n    <a class=\"nav-right\"\n       [attr.aria-label]=\"accessibilityConfig?.previewScrollNextAriaLabel\"\n       [tabindex]=\"configPreview.arrows && end < images.length ? 0 : -1\" role=\"button\"\n       (click)=\"onNavigationEvent('right', $event)\" (keyup)=\"onNavigationEvent('right', $event)\">\n      <div class=\"inside {{configPreview.arrows && end < images.length ? 'right-arrow-preview-image' : 'empty-arrow-preview-image'}}\"\n           aria-hidden=\"true\"\n           [title]=\"accessibilityConfig?.previewScrollNextTitle\"></div>\n    </a>\n  </ng-container>\n\n</nav>\n",
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
    styles: ["@media only screen and (max-width:767px),only screen and (max-device-width:767px){.previews-container,.previews-container>.nav-left,.previews-container>.nav-right,.previews-container>.preview-image{display:none}}@media only screen and (min-device-width:768px){.previews-container{align-items:center;-webkit-animation:.8s fadein-semi-visible08;animation:.8s fadein-semi-visible08;display:flex;flex-direction:row;justify-content:center;margin-bottom:15px}.previews-container>.preview-image{cursor:pointer;margin-left:2px;margin-right:2px;opacity:.7;height:50px}.previews-container>.preview-image.active{opacity:1}.previews-container>.preview-image.unclickable{cursor:not-allowed}.previews-container>.preview-image:hover{opacity:1;transition:opacity .5s}.previews-container .nav,.previews-container>.nav-left,.previews-container>.nav-right{color:#919191;cursor:pointer;transition:.5s}.previews-container .nav:hover,.previews-container>.nav-left:hover,.previews-container>.nav-right:hover{transform:scale(1.1)}.previews-container>.nav-left{margin-right:10px}.previews-container>.nav-right{margin-left:10px}}@-webkit-keyframes fadein-visible{from{opacity:0}to{opacity:1}}@keyframes fadein-visible{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@-webkit-keyframes fadein-semi-visible08{from{opacity:0}to{opacity:.8}}@keyframes fadein-semi-visible08{from{opacity:0}to{opacity:.8}}@-webkit-keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}@keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}", ".arrow-preview-image,.empty-arrow-preview-image,.left-arrow-preview-image,.right-arrow-preview-image{width:15px;height:15px;opacity:.5}.empty-arrow-preview-image{background:#000;opacity:0}.left-arrow-preview-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:.5s}.left-arrow-preview-image:hover{transform:scale(1.2)}.right-arrow-preview-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:.5s}.right-arrow-preview-image:hover{transform:scale(1.2)}"]
  }]
}];
PreviewsComponent.propDecorators = {
  currentImage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  images: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  slideConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  previewConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  accessibilityConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  clickPreview: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component with the loading spinner
 */
class LoadingSpinnerComponent {
  constructor() {
    /**
     * Enum of type `LoadingType` to choose the standard loading spinner.
     * Declared here to be used inside the template.
     */
    this.loadingStandard = LoadingType.STANDARD;
    /**
     * Enum of type `LoadingType` to choose the bars loading spinner.
     * Declared here to be used inside the template.
     */
    this.loadingBars = LoadingType.BARS;
    /**
     * Enum of type `LoadingType` to choose the circular loading spinner.
     * Declared here to be used inside the template.
     */
    this.loadingCircular = LoadingType.CIRCULAR;
    /**
     * Enum of type `LoadingType` to choose the dots loading spinner.
     * Declared here to be used inside the template.
     */
    this.loadingDots = LoadingType.DOTS;
    /**
     * Enum of type `LoadingType` to choose the cube flipping loading spinner.
     * Declared here to be used inside the template.
     */
    this.loadingCubeFlipping = LoadingType.CUBE_FLIPPING;
    /**
     * Enum of type `LoadingType` to choose the circles loading spinner.
     * Declared here to be used inside the template.
     */
    this.loadingCircles = LoadingType.CIRCLES;
    /**
     * Enum of type `LoadingType` to choose the explosing squares loading spinner.
     * Declared here to be used inside the template.
     */
    this.loadingExplosingSquares = LoadingType.EXPLOSING_SQUARES;
  }
}
LoadingSpinnerComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
  args: [{
    selector: 'ks-loading-spinner',
    template: "<div [attr.aria-label]=\"accessibilityConfig?.loadingSpinnerAriaLabel\"\n     [title]=\"accessibilityConfig?.loadingSpinnerTitle\">\n\n  <ng-container [ngSwitch]=\"loadingConfig.type\">\n    <ng-container *ngSwitchCase=\"loadingStandard\">\n      <div class=\"cssload-loader\">\n        <div class=\"cssload-inner cssload-one\"></div>\n        <div class=\"cssload-inner cssload-two\"></div>\n        <div class=\"cssload-inner cssload-three\"></div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"loadingBars\">\n      <div class=\"loader-bars\">\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"loadingCircular\">\n      <div class=\"loader-circular\">\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"loadingDots\">\n      <div class=\"loader-dots\">\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"loadingCubeFlipping\">\n      <div class=\"cube-wrapper\">\n        <div class=\"cube-folding\">\n          <span class=\"leaf1\"></span>\n          <span class=\"leaf2\"></span>\n          <span class=\"leaf3\"></span>\n          <span class=\"leaf4\"></span>\n        </div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"loadingCircles\">\n      <div id=\"preloader\">\n        <div id=\"loader\"></div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"loadingExplosingSquares\">\n      <div class=\"loader\">\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n      </div>\n    </ng-container>\n    <!--<ng-container *ngSwitchDefault>-->\n    <!---->\n    <!--</ng-container>-->\n  </ng-container>\n</div>\n",
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
    styles: [".cssload-loader{position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;width:64px;height:64px;border-radius:50%;-o-border-radius:50%;-ms-border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;perspective:800px}.cssload-inner{position:absolute;width:100%;height:100%;box-sizing:border-box;-o-box-sizing:border-box;-ms-box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;border-radius:50%;-o-border-radius:50%;-ms-border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%}.cssload-inner.cssload-one{left:0;top:0;animation:.6s linear infinite cssload-rotate-one;-o-animation:.6s linear infinite cssload-rotate-one;-ms-animation:cssload-rotate-one .6s linear infinite;-webkit-animation:.6s linear infinite cssload-rotate-one;-moz-animation:.6s linear infinite cssload-rotate-one;border-bottom:3px solid rgba(255,255,255,.99)}.cssload-inner.cssload-two{right:0;top:0;animation:.6s linear infinite cssload-rotate-two;-o-animation:.6s linear infinite cssload-rotate-two;-ms-animation:cssload-rotate-two .6s linear infinite;-webkit-animation:.6s linear infinite cssload-rotate-two;-moz-animation:.6s linear infinite cssload-rotate-two;border-right:3px solid #fff}.cssload-inner.cssload-three{right:0;bottom:0;animation:.6s linear infinite cssload-rotate-three;-o-animation:.6s linear infinite cssload-rotate-three;-ms-animation:cssload-rotate-three .6s linear infinite;-webkit-animation:.6s linear infinite cssload-rotate-three;-moz-animation:.6s linear infinite cssload-rotate-three;border-top:3px solid #fff}@keyframes cssload-rotate-one{0%{transform:rotateX(35deg) rotateY(-45deg) rotateZ(0)}100%{transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@-webkit-keyframes cssload-rotate-one{0%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(0)}100%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@keyframes cssload-rotate-two{0%{transform:rotateX(50deg) rotateY(10deg) rotateZ(0)}100%{transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@-webkit-keyframes cssload-rotate-two{0%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(0)}100%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@keyframes cssload-rotate-three{0%{transform:rotateX(35deg) rotateY(55deg) rotateZ(0)}100%{transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}@-webkit-keyframes cssload-rotate-three{0%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(0)}100%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}", ".loader-dots{position:absolute;top:0;bottom:0;right:0;left:0;color:#fefcff;font-size:10px;margin:auto;width:1em;height:1em;border-radius:50%;text-indent:-9999em;-webkit-animation:1.3s linear infinite load4;animation:1.3s linear infinite load4;transform:translateZ(0)}@-webkit-keyframes load4{0%,100%{box-shadow:0 -3em 0 .2em,2em -2em 0 0,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 0}12.5%{box-shadow:0 -3em 0 0,2em -2em 0 .2em,3em 0 0 0,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}25%{box-shadow:0 -3em 0 -.5em,2em -2em 0 0,3em 0 0 .2em,2em 2em 0 0,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}37.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 0,2em 2em 0 .2em,0 3em 0 0,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}50%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 0,0 3em 0 .2em,-2em 2em 0 0,-3em 0 0 -1em,-2em -2em 0 -1em}62.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 0,-2em 2em 0 .2em,-3em 0 0 0,-2em -2em 0 -1em}75%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0 0 .2em,-2em -2em 0 0}87.5%{box-shadow:0 -3em 0 0,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0 0 0,-2em -2em 0 .2em}}@keyframes load4{0%,100%{box-shadow:0 -3em 0 .2em,2em -2em 0 0,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 0}12.5%{box-shadow:0 -3em 0 0,2em -2em 0 .2em,3em 0 0 0,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}25%{box-shadow:0 -3em 0 -.5em,2em -2em 0 0,3em 0 0 .2em,2em 2em 0 0,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}37.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 0,2em 2em 0 .2em,0 3em 0 0,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}50%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 0,0 3em 0 .2em,-2em 2em 0 0,-3em 0 0 -1em,-2em -2em 0 -1em}62.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 0,-2em 2em 0 .2em,-3em 0 0 0,-2em -2em 0 -1em}75%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0 0 .2em,-2em -2em 0 0}87.5%{box-shadow:0 -3em 0 0,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0 0 0,-2em -2em 0 .2em}}", ".loader-bars,.loader-bars:after,.loader-bars:before{background:#fefcff;-webkit-animation:1s ease-in-out infinite load1;animation:1s ease-in-out infinite load1;width:1em;height:4em}.loader-bars{position:absolute;top:0;bottom:0;right:0;left:0;color:#fefcff;text-indent:-9999em;margin:auto;font-size:11px;transform:translateZ(0);-webkit-animation-delay:-.16s;animation-delay:-.16s}.loader-bars:after,.loader-bars:before{position:absolute;top:0;content:''}.loader-bars:before{left:-1.5em;-webkit-animation-delay:-.32s;animation-delay:-.32s}.loader-bars:after{left:1.5em}@-webkit-keyframes load1{0%,100%,80%{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}@keyframes load1{0%,100%,80%{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}", ".loader-circular,.loader-circular:after{border-radius:50%;width:10em;height:10em}.loader-circular{position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;font-size:10px;text-indent:-9999em;border-top:1.1em solid rgba(255,255,255,.2);border-right:1.1em solid rgba(255,255,255,.2);border-bottom:1.1em solid rgba(255,255,255,.2);border-left:1.1em solid #fff;transform:translateZ(0);-webkit-animation:1.1s linear infinite load8;animation:1.1s linear infinite load8}@-webkit-keyframes load8{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes load8{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}", ".cube-folding{width:50px;height:50px;display:inline-block;transform:rotate(45deg);font-size:0}.cube-folding span{position:relative;width:25px;height:25px;transform:scale(1.1);display:inline-block}.cube-folding span::before{content:'';background-color:#fff;position:absolute;left:0;top:0;display:block;width:25px;height:25px;transform-origin:100% 100%;-webkit-animation:2.5s linear infinite both folding;animation:2.5s linear infinite both folding}.cube-folding .leaf2{transform:rotateZ(90deg) scale(1.1)}.cube-folding .leaf2::before{-webkit-animation-delay:.3s;animation-delay:.3s;background-color:#f2f2f2}.cube-folding .leaf3{transform:rotateZ(270deg) scale(1.1)}.cube-folding .leaf3::before{-webkit-animation-delay:.9s;animation-delay:.9s;background-color:#f2f2f2}.cube-folding .leaf4{transform:rotateZ(180deg) scale(1.1)}.cube-folding .leaf4::before{-webkit-animation-delay:.6s;animation-delay:.6s;background-color:#e6e6e6}@-webkit-keyframes folding{0%,10%{transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{transform:perspective(140px) rotateX(0);opacity:1}100%,90%{transform:perspective(140px) rotateY(180deg);opacity:0}}@keyframes folding{0%,10%{transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{transform:perspective(140px) rotateX(0);opacity:1}100%,90%{transform:perspective(140px) rotateY(180deg);opacity:0}}.cube-wrapper{position:fixed;left:50%;top:50%;margin-top:-50px;margin-left:-50px;width:100px;height:100px;text-align:center}@-webkit-keyframes text{100%{top:35px}}@keyframes text{100%{top:35px}}@-webkit-keyframes shadow{100%{bottom:-18px;width:100px}}@keyframes shadow{100%{bottom:-18px;width:100px}}", "#preloader{position:fixed;top:0;left:0;width:100%;height:100%}#loader{display:block;position:relative;left:50%;top:50%;width:100px;height:100px;margin:-75px 0 0 -75px;border-radius:50%;border:3px solid transparent;border-top-color:#b4b4b4;-webkit-animation:2s linear infinite spin;animation:2s linear infinite spin}#loader:before{content:\"\";position:absolute;top:5px;left:5px;right:5px;bottom:5px;border-radius:50%;border:3px solid transparent;border-top-color:#d9d9d9;-webkit-animation:3s linear infinite spin;animation:3s linear infinite spin}#loader:after{content:\"\";position:absolute;top:15px;left:15px;right:15px;bottom:15px;border-radius:50%;border:3px solid transparent;border-top-color:#fff;-webkit-animation:1.5s linear infinite spin;animation:1.5s linear infinite spin}@-webkit-keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}", "@-webkit-keyframes loader{0%,10%,100%{width:60px;height:60px}65%{width:150px;height:150px}}@keyframes loader{0%,10%,100%{width:60px;height:60px}65%{width:150px;height:150px}}@-webkit-keyframes loaderBlock{0%,30%{transform:rotate(0)}55%{background-color:#b4b4b4}100%{transform:rotate(90deg)}}@keyframes loaderBlock{0%,30%{transform:rotate(0)}55%{background-color:#b4b4b4}100%{transform:rotate(90deg)}}@-webkit-keyframes loaderBlockInverse{0%,20%{transform:rotate(0)}55%{background-color:#d9d9d9}100%{transform:rotate(-90deg)}}@keyframes loaderBlockInverse{0%,20%{transform:rotate(0)}55%{background-color:#d9d9d9}100%{transform:rotate(-90deg)}}.loader{position:absolute;top:50%;left:50%;width:60px;height:60px;transform:translate(-50%,-50%) rotate(45deg) translate3d(0,0,0);-webkit-animation:1.2s ease-in-out infinite loader;animation:1.2s ease-in-out infinite loader}.loader span{position:absolute;display:block;width:40px;height:40px;background-color:#fff;-webkit-animation:1.2s ease-in-out infinite both loaderBlock;animation:1.2s ease-in-out infinite both loaderBlock}.loader span:nth-child(1){top:0;left:0}.loader span:nth-child(2){top:0;right:0;-webkit-animation:1.2s ease-in-out infinite both loaderBlockInverse;animation:1.2s ease-in-out infinite both loaderBlockInverse}.loader span:nth-child(3){bottom:0;left:0;-webkit-animation:1.2s ease-in-out infinite both loaderBlockInverse;animation:1.2s ease-in-out infinite both loaderBlockInverse}.loader span:nth-child(4){bottom:0;right:0}"]
  }]
}];
LoadingSpinnerComponent.propDecorators = {
  loadingConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  accessibilityConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component with the gallery of thumbs.
 * In receives an array of Images, a boolean to show/hide
 * the gallery (feature used by imagePointer) and a config
 * object to customize the behaviour of this component.
 * Also, it emits click events as outputs.
 */
class PlainGalleryComponent {
  constructor() {
    /**
     * Output to emit an event when an image is changed.
     */
    this.show = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Bi-dimensional array of `Image` object to store images to display as plain gallery.
     * [] by default.
     */
    this.imageGrid = [];
    /**
     * Boolean passed as input to `ks-wrap` directive to configure flex-wrap css property.
     * However it's not enough, because you need to limit the width using `widthStyle` public variable.
     * For more info check https://developer.mozilla.org/it/docs/Web/CSS/flex-wrap
     */
    this.wrapStyle = false;
    /**
     * String passed as input to `ks-wrap` directive to set width to be able to force overflow.
     * In this way, `wrapStyle` (flex-wrap css property) will be used as requested.
     */
    this.widthStyle = '';
    /**
     * Default image size object
     */
    this.defaultSize = {
      width: '50px',
      height: 'auto'
    };
    /**
     * Default layout config object
     * Note that length=-1 means infinity
     */
    this.defaultLayout = new LineLayout(this.defaultSize, {
      length: -1,
      wrap: false
    }, 'flex-start');
    /**
     * Default plain gallery config object
     */
    this.defaultPlainConfig = {
      strategy: PlainGalleryStrategy.ROW,
      layout: this.defaultLayout,
      advanced: {
        aTags: false,
        additionalBackground: '50% 50%/cover'
      }
    };
  }
  /**
   * Method ´ngOnChanges´ to update both `imageGrid` and`configPlainGallery`.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   * @param {?} changes
   * @return {?}
   */
  ngOnChanges(changes) {
    /** @type {?} */
    const imagesChange = changes.images;
    /** @type {?} */
    const configChange = changes.plainGalleryConfig;
    // I'm using !change.firstChange because the first time will be called both onInit and onChange and I don't
    // want to execute initialization two times.
    if (configChange && !configChange.firstChange && (configChange.previousValue !== configChange.currentValue || !configChange.previousValue && !configChange.currentValue)) {
      this.configPlainGallery = this.initPlainGalleryConfig();
    }
    if (imagesChange && !imagesChange.firstChange && imagesChange.previousValue !== imagesChange.currentValue) {
      this.initImageGrid();
    }
  }
  /**
   * Method ´ngOnInit´ to init both `configPlainGallery` calling `initPlainGalleryConfig()`
   * and `imageGrid invoking `initImageGrid()`.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   * @return {?}
   */
  ngOnInit() {
    this.configPlainGallery = this.initPlainGalleryConfig();
    this.initImageGrid();
  }
  /**
   * Method called when you click on an image of the plain (or inline) gallery.
   * This will emit the show event with the index number as payload.
   * @param {?} index
   * @return {?}
   */
  showModalGallery(index) {
    this.show.emit(index);
  }
  /**
   * Method called when you click on an image of the plain (or inline) gallery.
   * This will emit the show event with the image as payload.
   * @param {?} img
   * @return {?}
   */
  showModalGalleryByImage(img) {
    /** @type {?} */
    const index = this.images.findIndex(
    /**
    * @param {?} val
    * @return {?}
    */
    val => val && img && val.id === img.id);
    this.showModalGallery(index);
  }
  /**
   * Method to get `alt attribute`.
   * `alt` specifies an alternate text for an image, if the image cannot be displayed.
   * @param {?} image
   * @return {?} string alt description of the image
   */
  getAltPlainDescriptionByImage(image) {
    if (!image) {
      return '';
    }
    return image.plain && image.plain.description ? image.plain.description : `Image ${getIndex(image, this.images) + 1}`;
  }
  /**
   * Method to get the title for an image.
   * @param {?} image
   * @return {?} string the title of the input image
   */
  getTitleDisplay(image) {
    /** @type {?} */
    let description = '';
    if (image.plain && image.plain.description) {
      description = image.plain.description;
    } else if (image.modal && image.modal.description) {
      description = image.modal.description;
    }
    /** @type {?} */
    const currentIndex = getIndex(image, this.images);
    /** @type {?} */
    const prevDescription = 'Image ' + (currentIndex + 1) + '/' + this.images.length;
    /** @type {?} */
    let currImgDescription = description ? description : '';
    if (currImgDescription !== '') {
      currImgDescription = ' - ' + currImgDescription;
    }
    return prevDescription + currImgDescription;
  }
  /**
   * Method used in the template to track ids in ngFor.
   * @param {?} index
   * @param {?} item
   * @return {?} number the id of the item
   */
  trackById(index, item) {
    return item.id;
  }
  /**
   * Private method to build and return a `PlainGalleryConfig` object, proving also default values.
   * @throws an Error if layout and strategy aren't compatible
   * @private
   * @return {?} PlainGalleryConfig the plain gallery configuration
   */
  initPlainGalleryConfig() {
    /** @type {?} */
    const config = Object.assign({}, this.defaultPlainConfig, this.plainGalleryConfig);
    if (config.layout instanceof LineLayout) {
      if (config.strategy !== PlainGalleryStrategy.ROW && config.strategy !== PlainGalleryStrategy.COLUMN) {
        throw new Error('LineLayout requires either ROW or COLUMN strategy');
      }
      if (!config.layout || !config.layout.breakConfig) {
        throw new Error('Both layout and breakConfig must be valid');
      }
    }
    if (config.layout instanceof GridLayout) {
      if (config.strategy !== PlainGalleryStrategy.GRID) {
        throw new Error('GridLayout requires GRID strategy');
      }
      if (!config.layout || !config.layout.breakConfig) {
        throw new Error('Both layout and breakConfig must be valid');
      }
      // force wrap for grid layout
      config.layout.breakConfig.wrap = true;
    }
    if (config.layout instanceof AdvancedLayout) {
      if (config.strategy !== PlainGalleryStrategy.CUSTOM) {
        throw new Error('AdvancedLayout requires CUSTOM strategy');
      }
    }
    return config;
  }
  /**
   * Private method to init both `imageGrid` and other style variables,
   * based on the layout type.
   * @private
   * @return {?}
   */
  initImageGrid() {
    /** @type {?} */
    const config = this.configPlainGallery;
    // reset the array to prevent issues in case of GridLayout
    this.imageGrid = [];
    if (config.layout instanceof LineLayout) {
      /** @type {?} */
      const layout = config.layout;
      /** @type {?} */
      const row = this.images.filter(
      /**
      * @param {?} val
      * @param {?} i
      * @return {?}
      */
      (val, i) => i < layout.breakConfig.length || layout.breakConfig.length === -1);
      this.imageGrid = [row];
      this.size = config.layout.size;
      switch (config.strategy) {
        case PlainGalleryStrategy.ROW:
          this.directionStyle = 'row';
          break;
        case PlainGalleryStrategy.COLUMN:
          this.directionStyle = 'column';
          this.wrapStyle = layout.breakConfig.wrap;
          break;
      }
      this.justifyStyle = layout.justify;
    }
    if (config.layout instanceof GridLayout) {
      /** @type {?} */
      const layout = config.layout;
      /** @type {?} */
      const count = Math.ceil(this.images.length / layout.breakConfig.length);
      /** @type {?} */
      let start = 0;
      /** @type {?} */
      let end = layout.breakConfig.length - 1;
      for (let j = 0; j < count; j++) {
        /** @type {?} */
        const row = this.images.filter(
        /**
        * @param {?} val
        * @param {?} i
        * @return {?}
        */
        (val, i) => i >= start && i <= end);
        this.imageGrid.push(row);
        start = end + 1;
        end = start + layout.breakConfig.length - 1;
      }
      this.size = config.layout.size;
      /** @type {?} */
      const pixels = +layout.size.width.replace('px', '');
      this.widthStyle = pixels * layout.breakConfig.length + pixels / 2 + 'px';
      this.wrapStyle = layout.breakConfig.wrap;
      this.directionStyle = 'row';
    }
    if (config.layout instanceof AdvancedLayout) {
      this.imageGrid = [this.images];
    }
  }
}
PlainGalleryComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
  args: [{
    selector: 'ks-plain-gallery',
    template: "<div *ngIf=\"showGallery\"\n     class=\"plain-container\"\n     ksWrap [wrap]=\"wrapStyle\" [width]=\"widthStyle\"\n     ksDirection [direction]=\"directionStyle\" [justify]=\"justifyStyle\"\n     [attr.aria-label]=\"accessibilityConfig?.plainGalleryContentAriaLabel\"\n     [title]=\"accessibilityConfig?.plainGalleryContentTitle\">\n\n  <ng-container *ngFor=\"let imgRow of imageGrid; let i = index\">\n    <ng-container *ngFor=\"let imgCol of imgRow; let j = index\">\n\n      <ng-container *ngIf=\"!configPlainGallery.advanced?.aTags; else aTags\">\n        <img *ngIf=\"imgCol?.modal?.img\"\n             [src]=\"imgCol.plain?.img ? imgCol.plain.img : imgCol.modal.img\"\n             class=\"image\"\n             ksSize [sizeConfig]=\"{width: size?.width, height: size?.height}\"\n             [attr.aria-label]=\"imgCol.plain?.ariaLabel\"\n             [title]=\"imgCol.plain?.title ? imgCol.plain.title : getTitleDisplay(imgCol)\"\n             alt=\"{{imgCol.plain?.alt ? imgCol.plain.alt : getAltPlainDescriptionByImage(imgCol)}}\"\n             [tabindex]=\"0\" role=\"img\"\n             (click)=\"showModalGalleryByImage(imgCol)\" (keyup)=\"showModalGalleryByImage(imgCol)\"/>\n      </ng-container>\n\n      <!-- Add directive to set background with the image url as param to pass thumb or img-->\n      <!-- to do something like this <a style=\"background: url('path to image') 50% 50%/cover\">.-->\n      <ng-template #aTags>\n        <a *ngIf=\"imgCol?.modal?.img\"\n           class=\"a-tag-image\"\n           ksATagBgImage [image]=\"imgCol\" [style]=\"configPlainGallery.advanced?.additionalBackground\"\n           ksSize [sizeConfig]=\"{width: size?.width, height: size?.height}\"\n           [attr.aria-label]=\"imgCol.plain?.ariaLabel\"\n           [title]=\"imgCol.plain?.title ? imgCol.plain.title : getTitleDisplay(imgCol)\"\n           [tabindex]=\"0\"\n           (click)=\"showModalGallery(j)\" (keyup)=\"showModalGallery(j)\"></a>\n      </ng-template>\n\n    </ng-container>\n  </ng-container>\n\n</div>\n\n",
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
    styles: [".plain-container{align-items:center;display:flex}.plain-container .image{cursor:pointer;height:auto;width:50px;margin:2px}.plain-container .a-tag-image{cursor:pointer;margin:2px}"]
  }]
}];
PlainGalleryComponent.propDecorators = {
  images: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  showGallery: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  plainGalleryConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  accessibilityConfig: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  show: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Array of all components.
 * @type {?}
 */
const COMPONENTS = [BackgroundComponent, PlainGalleryComponent, ModalGalleryComponent, CarouselComponent, CarouselPreviewsComponent, UpperButtonsComponent, DotsComponent, PreviewsComponent, CurrentImageComponent, LoadingSpinnerComponent, AccessibleComponent];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// to prevent bad scrolling behaviour on mobile phone with carousels.
// From @mohaxspb (https://github.com/Ks89/angular-modal-gallery/pull/187)
class KsHammerGestureConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.HammerGestureConfig {
  /**
   * @param {?} element
   * @return {?}
   */
  buildHammer(element) {
    return new Hammer(element, {
      touchAction: 'pan-y'
    });
  }
}
/**
 * Module to import it in the root module of your application.
 */
class GalleryModule {
  /**
   * Importing with '.forRoot()' is deprecated. I'll provide a new way to do this in next releases.
   * Will be removed in 8.0.0 or 9.0.0
   * @param {?=} config
   * @return {?}
   */
  static forRoot(config) {
    return {
      ngModule: GalleryModule,
      providers: [{
        provide: KEYBOARD_CONFIGURATION,
        useValue: config ? config : {}
      }, {
        provide: KeyboardService,
        useFactory: setupKeyboardService,
        deps: [KEYBOARD_CONFIGURATION]
      }]
    };
  }
}
GalleryModule.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
  args: [{
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    declarations: [COMPONENTS, DIRECTIVES],
    exports: [ModalGalleryComponent, CarouselComponent],
    providers: [{
      provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.HAMMER_GESTURE_CONFIG,
      useClass: KsHammerGestureConfig
    }]
  }]
}];
/**
 * Function to setup the keyboard service inside the `forRoot` method.
 * @param {?} injector
 * @return {?} KeyboardService an instance of the `KeyboardService`
 */
function setupKeyboardService(injector) {
  return new KeyboardService(injector);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



/***/ }),

/***/ 12076:
/*!***********************************!*\
  !*** ./node_modules/atoa/atoa.js ***!
  \***********************************/
/***/ ((module) => {

module.exports = function atoa(a, n) {
  return Array.prototype.slice.call(a, n);
};

/***/ }),

/***/ 37260:
/*!*****************************************!*\
  !*** ./node_modules/contra/debounce.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var ticky = __webpack_require__(/*! ticky */ 55001);
module.exports = function debounce(fn, args, ctx) {
  if (!fn) {
    return;
  }
  ticky(function run() {
    fn.apply(ctx || null, args || []);
  });
};

/***/ }),

/***/ 99257:
/*!****************************************!*\
  !*** ./node_modules/contra/emitter.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var atoa = __webpack_require__(/*! atoa */ 12076);
var debounce = __webpack_require__(/*! ./debounce */ 37260);
module.exports = function emitter(thing, options) {
  var opts = options || {};
  var evt = {};
  if (thing === undefined) {
    thing = {};
  }
  thing.on = function (type, fn) {
    if (!evt[type]) {
      evt[type] = [fn];
    } else {
      evt[type].push(fn);
    }
    return thing;
  };
  thing.once = function (type, fn) {
    fn._once = true; // thing.off(fn) still works!
    thing.on(type, fn);
    return thing;
  };
  thing.off = function (type, fn) {
    var c = arguments.length;
    if (c === 1) {
      delete evt[type];
    } else if (c === 0) {
      evt = {};
    } else {
      var et = evt[type];
      if (!et) {
        return thing;
      }
      et.splice(et.indexOf(fn), 1);
    }
    return thing;
  };
  thing.emit = function () {
    var args = atoa(arguments);
    return thing.emitterSnapshot(args.shift()).apply(this, args);
  };
  thing.emitterSnapshot = function (type) {
    var et = (evt[type] || []).slice(0);
    return function () {
      var args = atoa(arguments);
      var ctx = this || thing;
      if (type === 'error' && opts.throws !== false && !et.length) {
        throw args.length === 1 ? args[0] : args;
      }
      et.forEach(function emitter(listen) {
        if (opts.async) {
          debounce(listen, args, ctx);
        } else {
          listen.apply(ctx, args);
        }
        if (listen._once) {
          thing.off(type, listen);
        }
      });
      return thing;
    };
  };
  return thing;
};

/***/ }),

/***/ 89497:
/*!*************************************************!*\
  !*** ./node_modules/crossvent/src/crossvent.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var customEvent = __webpack_require__(/*! custom-event */ 19313);
var eventmap = __webpack_require__(/*! ./eventmap */ 79496);
var doc = global.document;
var addEvent = addEventEasy;
var removeEvent = removeEventEasy;
var hardCache = [];
if (!global.addEventListener) {
  addEvent = addEventHard;
  removeEvent = removeEventHard;
}
module.exports = {
  add: addEvent,
  remove: removeEvent,
  fabricate: fabricateEvent
};
function addEventEasy(el, type, fn, capturing) {
  return el.addEventListener(type, fn, capturing);
}
function addEventHard(el, type, fn) {
  return el.attachEvent('on' + type, wrap(el, type, fn));
}
function removeEventEasy(el, type, fn, capturing) {
  return el.removeEventListener(type, fn, capturing);
}
function removeEventHard(el, type, fn) {
  var listener = unwrap(el, type, fn);
  if (listener) {
    return el.detachEvent('on' + type, listener);
  }
}
function fabricateEvent(el, type, model) {
  var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
  if (el.dispatchEvent) {
    el.dispatchEvent(e);
  } else {
    el.fireEvent('on' + type, e);
  }
  function makeClassicEvent() {
    var e;
    if (doc.createEvent) {
      e = doc.createEvent('Event');
      e.initEvent(type, true, true);
    } else if (doc.createEventObject) {
      e = doc.createEventObject();
    }
    return e;
  }
  function makeCustomEvent() {
    return new customEvent(type, {
      detail: model
    });
  }
}
function wrapperFactory(el, type, fn) {
  return function wrapper(originalEvent) {
    var e = originalEvent || global.event;
    e.target = e.target || e.srcElement;
    e.preventDefault = e.preventDefault || function preventDefault() {
      e.returnValue = false;
    };
    e.stopPropagation = e.stopPropagation || function stopPropagation() {
      e.cancelBubble = true;
    };
    e.which = e.which || e.keyCode;
    fn.call(el, e);
  };
}
function wrap(el, type, fn) {
  var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
  hardCache.push({
    wrapper: wrapper,
    element: el,
    type: type,
    fn: fn
  });
  return wrapper;
}
function unwrap(el, type, fn) {
  var i = find(el, type, fn);
  if (i) {
    var wrapper = hardCache[i].wrapper;
    hardCache.splice(i, 1); // free up a tad of memory
    return wrapper;
  }
}
function find(el, type, fn) {
  var i, item;
  for (i = 0; i < hardCache.length; i++) {
    item = hardCache[i];
    if (item.element === el && item.type === type && item.fn === fn) {
      return i;
    }
  }
}

/***/ }),

/***/ 79496:
/*!************************************************!*\
  !*** ./node_modules/crossvent/src/eventmap.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


var eventmap = [];
var eventname = '';
var ron = /^on/;
for (eventname in global) {
  if (ron.test(eventname)) {
    eventmap.push(eventname.slice(2));
  }
}
module.exports = eventmap;

/***/ }),

/***/ 19313:
/*!********************************************!*\
  !*** ./node_modules/custom-event/index.js ***!
  \********************************************/
/***/ ((module) => {

var NativeCustomEvent = global.CustomEvent;
function useNative() {
  try {
    var p = new NativeCustomEvent('cat', {
      detail: {
        foo: 'bar'
      }
    });
    return 'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {}
  return false;
}

/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */

module.exports = useNative() ? NativeCustomEvent :
// IE >= 9
'undefined' !== typeof document && 'function' === typeof document.createEvent ? function CustomEvent(type, params) {
  var e = document.createEvent('CustomEvent');
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} :
// IE <= 8
function CustomEvent(type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
};

/***/ }),

/***/ 80908:
/*!*****************************************!*\
  !*** ./node_modules/dragula/classes.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


var cache = {};
var start = '(?:^|\\s)';
var end = '(?:\\s|$)';
function lookupClass(className) {
  var cached = cache[className];
  if (cached) {
    cached.lastIndex = 0;
  } else {
    cache[className] = cached = new RegExp(start + className + end, 'g');
  }
  return cached;
}
function addClass(el, className) {
  var current = el.className;
  if (!current.length) {
    el.className = className;
  } else if (!lookupClass(className).test(current)) {
    el.className += ' ' + className;
  }
}
function rmClass(el, className) {
  el.className = el.className.replace(lookupClass(className), ' ').trim();
}
module.exports = {
  add: addClass,
  rm: rmClass
};

/***/ }),

/***/ 73568:
/*!*****************************************!*\
  !*** ./node_modules/dragula/dragula.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var emitter = __webpack_require__(/*! contra/emitter */ 99257);
var crossvent = __webpack_require__(/*! crossvent */ 89497);
var classes = __webpack_require__(/*! ./classes */ 80908);
var doc = document;
var documentElement = doc.documentElement;
function dragula(initialContainers, options) {
  var len = arguments.length;
  if (len === 1 && Array.isArray(initialContainers) === false) {
    options = initialContainers;
    initialContainers = [];
  }
  var _mirror; // mirror image
  var _source; // source container
  var _item; // item being dragged
  var _offsetX; // reference x
  var _offsetY; // reference y
  var _moveX; // reference move x
  var _moveY; // reference move y
  var _initialSibling; // reference sibling when grabbed
  var _currentSibling; // reference sibling now
  var _copy; // item used for copying
  var _renderTimer; // timer for setTimeout renderMirrorImage
  var _lastDropTarget = null; // last container item was over
  var _grabbed; // holds mousedown context until first mousemove

  var o = options || {};
  if (o.moves === void 0) {
    o.moves = always;
  }
  if (o.accepts === void 0) {
    o.accepts = always;
  }
  if (o.invalid === void 0) {
    o.invalid = invalidTarget;
  }
  if (o.containers === void 0) {
    o.containers = initialContainers || [];
  }
  if (o.isContainer === void 0) {
    o.isContainer = never;
  }
  if (o.copy === void 0) {
    o.copy = false;
  }
  if (o.copySortSource === void 0) {
    o.copySortSource = false;
  }
  if (o.revertOnSpill === void 0) {
    o.revertOnSpill = false;
  }
  if (o.removeOnSpill === void 0) {
    o.removeOnSpill = false;
  }
  if (o.direction === void 0) {
    o.direction = 'vertical';
  }
  if (o.ignoreInputTextSelection === void 0) {
    o.ignoreInputTextSelection = true;
  }
  if (o.mirrorContainer === void 0) {
    o.mirrorContainer = doc.body;
  }
  var drake = emitter({
    containers: o.containers,
    start: manualStart,
    end: end,
    cancel: cancel,
    remove: remove,
    destroy: destroy,
    canMove: canMove,
    dragging: false
  });
  if (o.removeOnSpill === true) {
    drake.on('over', spillOver).on('out', spillOut);
  }
  events();
  return drake;
  function isContainer(el) {
    return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
  }
  function events(remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousedown', grab);
    touchy(documentElement, op, 'mouseup', release);
  }
  function eventualMovements(remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
  }
  function movements(remove) {
    var op = remove ? 'remove' : 'add';
    crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8
    crossvent[op](documentElement, 'click', preventGrabbed);
  }
  function destroy() {
    events(true);
    release({});
  }
  function preventGrabbed(e) {
    if (_grabbed) {
      e.preventDefault();
    }
  }
  function grab(e) {
    _moveX = e.clientX;
    _moveY = e.clientY;
    var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;
    if (ignore) {
      return; // we only care about honest-to-god left clicks and touch events
    }

    var item = e.target;
    var context = canStart(item);
    if (!context) {
      return;
    }
    _grabbed = context;
    eventualMovements();
    if (e.type === 'mousedown') {
      if (isInput(item)) {
        // see also: https://github.com/bevacqua/dragula/issues/208
        item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
      } else {
        e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
      }
    }
  }

  function startBecauseMouseMoved(e) {
    if (!_grabbed) {
      return;
    }
    if (whichMouseButton(e) === 0) {
      release({});
      return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
    }

    // truthy check fixes #239, equality fixes #207, fixes #501
    if (e.clientX !== void 0 && Math.abs(e.clientX - _moveX) <= (o.slideFactorX || 0) && e.clientY !== void 0 && Math.abs(e.clientY - _moveY) <= (o.slideFactorY || 0)) {
      return;
    }
    if (o.ignoreInputTextSelection) {
      var clientX = getCoord('clientX', e) || 0;
      var clientY = getCoord('clientY', e) || 0;
      var elementBehindCursor = doc.elementFromPoint(clientX, clientY);
      if (isInput(elementBehindCursor)) {
        return;
      }
    }
    var grabbed = _grabbed; // call to end() unsets _grabbed
    eventualMovements(true);
    movements();
    end();
    start(grabbed);
    var offset = getOffset(_item);
    _offsetX = getCoord('pageX', e) - offset.left;
    _offsetY = getCoord('pageY', e) - offset.top;
    classes.add(_copy || _item, 'gu-transit');
    renderMirrorImage();
    drag(e);
  }
  function canStart(item) {
    if (drake.dragging && _mirror) {
      return;
    }
    if (isContainer(item)) {
      return; // don't drag container itself
    }

    var handle = item;
    while (getParent(item) && isContainer(getParent(item)) === false) {
      if (o.invalid(item, handle)) {
        return;
      }
      item = getParent(item); // drag target should be a top element
      if (!item) {
        return;
      }
    }
    var source = getParent(item);
    if (!source) {
      return;
    }
    if (o.invalid(item, handle)) {
      return;
    }
    var movable = o.moves(item, source, handle, nextEl(item));
    if (!movable) {
      return;
    }
    return {
      item: item,
      source: source
    };
  }
  function canMove(item) {
    return !!canStart(item);
  }
  function manualStart(item) {
    var context = canStart(item);
    if (context) {
      start(context);
    }
  }
  function start(context) {
    if (isCopy(context.item, context.source)) {
      _copy = context.item.cloneNode(true);
      drake.emit('cloned', _copy, context.item, 'copy');
    }
    _source = context.source;
    _item = context.item;
    _initialSibling = _currentSibling = nextEl(context.item);
    drake.dragging = true;
    drake.emit('drag', _item, _source);
  }
  function invalidTarget() {
    return false;
  }
  function end() {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    drop(item, getParent(item));
  }
  function ungrab() {
    _grabbed = false;
    eventualMovements(true);
    movements(true);
  }
  function release(e) {
    ungrab();
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var clientX = getCoord('clientX', e) || 0;
    var clientY = getCoord('clientY', e) || 0;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    if (dropTarget && (_copy && o.copySortSource || !_copy || dropTarget !== _source)) {
      drop(item, dropTarget);
    } else if (o.removeOnSpill) {
      remove();
    } else {
      cancel();
    }
  }
  function drop(item, target) {
    var parent = getParent(item);
    if (_copy && o.copySortSource && target === _source) {
      parent.removeChild(_item);
    }
    if (isInitialPlacement(target)) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, target, _source, _currentSibling);
    }
    cleanup();
  }
  function remove() {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var parent = getParent(item);
    if (parent) {
      parent.removeChild(item);
    }
    drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
    cleanup();
  }
  function cancel(revert) {
    if (!drake.dragging) {
      return;
    }
    var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
    var item = _copy || _item;
    var parent = getParent(item);
    var initial = isInitialPlacement(parent);
    if (initial === false && reverts) {
      if (_copy) {
        if (parent) {
          parent.removeChild(_copy);
        }
      } else {
        _source.insertBefore(item, _initialSibling);
      }
    }
    if (initial || reverts) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, parent, _source, _currentSibling);
    }
    cleanup();
  }
  function cleanup() {
    var item = _copy || _item;
    ungrab();
    removeMirrorImage();
    if (item) {
      classes.rm(item, 'gu-transit');
    }
    if (_renderTimer) {
      clearTimeout(_renderTimer);
    }
    drake.dragging = false;
    if (_lastDropTarget) {
      drake.emit('out', item, _lastDropTarget, _source);
    }
    drake.emit('dragend', item);
    _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
  }
  function isInitialPlacement(target, s) {
    var sibling;
    if (s !== void 0) {
      sibling = s;
    } else if (_mirror) {
      sibling = _currentSibling;
    } else {
      sibling = nextEl(_copy || _item);
    }
    return target === _source && sibling === _initialSibling;
  }
  function findDropTarget(elementBehindCursor, clientX, clientY) {
    var target = elementBehindCursor;
    while (target && !accepted()) {
      target = getParent(target);
    }
    return target;
    function accepted() {
      var droppable = isContainer(target);
      if (droppable === false) {
        return false;
      }
      var immediate = getImmediateChild(target, elementBehindCursor);
      var reference = getReference(target, immediate, clientX, clientY);
      var initial = isInitialPlacement(target, reference);
      if (initial) {
        return true; // should always be able to drop it right back where it was
      }

      return o.accepts(_item, target, _source, reference);
    }
  }
  function drag(e) {
    if (!_mirror) {
      return;
    }
    e.preventDefault();
    var clientX = getCoord('clientX', e) || 0;
    var clientY = getCoord('clientY', e) || 0;
    var x = clientX - _offsetX;
    var y = clientY - _offsetY;
    _mirror.style.left = x + 'px';
    _mirror.style.top = y + 'px';
    var item = _copy || _item;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    var changed = dropTarget !== null && dropTarget !== _lastDropTarget;
    if (changed || dropTarget === null) {
      out();
      _lastDropTarget = dropTarget;
      over();
    }
    var parent = getParent(item);
    if (dropTarget === _source && _copy && !o.copySortSource) {
      if (parent) {
        parent.removeChild(item);
      }
      return;
    }
    var reference;
    var immediate = getImmediateChild(dropTarget, elementBehindCursor);
    if (immediate !== null) {
      reference = getReference(dropTarget, immediate, clientX, clientY);
    } else if (o.revertOnSpill === true && !_copy) {
      reference = _initialSibling;
      dropTarget = _source;
    } else {
      if (_copy && parent) {
        parent.removeChild(item);
      }
      return;
    }
    if (reference === null && changed || reference !== item && reference !== nextEl(item)) {
      _currentSibling = reference;
      dropTarget.insertBefore(item, reference);
      drake.emit('shadow', item, dropTarget, _source);
    }
    function moved(type) {
      drake.emit(type, item, _lastDropTarget, _source);
    }
    function over() {
      if (changed) {
        moved('over');
      }
    }
    function out() {
      if (_lastDropTarget) {
        moved('out');
      }
    }
  }
  function spillOver(el) {
    classes.rm(el, 'gu-hide');
  }
  function spillOut(el) {
    if (drake.dragging) {
      classes.add(el, 'gu-hide');
    }
  }
  function renderMirrorImage() {
    if (_mirror) {
      return;
    }
    var rect = _item.getBoundingClientRect();
    _mirror = _item.cloneNode(true);
    _mirror.style.width = getRectWidth(rect) + 'px';
    _mirror.style.height = getRectHeight(rect) + 'px';
    classes.rm(_mirror, 'gu-transit');
    classes.add(_mirror, 'gu-mirror');
    o.mirrorContainer.appendChild(_mirror);
    touchy(documentElement, 'add', 'mousemove', drag);
    classes.add(o.mirrorContainer, 'gu-unselectable');
    drake.emit('cloned', _mirror, _item, 'mirror');
  }
  function removeMirrorImage() {
    if (_mirror) {
      classes.rm(o.mirrorContainer, 'gu-unselectable');
      touchy(documentElement, 'remove', 'mousemove', drag);
      getParent(_mirror).removeChild(_mirror);
      _mirror = null;
    }
  }
  function getImmediateChild(dropTarget, target) {
    var immediate = target;
    while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
      immediate = getParent(immediate);
    }
    if (immediate === documentElement) {
      return null;
    }
    return immediate;
  }
  function getReference(dropTarget, target, x, y) {
    var horizontal = o.direction === 'horizontal';
    var reference = target !== dropTarget ? inside() : outside();
    return reference;
    function outside() {
      // slower, but able to figure out any position
      var len = dropTarget.children.length;
      var i;
      var el;
      var rect;
      for (i = 0; i < len; i++) {
        el = dropTarget.children[i];
        rect = el.getBoundingClientRect();
        if (horizontal && rect.left + rect.width / 2 > x) {
          return el;
        }
        if (!horizontal && rect.top + rect.height / 2 > y) {
          return el;
        }
      }
      return null;
    }
    function inside() {
      // faster, but only available if dropped inside a child element
      var rect = target.getBoundingClientRect();
      if (horizontal) {
        return resolve(x > rect.left + getRectWidth(rect) / 2);
      }
      return resolve(y > rect.top + getRectHeight(rect) / 2);
    }
    function resolve(after) {
      return after ? nextEl(target) : target;
    }
  }
  function isCopy(item, container) {
    return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
  }
}
function touchy(el, op, type, fn) {
  var touch = {
    mouseup: 'touchend',
    mousedown: 'touchstart',
    mousemove: 'touchmove'
  };
  var pointers = {
    mouseup: 'pointerup',
    mousedown: 'pointerdown',
    mousemove: 'pointermove'
  };
  var microsoft = {
    mouseup: 'MSPointerUp',
    mousedown: 'MSPointerDown',
    mousemove: 'MSPointerMove'
  };
  if (global.navigator.pointerEnabled) {
    crossvent[op](el, pointers[type], fn);
  } else if (global.navigator.msPointerEnabled) {
    crossvent[op](el, microsoft[type], fn);
  } else {
    crossvent[op](el, touch[type], fn);
    crossvent[op](el, type, fn);
  }
}
function whichMouseButton(e) {
  if (e.touches !== void 0) {
    return e.touches.length;
  }
  if (e.which !== void 0 && e.which !== 0) {
    return e.which;
  } // see https://github.com/bevacqua/dragula/issues/261
  if (e.buttons !== void 0) {
    return e.buttons;
  }
  var button = e.button;
  if (button !== void 0) {
    // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
    return button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
  }
}
function getOffset(el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
    top: rect.top + getScroll('scrollTop', 'pageYOffset')
  };
}
function getScroll(scrollProp, offsetProp) {
  if (typeof global[offsetProp] !== 'undefined') {
    return global[offsetProp];
  }
  if (documentElement.clientHeight) {
    return documentElement[scrollProp];
  }
  return doc.body[scrollProp];
}
function getElementBehindPoint(point, x, y) {
  point = point || {};
  var state = point.className || '';
  var el;
  point.className += ' gu-hide';
  el = doc.elementFromPoint(x, y);
  point.className = state;
  return el;
}
function never() {
  return false;
}
function always() {
  return true;
}
function getRectWidth(rect) {
  return rect.width || rect.right - rect.left;
}
function getRectHeight(rect) {
  return rect.height || rect.bottom - rect.top;
}
function getParent(el) {
  return el.parentNode === doc ? null : el.parentNode;
}
function isInput(el) {
  return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el);
}
function isEditable(el) {
  if (!el) {
    return false;
  } // no parents were editable
  if (el.contentEditable === 'false') {
    return false;
  } // stop the lookup
  if (el.contentEditable === 'true') {
    return true;
  } // found a contentEditable element in the chain
  return isEditable(getParent(el)); // contentEditable is set to 'inherit'
}

function nextEl(el) {
  return el.nextElementSibling || manually();
  function manually() {
    var sibling = el;
    do {
      sibling = sibling.nextSibling;
    } while (sibling && sibling.nodeType !== 1);
    return sibling;
  }
}
function getEventHost(e) {
  // on touchend event, we have to use `e.changedTouches`
  // see http://stackoverflow.com/questions/7192563/touchend-event-properties
  // see https://github.com/bevacqua/dragula/issues/34
  if (e.targetTouches && e.targetTouches.length) {
    return e.targetTouches[0];
  }
  if (e.changedTouches && e.changedTouches.length) {
    return e.changedTouches[0];
  }
  return e;
}
function getCoord(coord, e) {
  var host = getEventHost(e);
  var missMap = {
    pageX: 'clientX',
    // IE8
    pageY: 'clientY' // IE8
  };

  if (coord in missMap && !(coord in host) && missMap[coord] in host) {
    coord = missMap[coord];
  }
  return host[coord];
}
module.exports = dragula;

/***/ }),

/***/ 40868:
/*!*****************************************!*\
  !*** ./node_modules/hammerjs/hammer.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function (window, document, exportName, undefined) {
  'use strict';

  var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
  var TEST_ELEMENT = document.createElement('div');
  var TYPE_FUNCTION = 'function';
  var round = Math.round;
  var abs = Math.abs;
  var now = Date.now;

  /**
   * set a timeout with a given scope
   * @param {Function} fn
   * @param {Number} timeout
   * @param {Object} context
   * @returns {number}
   */
  function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
  }

  /**
   * if the argument is an array, we want to execute the fn on each entry
   * if it aint an array we don't want to do a thing.
   * this is used by all the methods that accept a single and array argument.
   * @param {*|Array} arg
   * @param {String} fn
   * @param {Object} [context]
   * @returns {Boolean}
   */
  function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
      each(arg, context[fn], context);
      return true;
    }
    return false;
  }

  /**
   * walk objects and arrays
   * @param {Object} obj
   * @param {Function} iterator
   * @param {Object} context
   */
  function each(obj, iterator, context) {
    var i;
    if (!obj) {
      return;
    }
    if (obj.forEach) {
      obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
      i = 0;
      while (i < obj.length) {
        iterator.call(context, obj[i], i, obj);
        i++;
      }
    } else {
      for (i in obj) {
        obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
      }
    }
  }

  /**
   * wrap a method with a deprecation warning and stack trace
   * @param {Function} method
   * @param {String} name
   * @param {String} message
   * @returns {Function} A new function wrapping the supplied method.
   */
  function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function () {
      var e = new Error('get-stack-trace');
      var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '').replace(/^\s+at\s+/gm, '').replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';
      var log = window.console && (window.console.warn || window.console.log);
      if (log) {
        log.call(window.console, deprecationMessage, stack);
      }
      return method.apply(this, arguments);
    };
  }

  /**
   * extend object.
   * means that properties in dest will be overwritten by the ones in src.
   * @param {Object} target
   * @param {...Object} objects_to_assign
   * @returns {Object} target
   */
  var assign;
  if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
      var output = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null) {
          for (var nextKey in source) {
            if (source.hasOwnProperty(nextKey)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
      }
      return output;
    };
  } else {
    assign = Object.assign;
  }

  /**
   * extend object.
   * means that properties in dest will be overwritten by the ones in src.
   * @param {Object} dest
   * @param {Object} src
   * @param {Boolean} [merge=false]
   * @returns {Object} dest
   */
  var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
      if (!merge || merge && dest[keys[i]] === undefined) {
        dest[keys[i]] = src[keys[i]];
      }
      i++;
    }
    return dest;
  }, 'extend', 'Use `assign`.');

  /**
   * merge the values from src in the dest.
   * means that properties that exist in dest will not be overwritten by src
   * @param {Object} dest
   * @param {Object} src
   * @returns {Object} dest
   */
  var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
  }, 'merge', 'Use `assign`.');

  /**
   * simple class inheritance
   * @param {Function} child
   * @param {Function} base
   * @param {Object} [properties]
   */
  function inherit(child, base, properties) {
    var baseP = base.prototype,
      childP;
    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;
    if (properties) {
      assign(childP, properties);
    }
  }

  /**
   * simple function bind
   * @param {Function} fn
   * @param {Object} context
   * @returns {Function}
   */
  function bindFn(fn, context) {
    return function boundFn() {
      return fn.apply(context, arguments);
    };
  }

  /**
   * let a boolean value also be a function that must return a boolean
   * this first item in args will be used as the context
   * @param {Boolean|Function} val
   * @param {Array} [args]
   * @returns {Boolean}
   */
  function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
      return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
  }

  /**
   * use the val2 when val1 is undefined
   * @param {*} val1
   * @param {*} val2
   * @returns {*}
   */
  function ifUndefined(val1, val2) {
    return val1 === undefined ? val2 : val1;
  }

  /**
   * addEventListener with multiple events at once
   * @param {EventTarget} target
   * @param {String} types
   * @param {Function} handler
   */
  function addEventListeners(target, types, handler) {
    each(splitStr(types), function (type) {
      target.addEventListener(type, handler, false);
    });
  }

  /**
   * removeEventListener with multiple events at once
   * @param {EventTarget} target
   * @param {String} types
   * @param {Function} handler
   */
  function removeEventListeners(target, types, handler) {
    each(splitStr(types), function (type) {
      target.removeEventListener(type, handler, false);
    });
  }

  /**
   * find if a node is in the given parent
   * @method hasParent
   * @param {HTMLElement} node
   * @param {HTMLElement} parent
   * @return {Boolean} found
   */
  function hasParent(node, parent) {
    while (node) {
      if (node == parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }

  /**
   * small indexOf wrapper
   * @param {String} str
   * @param {String} find
   * @returns {Boolean} found
   */
  function inStr(str, find) {
    return str.indexOf(find) > -1;
  }

  /**
   * split string on whitespace
   * @param {String} str
   * @returns {Array} words
   */
  function splitStr(str) {
    return str.trim().split(/\s+/g);
  }

  /**
   * find if a array contains the object using indexOf or a simple polyFill
   * @param {Array} src
   * @param {String} find
   * @param {String} [findByKey]
   * @return {Boolean|Number} false when not found, or the index
   */
  function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
      return src.indexOf(find);
    } else {
      var i = 0;
      while (i < src.length) {
        if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) {
          return i;
        }
        i++;
      }
      return -1;
    }
  }

  /**
   * convert array-like objects to real arrays
   * @param {Object} obj
   * @returns {Array}
   */
  function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
  }

  /**
   * unique array with objects based on a key (like 'id') or just by the array's value
   * @param {Array} src [{id:1},{id:2},{id:1}]
   * @param {String} [key]
   * @param {Boolean} [sort=False]
   * @returns {Array} [{id:1},{id:2}]
   */
  function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;
    while (i < src.length) {
      var val = key ? src[i][key] : src[i];
      if (inArray(values, val) < 0) {
        results.push(src[i]);
      }
      values[i] = val;
      i++;
    }
    if (sort) {
      if (!key) {
        results = results.sort();
      } else {
        results = results.sort(function sortUniqueArray(a, b) {
          return a[key] > b[key];
        });
      }
    }
    return results;
  }

  /**
   * get the prefixed property
   * @param {Object} obj
   * @param {String} property
   * @returns {String|Undefined} prefixed
   */
  function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);
    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
      prefix = VENDOR_PREFIXES[i];
      prop = prefix ? prefix + camelProp : property;
      if (prop in obj) {
        return prop;
      }
      i++;
    }
    return undefined;
  }

  /**
   * get a unique id
   * @returns {number} uniqueId
   */
  var _uniqueId = 1;
  function uniqueId() {
    return _uniqueId++;
  }

  /**
   * get the window object of an element
   * @param {HTMLElement} element
   * @returns {DocumentView|Window}
   */
  function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return doc.defaultView || doc.parentWindow || window;
  }
  var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
  var SUPPORT_TOUCH = ('ontouchstart' in window);
  var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
  var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
  var INPUT_TYPE_TOUCH = 'touch';
  var INPUT_TYPE_PEN = 'pen';
  var INPUT_TYPE_MOUSE = 'mouse';
  var INPUT_TYPE_KINECT = 'kinect';
  var COMPUTE_INTERVAL = 25;
  var INPUT_START = 1;
  var INPUT_MOVE = 2;
  var INPUT_END = 4;
  var INPUT_CANCEL = 8;
  var DIRECTION_NONE = 1;
  var DIRECTION_LEFT = 2;
  var DIRECTION_RIGHT = 4;
  var DIRECTION_UP = 8;
  var DIRECTION_DOWN = 16;
  var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
  var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
  var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
  var PROPS_XY = ['x', 'y'];
  var PROPS_CLIENT_XY = ['clientX', 'clientY'];

  /**
   * create new input type manager
   * @param {Manager} manager
   * @param {Function} callback
   * @returns {Input}
   * @constructor
   */
  function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function (ev) {
      if (boolOrFn(manager.options.enable, [manager])) {
        self.handler(ev);
      }
    };
    this.init();
  }
  Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function () {},
    /**
     * bind the events
     */
    init: function () {
      this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
      this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
      this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },
    /**
     * unbind the events
     */
    destroy: function () {
      this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
      this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
      this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
  };

  /**
   * create new input type manager
   * called by the Manager constructor
   * @param {Hammer} manager
   * @returns {Input}
   */
  function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;
    if (inputClass) {
      Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
      Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
      Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
      Type = MouseInput;
    } else {
      Type = TouchMouseInput;
    }
    return new Type(manager, inputHandler);
  }

  /**
   * handle input events
   * @param {Manager} manager
   * @param {String} eventType
   * @param {Object} input
   */
  function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = eventType & INPUT_START && pointersLen - changedPointersLen === 0;
    var isFinal = eventType & (INPUT_END | INPUT_CANCEL) && pointersLen - changedPointersLen === 0;
    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;
    if (isFirst) {
      manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);
    manager.recognize(input);
    manager.session.prevInput = input;
  }

  /**
   * extend the data with some usable properties like scale, rotate, velocity etc
   * @param {Object} manager
   * @param {Object} input
   */
  function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
      session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
      session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
      session.firstMultiple = false;
    }
    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;
    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);
    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);
    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = abs(overallVelocity.x) > abs(overallVelocity.y) ? overallVelocity.x : overallVelocity.y;
    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
    input.maxPointers = !session.prevInput ? input.pointers.length : input.pointers.length > session.prevInput.maxPointers ? input.pointers.length : session.prevInput.maxPointers;
    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
      target = input.srcEvent.target;
    }
    input.target = target;
  }
  function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};
    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
      prevDelta = session.prevDelta = {
        x: prevInput.deltaX || 0,
        y: prevInput.deltaY || 0
      };
      offset = session.offsetDelta = {
        x: center.x,
        y: center.y
      };
    }
    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
  }

  /**
   * velocity is calculated every x ms
   * @param {Object} session
   * @param {Object} input
   */
  function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
      deltaTime = input.timeStamp - last.timeStamp,
      velocity,
      velocityX,
      velocityY,
      direction;
    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
      var deltaX = input.deltaX - last.deltaX;
      var deltaY = input.deltaY - last.deltaY;
      var v = getVelocity(deltaTime, deltaX, deltaY);
      velocityX = v.x;
      velocityY = v.y;
      velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
      direction = getDirection(deltaX, deltaY);
      session.lastInterval = input;
    } else {
      // use latest velocity info if it doesn't overtake a minimum period
      velocity = last.velocity;
      velocityX = last.velocityX;
      velocityY = last.velocityY;
      direction = last.direction;
    }
    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
  }

  /**
   * create a simple clone from the input used for storage of firstInput and firstMultiple
   * @param {Object} input
   * @returns {Object} clonedInputData
   */
  function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
      pointers[i] = {
        clientX: round(input.pointers[i].clientX),
        clientY: round(input.pointers[i].clientY)
      };
      i++;
    }
    return {
      timeStamp: now(),
      pointers: pointers,
      center: getCenter(pointers),
      deltaX: input.deltaX,
      deltaY: input.deltaY
    };
  }

  /**
   * get the center of all the pointers
   * @param {Array} pointers
   * @return {Object} center contains `x` and `y` properties
   */
  function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
      return {
        x: round(pointers[0].clientX),
        y: round(pointers[0].clientY)
      };
    }
    var x = 0,
      y = 0,
      i = 0;
    while (i < pointersLength) {
      x += pointers[i].clientX;
      y += pointers[i].clientY;
      i++;
    }
    return {
      x: round(x / pointersLength),
      y: round(y / pointersLength)
    };
  }

  /**
   * calculate the velocity between two points. unit is in px per ms.
   * @param {Number} deltaTime
   * @param {Number} x
   * @param {Number} y
   * @return {Object} velocity `x` and `y`
   */
  function getVelocity(deltaTime, x, y) {
    return {
      x: x / deltaTime || 0,
      y: y / deltaTime || 0
    };
  }

  /**
   * get the direction between two points
   * @param {Number} x
   * @param {Number} y
   * @return {Number} direction
   */
  function getDirection(x, y) {
    if (x === y) {
      return DIRECTION_NONE;
    }
    if (abs(x) >= abs(y)) {
      return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
  }

  /**
   * calculate the absolute distance between two points
   * @param {Object} p1 {x, y}
   * @param {Object} p2 {x, y}
   * @param {Array} [props] containing x and y keys
   * @return {Number} distance
   */
  function getDistance(p1, p2, props) {
    if (!props) {
      props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
      y = p2[props[1]] - p1[props[1]];
    return Math.sqrt(x * x + y * y);
  }

  /**
   * calculate the angle between two coordinates
   * @param {Object} p1
   * @param {Object} p2
   * @param {Array} [props] containing x and y keys
   * @return {Number} angle
   */
  function getAngle(p1, p2, props) {
    if (!props) {
      props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
      y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
  }

  /**
   * calculate the rotation degrees between two pointersets
   * @param {Array} start array of pointers
   * @param {Array} end array of pointers
   * @return {Number} rotation
   */
  function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
  }

  /**
   * calculate the scale factor between two pointersets
   * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
   * @param {Array} start array of pointers
   * @param {Array} end array of pointers
   * @return {Number} scale
   */
  function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
  }
  var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
  };
  var MOUSE_ELEMENT_EVENTS = 'mousedown';
  var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

  /**
   * Mouse events input
   * @constructor
   * @extends Input
   */
  function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;
    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
  }
  inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
      var eventType = MOUSE_INPUT_MAP[ev.type];

      // on start we want to have the left mouse button down
      if (eventType & INPUT_START && ev.button === 0) {
        this.pressed = true;
      }
      if (eventType & INPUT_MOVE && ev.which !== 1) {
        eventType = INPUT_END;
      }

      // mouse must be down
      if (!this.pressed) {
        return;
      }
      if (eventType & INPUT_END) {
        this.pressed = false;
      }
      this.callback(this.manager, eventType, {
        pointers: [ev],
        changedPointers: [ev],
        pointerType: INPUT_TYPE_MOUSE,
        srcEvent: ev
      });
    }
  });
  var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
  };

  // in IE10 the pointer types is defined as an enum
  var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
  };

  var POINTER_ELEMENT_EVENTS = 'pointerdown';
  var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

  // IE10 has prefixed support, and case-sensitive
  if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
  }

  /**
   * Pointer events input
   * @constructor
   * @extends Input
   */
  function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;
    Input.apply(this, arguments);
    this.store = this.manager.session.pointerEvents = [];
  }
  inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
      var store = this.store;
      var removePointer = false;
      var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
      var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
      var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
      var isTouch = pointerType == INPUT_TYPE_TOUCH;

      // get index of the event in the store
      var storeIndex = inArray(store, ev.pointerId, 'pointerId');

      // start and mouse must be down
      if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
        if (storeIndex < 0) {
          store.push(ev);
          storeIndex = store.length - 1;
        }
      } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        removePointer = true;
      }

      // it not found, so the pointer hasn't been down (so it's probably a hover)
      if (storeIndex < 0) {
        return;
      }

      // update the event in the store
      store[storeIndex] = ev;
      this.callback(this.manager, eventType, {
        pointers: store,
        changedPointers: [ev],
        pointerType: pointerType,
        srcEvent: ev
      });
      if (removePointer) {
        // remove from the store
        store.splice(storeIndex, 1);
      }
    }
  });
  var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
  };
  var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
  var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

  /**
   * Touch events input
   * @constructor
   * @extends Input
   */
  function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;
    Input.apply(this, arguments);
  }
  inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
      var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

      // should we handle the touch events?
      if (type === INPUT_START) {
        this.started = true;
      }
      if (!this.started) {
        return;
      }
      var touches = normalizeSingleTouches.call(this, ev, type);

      // when done, reset the started state
      if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
        this.started = false;
      }
      this.callback(this.manager, type, {
        pointers: touches[0],
        changedPointers: touches[1],
        pointerType: INPUT_TYPE_TOUCH,
        srcEvent: ev
      });
    }
  });

  /**
   * @this {TouchInput}
   * @param {Object} ev
   * @param {Number} type flag
   * @returns {undefined|Array} [all, changed]
   */
  function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);
    if (type & (INPUT_END | INPUT_CANCEL)) {
      all = uniqueArray(all.concat(changed), 'identifier', true);
    }
    return [all, changed];
  }
  var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
  };
  var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

  /**
   * Multi-user touch events input
   * @constructor
   * @extends Input
   */
  function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};
    Input.apply(this, arguments);
  }
  inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
      var type = TOUCH_INPUT_MAP[ev.type];
      var touches = getTouches.call(this, ev, type);
      if (!touches) {
        return;
      }
      this.callback(this.manager, type, {
        pointers: touches[0],
        changedPointers: touches[1],
        pointerType: INPUT_TYPE_TOUCH,
        srcEvent: ev
      });
    }
  });

  /**
   * @this {TouchInput}
   * @param {Object} ev
   * @param {Number} type flag
   * @returns {undefined|Array} [all, changed]
   */
  function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
      targetIds[allTouches[0].identifier] = true;
      return [allTouches, allTouches];
    }
    var i,
      targetTouches,
      changedTouches = toArray(ev.changedTouches),
      changedTargetTouches = [],
      target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function (touch) {
      return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
      i = 0;
      while (i < targetTouches.length) {
        targetIds[targetTouches[i].identifier] = true;
        i++;
      }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
      if (targetIds[changedTouches[i].identifier]) {
        changedTargetTouches.push(changedTouches[i]);
      }

      // cleanup removed touches
      if (type & (INPUT_END | INPUT_CANCEL)) {
        delete targetIds[changedTouches[i].identifier];
      }
      i++;
    }
    if (!changedTargetTouches.length) {
      return;
    }
    return [
    // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
    uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true), changedTargetTouches];
  }

  /**
   * Combined touch and mouse input
   *
   * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
   * This because touch devices also emit mouse events while doing a touch.
   *
   * @constructor
   * @extends Input
   */

  var DEDUP_TIMEOUT = 2500;
  var DEDUP_DISTANCE = 25;
  function TouchMouseInput() {
    Input.apply(this, arguments);
    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);
    this.primaryTouch = null;
    this.lastTouches = [];
  }
  inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
      var isTouch = inputData.pointerType == INPUT_TYPE_TOUCH,
        isMouse = inputData.pointerType == INPUT_TYPE_MOUSE;
      if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
        return;
      }

      // when we're in a touch event, record touches to  de-dupe synthetic mouse event
      if (isTouch) {
        recordTouches.call(this, inputEvent, inputData);
      } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
        return;
      }
      this.callback(manager, inputEvent, inputData);
    },
    /**
     * remove the event listeners
     */
    destroy: function destroy() {
      this.touch.destroy();
      this.mouse.destroy();
    }
  });
  function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
      this.primaryTouch = eventData.changedPointers[0].identifier;
      setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
      setLastTouch.call(this, eventData);
    }
  }
  function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];
    if (touch.identifier === this.primaryTouch) {
      var lastTouch = {
        x: touch.clientX,
        y: touch.clientY
      };
      this.lastTouches.push(lastTouch);
      var lts = this.lastTouches;
      var removeLastTouch = function () {
        var i = lts.indexOf(lastTouch);
        if (i > -1) {
          lts.splice(i, 1);
        }
      };
      setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
  }
  function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX,
      y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
      var t = this.lastTouches[i];
      var dx = Math.abs(x - t.x),
        dy = Math.abs(y - t.y);
      if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
        return true;
      }
    }
    return false;
  }
  var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
  var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

  // magical touchAction value
  var TOUCH_ACTION_COMPUTE = 'compute';
  var TOUCH_ACTION_AUTO = 'auto';
  var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
  var TOUCH_ACTION_NONE = 'none';
  var TOUCH_ACTION_PAN_X = 'pan-x';
  var TOUCH_ACTION_PAN_Y = 'pan-y';
  var TOUCH_ACTION_MAP = getTouchActionProps();

  /**
   * Touch Action
   * sets the touchAction property or uses the js alternative
   * @param {Manager} manager
   * @param {String} value
   * @constructor
   */
  function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
  }
  TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function (value) {
      // find out the touch-action by the event handlers
      if (value == TOUCH_ACTION_COMPUTE) {
        value = this.compute();
      }
      if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
        this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
      }
      this.actions = value.toLowerCase().trim();
    },
    /**
     * just re-set the touchAction value
     */
    update: function () {
      this.set(this.manager.options.touchAction);
    },
    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function () {
      var actions = [];
      each(this.manager.recognizers, function (recognizer) {
        if (boolOrFn(recognizer.options.enable, [recognizer])) {
          actions = actions.concat(recognizer.getTouchAction());
        }
      });
      return cleanTouchActions(actions.join(' '));
    },
    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function (input) {
      var srcEvent = input.srcEvent;
      var direction = input.offsetDirection;

      // if the touch action did prevented once this session
      if (this.manager.session.prevented) {
        srcEvent.preventDefault();
        return;
      }
      var actions = this.actions;
      var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
      var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
      var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];
      if (hasNone) {
        //do not prevent defaults if this is a tap gesture

        var isTapPointer = input.pointers.length === 1;
        var isTapMovement = input.distance < 2;
        var isTapTouchTime = input.deltaTime < 250;
        if (isTapPointer && isTapMovement && isTapTouchTime) {
          return;
        }
      }
      if (hasPanX && hasPanY) {
        // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
        return;
      }
      if (hasNone || hasPanY && direction & DIRECTION_HORIZONTAL || hasPanX && direction & DIRECTION_VERTICAL) {
        return this.preventSrc(srcEvent);
      }
    },
    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function (srcEvent) {
      this.manager.session.prevented = true;
      srcEvent.preventDefault();
    }
  };

  /**
   * when the touchActions are collected they are not a valid value, so we need to clean things up. *
   * @param {String} actions
   * @returns {*}
   */
  function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
      return TOUCH_ACTION_NONE;
    }
    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
      return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
      return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
      return TOUCH_ACTION_MANIPULATION;
    }
    return TOUCH_ACTION_AUTO;
  }
  function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
      return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function (val) {
      // If css.supports is not supported but there is native touch-action assume it supports
      // all values. This is the case for IE 10 and 11.
      touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
  }

  /**
   * Recognizer flow explained; *
   * All recognizers have the initial state of POSSIBLE when a input session starts.
   * The definition of a input session is from the first input until the last input, with all it's movement in it. *
   * Example session for mouse-input: mousedown -> mousemove -> mouseup
   *
   * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
   * which determines with state it should be.
   *
   * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
   * POSSIBLE to give it another change on the next cycle.
   *
   *               Possible
   *                  |
   *            +-----+---------------+
   *            |                     |
   *      +-----+-----+               |
   *      |           |               |
   *   Failed      Cancelled          |
   *                          +-------+------+
   *                          |              |
   *                      Recognized       Began
   *                                         |
   *                                      Changed
   *                                         |
   *                                  Ended/Recognized
   */
  var STATE_POSSIBLE = 1;
  var STATE_BEGAN = 2;
  var STATE_CHANGED = 4;
  var STATE_ENDED = 8;
  var STATE_RECOGNIZED = STATE_ENDED;
  var STATE_CANCELLED = 16;
  var STATE_FAILED = 32;

  /**
   * Recognizer
   * Every recognizer needs to extend from this class.
   * @constructor
   * @param {Object} options
   */
  function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});
    this.id = uniqueId();
    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);
    this.state = STATE_POSSIBLE;
    this.simultaneous = {};
    this.requireFail = [];
  }
  Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},
    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function (options) {
      assign(this.options, options);

      // also update the touchAction, in case something changed about the directions/enabled state
      this.manager && this.manager.touchAction.update();
      return this;
    },
    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function (otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
        return this;
      }
      var simultaneous = this.simultaneous;
      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
      if (!simultaneous[otherRecognizer.id]) {
        simultaneous[otherRecognizer.id] = otherRecognizer;
        otherRecognizer.recognizeWith(this);
      }
      return this;
    },
    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function (otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
        return this;
      }
      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
      delete this.simultaneous[otherRecognizer.id];
      return this;
    },
    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function (otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
        return this;
      }
      var requireFail = this.requireFail;
      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
      if (inArray(requireFail, otherRecognizer) === -1) {
        requireFail.push(otherRecognizer);
        otherRecognizer.requireFailure(this);
      }
      return this;
    },
    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function (otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
        return this;
      }
      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
      var index = inArray(this.requireFail, otherRecognizer);
      if (index > -1) {
        this.requireFail.splice(index, 1);
      }
      return this;
    },
    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function () {
      return this.requireFail.length > 0;
    },
    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function (otherRecognizer) {
      return !!this.simultaneous[otherRecognizer.id];
    },
    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function (input) {
      var self = this;
      var state = this.state;
      function emit(event) {
        self.manager.emit(event, input);
      }

      // 'panstart' and 'panmove'
      if (state < STATE_ENDED) {
        emit(self.options.event + stateStr(state));
      }
      emit(self.options.event); // simple 'eventName' events

      if (input.additionalEvent) {
        // additional event(panleft, panright, pinchin, pinchout...)
        emit(input.additionalEvent);
      }

      // panend and pancancel
      if (state >= STATE_ENDED) {
        emit(self.options.event + stateStr(state));
      }
    },
    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function (input) {
      if (this.canEmit()) {
        return this.emit(input);
      }
      // it's failing anyway
      this.state = STATE_FAILED;
    },
    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function () {
      var i = 0;
      while (i < this.requireFail.length) {
        if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
          return false;
        }
        i++;
      }
      return true;
    },
    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function (inputData) {
      // make a new copy of the inputData
      // so we can change the inputData without messing up the other recognizers
      var inputDataClone = assign({}, inputData);

      // is is enabled and allow recognizing?
      if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
        this.reset();
        this.state = STATE_FAILED;
        return;
      }

      // reset when we've reached the end
      if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
        this.state = STATE_POSSIBLE;
      }
      this.state = this.process(inputDataClone);

      // the recognizer has recognized a gesture
      // so trigger an event
      if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
        this.tryEmit(inputDataClone);
      }
    },
    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function (inputData) {},
    // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function () {},
    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function () {}
  };

  /**
   * get a usable string, used as event postfix
   * @param {Const} state
   * @returns {String} state
   */
  function stateStr(state) {
    if (state & STATE_CANCELLED) {
      return 'cancel';
    } else if (state & STATE_ENDED) {
      return 'end';
    } else if (state & STATE_CHANGED) {
      return 'move';
    } else if (state & STATE_BEGAN) {
      return 'start';
    }
    return '';
  }

  /**
   * direction cons to string
   * @param {Const} direction
   * @returns {String}
   */
  function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
      return 'down';
    } else if (direction == DIRECTION_UP) {
      return 'up';
    } else if (direction == DIRECTION_LEFT) {
      return 'left';
    } else if (direction == DIRECTION_RIGHT) {
      return 'right';
    }
    return '';
  }

  /**
   * get a recognizer by name if it is bound to a manager
   * @param {Recognizer|String} otherRecognizer
   * @param {Recognizer} recognizer
   * @returns {Recognizer}
   */
  function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
      return manager.get(otherRecognizer);
    }
    return otherRecognizer;
  }

  /**
   * This recognizer is just used as a base for the simple attribute recognizers.
   * @constructor
   * @extends Recognizer
   */
  function AttrRecognizer() {
    Recognizer.apply(this, arguments);
  }
  inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
      /**
       * @type {Number}
       * @default 1
       */
      pointers: 1
    },
    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function (input) {
      var optionPointers = this.options.pointers;
      return optionPointers === 0 || input.pointers.length === optionPointers;
    },
    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function (input) {
      var state = this.state;
      var eventType = input.eventType;
      var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
      var isValid = this.attrTest(input);

      // on cancel input and we've recognized before, return STATE_CANCELLED
      if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
        return state | STATE_CANCELLED;
      } else if (isRecognized || isValid) {
        if (eventType & INPUT_END) {
          return state | STATE_ENDED;
        } else if (!(state & STATE_BEGAN)) {
          return STATE_BEGAN;
        }
        return state | STATE_CHANGED;
      }
      return STATE_FAILED;
    }
  });

  /**
   * Pan
   * Recognized when the pointer is down and moved in the allowed direction.
   * @constructor
   * @extends AttrRecognizer
   */
  function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);
    this.pX = null;
    this.pY = null;
  }
  inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
      event: 'pan',
      threshold: 10,
      pointers: 1,
      direction: DIRECTION_ALL
    },
    getTouchAction: function () {
      var direction = this.options.direction;
      var actions = [];
      if (direction & DIRECTION_HORIZONTAL) {
        actions.push(TOUCH_ACTION_PAN_Y);
      }
      if (direction & DIRECTION_VERTICAL) {
        actions.push(TOUCH_ACTION_PAN_X);
      }
      return actions;
    },
    directionTest: function (input) {
      var options = this.options;
      var hasMoved = true;
      var distance = input.distance;
      var direction = input.direction;
      var x = input.deltaX;
      var y = input.deltaY;

      // lock to axis?
      if (!(direction & options.direction)) {
        if (options.direction & DIRECTION_HORIZONTAL) {
          direction = x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
          hasMoved = x != this.pX;
          distance = Math.abs(input.deltaX);
        } else {
          direction = y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
          hasMoved = y != this.pY;
          distance = Math.abs(input.deltaY);
        }
      }
      input.direction = direction;
      return hasMoved && distance > options.threshold && direction & options.direction;
    },
    attrTest: function (input) {
      return AttrRecognizer.prototype.attrTest.call(this, input) && (this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input));
    },
    emit: function (input) {
      this.pX = input.deltaX;
      this.pY = input.deltaY;
      var direction = directionStr(input.direction);
      if (direction) {
        input.additionalEvent = this.options.event + direction;
      }
      this._super.emit.call(this, input);
    }
  });

  /**
   * Pinch
   * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
   * @constructor
   * @extends AttrRecognizer
   */
  function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
  }
  inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
      event: 'pinch',
      threshold: 0,
      pointers: 2
    },
    getTouchAction: function () {
      return [TOUCH_ACTION_NONE];
    },
    attrTest: function (input) {
      return this._super.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },
    emit: function (input) {
      if (input.scale !== 1) {
        var inOut = input.scale < 1 ? 'in' : 'out';
        input.additionalEvent = this.options.event + inOut;
      }
      this._super.emit.call(this, input);
    }
  });

  /**
   * Press
   * Recognized when the pointer is down for x ms without any movement.
   * @constructor
   * @extends Recognizer
   */
  function PressRecognizer() {
    Recognizer.apply(this, arguments);
    this._timer = null;
    this._input = null;
  }
  inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
      event: 'press',
      pointers: 1,
      time: 251,
      // minimal time of the pointer to be pressed
      threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function () {
      return [TOUCH_ACTION_AUTO];
    },
    process: function (input) {
      var options = this.options;
      var validPointers = input.pointers.length === options.pointers;
      var validMovement = input.distance < options.threshold;
      var validTime = input.deltaTime > options.time;
      this._input = input;

      // we only allow little movement
      // and we've reached an end event, so a tap is possible
      if (!validMovement || !validPointers || input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime) {
        this.reset();
      } else if (input.eventType & INPUT_START) {
        this.reset();
        this._timer = setTimeoutContext(function () {
          this.state = STATE_RECOGNIZED;
          this.tryEmit();
        }, options.time, this);
      } else if (input.eventType & INPUT_END) {
        return STATE_RECOGNIZED;
      }
      return STATE_FAILED;
    },
    reset: function () {
      clearTimeout(this._timer);
    },
    emit: function (input) {
      if (this.state !== STATE_RECOGNIZED) {
        return;
      }
      if (input && input.eventType & INPUT_END) {
        this.manager.emit(this.options.event + 'up', input);
      } else {
        this._input.timeStamp = now();
        this.manager.emit(this.options.event, this._input);
      }
    }
  });

  /**
   * Rotate
   * Recognized when two or more pointer are moving in a circular motion.
   * @constructor
   * @extends AttrRecognizer
   */
  function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
  }
  inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
      event: 'rotate',
      threshold: 0,
      pointers: 2
    },
    getTouchAction: function () {
      return [TOUCH_ACTION_NONE];
    },
    attrTest: function (input) {
      return this._super.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
  });

  /**
   * Swipe
   * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
   * @constructor
   * @extends AttrRecognizer
   */
  function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
  }
  inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
      event: 'swipe',
      threshold: 10,
      velocity: 0.3,
      direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
      pointers: 1
    },
    getTouchAction: function () {
      return PanRecognizer.prototype.getTouchAction.call(this);
    },
    attrTest: function (input) {
      var direction = this.options.direction;
      var velocity;
      if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
        velocity = input.overallVelocity;
      } else if (direction & DIRECTION_HORIZONTAL) {
        velocity = input.overallVelocityX;
      } else if (direction & DIRECTION_VERTICAL) {
        velocity = input.overallVelocityY;
      }
      return this._super.attrTest.call(this, input) && direction & input.offsetDirection && input.distance > this.options.threshold && input.maxPointers == this.options.pointers && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },
    emit: function (input) {
      var direction = directionStr(input.offsetDirection);
      if (direction) {
        this.manager.emit(this.options.event + direction, input);
      }
      this.manager.emit(this.options.event, input);
    }
  });

  /**
   * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
   * between the given interval and position. The delay option can be used to recognize multi-taps without firing
   * a single tap.
   *
   * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
   * multi-taps being recognized.
   * @constructor
   * @extends Recognizer
   */
  function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;
    this._timer = null;
    this._input = null;
    this.count = 0;
  }
  inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
      event: 'tap',
      pointers: 1,
      taps: 1,
      interval: 300,
      // max time between the multi-tap taps
      time: 250,
      // max time of the pointer to be down (like finger on the screen)
      threshold: 9,
      // a minimal movement is ok, but keep it low
      posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function () {
      return [TOUCH_ACTION_MANIPULATION];
    },
    process: function (input) {
      var options = this.options;
      var validPointers = input.pointers.length === options.pointers;
      var validMovement = input.distance < options.threshold;
      var validTouchTime = input.deltaTime < options.time;
      this.reset();
      if (input.eventType & INPUT_START && this.count === 0) {
        return this.failTimeout();
      }

      // we only allow little movement
      // and we've reached an end event, so a tap is possible
      if (validMovement && validTouchTime && validPointers) {
        if (input.eventType != INPUT_END) {
          return this.failTimeout();
        }
        var validInterval = this.pTime ? input.timeStamp - this.pTime < options.interval : true;
        var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
        this.pTime = input.timeStamp;
        this.pCenter = input.center;
        if (!validMultiTap || !validInterval) {
          this.count = 1;
        } else {
          this.count += 1;
        }
        this._input = input;

        // if tap count matches we have recognized it,
        // else it has began recognizing...
        var tapCount = this.count % options.taps;
        if (tapCount === 0) {
          // no failing requirements, immediately trigger the tap event
          // or wait as long as the multitap interval to trigger
          if (!this.hasRequireFailures()) {
            return STATE_RECOGNIZED;
          } else {
            this._timer = setTimeoutContext(function () {
              this.state = STATE_RECOGNIZED;
              this.tryEmit();
            }, options.interval, this);
            return STATE_BEGAN;
          }
        }
      }
      return STATE_FAILED;
    },
    failTimeout: function () {
      this._timer = setTimeoutContext(function () {
        this.state = STATE_FAILED;
      }, this.options.interval, this);
      return STATE_FAILED;
    },
    reset: function () {
      clearTimeout(this._timer);
    },
    emit: function () {
      if (this.state == STATE_RECOGNIZED) {
        this._input.tapCount = this.count;
        this.manager.emit(this.options.event, this._input);
      }
    }
  });

  /**
   * Simple way to create a manager with a default set of recognizers.
   * @param {HTMLElement} element
   * @param {Object} [options]
   * @constructor
   */
  function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
  }

  /**
   * @const {string}
   */
  Hammer.VERSION = '2.0.7';

  /**
   * default settings
   * @namespace
   */
  Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,
    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,
    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,
    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,
    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,
    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
    // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
    [RotateRecognizer, {
      enable: false
    }], [PinchRecognizer, {
      enable: false
    }, ['rotate']], [SwipeRecognizer, {
      direction: DIRECTION_HORIZONTAL
    }], [PanRecognizer, {
      direction: DIRECTION_HORIZONTAL
    }, ['swipe']], [TapRecognizer], [TapRecognizer, {
      event: 'doubletap',
      taps: 2
    }, ['tap']], [PressRecognizer]],
    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
      /**
       * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
       * @type {String}
       * @default 'none'
       */
      userSelect: 'none',
      /**
       * Disable the Windows Phone grippers when pressing an element.
       * @type {String}
       * @default 'none'
       */
      touchSelect: 'none',
      /**
       * Disables the default callout shown when you touch and hold a touch target.
       * On iOS, when you touch and hold a touch target such as a link, Safari displays
       * a callout containing information about the link. This property allows you to disable that callout.
       * @type {String}
       * @default 'none'
       */
      touchCallout: 'none',
      /**
       * Specifies whether zooming is enabled. Used by IE10>
       * @type {String}
       * @default 'none'
       */
      contentZooming: 'none',
      /**
       * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
       * @type {String}
       * @default 'none'
       */
      userDrag: 'none',
      /**
       * Overrides the highlight color shown when the user taps a link or a JavaScript
       * clickable element in iOS. This property obeys the alpha value, if specified.
       * @type {String}
       * @default 'rgba(0,0,0,0)'
       */
      tapHighlightColor: 'rgba(0,0,0,0)'
    }
  };
  var STOP = 1;
  var FORCED_STOP = 2;

  /**
   * Manager
   * @param {HTMLElement} element
   * @param {Object} [options]
   * @constructor
   */
  function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});
    this.options.inputTarget = this.options.inputTarget || element;
    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};
    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);
    toggleCssProps(this, true);
    each(this.options.recognizers, function (item) {
      var recognizer = this.add(new item[0](item[1]));
      item[2] && recognizer.recognizeWith(item[2]);
      item[3] && recognizer.requireFailure(item[3]);
    }, this);
  }
  Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function (options) {
      assign(this.options, options);

      // Options that need a little more setup
      if (options.touchAction) {
        this.touchAction.update();
      }
      if (options.inputTarget) {
        // Clean up existing event listeners and reinitialize
        this.input.destroy();
        this.input.target = options.inputTarget;
        this.input.init();
      }
      return this;
    },
    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function (force) {
      this.session.stopped = force ? FORCED_STOP : STOP;
    },
    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function (inputData) {
      var session = this.session;
      if (session.stopped) {
        return;
      }

      // run the touch-action polyfill
      this.touchAction.preventDefaults(inputData);
      var recognizer;
      var recognizers = this.recognizers;

      // this holds the recognizer that is being recognized.
      // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
      // if no recognizer is detecting a thing, it is set to `null`
      var curRecognizer = session.curRecognizer;

      // reset when the last recognizer is recognized
      // or when we're in a new session
      if (!curRecognizer || curRecognizer && curRecognizer.state & STATE_RECOGNIZED) {
        curRecognizer = session.curRecognizer = null;
      }
      var i = 0;
      while (i < recognizers.length) {
        recognizer = recognizers[i];

        // find out if we are allowed try to recognize the input for this one.
        // 1.   allow if the session is NOT forced stopped (see the .stop() method)
        // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
        //      that is being recognized.
        // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
        //      this can be setup with the `recognizeWith()` method on the recognizer.
        if (session.stopped !== FORCED_STOP && (
        // 1
        !curRecognizer || recognizer == curRecognizer ||
        // 2
        recognizer.canRecognizeWith(curRecognizer))) {
          // 3
          recognizer.recognize(inputData);
        } else {
          recognizer.reset();
        }

        // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
        // current active recognizer. but only if we don't already have an active recognizer
        if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
          curRecognizer = session.curRecognizer = recognizer;
        }
        i++;
      }
    },
    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function (recognizer) {
      if (recognizer instanceof Recognizer) {
        return recognizer;
      }
      var recognizers = this.recognizers;
      for (var i = 0; i < recognizers.length; i++) {
        if (recognizers[i].options.event == recognizer) {
          return recognizers[i];
        }
      }
      return null;
    },
    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function (recognizer) {
      if (invokeArrayArg(recognizer, 'add', this)) {
        return this;
      }

      // remove existing
      var existing = this.get(recognizer.options.event);
      if (existing) {
        this.remove(existing);
      }
      this.recognizers.push(recognizer);
      recognizer.manager = this;
      this.touchAction.update();
      return recognizer;
    },
    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function (recognizer) {
      if (invokeArrayArg(recognizer, 'remove', this)) {
        return this;
      }
      recognizer = this.get(recognizer);

      // let's make sure this recognizer exists
      if (recognizer) {
        var recognizers = this.recognizers;
        var index = inArray(recognizers, recognizer);
        if (index !== -1) {
          recognizers.splice(index, 1);
          this.touchAction.update();
        }
      }
      return this;
    },
    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function (events, handler) {
      if (events === undefined) {
        return;
      }
      if (handler === undefined) {
        return;
      }
      var handlers = this.handlers;
      each(splitStr(events), function (event) {
        handlers[event] = handlers[event] || [];
        handlers[event].push(handler);
      });
      return this;
    },
    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function (events, handler) {
      if (events === undefined) {
        return;
      }
      var handlers = this.handlers;
      each(splitStr(events), function (event) {
        if (!handler) {
          delete handlers[event];
        } else {
          handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
        }
      });
      return this;
    },
    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function (event, data) {
      // we also want to trigger dom events
      if (this.options.domEvents) {
        triggerDomEvent(event, data);
      }

      // no handlers, so skip it all
      var handlers = this.handlers[event] && this.handlers[event].slice();
      if (!handlers || !handlers.length) {
        return;
      }
      data.type = event;
      data.preventDefault = function () {
        data.srcEvent.preventDefault();
      };
      var i = 0;
      while (i < handlers.length) {
        handlers[i](data);
        i++;
      }
    },
    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function () {
      this.element && toggleCssProps(this, false);
      this.handlers = {};
      this.session = {};
      this.input.destroy();
      this.element = null;
    }
  };

  /**
   * add/remove the css properties as defined in manager.options.cssProps
   * @param {Manager} manager
   * @param {Boolean} add
   */
  function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
      return;
    }
    var prop;
    each(manager.options.cssProps, function (value, name) {
      prop = prefixed(element.style, name);
      if (add) {
        manager.oldCssProps[prop] = element.style[prop];
        element.style[prop] = value;
      } else {
        element.style[prop] = manager.oldCssProps[prop] || '';
      }
    });
    if (!add) {
      manager.oldCssProps = {};
    }
  }

  /**
   * trigger dom event
   * @param {String} event
   * @param {Object} data
   */
  function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
  }
  assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,
    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,
    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,
    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,
    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,
    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,
    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
  });

  // this prevents errors when Hammer is loaded in the presence of an AMD
  //  style loader but by script tag, not by the loader.
  var freeGlobal = typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : {}; // jshint ignore:line
  freeGlobal.Hammer = Hammer;
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return Hammer;
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, document, 'Hammer');

/***/ }),

/***/ 99882:
/*!*********************************************!*\
  !*** ./node_modules/mousetrap/mousetrap.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/*global define:false */
/**
 * Copyright 2012-2017 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 *
 * @version 1.6.5
 * @url craig.is/killing/mice
 */
(function (window, document, undefined) {
  // Check if mousetrap is used inside browser, if not, return
  if (!window) {
    return;
  }

  /**
   * mapping of special keycodes to their corresponding keys
   *
   * everything in this dictionary cannot use keypress events
   * so it has to be here to map to the correct keycodes for
   * keyup/keydown events
   *
   * @type {Object}
   */
  var _MAP = {
    8: 'backspace',
    9: 'tab',
    13: 'enter',
    16: 'shift',
    17: 'ctrl',
    18: 'alt',
    20: 'capslock',
    27: 'esc',
    32: 'space',
    33: 'pageup',
    34: 'pagedown',
    35: 'end',
    36: 'home',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    45: 'ins',
    46: 'del',
    91: 'meta',
    93: 'meta',
    224: 'meta'
  };

  /**
   * mapping for special characters so they can support
   *
   * this dictionary is only used incase you want to bind a
   * keyup or keydown event to one of these keys
   *
   * @type {Object}
   */
  var _KEYCODE_MAP = {
    106: '*',
    107: '+',
    109: '-',
    110: '.',
    111: '/',
    186: ';',
    187: '=',
    188: ',',
    189: '-',
    190: '.',
    191: '/',
    192: '`',
    219: '[',
    220: '\\',
    221: ']',
    222: '\''
  };

  /**
   * this is a mapping of keys that require shift on a US keypad
   * back to the non shift equivelents
   *
   * this is so you can use keyup events with these keys
   *
   * note that this will only work reliably on US keyboards
   *
   * @type {Object}
   */
  var _SHIFT_MAP = {
    '~': '`',
    '!': '1',
    '@': '2',
    '#': '3',
    '$': '4',
    '%': '5',
    '^': '6',
    '&': '7',
    '*': '8',
    '(': '9',
    ')': '0',
    '_': '-',
    '+': '=',
    ':': ';',
    '\"': '\'',
    '<': ',',
    '>': '.',
    '?': '/',
    '|': '\\'
  };

  /**
   * this is a list of special strings you can use to map
   * to modifier keys when you specify your keyboard shortcuts
   *
   * @type {Object}
   */
  var _SPECIAL_ALIASES = {
    'option': 'alt',
    'command': 'meta',
    'return': 'enter',
    'escape': 'esc',
    'plus': '+',
    'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
  };

  /**
   * variable to store the flipped version of _MAP from above
   * needed to check if we should use keypress or not when no action
   * is specified
   *
   * @type {Object|undefined}
   */
  var _REVERSE_MAP;

  /**
   * loop through the f keys, f1 to f19 and add them to the map
   * programatically
   */
  for (var i = 1; i < 20; ++i) {
    _MAP[111 + i] = 'f' + i;
  }

  /**
   * loop through to map numbers on the numeric keypad
   */
  for (i = 0; i <= 9; ++i) {
    // This needs to use a string cause otherwise since 0 is falsey
    // mousetrap will never fire for numpad 0 pressed as part of a keydown
    // event.
    //
    // @see https://github.com/ccampbell/mousetrap/pull/258
    _MAP[i + 96] = i.toString();
  }

  /**
   * cross browser add event method
   *
   * @param {Element|HTMLDocument} object
   * @param {string} type
   * @param {Function} callback
   * @returns void
   */
  function _addEvent(object, type, callback) {
    if (object.addEventListener) {
      object.addEventListener(type, callback, false);
      return;
    }
    object.attachEvent('on' + type, callback);
  }

  /**
   * takes the event and returns the key character
   *
   * @param {Event} e
   * @return {string}
   */
  function _characterFromEvent(e) {
    // for keypress events we should return the character as is
    if (e.type == 'keypress') {
      var character = String.fromCharCode(e.which);

      // if the shift key is not pressed then it is safe to assume
      // that we want the character to be lowercase.  this means if
      // you accidentally have caps lock on then your key bindings
      // will continue to work
      //
      // the only side effect that might not be desired is if you
      // bind something like 'A' cause you want to trigger an
      // event when capital A is pressed caps lock will no longer
      // trigger the event.  shift+a will though.
      if (!e.shiftKey) {
        character = character.toLowerCase();
      }
      return character;
    }

    // for non keypress events the special maps are needed
    if (_MAP[e.which]) {
      return _MAP[e.which];
    }
    if (_KEYCODE_MAP[e.which]) {
      return _KEYCODE_MAP[e.which];
    }

    // if it is not in the special map

    // with keydown and keyup events the character seems to always
    // come in as an uppercase character whether you are pressing shift
    // or not.  we should make sure it is always lowercase for comparisons
    return String.fromCharCode(e.which).toLowerCase();
  }

  /**
   * checks if two arrays are equal
   *
   * @param {Array} modifiers1
   * @param {Array} modifiers2
   * @returns {boolean}
   */
  function _modifiersMatch(modifiers1, modifiers2) {
    return modifiers1.sort().join(',') === modifiers2.sort().join(',');
  }

  /**
   * takes a key event and figures out what the modifiers are
   *
   * @param {Event} e
   * @returns {Array}
   */
  function _eventModifiers(e) {
    var modifiers = [];
    if (e.shiftKey) {
      modifiers.push('shift');
    }
    if (e.altKey) {
      modifiers.push('alt');
    }
    if (e.ctrlKey) {
      modifiers.push('ctrl');
    }
    if (e.metaKey) {
      modifiers.push('meta');
    }
    return modifiers;
  }

  /**
   * prevents default for this event
   *
   * @param {Event} e
   * @returns void
   */
  function _preventDefault(e) {
    if (e.preventDefault) {
      e.preventDefault();
      return;
    }
    e.returnValue = false;
  }

  /**
   * stops propogation for this event
   *
   * @param {Event} e
   * @returns void
   */
  function _stopPropagation(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
      return;
    }
    e.cancelBubble = true;
  }

  /**
   * determines if the keycode specified is a modifier key or not
   *
   * @param {string} key
   * @returns {boolean}
   */
  function _isModifier(key) {
    return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
  }

  /**
   * reverses the map lookup so that we can look for specific keys
   * to see what can and can't use keypress
   *
   * @return {Object}
   */
  function _getReverseMap() {
    if (!_REVERSE_MAP) {
      _REVERSE_MAP = {};
      for (var key in _MAP) {
        // pull out the numeric keypad from here cause keypress should
        // be able to detect the keys from the character
        if (key > 95 && key < 112) {
          continue;
        }
        if (_MAP.hasOwnProperty(key)) {
          _REVERSE_MAP[_MAP[key]] = key;
        }
      }
    }
    return _REVERSE_MAP;
  }

  /**
   * picks the best action based on the key combination
   *
   * @param {string} key - character for key
   * @param {Array} modifiers
   * @param {string=} action passed in
   */
  function _pickBestAction(key, modifiers, action) {
    // if no action was picked in we should try to pick the one
    // that we think would work best for this key
    if (!action) {
      action = _getReverseMap()[key] ? 'keydown' : 'keypress';
    }

    // modifier keys don't work as expected with keypress,
    // switch to keydown
    if (action == 'keypress' && modifiers.length) {
      action = 'keydown';
    }
    return action;
  }

  /**
   * Converts from a string key combination to an array
   *
   * @param  {string} combination like "command+shift+l"
   * @return {Array}
   */
  function _keysFromString(combination) {
    if (combination === '+') {
      return ['+'];
    }
    combination = combination.replace(/\+{2}/g, '+plus');
    return combination.split('+');
  }

  /**
   * Gets info for a specific key combination
   *
   * @param  {string} combination key combination ("command+s" or "a" or "*")
   * @param  {string=} action
   * @returns {Object}
   */
  function _getKeyInfo(combination, action) {
    var keys;
    var key;
    var i;
    var modifiers = [];

    // take the keys from this pattern and figure out what the actual
    // pattern is all about
    keys = _keysFromString(combination);
    for (i = 0; i < keys.length; ++i) {
      key = keys[i];

      // normalize key names
      if (_SPECIAL_ALIASES[key]) {
        key = _SPECIAL_ALIASES[key];
      }

      // if this is not a keypress event then we should
      // be smart about using shift keys
      // this will only work for US keyboards however
      if (action && action != 'keypress' && _SHIFT_MAP[key]) {
        key = _SHIFT_MAP[key];
        modifiers.push('shift');
      }

      // if this key is a modifier then add it to the list of modifiers
      if (_isModifier(key)) {
        modifiers.push(key);
      }
    }

    // depending on what the key combination is
    // we will try to pick the best event for it
    action = _pickBestAction(key, modifiers, action);
    return {
      key: key,
      modifiers: modifiers,
      action: action
    };
  }
  function _belongsTo(element, ancestor) {
    if (element === null || element === document) {
      return false;
    }
    if (element === ancestor) {
      return true;
    }
    return _belongsTo(element.parentNode, ancestor);
  }
  function Mousetrap(targetElement) {
    var self = this;
    targetElement = targetElement || document;
    if (!(self instanceof Mousetrap)) {
      return new Mousetrap(targetElement);
    }

    /**
     * element to attach key events to
     *
     * @type {Element}
     */
    self.target = targetElement;

    /**
     * a list of all the callbacks setup via Mousetrap.bind()
     *
     * @type {Object}
     */
    self._callbacks = {};

    /**
     * direct map of string combinations to callbacks used for trigger()
     *
     * @type {Object}
     */
    self._directMap = {};

    /**
     * keeps track of what level each sequence is at since multiple
     * sequences can start out with the same sequence
     *
     * @type {Object}
     */
    var _sequenceLevels = {};

    /**
     * variable to store the setTimeout call
     *
     * @type {null|number}
     */
    var _resetTimer;

    /**
     * temporary state where we will ignore the next keyup
     *
     * @type {boolean|string}
     */
    var _ignoreNextKeyup = false;

    /**
     * temporary state where we will ignore the next keypress
     *
     * @type {boolean}
     */
    var _ignoreNextKeypress = false;

    /**
     * are we currently inside of a sequence?
     * type of action ("keyup" or "keydown" or "keypress") or false
     *
     * @type {boolean|string}
     */
    var _nextExpectedAction = false;

    /**
     * resets all sequence counters except for the ones passed in
     *
     * @param {Object} doNotReset
     * @returns void
     */
    function _resetSequences(doNotReset) {
      doNotReset = doNotReset || {};
      var activeSequences = false,
        key;
      for (key in _sequenceLevels) {
        if (doNotReset[key]) {
          activeSequences = true;
          continue;
        }
        _sequenceLevels[key] = 0;
      }
      if (!activeSequences) {
        _nextExpectedAction = false;
      }
    }

    /**
     * finds all callbacks that match based on the keycode, modifiers,
     * and action
     *
     * @param {string} character
     * @param {Array} modifiers
     * @param {Event|Object} e
     * @param {string=} sequenceName - name of the sequence we are looking for
     * @param {string=} combination
     * @param {number=} level
     * @returns {Array}
     */
    function _getMatches(character, modifiers, e, sequenceName, combination, level) {
      var i;
      var callback;
      var matches = [];
      var action = e.type;

      // if there are no events related to this keycode
      if (!self._callbacks[character]) {
        return [];
      }

      // if a modifier key is coming up on its own we should allow it
      if (action == 'keyup' && _isModifier(character)) {
        modifiers = [character];
      }

      // loop through all callbacks for the key that was pressed
      // and see if any of them match
      for (i = 0; i < self._callbacks[character].length; ++i) {
        callback = self._callbacks[character][i];

        // if a sequence name is not specified, but this is a sequence at
        // the wrong level then move onto the next match
        if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
          continue;
        }

        // if the action we are looking for doesn't match the action we got
        // then we should keep going
        if (action != callback.action) {
          continue;
        }

        // if this is a keypress event and the meta key and control key
        // are not pressed that means that we need to only look at the
        // character, otherwise check the modifiers as well
        //
        // chrome will not fire a keypress if meta or control is down
        // safari will fire a keypress if meta or meta+shift is down
        // firefox will fire a keypress if meta or control is down
        if (action == 'keypress' && !e.metaKey && !e.ctrlKey || _modifiersMatch(modifiers, callback.modifiers)) {
          // when you bind a combination or sequence a second time it
          // should overwrite the first one.  if a sequenceName or
          // combination is specified in this call it does just that
          //
          // @todo make deleting its own method?
          var deleteCombo = !sequenceName && callback.combo == combination;
          var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
          if (deleteCombo || deleteSequence) {
            self._callbacks[character].splice(i, 1);
          }
          matches.push(callback);
        }
      }
      return matches;
    }

    /**
     * actually calls the callback function
     *
     * if your callback function returns false this will use the jquery
     * convention - prevent default and stop propogation on the event
     *
     * @param {Function} callback
     * @param {Event} e
     * @returns void
     */
    function _fireCallback(callback, e, combo, sequence) {
      // if this event should not happen stop here
      if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
        return;
      }
      if (callback(e, combo) === false) {
        _preventDefault(e);
        _stopPropagation(e);
      }
    }

    /**
     * handles a character key event
     *
     * @param {string} character
     * @param {Array} modifiers
     * @param {Event} e
     * @returns void
     */
    self._handleKey = function (character, modifiers, e) {
      var callbacks = _getMatches(character, modifiers, e);
      var i;
      var doNotReset = {};
      var maxLevel = 0;
      var processedSequenceCallback = false;

      // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
      for (i = 0; i < callbacks.length; ++i) {
        if (callbacks[i].seq) {
          maxLevel = Math.max(maxLevel, callbacks[i].level);
        }
      }

      // loop through matching callbacks for this key event
      for (i = 0; i < callbacks.length; ++i) {
        // fire for all sequence callbacks
        // this is because if for example you have multiple sequences
        // bound such as "g i" and "g t" they both need to fire the
        // callback for matching g cause otherwise you can only ever
        // match the first one
        if (callbacks[i].seq) {
          // only fire callbacks for the maxLevel to prevent
          // subsequences from also firing
          //
          // for example 'a option b' should not cause 'option b' to fire
          // even though 'option b' is part of the other sequence
          //
          // any sequences that do not match here will be discarded
          // below by the _resetSequences call
          if (callbacks[i].level != maxLevel) {
            continue;
          }
          processedSequenceCallback = true;

          // keep a list of which sequences were matches for later
          doNotReset[callbacks[i].seq] = 1;
          _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
          continue;
        }

        // if there were no sequence matches but we are still here
        // that means this is a regular match so we should fire that
        if (!processedSequenceCallback) {
          _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
        }
      }

      // if the key you pressed matches the type of sequence without
      // being a modifier (ie "keyup" or "keypress") then we should
      // reset all sequences that were not matched by this event
      //
      // this is so, for example, if you have the sequence "h a t" and you
      // type "h e a r t" it does not match.  in this case the "e" will
      // cause the sequence to reset
      //
      // modifier keys are ignored because you can have a sequence
      // that contains modifiers such as "enter ctrl+space" and in most
      // cases the modifier key will be pressed before the next key
      //
      // also if you have a sequence such as "ctrl+b a" then pressing the
      // "b" key will trigger a "keypress" and a "keydown"
      //
      // the "keydown" is expected when there is a modifier, but the
      // "keypress" ends up matching the _nextExpectedAction since it occurs
      // after and that causes the sequence to reset
      //
      // we ignore keypresses in a sequence that directly follow a keydown
      // for the same character
      var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;
      if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
        _resetSequences(doNotReset);
      }
      _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
    };

    /**
     * handles a keydown event
     *
     * @param {Event} e
     * @returns void
     */
    function _handleKeyEvent(e) {
      // normalize e.which for key events
      // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
      if (typeof e.which !== 'number') {
        e.which = e.keyCode;
      }
      var character = _characterFromEvent(e);

      // no character found then stop
      if (!character) {
        return;
      }

      // need to use === for the character check because the character can be 0
      if (e.type == 'keyup' && _ignoreNextKeyup === character) {
        _ignoreNextKeyup = false;
        return;
      }
      self.handleKey(character, _eventModifiers(e), e);
    }

    /**
     * called to set a 1 second timeout on the specified sequence
     *
     * this is so after each key press in the sequence you have 1 second
     * to press the next key before you have to start over
     *
     * @returns void
     */
    function _resetSequenceTimer() {
      clearTimeout(_resetTimer);
      _resetTimer = setTimeout(_resetSequences, 1000);
    }

    /**
     * binds a key sequence to an event
     *
     * @param {string} combo - combo specified in bind call
     * @param {Array} keys
     * @param {Function} callback
     * @param {string=} action
     * @returns void
     */
    function _bindSequence(combo, keys, callback, action) {
      // start off by adding a sequence level record for this combination
      // and setting the level to 0
      _sequenceLevels[combo] = 0;

      /**
       * callback to increase the sequence level for this sequence and reset
       * all other sequences that were active
       *
       * @param {string} nextAction
       * @returns {Function}
       */
      function _increaseSequence(nextAction) {
        return function () {
          _nextExpectedAction = nextAction;
          ++_sequenceLevels[combo];
          _resetSequenceTimer();
        };
      }

      /**
       * wraps the specified callback inside of another function in order
       * to reset all sequence counters as soon as this sequence is done
       *
       * @param {Event} e
       * @returns void
       */
      function _callbackAndReset(e) {
        _fireCallback(callback, e, combo);

        // we should ignore the next key up if the action is key down
        // or keypress.  this is so if you finish a sequence and
        // release the key the final key will not trigger a keyup
        if (action !== 'keyup') {
          _ignoreNextKeyup = _characterFromEvent(e);
        }

        // weird race condition if a sequence ends with the key
        // another sequence begins with
        setTimeout(_resetSequences, 10);
      }

      // loop through keys one at a time and bind the appropriate callback
      // function.  for any key leading up to the final one it should
      // increase the sequence. after the final, it should reset all sequences
      //
      // if an action is specified in the original bind call then that will
      // be used throughout.  otherwise we will pass the action that the
      // next key in the sequence should match.  this allows a sequence
      // to mix and match keypress and keydown events depending on which
      // ones are better suited to the key provided
      for (var i = 0; i < keys.length; ++i) {
        var isFinal = i + 1 === keys.length;
        var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
        _bindSingle(keys[i], wrappedCallback, action, combo, i);
      }
    }

    /**
     * binds a single keyboard combination
     *
     * @param {string} combination
     * @param {Function} callback
     * @param {string=} action
     * @param {string=} sequenceName - name of sequence if part of sequence
     * @param {number=} level - what part of the sequence the command is
     * @returns void
     */
    function _bindSingle(combination, callback, action, sequenceName, level) {
      // store a direct mapped reference for use with Mousetrap.trigger
      self._directMap[combination + ':' + action] = callback;

      // make sure multiple spaces in a row become a single space
      combination = combination.replace(/\s+/g, ' ');
      var sequence = combination.split(' ');
      var info;

      // if this pattern is a sequence of keys then run through this method
      // to reprocess each pattern one key at a time
      if (sequence.length > 1) {
        _bindSequence(combination, sequence, callback, action);
        return;
      }
      info = _getKeyInfo(combination, action);

      // make sure to initialize array if this is the first time
      // a callback is added for this key
      self._callbacks[info.key] = self._callbacks[info.key] || [];

      // remove an existing match if there is one
      _getMatches(info.key, info.modifiers, {
        type: info.action
      }, sequenceName, combination, level);

      // add this call back to the array
      // if it is a sequence put it at the beginning
      // if not put it at the end
      //
      // this is important because the way these are processed expects
      // the sequence ones to come first
      self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
        callback: callback,
        modifiers: info.modifiers,
        action: info.action,
        seq: sequenceName,
        level: level,
        combo: combination
      });
    }

    /**
     * binds multiple combinations to the same callback
     *
     * @param {Array} combinations
     * @param {Function} callback
     * @param {string|undefined} action
     * @returns void
     */
    self._bindMultiple = function (combinations, callback, action) {
      for (var i = 0; i < combinations.length; ++i) {
        _bindSingle(combinations[i], callback, action);
      }
    };

    // start!
    _addEvent(targetElement, 'keypress', _handleKeyEvent);
    _addEvent(targetElement, 'keydown', _handleKeyEvent);
    _addEvent(targetElement, 'keyup', _handleKeyEvent);
  }

  /**
   * binds an event to mousetrap
   *
   * can be a single key, a combination of keys separated with +,
   * an array of keys, or a sequence of keys separated by spaces
   *
   * be sure to list the modifier keys first to make sure that the
   * correct key ends up getting bound (the last key in the pattern)
   *
   * @param {string|Array} keys
   * @param {Function} callback
   * @param {string=} action - 'keypress', 'keydown', or 'keyup'
   * @returns void
   */
  Mousetrap.prototype.bind = function (keys, callback, action) {
    var self = this;
    keys = keys instanceof Array ? keys : [keys];
    self._bindMultiple.call(self, keys, callback, action);
    return self;
  };

  /**
   * unbinds an event to mousetrap
   *
   * the unbinding sets the callback function of the specified key combo
   * to an empty function and deletes the corresponding key in the
   * _directMap dict.
   *
   * TODO: actually remove this from the _callbacks dictionary instead
   * of binding an empty function
   *
   * the keycombo+action has to be exactly the same as
   * it was defined in the bind method
   *
   * @param {string|Array} keys
   * @param {string} action
   * @returns void
   */
  Mousetrap.prototype.unbind = function (keys, action) {
    var self = this;
    return self.bind.call(self, keys, function () {}, action);
  };

  /**
   * triggers an event that has already been bound
   *
   * @param {string} keys
   * @param {string=} action
   * @returns void
   */
  Mousetrap.prototype.trigger = function (keys, action) {
    var self = this;
    if (self._directMap[keys + ':' + action]) {
      self._directMap[keys + ':' + action]({}, keys);
    }
    return self;
  };

  /**
   * resets the library back to its initial state.  this is useful
   * if you want to clear out the current keyboard shortcuts and bind
   * new ones - for example if you switch to another page
   *
   * @returns void
   */
  Mousetrap.prototype.reset = function () {
    var self = this;
    self._callbacks = {};
    self._directMap = {};
    return self;
  };

  /**
   * should we stop this event before firing off callbacks
   *
   * @param {Event} e
   * @param {Element} element
   * @return {boolean}
   */
  Mousetrap.prototype.stopCallback = function (e, element) {
    var self = this;

    // if the element has the class "mousetrap" then no need to stop
    if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
      return false;
    }
    if (_belongsTo(element, self.target)) {
      return false;
    }

    // Events originating from a shadow DOM are re-targetted and `e.target` is the shadow host,
    // not the initial event target in the shadow tree. Note that not all events cross the
    // shadow boundary.
    // For shadow trees with `mode: 'open'`, the initial event target is the first element in
    // the event’s composed path. For shadow trees with `mode: 'closed'`, the initial event
    // target cannot be obtained.
    if ('composedPath' in e && typeof e.composedPath === 'function') {
      // For open shadow trees, update `element` so that the following check works.
      var initialEventTarget = e.composedPath()[0];
      if (initialEventTarget !== e.target) {
        element = initialEventTarget;
      }
    }

    // stop for input, select, and textarea
    return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
  };

  /**
   * exposes _handleKey publicly so it can be overwritten by extensions
   */
  Mousetrap.prototype.handleKey = function () {
    var self = this;
    return self._handleKey.apply(self, arguments);
  };

  /**
   * allow custom key mappings
   */
  Mousetrap.addKeycodes = function (object) {
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        _MAP[key] = object[key];
      }
    }
    _REVERSE_MAP = null;
  };

  /**
   * Init the global mousetrap functions
   *
   * This method is needed to allow the global mousetrap functions to work
   * now that mousetrap is a constructor function.
   */
  Mousetrap.init = function () {
    var documentMousetrap = Mousetrap(document);
    for (var method in documentMousetrap) {
      if (method.charAt(0) !== '_') {
        Mousetrap[method] = function (method) {
          return function () {
            return documentMousetrap[method].apply(documentMousetrap, arguments);
          };
        }(method);
      }
    }
  };
  Mousetrap.init();

  // expose mousetrap to the global object
  window.Mousetrap = Mousetrap;

  // expose as a common js module
  if ( true && module.exports) {
    module.exports = Mousetrap;
  }

  // expose mousetrap as an AMD module
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return Mousetrap;
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
})(typeof window !== 'undefined' ? window : null, typeof window !== 'undefined' ? document : null);

/***/ }),

/***/ 55001:
/*!*********************************************!*\
  !*** ./node_modules/ticky/ticky-browser.js ***!
  \*********************************************/
/***/ ((module) => {

var si = typeof setImmediate === 'function',
  tick;
if (si) {
  tick = function (fn) {
    setImmediate(fn);
  };
} else {
  tick = function (fn) {
    setTimeout(fn, 0);
  };
}
module.exports = tick;

/***/ }),

/***/ 93032:
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/dangermessage/dangermessage.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DangermessageComponent: () => (/* binding */ DangermessageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 82454);
var _class;


class DangermessageComponent {
  constructor() {}
  ngOnInit() {}
}
_class = DangermessageComponent;
_class.ɵfac = function DangermessageComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-dangermessage"]],
  decls: 16,
  vars: 0,
  consts: [[1, "row", "signpages", "ext-center"], [1, "col-md-7", "mx-auto"], [1, "card", "alert-message"], [1, "card-body"], [1, "text-center", "text-white"], ["enable-background", "new 0 0 512 512", "version", "1.1", "viewBox", "0 0 512 512", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 1, "alert-icons"], ["d", "m491.38 157.66c-13.149-30.297-31.855-57.697-55.598-81.439-23.742-23.742-51.142-42.448-81.439-55.598-31.529-13.686-64.615-20.625-98.338-20.625s-66.809 6.939-98.338 20.625c-30.297 13.15-57.697 31.856-81.439 55.598s-42.448 51.142-55.598 81.439c-13.686 31.529-20.625 64.615-20.625 98.338s6.939 66.809 20.625 98.338c13.15 30.297 31.856 57.697 55.598 81.439s51.142 42.448 81.439 55.598c31.529 13.686 64.615 20.625 98.338 20.625s66.809-6.939 98.338-20.625c30.297-13.15 57.697-31.856 81.439-55.598s42.448-51.142 55.598-81.439c13.686-31.529 20.625-64.615 20.625-98.338s-6.939-66.809-20.625-98.338zm-235.38 334.34c-127.92 0-236-108.08-236-236s108.08-236 236-236 236 108.08 236 236-108.08 236-236 236z"], ["d", "m451.98 173.8c-10.87-25.256-26.363-48.044-46.049-67.729-19.686-19.687-42.473-35.179-67.73-46.05-26.248-11.297-53.903-17.025-82.196-17.025-38.462 0-78.555 13.134-115.94 37.981-4.6 3.057-5.851 9.264-2.794 13.863 3.057 4.6 9.265 5.85 13.863 2.794 34.1-22.66 70.365-34.638 104.88-34.638 104.62 0 193 88.383 193 193s-88.383 193-193 193-193-88.383-193-193c0-34.504 11.975-70.771 34.629-104.88 3.056-4.601 1.804-10.807-2.796-13.863-4.602-3.056-10.808-1.803-13.863 2.797-24.84 37.397-37.97 77.489-37.97 115.94 0 28.293 5.728 55.948 17.025 82.196 10.87 25.256 26.363 48.044 46.049 67.729 19.686 19.686 42.473 35.179 67.729 46.049 26.249 11.298 53.904 17.026 82.197 17.026s55.948-5.728 82.196-17.025c25.256-10.87 48.044-26.363 67.729-46.049 19.686-19.686 35.179-42.473 46.049-67.729 11.298-26.249 17.026-53.904 17.026-82.197s-5.728-55.948-17.025-82.196z"], ["d", "m312.56 256 41.716-41.716c7.559-7.553 11.722-17.597 11.722-28.284s-4.163-20.731-11.719-28.281c-7.557-7.557-17.6-11.719-28.281-11.719s-20.724 4.162-28.281 11.719l-41.719 41.719-41.719-41.719c-7.557-7.557-17.6-11.719-28.281-11.719s-20.724 4.162-28.278 11.716c-7.559 7.553-11.722 17.597-11.722 28.284s4.163 20.731 11.719 28.281l41.719 41.719-41.716 41.716c-7.559 7.553-11.722 17.597-11.722 28.284s4.163 20.731 11.719 28.281c7.557 7.557 17.601 11.719 28.281 11.719s20.724-4.162 28.281-11.719l41.719-41.719 41.719 41.719c7.557 7.557 17.601 11.719 28.281 11.719s20.724-4.162 28.278-11.716c7.559-7.553 11.722-17.597 11.722-28.284s-4.163-20.731-11.719-28.281l-41.719-41.719zm27.577 84.139c-3.78 3.779-8.801 5.861-14.139 5.861s-10.359-2.082-14.139-5.861l-48.79-48.79c-1.953-1.953-4.512-2.929-7.071-2.929s-5.119 0.976-7.071 2.929l-48.79 48.79c-3.78 3.779-8.801 5.861-14.139 5.861s-10.359-2.082-14.142-5.864c-3.777-3.775-5.858-8.795-5.858-14.136s2.081-10.361 5.861-14.139l48.79-48.79c3.905-3.905 3.905-10.237 0-14.142l-48.793-48.793c-3.777-3.775-5.858-8.795-5.858-14.136s2.081-10.361 5.861-14.139c3.78-3.779 8.801-5.861 14.139-5.861s10.359 2.082 14.139 5.861l48.79 48.79c3.905 3.905 10.237 3.905 14.143 0l48.79-48.791c3.779-3.778 8.8-5.86 14.138-5.86s10.359 2.082 14.142 5.864c3.777 3.775 5.858 8.795 5.858 14.136s-2.081 10.361-5.861 14.139l-48.79 48.791c-3.905 3.905-3.905 10.237 0 14.142l48.793 48.793c3.777 3.774 5.858 8.794 5.858 14.135s-2.081 10.361-5.861 14.139z"], ["d", "m114 105c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10z"], [1, "mt-4", "mb-3"], [1, "tx-18", "text-white-50"], ["routerLink", "/dashboard", 1, "btn", "btn-danger"]],
  template: function DangermessageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6)(7, "path", 7)(8, "path", 8)(9, "path", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Message Danger");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Oops!! You tried to access a page which is not available.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Back to Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 13300:
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/emptypage/emptypage.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptypageComponent: () => (/* binding */ EmptypageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;

class EmptypageComponent {
  constructor() {}
  ngOnInit() {}
}
_class = EmptypageComponent;
_class.ɵfac = function EmptypageComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-emptypage"]],
  decls: 26,
  vars: 0,
  consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-download", "mr-2"], [1, "fe", "fe-filter", "mr-2"], ["type", "button", 1, "btn", "btn-primary", "my-2", "btn-icon-text"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "sidemenu-height"], [1, "col-lg-12"], [1, "card", "custom-card"], [1, "card-body"]],
  template: function EmptypageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Empty Page");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pages");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Empty Page");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Import ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Filter ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Download Report ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Typing Some text here.... ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 88434:
/*!*********************************************************!*\
  !*** ./src/app/components/pages/faqs/faqs.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqsComponent: () => (/* binding */ FaqsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
var _class;


function FaqsComponent_ng_template_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences ");
  }
}
function FaqsComponent_ng_template_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences ");
  }
}
function FaqsComponent_ng_template_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences ");
  }
}
function FaqsComponent_ng_template_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences ");
  }
}
function FaqsComponent_ng_template_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences ");
  }
}
function FaqsComponent_ng_template_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences ");
  }
}
class FaqsComponent {
  constructor() {}
  ngOnInit() {}
}
_class = FaqsComponent;
_class.ɵfac = function FaqsComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-faqs"]],
  decls: 84,
  vars: 1,
  consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-download", "mr-2"], [1, "fe", "fe-filter", "mr-2"], ["type", "button", 1, "btn", "btn-primary", "my-2", "btn-icon-text"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-sm-12", "col-md-12"], [1, "card", "custom-card"], [1, "card-body"], [1, "main-content-label", "mb-1"], [1, "text-muted", "card-sub-title"], [1, "border"], [1, "p-4"], [1, "font-weight-semibold", "tx-16"], [1, "mb-0", "tx-14", "text-muted"], [1, "p-4", "border-top"], [1, "card", "custom-card", "accordion-faq"], ["aria-multiselectable", "true", "id", "accordion", "role", "tablist", 1, "accordion"], ["activeIds", "static-1", 3, "closeOthers"], ["id", "static-1", "title", "1.  How To Insert All The Plugins?"], ["ngbPanelContent", ""], ["id", "static-2", "title", "2.  How Can I contact?"], ["id", "static-3", "title", "3.  Can I use this Plugins in Another Template?"], ["id", "static-4", "title", "4.  How Can I Add another page in Template?"], ["id", "static-5", "title", "5.  It is Easy to Customizable?"], ["id", "static-6", "title", "6.  How can I download This template?"]],
  template: function FaqsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Faq");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pages");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Faq");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Import ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Filter ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Download Report ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "div", 16)(25, "div")(26, "h6", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Basic Faqs");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19)(31, "div", 20)(32, "h5", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "1. How To Insert All The Plugins?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23)(37, "h4", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "2. How Can I contact?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 23)(42, "h4", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "3. Can I use this Plugins in Another Template?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 23)(47, "h4", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "4. How Can I Add another page in Template?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23)(52, "h4", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "5. It is Easy to Customizable?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 23)(57, "h4", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "6. How can I download This template?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 13)(62, "div", 14)(63, "div", 24)(64, "div", 16)(65, "div")(66, "h6", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Accordion Faqs");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 25)(71, "ngb-accordion", 26)(72, "ngb-panel", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, FaqsComponent_ng_template_73_Template, 1, 0, "ng-template", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "ngb-panel", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, FaqsComponent_ng_template_75_Template, 1, 0, "ng-template", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "ngb-panel", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, FaqsComponent_ng_template_77_Template, 1, 0, "ng-template", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "ngb-panel", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, FaqsComponent_ng_template_79_Template, 1, 0, "ng-template", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "ngb-panel", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, FaqsComponent_ng_template_81_Template, 1, 0, "ng-template", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "ngb-panel", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, FaqsComponent_ng_template_83_Template, 1, 0, "ng-template", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](71);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closeOthers", true);
    }
  },
  dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbPanelContent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 90758:
/*!***************************************************************!*\
  !*** ./src/app/components/pages/gallery/gallery.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GalleryComponent: () => (/* binding */ GalleryComponent)
/* harmony export */ });
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ 78142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 89650);
var _class;




function GalleryComponent_li_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21)(1, "a", 22)(2, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_li_31_Template_img_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const img_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.openImageModalRowDescription(img_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const img_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r1.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
class GalleryComponent {
  constructor(galleryService) {
    this.galleryService = galleryService;
    this.GalleryImage = [new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(1, {
      img: '../../assets/img/media/1.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(2, {
      img: '../../assets/img/media/2.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(3, {
      img: '../../assets/img/media/3.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(4, {
      img: '../../assets/img/media/4.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(5, {
      img: '../../assets/img/media/5.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(6, {
      img: '../../assets/img/media/6.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(7, {
      img: '../../assets/img/media/7.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(8, {
      img: '../../assets/img/media/8.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(9, {
      img: '../../assets/img/media/9.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(10, {
      img: '../../assets/img/media/10.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(11, {
      img: '../../assets/img/media/11.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(12, {
      img: '../../assets/img/media/12.jpg',
      title: ''
    })];
    this.buttonsConfigDefault = {
      visible: true,
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.ButtonsStrategy.DEFAULT
    };
    this.buttonsConfigSimple = {
      visible: true,
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.ButtonsStrategy.SIMPLE
    };
    this.buttonsConfigAdvanced = {
      visible: true,
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.ButtonsStrategy.ADVANCED
    };
    this.buttonsConfigFull = {
      visible: true,
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.ButtonsStrategy.FULL
    };
    this.buttonsConfigCustom = {
      visible: true,
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.ButtonsStrategy.CUSTOM,
      buttons: [_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.KS_DEFAULT_BTN_FULL_SCREEN, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.KS_DEFAULT_BTN_DELETE, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.KS_DEFAULT_BTN_EXTURL, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.KS_DEFAULT_BTN_DOWNLOAD, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.KS_DEFAULT_BTN_CLOSE]
    };
    this.customPlainGalleryRowDescConfig = {
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.PlainGalleryStrategy.CUSTOM,
      layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.AdvancedLayout(-1, true)
    };
  }
  ngOnInit() {}
  openImageModalRowDescription(image) {
    const index = this.getCurrentIndexCustomLayout(image, this.GalleryImage);
    this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, {
      layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.AdvancedLayout(index, true)
    });
  }
  getCurrentIndexCustomLayout(image, images) {
    return image ? images.indexOf(image) : -1;
  }
  onButtonBeforeHook(event) {
    if (!event || !event.button) {
      return;
    }
    if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.ButtonType.DELETE) {
      this.GalleryImage = this.GalleryImage.filter(val => event.image && val.id !== event.image.id);
    }
  }
  onButtonAfterHook(event) {
    if (!event || !event.button) {
      return;
    }
  }
  onCustomButtonBeforeHook(event, galleryId) {
    if (!event || !event.button) {
      return;
    }
    if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.ButtonType.CUSTOM) {
      this.addRandomImage();
      setTimeout(() => {
        this.galleryService.openGallery(galleryId, this.GalleryImage.length - 1);
      }, 0);
    }
  }
  onCustomButtonAfterHook(event, galleryId) {
    if (!event || !event.button) {
      return;
    }
  }
  addRandomImage() {
    const imageToCopy = this.GalleryImage[Math.floor(Math.random() * this.GalleryImage.length)];
    const newImage = new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.Image(this.GalleryImage.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
    // this.GalleryImage = [...this.GalleryImage, newImage];
  }
}
_class = GalleryComponent;
_class.ɵfac = function GalleryComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__.GalleryService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-gallery"]],
  decls: 32,
  vars: 1,
  consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "#"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-download", "mr-2"], [1, "fe", "fe-filter", "mr-2"], ["type", "button", 1, "btn", "btn-primary", "my-2", "btn-icon-text"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-lg-12", "col-md-12"], [1, "card", "custom-card"], [1, "card-body"], [1, "main-content-label", "mb-1"], [1, "text-muted", "card-sub-title"], ["id", "lightgallery", 1, "list-unstyled", "row", "mb-0"], ["class", "col-xs-6 col-sm-4 col-md-4 col-xl-4 mb-3", 4, "ngFor", "ngForOf"], [1, "col-xs-6", "col-sm-4", "col-md-4", "col-xl-4", "mb-3"], ["href", "javascript:void(0)", 1, "wd-100p"], ["alt", "Thumb", 1, "img-responsive", 3, "src", "click"]],
  template: function GalleryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pages");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Import ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Filter ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Download Report ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "div", 16)(25, "div")(26, "h6", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Light Gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "A customizable, modular, responsive, gallery plugin for Angular.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, GalleryComponent_li_31_Template, 3, 1, "li", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.GalleryImage);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 94480:
/*!***************************************************************!*\
  !*** ./src/app/components/pages/invoice/invoice.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InvoiceComponent: () => (/* binding */ InvoiceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;

class InvoiceComponent {
  constructor() {}
  ngOnInit() {}
}
_class = InvoiceComponent;
_class.ɵfac = function InvoiceComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-invoice"]],
  decls: 146,
  vars: 0,
  consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-download", "mr-2"], [1, "fe", "fe-filter", "mr-2"], ["type", "button", 1, "btn", "btn-primary", "my-2", "btn-icon-text"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-lg-12", "col-md-12"], [1, "card", "custom-card"], [1, "card-body"], [1, "d-lg-flex"], [1, "main-content-label", "mb-1"], [1, "ml-auto"], [1, "mb-1"], [1, "font-weight-bold"], [1, "mb-0"], [1, "mg-b-40"], [1, "col-lg-6"], [1, "h3"], [1, "col-lg-6", "text-right"], [1, "table-responsive", "mg-t-40"], [1, "table", "table-invoice", "table-bordered"], [1, "wd-20p"], [1, "wd-40p"], [1, "tx-center"], [1, "tx-right"], [1, "tx-12"], ["colspan", "2", "rowspan", "4", 1, "valign-middle"], [1, "invoice-notes"], [1, "main-content-label", "tx-13"], ["colspan", "2", 1, "tx-right"], [1, "tx-right", "tx-uppercase", "tx-bold", "tx-inverse"], [1, "tx-bold"], [1, "card-footer", "text-right"], ["type", "button", 1, "btn", "ripple", "btn-primary", "mb-1", "mr-1"], [1, "fe", "fe-credit-card", "mr-1"], ["type", "button", 1, "btn", "ripple", "btn-secondary", "mb-1", "mr-1"], [1, "fe", "fe-send", "mr-1"], ["type", "button", "onclick", "javascript:window.print();", 1, "btn", "ripple", "btn-info", "mb-1"], [1, "fe", "fe-printer", "mr-1"]],
  template: function InvoiceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Invoice");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pages");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Invoice");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Import ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Filter ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Download Report ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "div", 16)(25, "div", 17)(26, "h2", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "#INV0678");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19)(29, "p", 20)(30, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Invoice Date :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " 01st November 2020");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 22)(34, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Due Date :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " 01 May 2020");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "hr", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13)(39, "div", 24)(40, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Invoice From:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Street Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " State, City");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Region, Postal Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " yourdomain@example.com ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26)(51, "p", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Invoice To:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Street Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " State, City");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Region, Postal Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " ypurdomain@example.com ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 27)(62, "table", 28)(63, "thead")(64, "tr")(65, "th", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "th", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "QNTY");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Unit");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "tbody")(76, "tr")(77, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Logo Creation");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Logo and business cards design");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\u00A360.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\u00A3120.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tr")(88, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Online Store Design & Development");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Design/Development for all popular modern browsers");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\u00A380.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\u00A3240.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "tr")(99, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "App Design");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Promotional mobile application");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "\u00A340.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\u00A340.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "tr")(110, "td", 34)(111, "div", 35)(112, "label", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Notes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Sub-Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "\u00A3400.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "tr")(121, "td", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Tax");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "3%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "tr")(126, "td", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Discount");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "10%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "tr")(131, "td", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Total Due");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td", 37)(134, "h4", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "\u00A3450.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 40)(137, "button", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "i", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " Pay Invoice");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "button", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "i", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " Send Invoice");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "button", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "i", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " Print Invoice");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 87735:
/*!*************************************************************!*\
  !*** ./src/app/components/pages/page-msg-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageMsgRoutingModule: () => (/* binding */ PageMsgRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _dangermessage_dangermessage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dangermessage/dangermessage.component */ 93032);
/* harmony import */ var _successmessage_successmessage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./successmessage/successmessage.component */ 40028);
/* harmony import */ var _warningmessage_warningmessage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warningmessage/warningmessage.component */ 63181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;






const routes = [{
  path: '',
  children: [{
    path: 'success-message',
    component: _successmessage_successmessage_component__WEBPACK_IMPORTED_MODULE_1__.SuccessmessageComponent
  }, {
    path: 'warning-message',
    component: _warningmessage_warningmessage_component__WEBPACK_IMPORTED_MODULE_2__.WarningmessageComponent
  }, {
    path: 'danger-message',
    component: _dangermessage_dangermessage_component__WEBPACK_IMPORTED_MODULE_0__.DangermessageComponent
  }]
}];
class PageMsgRoutingModule {}
_class = PageMsgRoutingModule;
_class.ɵfac = function PageMsgRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PageMsgRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 3752:
/*!**********************************************************!*\
  !*** ./src/app/components/pages/pages-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagesRoutingModule: () => (/* binding */ PagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _website_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../website/blogs/blogs.component */ 21423);
/* harmony import */ var _website_enquiry_enquiry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../website/enquiry/enquiry.component */ 92728);
/* harmony import */ var _emptypage_emptypage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emptypage/emptypage.component */ 13300);
/* harmony import */ var _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faqs/faqs.component */ 88434);
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery/gallery.component */ 90758);
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invoice/invoice.component */ 94480);
/* harmony import */ var _pages_editor_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/editor/editor.component */ 18731);
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/pages.component */ 348);
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pricing/pricing.component */ 57666);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ 74212);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;













const routes = [{
  path: '',
  children: [{
    path: 'list',
    component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_7__.PageComponent
  }, {
    path: ':index/page',
    component: _pages_editor_editor_component__WEBPACK_IMPORTED_MODULE_6__.EditorComponent
  }, {
    path: 'blogs',
    component: _website_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_0__.WebsiteBlogComponent
  }, {
    path: 'enquiry',
    component: _website_enquiry_enquiry_component__WEBPACK_IMPORTED_MODULE_1__.EnquiryComponent
  }, {
    path: 'empty-page',
    component: _emptypage_emptypage_component__WEBPACK_IMPORTED_MODULE_2__.EmptypageComponent
  }, {
    path: 'faqs',
    component: _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_3__.FaqsComponent
  }, {
    path: 'gallery',
    component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__.GalleryComponent
  }, {
    path: 'invoice',
    component: _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_5__.InvoiceComponent
  }, {
    path: 'pricing',
    component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__.PricingComponent
  }, {
    path: 'profile',
    component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__.ProfileComponent
  }]
}];
class PagesRoutingModule {}
_class = PagesRoutingModule;
_class.ɵfac = function PagesRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](PagesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
})();

/***/ }),

/***/ 69592:
/*!**************************************************!*\
  !*** ./src/app/components/pages/pages.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagesModule: () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile/profile.component */ 74212);
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice/invoice.component */ 94480);
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pricing/pricing.component */ 57666);
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery/gallery.component */ 90758);
/* harmony import */ var _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faqs/faqs.component */ 88434);
/* harmony import */ var _successmessage_successmessage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./successmessage/successmessage.component */ 40028);
/* harmony import */ var _dangermessage_dangermessage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dangermessage/dangermessage.component */ 93032);
/* harmony import */ var _warningmessage_warningmessage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./warningmessage/warningmessage.component */ 63181);
/* harmony import */ var _emptypage_emptypage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./emptypage/emptypage.component */ 13300);
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages-routing.module */ 3752);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! hammerjs */ 40868);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mousetrap */ 99882);
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(mousetrap__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _page_msg_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-msg-routing.module */ 87735);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-select/ng-select */ 48580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _pages_editor_editor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/editor/editor.component */ 18731);
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/pages.component */ 348);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-pagination */ 62638);
/* harmony import */ var _common_component_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/component.module */ 65758);
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng2-dragula */ 17175);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;


























class PagesModule {}
_class = PagesModule;
_class.ɵfac = function PagesModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
  providers: [ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule, _pages_routing_module__WEBPACK_IMPORTED_MODULE_9__.PagesRoutingModule, _page_msg_routing_module__WEBPACK_IMPORTED_MODULE_12__.PageMsgRoutingModule,
  //GalleryModule.forRoot(),
  ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrModule.forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule, _common_component_module__WEBPACK_IMPORTED_MODULE_15__.ComponentModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_22__.NgxPaginationModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule, ng2_dragula__WEBPACK_IMPORTED_MODULE_23__.DragulaModule.forRoot()]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](PagesModule, {
    declarations: [_pages_pages_component__WEBPACK_IMPORTED_MODULE_14__.PageComponent, _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent, _pages_editor_editor_component__WEBPACK_IMPORTED_MODULE_13__.EditorComponent, _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_1__.InvoiceComponent, _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_2__.PricingComponent, _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__.GalleryComponent, _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_4__.FaqsComponent, _successmessage_successmessage_component__WEBPACK_IMPORTED_MODULE_5__.SuccessmessageComponent, _dangermessage_dangermessage_component__WEBPACK_IMPORTED_MODULE_6__.DangermessageComponent, _warningmessage_warningmessage_component__WEBPACK_IMPORTED_MODULE_7__.WarningmessageComponent, _emptypage_emptypage_component__WEBPACK_IMPORTED_MODULE_8__.EmptypageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule, _pages_routing_module__WEBPACK_IMPORTED_MODULE_9__.PagesRoutingModule, _page_msg_routing_module__WEBPACK_IMPORTED_MODULE_12__.PageMsgRoutingModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule, _common_component_module__WEBPACK_IMPORTED_MODULE_15__.ComponentModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_22__.NgxPaginationModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule, ng2_dragula__WEBPACK_IMPORTED_MODULE_23__.DragulaModule]
  });
})();

/***/ }),

/***/ 18731:
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/pages/editor/editor.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorComponent: () => (/* binding */ EditorComponent)
/* harmony export */ });
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ 78142);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 30240);
/* harmony import */ var src_app_shared_data_pages_profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/pages/profile */ 18345);
/* harmony import */ var _model_class_cms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/class-cms */ 72749);
/* harmony import */ var _model_pages_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/pages.model */ 83918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var src_app_shared_services_route_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/route.service */ 62473);
/* harmony import */ var src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/web/web.service */ 99662);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/utils.service */ 4486);
/* harmony import */ var src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/request.service */ 35467);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-select/ng-select */ 48580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _common_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/textarea/textarea.component */ 15782);
/* harmony import */ var _common_input_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/input/input.component */ 22124);
/* harmony import */ var _common_alerts_alert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/alerts/alert.component */ 75601);
/* harmony import */ var _common_element_text_text_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/element/text/text-input.component */ 5088);
/* harmony import */ var _common_element_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/element/text-editor/text-editor.component */ 2736);
/* harmony import */ var _common_element_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/element/picker/image-picker.component */ 63033);
var _class;


// import { debounceTime, distinctUntilChanged } from 'rxjs/operators';





















function EditorComponent_ng_template_20_div_6_ng_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ng-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r13 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("ng-selected", data_r13.id == ctx_r11.template.parent);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("value", data_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](data_r13.title);
  }
}
function EditorComponent_ng_template_20_div_6_ng_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ng-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("value", data_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](data_r14.label);
  }
}
function EditorComponent_ng_template_20_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 16)(1, "div", 30)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Page Url");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "app-input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onDataModelChange", function EditorComponent_ng_template_20_div_6_Template_app_input_onDataModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r15.onSave($event));
    })("inputModelChange", function EditorComponent_ng_template_20_div_6_Template_app_input_inputModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r17.template.url = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 32)(6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Page Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "app-input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onDataModelChange", function EditorComponent_ng_template_20_div_6_Template_app_input_onDataModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r18.onSave($event));
    })("inputModelChange", function EditorComponent_ng_template_20_div_6_Template_app_input_inputModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r19.template.title = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 32)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "Page Menu Label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "app-input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onDataModelChange", function EditorComponent_ng_template_20_div_6_Template_app_input_onDataModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r20.onSave($event));
    })("inputModelChange", function EditorComponent_ng_template_20_div_6_Template_app_input_inputModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r21.template.label = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 32)(14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "ng-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function EditorComponent_ng_template_20_div_6_Template_ng_select_change_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r22.onSelectChange($event, "parent"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](17, EditorComponent_ng_template_20_div_6_ng_option_17_Template, 2, 3, "ng-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "div", 35)(19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "ng-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function EditorComponent_ng_template_20_div_6_Template_ng_select_change_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r23.onSelectChange($event, "layout"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](22, EditorComponent_ng_template_20_div_6_ng_option_22_Template, 2, 2, "ng-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "div", 35)(24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "ng-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function EditorComponent_ng_template_20_div_6_Template_ng_select_change_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r24.onSelectChange($event, "header_position"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "ng-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "ng-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](30, "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "div", 35)(32, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "ng-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function EditorComponent_ng_template_20_div_6_Template_ng_select_change_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r25.onSelectChange($event, "footer_position"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "ng-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](36, "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "ng-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](38, "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "div", 35)(40, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "ng-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function EditorComponent_ng_template_20_div_6_Template_ng_select_change_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r26.onSelectChange($event, "page_order"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "ng-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](44, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](45, "ng-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](46, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](47, "ng-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](48, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](49, "ng-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](50, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](51, "ng-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](52, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](53, "div", 41)(54, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](55, "Meta Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](56, "app-textarea", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onDataModelChange", function EditorComponent_ng_template_20_div_6_Template_app_textarea_onDataModelChange_56_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r27.onInputUpdate($event));
    })("inputModelChange", function EditorComponent_ng_template_20_div_6_Template_app_textarea_inputModelChange_56_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r28.template.meta_title = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "div", 41)(58, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](59, "Meta Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](60, "app-textarea", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onDataModelChange", function EditorComponent_ng_template_20_div_6_Template_app_textarea_onDataModelChange_60_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r29.onInputUpdate($event));
    })("inputModelChange", function EditorComponent_ng_template_20_div_6_Template_app_textarea_inputModelChange_60_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r30.template.meta_description = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("type", "text")("id", "url")("value", ctx_r10.template.url)("placeholder", "Enter Page Url")("inputModel", ctx_r10.template.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("type", "text")("id", "title")("value", ctx_r10.template.title)("placeholder", "Enter Page Name")("inputModel", ctx_r10.template.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("type", "text")("id", "label")("value", ctx_r10.template.label)("placeholder", "Enter Page Menu Label")("inputModel", ctx_r10.template.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Page Parent ", ctx_r10._parent, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r10.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Page Layout ", ctx_r10._layout, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r10.layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Header Section ", ctx_r10._header_position, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Footer Section ", ctx_r10._footer_position, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Page Order ", ctx_r10._page_order, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("type", "text")("id", "meta_title")("value", ctx_r10.template.meta_title)("placeholder", "Enter Page Meta Title")("inputModel", ctx_r10.template.meta_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("type", "text")("id", "meta_description")("value", ctx_r10.template.meta_description)("placeholder", "Select layout")("inputModel", ctx_r10.template.meta_description);
  }
}
function EditorComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "form", 26)(3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Editor");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, EditorComponent_ng_template_20_div_6_Template, 61, 42, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.template);
  }
}
function EditorComponent_ng_template_24_div_7_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr", 59)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "td")(8, "div", 60)(9, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EditorComponent_ng_template_24_div_7_tr_16_Template_a_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r38);
      const data_r36 = restoredCtx.$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r37.getGroups(data_r36));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EditorComponent_ng_template_24_div_7_tr_16_Template_a_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r38);
      const data_r36 = restoredCtx.$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r39.onDelete(data_r36.id, "block"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](data_r36.block_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", data_r36.item_max, " items");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](data_r36.multiple ? "Multiple" : "Single");
  }
}
function EditorComponent_ng_template_24_div_7_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0, "Prev");
  }
}
function EditorComponent_ng_template_24_div_7_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0, "Next");
  }
}
function EditorComponent_ng_template_24_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 48)(1, "div", 16)(2, "div", 49)(3, "div", 50)(4, "table", 51)(5, "thead")(6, "tr")(7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "Blocks");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "Max.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, EditorComponent_ng_template_24_div_7_tr_16_Template, 13, 3, "tr", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "div", 54)(18, "ngb-pagination", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("pageChange", function EditorComponent_ng_template_24_div_7_Template_ngb_pagination_pageChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r40.page = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](19, EditorComponent_ng_template_24_div_7_ng_template_19_Template, 1, 0, "ng-template", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](20, EditorComponent_ng_template_24_div_7_ng_template_20_Template, 1, 0, "ng-template", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "div", 49)(22, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EditorComponent_ng_template_24_div_7_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r41);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](35);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r42.addBlock(_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23, " New Block");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r31.blocks);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("collectionSize", ctx_r31.blocks.length)("page", ctx_r31.page);
  }
}
function EditorComponent_ng_template_24_div_8_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 70)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Select a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Block");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, " to View");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function EditorComponent_ng_template_24_div_8_div_9_div_12_div_9_element_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "element-input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onModelChange", function EditorComponent_ng_template_24_div_8_div_9_div_12_div_9_element_input_1_Template_element_input_onModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r54);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r53.onReceivedUpdate($event));
    })("onModelDelete", function EditorComponent_ng_template_24_div_8_div_9_div_12_div_9_element_input_1_Template_element_input_onModelDelete_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r54);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r55.onReceivedDelete($event));
    })("inputModelChange", function EditorComponent_ng_template_24_div_8_div_9_div_12_div_9_element_input_1_Template_element_input_inputModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r54);
      const element_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](element_r49.value = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const group_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", element_r49.name)("groupid", group_r46.id)("type", element_r49.type)("uuid", group_r46.uuid)("data", element_r49)("value", element_r49.value)("inputModel", element_r49.value);
  }
}
function EditorComponent_ng_template_24_div_8_div_9_div_12_div_9_element_editor_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "element-editor", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onModelChange", function EditorComponent_ng_template_24_div_8_div_9_div_12_div_9_element_editor_2_Template_element_editor_onModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r61);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r60.onReceivedUpdate($event));
    })("onModelDelete", function EditorComponent_ng_template_24_div_8_div_9_div_12_div_9_element_editor_2_Template_element_editor_onModelDelete_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r61);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r62.onReceivedDelete($event));
    })("inputModelChange", function EditorComponent_ng_template_24_div_8_div_9_div_12_div_9_element_editor_2_Template_element_editor_inputModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r61);
      const element_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](element_r49.value = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const group_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", element_r49.name)("groupid", group_r46.id)("uuid", group_r46.uuid)("data", element_r49)("value", element_r49.value)("inputModel", element_r49.value);
  }
}
function EditorComponent_ng_template_24_div_8_div_9_div_12_div_9_element_picker_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "element-picker", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onModelChange", function EditorComponent_ng_template_24_div_8_div_9_div_12_div_9_element_picker_3_Template_element_picker_onModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r68);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r67.onReceivedUpdate($event));
    })("onModelDelete", function EditorComponent_ng_template_24_div_8_div_9_div_12_div_9_element_picker_3_Template_element_picker_onModelDelete_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r68);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r69.onReceivedDelete($event));
    })("inputModelChange", function EditorComponent_ng_template_24_div_8_div_9_div_12_div_9_element_picker_3_Template_element_picker_inputModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r68);
      const element_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](element_r49.value = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const group_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", element_r49.name)("groupid", group_r46.id)("uuid", group_r46.uuid)("data", element_r49)("value", element_r49.value)("inputModel", element_r49.value);
  }
}
function EditorComponent_ng_template_24_div_8_div_9_div_12_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, EditorComponent_ng_template_24_div_8_div_9_div_12_div_9_element_input_1_Template, 1, 7, "element-input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, EditorComponent_ng_template_24_div_8_div_9_div_12_div_9_element_editor_2_Template, 1, 6, "element-editor", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, EditorComponent_ng_template_24_div_8_div_9_div_12_div_9_element_picker_3_Template, 1, 6, "element-picker", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", element_r49.type == "text" || element_r49.type == "date" || element_r49.type == "time" || element_r49.type == "datetime" || element_r49.type == "datetime-local");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", element_r49.type == "textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", element_r49.type == "image");
  }
}
function EditorComponent_ng_template_24_div_8_div_9_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 72)(1, "div", 65)(2, "div", 73)(3, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EditorComponent_ng_template_24_div_8_div_9_div_12_Template_a_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r75);
      const group_r46 = restoredCtx.$implicit;
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](39);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r74.addElement(_r8, group_r46.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, " Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, EditorComponent_ng_template_24_div_8_div_9_div_12_div_9_Template, 4, 3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const group_r46 = ctx.$implicit;
    const i_r47 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("Group ", i_r47 + 1, ": ", group_r46.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", group_r46.element);
  }
}
function EditorComponent_ng_template_24_div_8_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 30)(1, "div", 65)(2, "div", 41)(3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "p")(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, " Items:");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](12, EditorComponent_ng_template_24_div_8_div_9_div_12_Template, 10, 3, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r44.selected_block.block_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r44.selected_block.multiple ? "Multiple" : "Single", " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r44.selected_block.item_max, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r44.groups);
  }
}
function EditorComponent_ng_template_24_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 64)(1, "div", 65)(2, "div", 66)(3, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EditorComponent_ng_template_24_div_8_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r77);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](37);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r76.addGroup(_r6, ctx_r76.selected_block.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Add Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, " Content");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, EditorComponent_ng_template_24_div_8_div_8_Template, 6, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, EditorComponent_ng_template_24_div_8_div_9_Template, 13, 4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r32.is_block_showing);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r32.is_block_showing);
  }
}
function EditorComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "form", 26)(3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Template Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 28)(6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, EditorComponent_ng_template_24_div_7_Template, 24, 3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, EditorComponent_ng_template_24_div_8_Template, 10, 2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r2.showElement);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.showElement);
  }
}
function EditorComponent_ng_template_28_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr", 59)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "td")(8, "div", 60)(9, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](data_r81.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](data_r81.layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](data_r81.updated_at);
  }
}
function EditorComponent_ng_template_28_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0, "Prev");
  }
}
function EditorComponent_ng_template_28_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0, "Next");
  }
}
function EditorComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "form", 26)(3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Template Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 28)(6, "div", 16)(7, "div", 83)(8, "div", 50)(9, "table", 51)(10, "thead")(11, "tr")(12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, "Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17, "Last Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](19, EditorComponent_ng_template_28_tr_19_Template, 13, 3, "tr", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 54)(21, "ngb-pagination", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("pageChange", function EditorComponent_ng_template_28_Template_ngb_pagination_pageChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r83);
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r82.page = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](22, EditorComponent_ng_template_28_ng_template_22_Template, 1, 0, "ng-template", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](23, EditorComponent_ng_template_28_ng_template_23_Template, 1, 0, "ng-template", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "div", 84)(25, "div", 65)(26, "div", 66)(27, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, " Template Form ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "div", 41)(31, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](32, "Label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "app-input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("inputModelChange", function EditorComponent_ng_template_28_Template_app_input_inputModelChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r83);
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r84.layout.label = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "div", 41)(35, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](36, "Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "app-input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("inputModelChange", function EditorComponent_ng_template_28_Template_app_input_inputModelChange_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r83);
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r85.layout.layout = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "div", 30)(39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](40, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "app-input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("inputModelChange", function EditorComponent_ng_template_28_Template_app_input_inputModelChange_41_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r83);
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r86.layout.description = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "div", 30)(43, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](44, "Content");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](45, "app-input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("inputModelChange", function EditorComponent_ng_template_28_Template_app_input_inputModelChange_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r83);
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r87.layout_content = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](46, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r3.layouts);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("collectionSize", ctx_r3.layouts.length)("page", ctx_r3.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("type", "text")("id", "label")("value", ctx_r3.layout.label)("placeholder", "Select layout")("inputModel", ctx_r3.layout.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("type", "text")("id", "layout")("value", ctx_r3.layout.layout)("placeholder", "Select layout")("inputModel", ctx_r3.layout.layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("type", "text")("id", "description")("value", ctx_r3.layout.description)("placeholder", "Select layout")("inputModel", ctx_r3.layout.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("type", "text")("id", "layout_content")("value", ctx_r3.layout_content)("placeholder", "Select layout")("inputModel", ctx_r3.layout_content);
  }
}
function EditorComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 88)(1, "h6", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "New Blocks");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EditorComponent_ng_template_34_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r90);
      const modal_r88 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](modal_r88.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 92)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "New Block ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 93)(10, "div", 41)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, "Block Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "ng-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function EditorComponent_ng_template_34_Template_ng_select_change_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r90);
      const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r91.onBlockSelected($event, "multiple"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "ng-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, "Single");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "ng-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17, "Multible");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "div", 41)(19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20, "Max. Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "ng-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function EditorComponent_ng_template_34_Template_ng_select_change_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r90);
      const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r92.onBlockSelected($event, "item_max"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "ng-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "ng-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "ng-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "ng-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "ng-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "div", 30)(33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](34, "Block Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "app-input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("inputModelChange", function EditorComponent_ng_template_34_Template_app_input_inputModelChange_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r90);
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r93.new_Block.block_name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "div", 94)(37, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EditorComponent_ng_template_34_Template_button_click_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r90);
      const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r94.onCreateBlock($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](38, "Add New Block");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EditorComponent_ng_template_34_Template_button_click_39_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r90);
      const modal_r88 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](modal_r88.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](40, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("type", "text")("id", "block_name")("value", ctx_r5.new_Block.block_name)("placeholder", "Select layout")("inputModel", ctx_r5.new_Block.block_name);
  }
}
function EditorComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 88)(1, "h6", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "New Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EditorComponent_ng_template_36_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r98);
      const modal_r96 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](modal_r96.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 92)(7, "div", 93)(8, "div", 30)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, " Group Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "app-input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("inputModelChange", function EditorComponent_ng_template_36_Template_app_input_inputModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r98);
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r99.new_Group.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 94)(13, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EditorComponent_ng_template_36_Template_button_click_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r98);
      const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r100.onCreateGroup($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, " New Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EditorComponent_ng_template_36_Template_button_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r98);
      const modal_r96 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](modal_r96.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("type", "text")("id", "name")("value", ctx_r7.new_Group.name)("placeholder", "Enter Group Name")("inputModel", ctx_r7.new_Group.name);
  }
}
function EditorComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 88)(1, "h6", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "New Element");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EditorComponent_ng_template_38_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r104);
      const modal_r102 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](modal_r102.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 92)(7, "div", 93)(8, "div", 41)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "Element Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "ng-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function EditorComponent_ng_template_38_Template_ng_select_change_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r104);
      const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r105.onElementSelected($event, "type"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "ng-option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "Text");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "ng-option", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "ng-option", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17, "Textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "ng-option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "ng-option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21, "Date & Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "ng-option", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "div", 41)(25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26, "Element Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "app-input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("inputModelChange", function EditorComponent_ng_template_38_Template_app_input_inputModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r104);
      const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r106.elementPayload.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "div", 94)(29, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EditorComponent_ng_template_38_Template_button_click_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r104);
      const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r107.onCreateElement($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](30, " New Element");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EditorComponent_ng_template_38_Template_button_click_31_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r104);
      const modal_r102 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](modal_r102.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](32, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("type", "text")("id", "name")("value", ctx_r9.elementPayload.name)("placeholder", "Enter Element Name")("inputModel", ctx_r9.elementPayload.name);
  }
}
class EditorComponent {
  constructor(galleryService, routeService, webService, modalService, toastr, route, utilService, requestService, cdr, zone) {
    this.galleryService = galleryService;
    this.routeService = routeService;
    this.webService = webService;
    this.modalService = modalService;
    this.toastr = toastr;
    this.route = route;
    this.utilService = utilService;
    this.requestService = requestService;
    this.cdr = cdr;
    this.zone = zone;
    this.inputChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subject();
    this.layout = new Array();
    this.pages = new Array();
    this.showElement = false;
    this.timeZone = src_app_shared_data_pages_profile__WEBPACK_IMPORTED_MODULE_0__.TimeZone;
    this.GalleryImage = [new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_15__.Image(1, {
      img: '../../assets/img/media/1.jpg',
      title: ''
    })];
    this.buttonsConfigDefault = {
      visible: true,
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_15__.ButtonsStrategy.DEFAULT
    };
    this.buttonsConfigSimple = {
      visible: true,
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_15__.ButtonsStrategy.SIMPLE
    };
    this.buttonsConfigAdvanced = {
      visible: true,
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_15__.ButtonsStrategy.ADVANCED
    };
    this.buttonsConfigFull = {
      visible: true,
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_15__.ButtonsStrategy.FULL
    };
    this.buttonsConfigCustom = {
      visible: true,
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_15__.ButtonsStrategy.CUSTOM,
      buttons: [_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_15__.KS_DEFAULT_BTN_FULL_SCREEN, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_15__.KS_DEFAULT_BTN_DELETE, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_15__.KS_DEFAULT_BTN_EXTURL, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_15__.KS_DEFAULT_BTN_DOWNLOAD, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_15__.KS_DEFAULT_BTN_CLOSE]
    };
    this.customPlainGalleryRowDescConfig = {
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_15__.PlainGalleryStrategy.CUSTOM,
      layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_15__.AdvancedLayout(-1, true)
    };
    /**
     * BLOCK SECTION OF THE EDITOR
     */
    this.block = new _model_pages_model__WEBPACK_IMPORTED_MODULE_2__.Blocks();
    this.blocks = new Array();
    this.new_Block = new _model_pages_model__WEBPACK_IMPORTED_MODULE_2__.Blocks();
    /**
     * GROUPS SECTION OF THE EDITOR
     */
    /**
     * Store selected block ID
    */
    this.selected_block = new _model_class_cms__WEBPACK_IMPORTED_MODULE_1__.Block();
    this.is_block_showing = false;
    this.group = new _model_pages_model__WEBPACK_IMPORTED_MODULE_2__.Groups();
    this.groups = new Array();
    this.new_Group = new _model_pages_model__WEBPACK_IMPORTED_MODULE_2__.Groups();
    /**
    * LAYOUT SECTION OF THE EDITOR
    */
    this.nlayout = new _model_pages_model__WEBPACK_IMPORTED_MODULE_2__.Layout();
    this.layouts = new Array();
    /**
     * Element Create Section
     */
    this.elementPayload = new ElementPayload();
    this.element = new _model_pages_model__WEBPACK_IMPORTED_MODULE_2__.Elements();
    /** ------------------------delete ------------------------ */
    this.changingValue = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subject();
    this.selectedParent = new _model_pages_model__WEBPACK_IMPORTED_MODULE_2__.Template();
    console.log("Route Segment Check: ", this.routeService.segment(2));
  }
  ngOnInit() {
    this.loadPages();
    this.loadPageData();
    this.loadLayouts();
  }
  onTemplateUpdate() {}
  loadPageData() {
    let $this = this;
    let body = {
      target: {
        uuid: this.route.snapshot.paramMap.get('index')
      }
    };
    this.webService.search(`template`, body).subscribe(response => {
      if (response.status == "success") {
        if (response.data.length > 0) {
          console.log("changes ------------", response);
          this.template = response.data[0];
        }
      }
    });
  }
  loadPages() {
    let $this = this;
    this.webService.all("template", function (result, status) {
      if (status) {
        $this.pages = result;
      }
    });
  }
  loadLayouts() {
    let $this = this;
    this.webService.all("layout", function (result, status) {
      console.log(result, status);
      if (status) {
        $this.layout = result;
      }
    });
  }
  openImageModalRowDescription(image) {
    const index = this.getCurrentIndexCustomLayout(image, this.GalleryImage);
    this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, {
      layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_15__.AdvancedLayout(index, true)
    });
  }
  getCurrentIndexCustomLayout(image, images) {
    return image ? images.indexOf(image) : -1;
  }
  onButtonBeforeHook(event) {
    if (!event || !event.button) {
      return;
    }
    if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_15__.ButtonType.DELETE) {
      this.GalleryImage = this.GalleryImage.filter(val => event.image && val.id !== event.image.id);
    }
  }
  onButtonAfterHook(event) {
    if (!event || !event.button) {
      return;
    }
  }
  onCustomButtonBeforeHook(event, galleryId) {
    if (!event || !event.button) {
      return;
    }
    if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_15__.ButtonType.CUSTOM) {
      this.addRandomImage();
      setTimeout(() => {
        this.galleryService.openGallery(galleryId, this.GalleryImage.length - 1);
      }, 0);
    }
  }
  onCustomButtonAfterHook(event, galleryId) {
    if (!event || !event.button) {
      return;
    }
  }
  addRandomImage() {
    const imageToCopy = this.GalleryImage[Math.floor(Math.random() * this.GalleryImage.length)];
    const newImage = new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_15__.Image(this.GalleryImage.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
    // this.GalleryImage = [...this.GalleryImage, newImage];
  }

  getBlocks(id) {
    this.showElement = false;
    let body = {
      target: {
        template_id: id
      },
      total: 2
    };
    console.log('Block Response:: ', body, this.template);
    this.webService.search(`block`, body).subscribe(response => {
      console.log('Block Response:: ', response.data);
      if (response.status == "success") {
        this.blocks = response.data;
      }
    });
  }
  addBlock(newBlock) {
    this.modalService.open(newBlock);
  }
  onCreateBlock($event) {
    let id = this.routeService.segment(2);
    this.new_Block.status = 1;
    this.new_Block.template_id = this.template.id;
    this.webService.create(`block`, this.new_Block).subscribe(response => {
      if (response.status == "success") {
        if (response.data) {
          this.blocks = response.data;
        }
        this.toastr.success("Request Successfully completed");
        this.modalService.dismissAll();
      }
    });
  }
  onBlockSelected($event, type) {
    switch (type) {
      case "multiple":
        this.new_Block.multiple = $event;
        break;
      case "item_max":
        this.new_Block.item_max = $event;
        break;
    }
  }
  onSelected($event, key) {
    let $key = {};
    $key[key] = $event;
    this.onSave($key);
  }
  onSave($key) {
    console.log($key, 'key');
    if (!$key.value) {
      return;
    }
    let body = {};
    body.data = {
      [$key.name]: $key.value
    };
    body.target = {
      "id": this.template.id
    };
    console.log("Checking payload for body: ", body);
    this.webService.update(`template`, body).subscribe(response => {
      if (response.status == "success") {}
    }, error => {});
  }
  onInputUpdate($key) {
    if (!$key.value || !$key.name) {
      return;
    }
    let key = $key.name;
    let value = $key.value;
    // console.log(key, value)
    let body = {};
    body.data = {};
    body.data[key] = value;
    body.target = {
      "id": this.template.id
    };
    console.log("Checking payload: ", body);
    this.webService.update(`template`, body).subscribe(response => {
      if (response.status == "success") {}
    }, error => {});
  }
  getGroups(block) {
    this.selected_block = block;
    this.block = block;
    this.showElement = true;
    console.log("Data value info: ", this.selected_block);
    let body = {
      target: {
        block_id: this.block.id
      },
      total: 2
    };
    this.webService.search(`group`, body).subscribe(response => {
      if (response.status == "success") {
        this.groups = response.data;
        this.is_block_showing = true;
      }
      console.log("Data value: ", this.groups);
    }, error => {});
  }
  /**
   *
   * @param newGroup
   * @param blockid
   * @returns
   *
   * This should trigger new window to open if the max item is less than 1
   * else create similar group for multiple group blocks
   */
  addGroup(newGroup, blockid) {
    this.new_Group.block_id = blockid;
    this.new_Group.status = 1;
    if (this.selected_block.item_max > 1) {
      this.new_Group.name = this.selected_block.block_name;
      this.onCreateGroup("");
      return;
    }
    this.modalService.open(newGroup);
  }
  onCreateGroup($event) {
    this.webService.create(`group`, this.new_Group).subscribe(response => {
      if (response.status == 'success') {
        this.selected_block.groups = response.data;
        this.groups = response.data;
        this.toastr.success("Request Successfully completed");
        this.modalService.dismissAll();
        this.getGroups(this.selected_block);
      }
    });
  }
  getLayouts() {
    let $this = this;
    this.webService.all(`layout`, function (result, status) {
      console.log(result, status);
      if (status) {
        $this.layouts = result;
      }
    });
  }
  // this is for file upload 
  uppLoad(newUpload, group_id) {
    // this.elementPayload.group_id = group_id
    // this.elementPayload.value = "-"
    this.modalService.open(newUpload);
  }
  addElement(newElement, group_id) {
    this.elementPayload.group_id = group_id;
    this.elementPayload.value = "-";
    this.modalService.open(newElement);
  }
  onCreateElement($event) {
    this.webService.create('element', this.elementPayload).subscribe(response => {
      if (response.status == "success") {
        this.toastr.success("Request successfully Completed");
        this.getGroups(this.block);
        this.modalService.dismissAll();
      }
    });
  }
  elementEditor() {}
  onElementSelected($event, type) {
    console.log(event, 'ononElementSelected');
    let value = $event;
    this.elementPayload.type = value;
  }
  /** ------------------------On New Methods ------------------------ */
  onInputChange(event) {
    this.inputChangeSubject.next(event);
  }
  onReceivedUpdate($event) {
    // if (!$event.group_id || !$event.value) {
    //   this.toastr.info("Request failed due to an invalid payload")
    //   return
    // }
    /**
     * send request to server, server should look
     * for the element in the group and update it
     */
    const body = {};
    body.target = {
      uuid: $event.group_uuid
    };
    body.data = $event;
    console.log(body);
    this.webService.update('group', body).subscribe(response => {
      if (response.status == "success") {}
      console.log("Response::", response);
    });
  }
  onReceivedDelete($event) {
    console.log("Delete to app:", $event);
    if (!$event.group_id || !$event.value) {
      this.toastr.info("Request failed due to an invalid payload");
      return;
    }
    /**
     * send request to server, server should look
     * for the element in the group and update it
     */
    const body = {};
    body.target = {
      uuid: $event.group_uuid
    };
    body.data = $event;
    this.webService.postDelete('element', body).subscribe(response => {
      if (response.status == "success") {
        this.getGroups(this.block);
      }
      console.log("Response::", response);
    });
  }
  onDelete(data, target) {
    this.selectedid = data;
    this.target = target;
    this.changingValue.next({
      status: "warning",
      message: "Are you sure you want to do this?"
    });
  }
  delete($event) {
    let $this = this;
    let status = $event;
    if (status) {
      // send delete Request to server
      this.webService.delete(this.target, this.selectedid, function (response, status) {
        if (status) {
          $this.getBlocks($this.template.id);
          $this.toastr.success("Request Successfully completed", "User record was deleted");
        }
      });
    }
  }
  getGroupIDs() {
    // this.group_ids = [];
    // this.selected_block.groups.forEach(group => {
    //   this.group_ids.push(group.id)
    // })
    // return this.group_ids;
  }
  /**
   * This is the event received from on delete element state
   *
   * @param $event
   */
  onReceiveElementInputState($event) {
    console.log("Response Received:: --->>>>>> ", $event);
    let $this = this;
    let body = {
      target: {
        block_id: this.selected_block.id
      },
      total: 2
    };
    this.webService.search(`group`, body).subscribe(response => {
      console.log("Response Data for Groups:: onReceiveElementInputState --->>>> ", response, response.status, this.selected_block);
      if (response.status == 'success') {
        $this.selected_block.groups = $this.groups = response.data;
        $this.is_block_showing = true;
      }
    });
  }
  /**        --------------------- */
  onSelectChange($event, target) {
    let payload = {};
    switch (target) {
      case "page_order":
        payload = {
          name: 'page_order',
          value: $event
        };
        break;
      case "layout":
        payload = {
          name: 'layout_id',
          value: $event
        };
        break;
      case "footer_position":
        payload = {
          name: 'footer_position',
          value: $event
        };
        break;
      case "header_position":
        payload = {
          name: 'header_position',
          value: $event
        };
        break;
      case "parent":
        payload.parent = $event;
        break;
    }
    // send request to server
    // console.log("Checking Select Data", payload)
    this.onInputUpdate(payload);
  }
  glueUrl($event) {
    let pageArray = this.pages.filter(x => {
      return x.id == $event;
    });
    if (pageArray.length > 0) {
      let page = pageArray[0];
      let segments = this.template.url.split('/');
      let parent = this.utilService.convertToUrlFormat(page.title);
      if (segments.length >= 1) {
        segments[0] = parent;
      } else {
        segments.unshift(parent);
      }
      let url = '/' + segments.join('/');
      this.template.url = url;
    }
    return this.template.url;
  }
  onDataModelChange($event) {
    // console.log("onDataModelChange", $event)
    if ($event.name == "title") {
      let url = this.utilService.convertToUrlFormat($event.value);
      this.template.url = `/${url}`;
      this.template.title = $event.value;
    }
  }
}
_class = EditorComponent;
_class.ɵfac = function EditorComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_15__.GalleryService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_shared_services_route_service__WEBPACK_IMPORTED_MODULE_3__.RouteService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_4__.WebService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_5__.DateUtilService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_6__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgZone));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-editor"]],
  decls: 41,
  vars: 2,
  consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "square"], [1, "col-lg-12", "col-md-12"], [1, "card", "custom-card"], [1, "card-body"], [1, "profile-tab", "tab-menu-heading"], ["ngbNav", "", 1, "main-nav-line", "p-3", "tabs-menu", "profile-nav-line", "bg-gray-100"], ["nav", "ngbNav"], ["ngbNavItem", ""], ["href", "javascript:;", "ngbNavLink", "", 3, "click"], ["ngbNavContent", ""], [1, "row", "row-sm"], [1, "card", "custom-card", "main-content-body-profile"], [1, "tab-content"], [3, "ngbNavOutlet"], ["newBlock", ""], ["newGrouop", ""], ["newElement", ""], [3, "status", "onTriggerChange"], ["id", "about", 1, "main-content-body", "tab-pane", "p-4", "border-top-0", "active"], [1, "card-body", "border", "rounded-10"], [1, "form-horizontal"], [1, "mb-4", "main-content-label"], [1, "form-group"], ["class", "row row-sm", 4, "ngIf"], [1, "col-lg-12", "mt-4"], [3, "type", "id", "value", "placeholder", "inputModel", "onDataModelChange", "inputModelChange"], [1, "col-lg-4", "mt-4"], [1, "form-control", "p-0", 3, "change"], [3, "ng-selected", "value", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "mt-4"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "1"], ["value", "0"], ["value", "2"], ["value", "3"], [1, "col-lg-6", "mt-4"], [3, "ng-selected", "value"], [3, "value"], ["id", "settings", 1, "main-content-body", "tab-pane", "p-4", "border-top-0"], [1, "card-body", "border"], ["class", "col-md-12", "style", "margin-bottom: 40px;", 4, "ngIf"], ["class", "col-md-12 mt-40", 4, "ngIf"], [1, "col-md-12", 2, "margin-bottom", "40px"], [1, "col-md-12"], [1, "table-responsive", "border"], [1, "table", "mb-0", "text-nowrap", "text-md-nowrap"], [2, "width", "40px"], ["class", "border-bottom", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["aria-label", "Custom pagination", 1, "d-flex", "justify-content-end", 3, "collectionSize", "page", "pageChange"], ["ngbPaginationPrevious", ""], ["ngbPaginationNext", ""], ["type", "button", 1, "btn", "ripple", "btn-primary", "mb-2", 3, "click"], [1, "border-bottom"], [1, "button-list"], ["href", "javascript:;", 1, "btn", 3, "click"], [1, "ti", "ti-eye"], [1, "ti", "ti-trash"], [1, "col-md-12", "mt-40"], [1, "row"], [1, "col-lg-12"], [1, "btn", "btn-primary", "pull-right", 3, "click"], ["class", "col-lg-12 mt-4 show_view_block", 4, "ngIf"], ["class", "col-lg-12 mt-4", 4, "ngIf"], [1, "col-lg-12", "mt-4", "show_view_block"], ["class", "card-body border mb-4", 4, "ngFor", "ngForOf"], [1, "card-body", "border", "mb-4"], [1, "col-lg-12", "mt-3"], ["href", "javascript:;", 1, "btn", "pull-right", 3, "click"], [1, "ti", "ti-plus"], [1, "col-lg-12", "mt-2", "mb-3"], ["class", "wrap_input mt-2", 4, "ngFor", "ngForOf"], [1, "wrap_input", "mt-2"], [3, "label", "groupid", "type", "uuid", "data", "value", "inputModel", "onModelChange", "onModelDelete", "inputModelChange", 4, "ngIf"], [3, "label", "groupid", "uuid", "data", "value", "inputModel", "onModelChange", "onModelDelete", "inputModelChange", 4, "ngIf"], [3, "label", "groupid", "type", "uuid", "data", "value", "inputModel", "onModelChange", "onModelDelete", "inputModelChange"], [3, "label", "groupid", "uuid", "data", "value", "inputModel", "onModelChange", "onModelDelete", "inputModelChange"], [1, "col-md-7"], [1, "col-md-5"], [3, "type", "id", "value", "placeholder", "inputModel", "inputModelChange"], ["href", "javascript:;", 1, "btn"], [1, "ti", "ti-pencil"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group", "row"], [1, "modal-footer"], ["type", "button", 1, "btn", "ripple", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "ripple", "btn-secondary", 3, "click"], ["value", "text"], ["value", "image"], ["value", "textarea"], ["value", "date"], ["value", "datetime-local"], ["value", "time"]],
  template: function EditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Pages");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Web");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Pages");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "nav", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](17, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EditorComponent_Template_a_click_18_listener() {
        return ctx.loadPageData();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, " Page Details ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](20, EditorComponent_ng_template_20_Template, 7, 1, "ng-template", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](21, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EditorComponent_Template_a_click_22_listener() {
        return ctx.getBlocks(ctx.template.id);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23, "Page Blocks");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](24, EditorComponent_ng_template_24_Template, 9, 2, "ng-template", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](25, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EditorComponent_Template_a_click_26_listener() {
        return ctx.getLayouts();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27, "Layout");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](28, EditorComponent_ng_template_28_Template, 47, 31, "ng-template", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "div", 16)(30, "div", 7)(31, "div", 17)(32, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](33, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](34, EditorComponent_ng_template_34_Template, 41, 7, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](36, EditorComponent_ng_template_36_Template, 17, 7, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](38, EditorComponent_ng_template_38_Template, 33, 7, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "app-alert", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onTriggerChange", function EditorComponent_Template_app_alert_onTriggerChange_40_listener($event) {
        return ctx.delete($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngbNavOutlet", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("status", ctx.changingValue);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbNavLinkBase, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbNavOutlet, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbPaginationNext, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbPaginationPrevious, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__.NgOptionComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgForm, _common_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_7__.TextAreaComponent, _common_input_input_component__WEBPACK_IMPORTED_MODULE_8__.InputComponent, _common_alerts_alert_component__WEBPACK_IMPORTED_MODULE_9__.AlertComponent, _common_element_text_text_input_component__WEBPACK_IMPORTED_MODULE_10__.TextInputComponent, _common_element_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_11__.TextEditorComponent, _common_element_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_12__.ImagePickerComponent],
  styles: [".option-dots:hover {\n  background: none;\n}\n  .btn.btn-rounded.btn-danger {\n  margin-right: 5px;\n}\n  .ng-select,   .ng-select div,   .ng-select input,   .ng-select span {\n  box-sizing: content-box !important;\n}\n\n.user-lock[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  transform: translate(0px, 21px) !important;\n  z-index: 9 !important;\n  right: 0%;\n  left: initial !important;\n}\n\n.media[_ngcontent-%COMP%]   .shadow.dropdown-menu[x-placement^=bottom][_ngcontent-%COMP%] {\n  transform: translate(-150px, 24px) !important;\n  z-index: 9 !important;\n}\n\n.show_view_block[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 190px;\n}\n\n.marginClass[_ngcontent-%COMP%] {\n  margin-top: -20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9wYWdlcy9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksZ0JBQUE7QUFEUjtBQUtJO0VBQ0ksaUJBQUE7QUFIUjtBQU1JOzs7O0VBSUksa0NBQUE7QUFKUjs7QUFRQTtFQUNJLDBDQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7QUFMSjs7QUFRQTtFQUNJLDZDQUFBO0VBQ0EscUJBQUE7QUFMSjs7QUFRQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFMSjs7QUFTQTtFQUNJLGlCQUFBO0FBTkoiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG5cclxuICAgIC5vcHRpb24tZG90czpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmJ0bi5idG4tcm91bmRlZC5idG4tZGFuZ2VyIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAubmctc2VsZWN0LFxyXG4gICAgLm5nLXNlbGVjdCBkaXYsXHJcbiAgICAubmctc2VsZWN0IGlucHV0LFxyXG4gICAgLm5nLXNlbGVjdCBzcGFuIHtcclxuICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4udXNlci1sb2NrIC5kcm9wZG93bi1tZW51IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMjFweCkgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDkgIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAwJTtcclxuICAgIGxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1lZGlhIC5zaGFkb3cuZHJvcGRvd24tbWVudVt4LXBsYWNlbWVudF49Ym90dG9tXSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwcHgsIDI0cHgpICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiA5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaG93X3ZpZXdfYmxvY2sge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5MHB4O1xyXG59XHJcblxyXG5cclxuLm1hcmdpbkNsYXNzIHtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});
class ElementPayload {
  constructor() {
    this.status = 1;
  }
}

/***/ }),

/***/ 72749:
/*!******************************************************************!*\
  !*** ./src/app/components/pages/pages/editor/model/class-cms.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Block: () => (/* binding */ Block),
/* harmony export */   Element: () => (/* binding */ Element),
/* harmony export */   Group: () => (/* binding */ Group),
/* harmony export */   Page: () => (/* binding */ Page)
/* harmony export */ });
class Page {
  constructor() {
    this.blocks = new Array();
  }
}
class Block {
  constructor() {
    this.groups = new Array();
  }
}
class Group {
  constructor() {
    this.elements = new Array();
  }
}
class Element {}

/***/ }),

/***/ 348:
/*!***********************************************************!*\
  !*** ./src/app/components/pages/pages/pages.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageComponent: () => (/* binding */ PageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 30240);
/* harmony import */ var src_app_shared_models_auth_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/auth.models */ 11811);
/* harmony import */ var _editor_model_pages_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor/model/pages.model */ 83918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/utils.service */ 4486);
/* harmony import */ var src_app_shared_services_route_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/route.service */ 62473);
/* harmony import */ var src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/users/user.service */ 55613);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/web/web.service */ 99662);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ 48580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _common_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/input/input.component */ 22124);
/* harmony import */ var _common_alerts_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/alerts/alert.component */ 75601);
var _class;
















function PageComponent_tr_69_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function PageComponent_tr_69_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a1) {
  return ["/pages", a1, "page"];
};
function PageComponent_tr_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 38)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, PageComponent_tr_69_span_10_Template, 3, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, PageComponent_tr_69_span_11_Template, 3, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "td")(13, "div", 41)(14, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PageComponent_tr_69_Template_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const data_r5 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r8.onDelete(data_r5.id, "template"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "td")(19, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PageComponent_tr_69_Template_button_click_19_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const data_r5 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r10.onPageCopy(data_r5.uuid, "template"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r5.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r5.page_order);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", data_r5.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !data_r5.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](7, _c0, data_r5.uuid));
  }
}
function PageComponent_ng_template_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, "Prev");
  }
}
function PageComponent_ng_template_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, "Next");
  }
}
function PageComponent_ng_template_75_ng_option_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ng-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", data_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r14.title);
  }
}
function PageComponent_ng_template_75_ng_option_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ng-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", data_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r15.label);
  }
}
function PageComponent_ng_template_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 49)(1, "h6", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "New User");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PageComponent_ng_template_75_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const modal_r11 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](modal_r11.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 53)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "New Page ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 54)(10, "div", 55)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Page Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "app-input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onDataModelChange", function PageComponent_ng_template_75_Template_app_input_onDataModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r18.onDataModelChange($event));
    })("inputModelChange", function PageComponent_ng_template_75_Template_app_input_inputModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r19.template.title = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 55)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Page Menu Label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "app-input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("inputModelChange", function PageComponent_ng_template_75_Template_app_input_inputModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r20.template.label = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 58)(19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Page Url");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "app-input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("inputModelChange", function PageComponent_ng_template_75_Template_app_input_inputModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r21.template.url = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 55)(23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Page Parent");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "ng-select", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function PageComponent_ng_template_75_Template_ng_select_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r22.selectedParent = $event);
    })("change", function PageComponent_ng_template_75_Template_ng_select_change_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r23.onSelected($event, "parent"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, PageComponent_ng_template_75_ng_option_26_Template, 2, 2, "ng-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 55)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Page Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "ng-select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function PageComponent_ng_template_75_Template_ng_select_change_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r24.onSelected($event, "layout"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, PageComponent_ng_template_75_ng_option_31_Template, 2, 2, "ng-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 58)(33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "SEO Keywords");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "app-input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("inputModelChange", function PageComponent_ng_template_75_Template_app_input_inputModelChange_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r25.template.seo_keyword_id = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 58)(37, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "Meta Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "app-input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("inputModelChange", function PageComponent_ng_template_75_Template_app_input_inputModelChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r26.template.meta_title = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 58)(41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "Layout id");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "app-input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("inputModelChange", function PageComponent_ng_template_75_Template_app_input_inputModelChange_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r27.template.layout_id = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 58)(45, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "Meta Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "app-input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("inputModelChange", function PageComponent_ng_template_75_Template_app_input_inputModelChange_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r28.template.meta_description = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 55)(49, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "Header Section");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "ng-select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function PageComponent_ng_template_75_Template_ng_select_change_51_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r29.onSelected($event, "header_position"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "ng-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "ng-option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div", 55)(57, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58, "Footer Section");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "ng-select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function PageComponent_ng_template_75_Template_ng_select_change_59_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r30.onSelected($event, "footer_position"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "ng-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "ng-option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63, "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "div", 55)(65, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66, "Page Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "ng-select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function PageComponent_ng_template_75_Template_ng_select_change_67_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r31.onSelected($event, "page_order"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "ng-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "ng-option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](71, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "ng-option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](73, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "ng-option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](75, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "ng-option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](77, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "div", 67)(79, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PageComponent_ng_template_75_Template_button_click_79_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r32.onSubmit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](80, "Add New Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PageComponent_ng_template_75_Template_button_click_81_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const modal_r11 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](modal_r11.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", "text")("id", "title")("value", ctx_r4.template.title)("placeholder", "Enter Page Name")("inputModel", ctx_r4.template.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", "text")("id", "page_label")("value", ctx_r4.template.label)("placeholder", "Enter Page Menu Label")("inputModel", ctx_r4.template.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", "text")("readonly", true)("id", "page_url")("value", ctx_r4.template.url)("placeholder", "Enter Page Url")("inputModel", ctx_r4.template.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r4.selectedParent);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r4.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r4.layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", "text")("id", "meta_title")("value", ctx_r4.template.seo_keyword_id)("placeholder", "seo_keyword_id")("inputModel", ctx_r4.template.seo_keyword_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", "text")("id", "meta_title")("value", ctx_r4.template.meta_title)("placeholder", "Enter Page Meta Title")("inputModel", ctx_r4.template.meta_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", "text")("id", "meta_title")("value", ctx_r4.template.layout_id)("placeholder", "Enter Page Meta Title")("inputModel", ctx_r4.template.layout_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", "text")("id", "meta_description")("value", ctx_r4.template.meta_description)("placeholder", "Select layout")("inputModel", ctx_r4.template.meta_description);
  }
}
class PageComponent {
  constructor(modalService, utilService, routeService, userService, router, webService, toastService) {
    this.modalService = modalService;
    this.utilService = utilService;
    this.routeService = routeService;
    this.userService = userService;
    this.router = router;
    this.webService = webService;
    this.toastService = toastService;
    this.newUser = new src_app_shared_models_auth_models__WEBPACK_IMPORTED_MODULE_0__.User();
    this.template = new _editor_model_pages_model__WEBPACK_IMPORTED_MODULE_1__.Template();
    this.layout = new Array();
    this.pages = new Array();
    this.config = {
      currentPage: 1,
      pageSize: 6,
      maxSize: 5
    };
    this.page = 1;
    /** ------------------------delete ------------------------ */
    this.changingValue = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.selectedParent = new _editor_model_pages_model__WEBPACK_IMPORTED_MODULE_1__.Template();
  }
  ngOnInit() {
    // this.load()
    this.loadPages();
    this.loadLayouts();
  }
  Select2Open(select2modal) {
    this.modalService.open(select2modal);
  }
  load() {
    let $this = this;
    this.userService.all(function (result, status) {
      console.log(result, status);
      if (status) {
        $this.users = result;
      }
    });
  }
  loadPages() {
    this.webService.list("template").subscribe(response => {
      if (response.status == 'success') {
        this.pages = response.data;
        this.toastService.success("Request Successfully completed");
        this.modalService.dismissAll();
        console.log("Pages....", response, response.data, this.pages);
      }
    });
  }
  loadLayouts() {
    let $this = this;
    this.webService.all("layout", function (result, status) {
      console.log(result, status);
      if (status) {
        $this.layout = result;
      }
    });
  }
  onSubmit($vent) {
    let options = this.template;
    this.webService.create('template', options).subscribe(response => {
      console.log(options, '=======');
      if (response.status == "success") {
        if (response.data) {
          this.pages = response.data;
        }
        this.toastService.success("Request Successfully completed");
        this.modalService.dismissAll();
        return;
      }
      this.toastService.error(response.message);
    });
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  onSelected($event, target) {
    switch (target) {
      case "page_order":
        this.template.page_order = $event;
        break;
      case "layout":
        this.template.layout_id = $event;
        break;
      case "footer_position":
        this.template.footer_position = $event;
        break;
      case "header_position":
        this.template.header_position = $event;
        break;
      case "parent":
        this.template.parent = $event;
        this.glueUrl($event);
        break;
    }
  }
  onPageCopy(target, data) {
    this.selectedUuid = data;
    this.selectedtarget = target;
    this.webService.copy(this.selectedUuid, this.selectedtarget).subscribe(response => {
      console.log(response);
      this.toastService.success(response.message);
      const pageuuid = response.data.uuid;
      // Navigate to the detail page with the copied item's UUID
      if (pageuuid) {
        this.router.navigate(['/pages', pageuuid, 'page']);
      } else {
        // Handle the case where the UUID is undefined
        console.error('UUID is undefined');
        // Optionally, navigate to a default page or show an error message
      }
    }, error => {
      console.error('Error copying content:', error);
      // Handle error response as needed
    });
  }

  onDelete(data, target) {
    this.selectedid = data;
    this.target = target;
    this.changingValue.next({
      status: "warning",
      message: "Are you sure you want to do this?"
    });
  }
  delete($event) {
    let $this = this;
    let status = $event;
    if (status) {
      // send delete Request to server
      this.webService.delete(this.target, this.selectedid, function (response, status) {
        if (status) {
          $this.load();
          $this.toastService.success("Request Successfully completed", "User record was deleted");
        }
      });
    }
  }
  glueUrl($event) {
    let pageArray = this.pages.filter(x => {
      return x.id == $event;
    });
    if (pageArray.length > 0) {
      let page = pageArray[0];
      let segments = this.template.url.split('/');
      let parent = this.utilService.convertToUrlFormat(page.title);
      if (segments.length > 1) {
        segments[0] = parent;
      } else {
        segments.unshift(parent);
      }
      this.template.url = '/' + segments.join('/');
    }
  }
  onDataModelChange($event) {
    // console.log("onDataModelChange", $event)
    if ($event.name == "title") {
      let url = this.utilService.convertToUrlFormat($event.value);
      this.template.url = `/${url}`;
      this.template.title = $event.value;
    }
  }
}
_class = PageComponent;
_class.ɵfac = function PageComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_2__.DateUtilService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_route_service__WEBPACK_IMPORTED_MODULE_3__.RouteService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_5__.WebService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-pages"]],
  decls: 78,
  vars: 10,
  consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-filter", "mr-2"], [1, "btn", "ripple", "btn-info", 3, "click"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-header", "border-bottom-0", "pb-0"], [1, "main-content-label", "my-auto", "pt-2"], [1, "card-body"], [1, "row", "table-filter"], [1, "col-lg-3"], [1, "show-entries"], [1, "form-control"], [1, "col-lg-9", "d-lg-flex"], [1, "d-flex", "ml-auto", "mt-4", "mr-3", "mt-lg-0"], [1, "filter-group"], ["type", "text", "placeholder", "search", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary"], [1, "fa", "fa-search"], [1, "d-flex", "mt-4", "mt-lg-0"], [1, "table-responsive", "border"], [1, "table", "mb-0", "text-nowrap", "text-md-nowrap"], ["class", "border-bottom", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["aria-label", "Custom pagination", 1, "d-flex", "justify-content-end", 3, "collectionSize", "maxSize", "pageSize", "page", "pageChange"], ["ngbPaginationPrevious", ""], ["ngbPaginationNext", ""], ["select2modal", ""], [3, "status", "onTriggerChange"], [1, "border-bottom"], [1, "text-center"], ["class", "label text-muted d-flex", 4, "ngIf"], [1, "button-list"], [1, "btn", "btn-warning", 3, "routerLink"], [1, "ti", "ti-pencil"], [1, "btn", "btn-danger", 3, "click"], [1, "ti", "ti-trash"], [1, "btn", "btn-primary", 3, "click"], [1, "label", "text-muted", "d-flex"], [1, "dot-label", "bg-gray-300", "mr-1"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group", "row"], [1, "col-lg-6", "mt-4"], [3, "type", "id", "value", "placeholder", "inputModel", "onDataModelChange", "inputModelChange"], [3, "type", "id", "value", "placeholder", "inputModel", "inputModelChange"], [1, "col-lg-12", "mt-4"], [3, "type", "readonly", "id", "value", "placeholder", "inputModel", "inputModelChange"], [1, "form-control", "p-0", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-control", "p-0", 3, "change"], ["value", "1"], ["value", "0"], ["value", "2"], ["value", "3"], [1, "modal-footer"], ["type", "button", 1, "btn", "ripple", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "ripple", "btn-secondary", 3, "click"], [3, "value"]],
  template: function PageComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Website Pages");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Pages");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, " Search ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PageComponent_Template_button_click_15_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r34);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](76);
        return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.Select2Open(_r3));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, " New Pages ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 12)(19, "div", 13)(20, "div", 14)(21, "div", 15)(22, "div")(23, "div", 6)(24, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "All Pages");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "div", 20)(30, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "Show");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "select", 21)(33, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "5");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "10");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "15");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "20");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "div", 22)(44, "div", 23)(45, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](46, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](48, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](49, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 29)(51, "table", 30)(52, "thead")(53, "tr")(54, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, "Pages");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, "Url");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, "order");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, "Copy");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](69, PageComponent_tr_69_Template, 21, 9, "tr", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](70, "slice");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "div", 32)(72, "ngb-pagination", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function PageComponent_Template_ngb_pagination_pageChange_72_listener($event) {
        return ctx.page = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](73, PageComponent_ng_template_73_Template, 1, 0, "ng-template", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](74, PageComponent_ng_template_74_Template, 1, 0, "ng-template", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](75, PageComponent_ng_template_75_Template, 83, 53, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "app-alert", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onTriggerChange", function PageComponent_Template_app_alert_onTriggerChange_77_listener($event) {
        return ctx.delete($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](69);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](70, 6, ctx.pages, (ctx.page - 1) * ctx.config.pageSize, ctx.page * ctx.config.pageSize));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("collectionSize", ctx.pages.length)("maxSize", ctx.config.maxSize)("pageSize", ctx.config.pageSize)("page", ctx.page);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("status", ctx.changingValue);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPaginationNext, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPaginationPrevious, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgOptionComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _common_input_input_component__WEBPACK_IMPORTED_MODULE_6__.InputComponent, _common_alerts_alert_component__WEBPACK_IMPORTED_MODULE_7__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.SlicePipe],
  styles: [".option-dots[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0ff !important;\n}\n\n.dropdown-menu-right.dropdown-menu[_ngcontent-%COMP%] {\n  transform: translate(-120px, 40px) !important;\n  z-index: 9 !important;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  z-index: 9 !important;\n}\n\n.button-list[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n\n  dp-date-picker,   dp-date-picker.dp-material .dp-picker-input {\n  width: 100% !important;\n  height: 38px !important;\n}\n  dp-date-picker.dp-material .dp-picker-input {\n  font-weight: 400;\n  line-height: 1.5;\n  color: #a8afc7;\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #e8e8f7;\n  border-radius: 5px;\n}\n  dp-day-calendar.dp-material .dp-current-day {\n  border: 1px solid #4A93FE !important;\n  background: #4A93FE !important;\n  color: #fff;\n}\n  dp-calendar-nav.dp-material .dp-calendar-nav-container {\n  border: 1px solid #e8e8f7 !important;\n  height: 40px !important;\n}\n  dp-calendar-nav.dp-material .dp-nav-header-btn {\n  font-weight: bold;\n  color: #3b4863;\n}\n  dp-day-calendar.dp-material .dp-calendar-wrapper {\n  border: 1px solid #e8e8f7 !important;\n  padding: 10px;\n}\n  dp-day-calendar.dp-material .dp-calendar-weekday {\n  color: #3b4863 !important;\n  width: 33px !important;\n}\n  dp-day-calendar .dp-calendar-day {\n  width: 33px !important;\n}\n  dp-calendar-nav .dp-nav-btns-container {\n  padding: 15px;\n}\n  dp-calendar-nav .dp-calendar-nav-container-left,   dp-calendar-nav .dp-calendar-nav-container-right {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9wYWdlcy9wYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0FBQ0o7O0FBRUE7RUFDSSw2Q0FBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLFNBQUE7QUFBSjs7QUFNSTs7RUFFSSxzQkFBQTtFQUNBLHVCQUFBO0FBSFI7QUFNSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFKUjtBQU9JO0VBQ0ksb0NBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFMUjtBQVFJO0VBQ0ksb0NBQUE7RUFDQSx1QkFBQTtBQU5SO0FBU0k7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUFQUjtBQVVJO0VBQ0ksb0NBQUE7RUFDQSxhQUFBO0FBUlI7QUFXSTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7QUFUUjtBQVlJO0VBQ0ksc0JBQUE7QUFWUjtBQWFJO0VBQ0ksYUFBQTtBQVhSO0FBY0k7O0VBRUksWUFBQTtBQVpSIiwic291cmNlc0NvbnRlbnQiOlsiLm9wdGlvbi1kb3RzOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUtcmlnaHQuZHJvcGRvd24tbWVudSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTIwcHgsIDQwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiA5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IHtcclxuICAgIHotaW5kZXg6IDkgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5idXR0b24tbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG5cclxuOjpuZy1kZWVwIHtcclxuXHJcbiAgICBkcC1kYXRlLXBpY2tlcixcclxuICAgIGRwLWRhdGUtcGlja2VyLmRwLW1hdGVyaWFsIC5kcC1waWNrZXItaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAzOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZHAtZGF0ZS1waWNrZXIuZHAtbWF0ZXJpYWwgLmRwLXBpY2tlci1pbnB1dCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIGNvbG9yOiAjYThhZmM3O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGY3O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICBkcC1kYXktY2FsZW5kYXIuZHAtbWF0ZXJpYWwgLmRwLWN1cnJlbnQtZGF5IHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNEE5M0ZFICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzRBOTNGRSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIGRwLWNhbGVuZGFyLW5hdi5kcC1tYXRlcmlhbCAuZHAtY2FsZW5kYXItbmF2LWNvbnRhaW5lciB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThmNyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGRwLWNhbGVuZGFyLW5hdi5kcC1tYXRlcmlhbCAuZHAtbmF2LWhlYWRlci1idG4ge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjM2I0ODYzO1xyXG4gICAgfVxyXG5cclxuICAgIGRwLWRheS1jYWxlbmRhci5kcC1tYXRlcmlhbCAuZHAtY2FsZW5kYXItd3JhcHBlciB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThmNyAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgZHAtZGF5LWNhbGVuZGFyLmRwLW1hdGVyaWFsIC5kcC1jYWxlbmRhci13ZWVrZGF5IHtcclxuICAgICAgICBjb2xvcjogIzNiNDg2MyAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAzM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZHAtZGF5LWNhbGVuZGFyIC5kcC1jYWxlbmRhci1kYXkge1xyXG4gICAgICAgIHdpZHRoOiAzM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZHAtY2FsZW5kYXItbmF2IC5kcC1uYXYtYnRucy1jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgZHAtY2FsZW5kYXItbmF2IC5kcC1jYWxlbmRhci1uYXYtY29udGFpbmVyLWxlZnQsXHJcbiAgICBkcC1jYWxlbmRhci1uYXYgLmRwLWNhbGVuZGFyLW5hdi1jb250YWluZXItcmlnaHQge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 57666:
/*!***************************************************************!*\
  !*** ./src/app/components/pages/pricing/pricing.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PricingComponent: () => (/* binding */ PricingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
var _class;


function PricingComponent_ng_template_365_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70)(1, "div", 13)(2, "div", 71)(3, "div", 72)(4, "div", 73)(5, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 75)(8, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 76)(11, "ul", 77)(12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " FreeDomain Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " One-Click Apps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Databases");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " BackGuarntee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "24/7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 80)(38, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 82)(41, "div", 72)(42, "div", 73)(43, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Personal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 75)(46, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u00A399");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 76)(49, "ul", 77)(50, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " FreeDomain Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " One-Click Apps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Databases");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " BackGuarntee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "24/7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 80)(76, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 82)(79, "div", 72)(80, "div", 73)(81, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Premium");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 75)(84, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u00A3199");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 76)(87, "ul", 77)(88, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " FreeDomain Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " One-Click Apps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Databases");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " BackGuarntee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "24/7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 80)(114, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 82)(117, "div", 72)(118, "div", 73)(119, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Enterprise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 75)(122, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "\u00A3299");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 76)(125, "ul", 77)(126, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " FreeDomain Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " One-Click Apps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Databases");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " BackGuarntee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "24/7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 80)(152, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
  }
}
function PricingComponent_ng_template_369_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 89)(1, "div", 13)(2, "div", 71)(3, "div", 72)(4, "div", 73)(5, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 75)(8, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 76)(11, "ul", 77)(12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " FreeDomain Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " One-Click Apps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Databases");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " BackGuarntee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "24/7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 80)(38, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 82)(41, "div", 72)(42, "div", 73)(43, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Personal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 75)(46, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u00A315");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 76)(49, "ul", 77)(50, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " FreeDomain Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " One-Click Apps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Databases");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " BackGuarntee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "24/7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 80)(76, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 82)(79, "div", 72)(80, "div", 73)(81, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Personal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 75)(84, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u00A325");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 76)(87, "ul", 77)(88, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " FreeDomain Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " One-Click Apps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Databases");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " BackGuarntee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "24/7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 80)(114, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 82)(117, "div", 72)(118, "div", 73)(119, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Enterprise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 75)(122, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "\u00A335");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 76)(125, "ul", 77)(126, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " FreeDomain Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " One-Click Apps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Databases");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " BackGuarntee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "24/7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 80)(152, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
  }
}
class PricingComponent {
  constructor() {
    this.active = 1;
  }
  ngOnInit() {}
}
_class = PricingComponent;
_class.ɵfac = function PricingComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-pricing"]],
  decls: 371,
  vars: 0,
  consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-download", "mr-2"], [1, "fe", "fe-filter", "mr-2"], ["type", "button", 1, "btn", "btn-primary", "my-2", "btn-icon-text"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-xl-3", "col-md-6", "col-sm-12", "col-lg-3"], [1, "card", "custom-card", "pricingTable2"], [1, "pricingTable2-header"], [1, "pricing-plans", "bg-primary"], [1, "price-value1"], [1, "fa", "fa-usd"], [1, "month"], [1, "pricingContent2"], [1, "pricingTable2-sign-up"], ["href", "javascript:;", 1, "btn", "btn-block", "btn-primary"], [1, "pricing-plans", "bg-danger"], ["href", "javascript:;", 1, "btn", "btn-block", "btn-danger"], [1, "pricing-plans", "bg-success"], ["href", "javascript:;", 1, "btn", "btn-block", "btn-success"], [1, "card", "custom-card", "pricingTable2", "info"], [1, "pricing-plans"], ["href", "javascript:;", 1, "btn", "btn-block", "btn-info"], [1, "col-lg-3", "col-sm-6"], [1, "card", "card-pricing", "custom-card"], [1, "bg-transparent", "border-0"], [1, "pricing-title"], ["data-pricing-value", "30", 1, "h1", "font-weight-normal", "text-center", "mb-0"], [1, "price"], [1, "h6", "text-muted", "ml-2"], [1, "card-body", "pt-0", "text-center"], [1, "list-unstyled", "mb-4"], ["href", "javascript:;", 1, "btn", "ripple", "btn-light", "mb-2"], [1, "card", "card-pricing2", "custom-card"], [1, "pricing-title", "text-primary"], ["href", "javascript:;", 1, "btn", "ripple", "btn-primary", "mb-2"], [1, "card", "card-pricing3", "custom-card"], ["data-pricing-value", "30", 1, "h1", "font-weight-normal", "mb-0"], [1, "card", "card-pricing4", "custom-card"], [1, "col-sm-12", "col-md-4"], [1, "card", "custom-card", "card-pricing"], [1, "price-img", "text-primary", "price-1", "text-center"], [1, "fas", "fa-car", "bg-primary-transparent"], ["href", "javascript:;", 1, "btn", "ripple", "btn-outline-primary", "mb-3"], [1, "price-img", "text-secondary", "price-1", "text-center"], [1, "fas", "fa-plane", "bg-pink-transparent"], ["href", "javascript:;", 1, "btn", "ripple", "btn-outline-secondary", "mb-3"], [1, "price-img", "text-info", "price-1", "text-center"], [1, "fas", "fa-rocket", "bg-info-transparent"], ["href", "javascript:;", 1, "btn", "ripple", "btn-outline-info", "mb-3"], [1, "col-xl-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-body"], [1, "main-content-label", "mb-1"], [1, "text-muted"], [1, "pricing-tabs"], [1, "text-center"], [1, "pri-tabs-heading"], ["ngbNav", "", 1, "nav-price"], ["href", "javascript:;", "ngbNavLink", ""], ["ngbNavContent", ""], [1, "tab-content"], ["id", "year", 1, "tab-pane", "active", "show"], [1, "col-sm-6", "col-lg-3"], [1, "card", "overflow-hidden"], [1, "text-center", "card-pricing", "pricing1"], [1, "p-2", "text-white", "bg-primary", "fs-20"], [1, "p-3", "font-weight-normal", "mb-0"], [1, "card-body", "text-center", "pt-0"], [1, "list-unstyled", "mb-0"], [1, "fe", "fe-check", "mr-2", "text-success"], [1, "fe", "fe-x", "mr-2", "text-danger"], [1, "card-footer", "text-center"], ["href", "javascript:;", 1, "btn", "ripple", "btn-primary", "btn-block"], [1, "col-sm-6", "col-lg-3", "mg-t-10", "mg-lg-t-0"], [1, "p-2", "text-white", "bg-secondary", "fs-20"], ["href", "javascript:;", 1, "btn", "ripple", "btn-secondary", "btn-block"], [1, "p-2", "text-white", "bg-info", "fs-20"], ["href", "javascript:;", 1, "btn", "ripple", "btn-info", "btn-block"], [1, "p-2", "text-white", "bg-success", "fs-20"], ["href", "javascript:;", 1, "btn", "ripple", "btn-success", "btn-block"], ["id", "month", 1, "tab-pane"]],
  template: function PricingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pricing");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pages");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Pricing ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Import ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Filter ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Download Report ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "div", 16)(25, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Free");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Lorem ipsum dolor");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17)(30, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "0.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "/month");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21)(37, "ul")(38, "li")(39, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Free");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Ad posting");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li")(43, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Featured Listings");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li")(47, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "100%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Secure");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li")(51, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Custome");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Reviews");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li")(55, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "24/7");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 22)(59, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "sign up");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 14)(62, "div", 15)(63, "div", 16)(64, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Premium");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Lorem ipsum dolor");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 24)(69, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "19");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "/month");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 21)(76, "ul")(77, "li")(78, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Featured");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Ad posting");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li")(82, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Featured Listings");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li")(86, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "100%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Secure");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li")(90, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Custome");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Reviews");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li")(94, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "24/7");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 22)(98, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "sign up");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 14)(101, "div", 15)(102, "div", 16)(103, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Silver");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Lorem ipsum dolor");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 26)(108, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "67");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "/month");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 21)(115, "ul")(116, "li")(117, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Featured");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Ad posting");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li")(121, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "30");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " Featured Listings");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li")(125, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "100%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Secure");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li")(129, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Custome");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Reviews");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li")(133, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "24/7");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 22)(137, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "sign up");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 14)(140, "div", 28)(141, "div", 16)(142, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Gold");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Lorem ipsum dolor");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 29)(147, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "78");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "/month");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 21)(154, "ul")(155, "li")(156, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Featured");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " Ad posting");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "li")(160, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "40");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Featured Listings");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "li")(164, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "100%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " Secure");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "li")(168, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Custome");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " Reviews");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "li")(172, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "24/7");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 22)(176, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "sign up");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 13)(179, "div", 31)(180, "div", 32)(181, "div", 33)(182, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Personal");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "h1", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "\u00A3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "49");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "/MO");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 38)(191, "ul", 39)(192, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "10 Free Domain Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "15 One-Click Apps");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "10 Databases");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Money BackGuarntee");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "24/7 support");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "a", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Order Now");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 31)(205, "div", 41)(206, "div", 33)(207, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Premium");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "h1", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "\u00A3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "span", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "59");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "/MO");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 38)(216, "ul", 39)(217, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "12 Free Domain Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "20 One-Click Apps");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "15 Databases");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Money BackGuarntee");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "24/7 support");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "a", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Order Now");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 31)(230, "div", 44)(231, "div", 33)(232, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Corporate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "h1", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "\u00A3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "span", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "69");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "/MO");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 38)(241, "ul", 39)(242, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "15 Free Domain Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "25 One-Click Apps");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "20 Databases");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Money BackGuarntee");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "24/7 support");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "a", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Order Now");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 31)(255, "div", 46)(256, "div", 33)(257, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Business");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "h1", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "\u00A3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "span", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "79");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "/MO");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 38)(266, "ul", 39)(267, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "20 Free Domain Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "30 One-Click Apps");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "15 Databases");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Money BackGuarntee");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "24/7 support");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "a", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Order Now");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 13)(280, "div", 47)(281, "div", 48)(282, "div", 33)(283, "div", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "i", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "Basic");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "h1", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "\u00A3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "span", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "22");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 38)(292, "ul", 39)(293, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "10GB Space");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "3 Domain Names");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "20 Email Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "No Live Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Purchase Now");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 47)(304, "div", 48)(305, "div", 33)(306, "div", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Standard");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "h1", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "\u00A3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "span", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "55");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 38)(315, "ul", 39)(316, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "10GB Space");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "3 Domain Names");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "20 Email Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "No Live Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "a", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Purchase Now");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 47)(327, "div", 48)(328, "div", 33)(329, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "i", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "Standard");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "h1", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "\u00A3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "span", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "99");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 38)(338, "ul", 39)(339, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Unlimited Space");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "50 Domain Names");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "Unlimited Email Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "Live Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "a", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "Purchase Now");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 13)(350, "div", 58)(351, "div", 59)(352, "div", 60)(353, "div")(354, "h6", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "Tabs Pricing Tables");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "p", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Below is the Using tabs year & month pricing Tables example");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "div", 63)(359, "div", 64)(360, "div", 65)(361, "ul", 66)(362, "li")(363, "a", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "Year");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](365, PricingComponent_ng_template_365_Template, 154, 0, "ng-template", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "li")(367, "a", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](369, PricingComponent_ng_template_369_Template, 154, 0, "ng-template", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "div", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbNavLinkBase],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 74212:
/*!***************************************************************!*\
  !*** ./src/app/components/pages/profile/profile.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ 78142);
/* harmony import */ var src_app_shared_data_pages_profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/pages/profile */ 18345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ 48580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 70997);
var _class;








function ProfileComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38)(1, "div", 39)(2, "div", 40)(3, "h4", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "BIOdata");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Hi I'm Petey Cruiser,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 43)(8, "h4", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 45)(11, "h5", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Lead designer / Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "websitename.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p")(16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "2010-2015");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 47)(21, "h5", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Senior Graphic Designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "coderthemes.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p")(26, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "2007-2009");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 40)(32, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 52)(35, "div", 53)(36, "div", 54)(37, "div", 55)(38, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 58)(41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " +245 354 654 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 53)(46, "div", 54)(47, "div", 55)(48, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 58)(51, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Slack");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " @spruko.w ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 47)(56, "div", 54)(57, "div", 55)(58, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 58)(61, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Current Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " San Francisco, CA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 40)(67, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Social");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 63)(70, "div", 64)(71, "div", 65)(72, "div", 55)(73, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 58)(76, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "github.com/spruko");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 64)(81, "div", 65)(82, "div", 55)(83, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 58)(86, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Twitter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "twitter.com/spruko.me");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 64)(91, "div", 65)(92, "div", 55)(93, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 58)(96, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Linkedin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "linkedin.com/in/spruko");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 64)(101, "div", 65)(102, "div", 55)(103, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 58)(106, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "My Portfolio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "spruko.com/");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
  }
}
function ProfileComponent_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 71)(1, "div", 72)(2, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Personal Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 74)(5, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 75)(8, "div", 35)(9, "div", 76)(10, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "User Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 75)(15, "div", 35)(16, "div", 76)(17, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 75)(22, "div", 35)(23, "div", 76)(24, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 75)(29, "div", 35)(30, "div", 76)(31, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Nick Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 75)(36, "div", 35)(37, "div", 76)(38, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Designation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Contact Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 75)(45, "div", 35)(46, "div", 76)(47, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "(required)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 75)(54, "div", 35)(55, "div", 76)(56, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 75)(61, "div", 35)(62, "div", 76)(63, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 75)(68, "div", 35)(69, "div", 76)(70, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 78)(73, "textarea", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "San Francisco, CA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Social Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 75)(78, "div", 35)(79, "div", 76)(80, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Twitter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 75)(85, "div", 35)(86, "div", 76)(87, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 75)(92, "div", 35)(93, "div", 76)(94, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Google+");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 75)(99, "div", 35)(100, "div", 76)(101, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Linked in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 75)(106, "div", 35)(107, "div", 76)(108, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "About Yourself");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 75)(115, "div", 35)(116, "div", 76)(117, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Biographical Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 78)(120, "textarea", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "pleasure rationally encounter but because pursue consequences that are extremely painful.occur in which toil and pain can procure him some great pleasure..");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Email Preferences");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 94)(125, "div", 35)(126, "div", 76)(127, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Verified User");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 78)(130, "div", 95)(131, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, " Accept to receive post or page notification emails");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, " Accept to receive email sent to multiple recipients");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 99)(140, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
  }
}
function ProfileComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 102)(1, "div", 103)(2, "div", 104)(3, "div", 105)(4, "div", 35)(5, "div", 106)(6, "div", 107)(7, "div", 108)(8, "div", 55)(9, "div", 109)(10, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 58)(13, "h6", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Mintrona Pechon Pechon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "just now");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 114)(18, "div", 115)(19, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 118)(22, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Edit Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Delete Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Personal Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 16)(29, "p", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 35)(32, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 122)(34, "img", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 124)(36, "div", 109)(37, "div", 125)(38, "div", 126)(39, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "img", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "img", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "img", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "img", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " +23 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 58)(52, "h6", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "28 people like your photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 114)(55, "div", 134)(56, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "i", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "i", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 107)(63, "div", 108)(64, "div", 55)(65, "div", 109)(66, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 58)(69, "h6", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Mintrona Pechon Pechon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Sep 26 2019, 10:14am");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 114)(74, "div", 115)(75, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 118)(78, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Edit Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Delete Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Personal Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 141)(85, "p", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 35)(88, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "img", 142)(90, "img", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 124)(92, "div", 109)(93, "div", 125)(94, "div", 126)(95, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "img", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "img", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "img", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "img", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, " +23 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 58)(108, "h6", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "28 people like your photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 114)(111, "div", 134)(112, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "i", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "i", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "i", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 107)(119, "div", 108)(120, "div", 55)(121, "div", 109)(122, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 58)(125, "h6", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Mintrona Pechon Pechon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Sep 26 2019, 10:14am");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 114)(130, "div", 115)(131, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 118)(134, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Edit Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Delete Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "Personal Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 141)(141, "p", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 124)(144, "div", 109)(145, "div", 125)(146, "div", 126)(147, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "img", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "img", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](152, "img", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "img", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "img", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, " +23 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 58)(160, "h6", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "28 people like your photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 114)(163, "div", 134)(164, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](165, "i", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "i", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](169, "i", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 149)(171, "div", 108)(172, "div", 55)(173, "div", 109)(174, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](175, "img", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 58)(177, "h6", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "Mintrona Pechon Pechon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "Sep 26 2019, 10:14am");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 114)(182, "div", 115)(183, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](184, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 118)(186, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "Edit Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "Delete Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "Personal Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 141)(193, "p", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 35)(196, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](197, "img", 150)(198, "img", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 124)(200, "div", 109)(201, "div", 125)(202, "div", 126)(203, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](204, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](206, "img", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](208, "img", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](210, "img", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](212, "img", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, " +23 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "div", 58)(216, "h6", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "28 people like your photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 114)(219, "div", 134)(220, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](221, "i", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](223, "i", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](225, "i", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()()();
  }
}
function ProfileComponent_ng_template_71_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 158)(1, "a", 159)(2, "img", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_ng_template_71_li_4_Template_img_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const img_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.openImageModalRowDescription(img_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const img_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r7.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
const _c0 = function () {
  return {
    downloadable: true
  };
};
function ProfileComponent_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 153)(1, "div", 72)(2, "div", 154)(3, "ul", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProfileComponent_ng_template_71_li_4_Template, 3, 1, "li", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ks-modal-gallery", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.GalleryImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", 1)("modalImages", ctx_r3.GalleryImage)("plainGalleryConfig", ctx_r3.customPlainGalleryRowDescConfig)("currentImageConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0))("buttonsConfig", ctx_r3.buttonsConfigCustom);
  }
}
function ProfileComponent_ng_template_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 161)(1, "div", 162)(2, "div", 35)(3, "div", 163)(4, "div", 164)(5, "div", 165)(6, "div", 166)(7, "div", 167)(8, "a", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 170)(11, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Message ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h5", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Socrates Itumay");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Project Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Lorem Ipsum is not simply popular belief Contrary.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 163)(31, "div", 164)(32, "div", 165)(33, "div", 166)(34, "div", 179)(35, "a", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 170)(38, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "img", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h5", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Reynante Labares");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Web Designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Lorem Ipsum is not simply popular belief Contrary.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 163)(58, "div", 164)(59, "div", 165)(60, "div", 166)(61, "div", 179)(62, "a", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 170)(65, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "i", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "i", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "i", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "img", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "h5", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Owen Bongcaras");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "p", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "App Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "p", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Lorem Ipsum is not simply popular belief Contrary.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 163)(85, "div", 164)(86, "div", 165)(87, "div", 166)(88, "div", 179)(89, "a", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 170)(92, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, " Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "i", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "i", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "i", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "img", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "h5", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Stephen Metcalfe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "p", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Administrator");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "p", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Lorem Ipsum is not simply popular belief Contrary.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 163)(112, "div", 164)(113, "div", 165)(114, "div", 166)(115, "div", 179)(116, "a", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 170)(119, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, " Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "i", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "i", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "i", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "img", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "h5", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Socrates Itumay");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "p", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Project Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "p", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Lorem Ipsum is not simply popular belief Contrary.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 163)(139, "div", 164)(140, "div", 165)(141, "div", 166)(142, "div", 179)(143, "a", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 170)(146, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, " Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "i", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "i", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "i", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](158, "img", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "h5", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Reynante Labares");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "p", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "Web Designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "p", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "Lorem Ipsum is not simply popular belief Contrary.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 163)(166, "div", 164)(167, "div", 165)(168, "div", 166)(169, "div", 179)(170, "a", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 170)(173, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](174, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, " Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](177, "i", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](180, "i", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "i", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](185, "img", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "h5", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "Owen Bongcaras");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "p", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "App Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "p", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "Lorem Ipsum is not simply popular belief Contrary.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 163)(193, "div", 164)(194, "div", 165)(195, "div", 166)(196, "div", 179)(197, "a", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](198, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 170)(200, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](201, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, " Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](204, "i", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](207, "i", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](210, "i", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](212, "img", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "h5", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "Stephen Metcalfe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "p", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "Administrator");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "p", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "Lorem Ipsum is not simply popular belief Contrary.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
  }
}
function ProfileComponent_ng_template_79_ng_option_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const timezone_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", timezone_r11.name, " ");
  }
}
function ProfileComponent_ng_template_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 183)(1, "div", 72)(2, "form", 74)(3, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 75)(6, "div", 35)(7, "div", 76)(8, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "User Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 75)(13, "div", 35)(14, "div", 76)(15, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 75)(20, "div", 186)(21, "div", 76)(22, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Language");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 78)(25, "ng-select", 187)(26, "ng-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "US English");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ng-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Arabic");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ng-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Korean");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 75)(33, "div", 186)(34, "div", 76)(35, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Timezone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 78)(38, "ng-select", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, ProfileComponent_ng_template_79_ng_option_39_Template, 2, 1, "ng-option", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 75)(41, "div", 35)(42, "div", 190)(43, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 191)(46, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "SMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Security Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 75)(61, "div", 35)(62, "div", 76)(63, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Login Verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 78)(66, "a", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Setup Verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 75)(69, "div", 35)(70, "div", 76)(71, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Password Verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 78)(74, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "input", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Require Personal Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 75)(79, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 78)(82, "a", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Deactivate Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "a", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 99)(87, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.timeZone);
  }
}
class ProfileComponent {
  constructor(galleryService) {
    this.galleryService = galleryService;
    this.timeZone = src_app_shared_data_pages_profile__WEBPACK_IMPORTED_MODULE_0__.TimeZone;
    this.GalleryImage = [new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(1, {
      img: '../../assets/img/media/1.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(2, {
      img: '../../assets/img/media/2.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(3, {
      img: '../../assets/img/media/3.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(4, {
      img: '../../assets/img/media/4.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(5, {
      img: '../../assets/img/media/5.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(6, {
      img: '../../assets/img/media/6.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(7, {
      img: '../../assets/img/media/7.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(8, {
      img: '../../assets/img/media/8.jpg',
      title: ''
    }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(9, {
      img: '../../assets/img/media/9.jpg',
      title: ''
    })];
    this.buttonsConfigDefault = {
      visible: true,
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.DEFAULT
    };
    this.buttonsConfigSimple = {
      visible: true,
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.SIMPLE
    };
    this.buttonsConfigAdvanced = {
      visible: true,
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.ADVANCED
    };
    this.buttonsConfigFull = {
      visible: true,
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.FULL
    };
    this.buttonsConfigCustom = {
      visible: true,
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.CUSTOM,
      buttons: [_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.KS_DEFAULT_BTN_FULL_SCREEN, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.KS_DEFAULT_BTN_DELETE, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.KS_DEFAULT_BTN_EXTURL, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.KS_DEFAULT_BTN_DOWNLOAD, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.KS_DEFAULT_BTN_CLOSE]
    };
    this.customPlainGalleryRowDescConfig = {
      strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.PlainGalleryStrategy.CUSTOM,
      layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.AdvancedLayout(-1, true)
    };
  }
  ngOnInit() {}
  openImageModalRowDescription(image) {
    const index = this.getCurrentIndexCustomLayout(image, this.GalleryImage);
    this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, {
      layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.AdvancedLayout(index, true)
    });
  }
  getCurrentIndexCustomLayout(image, images) {
    return image ? images.indexOf(image) : -1;
  }
  onButtonBeforeHook(event) {
    if (!event || !event.button) {
      return;
    }
    if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonType.DELETE) {
      this.GalleryImage = this.GalleryImage.filter(val => event.image && val.id !== event.image.id);
    }
  }
  onButtonAfterHook(event) {
    if (!event || !event.button) {
      return;
    }
  }
  onCustomButtonBeforeHook(event, galleryId) {
    if (!event || !event.button) {
      return;
    }
    if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonType.CUSTOM) {
      this.addRandomImage();
      setTimeout(() => {
        this.galleryService.openGallery(galleryId, this.GalleryImage.length - 1);
      }, 0);
    }
  }
  onCustomButtonAfterHook(event, galleryId) {
    if (!event || !event.button) {
      return;
    }
  }
  addRandomImage() {
    const imageToCopy = this.GalleryImage[Math.floor(Math.random() * this.GalleryImage.length)];
    const newImage = new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(this.GalleryImage.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
    // this.GalleryImage = [...this.GalleryImage, newImage];
  }
}
_class = ProfileComponent;
_class.ɵfac = function ProfileComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.GalleryService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-profile"]],
  decls: 84,
  vars: 0,
  consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-download", "mr-2"], [1, "fe", "fe-filter", "mr-2"], ["type", "button", 1, "btn", "btn-primary", "my-2", "btn-icon-text"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "square"], [1, "col-lg-12", "col-md-12"], [1, "card", "custom-card"], [1, "card-body"], [1, "panel", "profile-cover"], [1, "profile-cover__img"], ["src", "../../assets/img/users/1.jpg", "alt", "img"], [1, "h3"], [1, "btn-profile"], [1, "btn", "btn-rounded", "btn-danger"], [1, "fa", "fa-plus"], [1, "ml-2"], [1, "btn", "btn-rounded", "btn-success"], [1, "fa", "fa-comment"], [1, "profile-cover__action", "bg-img"], [1, "profile-cover__info"], [1, "nav"], [1, "profile-tab", "tab-menu-heading"], ["ngbNav", "", 1, "main-nav-line", "p-3", "tabs-menu", "profile-nav-line", "bg-gray-100"], ["ngbNavItem", ""], ["href", "javascript:;", "ngbNavLink", ""], ["ngbNavContent", ""], [1, "row", "row-sm"], [1, "card", "custom-card", "main-content-body-profile"], [1, "tab-content"], ["id", "about", 1, "main-content-body", "tab-pane", "p-4", "border-top-0", "active"], [1, "card-body", "p-0", "border", "p-0", "rounded-10"], [1, "p-4"], [1, "tx-15", "text-uppercase", "mb-3"], [1, "m-b-5"], [1, "m-t-30"], [1, "tx-15", "text-uppercase", "mt-3"], [1, "p-t-10"], [1, "text-primary", "m-b-5", "tx-14"], [1, ""], [1, "text-muted", "tx-13", "m-b-0"], [1, "text-muted", "tx-13", "mb-0"], [1, "border-top"], [1, "main-content-label", "tx-13", "mg-b-20"], [1, "d-sm-flex"], [1, "mg-sm-r-20", "mg-b-10"], [1, "main-profile-contact-list"], [1, "media"], [1, "media-icon", "bg-primary-transparent", "text-primary"], [1, "icon", "ion-md-phone-portrait"], [1, "media-body"], [1, "media-icon", "bg-success-transparent", "text-success"], [1, "icon", "ion-logo-slack"], [1, "media-icon", "bg-info-transparent", "text-info"], [1, "icon", "ion-md-locate"], [1, "d-md-flex"], [1, "mg-md-r-20", "mg-b-10"], [1, "main-profile-social-list"], [1, "icon", "ion-logo-github"], [1, "icon", "ion-logo-twitter"], [1, "icon", "ion-logo-linkedin"], [1, "media-icon", "bg-danger-transparent", "text-danger"], [1, "icon", "ion-md-link"], ["id", "edit", 1, "main-content-body", "tab-pane", "p-4", "border-top-0"], [1, "card-body", "border"], [1, "mb-4", "main-content-label"], [1, "form-horizontal"], [1, "form-group"], [1, "col-md-3"], [1, "form-label"], [1, "col-md-9"], ["type", "text", "placeholder", "User Name", "value", "Mack Adamia", 1, "form-control"], ["type", "text", "placeholder", "First Name", "value", "Mack Adamia", 1, "form-control"], ["type", "text", "placeholder", "Last Name", "value", "Mack Adamia", 1, "form-control"], ["type", "text", "placeholder", "Nick Name", "value", "Spruha", 1, "form-control"], ["type", "text", "placeholder", "Designation", "value", "Web Designer", 1, "form-control"], ["type", "text", "placeholder", "Email", "value", "info@Spruha.in", 1, "form-control"], ["type", "text", "placeholder", "Website", "value", "@spruko.w", 1, "form-control"], ["type", "text", "placeholder", "phone number", "value", "+245 354 654", 1, "form-control"], ["name", "example-textarea-input", "rows", "2", "placeholder", "Address", 1, "form-control"], ["type", "text", "placeholder", "twitter", "value", "twitter.com/spruko.me", 1, "form-control"], ["type", "text", "placeholder", "facebook", "value", "https://www.facebook.com/Spruha", 1, "form-control"], ["type", "text", "placeholder", "google", "value", "spruko.com", 1, "form-control"], ["type", "text", "placeholder", "linkedin", "value", "linkedin.com/in/spruko", 1, "form-control"], ["type", "text", "placeholder", "github", "value", "github.com/sprukos", 1, "form-control"], ["name", "example-textarea-input", "rows", "4", "placeholder", "", 1, "form-control"], [1, "form-group", "mb-0"], [1, "custom-controls-stacked"], [1, "ckbox", "mg-b-10-f"], ["checked", "", "type", "checkbox"], [1, "ckbox"], [1, "mt-4"], ["type", "button", 1, "btn", "btn-primary", "mr-2"], ["type", "button", 1, "btn", "btn-danger"], ["id", "timeline", 1, "main-content-body", "tab-pane", "border-top-0"], [1, "border", "p-4"], [1, "main-content-body", "main-content-body-profile"], [1, "main-profile-body", "p-0"], [1, "col-12"], [1, "card", "mg-b-20", "border"], [1, "card-header", "p-4"], [1, "media-user", "mr-2"], [1, "main-img-user", "avatar-md"], ["alt", "", "src", "../../assets/img/users/6.jpg", 1, "rounded-circle"], [1, "mb-0", "mg-t-2", "ml-2"], [1, "text-primary", "ml-2"], [1, "ml-auto"], ["ngbDropdown", "", 1, "show"], ["href", "JavaScript:void(0);", "ngbDropdownToggle", "", 1, "new", "option-dots2"], [1, "fas", "fa-ellipsis-v"], ["ngbDropdownMenu", "", 1, "shadow"], ["href", "javascript:;", 1, "dropdown-item"], [1, "mg-t-0"], [1, "col"], ["alt", "img", "src", "../../assets/img/media/1.jpg", 1, "wd-200", "mr-4"], ["alt", "img", "src", "../../assets/img/media/2.jpg", 1, "wd-200"], [1, "media", "mg-t-15", "profile-footer"], [1, "demo-avatar-group"], [1, "demo-avatar-group", "main-avatar-list-stacked"], [1, "main-img-user"], ["alt", "", "src", "../../assets/img/users/12.jpg", 1, "rounded-circle"], ["alt", "", "src", "../../assets/img/users/3.jpg", 1, "rounded-circle"], [1, "main-img-user", "online"], ["alt", "", "src", "../../assets/img/users/5.jpg", 1, "rounded-circle"], [1, "main-avatar"], [1, "mb-0", "mg-t-10"], [1, "dropdown", "show"], ["href", "JavaScript:void(0);", 1, "new"], [1, "far", "fa-heart", "mr-3"], [1, "far", "fa-comment", "mr-3"], [1, "far", "fa-share-square"], [1, "mb-0", "ml-2", "mg-t-3"], [1, "text-muted", "ml-2"], [1, "card-body", "h-100"], ["alt", "img", "src", "../../assets/img/media/4.jpg", 1, "wd-200", "mr-4"], ["alt", "img", "src", "../../assets/img/media/5.jpg", 1, "wd-200"], ["alt", "", "src", "../../assets/img/users/7.jpg", 1, "rounded-circle"], ["alt", "", "src", "../../assets/img/users/2.jpg", 1, "rounded-circle"], ["alt", "", "src", "../../assets/img/users/4.jpg", 1, "rounded-circle"], ["alt", "", "src", "../../assets/img/users/9.jpg", 1, "rounded-circle"], ["alt", "", "src", "../../assets/img/users/10.jpg", 1, "rounded-circle"], [1, "card", "border"], ["alt", "img", "src", "../../assets/img/media/4.jpg", 1, "wd-200", "mr-3"], ["alt", "img", "src", "../../assets/img/media/7.jpg", 1, "wd-200"], ["alt", "", "src", "../../assets/img/users/11.jpg", 1, "rounded-circle"], ["id", "gallery", 1, "main-content-body", "p-4", "border", "tab-pane", "border-top-0"], [1, "demo-gallery"], ["id", "lightgallery", 1, "list-unstyled", "row", "row-sm"], ["class", "col-sm-6 col-lg-4", 4, "ngFor", "ngForOf"], [3, "id", "modalImages", "plainGalleryConfig", "currentImageConfig", "buttonsConfig"], [1, "col-sm-6", "col-lg-4"], ["href", "javascript:void(0)", 1, "wd-100p"], ["alt", "Thumb", 1, "img-responsive", "mb-4", "wd-100p", 3, "src", "click"], ["id", "friends", 1, "main-content-body", "tab-pane", "border-top-0"], [1, "card-body", "border", "pd-b-10"], [1, "col-sm-12", "col-md-6", "col-lg-6", "col-xl-3"], [1, "card", "custom-card", "border"], [1, "card-body", "text-center"], [1, "user-lock", "text-center"], ["ngbDropdown", "", 1, "dropdown", "text-right"], ["href", "javascript:;", "ngbDropdownToggle", "", 1, "option-dots"], [1, "fe", "fe-more-vertical"], ["ngbDropdownMenu", "", 1, "dropdown-menu-right", "shadow"], [1, "fe", "fe-message-square", "mr-2"], [1, "fe", "fe-edit-2", "mr-2"], [1, "fe", "fe-eye", "mr-2"], [1, "fe", "fe-trash-2", "mr-2"], ["alt", "avatar", "src", "../../assets/img/users/2.jpg", 1, "rounded-circle"], [1, "mb-1", "mt-3", "main-content-label"], [1, "mb-2", "mt-1", "tx-inverse"], [1, "text-muted", "text-center", "mt-1"], ["ngbDropdown", "", 1, "text-right"], ["alt", "avatar", "src", "../../assets/img/users/3.jpg", 1, "rounded-circle"], ["alt", "avatar", "src", "../../assets/img/users/4.jpg", 1, "rounded-circle"], ["alt", "avatar", "src", "../../assets/img/users/8.jpg", 1, "rounded-circle"], ["id", "settings", 1, "main-content-body", "tab-pane", "p-4", "border-top-0"], ["type", "text", "placeholder", "User Name", "value", "Sonia Taylor", 1, "form-control"], ["type", "text", "placeholder", "Email", "value", "info@SoniaTaylor.in", 1, "form-control"], [1, "row"], ["placeholder", "Select Language", 1, "form-control", "p-0"], ["placeholder", "Select TimeZone", 1, "form-control", "p-0"], [4, "ngFor", "ngForOf"], [1, "col-md-3", "col"], [1, "col-md-9", "col"], ["type", "checkbox"], ["href", "javascript:;", 1, ""], ["href", "javascript:;", 1, "mg-r-20"]],
  template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Pages");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Import ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Filter ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Download Report ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "div", 16)(25, "div", 17)(26, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h3", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Sonia Taylor");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 21)(31, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Follow");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 28)(41, "ul", 29)(42, "li")(43, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "26");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li")(47, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "33");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Followers");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li")(51, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "136");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Following");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 30)(55, "nav", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](56, 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, ProfileComponent_ng_template_59_Template, 110, 0, "ng-template", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](60, 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Edit Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, ProfileComponent_ng_template_63_Template, 144, 0, "ng-template", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](64, 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Timeline");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, ProfileComponent_ng_template_67_Template, 226, 0, "ng-template", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](68, 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, ProfileComponent_ng_template_71_Template, 6, 7, "ng-template", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](72, 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Friends");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, ProfileComponent_ng_template_75_Template, 219, 0, "ng-template", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](76, 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Account Settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, ProfileComponent_ng_template_79_Template, 91, 1, "ng-template", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 35)(81, "div", 14)(82, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavLinkBase, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__.NgOptionComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm],
  styles: [".option-dots:hover {\n  background: none;\n}\n  .btn.btn-rounded.btn-danger {\n  margin-right: 5px;\n}\n  .ng-select,   .ng-select div,   .ng-select input,   .ng-select span {\n  box-sizing: content-box !important;\n}\n\n.user-lock[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  transform: translate(0px, 21px) !important;\n  z-index: 9 !important;\n  right: 0%;\n  left: initial !important;\n}\n\n.media[_ngcontent-%COMP%]   .shadow.dropdown-menu[x-placement^=bottom][_ngcontent-%COMP%] {\n  transform: translate(-150px, 24px) !important;\n  z-index: 9 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxnQkFBQTtBQURSO0FBS0s7RUFDSSxpQkFBQTtBQUhUO0FBTUs7RUFDSSxrQ0FBQTtBQUpUOztBQVFBO0VBQ0ksMENBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtBQUxKOztBQVFBO0VBQ0ksNkNBQUE7RUFDQSxxQkFBQTtBQUxKIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwe1xyXG5cclxuICAgIC5vcHRpb24tZG90czpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICB9XHJcblxyXG5cclxuICAgICAuYnRuLmJ0bi1yb3VuZGVkLmJ0bi1kYW5nZXJ7XHJcbiAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgIH1cclxuXHJcbiAgICAgLm5nLXNlbGVjdCwgLm5nLXNlbGVjdCBkaXYsIC5uZy1zZWxlY3QgaW5wdXQsIC5uZy1zZWxlY3Qgc3BhbntcclxuICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcclxuICAgICB9XHJcbn1cclxuXHJcbi51c2VyLWxvY2sgLmRyb3Bkb3duLW1lbnV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDIxcHgpICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiA5ICFpbXBvcnRhbnQ7XHJcbiAgICByaWdodDogMCU7XHJcbiAgICBsZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tZWRpYSAuc2hhZG93LmRyb3Bkb3duLW1lbnVbeC1wbGFjZW1lbnRePWJvdHRvbV17XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwcHgsIDI0cHgpICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiA5ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 40028:
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/successmessage/successmessage.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuccessmessageComponent: () => (/* binding */ SuccessmessageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 82454);
var _class;


class SuccessmessageComponent {
  constructor() {}
  ngOnInit() {}
}
_class = SuccessmessageComponent;
_class.ɵfac = function SuccessmessageComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-successmessage"]],
  decls: 14,
  vars: 0,
  consts: [[1, "row", "signpages", "ext-center"], [1, "col-md-7", "mx-auto"], [1, "card", "alert-message"], [1, "card-body"], [1, "text-center", "text-white"], ["enable-background", "new 0 0 512 512", "version", "1.1", "viewBox", "0 0 512 512", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 1, "alert-icons"], ["d", "m491.38 157.66c-13.15-30.297-31.856-57.697-55.598-81.439s-51.142-42.448-81.439-55.598c-31.529-13.686-64.615-20.625-98.338-20.625s-66.809 6.939-98.338 20.625c-30.297 13.15-57.697 31.856-81.439 55.598s-42.448 51.142-55.598 81.439c-13.686 31.529-20.625 64.615-20.625 98.338s6.939 66.809 20.625 98.338c13.149 30.297 31.855 57.697 55.598 81.439 23.742 23.742 51.142 42.448 81.439 55.598 31.529 13.686 64.615 20.625 98.338 20.625s66.809-6.939 98.338-20.625c30.297-13.15 57.697-31.856 81.439-55.598s42.448-51.142 55.598-81.439c13.686-31.529 20.625-64.615 20.625-98.338s-6.939-66.809-20.625-98.338zm-235.38 334.34c-127.92 0-236-108.08-236-236s108.08-236 236-236 236 108.08 236 236-108.08 236-236 236z"], ["d", "m451.98 173.8c-10.87-25.256-26.363-48.044-46.049-67.729-19.686-19.686-42.473-35.179-67.729-46.049-26.249-11.298-53.904-17.026-82.197-17.026-38.462 0-78.555 13.134-115.94 37.981-4.6 3.057-5.851 9.264-2.794 13.863 3.057 4.6 9.264 5.85 13.863 2.794 34.1-22.66 70.365-34.638 104.88-34.638 104.62 0 193 88.383 193 193s-88.383 193-193 193-193-88.383-193-193c0-34.504 11.975-70.771 34.629-104.88 3.056-4.601 1.804-10.807-2.796-13.863-4.602-3.056-10.807-1.803-13.863 2.797-24.84 37.397-37.97 77.489-37.97 115.94 0 28.293 5.728 55.948 17.025 82.196 10.87 25.256 26.363 48.044 46.049 67.729 19.686 19.687 42.473 35.179 67.73 46.05 26.248 11.297 53.903 17.025 82.196 17.025s55.948-5.728 82.196-17.025c25.256-10.87 48.044-26.363 67.729-46.049 19.686-19.686 35.179-42.473 46.049-67.729 11.298-26.249 17.026-53.904 17.026-82.197s-5.728-55.948-17.025-82.196z"], ["d", "m115 105c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10z"], ["d", "m374.28 177.72c-7.557-7.557-17.6-11.719-28.281-11.719s-20.724 4.162-28.281 11.719l-91.719 91.719-31.719-31.719c-7.557-7.557-17.6-11.719-28.281-11.719s-20.724 4.162-28.278 11.716c-7.559 7.553-11.722 17.597-11.722 28.284s4.163 20.731 11.719 28.281l60 60c7.557 7.557 17.601 11.719 28.281 11.719s20.724-4.162 28.281-11.719l120-120c7.559-7.553 11.722-17.597 11.722-28.284s-4.163-20.731-11.719-28.281zm-14.142 42.42-120 120c-3.78 3.779-8.801 5.861-14.139 5.861s-10.359-2.082-14.139-5.861l-60.003-60.003c-3.777-3.775-5.858-8.795-5.858-14.136s2.081-10.361 5.861-14.139c3.78-3.779 8.801-5.861 14.139-5.861s10.359 2.082 14.139 5.861l45.861 45.861 105.86-105.86c3.78-3.779 8.801-5.861 14.139-5.861s10.359 2.082 14.142 5.864c3.777 3.775 5.858 8.795 5.858 14.136s-2.081 10.361-5.861 14.139z"], [1, "mt-4", "mb-3"], ["routerLink", "/dashboard", 1, "btn", "btn-success"]],
  template: function SuccessmessageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6)(7, "path", 7)(8, "path", 8)(9, "path", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Message success");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Back to Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 63181:
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/warningmessage/warningmessage.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WarningmessageComponent: () => (/* binding */ WarningmessageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 82454);
var _class;


class WarningmessageComponent {
  constructor() {}
  ngOnInit() {}
}
_class = WarningmessageComponent;
_class.ɵfac = function WarningmessageComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-warningmessage"]],
  decls: 18,
  vars: 0,
  consts: [[1, "row", "signpages", "ext-center"], [1, "col-md-7", "mx-auto"], [1, "card", "alert-message"], [1, "card-body"], [1, "text-center", "text-white"], ["enable-background", "new 0 0 512.044 512.044", "viewBox", "0 0 512.044 512.044", "width", "512", "xmlns", "http://www.w3.org/2000/svg", 1, "alert-icons"], ["d", "m502.026 376.697-52.051-90.685c-2.75-4.79-8.862-6.445-13.651-3.695-4.79 2.749-6.444 8.861-3.695 13.651l52.058 90.696c9.784 16.992 9.766 37.271-.048 54.246s-27.379 27.109-46.987 27.109h-363.261c-19.608 0-37.173-10.134-46.987-27.109-9.813-16.975-9.831-37.253-.048-54.246l181.63-315.448c9.804-17.027 27.387-27.192 47.035-27.192s37.231 10.166 47.05 27.219l84.792 146.239c2.77 4.778 8.889 6.405 13.667 3.635s6.405-8.889 3.635-13.667l-84.777-146.213c-13.417-23.301-37.479-37.213-64.367-37.213s-50.95 13.912-64.367 37.213l-181.629 315.448c-13.389 23.253-13.365 51.005.066 74.235 13.43 23.23 37.468 37.099 64.301 37.099h363.261c26.833 0 50.871-13.869 64.301-37.099 13.429-23.229 13.454-50.981.072-74.223z"], ["d", "m409.761 255.712c1.601 3.843 5.556 6.383 9.729 6.165 4.119-.215 7.757-3.004 9.021-6.93 1.242-3.859-.02-8.222-3.166-10.793-3.285-2.684-8.015-2.983-11.62-.758-4.106 2.534-5.819 7.862-3.964 12.316z"], ["d", "m256.022 81.531c-12.106 0-22.939 6.264-28.98 16.755l-167.217 290.414c-6.028 10.47-6.018 22.965.029 33.424s16.87 16.704 28.951 16.704h334.433c12.082 0 22.904-6.244 28.951-16.704 6.047-10.459 6.058-22.954.029-33.424l-167.216-290.414c-6.041-10.491-16.874-16.755-28.98-16.755zm178.853 330.583c-2.467 4.267-6.709 6.714-11.637 6.714h-334.433c-4.928 0-9.17-2.447-11.637-6.714-2.466-4.267-2.471-9.163-.012-13.434l167.216-290.414c2.428-4.217 6.783-6.734 11.648-6.734s9.22 2.518 11.648 6.734l167.216 290.414c2.461 4.27 2.457 9.167-.009 13.434z"], ["d", "m222.219 229.104-32.592 62.531c-4.19 8.039-3.885 17.467.816 25.219s12.92 12.38 21.986 12.38h18.548l-1.229 59.605c-.09 4.357 2.653 8.271 6.779 9.674 1.058.36 2.143.533 3.217.533 3.116 0 6.131-1.46 8.054-4.07l56.463-76.669c5.784-7.854 6.644-18.142 2.244-26.848-4.4-8.705-13.194-14.114-22.948-14.114h-4.557l28.788-46.833c1.897-3.086 1.977-6.955.21-10.117-1.768-3.161-5.107-5.12-8.729-5.12h-54.248c-9.618 0-18.356 5.299-22.802 13.829zm30.379 53.004c-1.897 3.086-1.977 6.956-.21 10.117 1.768 3.161 5.106 5.12 8.729 5.12h22.441c3.171 0 4.622 2.193 5.099 3.136s1.382 3.412-.499 5.965l-37.763 51.278.789-38.284c.055-2.688-.974-5.284-2.854-7.204-1.881-1.92-4.456-3.002-7.144-3.002h-28.757c-2.904 0-4.384-1.924-4.886-2.751s-1.523-3.029-.181-5.603l32.592-62.531c.988-1.895 2.929-3.073 5.067-3.073h36.363z"], [1, "mt-4", "mb-3"], [1, "tx-18", "text-white-50"], ["routerLink", "/dashboard", 1, "btn", "btn-warning"]],
  template: function WarningmessageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 5)(6, "g")(7, "g");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 6)(9, "path", 7)(10, "path", 8)(11, "path", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Message Warning");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Oops!! You tried to access a page which is not available.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Back to Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 18345:
/*!**********************************************!*\
  !*** ./src/app/shared/data/pages/profile.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeZone: () => (/* binding */ TimeZone)
/* harmony export */ });
let TimeZone = [{
  id: 1,
  name: '(GMT-11:00) Midway Island, Samoa'
}, {
  id: 2,
  name: '(GMT-10:00) Hawaii-Aleutian'
}, {
  id: 3,
  name: '(GMT-10:00) Hawaii'
}, {
  id: 4,
  name: '(GMT-09:30) Marquesas Islands'
}, {
  id: 5,
  name: '(GMT-09:00) Gambier Islands'
}, {
  id: 6,
  name: '(GMT-09:00) Alaska'
}, {
  id: 7,
  name: '(GMT-08:00) Tijuana, Baja California'
}, {
  id: 8,
  name: '(GMT-08:00) Pitcairn Islands'
}, {
  id: 9,
  name: '(GMT-08:00) Pacific Time (US &amp; Canada)'
}, {
  id: 10,
  name: '(GMT-07:00) Mountain Time (US &amp; Canada)'
}, {
  id: 11,
  name: '(GMT-07:00) Chihuahua, La Paz, Mazatlan'
}, {
  id: 12,
  name: '(GMT-07:00) Arizona'
}, {
  id: 13,
  name: '(GMT-06:00) Saskatchewan, Central America'
}, {
  id: 14,
  name: '(GMT-06:00) Guadalajara, Mexico City, Monterrey'
}, {
  id: 15,
  name: '(GMT-06:00) Easter Island'
}, {
  id: 16,
  name: '(GMT-06:00) Central Time (US &amp; Canada)'
}, {
  id: 17,
  name: '(GMT-05:00) Eastern Time (US &amp; Canada)'
}, {
  id: 18,
  name: '(GMT-05:00) Cuba'
}, {
  id: 19,
  name: '(GMT-05:00) Bogota, Lima, Quito, Rio Branco'
}, {
  id: 20,
  name: '(GMT-04:30) Caracas'
}, {
  id: 21,
  name: '(GMT-04:00) Santiago'
}, {
  id: 22,
  name: '(GMT-04:00) La Paz'
}, {
  id: 23,
  name: '(GMT-04:00) Faukland Islands'
}, {
  id: 24,
  name: '(GMT-04:00) Brazil'
}, {
  id: 25,
  name: '(GMT-04:00) Atlantic Time (Goose Bay)'
}, {
  id: 26,
  name: '(GMT-04:00) Atlantic Time (Canada)'
}, {
  id: 27,
  name: '(GMT-03:30) Newfoundland'
}, {
  id: 28,
  name: '(GMT-03:00) UTC-3'
}, {
  id: 29,
  name: '(GMT-03:00) Montevideo'
}, {
  id: 30,
  name: '(GMT-03:00) Miquelon, St. Pierre'
}, {
  id: 31,
  name: '(GMT-03:00) Greenland'
}, {
  id: 32,
  name: '(GMT-03:00) Buenos Aires'
}, {
  id: 33,
  name: '(GMT-03:00) Brasilia'
}, {
  id: 34,
  name: '(GMT-02:00) Mid-Atlantic'
}, {
  id: 35,
  name: '(GMT-01:00) Cape Verde Is'
}, {
  id: 36,
  name: '(GMT-01:00) Azores'
}, {
  id: 37,
  name: '(GMT) Greenwich Mean Time : Belfast'
}, {
  id: 38,
  name: '(GMT) Greenwich Mean Time : Dublin'
}, {
  id: 39,
  name: '(GMT) Greenwich Mean Time : Lisbon'
}, {
  id: 40,
  name: '(GMT) Greenwich Mean Time : London'
}, {
  id: 41,
  name: '(GMT) Monrovia, Reykjavik'
}, {
  id: 42,
  name: '(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna'
}, {
  id: 43,
  name: '(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana,Prague'
}, {
  id: 44,
  name: '(GMT+01:00) Brussels, Copenhagen, Madrid, Paris'
}, {
  id: 45,
  name: '(GMT+01:00) West Central Africa'
}, {
  id: 46,
  name: '(GMT+01:00) Windhoek'
}, {
  id: 47,
  name: '(GMT+02:00) Beirut'
}, {
  id: 48,
  name: '(GMT+02:00) Cairo'
}, {
  id: 49,
  name: '(GMT+02:00) Gaza'
}, {
  id: 50,
  name: '(GMT+02:00) Harare, Pretoria'
}, {
  id: 51,
  name: '(GMT+02:00) Jerusalem'
}, {
  id: 52,
  name: '(GMT+02:00) Minsk'
}, {
  id: 53,
  name: '(GMT+02:00) Syria'
}, {
  id: 54,
  name: '(GMT+03:00) Moscow, St. Petersburg, Volgograd'
}, {
  id: 55,
  name: '(GMT+03:00) Nairobi'
}, {
  id: 56,
  name: '(GMT+03:30) Tehran'
}, {
  id: 57,
  name: '(GMT+04:00) Abu Dhabi, Muscat'
}, {
  id: 58,
  name: '(GMT+04:00) Yerevan'
}, {
  id: 59,
  name: '(GMT+04:30) Kabul'
}, {
  id: 60,
  name: '(GMT+05:00) Ekaterinburg'
}, {
  id: 61,
  name: '(GMT+05:00) Tashkent'
}, {
  id: 62,
  name: '(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi'
}, {
  id: 63,
  name: '(GMT+05:45) Kathmandu'
}, {
  id: 64,
  name: '(GMT+06:00) Astana, Dhaka'
}, {
  id: 65,
  name: '(GMT+06:00) Novosibirsk'
}, {
  id: 66,
  name: '(GMT+06:30) Yangon (Rangoon)'
}, {
  id: 67,
  name: '(GMT+07:00) Bangkok, Hanoi, Jakarta'
}, {
  id: 68,
  name: '(GMT+07:00) Krasnoyarsk'
}, {
  id: 69,
  name: '(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi'
}, {
  id: 70,
  name: '(GMT+08:00) Irkutsk, Ulaan Bataar'
}, {
  id: 71,
  name: '(GMT+08:00) Perth'
}, {
  id: 72,
  name: '(GMT+08:45) Eucla'
}, {
  id: 73,
  name: '(GMT+09:00) Osaka, Sapporo, Tokyo'
}, {
  id: 74,
  name: '(GMT+09:00) Seoul'
}, {
  id: 75,
  name: '(GMT+09:00) Yakutsk'
}, {
  id: 76,
  name: '(GMT+09:30) Adelaide'
}, {
  id: 77,
  name: '(GMT+09:30) Darwin'
}, {
  id: 78,
  name: '(GMT+10:00) Brisbane'
}, {
  id: 79,
  name: '(GMT+10:00) Hobart'
}, {
  id: 80,
  name: '(GMT+10:00) Vladivostok'
}, {
  id: 81,
  name: '(GMT+10:30) Lord Howe Island'
}, {
  id: 82,
  name: '(GMT+11:00) Solomon Is., New Caledonia'
}, {
  id: 83,
  name: '(GMT+11:00) Magadan'
}, {
  id: 84,
  name: '(GMT+11:30) Norfolk Island'
}, {
  id: 85,
  name: ' (GMT+12:00) Anadyr, Kamchatka'
}, {
  id: 86,
  name: '(GMT+12:00) Auckland, Wellington'
}, {
  id: 87,
  name: '(GMT+12:00) Fiji, Kamchatka, Marshall Is'
}, {
  id: 88,
  name: '(GMT+12:45) Chatham Islands'
}, {
  id: 89,
  name: "(GMT+13:00) Nuku'alofa"
}, {
  id: 90,
  name: '(GMT+14:00) Kiritimati'
}];

/***/ }),

/***/ 4486:
/*!**************************************************!*\
  !*** ./src/app/shared/services/utils.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateUtilService: () => (/* binding */ DateUtilService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;

class DateUtilService {
  compare(first_date, second_date) {
    let first = new Date();
    if (first_date != undefined) {
      first = new Date(first_date);
    }
    let second = new Date();
    if (second_date != undefined) {
      first = new Date(second_date);
    }
    if (new Date(first).getTime() >= new Date(second).getTime()) {
      return true;
    }
    return false;
  }
  isLive() {}
  convertToUrlFormat(inputString) {
    // Convert to lowercase and replace spaces with hyphens
    let urlFormatString = inputString.toLowerCase().replace(/\s+/g, '-');
    // Remove special characters using regular expression
    urlFormatString = urlFormatString.replace(/[^a-z0-9\-]/g, '');
    return urlFormatString;
  }
}
_class = DateUtilService;
_class.ɵfac = function DateUtilService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 17175:
/*!***********************************************************!*\
  !*** ./node_modules/ng2-dragula/fesm2022/ng2-dragula.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
var dragula__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragulaDirective: () => (/* binding */ DragulaDirective),
/* harmony export */   DragulaModule: () => (/* binding */ DragulaModule),
/* harmony export */   DragulaService: () => (/* binding */ DragulaService),
/* harmony export */   DrakeFactory: () => (/* binding */ DrakeFactory),
/* harmony export */   EventTypes: () => (/* binding */ EventTypes),
/* harmony export */   Group: () => (/* binding */ Group),
/* harmony export */   MockDrake: () => (/* binding */ MockDrake),
/* harmony export */   MockDrakeFactory: () => (/* binding */ MockDrakeFactory),
/* harmony export */   dragula: () => (/* binding */ dragula)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 30240);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 92378);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37574);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 13045);
/* harmony import */ var dragula__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dragula */ 73568);
var _class, _class2, _class3;





class Group {
  constructor(name, drake, options) {
    this.name = name;
    this.drake = drake;
    this.options = options;
    this.initEvents = false;
  }
}
var EventTypes;
(function (EventTypes) {
  EventTypes["Cancel"] = "cancel";
  EventTypes["Cloned"] = "cloned";
  EventTypes["Drag"] = "drag";
  EventTypes["DragEnd"] = "dragend";
  EventTypes["Drop"] = "drop";
  EventTypes["Out"] = "out";
  EventTypes["Over"] = "over";
  EventTypes["Remove"] = "remove";
  EventTypes["Shadow"] = "shadow";
  EventTypes["DropModel"] = "dropModel";
  EventTypes["RemoveModel"] = "removeModel";
})(EventTypes || (EventTypes = {}));
const AllEvents = Object.keys(EventTypes).map(k => EventTypes[k]);
const dragula = dragula__WEBPACK_IMPORTED_MODULE_0__ || /*#__PURE__*/ (dragula__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (dragula__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(dragula__WEBPACK_IMPORTED_MODULE_0__, 2)));
class DrakeFactory {
  constructor(build = dragula) {
    this.build = build;
  }
}
const filterEvent = (eventType, filterDragType, projector) => input => {
  return input.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(({
    event,
    name
  }) => {
    return event === eventType && (filterDragType === undefined || name === filterDragType);
  }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(({
    name,
    args
  }) => projector(name, args)));
};
const elContainerSourceProjector = (name, [el, container, source]) => ({
  name,
  el,
  container,
  source
});
class DragulaService {
  constructor(drakeFactory) {
    this.drakeFactory = drakeFactory;
    this.groups = {};
    this.dispatch$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.elContainerSource = eventType => groupName => this.dispatch$.pipe(filterEvent(eventType, groupName, elContainerSourceProjector));
    /* https://github.com/bevacqua/dragula#drakeon-events */
    // eslint-disable-next-line @typescript-eslint/member-ordering
    this.cancel = this.elContainerSource(EventTypes.Cancel);
    // eslint-disable-next-line @typescript-eslint/member-ordering
    this.remove = this.elContainerSource(EventTypes.Remove);
    // eslint-disable-next-line @typescript-eslint/member-ordering
    this.shadow = this.elContainerSource(EventTypes.Shadow);
    // eslint-disable-next-line @typescript-eslint/member-ordering
    this.over = this.elContainerSource(EventTypes.Over);
    // eslint-disable-next-line @typescript-eslint/member-ordering
    this.out = this.elContainerSource(EventTypes.Out);
    this.drag = groupName => this.dispatch$.pipe(filterEvent(EventTypes.Drag, groupName, (name, [el, source]) => ({
      name,
      el,
      source
    })));
    this.dragend = groupName => this.dispatch$.pipe(filterEvent(EventTypes.DragEnd, groupName, (name, [el]) => ({
      name,
      el
    })));
    this.drop = groupName => this.dispatch$.pipe(filterEvent(EventTypes.Drop, groupName, (name, [el, target, source, sibling]) => {
      return {
        name,
        el,
        target,
        source,
        sibling
      };
    }));
    this.cloned = groupName => this.dispatch$.pipe(filterEvent(EventTypes.Cloned, groupName, (name, [clone, original, cloneType]) => {
      return {
        name,
        clone,
        original,
        cloneType
      };
    }));
    this.dropModel = groupName => this.dispatch$.pipe(filterEvent(EventTypes.DropModel, groupName, (name, [el, target, source, sibling, item, sourceModel, targetModel, sourceIndex, targetIndex]) => {
      return {
        name,
        el,
        target,
        source,
        sibling,
        item,
        sourceModel,
        targetModel,
        sourceIndex,
        targetIndex
      };
    }));
    this.removeModel = groupName => this.dispatch$.pipe(filterEvent(EventTypes.RemoveModel, groupName, (name, [el, container, source, item, sourceModel, sourceIndex]) => {
      return {
        name,
        el,
        container,
        source,
        item,
        sourceModel,
        sourceIndex
      };
    }));
    if (this.drakeFactory === null || this.drakeFactory === undefined) {
      this.drakeFactory = new DrakeFactory();
    }
  }
  /** Public mainly for testing purposes. Prefer `createGroup()`. */
  add(group) {
    const existingGroup = this.find(group.name);
    if (existingGroup) {
      throw new Error('Group named: "' + group.name + '" already exists.');
    }
    this.groups[group.name] = group;
    this.handleModels(group);
    this.setupEvents(group);
    return group;
  }
  find(name) {
    return this.groups[name];
  }
  destroy(name) {
    const group = this.find(name);
    if (!group) {
      return;
    }
    group.drake && group.drake.destroy();
    delete this.groups[name];
  }
  /**
   * Creates a group with the specified name and options.
   *
   * Note: formerly known as `setOptions`
   */
  createGroup(name, options) {
    return this.add(new Group(name, this.drakeFactory.build([], options), options));
  }
  handleModels({
    name,
    drake,
    options
  }) {
    let dragElm;
    let dragIndex;
    let dropIndex;
    drake.on('remove', (el, container, source) => {
      if (!drake.models) {
        return;
      }
      let sourceModel = drake.models[drake.containers.indexOf(source)];
      sourceModel = sourceModel.slice(0); // clone it
      const item = sourceModel.splice(dragIndex, 1)[0];
      this.dispatch$.next({
        event: EventTypes.RemoveModel,
        name,
        args: [el, container, source, item, sourceModel, dragIndex]
      });
    });
    drake.on('drag', (el, source) => {
      if (!drake.models) {
        return;
      }
      dragElm = el;
      dragIndex = this.domIndexOf(el, source);
    });
    drake.on('drop', (dropElm, target, source, sibling) => {
      if (!drake.models || !target) {
        return;
      }
      dropIndex = this.domIndexOf(dropElm, target);
      let sourceModel = drake.models[drake.containers.indexOf(source)];
      let targetModel = drake.models[drake.containers.indexOf(target)];
      let item;
      if (target === source) {
        sourceModel = sourceModel.slice(0);
        item = sourceModel.splice(dragIndex, 1)[0];
        sourceModel.splice(dropIndex, 0, item);
        // this was true before we cloned and updated sourceModel,
        // but targetModel still has the old value
        targetModel = sourceModel;
      } else {
        const isCopying = dragElm !== dropElm;
        item = sourceModel[dragIndex];
        if (isCopying) {
          if (!options.copyItem) {
            throw new Error('If you have enabled `copy` on a group, you must provide a `copyItem` function.');
          }
          item = options.copyItem(item);
        }
        if (!isCopying) {
          sourceModel = sourceModel.slice(0);
          sourceModel.splice(dragIndex, 1);
        }
        targetModel = targetModel.slice(0);
        targetModel.splice(dropIndex, 0, item);
        if (isCopying) {
          try {
            target.removeChild(dropElm);
            // eslint-disable-next-line no-empty
          } catch (e) {}
        }
      }
      this.dispatch$.next({
        event: EventTypes.DropModel,
        name,
        args: [dropElm, target, source, sibling, item, sourceModel, targetModel, dragIndex, dropIndex]
      });
    });
  }
  setupEvents(group) {
    if (group.initEvents) {
      return;
    }
    group.initEvents = true;
    const name = group.name;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this;
    const emitter = event => {
      switch (event) {
        case EventTypes.Drag:
          group.drake.on(event, (...args) => {
            this.dispatch$.next({
              event,
              name,
              args
            });
          });
          break;
        case EventTypes.Drop:
          group.drake.on(event, (...args) => {
            this.dispatch$.next({
              event,
              name,
              args
            });
          });
          break;
        case EventTypes.DragEnd:
          group.drake.on(event, (...args) => {
            this.dispatch$.next({
              event,
              name,
              args
            });
          });
          break;
        case EventTypes.Cancel:
        case EventTypes.Remove:
        case EventTypes.Shadow:
        case EventTypes.Over:
        case EventTypes.Out:
          group.drake.on(event, (...args) => {
            this.dispatch$.next({
              event,
              name,
              args
            });
          });
          break;
        case EventTypes.Cloned:
          group.drake.on(event, (...args) => {
            this.dispatch$.next({
              event,
              name,
              args
            });
          });
          break;
        case EventTypes.DropModel:
          group.drake.on(event, (...args) => {
            this.dispatch$.next({
              event,
              name,
              args
            });
          });
          break;
        case EventTypes.RemoveModel:
          group.drake.on(event, (...args) => {
            this.dispatch$.next({
              event,
              name,
              args
            });
          });
          break;
        default:
          break;
      }
    };
    AllEvents.forEach(emitter);
  }
  domIndexOf(child, parent) {
    if (parent) {
      return Array.prototype.indexOf.call(parent.children, child);
    }
  }
}
_class = DragulaService;
_class.ɵfac = function _class_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](DrakeFactory, 8));
};
_class.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DragulaService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: DrakeFactory,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional
      }]
    }];
  }, null);
})();
class DragulaDirective {
  get container() {
    return this.el && this.el.nativeElement;
  }
  constructor(el, dragulaService) {
    this.el = el;
    this.dragulaService = dragulaService;
    this.dragulaModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }
  ngOnChanges(changes) {
    if (changes && changes.dragula) {
      const {
        previousValue: prev,
        currentValue: current,
        firstChange
      } = changes.dragula;
      const hadPreviousValue = !!prev;
      const hasNewValue = !!current;
      // something -> null       =>  teardown only
      // something -> something  =>  teardown, then setup
      //      null -> something  =>  setup only
      //
      //      null -> null (precluded by fact of change being present)
      if (hadPreviousValue) {
        this.teardown(prev);
      }
      if (hasNewValue) {
        this.setup();
      }
    } else if (changes && changes.dragulaModel) {
      // this code only runs when you're not changing the group name
      // because if you're changing the group name, you'll be doing setup or teardown
      // it also only runs if there is a group name to attach to.
      const {
        previousValue: prev,
        currentValue: current,
        firstChange
      } = changes.dragulaModel;
      const drake = this.group?.drake;
      if (this.dragula && drake) {
        drake.models = drake.models || [];
        const prevIndex = drake.models.indexOf(prev);
        if (prevIndex !== -1) {
          // delete the previous
          drake.models.splice(prevIndex, 1);
          // maybe insert a new one at the same spot
          if (current) {
            drake.models.splice(prevIndex, 0, current);
          }
        } else if (current) {
          // no previous one to remove; just push this one.
          drake.models.push(current);
        }
      }
    }
  }
  // call ngOnInit 'setup' because we want to call it in ngOnChanges
  // and it would otherwise run twice
  setup() {
    const checkModel = group => {
      if (this.dragulaModel) {
        if (group.drake?.models) {
          group.drake?.models?.push(this.dragulaModel);
        } else {
          if (group.drake) {
            group.drake.models = [this.dragulaModel];
          }
        }
      }
    };
    // find or create a group
    if (!this.dragula) {
      return;
    }
    let group = this.dragulaService.find(this.dragula);
    if (!group) {
      const options = {};
      group = this.dragulaService.createGroup(this.dragula, options);
    }
    // ensure model and container element are pushed
    checkModel(group);
    group.drake?.containers.push(this.container);
    this.subscribe(this.dragula);
    this.group = group;
  }
  subscribe(name) {
    this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    this.subs.add(this.dragulaService.dropModel(name).subscribe(({
      source,
      target,
      sourceModel,
      targetModel
    }) => {
      if (source === this.el.nativeElement) {
        this.dragulaModelChange.emit(sourceModel);
      } else if (target === this.el.nativeElement) {
        this.dragulaModelChange.emit(targetModel);
      }
    }));
    this.subs.add(this.dragulaService.removeModel(name).subscribe(({
      source,
      sourceModel
    }) => {
      if (source === this.el.nativeElement) {
        this.dragulaModelChange.emit(sourceModel);
      }
    }));
  }
  teardown(groupName) {
    if (this.subs) {
      this.subs.unsubscribe();
    }
    const group = this.dragulaService.find(groupName);
    if (group) {
      const itemToRemove = group.drake?.containers.indexOf(this.el.nativeElement);
      if (itemToRemove !== -1) {
        group.drake?.containers.splice(itemToRemove, 1);
      }
      if (this.dragulaModel && group.drake && group.drake.models) {
        const modelIndex = group.drake.models.indexOf(this.dragulaModel);
        if (modelIndex !== -1) {
          group.drake.models.splice(modelIndex, 1);
        }
      }
    }
  }
  ngOnDestroy() {
    if (!this.dragula) {
      return;
    }
    this.teardown(this.dragula);
  }
}
_class2 = DragulaDirective;
_class2.ɵfac = function _class2_Factory(t) {
  return new (t || _class2)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](DragulaService));
};
_class2.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: _class2,
  selectors: [["", "dragula", ""]],
  inputs: {
    dragula: "dragula",
    dragulaModel: "dragulaModel"
  },
  outputs: {
    dragulaModelChange: "dragulaModelChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DragulaDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: '[dragula]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
    }, {
      type: DragulaService
    }];
  }, {
    dragula: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    dragulaModel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    dragulaModelChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }]
  });
})();
class DragulaModule {
  static forRoot() {
    return {
      ngModule: DragulaModule,
      providers: [DragulaService]
    };
  }
}
_class3 = DragulaModule;
_class3.ɵfac = function _class3_Factory(t) {
  return new (t || _class3)();
};
_class3.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: _class3
});
_class3.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [DragulaService]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DragulaModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
    args: [{
      exports: [DragulaDirective],
      declarations: [DragulaDirective],
      providers: [DragulaService]
    }]
  }], null, null);
})();
const MockDrakeFactory = new DrakeFactory((containers, options) => {
  return new MockDrake(containers, options);
});
/** You can use MockDrake to simulate Drake events.
 *
 * The three methods that actually do anything are `on(event, listener)`,
 * `destroy()`, and a new method, `emit()`. Use `emit()` to manually emit Drake
 * events, and if you injected MockDrake properly with MockDrakeFactory or
 * mocked the DragulaService.find() method, then you can make ng2-dragula think
 * drags and drops are happening.
 *
 * Caveats:
 *
 * 1. YOU MUST MAKE THE DOM CHANGES YOURSELF.
 * 2. REPEAT: YOU MUST MAKE THE DOM CHANGES YOURSELF.
 *    That means `source.removeChild(el)`, and `target.insertBefore(el)`.
 * 3. None of the other methods do anything.
 *    That's ok, because ng2-dragula doesn't use them.
 */
class MockDrake {
  /**
   * @param containers A list of container elements.
   * @param options These will NOT be used. At all.
   * @param models Nonstandard, but useful for testing using `new MockDrake()` directly.
   *               Note, default value is undefined, like a real Drake. Don't change that.
   */
  constructor(containers = [], options = {}, models) {
    this.containers = containers;
    this.options = options;
    this.models = models;
    // Basic but fully functional event emitter shim
    this.emitter$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    /* Doesn't represent anything meaningful. */
    this.dragging = false;
  }
  on(event, callback) {
    this.subs.add(this.emitter$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(({
      eventType
    }) => eventType === event)).subscribe(({
      eventType,
      args
    }) => {
      if (eventType === EventTypes.Drag) {
        const argument = Array.from(args);
        const el = argument[0];
        const source = argument[1];
        //@ts-ignore
        callback(el, source);
        return;
      }
      if (eventType === EventTypes.Drop) {
        const argument = Array.from(args);
        const el = argument[0];
        const target = argument[1];
        const source = argument[2];
        const sibling = argument[3];
        //@ts-ignore
        callback(el, target, source, sibling);
        return;
      }
      if (eventType === EventTypes.Remove) {
        const argument = Array.from(args);
        const el = argument[0];
        const container = argument[1];
        const source = argument[2];
        //@ts-ignore
        callback(el, container, source);
        return;
      }
      callback(args);
    }));
  }
  /* Does nothing useful. */
  start(item) {
    this.dragging = true;
  }
  /* Does nothing useful. */
  end() {
    this.dragging = false;
  }
  cancel(revert) {
    this.dragging = false;
  }
  /* Does nothing useful. */
  canMove(item) {
    return this.options.accepts ? this.options.accepts(item) : false;
  }
  /* Does nothing useful. */
  remove() {
    this.dragging = false;
  }
  destroy() {
    this.subs.unsubscribe();
  }
  /**
   * This is the most useful method. You can use it to manually fire events that would normally
   * be fired by a real drake.
   *
   * You're likely most interested in firing `drag`, `remove` and `drop`, the three events
   * DragulaService uses to implement [dragulaModel].
   *
   * See https://github.com/bevacqua/dragula#drakeon-events for what you should emit (and in what order).
   *
   * (Note also, firing dropModel and removeModel won't work. You would have to mock DragulaService for that.)
   */
  emit(eventType, ...args) {
    this.emitter$.next({
      eventType,
      args
    });
  }
}

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_components_pages_pages_module_ts.js.map