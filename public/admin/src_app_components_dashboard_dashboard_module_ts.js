"use strict";
(self["webpackChunkspruha"] = self["webpackChunkspruha"] || []).push([["src_app_components_dashboard_dashboard_module_ts"],{

/***/ 19464:
/*!*****************************************************************!*\
  !*** ./node_modules/leaflet-geosearch/dist/geosearch.module.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlgoliaProvider: () => (/* binding */ L),
/* harmony export */   BingProvider: () => (/* binding */ C),
/* harmony export */   EsriProvider: () => (/* binding */ S),
/* harmony export */   GeoApiFrProvider: () => (/* binding */ _),
/* harmony export */   GeoSearchControl: () => (/* binding */ w),
/* harmony export */   GeoapifyProvider: () => (/* binding */ B),
/* harmony export */   GeocodeEarthProvider: () => (/* binding */ P),
/* harmony export */   GoogleProvider: () => (/* binding */ A),
/* harmony export */   HereProvider: () => (/* binding */ N),
/* harmony export */   JsonProvider: () => (/* binding */ k),
/* harmony export */   LegacyGoogleProvider: () => (/* binding */ I),
/* harmony export */   LocationIQProvider: () => (/* binding */ F),
/* harmony export */   MapBoxProvider: () => (/* binding */ q),
/* harmony export */   OpenCageProvider: () => (/* binding */ M),
/* harmony export */   OpenStreetMapProvider: () => (/* binding */ O),
/* harmony export */   PeliasProvider: () => (/* binding */ U),
/* harmony export */   SearchControl: () => (/* binding */ w),
/* harmony export */   SearchElement: () => (/* binding */ v)
/* harmony export */ });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ 50658);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);

function e() {
  return e = Object.assign ? Object.assign.bind() : function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, e.apply(this, arguments);
}
function r(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, n(t, e);
}
function n(t, e) {
  return n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, n(t, e);
}
function o() {
  if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
  if (Reflect.construct.sham) return !1;
  if ("function" == typeof Proxy) return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch (t) {
    return !1;
  }
}
function i(t, e, r) {
  return i = o() ? Reflect.construct.bind() : function (t, e, r) {
    var o = [null];
    o.push.apply(o, e);
    var i = new (Function.bind.apply(t, o))();
    return r && n(i, r.prototype), i;
  }, i.apply(null, arguments);
}
function s(t, e, r, n) {
  void 0 === e && (e = ""), void 0 === n && (n = {});
  var o = document.createElement(t);
  return e && (o.className = e), Object.keys(n).forEach(function (t) {
    if ("function" == typeof n[t]) {
      var e = 0 === t.indexOf("on") ? t.substr(2).toLowerCase() : t;
      o.addEventListener(e, n[t]);
    } else "html" === t ? o.innerHTML = n[t] : "text" === t ? o.innerText = n[t] : o.setAttribute(t, n[t]);
  }), r && r.appendChild(o), o;
}
function a(t) {
  t.preventDefault(), t.stopPropagation();
}
var l = function () {
  return [].slice.call(arguments).filter(Boolean).join(" ").trim();
};
function c(t, e) {
  t && t.classList && (Array.isArray(e) ? e : [e]).forEach(function (e) {
    t.classList.contains(e) || t.classList.add(e);
  });
}
function u(t, e) {
  t && t.classList && (Array.isArray(e) ? e : [e]).forEach(function (e) {
    t.classList.contains(e) && t.classList.remove(e);
  });
}
var h,
  p = 13,
  d = 40,
  f = 38,
  m = [p, 27, d, f, 37, 39],
  v = /*#__PURE__*/function () {
    function t(t) {
      var e = this,
        r = t.handleSubmit,
        n = t.searchLabel,
        o = t.classNames,
        i = void 0 === o ? {} : o;
      this.container = void 0, this.form = void 0, this.input = void 0, this.handleSubmit = void 0, this.hasError = !1, this.container = s("div", l("geosearch", i.container)), this.form = s("form", ["", i.form].join(" "), this.container, {
        autocomplete: "none",
        onClick: a,
        onDblClick: a,
        touchStart: a,
        touchEnd: a
      }), this.input = s("input", ["glass", i.input].join(" "), this.form, {
        type: "text",
        placeholder: n || "search",
        onInput: this.onInput,
        onKeyUp: function (t) {
          return e.onKeyUp(t);
        },
        onKeyPress: function (t) {
          return e.onKeyPress(t);
        },
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onClick: function () {
          e.input.focus(), e.input.dispatchEvent(new Event("focus"));
        }
      }), this.handleSubmit = r;
    }
    var e = t.prototype;
    return e.onFocus = function () {
      c(this.form, "active");
    }, e.onBlur = function () {
      u(this.form, "active");
    }, e.onSubmit = function (t) {
      try {
        var e = this;
        return a(t), u(r = e.container, "error"), c(r, "pending"), Promise.resolve(e.handleSubmit({
          query: e.input.value
        })).then(function () {
          u(e.container, "pending");
        });
      } catch (t) {
        return Promise.reject(t);
      }
      var r;
    }, e.onInput = function () {
      this.hasError && (u(this.container, "error"), this.hasError = !1);
    }, e.onKeyUp = function (t) {
      27 === t.keyCode && (u(this.container, ["pending", "active"]), this.input.value = "", document.body.focus(), document.body.blur());
    }, e.onKeyPress = function (t) {
      t.keyCode === p && this.onSubmit(t);
    }, e.setQuery = function (t) {
      this.input.value = t;
    }, t;
  }(),
  g = /*#__PURE__*/function () {
    function t(t) {
      var e = this,
        r = t.handleClick,
        n = t.classNames,
        o = void 0 === n ? {} : n,
        i = t.notFoundMessage;
      this.handleClick = void 0, this.selected = -1, this.results = [], this.container = void 0, this.resultItem = void 0, this.notFoundMessage = void 0, this.onClick = function (t) {
        if ("function" == typeof e.handleClick) {
          var r = t.target;
          if (r && e.container.contains(r) && r.hasAttribute("data-key")) {
            var n = Number(r.getAttribute("data-key"));
            e.clear(), e.handleClick({
              result: e.results[n]
            });
          }
        }
      }, this.handleClick = r, this.notFoundMessage = i ? s("div", l(o.notfound), void 0, {
        html: i
      }) : void 0, this.container = s("div", l("results", o.resultlist)), this.container.addEventListener("click", this.onClick, !0), this.resultItem = s("div", l(o.item));
    }
    var e = t.prototype;
    return e.render = function (t, e) {
      var r = this;
      void 0 === t && (t = []), this.clear(), t.forEach(function (t, n) {
        var o = r.resultItem.cloneNode(!0);
        o.setAttribute("data-key", "" + n), o.innerHTML = e({
          result: t
        }), r.container.appendChild(o);
      }), t.length > 0 ? (c(this.container.parentElement, "open"), c(this.container, "active")) : this.notFoundMessage && (this.container.appendChild(this.notFoundMessage), c(this.container.parentElement, "open")), this.results = t;
    }, e.select = function (t) {
      return Array.from(this.container.children).forEach(function (e, r) {
        return r === t ? c(e, "active") : u(e, "active");
      }), this.selected = t, this.results[t];
    }, e.count = function () {
      return this.results ? this.results.length : 0;
    }, e.clear = function () {
      for (this.selected = -1; this.container.lastChild;) this.container.removeChild(this.container.lastChild);
      u(this.container.parentElement, "open"), u(this.container, "active");
    }, t;
  }(),
  y = {
    position: "topleft",
    style: "button",
    showMarker: !0,
    showPopup: !1,
    popupFormat: function (t) {
      return "" + t.result.label;
    },
    resultFormat: function (t) {
      return "" + t.result.label;
    },
    marker: {
      icon: leaflet__WEBPACK_IMPORTED_MODULE_0__ && leaflet__WEBPACK_IMPORTED_MODULE_0__.Icon ? new leaflet__WEBPACK_IMPORTED_MODULE_0__.Icon.Default() : void 0,
      draggable: !1
    },
    maxMarkers: 1,
    maxSuggestions: 5,
    retainZoomLevel: !1,
    animateZoom: !0,
    searchLabel: "Enter address",
    clearSearchLabel: "Clear search",
    notFoundMessage: "",
    messageHideDelay: 3e3,
    zoomLevel: 18,
    classNames: {
      container: "leaflet-bar leaflet-control leaflet-control-geosearch",
      button: "leaflet-bar-part leaflet-bar-part-single",
      resetButton: "reset",
      msgbox: "leaflet-bar message",
      form: "",
      input: "",
      resultlist: "",
      item: "",
      notfound: "leaflet-bar-notfound"
    },
    autoComplete: !0,
    autoCompleteDelay: 250,
    autoClose: !1,
    keepResult: !1,
    updateMap: !0
  },
  b = "Leaflet must be loaded before instantiating the GeoSearch control",
  E = {
    options: e({}, y),
    classNames: e({}, y.classNames),
    initialize: function (r) {
      var n,
        o,
        i,
        a,
        l = this;
      if (!leaflet__WEBPACK_IMPORTED_MODULE_0__) throw new Error(b);
      if (!r.provider) throw new Error("Provider is missing from options");
      this.options = e({}, y, r), this.classNames = e({}, this.classNames, r.classNames), this.markers = new leaflet__WEBPACK_IMPORTED_MODULE_0__.FeatureGroup(), this.classNames.container += " leaflet-geosearch-" + this.options.style, this.searchElement = new v({
        searchLabel: this.options.searchLabel,
        classNames: {
          container: this.classNames.container,
          form: this.classNames.form,
          input: this.classNames.input
        },
        handleSubmit: function (t) {
          return l.onSubmit(t);
        }
      }), this.button = s("a", this.classNames.button, this.searchElement.container, {
        title: this.options.searchLabel,
        href: "#",
        onClick: function (t) {
          return l.onClick(t);
        }
      }), leaflet__WEBPACK_IMPORTED_MODULE_0__.DomEvent.disableClickPropagation(this.button), this.resetButton = s("button", this.classNames.resetButton, this.searchElement.form, {
        text: "×",
        "aria-label": this.options.clearSearchLabel,
        onClick: function () {
          "" === l.searchElement.input.value ? l.close() : l.clearResults(null, !0);
        }
      }), leaflet__WEBPACK_IMPORTED_MODULE_0__.DomEvent.disableClickPropagation(this.resetButton), this.options.autoComplete && (this.resultList = new g({
        handleClick: function (t) {
          var e = t.result;
          l.searchElement.input.value = e.label, l.onSubmit({
            query: e.label,
            data: e
          });
        },
        classNames: {
          resultlist: this.classNames.resultlist,
          item: this.classNames.item,
          notfound: this.classNames.notfound
        },
        notFoundMessage: this.options.notFoundMessage
      }), this.searchElement.form.appendChild(this.resultList.container), this.searchElement.input.addEventListener("keyup", (n = function (t) {
        return l.autoSearch(t);
      }, void 0 === (o = this.options.autoCompleteDelay) && (o = 250), void 0 === i && (i = !1), function () {
        var t = [].slice.call(arguments);
        a && clearTimeout(a), a = setTimeout(function () {
          a = null, i || n.apply(void 0, t);
        }, o), i && !a && n.apply(void 0, t);
      }), !0), this.searchElement.input.addEventListener("keydown", function (t) {
        return l.selectResult(t);
      }, !0), this.searchElement.input.addEventListener("keydown", function (t) {
        return l.clearResults(t, !0);
      }, !0)), this.searchElement.form.addEventListener("click", function (t) {
        t.preventDefault();
      }, !1);
    },
    onAdd: function (e) {
      var r = this.options,
        n = r.showMarker,
        o = r.style;
      if (this.map = e, n && this.markers.addTo(e), "bar" === o) {
        var i = e.getContainer().querySelector(".leaflet-control-container");
        this.container = s("div", "leaflet-control-geosearch leaflet-geosearch-bar"), this.container.appendChild(this.searchElement.form), i.appendChild(this.container);
      }
      return leaflet__WEBPACK_IMPORTED_MODULE_0__.DomEvent.disableClickPropagation(this.searchElement.form), this.searchElement.container;
    },
    onRemove: function () {
      var t;
      return null == (t = this.container) || t.remove(), this;
    },
    open: function () {
      var t = this.searchElement,
        e = t.input;
      c(t.container, "active"), e.focus();
    },
    close: function () {
      u(this.searchElement.container, "active"), this.clearResults();
    },
    onClick: function (t) {
      t.preventDefault(), t.stopPropagation(), this.searchElement.container.classList.contains("active") ? this.close() : this.open();
    },
    selectResult: function (t) {
      if (-1 !== [p, d, f].indexOf(t.keyCode)) if (t.preventDefault(), t.keyCode !== p) {
        var e = this.resultList.count() - 1;
        if (!(e < 0)) {
          var r = this.resultList.selected,
            n = t.keyCode === d ? r + 1 : r - 1,
            o = this.resultList.select(n < 0 ? e : n > e ? 0 : n);
          this.searchElement.input.value = o.label;
        }
      } else {
        var i = this.resultList.select(this.resultList.selected);
        this.onSubmit({
          query: this.searchElement.input.value,
          data: i
        });
      }
    },
    clearResults: function (t, e) {
      if (void 0 === e && (e = !1), !t || 27 === t.keyCode) {
        var r = this.options,
          n = r.autoComplete;
        !e && r.keepResult || (this.searchElement.input.value = "", this.markers.clearLayers()), n && this.resultList.clear();
      }
    },
    autoSearch: function (t) {
      try {
        var e = this;
        if (m.indexOf(t.keyCode) > -1) return Promise.resolve();
        var r = t.target.value,
          n = e.options.provider,
          o = function () {
            if (r.length) return Promise.resolve(n.search({
              query: r
            })).then(function (t) {
              t = t.slice(0, e.options.maxSuggestions), e.resultList.render(t, e.options.resultFormat);
            });
            e.resultList.clear();
          }();
        return Promise.resolve(o && o.then ? o.then(function () {}) : void 0);
      } catch (t) {
        return Promise.reject(t);
      }
    },
    onSubmit: function (t) {
      try {
        var e = this;
        return Promise.resolve(e.options.provider.search(t)).then(function (r) {
          r && r.length > 0 && e.showResult(r[0], t);
        });
      } catch (t) {
        return Promise.reject(t);
      }
    },
    showResult: function (t, e) {
      var r = this.options,
        n = r.autoClose,
        o = r.updateMap,
        i = this.markers.getLayers();
      i.length >= this.options.maxMarkers && this.markers.removeLayer(i[0]);
      var s = this.addMarker(t, e);
      o && this.centerMap(t), this.map.fireEvent("geosearch/showlocation", {
        location: t,
        marker: s
      }), n && this.closeResults();
    },
    closeResults: function () {
      var t = this.searchElement.container;
      t.classList.contains("active") && u(t, "active"), this.clearResults();
    },
    addMarker: function (e, r) {
      var n = this,
        o = this.options,
        i = o.marker,
        s = o.showPopup,
        a = o.popupFormat,
        l = new leaflet__WEBPACK_IMPORTED_MODULE_0__.Marker([e.y, e.x], i),
        c = e.label;
      return "function" == typeof a && (c = a({
        query: r,
        result: e
      })), l.bindPopup(c), this.markers.addLayer(l), s && l.openPopup(), i.draggable && l.on("dragend", function (t) {
        n.map.fireEvent("geosearch/marker/dragend", {
          location: l.getLatLng(),
          event: t
        });
      }), l;
    },
    centerMap: function (e) {
      var r = this.options,
        n = r.retainZoomLevel,
        o = r.animateZoom,
        i = e.bounds ? new leaflet__WEBPACK_IMPORTED_MODULE_0__.LatLngBounds(e.bounds) : new leaflet__WEBPACK_IMPORTED_MODULE_0__.LatLng(e.y, e.x).toBounds(10),
        s = i.isValid() ? i : this.markers.getBounds();
      !n && i.isValid() && !e.bounds || n || !i.isValid() ? this.map.setView(s.getCenter(), this.getZoom(), {
        animate: o
      }) : this.map.fitBounds(s, {
        animate: o
      });
    },
    getZoom: function () {
      var t = this.options,
        e = t.zoomLevel;
      return t.retainZoomLevel ? this.map.getZoom() : e;
    }
  };
function w() {
  if (!leaflet__WEBPACK_IMPORTED_MODULE_0__) throw new Error(b);
  var e = leaflet__WEBPACK_IMPORTED_MODULE_0__.Control.extend(E);
  return i(e, [].slice.call(arguments));
}
!function (t) {
  t[t.SEARCH = 0] = "SEARCH", t[t.REVERSE = 1] = "REVERSE";
}(h || (h = {}));
var x,
  k = /*#__PURE__*/function () {
    function t(t) {
      void 0 === t && (t = {}), this.options = void 0, this.options = t;
    }
    var r = t.prototype;
    return r.getParamString = function (t) {
      void 0 === t && (t = {});
      var r = e({}, this.options.params, t);
      return Object.keys(r).map(function (t) {
        return encodeURIComponent(t) + "=" + encodeURIComponent(r[t]);
      }).join("&");
    }, r.getUrl = function (t, e) {
      return t + "?" + this.getParamString(e);
    }, r.search = function (t) {
      try {
        var e = this,
          r = e.endpoint({
            query: t.query,
            type: h.SEARCH
          });
        return Promise.resolve(fetch(r)).then(function (t) {
          return Promise.resolve(t.json()).then(function (t) {
            return e.parse({
              data: t
            });
          });
        });
      } catch (t) {
        return Promise.reject(t);
      }
    }, t;
  }(),
  L = /*#__PURE__*/function (t) {
    function n() {
      return t.apply(this, arguments) || this;
    }
    r(n, t);
    var o = n.prototype;
    return o.endpoint = function () {
      return "https://places-dsn.algolia.net/1/places/query";
    }, o.findBestMatchLevelIndex = function (t) {
      var e = t.find(function (t) {
        return "full" === t.matchLevel;
      }) || t.find(function (t) {
        return "partial" === t.matchLevel;
      });
      return e ? t.indexOf(e) : 0;
    }, o.getLabel = function (t) {
      var e, r, n, o;
      return [null == (e = t.locale_names) ? void 0 : e.default[this.findBestMatchLevelIndex(t._highlightResult.locale_names.default)], null == (r = t.city) ? void 0 : r.default[this.findBestMatchLevelIndex(t._highlightResult.city.default)], t.administrative[this.findBestMatchLevelIndex(t._highlightResult.administrative)], null == (n = t.postcode) ? void 0 : n[this.findBestMatchLevelIndex(t._highlightResult.postcode)], null == (o = t.country) ? void 0 : o.default].filter(Boolean).join(", ");
    }, o.parse = function (t) {
      var e = this;
      return t.data.hits.map(function (t) {
        return {
          x: t._geoloc.lng,
          y: t._geoloc.lat,
          label: e.getLabel(t),
          bounds: null,
          raw: t
        };
      });
    }, o.search = function (t) {
      var r = t.query;
      try {
        var n = this,
          o = "string" == typeof r ? {
            query: r
          } : r;
        return Promise.resolve(fetch(n.endpoint(), {
          method: "POST",
          body: JSON.stringify(e({}, n.options.params, o))
        })).then(function (t) {
          return Promise.resolve(t.json()).then(function (t) {
            return n.parse({
              data: t
            });
          });
        });
      } catch (t) {
        return Promise.reject(t);
      }
    }, n;
  }(k),
  C = /*#__PURE__*/function (t) {
    function e() {
      for (var e, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
      return (e = t.call.apply(t, [this].concat(n)) || this).searchUrl = "https://dev.virtualearth.net/REST/v1/Locations", e;
    }
    r(e, t);
    var n = e.prototype;
    return n.endpoint = function (t) {
      var e = t.query,
        r = "string" == typeof e ? {
          q: e
        } : e;
      return r.jsonp = t.jsonp, this.getUrl(this.searchUrl, r);
    }, n.parse = function (t) {
      return 0 === t.data.resourceSets.length ? [] : t.data.resourceSets[0].resources.map(function (t) {
        return {
          x: t.point.coordinates[1],
          y: t.point.coordinates[0],
          label: t.address.formattedAddress,
          bounds: [[t.bbox[0], t.bbox[1]], [t.bbox[2], t.bbox[3]]],
          raw: t
        };
      });
    }, n.search = function (t) {
      var e,
        r,
        n,
        o = t.query;
      try {
        var i = this,
          a = "BING_JSONP_CB_" + Date.now();
        return Promise.resolve((e = i.endpoint({
          query: o,
          jsonp: a
        }), r = a, n = s("script", null, document.body), n.setAttribute("type", "text/javascript"), new Promise(function (t) {
          window[r] = function (e) {
            n.remove(), delete window[r], t(e);
          }, n.setAttribute("src", e);
        }))).then(function (t) {
          return i.parse({
            data: t
          });
        });
      } catch (t) {
        return Promise.reject(t);
      }
    }, e;
  }(k),
  S = /*#__PURE__*/function (t) {
    function e() {
      for (var e, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
      return (e = t.call.apply(t, [this].concat(n)) || this).searchUrl = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/find", e;
    }
    r(e, t);
    var n = e.prototype;
    return n.endpoint = function (t) {
      var e = t.query,
        r = "string" == typeof e ? {
          text: e
        } : e;
      return r.f = "json", this.getUrl(this.searchUrl, r);
    }, n.parse = function (t) {
      return t.data.locations.map(function (t) {
        return {
          x: t.feature.geometry.x,
          y: t.feature.geometry.y,
          label: t.name,
          bounds: [[t.extent.ymin, t.extent.xmin], [t.extent.ymax, t.extent.xmax]],
          raw: t
        };
      });
    }, e;
  }(k),
  U = /*#__PURE__*/function (t) {
    function e(e) {
      var r;
      return void 0 === e && (e = {}), (r = t.call(this, e) || this).host = void 0, r.host = e.host || "http://localhost:4000", r;
    }
    r(e, t);
    var n = e.prototype;
    return n.endpoint = function (t) {
      var e = t.query;
      return t.type === h.REVERSE ? this.getUrl(this.host + "/v1/reverse", "string" == typeof e ? {} : e) : this.getUrl(this.host + "/v1/autocomplete", "string" == typeof e ? {
        text: e
      } : e);
    }, n.parse = function (t) {
      return t.data.features.map(function (t) {
        var e = {
          x: t.geometry.coordinates[0],
          y: t.geometry.coordinates[1],
          label: t.properties.label,
          bounds: null,
          raw: t
        };
        return Array.isArray(t.bbox) && 4 === t.bbox.length && (e.bounds = [[t.bbox[1], t.bbox[0]], [t.bbox[3], t.bbox[2]]]), e;
      });
    }, e;
  }(k),
  P = /*#__PURE__*/function (t) {
    function e(e) {
      return void 0 === e && (e = {}), e.host = "https://api.geocode.earth", t.call(this, e) || this;
    }
    return r(e, t), e;
  }(U),
  R = function t(e, r) {
    if (e === r) return !0;
    if (e && r && "object" == typeof e && "object" == typeof r) {
      if (e.constructor !== r.constructor) return !1;
      var n, o, i;
      if (Array.isArray(e)) {
        if ((n = e.length) != r.length) return !1;
        for (o = n; 0 != o--;) if (!t(e[o], r[o])) return !1;
        return !0;
      }
      if (e.constructor === RegExp) return e.source === r.source && e.flags === r.flags;
      if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === r.valueOf();
      if (e.toString !== Object.prototype.toString) return e.toString() === r.toString();
      if ((n = (i = Object.keys(e)).length) !== Object.keys(r).length) return !1;
      for (o = n; 0 != o--;) if (!Object.prototype.hasOwnProperty.call(r, i[o])) return !1;
      for (o = n; 0 != o--;) {
        var s = i[o];
        if (!t(e[s], r[s])) return !1;
      }
      return !0;
    }
    return e != e && r != r;
  };
!function (t) {
  t[t.INITIALIZED = 0] = "INITIALIZED", t[t.LOADING = 1] = "LOADING", t[t.SUCCESS = 2] = "SUCCESS", t[t.FAILURE = 3] = "FAILURE";
}(x || (x = {}));
class j {
  constructor({
    apiKey: t,
    authReferrerPolicy: e,
    channel: r,
    client: n,
    id: o = "__googleMapsScriptId",
    language: i,
    libraries: s = [],
    mapIds: a,
    nonce: l,
    region: c,
    retries: u = 3,
    url: h = "https://maps.googleapis.com/maps/api/js",
    version: p
  }) {
    if (this.CALLBACK = "__googleMapsCallback", this.callbacks = [], this.done = !1, this.loading = !1, this.errors = [], this.apiKey = t, this.authReferrerPolicy = e, this.channel = r, this.client = n, this.id = o || "__googleMapsScriptId", this.language = i, this.libraries = s, this.mapIds = a, this.nonce = l, this.region = c, this.retries = u, this.url = h, this.version = p, j.instance) {
      if (!R(this.options, j.instance.options)) throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(j.instance.options)}`);
      return j.instance;
    }
    j.instance = this;
  }
  get options() {
    return {
      version: this.version,
      apiKey: this.apiKey,
      channel: this.channel,
      client: this.client,
      id: this.id,
      libraries: this.libraries,
      language: this.language,
      region: this.region,
      mapIds: this.mapIds,
      nonce: this.nonce,
      url: this.url,
      authReferrerPolicy: this.authReferrerPolicy
    };
  }
  get status() {
    return this.errors.length ? x.FAILURE : this.done ? x.SUCCESS : this.loading ? x.LOADING : x.INITIALIZED;
  }
  get failed() {
    return this.done && !this.loading && this.errors.length >= this.retries + 1;
  }
  createUrl() {
    let t = this.url;
    return t += `?callback=${this.CALLBACK}`, this.apiKey && (t += `&key=${this.apiKey}`), this.channel && (t += `&channel=${this.channel}`), this.client && (t += `&client=${this.client}`), this.libraries.length > 0 && (t += `&libraries=${this.libraries.join(",")}`), this.language && (t += `&language=${this.language}`), this.region && (t += `&region=${this.region}`), this.version && (t += `&v=${this.version}`), this.mapIds && (t += `&map_ids=${this.mapIds.join(",")}`), this.authReferrerPolicy && (t += `&auth_referrer_policy=${this.authReferrerPolicy}`), t;
  }
  deleteScript() {
    const t = document.getElementById(this.id);
    t && t.remove();
  }
  load() {
    return this.loadPromise();
  }
  loadPromise() {
    return new Promise((t, e) => {
      this.loadCallback(r => {
        r ? e(r.error) : t(window.google);
      });
    });
  }
  loadCallback(t) {
    this.callbacks.push(t), this.execute();
  }
  setScript() {
    if (document.getElementById(this.id)) return void this.callback();
    const t = this.createUrl(),
      e = document.createElement("script");
    e.id = this.id, e.type = "text/javascript", e.src = t, e.onerror = this.loadErrorCallback.bind(this), e.defer = !0, e.async = !0, this.nonce && (e.nonce = this.nonce), document.head.appendChild(e);
  }
  reset() {
    this.deleteScript(), this.done = !1, this.loading = !1, this.errors = [], this.onerrorEvent = null;
  }
  resetIfRetryingFailed() {
    this.failed && this.reset();
  }
  loadErrorCallback(t) {
    if (this.errors.push(t), this.errors.length <= this.retries) {
      const t = this.errors.length * Math.pow(2, this.errors.length);
      console.log(`Failed to load Google Maps script, retrying in ${t} ms.`), setTimeout(() => {
        this.deleteScript(), this.setScript();
      }, t);
    } else this.onerrorEvent = t, this.callback();
  }
  setCallback() {
    window.__googleMapsCallback = this.callback.bind(this);
  }
  callback() {
    this.done = !0, this.loading = !1, this.callbacks.forEach(t => {
      t(this.onerrorEvent);
    }), this.callbacks = [];
  }
  execute() {
    if (this.resetIfRetryingFailed(), this.done) this.callback();else {
      if (window.google && window.google.maps && window.google.maps.version) return console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."), void this.callback();
      this.loading || (this.loading = !0, this.setCallback(), this.setScript());
    }
  }
}
var A = /*#__PURE__*/function (t) {
    function e(e) {
      var r;
      return (r = t.call(this, e) || this).loader = null, r.geocoder = null, "undefined" != typeof window && (r.loader = new j(e).load().then(function (t) {
        var e = new t.maps.Geocoder();
        return r.geocoder = e, e;
      })), r;
    }
    r(e, t);
    var n = e.prototype;
    return n.endpoint = function (t) {
      throw new Error("Method not implemented.");
    }, n.parse = function (t) {
      return t.data.results.map(function (t) {
        var e = t.geometry.location.toJSON(),
          r = e.lat,
          n = e.lng,
          o = t.geometry.viewport.toJSON();
        return {
          x: n,
          y: r,
          label: t.formatted_address,
          bounds: [[o.south, o.west], [o.north, o.east]],
          raw: t
        };
      });
    }, n.search = function (t) {
      try {
        var e = function (e) {
            if (!e) throw new Error("GoogleMaps GeoCoder is not loaded. Are you trying to run this server side?");
            return Promise.resolve(e.geocode({
              address: t.query
            }, function (t) {
              return {
                results: t
              };
            }).catch(function (t) {
              return "ZERO_RESULTS" !== t.code && console.error(t.code + ": " + t.message), {
                results: []
              };
            })).then(function (t) {
              return r.parse({
                data: t
              });
            });
          },
          r = this,
          n = r.geocoder;
        return Promise.resolve(n ? e(n) : Promise.resolve(r.loader).then(e));
      } catch (t) {
        return Promise.reject(t);
      }
    }, e;
  }(k),
  I = /*#__PURE__*/function (t) {
    function e() {
      for (var e, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
      return (e = t.call.apply(t, [this].concat(n)) || this).searchUrl = "https://maps.googleapis.com/maps/api/geocode/json", e;
    }
    r(e, t);
    var n = e.prototype;
    return n.endpoint = function (t) {
      var e = t.query;
      return this.getUrl(this.searchUrl, "string" == typeof e ? {
        address: e
      } : e);
    }, n.parse = function (t) {
      return t.data.results.map(function (t) {
        return {
          x: t.geometry.location.lng,
          y: t.geometry.location.lat,
          label: t.formatted_address,
          bounds: [[t.geometry.viewport.southwest.lat, t.geometry.viewport.southwest.lng], [t.geometry.viewport.northeast.lat, t.geometry.viewport.northeast.lng]],
          raw: t
        };
      });
    }, e;
  }(k),
  N = /*#__PURE__*/function (t) {
    function e() {
      for (var e, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
      return (e = t.call.apply(t, [this].concat(n)) || this).searchUrl = "https://geocode.search.hereapi.com/v1/autosuggest", e;
    }
    r(e, t);
    var n = e.prototype;
    return n.endpoint = function (t) {
      var e = t.query;
      return this.getUrl(this.searchUrl, "string" == typeof e ? {
        q: e
      } : e);
    }, n.parse = function (t) {
      return t.data.items.filter(function (t) {
        return void 0 !== t.position;
      }).map(function (t) {
        return {
          x: t.position.lng,
          y: t.position.lat,
          label: t.address.label,
          bounds: null,
          raw: t
        };
      });
    }, e;
  }(k),
  O = /*#__PURE__*/function (t) {
    function e(e) {
      var r;
      void 0 === e && (e = {}), (r = t.call(this, e) || this).searchUrl = void 0, r.reverseUrl = void 0;
      var n = "https://nominatim.openstreetmap.org";
      return r.searchUrl = e.searchUrl || n + "/search", r.reverseUrl = e.reverseUrl || n + "/reverse", r;
    }
    r(e, t);
    var n = e.prototype;
    return n.endpoint = function (t) {
      var e = t.query,
        r = t.type,
        n = "string" == typeof e ? {
          q: e
        } : e;
      return n.format = "json", this.getUrl(r === h.REVERSE ? this.reverseUrl : this.searchUrl, n);
    }, n.parse = function (t) {
      return (Array.isArray(t.data) ? t.data : [t.data]).map(function (t) {
        return {
          x: Number(t.lon),
          y: Number(t.lat),
          label: t.display_name,
          bounds: [[parseFloat(t.boundingbox[0]), parseFloat(t.boundingbox[2])], [parseFloat(t.boundingbox[1]), parseFloat(t.boundingbox[3])]],
          raw: t
        };
      });
    }, e;
  }(k),
  F = /*#__PURE__*/function (t) {
    function n(r) {
      return t.call(this, e({}, r, {
        searchUrl: "https://locationiq.org/v1/search.php",
        reverseUrl: "https://locationiq.org/v1/reverse.php"
      })) || this;
    }
    return r(n, t), n;
  }(O),
  M = /*#__PURE__*/function (t) {
    function e() {
      for (var e, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
      return (e = t.call.apply(t, [this].concat(n)) || this).searchUrl = "https://api.opencagedata.com/geocode/v1/json", e;
    }
    r(e, t);
    var n = e.prototype;
    return n.endpoint = function (t) {
      var e = t.query,
        r = "string" == typeof e ? {
          q: e
        } : e;
      return r.format = "json", this.getUrl(this.searchUrl, r);
    }, n.parse = function (t) {
      return t.data.results.map(function (t) {
        return {
          x: t.geometry.lng,
          y: t.geometry.lat,
          label: t.formatted,
          bounds: [[t.bounds.southwest.lat, t.bounds.southwest.lng], [t.bounds.northeast.lat, t.bounds.northeast.lng]],
          raw: t
        };
      });
    }, n.search = function (e) {
      try {
        return Promise.resolve(e.query.length < 2 ? [] : t.prototype.search.call(this, e));
      } catch (t) {
        return Promise.reject(t);
      }
    }, e;
  }(k),
  q = /*#__PURE__*/function (t) {
    function e(e) {
      var r;
      return void 0 === e && (e = {}), (r = t.call(this, e) || this).searchUrl = void 0, r.searchUrl = e.searchUrl || "https://a.tiles.mapbox.com/v4/geocode/mapbox.places/", r;
    }
    r(e, t);
    var n = e.prototype;
    return n.endpoint = function (t) {
      return this.getUrl("" + this.searchUrl + t.query + ".json");
    }, n.parse = function (t) {
      return (Array.isArray(t.data.features) ? t.data.features : []).map(function (t) {
        var e = null;
        return t.bbox && (e = [[parseFloat(t.bbox[1]), parseFloat(t.bbox[0])], [parseFloat(t.bbox[3]), parseFloat(t.bbox[2])]]), {
          x: Number(t.center[0]),
          y: Number(t.center[1]),
          label: t.place_name ? t.place_name : t.text,
          bounds: e,
          raw: t
        };
      });
    }, e;
  }(k),
  _ = /*#__PURE__*/function (t) {
    function e(e) {
      var r;
      void 0 === e && (e = {}), (r = t.call(this, e) || this).searchUrl = void 0, r.reverseUrl = void 0;
      var n = "https://api-adresse.data.gouv.fr";
      return r.searchUrl = e.searchUrl || n + "/search", r.reverseUrl = e.reverseUrl || n + "/reverse", r;
    }
    r(e, t);
    var n = e.prototype;
    return n.endpoint = function (t) {
      var e = t.query;
      return this.getUrl(t.type === h.REVERSE ? this.reverseUrl : this.searchUrl, "string" == typeof e ? {
        q: e
      } : e);
    }, n.parse = function (t) {
      return t.data.features.map(function (t) {
        return {
          x: t.geometry.coordinates[0],
          y: t.geometry.coordinates[1],
          label: t.properties.label,
          bounds: null,
          raw: t
        };
      });
    }, e;
  }(k),
  B = /*#__PURE__*/function (t) {
    function e(e) {
      var r;
      void 0 === e && (e = {}), (r = t.call(this, e) || this).searchUrl = void 0, r.reverseUrl = void 0;
      var n = "https://api.geoapify.com/v1/geocode";
      return r.searchUrl = e.searchUrl || n + "/search", r.reverseUrl = e.reverseUrl || n + "/reverse", r;
    }
    r(e, t);
    var n = e.prototype;
    return n.endpoint = function (t) {
      var e = t.query,
        r = t.type,
        n = "string" == typeof e ? {
          text: e
        } : e;
      return n.format = "json", this.getUrl(r === h.REVERSE ? this.reverseUrl : this.searchUrl, n);
    }, n.parse = function (t) {
      return (Array.isArray(t.data.results) ? t.data.results : [t.data.results]).map(function (t) {
        return {
          x: Number(t.lon),
          y: Number(t.lat),
          label: t.formatted,
          bounds: [[parseFloat(t.bbox.lat1), parseFloat(t.bbox.lon1)], [parseFloat(t.bbox.lat2), parseFloat(t.bbox.lon2)]],
          raw: t
        };
      });
    }, e;
  }(k);


/***/ }),

/***/ 40509:
/*!******************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardRoutingModule: () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 39107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;




const routes = [{
  path: '',
  children: [{
    path: '',
    component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
  }]
}];
class DashboardRoutingModule {}
_class = DashboardRoutingModule;
_class.ɵfac = function DashboardRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 51010:
/*!**********************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardModule: () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 39107);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-routing.module */ 40509);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ 19502);
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-circle-progress */ 52350);
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ 94332);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 74048);
/* harmony import */ var _maps_map_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../maps/map/map.component */ 18062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;











class DashboardModule {}
_class = DashboardModule;
_class.ɵfac = function DashboardModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_6__.LeafletModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, ng2_charts__WEBPACK_IMPORTED_MODULE_8__.NgChartsModule, ng_circle_progress__WEBPACK_IMPORTED_MODULE_9__.NgCircleProgressModule.forRoot()]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent, _maps_map_map_component__WEBPACK_IMPORTED_MODULE_2__.MapComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_6__.LeafletModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, ng2_charts__WEBPACK_IMPORTED_MODULE_8__.NgChartsModule, ng_circle_progress__WEBPACK_IMPORTED_MODULE_9__.NgCircleProgressModule]
  });
})();

/***/ }),

/***/ 39107:
/*!***********************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard/dashboard.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/dashboard */ 16009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var src_app_shared_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/chat/chat.service */ 15128);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 74048);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 19483);
/* harmony import */ var src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/users/user.service */ 55613);
/* harmony import */ var src_app_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/date.service */ 50862);
/* harmony import */ var src_app_shared_services_requests_payload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/requests/payload.service */ 87010);
/* harmony import */ var src_app_shared_services_statistics_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/statistics.service */ 40432);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-charts */ 19502);
var _class;











class DashboardComponent {
  constructor(chatService, http, authService, userService, dateService, requestService, statisticsService) {
    this.chatService = chatService;
    this.http = http;
    this.authService = authService;
    this.userService = userService;
    this.dateService = dateService;
    this.requestService = requestService;
    this.statisticsService = statisticsService;
    this.total_jobs = 0;
    this.jobs = new Array();
    this.total_users = 0;
    this.users = new Array();
    this.statistics = new Array();
    this.profile_image = `https://api.ambulance.uk/profile/images/user_default.jpeg`;
    //line Chart
    this.lineChartOptions = _shared_data_dashboard__WEBPACK_IMPORTED_MODULE_0__.lineChartOptions;
    this.lineChartLabels = _shared_data_dashboard__WEBPACK_IMPORTED_MODULE_0__.lineChartLabels;
    this.lineChartType = _shared_data_dashboard__WEBPACK_IMPORTED_MODULE_0__.lineChartType;
    this.lineChartLegend = _shared_data_dashboard__WEBPACK_IMPORTED_MODULE_0__.lineChartLegend;
    this.lineChartData = _shared_data_dashboard__WEBPACK_IMPORTED_MODULE_0__.lineChartData;
    //Bar chart
    this.barChartOptions = _shared_data_dashboard__WEBPACK_IMPORTED_MODULE_0__.barChartOptions;
    this.barChartLabels = _shared_data_dashboard__WEBPACK_IMPORTED_MODULE_0__.barChartLabels;
    this.barChartType = _shared_data_dashboard__WEBPACK_IMPORTED_MODULE_0__.barChartType;
    this.barChartData = _shared_data_dashboard__WEBPACK_IMPORTED_MODULE_0__.barChartData;
    this.barChartColors = _shared_data_dashboard__WEBPACK_IMPORTED_MODULE_0__.barChartColors;
  }
  ngOnInit() {
    // console.log("Token Data: ", this.authService.token())
    this.loadJobs();
    this.loadUsers();
    this.loadStatistics();
    this.access = this.authService.check(this.authService.USER_ACCESS);
  }
  loadJobs() {}
  loadStatistics() {
    let $this = this;
    this.statisticsService.all(`page-visits`, function (result, status) {
      console.log(result, 'result');
      if (status) {
        $this.static = result;
        $this.today_visit = result && result.today_visits ? result.today_visits : 0;
        $this.percentage_change = result && result.percentage_change ? result.percentage_change : 0;
        $this.previous_month_visits = result && result?.previous_month_visits ? result?.previous_month_visits : 0;
      }
    });
  }
  loadUsers() {
    let $this = this;
    this.userService.all(function (result, status) {
      if (status) {
        $this.users = result;
        $this.total_users = result.length || 0;
      }
    });
  }
  formatToday() {
    let date = new Date();
    return this.dateService.formatEnUSWithOption(date);
  }
  formatDate(date) {
    // var d = new Date(date);
    return this.dateService.formatDate(date);
  }
  profile(user_id) {
    let profile = `https://api.ambulance.uk/storage/profile/images/user_${user_id}.jpeg`;
    let $this = this;
    this.authService.imageExists(profile, function (exists) {
      console.log("Image Response:::::", exists);
      if (exists) {
        return profile;
      } else {
        return $this.profile_image;
      }
    });
  }
  setImage(path, userid) {
    let path_image = `user_${userid}.jpeg`;
    this.requestService.request(path + path_image, {}, this.requestService.TYPE_GET, function () {
      path_image = path;
    });
    return path_image;
  }
}
_class = DashboardComponent;
_class.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_1__.ChatService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_requests_payload_service__WEBPACK_IMPORTED_MODULE_5__.PayloadService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_statistics_service__WEBPACK_IMPORTED_MODULE_6__.StatisticsService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-dashboard"]],
  decls: 182,
  vars: 11,
  consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["routerLink", "/pages/list", "type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-list", "mr-2"], ["routerLink", "/website/layouts", "type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-edit", "mr-2"], ["routerLink", "/mail/inbox", "type", "button", 1, "btn", "btn-primary", "my-2", "btn-icon-text"], [1, "fe", "fe-plus", "mr-2"], [1, "row", "row-sm"], [1, "col-sm-12", "col-lg-12", "col-xl-8"], [1, "row", "row-sm", "mt-lg-4"], [1, "col-sm-12", "col-lg-12", "col-xl-12"], [1, "card", "bg-secondary", "custom-card", "card-box"], [1, "card-body", "p-4"], [1, "row", "align-items-center"], [1, "offset-xl-3", "offset-sm-6", "col-xl-8", "col-sm-6", "col-12"], [1, "d-flex", "mb-3"], [1, "font-weight-bold", "text-white"], [1, "tx-white-7", "mb-1"], ["src", "../../assets/img/pngs/work3.png", "alt", "user-img", 1, "wd-200"], [1, "col-sm-12", "col-md-6", "col-lg-6", "col-xl-6"], [1, "card", "custom-card"], [1, "card-body"], [1, "card-item"], [1, "card-item-icon", "card-icon"], ["xmlns", "http://www.w3.org/2000/svg", "enable-background", "new 0 0 24 24", "height", "24", "viewBox", "0 0 24 24", "width", "24", 1, "text-primary"], ["height", "14", "opacity", ".3", "width", "14", "x", "5", "y", "5"], ["fill", "none", "height", "24", "width", "24"], ["d", "M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"], ["height", "5", "width", "2", "x", "7", "y", "12"], ["height", "10", "width", "2", "x", "15", "y", "7"], ["height", "3", "width", "2", "x", "11", "y", "14"], ["height", "2", "width", "2", "x", "11", "y", "10"], [1, "card-item-title", "mb-2"], [1, "main-content-label", "tx-13", "font-weight-bold", "mb-1"], [1, "d-block", "tx-12", "mb-0", "text-muted"], [1, "card-item-body"], [1, "card-item-stat"], [1, "font-weight-bold"], [1, "text-success"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M12 4c-4.41 0-8 3.59-8 8 0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33s4.93.59 6.36 2.33C19.38 15.49 20 13.82 20 12c0-4.41-3.59-8-8-8zm0 9c-1.94 0-3.5-1.56-3.5-3.5S10.06 6 12 6s3.5 1.56 3.5 3.5S13.94 13 12 13z", "opacity", ".3"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"], [1, "row"], [1, "col-lg-12"], [1, "card", "custom-card", "mg-b-20"], [1, "card-header", "border-bottom-0", "pt-0", "pl-0", "pr-0", "d-flex"], [1, "main-content-label", "mb-2"], [1, "d-block", "tx-12", "mb-3", "text-muted"], [1, "card", "custom-card", "overflow-hidden"], [1, "card-header", "border-bottom-0"], [1, "card-body", "pl-0"], [1, ""], [1, "container"], ["id", "chartLine", 1, "chart-dropshadow2", "ht-250"], ["baseChart", "", 3, "datasets", "labels", "options", "legend", "type"], [1, "col-sm-12", "col-lg-12", "col-xl-4", "mt-xl-4"], [1, "card-body", "beautiful-card"], [1, "card-item-title", "mb-2", 2, "margin-top", "250px"], [1, "col-6"], [1, "card-item-title"], [1, "main-content-label", "tx-13", "font-weight-bold", "mb-2"], [1, "mb-0", "tx-24", "mt-2"], [1, "text-primary"], ["href", "javascript:;", 1, "text-muted"], ["src", "../../assets/img/pngs/work.png", "alt", "image", 1, "best-emp"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "FeramyCMS Dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Website Dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " Pages ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, " Layouts ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, " Messages ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 14)(22, "div", 15)(23, "div", 16)(24, "div", 17)(25, "div", 18)(26, "div", 19)(27, "div", 20)(28, "div", 21)(29, "h4", 22)(30, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "FeramyCMS");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "p", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Doing more than just a CMS. Read contacts, Reply to mail and gain insight into how users interact with your website ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "img", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 14)(36, "div", 26)(37, "div", 27)(38, "div", 28)(39, "div", 29)(40, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "svg", 31)(42, "g");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "rect", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "g");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "rect", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "g");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "path", 34)(48, "rect", 35)(49, "rect", 36)(50, "rect", 37)(51, "rect", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 39)(53, "label", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "Today's Visit");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "span", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, "Previous month vs this months");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 42)(58, "div", 43)(59, "h4", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "small")(62, "b", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, " higher");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "div", 26)(66, "div", 27)(67, "div", 28)(68, "div", 29)(69, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "svg", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](71, "path", 47)(72, "path", 48)(73, "path", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "div", 39)(75, "label", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, "Previous Month Visit");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "span", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](78, "Employees joined this month");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "div", 42)(80, "div", 43)(81, "h4", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](82);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "small")(84, "b", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85, "0%");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86, " Increased");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "div", 26)(88, "div", 27)(89, "div", 28)(90, "div", 29)(91, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "svg", 31)(93, "g");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](94, "rect", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "g");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](96, "rect", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "g");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](98, "path", 34)(99, "rect", 35)(100, "rect", 36)(101, "rect", 37)(102, "rect", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "div", 39)(104, "label", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](105, "Current month visit");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "span", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](107, "Previous month vs this months");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](108, "div", 42)(109, "div", 43)(110, "h4", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](111);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](112, "div", 26)(113, "div", 27)(114, "div", 28)(115, "div", 29)(116, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](117, "svg", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](118, "path", 47)(119, "path", 48)(120, "path", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](121, "div", 39)(122, "label", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](123, "Percentage");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](124, "div", 42)(125, "div", 43)(126, "h4", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](127);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](128, "div", 50)(129, "div", 51)(130, "div", 52)(131, "div", 28)(132, "div", 53)(133, "div")(134, "label", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](135, "Countries");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](136, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](137, "Countries where visitors are viewing your website");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](138, "div", 14)(139, "div", 17)(140, "div", 56)(141, "div", 57)(142, "div")(143, "label", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](144, "Visitor Statistics");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](145, "span", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](146, "Visit count against the average click per session - monthly analysis");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](147, "div", 58)(148, "div", 59)(149, "div", 60)(150, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](151, "canvas", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](152, "div", 63)(153, "div", 27)(154, "div", 64)(155, "div", 29)(156, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](157, "svg", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](158, "path", 47)(159, "path", 48)(160, "path", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](161, "div", 65)(162, "label", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](163, "Today");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](164, "span", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](165);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](166, "div", 27)(167, "div", 28)(168, "div", 14)(169, "div", 66)(170, "div", 67)(171, "label", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](172, "Total Jobs");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](173, "span", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](174, "23 jobs or event launched");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](175, "p", 69)(176, "b", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](177, "2 in Today ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](178, "a", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](179, "12 active as at 12 Monday, Oct 2020 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](180, "div", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](181, "img", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.static == null ? null : ctx.static.today_visits);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx.percentage_change, "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.static == null ? null : ctx.static.previous_month_visits);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.static == null ? null : ctx.static.current_month_visits);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx.percentage_change, "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("legend", ctx.lineChartLegend)("type", ctx.lineChartType);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.formatToday());
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, ng2_charts__WEBPACK_IMPORTED_MODULE_10__.BaseChartDirective],
  styles: [".forth.circle svg {\n  margin: 0 auto;\n  display: block;\n  max-width: 100%;\n  max-height: 100%;\n}\n  .btn-primary:hover {\n  color: #fff !important;\n  background-color: #403fad !important;\n  border-color: #403fad !important;\n}\n  .dropdown-menu-right.dropdown-menu {\n  transform: translate(-101px, 40px) !important;\n}\n  .dropdown-menu {\n  z-index: 9 !important;\n}\n\n.ml-auto.show.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  transform: translate(-120px, 40px) !important;\n}\n\n.beautiful-card[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  min-height: 350px;\n  background: linear-gradient(to bottom, rgba(83, 105, 248, 0.6), rgba(37, 35, 59, 0.9)), url('dashboard.jpg');\n  background-size: cover;\n  color: white !important;\n}\n.beautiful-card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .beautiful-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRFo7QUFLSTtFQUNJLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQ0FBQTtBQUhSO0FBTUk7RUFDSSw2Q0FBQTtBQUpSO0FBT0k7RUFDSSxxQkFBQTtBQUxSOztBQVVBO0VBQ0ksNkNBQUE7QUFQSjs7QUFVQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0R0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFQSjtBQVNJOztFQUVJLHVCQUFBO0FBUFIiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gICAgLmZvcnRoLmNpcmNsZSB7XHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idG4tcHJpbWFyeTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDAzZmFkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjNDAzZmFkICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmRyb3Bkb3duLW1lbnUtcmlnaHQuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMXB4LCA0MHB4KSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgICB6LWluZGV4OiA5ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4ubWwtYXV0by5zaG93LmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMjBweCwgNDBweCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJlYXV0aWZ1bC1jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDgzLCAxMDUsIDI0OCwgMC42KSwgcmdiKDM3LCAzNSwgNTksIDAuOSkpLCB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL21lZGlhL2Rhc2hib2FyZC5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgbGFiZWwsXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 18062:
/*!******************************************************!*\
  !*** ./src/app/components/maps/map/map.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapComponent: () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ 50658);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var leaflet_geosearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet-geosearch */ 19464);
var _class;


// import "leaflet/dist/leaflet.css";


class MapComponent {
  constructor() {
    this.inputModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.location = {
      x: -3.9747177,
      y: 56.1187003,
      label: 'Dumbarton, Stiling City, Scotland'
    };
  }
  ngOnInit() {
    this.initMap();
    // console.log("Map Initialized here");
  }

  ngAfterViewInit() {
    // this.tracking.subscribe(v => { 
    //   switch(v.key){
    //       case "status":
    //         if(v.value){
    //           // setTimeout(() => this.initMap(), 200);
    //         }
    //       break;
    //       case "address":
    //           if(v.value){
    //               console.log("Address Entered:", v.value)
    //               this.address = v.value;
    //               setTimeout(() => this.initMap(), 200);
    //           }
    //       break;
    //   }
    // });
  }
  initMap() {
    // refresh map id
    document.getElementById("contain-map").innerHTML = `<div id='map' style='width: 100%; height: 100%;'></div>`;
    // init map
    const map = leaflet__WEBPACK_IMPORTED_MODULE_0__.map("map", {
      // Set latitude and longitude of the map center (required)
      center: [this.location.y, this.location.x],
      // Set the initial zoom level, values 0-18, where 0 is most zoomed-out (required)
      zoom: 13
    });
    // add icon
    leaflet__WEBPACK_IMPORTED_MODULE_0__.icon({
      iconUrl: "http://icons.iconarchive.com/icons/icons-land/vista-map-markers/24/Map-Marker-Marker-Outside-Chartreuse-icon.png",
      // shadowUrl: 'assets/images/icons/Blank.png',
      iconSize: [25, 41],
      // shadowSize:   [50, 64], // size of the shadow
      iconAnchor: [9, 40],
      // shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor: [0, -40] // point from which the popup should open relative to the iconAnchor
    });

    leaflet__WEBPACK_IMPORTED_MODULE_0__.control.scale().addTo(map);
    // Create a Tile Layer and add it to the map
    leaflet__WEBPACK_IMPORTED_MODULE_0__.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="http://osm.org/copyright"></a> contributors'
    }).addTo(map);
    // add search control https://github.com/smeijer/leaflet-geosearch
    const provider = new leaflet_geosearch__WEBPACK_IMPORTED_MODULE_1__.OpenStreetMapProvider();
    const searchControl = (0,leaflet_geosearch__WEBPACK_IMPORTED_MODULE_1__.GeoSearchControl)({
      provider: provider,
      autoClose: true
    });
    // map.addControl(searchControl);
    /**
     * Set address on the map
     */
    this.getAddress(provider, map);
    // popover
    // let marker = L.marker([this.location.y, this.location.x], { draggable: true })
    //   .addTo(map)
    //   // .bindPopup(this.location.label)
    //   .openPopup();
    //   marker.on('click', function(e) {
    //     alert("Label clicked!");
    //  })
    // handler
    // map.on("geosearch/showlocation", e => {
    //   if (this.marker) {
    //     // check
    //     map.removeLayer(this.marker); // remove
    //   }
    //   this.marker = new L.Marker([e.location.y, e.location.x], { draggable: true })
    //     .addTo(map)
    //     .bindPopup(e.location.label)
    //     .openPopup();
    // });
    let $this = this;
    map.on('click', function (e) {
      // console.log(e.location.label)
      $this.onChange(e);
      // $this.inputModel = $this.latlng;
      if (this.marker) {
        // check
        map.removeLayer(this.marker); // remove
      }
      // this.marker = new L.Marker(e.latlng, { draggable: true })
      // .addTo(map)
      // // .bindPopup('<p>New Location Selected</p>')
      // .openPopup();
      // var popLocation= e.latlng;
      // var popup = L.popup()
      // .setLatLng(popLocation)
      // .setContent('<p>Hello world!<br />This is a nice popup.</p>')
      // .openOn(map);        
    });
  }

  onChange(e) {
    let data = e.latlng;
    console.log(e);
    this.inputModelChange.emit(data);
  }
  getAddress(provider, map) {
    if (this.address) {
      var query_promise = provider.search({
        query: `${this.address}`
      });
      console.log(this.address, query_promise);
      query_promise.then(value => {
        for (let i = 0; i < value.length; i++) {
          var x_coor = value[i].x;
          var y_coor = value[i].y;
          var label = value[i].label;
          // Create a marker for the found coordinates
          this.marker = leaflet__WEBPACK_IMPORTED_MODULE_0__.marker([y_coor, x_coor], {
            draggable: true
          }).addTo(map); // CAREFULL!!! The first position corresponds to the lat (y) and the second to the lon (x)
          // Add a popup to said marker with the address found by geosearch (not the one from the user)
          this.marker.bindPopup("<b>Found location</b><br>" + label).openPopup();
          /**
           * Emit event change to parent view
           */
          this.onChange({
            latlng: {
              lat: y_coor,
              lng: x_coor
            }
          });
          break;
        }
        ;
      }, reason => {
        console.log(reason); // Error!
      });
    }
  }
}
_class = MapComponent;
_class.ɵfac = function MapComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-mapx"]],
  inputs: {
    tracking: "tracking",
    inputModel: "inputModel"
  },
  outputs: {
    inputModelChange: "inputModelChange"
  },
  decls: 2,
  vars: 0,
  consts: [[1, "container"], ["id", "contain-map", 1, "m-auto", 2, "position", "relative", "height", "380px", "width", "100% !important"]],
  template: function MapComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
  },
  styles: [".leaflet-layer[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYXBzL21hcC9tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIubGVhZmxldC1sYXllciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlOyBcbiAgICBoZWlnaHQ6IDEwMCU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 16009:
/*!******************************************!*\
  !*** ./src/app/shared/data/dashboard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   barChartColors: () => (/* binding */ barChartColors),
/* harmony export */   barChartData: () => (/* binding */ barChartData),
/* harmony export */   barChartLabels: () => (/* binding */ barChartLabels),
/* harmony export */   barChartOptions: () => (/* binding */ barChartOptions),
/* harmony export */   barChartType: () => (/* binding */ barChartType),
/* harmony export */   lineChartData: () => (/* binding */ lineChartData),
/* harmony export */   lineChartLabels: () => (/* binding */ lineChartLabels),
/* harmony export */   lineChartLegend: () => (/* binding */ lineChartLegend),
/* harmony export */   lineChartOptions: () => (/* binding */ lineChartOptions),
/* harmony export */   lineChartType: () => (/* binding */ lineChartType)
/* harmony export */ });
//import { Color, Label } from 'ng2-charts';
//Chart js
let lineChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false
  },
  hover: {
    mode: 'nearest',
    intersect: true
  },
  scales: {
    xAxess: [{
      ticks: {
        reverse: false,
        fontColor: '#c8ccdb'
      },
      display: true,
      gridLines: {
        color: 'rgba(119, 119, 142, 0.2)',
        zeroLineColor: 'rgba(119, 119, 142, 0.2)'
      }
    }],
    yAxes: [{
      ticks: {
        fontColor: '#77778e',
        min: 0,
        max: 1050,
        stepSize: 150
      },
      display: true,
      gridLines: {
        color: 'rgba(119, 119, 142, 0.2)',
        zeroLineColor: 'rgba(119, 119, 142, 0.2)'
      },
      scaleLabel: {
        display: true,
        labelString: 'Thousands',
        fontColor: 'transparent'
      }
    }]
  },
  legend: {
    display: true,
    labels: {
      fontColor: '#77778e'
    }
  }
};
let lineChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Aug', 'Sep', 'Oct'];
let lineChartType = 'line';
let lineChartLegend = true;
let lineChartData = [{
  label: 'TOTAL JOBS',
  data: [100, 210, 180, 454, 454, 230, 230, 656, 656, 350, 350, 210, 410],
  borderWidth: 3,
  backgroundColor: 'transparent',
  borderColor: '#4A93FE',
  pointBackgroundColor: '#ffffff',
  pointRadius: 0
}, {
  label: 'USERS',
  data: [200, 530, 110, 110, 480, 520, 780, 435, 475, 738, 454, 454, 230],
  borderWidth: 3,
  backgroundColor: 'transparent',
  borderColor: 'rgb(183, 179, 220,0.5)',
  pointBackgroundColor: '#ffffff',
  pointRadius: 0,
  borderDash: [7, 3]
}];
//Bar Charts
let barChartOptions = {
  maintainAspectRatio: false,
  aspectRatio: 6,
  responsive: true,
  legend: {
    position: 'bottom',
    display: false
  },
  tooltips: {
    displayColors: true
  },
  scales: {
    xAxes: [{
      stacked: true,
      display: false,
      gridLines: {
        display: false
      }
    }],
    yAxes: [{
      stacked: true,
      ticks: {
        beginAtZero: false
      },
      display: false,
      gridLines: {
        display: false
      },
      type: 'linear'
    }]
  }
};
let barChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
let barChartType = 'bar';
let barChartData = [{
  label: 'Total Project',
  backgroundColor: '#4A93FE',
  borderColor: '#4A93FE',
  data: [89, 59, 76, 56, 58, 73, 59, 87, 45, 54, 59, 76, 56],
  barThickness: 6,
  barPercentage: 4,
  categoryPercentage: 4
}, {
  label: 'On Going',
  backgroundColor: "rgba(204, 204, 204,0.2)",
  borderColor: "rgba(204, 204, 204,0.2)",
  data: [66, 59, 76, 56, 58, 65, 59, 85, 23, 32, 59, 76, 56],
  barThickness: 6,
  barPercentage: 4,
  categoryPercentage: 4
}];
let barChartColors = [{
  backgroundColor: '#4A93FE',
  borderColor: '#4A93FE'
}, {
  backgroundColor: "rgba(204, 204, 204,0.2)",
  borderColor: "rgba(204, 204, 204,0.2)"
}];

/***/ }),

/***/ 8389:
/*!****************************************************!*\
  !*** ./src/app/shared/services/chat/chat.model.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chat: () => (/* binding */ Chat)
/* harmony export */ });
class Chat {
  constructor() {
    this.message = "";
  }
}

/***/ }),

/***/ 15128:
/*!******************************************************!*\
  !*** ./src/app/shared/services/chat/chat.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatService: () => (/* binding */ ChatService)
/* harmony export */ });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ 28509);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 40803);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 30240);
/* harmony import */ var _chat_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.model */ 8389);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ 57337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ 19483);
var _class;






class ChatService {
  constructor(authService) {
    this.authService = authService;
    this.url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__.environment.socket;
    this.data = new Payload();
    this.transact = new Transacts();
    this.socketExceptions = () => {
      this.socket.on('connect_error', function (err) {
        // handle server error here
        console.log('Error connecting to server');
      });
    };
    try {
      this.socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)(this.url, {
        transports: ['websocket', 'polling', 'flashsocket']
      });
      // this.socket = io(this.url);
    } catch (e) {}
    /**
     * Set the user ID as the target of the message
     */
    this.transact.sourceid = "";
    this.payload();
  }
  getIdentifier() {
    return this.authService.identifier();
  }
  history(sourceid, targetid, is_group, broadcaster = "") {
    try {
      this.data.sourceid = sourceid;
      this.data.targetid = targetid;
      this.data.message = "load_history";
      this.data.is_group = is_group;
      this.socket.emit(broadcaster, this.data);
    } catch (e) {}
  }
  send(message, source = "", target = "", channel = null, is_group = 0, broadcaster = 'broadcaster') {
    try {
      this.data.sourceid = source;
      this.data.targetid = target;
      this.data.message = message;
      this.data.is_group = is_group;
      this.data.channel = channel;
      console.log("Payload--->", this.data);
      this.socket.emit(broadcaster, this.data);
    } catch (e) {}
  }
  sendTask(data) {
    try {
      this.socket.emit("calendar_event_listener", data);
    } catch (e) {}
  }
  listener() {
    this.socket.on("web_target_update", message => {
      console.log("trying ", message);
    });
  }
  disconnect(target) {
    this.socket.off(target, function (data) {});
    this.socket.removeAllListeners(target);
  }
  _connect(target) {
    let observable = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable(observer => {
      this.socket.on(target, function (data) {
        // console.log("Received message from Websocket Server")
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    // We define our Observer which will listen to messages
    let observer = {
      next: data => {
        this.socket.emit('web_target_update', JSON.stringify(data));
      }
    };
    return rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject.create(observer, observable);
  }
  connect(target) {
    return rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable.create(observer => {
      this.socket.on(target, function (data) {
        // console.log("Received message from Websocket Server")
        observer.next(data);
      });
    });
  }
  payload() {
    let user = this.authService.currentUser();
    console.log("User check::", user);
    return this.data;
  }
}
_class = ChatService;
_class.ɵfac = function ChatService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});
class Transacts {
  constructor() {
    this.sourceid = 'xxtest1'; //this app id
    this.targetid = 'yytest1'; //where message goes to. it will by dynamic
  }
}

class Payload extends _chat_model__WEBPACK_IMPORTED_MODULE_1__.Chat {}

/***/ }),

/***/ 40432:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/statistics.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatisticsService: () => (/* binding */ StatisticsService)
/* harmony export */ });
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.service */ 57473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;


class StatisticsService extends _app_service__WEBPACK_IMPORTED_MODULE_0__.AppService {
  all(target, callback) {
    this.get(`cms/statistics/${target}`, {}).subscribe(response => {
      let status = false;
      if (response.status == "success") {
        status = true;
      }
      callback(response.data, status);
    }, error => callback(error, false));
  }
}
_class = StatisticsService;
_class.ɵfac = /*@__PURE__*/function () {
  let ɵStatisticsService_BaseFactory;
  return function StatisticsService_Factory(t) {
    return (ɵStatisticsService_BaseFactory || (ɵStatisticsService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](_class)))(t || _class);
  };
}();
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 55613:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/users/user.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.service */ 57473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;


class UserService extends _app_service__WEBPACK_IMPORTED_MODULE_0__.AppService {
  all(callback) {
    this.get(`user/list`, {}).subscribe(response => {
      let status = false;
      if (response.status == "success") {
        status = true;
      }
      callback(response.data, status);
    }, error => callback(error, false));
  }
  availability(callback) {
    this.get(`fetch/job/availability/list/all`, {}).subscribe(response => {
      let status = false;
      if (response.status == "success") {
        status = true;
      }
      callback(response.data, status);
    }, error => callback(error, false));
  }
  send(target, options, callback) {
    this.post(`auth/admin/${target}`, options).subscribe(response => {
      let status = false;
      if (response.status == "success") {
        status = true;
      }
      callback(response.data, status);
    }, error => callback(error, false));
  }
  delete(id, callback) {
    this.get(`auth/admin/delete/${id}`, {}).subscribe(response => {
      let status = false;
      if (response.status == "success") {
        status = true;
      }
      callback(response.data, status);
    }, error => callback(error, false));
  }
}
_class = UserService;
_class.ɵfac = /*@__PURE__*/function () {
  let ɵUserService_BaseFactory;
  return function UserService_Factory(t) {
    return (ɵUserService_BaseFactory || (ɵUserService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](_class)))(t || _class);
  };
}();
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 135:
/*!*************************************************************!*\
  !*** ./node_modules/@socket.io/component-emitter/index.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Emitter: () => (/* binding */ Emitter)
/* harmony export */ });
/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }
  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = new Array(arguments.length - 1),
    callbacks = this._callbacks['$' + event];
  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }
  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }
  return this;
};

// alias used for reserved events (protected method)
Emitter.prototype.emitReserved = Emitter.prototype.emit;

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};

/***/ }),

/***/ 6690:
/*!*********************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/contrib/has-cors.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasCORS: () => (/* binding */ hasCORS)
/* harmony export */ });
// imported from https://github.com/component/has-cors
let value = false;
try {
  value = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
}
const hasCORS = value;

/***/ }),

/***/ 92432:
/*!********************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/contrib/parseqs.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decode: () => (/* binding */ decode),
/* harmony export */   encode: () => (/* binding */ encode)
/* harmony export */ });
// imported from https://github.com/galkn/querystring
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */
function encode(obj) {
  let str = '';
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }
  return str;
}
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */
function decode(qs) {
  let qry = {};
  let pairs = qs.split('&');
  for (let i = 0, l = pairs.length; i < l; i++) {
    let pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
}

/***/ }),

/***/ 40463:
/*!*********************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/contrib/parseuri.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parse: () => (/* binding */ parse)
/* harmony export */ });
// imported from https://github.com/galkn/parseuri
/**
 * Parses a URI
 *
 * Note: we could also have used the built-in URL object, but it isn't supported on all platforms.
 *
 * See:
 * - https://developer.mozilla.org/en-US/docs/Web/API/URL
 * - https://caniuse.com/url
 * - https://www.rfc-editor.org/rfc/rfc3986#appendix-B
 *
 * History of the parse() method:
 * - first commit: https://github.com/socketio/socket.io-client/commit/4ee1d5d94b3906a9c052b459f1a818b15f38f91c
 * - export into its own module: https://github.com/socketio/engine.io-client/commit/de2c561e4564efeb78f1bdb1ba39ef81b2822cb3
 * - reimport: https://github.com/socketio/engine.io-client/commit/df32277c3f6d622eec5ed09f493cae3f3391d242
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */
const re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
const parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];
function parse(str) {
  const src = str,
    b = str.indexOf('['),
    e = str.indexOf(']');
  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
  }
  let m = re.exec(str || ''),
    uri = {},
    i = 14;
  while (i--) {
    uri[parts[i]] = m[i] || '';
  }
  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
    uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
    uri.ipv6uri = true;
  }
  uri.pathNames = pathNames(uri, uri['path']);
  uri.queryKey = queryKey(uri, uri['query']);
  return uri;
}
function pathNames(obj, path) {
  const regx = /\/{2,9}/g,
    names = path.replace(regx, "/").split("/");
  if (path.slice(0, 1) == '/' || path.length === 0) {
    names.splice(0, 1);
  }
  if (path.slice(-1) == '/') {
    names.splice(names.length - 1, 1);
  }
  return names;
}
function queryKey(uri, query) {
  const data = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
    if ($1) {
      data[$1] = $2;
    }
  });
  return data;
}

/***/ }),

/***/ 239:
/*!******************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/contrib/yeast.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decode: () => (/* binding */ decode),
/* harmony export */   encode: () => (/* binding */ encode),
/* harmony export */   yeast: () => (/* binding */ yeast)
/* harmony export */ });
// imported from https://github.com/unshiftio/yeast


const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
  length = 64,
  map = {};
let seed = 0,
  i = 0,
  prev;
/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
  let encoded = '';
  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);
  return encoded;
}
/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */
function decode(str) {
  let decoded = 0;
  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }
  return decoded;
}
/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
  const now = encode(+new Date());
  if (now !== prev) return seed = 0, prev = now;
  return now + '.' + encode(seed++);
}
//
// Map each character to its index.
//
for (; i < length; i++) map[alphabet[i]] = i;

/***/ }),

/***/ 22536:
/*!***********************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/globalThis.browser.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   globalThisShim: () => (/* binding */ globalThisShim)
/* harmony export */ });
const globalThisShim = (() => {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})();

/***/ }),

/***/ 77884:
/*!**********************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Socket: () => (/* reexport safe */ _socket_js__WEBPACK_IMPORTED_MODULE_0__.Socket),
/* harmony export */   Transport: () => (/* reexport safe */ _transport_js__WEBPACK_IMPORTED_MODULE_1__.Transport),
/* harmony export */   installTimerFunctions: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_3__.installTimerFunctions),
/* harmony export */   nextTick: () => (/* reexport safe */ _transports_websocket_constructor_js__WEBPACK_IMPORTED_MODULE_5__.nextTick),
/* harmony export */   parse: () => (/* reexport safe */ _contrib_parseuri_js__WEBPACK_IMPORTED_MODULE_4__.parse),
/* harmony export */   protocol: () => (/* binding */ protocol),
/* harmony export */   transports: () => (/* reexport safe */ _transports_index_js__WEBPACK_IMPORTED_MODULE_2__.transports)
/* harmony export */ });
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socket.js */ 91222);
/* harmony import */ var _transport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transport.js */ 19264);
/* harmony import */ var _transports_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transports/index.js */ 97701);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util.js */ 95145);
/* harmony import */ var _contrib_parseuri_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contrib/parseuri.js */ 40463);
/* harmony import */ var _transports_websocket_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transports/websocket-constructor.js */ 42703);


const protocol = _socket_js__WEBPACK_IMPORTED_MODULE_0__.Socket.protocol;






/***/ }),

/***/ 91222:
/*!***********************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/socket.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Socket: () => (/* binding */ Socket)
/* harmony export */ });
/* harmony import */ var _transports_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transports/index.js */ 97701);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ 95145);
/* harmony import */ var _contrib_parseqs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contrib/parseqs.js */ 92432);
/* harmony import */ var _contrib_parseuri_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contrib/parseuri.js */ 40463);
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @socket.io/component-emitter */ 135);
/* harmony import */ var engine_io_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! engine.io-parser */ 6176);
/* harmony import */ var _transports_websocket_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transports/websocket-constructor.js */ 42703);







class Socket extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_4__.Emitter {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(uri, opts = {}) {
    super();
    this.binaryType = _transports_websocket_constructor_js__WEBPACK_IMPORTED_MODULE_6__.defaultBinaryType;
    this.writeBuffer = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = null;
    }
    if (uri) {
      uri = (0,_contrib_parseuri_js__WEBPACK_IMPORTED_MODULE_3__.parse)(uri);
      opts.hostname = uri.host;
      opts.secure = uri.protocol === "https" || uri.protocol === "wss";
      opts.port = uri.port;
      if (uri.query) opts.query = uri.query;
    } else if (opts.host) {
      opts.hostname = (0,_contrib_parseuri_js__WEBPACK_IMPORTED_MODULE_3__.parse)(opts.host).host;
    }
    (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.installTimerFunctions)(this, opts);
    this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
    if (opts.hostname && !opts.port) {
      // if no port is specified manually, use the protocol default
      opts.port = this.secure ? "443" : "80";
    }
    this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
    this.transports = opts.transports || ["polling", "websocket", "webtransport"];
    this.writeBuffer = [];
    this.prevBufferLen = 0;
    this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      timestampParam: "t",
      rememberUpgrade: false,
      addTrailingSlash: true,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: false
    }, opts);
    this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
    if (typeof this.opts.query === "string") {
      this.opts.query = (0,_contrib_parseqs_js__WEBPACK_IMPORTED_MODULE_2__.decode)(this.opts.query);
    }
    // set on handshake
    this.id = null;
    this.upgrades = null;
    this.pingInterval = null;
    this.pingTimeout = null;
    // set on heartbeat
    this.pingTimeoutTimer = null;
    if (typeof addEventListener === "function") {
      if (this.opts.closeOnBeforeunload) {
        // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
        // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
        // closed/reloaded)
        this.beforeunloadEventListener = () => {
          if (this.transport) {
            // silently close the transport
            this.transport.removeAllListeners();
            this.transport.close();
          }
        };
        addEventListener("beforeunload", this.beforeunloadEventListener, false);
      }
      if (this.hostname !== "localhost") {
        this.offlineEventListener = () => {
          this.onClose("transport close", {
            description: "network connection lost"
          });
        };
        addEventListener("offline", this.offlineEventListener, false);
      }
    }
    this.open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(name) {
    const query = Object.assign({}, this.opts.query);
    // append engine.io protocol identifier
    query.EIO = engine_io_parser__WEBPACK_IMPORTED_MODULE_5__.protocol;
    // transport name
    query.transport = name;
    // session id if we already have one
    if (this.id) query.sid = this.id;
    const opts = Object.assign({}, this.opts, {
      query,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[name]);
    return new _transports_index_js__WEBPACK_IMPORTED_MODULE_0__.transports[name](opts);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let transport;
    if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
      transport = "websocket";
    } else if (0 === this.transports.length) {
      // Emit error on next tick so it can be listened to
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else {
      transport = this.transports[0];
    }
    this.readyState = "opening";
    // Retry with the next transport if the transport is disabled (jsonp: false)
    try {
      transport = this.createTransport(transport);
    } catch (e) {
      this.transports.shift();
      this.open();
      return;
    }
    transport.open();
    this.setTransport(transport);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(transport) {
    if (this.transport) {
      this.transport.removeAllListeners();
    }
    // set up transport
    this.transport = transport;
    // set up transport listeners
    transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", reason => this.onClose("transport close", reason));
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  probe(name) {
    let transport = this.createTransport(name);
    let failed = false;
    Socket.priorWebsocketSuccess = false;
    const onTransportOpen = () => {
      if (failed) return;
      transport.send([{
        type: "ping",
        data: "probe"
      }]);
      transport.once("packet", msg => {
        if (failed) return;
        if ("pong" === msg.type && "probe" === msg.data) {
          this.upgrading = true;
          this.emitReserved("upgrading", transport);
          if (!transport) return;
          Socket.priorWebsocketSuccess = "websocket" === transport.name;
          this.transport.pause(() => {
            if (failed) return;
            if ("closed" === this.readyState) return;
            cleanup();
            this.setTransport(transport);
            transport.send([{
              type: "upgrade"
            }]);
            this.emitReserved("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          const err = new Error("probe error");
          // @ts-ignore
          err.transport = transport.name;
          this.emitReserved("upgradeError", err);
        }
      });
    };
    function freezeTransport() {
      if (failed) return;
      // Any callback called by transport should be ignored since now
      failed = true;
      cleanup();
      transport.close();
      transport = null;
    }
    // Handle any error that happens while probing
    const onerror = err => {
      const error = new Error("probe error: " + err);
      // @ts-ignore
      error.transport = transport.name;
      freezeTransport();
      this.emitReserved("upgradeError", error);
    };
    function onTransportClose() {
      onerror("transport closed");
    }
    // When the socket is closed while we're probing
    function onclose() {
      onerror("socket closed");
    }
    // When the socket is upgraded while we're probing
    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        freezeTransport();
      }
    }
    // Remove all listeners on the transport and on self
    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.off("close", onclose);
      this.off("upgrading", onupgrade);
    };
    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);
    this.once("close", onclose);
    this.once("upgrading", onupgrade);
    if (this.upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") {
      // favor WebTransport
      this.setTimeoutFn(() => {
        if (!failed) {
          transport.open();
        }
      }, 200);
    } else {
      transport.open();
    }
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open";
    Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
    this.emitReserved("open");
    this.flush();
    // we check for `readyState` in case an `open`
    // listener already closed the socket
    if ("open" === this.readyState && this.opts.upgrade) {
      let i = 0;
      const l = this.upgrades.length;
      for (; i < l; i++) {
        this.probe(this.upgrades[i]);
      }
    }
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  onPacket(packet) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.emitReserved("packet", packet);
      // Socket is live - any packet counts
      this.emitReserved("heartbeat");
      this.resetPingTimeout();
      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;
        case "ping":
          this.sendPacket("pong");
          this.emitReserved("ping");
          this.emitReserved("pong");
          break;
        case "error":
          const err = new Error("server error");
          // @ts-ignore
          err.code = packet.data;
          this.onError(err);
          break;
        case "message":
          this.emitReserved("data", packet.data);
          this.emitReserved("message", packet.data);
          break;
      }
    } else {}
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(data) {
    this.emitReserved("handshake", data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this.upgrades = this.filterUpgrades(data.upgrades);
    this.pingInterval = data.pingInterval;
    this.pingTimeout = data.pingTimeout;
    this.maxPayload = data.maxPayload;
    this.onOpen();
    // In case open handler closes socket
    if ("closed" === this.readyState) return;
    this.resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer);
    this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout);
    if (this.opts.autoUnref) {
      this.pingTimeoutTimer.unref();
    }
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen);
    // setting prevBufferLen = 0 is very important
    // for example, when upgrading, upgrade packet is sent over,
    // and a nonzero prevBufferLen could cause problems on `drain`
    this.prevBufferLen = 0;
    if (0 === this.writeBuffer.length) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const packets = this.getWritablePackets();
      this.transport.send(packets);
      // keep track of current length of writeBuffer
      // splice writeBuffer and callbackBuffer on `drain`
      this.prevBufferLen = packets.length;
      this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  getWritablePackets() {
    const shouldCheckPayloadSize = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
    if (!shouldCheckPayloadSize) {
      return this.writeBuffer;
    }
    let payloadSize = 1; // first packet type
    for (let i = 0; i < this.writeBuffer.length; i++) {
      const data = this.writeBuffer[i].data;
      if (data) {
        payloadSize += (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.byteLength)(data);
      }
      if (i > 0 && payloadSize > this.maxPayload) {
        return this.writeBuffer.slice(0, i);
      }
      payloadSize += 2; // separator + packet type
    }

    return this.writeBuffer;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} callback function.
   * @return {Socket} for chaining.
   */
  write(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  send(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  sendPacket(type, data, options, fn) {
    if ("function" === typeof data) {
      fn = data;
      data = undefined;
    }
    if ("function" === typeof options) {
      fn = options;
      options = null;
    }
    if ("closing" === this.readyState || "closed" === this.readyState) {
      return;
    }
    options = options || {};
    options.compress = false !== options.compress;
    const packet = {
      type: type,
      data: data,
      options: options
    };
    this.emitReserved("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn) this.once("flush", fn);
    this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const close = () => {
      this.onClose("forced close");
      this.transport.close();
    };
    const cleanupAndClose = () => {
      this.off("upgrade", cleanupAndClose);
      this.off("upgradeError", cleanupAndClose);
      close();
    };
    const waitForUpgrade = () => {
      // wait for upgrade to finish since we can't send packets while pausing a transport
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.readyState = "closing";
      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }
    return this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  onError(err) {
    Socket.priorWebsocketSuccess = false;
    this.emitReserved("error", err);
    this.onClose("transport error", err);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  onClose(reason, description) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      // clear timers
      this.clearTimeoutFn(this.pingTimeoutTimer);
      // stop event from firing again for transport
      this.transport.removeAllListeners("close");
      // ensure transport won't stay open
      this.transport.close();
      // ignore further transport communication
      this.transport.removeAllListeners();
      if (typeof removeEventListener === "function") {
        removeEventListener("beforeunload", this.beforeunloadEventListener, false);
        removeEventListener("offline", this.offlineEventListener, false);
      }
      // set ready state
      this.readyState = "closed";
      // clear session id
      this.id = null;
      // emit close event
      this.emitReserved("close", reason, description);
      // clean buffers after, so users can still
      // grab the buffers on `close` event
      this.writeBuffer = [];
      this.prevBufferLen = 0;
    }
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    let i = 0;
    const j = upgrades.length;
    for (; i < j; i++) {
      if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
    }
    return filteredUpgrades;
  }
}
Socket.protocol = engine_io_parser__WEBPACK_IMPORTED_MODULE_5__.protocol;

/***/ }),

/***/ 19264:
/*!**************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/transport.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Transport: () => (/* binding */ Transport)
/* harmony export */ });
/* harmony import */ var engine_io_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine.io-parser */ 6176);
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @socket.io/component-emitter */ 135);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.js */ 95145);
/* harmony import */ var _contrib_parseqs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contrib/parseqs.js */ 92432);




class TransportError extends Error {
  constructor(reason, description, context) {
    super(reason);
    this.description = description;
    this.context = context;
    this.type = "TransportError";
  }
}
class Transport extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_1__.Emitter {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(opts) {
    super();
    this.writable = false;
    (0,_util_js__WEBPACK_IMPORTED_MODULE_2__.installTimerFunctions)(this, opts);
    this.opts = opts;
    this.query = opts.query;
    this.socket = opts.socket;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(reason, description, context) {
    super.emitReserved("error", new TransportError(reason, description, context));
    return this;
  }
  /**
   * Opens the transport.
   */
  open() {
    this.readyState = "opening";
    this.doOpen();
    return this;
  }
  /**
   * Closes the transport.
   */
  close() {
    if (this.readyState === "opening" || this.readyState === "open") {
      this.doClose();
      this.onClose();
    }
    return this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(packets) {
    if (this.readyState === "open") {
      this.write(packets);
    } else {
      // this might happen if the transport was silently closed in the beforeunload event handler
    }
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open";
    this.writable = true;
    super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(data) {
    const packet = (0,engine_io_parser__WEBPACK_IMPORTED_MODULE_0__.decodePacket)(data, this.socket.binaryType);
    this.onPacket(packet);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(packet) {
    super.emitReserved("packet", packet);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(details) {
    this.readyState = "closed";
    super.emitReserved("close", details);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(onPause) {}
  createUri(schema, query = {}) {
    return schema + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
  }
  _hostname() {
    const hostname = this.opts.hostname;
    return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
  }
  _port() {
    if (this.opts.port && (this.opts.secure && Number(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80)) {
      return ":" + this.opts.port;
    } else {
      return "";
    }
  }
  _query(query) {
    const encodedQuery = (0,_contrib_parseqs_js__WEBPACK_IMPORTED_MODULE_3__.encode)(query);
    return encodedQuery.length ? "?" + encodedQuery : "";
  }
}

/***/ }),

/***/ 97701:
/*!*********************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/transports/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transports: () => (/* binding */ transports)
/* harmony export */ });
/* harmony import */ var _polling_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polling.js */ 9031);
/* harmony import */ var _websocket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./websocket.js */ 85102);
/* harmony import */ var _webtransport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webtransport.js */ 62630);



const transports = {
  websocket: _websocket_js__WEBPACK_IMPORTED_MODULE_1__.WS,
  webtransport: _webtransport_js__WEBPACK_IMPORTED_MODULE_2__.WT,
  polling: _polling_js__WEBPACK_IMPORTED_MODULE_0__.Polling
};

/***/ }),

/***/ 9031:
/*!***********************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/transports/polling.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Polling: () => (/* binding */ Polling),
/* harmony export */   Request: () => (/* binding */ Request)
/* harmony export */ });
/* harmony import */ var _transport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transport.js */ 19264);
/* harmony import */ var _contrib_yeast_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contrib/yeast.js */ 239);
/* harmony import */ var engine_io_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine.io-parser */ 6176);
/* harmony import */ var _xmlhttprequest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xmlhttprequest.js */ 18931);
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @socket.io/component-emitter */ 135);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util.js */ 95145);
/* harmony import */ var _globalThis_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../globalThis.js */ 22536);







function empty() {}
const hasXHR2 = function () {
  const xhr = new _xmlhttprequest_js__WEBPACK_IMPORTED_MODULE_3__.XHR({
    xdomain: false
  });
  return null != xhr.responseType;
}();
class Polling extends _transport_js__WEBPACK_IMPORTED_MODULE_0__.Transport {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(opts) {
    super(opts);
    this.polling = false;
    if (typeof location !== "undefined") {
      const isSSL = "https:" === location.protocol;
      let port = location.port;
      // some user agents have empty `location.port`
      if (!port) {
        port = isSSL ? "443" : "80";
      }
      this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
    }
    /**
     * XHR supports binary
     */
    const forceBase64 = opts && opts.forceBase64;
    this.supportsBinary = hasXHR2 && !forceBase64;
    if (this.opts.withCredentials) {
      this.cookieJar = (0,_xmlhttprequest_js__WEBPACK_IMPORTED_MODULE_3__.createCookieJar)();
    }
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this.poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(onPause) {
    this.readyState = "pausing";
    const pause = () => {
      this.readyState = "paused";
      onPause();
    };
    if (this.polling || !this.writable) {
      let total = 0;
      if (this.polling) {
        total++;
        this.once("pollComplete", function () {
          --total || pause();
        });
      }
      if (!this.writable) {
        total++;
        this.once("drain", function () {
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  poll() {
    this.polling = true;
    this.doPoll();
    this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(data) {
    const callback = packet => {
      // if its the first message we consider the transport open
      if ("opening" === this.readyState && packet.type === "open") {
        this.onOpen();
      }
      // if its a close packet, we close the ongoing requests
      if ("close" === packet.type) {
        this.onClose({
          description: "transport closed by the server"
        });
        return false;
      }
      // otherwise bypass onData and handle the message
      this.onPacket(packet);
    };
    // decode payload
    (0,engine_io_parser__WEBPACK_IMPORTED_MODULE_2__.decodePayload)(data, this.socket.binaryType).forEach(callback);
    // if an event did not trigger closing
    if ("closed" !== this.readyState) {
      // if we got data we're not polling
      this.polling = false;
      this.emitReserved("pollComplete");
      if ("open" === this.readyState) {
        this.poll();
      } else {}
    }
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const close = () => {
      this.write([{
        type: "close"
      }]);
    };
    if ("open" === this.readyState) {
      close();
    } else {
      // in case we're trying to close while
      // handshaking is in progress (GH-164)
      this.once("open", close);
    }
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(packets) {
    this.writable = false;
    (0,engine_io_parser__WEBPACK_IMPORTED_MODULE_2__.encodePayload)(packets, data => {
      this.doWrite(data, () => {
        this.writable = true;
        this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const schema = this.opts.secure ? "https" : "http";
    const query = this.query || {};
    // cache busting is forced
    if (false !== this.opts.timestampRequests) {
      query[this.opts.timestampParam] = (0,_contrib_yeast_js__WEBPACK_IMPORTED_MODULE_1__.yeast)();
    }
    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }
    return this.createUri(schema, query);
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(opts = {}) {
    Object.assign(opts, {
      xd: this.xd,
      cookieJar: this.cookieJar
    }, this.opts);
    return new Request(this.uri(), opts);
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(data, fn) {
    const req = this.request({
      method: "POST",
      data: data
    });
    req.on("success", fn);
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr post error", xhrStatus, context);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr poll error", xhrStatus, context);
    });
    this.pollXhr = req;
  }
}
class Request extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_4__.Emitter {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(uri, opts) {
    super();
    (0,_util_js__WEBPACK_IMPORTED_MODULE_5__.installTimerFunctions)(this, opts);
    this.opts = opts;
    this.method = opts.method || "GET";
    this.uri = uri;
    this.data = undefined !== opts.data ? opts.data : null;
    this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    var _a;
    const opts = (0,_util_js__WEBPACK_IMPORTED_MODULE_5__.pick)(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this.opts.xd;
    const xhr = this.xhr = new _xmlhttprequest_js__WEBPACK_IMPORTED_MODULE_3__.XHR(opts);
    try {
      xhr.open(this.method, this.uri, true);
      try {
        if (this.opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
          for (let i in this.opts.extraHeaders) {
            if (this.opts.extraHeaders.hasOwnProperty(i)) {
              xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
            }
          }
        }
      } catch (e) {}
      if ("POST" === this.method) {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e) {}
      }
      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e) {}
      (_a = this.opts.cookieJar) === null || _a === void 0 ? void 0 : _a.addCookies(xhr);
      // ie6 check
      if ("withCredentials" in xhr) {
        xhr.withCredentials = this.opts.withCredentials;
      }
      if (this.opts.requestTimeout) {
        xhr.timeout = this.opts.requestTimeout;
      }
      xhr.onreadystatechange = () => {
        var _a;
        if (xhr.readyState === 3) {
          (_a = this.opts.cookieJar) === null || _a === void 0 ? void 0 : _a.parseCookies(xhr);
        }
        if (4 !== xhr.readyState) return;
        if (200 === xhr.status || 1223 === xhr.status) {
          this.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          this.setTimeoutFn(() => {
            this.onError(typeof xhr.status === "number" ? xhr.status : 0);
          }, 0);
        }
      };
      xhr.send(this.data);
    } catch (e) {
      // Need to defer since .create() is called directly from the constructor
      // and thus the 'error' event can only be only bound *after* this exception
      // occurs.  Therefore, also, we cannot throw here at all.
      this.setTimeoutFn(() => {
        this.onError(e);
      }, 0);
      return;
    }
    if (typeof document !== "undefined") {
      this.index = Request.requestsCount++;
      Request.requests[this.index] = this;
    }
  }
  /**
   * Called upon error.
   *
   * @private
   */
  onError(err) {
    this.emitReserved("error", err, this.xhr);
    this.cleanup(true);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  cleanup(fromError) {
    if ("undefined" === typeof this.xhr || null === this.xhr) {
      return;
    }
    this.xhr.onreadystatechange = empty;
    if (fromError) {
      try {
        this.xhr.abort();
      } catch (e) {}
    }
    if (typeof document !== "undefined") {
      delete Request.requests[this.index];
    }
    this.xhr = null;
  }
  /**
   * Called upon load.
   *
   * @private
   */
  onLoad() {
    const data = this.xhr.responseText;
    if (data !== null) {
      this.emitReserved("data", data);
      this.emitReserved("success");
      this.cleanup();
    }
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this.cleanup();
  }
}
Request.requestsCount = 0;
Request.requests = {};
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */
if (typeof document !== "undefined") {
  // @ts-ignore
  if (typeof attachEvent === "function") {
    // @ts-ignore
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in _globalThis_js__WEBPACK_IMPORTED_MODULE_6__.globalThisShim ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}
function unloadHandler() {
  for (let i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}

/***/ }),

/***/ 42703:
/*!*********************************************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebSocket: () => (/* binding */ WebSocket),
/* harmony export */   defaultBinaryType: () => (/* binding */ defaultBinaryType),
/* harmony export */   nextTick: () => (/* binding */ nextTick),
/* harmony export */   usingBrowserWebSocket: () => (/* binding */ usingBrowserWebSocket)
/* harmony export */ });
/* harmony import */ var _globalThis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalThis.js */ 22536);

const nextTick = (() => {
  const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
  if (isPromiseAvailable) {
    return cb => Promise.resolve().then(cb);
  } else {
    return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
  }
})();
const WebSocket = _globalThis_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim.WebSocket || _globalThis_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim.MozWebSocket;
const usingBrowserWebSocket = true;
const defaultBinaryType = "arraybuffer";

/***/ }),

/***/ 85102:
/*!*************************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/transports/websocket.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WS: () => (/* binding */ WS)
/* harmony export */ });
/* harmony import */ var _transport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transport.js */ 19264);
/* harmony import */ var _contrib_yeast_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contrib/yeast.js */ 239);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.js */ 95145);
/* harmony import */ var _websocket_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./websocket-constructor.js */ 42703);
/* harmony import */ var engine_io_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! engine.io-parser */ 6176);





// detect ReactNative environment
const isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
class WS extends _transport_js__WEBPACK_IMPORTED_MODULE_0__.Transport {
  /**
   * WebSocket transport constructor.
   *
   * @param {Object} opts - connection options
   * @protected
   */
  constructor(opts) {
    super(opts);
    this.supportsBinary = !opts.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check()) {
      // let probe timeout
      return;
    }
    const uri = this.uri();
    const protocols = this.opts.protocols;
    // React Native only supports the 'headers' option, and will print a warning if anything else is passed
    const opts = isReactNative ? {} : (0,_util_js__WEBPACK_IMPORTED_MODULE_2__.pick)(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }
    try {
      this.ws = _websocket_constructor_js__WEBPACK_IMPORTED_MODULE_3__.usingBrowserWebSocket && !isReactNative ? protocols ? new _websocket_constructor_js__WEBPACK_IMPORTED_MODULE_3__.WebSocket(uri, protocols) : new _websocket_constructor_js__WEBPACK_IMPORTED_MODULE_3__.WebSocket(uri) : new _websocket_constructor_js__WEBPACK_IMPORTED_MODULE_3__.WebSocket(uri, protocols, opts);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this.ws.binaryType = this.socket.binaryType;
    this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }
      this.onOpen();
    };
    this.ws.onclose = closeEvent => this.onClose({
      description: "websocket connection closed",
      context: closeEvent
    });
    this.ws.onmessage = ev => this.onData(ev.data);
    this.ws.onerror = e => this.onError("websocket error", e);
  }
  write(packets) {
    this.writable = false;
    // encodePacket efficient as it uses WS framing
    // no need for encodePayload
    for (let i = 0; i < packets.length; i++) {
      const packet = packets[i];
      const lastPacket = i === packets.length - 1;
      (0,engine_io_parser__WEBPACK_IMPORTED_MODULE_4__.encodePacket)(packet, this.supportsBinary, data => {
        // always create a new object (GH-437)
        const opts = {};
        if (!_websocket_constructor_js__WEBPACK_IMPORTED_MODULE_3__.usingBrowserWebSocket) {
          if (packet.options) {
            opts.compress = packet.options.compress;
          }
          if (this.opts.perMessageDeflate) {
            const len =
            // @ts-ignore
            "string" === typeof data ? Buffer.byteLength(data) : data.length;
            if (len < this.opts.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }
        // Sometimes the websocket has already been closed but the browser didn't
        // have a chance of informing us about it yet, in that case send will
        // throw an error
        try {
          if (_websocket_constructor_js__WEBPACK_IMPORTED_MODULE_3__.usingBrowserWebSocket) {
            // TypeError is thrown when passing the second argument on Safari
            this.ws.send(data);
          } else {
            this.ws.send(data, opts);
          }
        } catch (e) {}
        if (lastPacket) {
          // fake drain
          // defer to next tick to allow Socket to clear writeBuffer
          (0,_websocket_constructor_js__WEBPACK_IMPORTED_MODULE_3__.nextTick)(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.close();
      this.ws = null;
    }
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const schema = this.opts.secure ? "wss" : "ws";
    const query = this.query || {};
    // append timestamp to URI
    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = (0,_contrib_yeast_js__WEBPACK_IMPORTED_MODULE_1__.yeast)();
    }
    // communicate binary support capabilities
    if (!this.supportsBinary) {
      query.b64 = 1;
    }
    return this.createUri(schema, query);
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @private
   */
  check() {
    return !!_websocket_constructor_js__WEBPACK_IMPORTED_MODULE_3__.WebSocket;
  }
}

/***/ }),

/***/ 62630:
/*!****************************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/transports/webtransport.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WT: () => (/* binding */ WT)
/* harmony export */ });
/* harmony import */ var _transport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transport.js */ 19264);
/* harmony import */ var _websocket_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./websocket-constructor.js */ 42703);
/* harmony import */ var engine_io_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine.io-parser */ 6176);



class WT extends _transport_js__WEBPACK_IMPORTED_MODULE_0__.Transport {
  get name() {
    return "webtransport";
  }
  doOpen() {
    // @ts-ignore
    if (typeof WebTransport !== "function") {
      return;
    }
    // @ts-ignore
    this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    this.transport.closed.then(() => {
      this.onClose();
    }).catch(err => {
      this.onError("webtransport error", err);
    });
    // note: we could have used async/await, but that would require some additional polyfills
    this.transport.ready.then(() => {
      this.transport.createBidirectionalStream().then(stream => {
        const decoderStream = (0,engine_io_parser__WEBPACK_IMPORTED_MODULE_2__.createPacketDecoderStream)(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
        const reader = stream.readable.pipeThrough(decoderStream).getReader();
        const encoderStream = (0,engine_io_parser__WEBPACK_IMPORTED_MODULE_2__.createPacketEncoderStream)();
        encoderStream.readable.pipeTo(stream.writable);
        this.writer = encoderStream.writable.getWriter();
        const read = () => {
          reader.read().then(({
            done,
            value
          }) => {
            if (done) {
              return;
            }
            this.onPacket(value);
            read();
          }).catch(err => {});
        };
        read();
        const packet = {
          type: "open"
        };
        if (this.query.sid) {
          packet.data = `{"sid":"${this.query.sid}"}`;
        }
        this.writer.write(packet).then(() => this.onOpen());
      });
    });
  }
  write(packets) {
    this.writable = false;
    for (let i = 0; i < packets.length; i++) {
      const packet = packets[i];
      const lastPacket = i === packets.length - 1;
      this.writer.write(packet).then(() => {
        if (lastPacket) {
          (0,_websocket_constructor_js__WEBPACK_IMPORTED_MODULE_1__.nextTick)(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    var _a;
    (_a = this.transport) === null || _a === void 0 ? void 0 : _a.close();
  }
}

/***/ }),

/***/ 18931:
/*!**************************************************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/transports/xmlhttprequest.browser.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XHR: () => (/* binding */ XHR),
/* harmony export */   createCookieJar: () => (/* binding */ createCookieJar)
/* harmony export */ });
/* harmony import */ var _contrib_has_cors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contrib/has-cors.js */ 6690);
/* harmony import */ var _globalThis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globalThis.js */ 22536);
// browser shim for xmlhttprequest module


function XHR(opts) {
  const xdomain = opts.xdomain;
  // XMLHttpRequest can be disabled on IE
  try {
    if ("undefined" !== typeof XMLHttpRequest && (!xdomain || _contrib_has_cors_js__WEBPACK_IMPORTED_MODULE_0__.hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {}
  if (!xdomain) {
    try {
      return new _globalThis_js__WEBPACK_IMPORTED_MODULE_1__.globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {}
  }
}
function createCookieJar() {}

/***/ }),

/***/ 95145:
/*!*********************************************************!*\
  !*** ./node_modules/engine.io-client/build/esm/util.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   byteLength: () => (/* binding */ byteLength),
/* harmony export */   installTimerFunctions: () => (/* binding */ installTimerFunctions),
/* harmony export */   pick: () => (/* binding */ pick)
/* harmony export */ });
/* harmony import */ var _globalThis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalThis.js */ 22536);

function pick(obj, ...attr) {
  return attr.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }
    return acc;
  }, {});
}
// Keep a reference to the real timeout functions so they can be used when overridden
const NATIVE_SET_TIMEOUT = _globalThis_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim.setTimeout;
const NATIVE_CLEAR_TIMEOUT = _globalThis_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim.clearTimeout;
function installTimerFunctions(obj, opts) {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(_globalThis_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(_globalThis_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim);
  } else {
    obj.setTimeoutFn = _globalThis_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim.setTimeout.bind(_globalThis_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim);
    obj.clearTimeoutFn = _globalThis_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim.clearTimeout.bind(_globalThis_js__WEBPACK_IMPORTED_MODULE_0__.globalThisShim);
  }
}
// base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)
const BASE64_OVERHEAD = 1.33;
// we could also have used `new Blob([obj]).size`, but it isn't supported in IE9
function byteLength(obj) {
  if (typeof obj === "string") {
    return utf8Length(obj);
  }
  // arraybuffer or blob
  return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
  let c = 0,
    length = 0;
  for (let i = 0, l = str.length; i < l; i++) {
    c = str.charCodeAt(i);
    if (c < 0x80) {
      length += 1;
    } else if (c < 0x800) {
      length += 2;
    } else if (c < 0xd800 || c >= 0xe000) {
      length += 3;
    } else {
      i++;
      length += 4;
    }
  }
  return length;
}

/***/ }),

/***/ 70711:
/*!************************************************************!*\
  !*** ./node_modules/engine.io-parser/build/esm/commons.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ERROR_PACKET: () => (/* binding */ ERROR_PACKET),
/* harmony export */   PACKET_TYPES: () => (/* binding */ PACKET_TYPES),
/* harmony export */   PACKET_TYPES_REVERSE: () => (/* binding */ PACKET_TYPES_REVERSE)
/* harmony export */ });
const PACKET_TYPES = Object.create(null); // no Map = no polyfill
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
const PACKET_TYPES_REVERSE = Object.create(null);
Object.keys(PACKET_TYPES).forEach(key => {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
const ERROR_PACKET = {
  type: "error",
  data: "parser error"
};


/***/ }),

/***/ 62360:
/*!*******************************************************************************!*\
  !*** ./node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decode: () => (/* binding */ decode),
/* harmony export */   encode: () => (/* binding */ encode)
/* harmony export */ });
// imported from https://github.com/socketio/base64-arraybuffer
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// Use a lookup table to find the index.
const lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (let i = 0; i < chars.length; i++) {
  lookup[chars.charCodeAt(i)] = i;
}
const encode = arraybuffer => {
  let bytes = new Uint8Array(arraybuffer),
    i,
    len = bytes.length,
    base64 = '';
  for (i = 0; i < len; i += 3) {
    base64 += chars[bytes[i] >> 2];
    base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
    base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
    base64 += chars[bytes[i + 2] & 63];
  }
  if (len % 3 === 2) {
    base64 = base64.substring(0, base64.length - 1) + '=';
  } else if (len % 3 === 1) {
    base64 = base64.substring(0, base64.length - 2) + '==';
  }
  return base64;
};
const decode = base64 => {
  let bufferLength = base64.length * 0.75,
    len = base64.length,
    i,
    p = 0,
    encoded1,
    encoded2,
    encoded3,
    encoded4;
  if (base64[base64.length - 1] === '=') {
    bufferLength--;
    if (base64[base64.length - 2] === '=') {
      bufferLength--;
    }
  }
  const arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);
  for (i = 0; i < len; i += 4) {
    encoded1 = lookup[base64.charCodeAt(i)];
    encoded2 = lookup[base64.charCodeAt(i + 1)];
    encoded3 = lookup[base64.charCodeAt(i + 2)];
    encoded4 = lookup[base64.charCodeAt(i + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return arraybuffer;
};

/***/ }),

/***/ 58509:
/*!*************************************************************************!*\
  !*** ./node_modules/engine.io-parser/build/esm/decodePacket.browser.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decodePacket: () => (/* binding */ decodePacket)
/* harmony export */ });
/* harmony import */ var _commons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commons.js */ 70711);
/* harmony import */ var _contrib_base64_arraybuffer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contrib/base64-arraybuffer.js */ 62360);


const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const decodePacket = (encodedPacket, binaryType) => {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }
  const type = encodedPacket.charAt(0);
  if (type === "b") {
    return {
      type: "message",
      data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
  }
  const packetType = _commons_js__WEBPACK_IMPORTED_MODULE_0__.PACKET_TYPES_REVERSE[type];
  if (!packetType) {
    return _commons_js__WEBPACK_IMPORTED_MODULE_0__.ERROR_PACKET;
  }
  return encodedPacket.length > 1 ? {
    type: _commons_js__WEBPACK_IMPORTED_MODULE_0__.PACKET_TYPES_REVERSE[type],
    data: encodedPacket.substring(1)
  } : {
    type: _commons_js__WEBPACK_IMPORTED_MODULE_0__.PACKET_TYPES_REVERSE[type]
  };
};
const decodeBase64Packet = (data, binaryType) => {
  if (withNativeArrayBuffer) {
    const decoded = (0,_contrib_base64_arraybuffer_js__WEBPACK_IMPORTED_MODULE_1__.decode)(data);
    return mapBinary(decoded, binaryType);
  } else {
    return {
      base64: true,
      data
    }; // fallback for old browsers
  }
};

const mapBinary = (data, binaryType) => {
  switch (binaryType) {
    case "blob":
      if (data instanceof Blob) {
        // from WebSocket + binaryType "blob"
        return data;
      } else {
        // from HTTP long-polling or WebTransport
        return new Blob([data]);
      }
    case "arraybuffer":
    default:
      if (data instanceof ArrayBuffer) {
        // from HTTP long-polling (base64) or WebSocket + binaryType "arraybuffer"
        return data;
      } else {
        // from WebTransport (Uint8Array)
        return data.buffer;
      }
  }
};

/***/ }),

/***/ 25633:
/*!*************************************************************************!*\
  !*** ./node_modules/engine.io-parser/build/esm/encodePacket.browser.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   encodePacket: () => (/* binding */ encodePacket),
/* harmony export */   encodePacketToBinary: () => (/* binding */ encodePacketToBinary)
/* harmony export */ });
/* harmony import */ var _commons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commons.js */ 70711);

const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
// ArrayBuffer.isView method is not defined in IE10
const isView = obj => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};
const encodePacket = ({
  type,
  data
}, supportsBinary, callback) => {
  if (withNativeBlob && data instanceof Blob) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(data, callback);
    }
  } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(new Blob([data]), callback);
    }
  }
  // plain string
  return callback(_commons_js__WEBPACK_IMPORTED_MODULE_0__.PACKET_TYPES[type] + (data || ""));
};
const encodeBlobAsBase64 = (data, callback) => {
  const fileReader = new FileReader();
  fileReader.onload = function () {
    const content = fileReader.result.split(",")[1];
    callback("b" + (content || ""));
  };
  return fileReader.readAsDataURL(data);
};
function toArray(data) {
  if (data instanceof Uint8Array) {
    return data;
  } else if (data instanceof ArrayBuffer) {
    return new Uint8Array(data);
  } else {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
  }
}
let TEXT_ENCODER;
function encodePacketToBinary(packet, callback) {
  if (withNativeBlob && packet.data instanceof Blob) {
    return packet.data.arrayBuffer().then(toArray).then(callback);
  } else if (withNativeArrayBuffer && (packet.data instanceof ArrayBuffer || isView(packet.data))) {
    return callback(toArray(packet.data));
  }
  encodePacket(packet, false, encoded => {
    if (!TEXT_ENCODER) {
      TEXT_ENCODER = new TextEncoder();
    }
    callback(TEXT_ENCODER.encode(encoded));
  });
}


/***/ }),

/***/ 6176:
/*!**********************************************************!*\
  !*** ./node_modules/engine.io-parser/build/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPacketDecoderStream: () => (/* binding */ createPacketDecoderStream),
/* harmony export */   createPacketEncoderStream: () => (/* binding */ createPacketEncoderStream),
/* harmony export */   decodePacket: () => (/* reexport safe */ _decodePacket_js__WEBPACK_IMPORTED_MODULE_1__.decodePacket),
/* harmony export */   decodePayload: () => (/* binding */ decodePayload),
/* harmony export */   encodePacket: () => (/* reexport safe */ _encodePacket_js__WEBPACK_IMPORTED_MODULE_0__.encodePacket),
/* harmony export */   encodePayload: () => (/* binding */ encodePayload),
/* harmony export */   protocol: () => (/* binding */ protocol)
/* harmony export */ });
/* harmony import */ var _encodePacket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./encodePacket.js */ 25633);
/* harmony import */ var _decodePacket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decodePacket.js */ 58509);
/* harmony import */ var _commons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commons.js */ 70711);



const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
const encodePayload = (packets, callback) => {
  // some packets may be added to the array while encoding, so the initial length must be saved
  const length = packets.length;
  const encodedPackets = new Array(length);
  let count = 0;
  packets.forEach((packet, i) => {
    // force base64 encoding for binary packets
    (0,_encodePacket_js__WEBPACK_IMPORTED_MODULE_0__.encodePacket)(packet, false, encodedPacket => {
      encodedPackets[i] = encodedPacket;
      if (++count === length) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};
const decodePayload = (encodedPayload, binaryType) => {
  const encodedPackets = encodedPayload.split(SEPARATOR);
  const packets = [];
  for (let i = 0; i < encodedPackets.length; i++) {
    const decodedPacket = (0,_decodePacket_js__WEBPACK_IMPORTED_MODULE_1__.decodePacket)(encodedPackets[i], binaryType);
    packets.push(decodedPacket);
    if (decodedPacket.type === "error") {
      break;
    }
  }
  return packets;
};
function createPacketEncoderStream() {
  return new TransformStream({
    transform(packet, controller) {
      (0,_encodePacket_js__WEBPACK_IMPORTED_MODULE_0__.encodePacketToBinary)(packet, encodedPacket => {
        const payloadLength = encodedPacket.length;
        let header;
        // inspired by the WebSocket format: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#decoding_payload_length
        if (payloadLength < 126) {
          header = new Uint8Array(1);
          new DataView(header.buffer).setUint8(0, payloadLength);
        } else if (payloadLength < 65536) {
          header = new Uint8Array(3);
          const view = new DataView(header.buffer);
          view.setUint8(0, 126);
          view.setUint16(1, payloadLength);
        } else {
          header = new Uint8Array(9);
          const view = new DataView(header.buffer);
          view.setUint8(0, 127);
          view.setBigUint64(1, BigInt(payloadLength));
        }
        // first bit indicates whether the payload is plain text (0) or binary (1)
        if (packet.data && typeof packet.data !== "string") {
          header[0] |= 0x80;
        }
        controller.enqueue(header);
        controller.enqueue(encodedPacket);
      });
    }
  });
}
let TEXT_DECODER;
function totalLength(chunks) {
  return chunks.reduce((acc, chunk) => acc + chunk.length, 0);
}
function concatChunks(chunks, size) {
  if (chunks[0].length === size) {
    return chunks.shift();
  }
  const buffer = new Uint8Array(size);
  let j = 0;
  for (let i = 0; i < size; i++) {
    buffer[i] = chunks[0][j++];
    if (j === chunks[0].length) {
      chunks.shift();
      j = 0;
    }
  }
  if (chunks.length && j < chunks[0].length) {
    chunks[0] = chunks[0].slice(j);
  }
  return buffer;
}
function createPacketDecoderStream(maxPayload, binaryType) {
  if (!TEXT_DECODER) {
    TEXT_DECODER = new TextDecoder();
  }
  const chunks = [];
  let state = 0 /* READ_HEADER */;
  let expectedLength = -1;
  let isBinary = false;
  return new TransformStream({
    transform(chunk, controller) {
      chunks.push(chunk);
      while (true) {
        if (state === 0 /* READ_HEADER */) {
          if (totalLength(chunks) < 1) {
            break;
          }
          const header = concatChunks(chunks, 1);
          isBinary = (header[0] & 0x80) === 0x80;
          expectedLength = header[0] & 0x7f;
          if (expectedLength < 126) {
            state = 3 /* READ_PAYLOAD */;
          } else if (expectedLength === 126) {
            state = 1 /* READ_EXTENDED_LENGTH_16 */;
          } else {
            state = 2 /* READ_EXTENDED_LENGTH_64 */;
          }
        } else if (state === 1 /* READ_EXTENDED_LENGTH_16 */) {
          if (totalLength(chunks) < 2) {
            break;
          }
          const headerArray = concatChunks(chunks, 2);
          expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
          state = 3 /* READ_PAYLOAD */;
        } else if (state === 2 /* READ_EXTENDED_LENGTH_64 */) {
          if (totalLength(chunks) < 8) {
            break;
          }
          const headerArray = concatChunks(chunks, 8);
          const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);
          const n = view.getUint32(0);
          if (n > Math.pow(2, 53 - 32) - 1) {
            // the maximum safe integer in JavaScript is 2^53 - 1
            controller.enqueue(_commons_js__WEBPACK_IMPORTED_MODULE_2__.ERROR_PACKET);
            break;
          }
          expectedLength = n * Math.pow(2, 32) + view.getUint32(4);
          state = 3 /* READ_PAYLOAD */;
        } else {
          if (totalLength(chunks) < expectedLength) {
            break;
          }
          const data = concatChunks(chunks, expectedLength);
          controller.enqueue((0,_decodePacket_js__WEBPACK_IMPORTED_MODULE_1__.decodePacket)(isBinary ? data : TEXT_DECODER.decode(data), binaryType));
          state = 0 /* READ_HEADER */;
        }

        if (expectedLength === 0 || expectedLength > maxPayload) {
          controller.enqueue(_commons_js__WEBPACK_IMPORTED_MODULE_2__.ERROR_PACKET);
          break;
        }
      }
    }
  });
}
const protocol = 4;


/***/ }),

/***/ 32925:
/*!*******************************************************************!*\
  !*** ./node_modules/socket.io-client/build/esm/contrib/backo2.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Backoff: () => (/* binding */ Backoff)
/* harmony export */ });
/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */
function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */
Backoff.prototype.duration = function () {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */
Backoff.prototype.reset = function () {
  this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */
Backoff.prototype.setMin = function (min) {
  this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */
Backoff.prototype.setMax = function (max) {
  this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */
Backoff.prototype.setJitter = function (jitter) {
  this.jitter = jitter;
};

/***/ }),

/***/ 28509:
/*!**********************************************************!*\
  !*** ./node_modules/socket.io-client/build/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Manager: () => (/* reexport safe */ _manager_js__WEBPACK_IMPORTED_MODULE_1__.Manager),
/* harmony export */   Socket: () => (/* reexport safe */ _socket_js__WEBPACK_IMPORTED_MODULE_2__.Socket),
/* harmony export */   connect: () => (/* binding */ lookup),
/* harmony export */   "default": () => (/* binding */ lookup),
/* harmony export */   io: () => (/* binding */ lookup),
/* harmony export */   protocol: () => (/* reexport safe */ socket_io_parser__WEBPACK_IMPORTED_MODULE_3__.protocol)
/* harmony export */ });
/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.js */ 14741);
/* harmony import */ var _manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manager.js */ 9755);
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket.js */ 10915);
/* harmony import */ var socket_io_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-parser */ 21182);



/**
 * Managers cache.
 */
const cache = {};
function lookup(uri, opts) {
  if (typeof uri === "object") {
    opts = uri;
    uri = undefined;
  }
  opts = opts || {};
  const parsed = (0,_url_js__WEBPACK_IMPORTED_MODULE_0__.url)(uri, opts.path || "/socket.io");
  const source = parsed.source;
  const id = parsed.id;
  const path = parsed.path;
  const sameNamespace = cache[id] && path in cache[id]["nsps"];
  const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
  let io;
  if (newConnection) {
    io = new _manager_js__WEBPACK_IMPORTED_MODULE_1__.Manager(source, opts);
  } else {
    if (!cache[id]) {
      cache[id] = new _manager_js__WEBPACK_IMPORTED_MODULE_1__.Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }
  return io.socket(parsed.path, opts);
}
// so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
// namespace (e.g. `io.connect(...)`), for backward compatibility
Object.assign(lookup, {
  Manager: _manager_js__WEBPACK_IMPORTED_MODULE_1__.Manager,
  Socket: _socket_js__WEBPACK_IMPORTED_MODULE_2__.Socket,
  io: lookup,
  connect: lookup
});
/**
 * Protocol version.
 *
 * @public
 */

/**
 * Expose constructors for standalone build.
 *
 * @public
 */


/***/ }),

/***/ 9755:
/*!************************************************************!*\
  !*** ./node_modules/socket.io-client/build/esm/manager.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Manager: () => (/* binding */ Manager)
/* harmony export */ });
/* harmony import */ var engine_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine.io-client */ 77884);
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socket.js */ 10915);
/* harmony import */ var socket_io_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-parser */ 21182);
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./on.js */ 90057);
/* harmony import */ var _contrib_backo2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contrib/backo2.js */ 32925);
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @socket.io/component-emitter */ 135);






class Manager extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_5__.Emitter {
  constructor(uri, opts) {
    var _a;
    super();
    this.nsps = {};
    this.subs = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = undefined;
    }
    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    this.opts = opts;
    (0,engine_io_client__WEBPACK_IMPORTED_MODULE_0__.installTimerFunctions)(this, opts);
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1000);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
    this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
    this.backoff = new _contrib_backo2_js__WEBPACK_IMPORTED_MODULE_4__.Backoff({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(null == opts.timeout ? 20000 : opts.timeout);
    this._readyState = "closed";
    this.uri = uri;
    const _parser = opts.parser || socket_io_parser__WEBPACK_IMPORTED_MODULE_2__;
    this.encoder = new _parser.Encoder();
    this.decoder = new _parser.Decoder();
    this._autoConnect = opts.autoConnect !== false;
    if (this._autoConnect) this.open();
  }
  reconnection(v) {
    if (!arguments.length) return this._reconnection;
    this._reconnection = !!v;
    return this;
  }
  reconnectionAttempts(v) {
    if (v === undefined) return this._reconnectionAttempts;
    this._reconnectionAttempts = v;
    return this;
  }
  reconnectionDelay(v) {
    var _a;
    if (v === undefined) return this._reconnectionDelay;
    this._reconnectionDelay = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
    return this;
  }
  randomizationFactor(v) {
    var _a;
    if (v === undefined) return this._randomizationFactor;
    this._randomizationFactor = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
    return this;
  }
  reconnectionDelayMax(v) {
    var _a;
    if (v === undefined) return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
    return this;
  }
  timeout(v) {
    if (!arguments.length) return this._timeout;
    this._timeout = v;
    return this;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    // Only try to reconnect if it's the first time we're connecting
    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
      // keeps reconnection from firing twice for the same reconnection loop
      this.reconnect();
    }
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(fn) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new engine_io_client__WEBPACK_IMPORTED_MODULE_0__.Socket(this.uri, this.opts);
    const socket = this.engine;
    const self = this;
    this._readyState = "opening";
    this.skipReconnect = false;
    // emit `open`
    const openSubDestroy = (0,_on_js__WEBPACK_IMPORTED_MODULE_3__.on)(socket, "open", function () {
      self.onopen();
      fn && fn();
    });
    const onError = err => {
      this.cleanup();
      this._readyState = "closed";
      this.emitReserved("error", err);
      if (fn) {
        fn(err);
      } else {
        // Only do this if there is no fn to handle the error
        this.maybeReconnectOnOpen();
      }
    };
    // emit `error`
    const errorSub = (0,_on_js__WEBPACK_IMPORTED_MODULE_3__.on)(socket, "error", onError);
    if (false !== this._timeout) {
      const timeout = this._timeout;
      // set timer
      const timer = this.setTimeoutFn(() => {
        openSubDestroy();
        onError(new Error("timeout"));
        socket.close();
      }, timeout);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(() => {
        this.clearTimeoutFn(timer);
      });
    }
    this.subs.push(openSubDestroy);
    this.subs.push(errorSub);
    return this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(fn) {
    return this.open(fn);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    // clear old subs
    this.cleanup();
    // mark as open
    this._readyState = "open";
    this.emitReserved("open");
    // add new subs
    const socket = this.engine;
    this.subs.push((0,_on_js__WEBPACK_IMPORTED_MODULE_3__.on)(socket, "ping", this.onping.bind(this)), (0,_on_js__WEBPACK_IMPORTED_MODULE_3__.on)(socket, "data", this.ondata.bind(this)), (0,_on_js__WEBPACK_IMPORTED_MODULE_3__.on)(socket, "error", this.onerror.bind(this)), (0,_on_js__WEBPACK_IMPORTED_MODULE_3__.on)(socket, "close", this.onclose.bind(this)), (0,_on_js__WEBPACK_IMPORTED_MODULE_3__.on)(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(data) {
    try {
      this.decoder.add(data);
    } catch (e) {
      this.onclose("parse error", e);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(packet) {
    // the nextTick call prevents an exception in a user-provided event listener from triggering a disconnection due to a "parse error"
    (0,engine_io_client__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
      this.emitReserved("packet", packet);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(err) {
    this.emitReserved("error", err);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(nsp, opts) {
    let socket = this.nsps[nsp];
    if (!socket) {
      socket = new _socket_js__WEBPACK_IMPORTED_MODULE_1__.Socket(this, nsp, opts);
      this.nsps[nsp] = socket;
    } else if (this._autoConnect && !socket.active) {
      socket.connect();
    }
    return socket;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(socket) {
    const nsps = Object.keys(this.nsps);
    for (const nsp of nsps) {
      const socket = this.nsps[nsp];
      if (socket.active) {
        return;
      }
    }
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(packet) {
    const encodedPackets = this.encoder.encode(packet);
    for (let i = 0; i < encodedPackets.length; i++) {
      this.engine.write(encodedPackets[i], packet.options);
    }
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach(subDestroy => subDestroy());
    this.subs.length = 0;
    this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = true;
    this._reconnecting = false;
    this.onclose("forced close");
    if (this.engine) this.engine.close();
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called upon engine close.
   *
   * @private
   */
  onclose(reason, description) {
    this.cleanup();
    this.backoff.reset();
    this._readyState = "closed";
    this.emitReserved("close", reason, description);
    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const self = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) {
      this.backoff.reset();
      this.emitReserved("reconnect_failed");
      this._reconnecting = false;
    } else {
      const delay = this.backoff.duration();
      this._reconnecting = true;
      const timer = this.setTimeoutFn(() => {
        if (self.skipReconnect) return;
        this.emitReserved("reconnect_attempt", self.backoff.attempts);
        // check again for the case socket closed in above events
        if (self.skipReconnect) return;
        self.open(err => {
          if (err) {
            self._reconnecting = false;
            self.reconnect();
            this.emitReserved("reconnect_error", err);
          } else {
            self.onreconnect();
          }
        });
      }, delay);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(() => {
        this.clearTimeoutFn(timer);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const attempt = this.backoff.attempts;
    this._reconnecting = false;
    this.backoff.reset();
    this.emitReserved("reconnect", attempt);
  }
}

/***/ }),

/***/ 90057:
/*!*******************************************************!*\
  !*** ./node_modules/socket.io-client/build/esm/on.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   on: () => (/* binding */ on)
/* harmony export */ });
function on(obj, ev, fn) {
  obj.on(ev, fn);
  return function subDestroy() {
    obj.off(ev, fn);
  };
}

/***/ }),

/***/ 10915:
/*!***********************************************************!*\
  !*** ./node_modules/socket.io-client/build/esm/socket.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Socket: () => (/* binding */ Socket)
/* harmony export */ });
/* harmony import */ var socket_io_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-parser */ 21182);
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./on.js */ 90057);
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @socket.io/component-emitter */ 135);



/**
 * Internal events.
 * These events can't be emitted by the user.
 */
const RESERVED_EVENTS = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
/**
 * A Socket is the fundamental class for interacting with the server.
 *
 * A Socket belongs to a certain Namespace (by default /) and uses an underlying {@link Manager} to communicate.
 *
 * @example
 * const socket = io();
 *
 * socket.on("connect", () => {
 *   console.log("connected");
 * });
 *
 * // send an event to the server
 * socket.emit("foo", "bar");
 *
 * socket.on("foobar", () => {
 *   // an event was received from the server
 * });
 *
 * // upon disconnection
 * socket.on("disconnect", (reason) => {
 *   console.log(`disconnected due to ${reason}`);
 * });
 */
class Socket extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_2__.Emitter {
  /**
   * `Socket` constructor.
   */
  constructor(io, nsp, opts) {
    super();
    /**
     * Whether the socket is currently connected to the server.
     *
     * @example
     * const socket = io();
     *
     * socket.on("connect", () => {
     *   console.log(socket.connected); // true
     * });
     *
     * socket.on("disconnect", () => {
     *   console.log(socket.connected); // false
     * });
     */
    this.connected = false;
    /**
     * Whether the connection state was recovered after a temporary disconnection. In that case, any missed packets will
     * be transmitted by the server.
     */
    this.recovered = false;
    /**
     * Buffer for packets received before the CONNECT packet
     */
    this.receiveBuffer = [];
    /**
     * Buffer for packets that will be sent once the socket is connected
     */
    this.sendBuffer = [];
    /**
     * The queue of packets to be sent with retry in case of failure.
     *
     * Packets are sent one by one, each waiting for the server acknowledgement, in order to guarantee the delivery order.
     * @private
     */
    this._queue = [];
    /**
     * A sequence to generate the ID of the {@link QueuedPacket}.
     * @private
     */
    this._queueSeq = 0;
    this.ids = 0;
    this.acks = {};
    this.flags = {};
    this.io = io;
    this.nsp = nsp;
    if (opts && opts.auth) {
      this.auth = opts.auth;
    }
    this._opts = Object.assign({}, opts);
    if (this.io._autoConnect) this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs) return;
    const io = this.io;
    this.subs = [(0,_on_js__WEBPACK_IMPORTED_MODULE_1__.on)(io, "open", this.onopen.bind(this)), (0,_on_js__WEBPACK_IMPORTED_MODULE_1__.on)(io, "packet", this.onpacket.bind(this)), (0,_on_js__WEBPACK_IMPORTED_MODULE_1__.on)(io, "error", this.onerror.bind(this)), (0,_on_js__WEBPACK_IMPORTED_MODULE_1__.on)(io, "close", this.onclose.bind(this))];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    if (this.connected) return this;
    this.subEvents();
    if (!this.io["_reconnecting"]) this.io.open(); // ensure open
    if ("open" === this.io._readyState) this.onopen();
    return this;
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...args) {
    args.unshift("message");
    this.emit.apply(this, args);
    return this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(ev, ...args) {
    if (RESERVED_EVENTS.hasOwnProperty(ev)) {
      throw new Error('"' + ev.toString() + '" is a reserved event name');
    }
    args.unshift(ev);
    if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
      this._addToQueue(args);
      return this;
    }
    const packet = {
      type: socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.EVENT,
      data: args
    };
    packet.options = {};
    packet.options.compress = this.flags.compress !== false;
    // event ack callback
    if ("function" === typeof args[args.length - 1]) {
      const id = this.ids++;
      const ack = args.pop();
      this._registerAckCallback(id, ack);
      packet.id = id;
    }
    const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
    if (discardPacket) {} else if (this.connected) {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }
    this.flags = {};
    return this;
  }
  /**
   * @private
   */
  _registerAckCallback(id, ack) {
    var _a;
    const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
    if (timeout === undefined) {
      this.acks[id] = ack;
      return;
    }
    // @ts-ignore
    const timer = this.io.setTimeoutFn(() => {
      delete this.acks[id];
      for (let i = 0; i < this.sendBuffer.length; i++) {
        if (this.sendBuffer[i].id === id) {
          this.sendBuffer.splice(i, 1);
        }
      }
      ack.call(this, new Error("operation has timed out"));
    }, timeout);
    this.acks[id] = (...args) => {
      // @ts-ignore
      this.io.clearTimeoutFn(timer);
      ack.apply(this, [null, ...args]);
    };
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(ev, ...args) {
    // the timeout flag is optional
    const withErr = this.flags.timeout !== undefined || this._opts.ackTimeout !== undefined;
    return new Promise((resolve, reject) => {
      args.push((arg1, arg2) => {
        if (withErr) {
          return arg1 ? reject(arg1) : resolve(arg2);
        } else {
          return resolve(arg1);
        }
      });
      this.emit(ev, ...args);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(args) {
    let ack;
    if (typeof args[args.length - 1] === "function") {
      ack = args.pop();
    }
    const packet = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: false,
      args,
      flags: Object.assign({
        fromQueue: true
      }, this.flags)
    };
    args.push((err, ...responseArgs) => {
      if (packet !== this._queue[0]) {
        // the packet has already been acknowledged
        return;
      }
      const hasError = err !== null;
      if (hasError) {
        if (packet.tryCount > this._opts.retries) {
          this._queue.shift();
          if (ack) {
            ack(err);
          }
        }
      } else {
        this._queue.shift();
        if (ack) {
          ack(null, ...responseArgs);
        }
      }
      packet.pending = false;
      return this._drainQueue();
    });
    this._queue.push(packet);
    this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(force = false) {
    if (!this.connected || this._queue.length === 0) {
      return;
    }
    const packet = this._queue[0];
    if (packet.pending && !force) {
      return;
    }
    packet.pending = true;
    packet.tryCount++;
    this.flags = packet.flags;
    this.emit.apply(this, packet.args);
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(packet) {
    packet.nsp = this.nsp;
    this.io._packet(packet);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    if (typeof this.auth == "function") {
      this.auth(data => {
        this._sendConnectPacket(data);
      });
    } else {
      this._sendConnectPacket(this.auth);
    }
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(data) {
    this.packet({
      type: socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.CONNECT,
      data: this._pid ? Object.assign({
        pid: this._pid,
        offset: this._lastOffset
      }, data) : data
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(err) {
    if (!this.connected) {
      this.emitReserved("connect_error", err);
    }
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(reason, description) {
    this.connected = false;
    delete this.id;
    this.emitReserved("disconnect", reason, description);
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(packet) {
    const sameNamespace = packet.nsp === this.nsp;
    if (!sameNamespace) return;
    switch (packet.type) {
      case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.CONNECT:
        if (packet.data && packet.data.sid) {
          this.onconnect(packet.data.sid, packet.data.pid);
        } else {
          this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        }
        break;
      case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.EVENT:
      case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.BINARY_EVENT:
        this.onevent(packet);
        break;
      case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.ACK:
      case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.BINARY_ACK:
        this.onack(packet);
        break;
      case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.DISCONNECT:
        this.ondisconnect();
        break;
      case socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.CONNECT_ERROR:
        this.destroy();
        const err = new Error(packet.data.message);
        // @ts-ignore
        err.data = packet.data.data;
        this.emitReserved("connect_error", err);
        break;
    }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(packet) {
    const args = packet.data || [];
    if (null != packet.id) {
      args.push(this.ack(packet.id));
    }
    if (this.connected) {
      this.emitEvent(args);
    } else {
      this.receiveBuffer.push(Object.freeze(args));
    }
  }
  emitEvent(args) {
    if (this._anyListeners && this._anyListeners.length) {
      const listeners = this._anyListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, args);
      }
    }
    super.emit.apply(this, args);
    if (this._pid && args.length && typeof args[args.length - 1] === "string") {
      this._lastOffset = args[args.length - 1];
    }
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(id) {
    const self = this;
    let sent = false;
    return function (...args) {
      // prevent double callbacks
      if (sent) return;
      sent = true;
      self.packet({
        type: socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.ACK,
        id: id,
        data: args
      });
    };
  }
  /**
   * Called upon a server acknowlegement.
   *
   * @param packet
   * @private
   */
  onack(packet) {
    const ack = this.acks[packet.id];
    if ("function" === typeof ack) {
      ack.apply(this, packet.data);
      delete this.acks[packet.id];
    } else {}
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(id, pid) {
    this.id = id;
    this.recovered = pid && this._pid === pid;
    this._pid = pid; // defined only if connection state recovery is enabled
    this.connected = true;
    this.emitBuffered();
    this.emitReserved("connect");
    this._drainQueue(true);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach(args => this.emitEvent(args));
    this.receiveBuffer = [];
    this.sendBuffer.forEach(packet => {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    });
    this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy();
    this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    if (this.subs) {
      // clean subscriptions to avoid reconnections
      this.subs.forEach(subDestroy => subDestroy());
      this.subs = undefined;
    }
    this.io["_destroy"](this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    if (this.connected) {
      this.packet({
        type: socket_io_parser__WEBPACK_IMPORTED_MODULE_0__.PacketType.DISCONNECT
      });
    }
    // remove socket from pool
    this.destroy();
    if (this.connected) {
      // fire events
      this.onclose("io client disconnect");
    }
    return this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(compress) {
    this.flags.compress = compress;
    return this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    this.flags.volatile = true;
    return this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(timeout) {
    this.flags.timeout = timeout;
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.push(listener);
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.unshift(listener);
    return this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(listener) {
    if (!this._anyListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyListeners;
      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyListeners = [];
    }
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.push(listener);
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.unshift(listener);
    return this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(listener) {
    if (!this._anyOutgoingListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyOutgoingListeners;
      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyOutgoingListeners = [];
    }
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(packet) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const listeners = this._anyOutgoingListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, packet.data);
      }
    }
  }
}

/***/ }),

/***/ 14741:
/*!********************************************************!*\
  !*** ./node_modules/socket.io-client/build/esm/url.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   url: () => (/* binding */ url)
/* harmony export */ });
/* harmony import */ var engine_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine.io-client */ 77884);

/**
 * URL parser.
 *
 * @param uri - url
 * @param path - the request path of the connection
 * @param loc - An object meant to mimic window.location.
 *        Defaults to window.location.
 * @public
 */
function url(uri, path = "", loc) {
  let obj = uri;
  // default to window.location
  loc = loc || typeof location !== "undefined" && location;
  if (null == uri) uri = loc.protocol + "//" + loc.host;
  // relative path support
  if (typeof uri === "string") {
    if ("/" === uri.charAt(0)) {
      if ("/" === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }
    if (!/^(https?|wss?):\/\//.test(uri)) {
      if ("undefined" !== typeof loc) {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    }
    // parse
    obj = (0,engine_io_client__WEBPACK_IMPORTED_MODULE_0__.parse)(uri);
  }
  // make sure we treat `localhost:80` and `localhost` equally
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }
  obj.path = obj.path || "/";
  const ipv6 = obj.host.indexOf(":") !== -1;
  const host = ipv6 ? "[" + obj.host + "]" : obj.host;
  // define unique id
  obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
  // define href
  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
}

/***/ }),

/***/ 8490:
/*!***********************************************************!*\
  !*** ./node_modules/socket.io-parser/build/esm/binary.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deconstructPacket: () => (/* binding */ deconstructPacket),
/* harmony export */   reconstructPacket: () => (/* binding */ reconstructPacket)
/* harmony export */ });
/* harmony import */ var _is_binary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-binary.js */ 12290);

/**
 * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @public
 */
function deconstructPacket(packet) {
  const buffers = [];
  const packetData = packet.data;
  const pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length; // number of binary 'attachments'
  return {
    packet: pack,
    buffers: buffers
  };
}
function _deconstructPacket(data, buffers) {
  if (!data) return data;
  if ((0,_is_binary_js__WEBPACK_IMPORTED_MODULE_0__.isBinary)(data)) {
    const placeholder = {
      _placeholder: true,
      num: buffers.length
    };
    buffers.push(data);
    return placeholder;
  } else if (Array.isArray(data)) {
    const newData = new Array(data.length);
    for (let i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if (typeof data === "object" && !(data instanceof Date)) {
    const newData = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        newData[key] = _deconstructPacket(data[key], buffers);
      }
    }
    return newData;
  }
  return data;
}
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @public
 */
function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  delete packet.attachments; // no longer useful
  return packet;
}
function _reconstructPacket(data, buffers) {
  if (!data) return data;
  if (data && data._placeholder === true) {
    const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
    if (isIndexValid) {
      return buffers[data.num]; // appropriate buffer (should be natural order anyway)
    } else {
      throw new Error("illegal attachments");
    }
  } else if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === "object") {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        data[key] = _reconstructPacket(data[key], buffers);
      }
    }
  }
  return data;
}

/***/ }),

/***/ 21182:
/*!**********************************************************!*\
  !*** ./node_modules/socket.io-parser/build/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Decoder: () => (/* binding */ Decoder),
/* harmony export */   Encoder: () => (/* binding */ Encoder),
/* harmony export */   PacketType: () => (/* binding */ PacketType),
/* harmony export */   protocol: () => (/* binding */ protocol)
/* harmony export */ });
/* harmony import */ var _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @socket.io/component-emitter */ 135);
/* harmony import */ var _binary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binary.js */ 8490);
/* harmony import */ var _is_binary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-binary.js */ 12290);



/**
 * These strings must not be used as event names, as they have a special meaning.
 */
const RESERVED_EVENTS = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener" // used by the Node.js EventEmitter
];
/**
 * Protocol version.
 *
 * @public
 */
const protocol = 5;
var PacketType;
(function (PacketType) {
  PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
  PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType[PacketType["EVENT"] = 2] = "EVENT";
  PacketType[PacketType["ACK"] = 3] = "ACK";
  PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
/**
 * A socket.io Encoder instance
 */
class Encoder {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(replacer) {
    this.replacer = replacer;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(obj) {
    if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
      if ((0,_is_binary_js__WEBPACK_IMPORTED_MODULE_2__.hasBinary)(obj)) {
        return this.encodeAsBinary({
          type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
          nsp: obj.nsp,
          data: obj.data,
          id: obj.id
        });
      }
    }
    return [this.encodeAsString(obj)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(obj) {
    // first is type
    let str = "" + obj.type;
    // attachments if we have them
    if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
      str += obj.attachments + "-";
    }
    // if we have a namespace other than `/`
    // we append it followed by a comma `,`
    if (obj.nsp && "/" !== obj.nsp) {
      str += obj.nsp + ",";
    }
    // immediately followed by the id
    if (null != obj.id) {
      str += obj.id;
    }
    // json data
    if (null != obj.data) {
      str += JSON.stringify(obj.data, this.replacer);
    }
    return str;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(obj) {
    const deconstruction = (0,_binary_js__WEBPACK_IMPORTED_MODULE_1__.deconstructPacket)(obj);
    const pack = this.encodeAsString(deconstruction.packet);
    const buffers = deconstruction.buffers;
    buffers.unshift(pack); // add packet info to beginning of data list
    return buffers; // write all the buffers
  }
}
// see https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
function isObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 */
class Decoder extends _socket_io_component_emitter__WEBPACK_IMPORTED_MODULE_0__.Emitter {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(reviver) {
    super();
    this.reviver = reviver;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(obj) {
    let packet;
    if (typeof obj === "string") {
      if (this.reconstructor) {
        throw new Error("got plaintext data when reconstructing a packet");
      }
      packet = this.decodeString(obj);
      const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
      if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
        packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
        // binary packet's json
        this.reconstructor = new BinaryReconstructor(packet);
        // no attachments, labeled binary but no binary data to follow
        if (packet.attachments === 0) {
          super.emitReserved("decoded", packet);
        }
      } else {
        // non-binary full packet
        super.emitReserved("decoded", packet);
      }
    } else if ((0,_is_binary_js__WEBPACK_IMPORTED_MODULE_2__.isBinary)(obj) || obj.base64) {
      // raw binary data
      if (!this.reconstructor) {
        throw new Error("got binary data when not reconstructing a packet");
      } else {
        packet = this.reconstructor.takeBinaryData(obj);
        if (packet) {
          // received final buffer
          this.reconstructor = null;
          super.emitReserved("decoded", packet);
        }
      }
    } else {
      throw new Error("Unknown type: " + obj);
    }
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(str) {
    let i = 0;
    // look up type
    const p = {
      type: Number(str.charAt(0))
    };
    if (PacketType[p.type] === undefined) {
      throw new Error("unknown packet type " + p.type);
    }
    // look up attachments if type binary
    if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
      const start = i + 1;
      while (str.charAt(++i) !== "-" && i != str.length) {}
      const buf = str.substring(start, i);
      if (buf != Number(buf) || str.charAt(i) !== "-") {
        throw new Error("Illegal attachments");
      }
      p.attachments = Number(buf);
    }
    // look up namespace (if any)
    if ("/" === str.charAt(i + 1)) {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if ("," === c) break;
        if (i === str.length) break;
      }
      p.nsp = str.substring(start, i);
    } else {
      p.nsp = "/";
    }
    // look up id
    const next = str.charAt(i + 1);
    if ("" !== next && Number(next) == next) {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if (null == c || Number(c) != c) {
          --i;
          break;
        }
        if (i === str.length) break;
      }
      p.id = Number(str.substring(start, i + 1));
    }
    // look up json data
    if (str.charAt(++i)) {
      const payload = this.tryParse(str.substr(i));
      if (Decoder.isPayloadValid(p.type, payload)) {
        p.data = payload;
      } else {
        throw new Error("invalid payload");
      }
    }
    return p;
  }
  tryParse(str) {
    try {
      return JSON.parse(str, this.reviver);
    } catch (e) {
      return false;
    }
  }
  static isPayloadValid(type, payload) {
    switch (type) {
      case PacketType.CONNECT:
        return isObject(payload);
      case PacketType.DISCONNECT:
        return payload === undefined;
      case PacketType.CONNECT_ERROR:
        return typeof payload === "string" || isObject(payload);
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS.indexOf(payload[0]) === -1);
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        return Array.isArray(payload);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
      this.reconstructor = null;
    }
  }
}
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */
class BinaryReconstructor {
  constructor(packet) {
    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(binData) {
    this.buffers.push(binData);
    if (this.buffers.length === this.reconPack.attachments) {
      // done with buffer list
      const packet = (0,_binary_js__WEBPACK_IMPORTED_MODULE_1__.reconstructPacket)(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null;
    this.buffers = [];
  }
}

/***/ }),

/***/ 12290:
/*!**************************************************************!*\
  !*** ./node_modules/socket.io-parser/build/esm/is-binary.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasBinary: () => (/* binding */ hasBinary),
/* harmony export */   isBinary: () => (/* binding */ isBinary)
/* harmony export */ });
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const isView = obj => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
const toString = Object.prototype.toString;
const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
const withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
/**
 * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
 *
 * @private
 */
function isBinary(obj) {
  return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  if (Array.isArray(obj)) {
    for (let i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }
  if (isBinary(obj)) {
    return true;
  }
  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }
  return false;
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_dashboard_dashboard_module_ts.js.map