(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vuetify-audio/src/vuetifyaudio.vue?vue&type=template&id=762053d2&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vuetify-audio/src/vuetifyaudio.vue?vue&type=template&id=762053d2& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    {
      staticStyle: { "text-align": "center" },
      attrs: { flat: _vm.flat == undefined || _vm.flat == false ? false : true }
    },
    [
      _c(
        "v-card-text",
        [
          _c(
            "v-btn",
            {
              staticClass: "ma-2",
              attrs: {
                outlined: "",
                icon: "",
                color: _vm.color,
                disabled: !_vm.loaded
              },
              nativeOn: {
                click: function($event) {
                  _vm.playing ? _vm.pause() : _vm.play()
                }
              }
            },
            [
              !_vm.playing || _vm.paused
                ? _c("v-icon", [_vm._v("mdi-play")])
                : _c("v-icon", [_vm._v("mdi-pause")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "ma-2",
              attrs: {
                outlined: "",
                icon: "",
                color: _vm.color,
                disabled: !_vm.loaded
              },
              nativeOn: {
                click: function($event) {
                  return _vm.stop()
                }
              }
            },
            [_c("v-icon", [_vm._v("mdi-stop")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "ma-2",
              attrs: {
                outlined: "",
                icon: "",
                color: _vm.color,
                disabled: !_vm.loaded
              },
              nativeOn: {
                click: function($event) {
                  return _vm.mute()
                }
              }
            },
            [
              !_vm.isMuted
                ? _c("v-icon", [_vm._v("mdi-volume-high")])
                : _c("v-icon", [_vm._v("mdi-volume-mute")])
            ],
            1
          ),
          _vm._v(" "),
          !_vm.loaded
            ? _c(
                "v-btn",
                {
                  staticClass: "ma-2",
                  attrs: { outlined: "", icon: "", color: _vm.color },
                  nativeOn: {
                    click: function($event) {
                      _vm.loaded ? _vm.download() : _vm.reload()
                    }
                  }
                },
                [_c("v-icon", [_vm._v("mdi-refresh")])],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.loaded && _vm.downloadable
            ? _c(
                "v-btn",
                {
                  staticClass: "ma-2",
                  attrs: { outlined: "", icon: "", color: _vm.color },
                  nativeOn: {
                    click: function($event) {
                      _vm.loaded ? _vm.download() : _vm.reload()
                    }
                  }
                },
                [_c("v-icon", [_vm._v("mdi-download")])],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("v-progress-linear", {
            staticStyle: { "margin-top": "15px", "margin-bottom": "15px" },
            attrs: { height: "5", disabled: !_vm.loaded },
            nativeOn: {
              click: function($event) {
                return _vm.setPosition()
              }
            },
            model: {
              value: _vm.percentage,
              callback: function($$v) {
                _vm.percentage = $$v
              },
              expression: "percentage"
            }
          }),
          _vm._v(" "),
          _c("p", [
            _vm._v(_vm._s(_vm.currentTime) + " / " + _vm._s(_vm.duration))
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("audio", {
        ref: "player",
        attrs: { id: "player", src: _vm.file },
        on: { ended: _vm.ended, canplay: _vm.canPlay }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuetify-audio/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vuetify-audio/index.js ***!
  \*********************************************/
/*! exports provided: default, VuetifyAudio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_vuetifyaudio_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/vuetifyaudio.vue */ "./node_modules/vuetify-audio/src/vuetifyaudio.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VuetifyAudio", function() { return _src_vuetifyaudio_vue__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_src_vuetifyaudio_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/vuetify-audio/src/vuetifyaudio.vue":
/*!*********************************************************!*\
  !*** ./node_modules/vuetify-audio/src/vuetifyaudio.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vuetifyaudio_vue_vue_type_template_id_762053d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vuetifyaudio.vue?vue&type=template&id=762053d2& */ "./node_modules/vuetify-audio/src/vuetifyaudio.vue?vue&type=template&id=762053d2&");
/* harmony import */ var _vuetifyaudio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vuetifyaudio.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-audio/src/vuetifyaudio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/index.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vuetifyaudio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vuetifyaudio_vue_vue_type_template_id_762053d2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vuetifyaudio_vue_vue_type_template_id_762053d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */






_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__["VIcon"],VProgressLinear: vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_7__["VProgressLinear"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vuetify-audio/src/vuetifyaudio.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vuetify-audio/src/vuetifyaudio.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./node_modules/vuetify-audio/src/vuetifyaudio.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vuetify_loader_lib_loader_js_ref_11_0_vue_loader_lib_index_js_vue_loader_options_vuetifyaudio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vuetify-loader/lib/loader.js??ref--11-0!../../vue-loader/lib??vue-loader-options!./vuetifyaudio.vue?vue&type=script&lang=js& */ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vuetify-audio/src/vuetifyaudio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vuetify_loader_lib_loader_js_ref_11_0_vue_loader_lib_index_js_vue_loader_options_vuetifyaudio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vuetify-audio/src/vuetifyaudio.vue?vue&type=template&id=762053d2&":
/*!****************************************************************************************!*\
  !*** ./node_modules/vuetify-audio/src/vuetifyaudio.vue?vue&type=template&id=762053d2& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vuetify_loader_lib_loader_js_ref_11_0_vue_loader_lib_index_js_vue_loader_options_vuetifyaudio_vue_vue_type_template_id_762053d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../vuetify-loader/lib/loader.js??ref--11-0!../../vue-loader/lib??vue-loader-options!./vuetifyaudio.vue?vue&type=template&id=762053d2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vuetify-audio/src/vuetifyaudio.vue?vue&type=template&id=762053d2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vuetify_loader_lib_loader_js_ref_11_0_vue_loader_lib_index_js_vue_loader_options_vuetifyaudio_vue_vue_type_template_id_762053d2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vuetify_loader_lib_loader_js_ref_11_0_vue_loader_lib_index_js_vue_loader_options_vuetifyaudio_vue_vue_type_template_id_762053d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vuetify-audio/src/vuetifyaudio.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vuetify-audio/src/vuetifyaudio.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const formatTime = second => new Date(second * 1000).toISOString().substr(11, 8);

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'vuetify-audio',
    props: {
        flat: {
            type: Boolean,
            default: false
        },
        file: {
            type: String,
            default: null
        },
        autoPlay: {
            type: Boolean,
            default: false
        },
        ended: {
            type: Function,
            default: () => {},
        },
        canPlay: {
            type: Function,
            default: () => {},
        },
        color: {
            type: String,
            default: null
        },
        downloadable: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        duration: function () {
            return this.audio ? formatTime(this.totalDuration) : ''
        },
    },
    data () {
        return {
            firstPlay: true,
            isMuted: false,
            loaded: false,
            playing: false,
            paused: false,
            percentage: 0,
            currentTime: '00:00:00',
            audio: undefined,
            totalDuration: 0,
        }
    },

    methods: {
        setPosition () {
            this.audio.currentTime = parseInt(this.audio.duration / 100 * this.percentage);
        },
        stop () {
            this.audio.pause()
            this.paused = true
            this.playing = false
            this.audio.currentTime = 0
        },
        play () {
            if (this.playing) return
            this.audio.play().then(_ => this.playing = true)
            this.paused = false
        },
        pause () {
            this.paused = !this.paused;
            (this.paused) ? this.audio.pause() : this.audio.play()
        },
        download () {
            this.audio.pause()
            window.open(this.file, 'download')
        },
        mute () {
            this.isMuted = !this.isMuted
            this.audio.muted = this.isMuted
            this.volumeValue = this.isMuted ? 0 : 75
        },
        reload () {
            this.audio.load();
        },
        _handleLoaded: function () {
            if (this.audio.readyState >= 2) {
                if (this.audio.duration === Infinity) {
                    // Fix duration for streamed audio source or blob based
                    // https://stackoverflow.com/questions/38443084/how-can-i-add-predefined-length-to-audio-recorded-from-mediarecorder-in-chrome/39971175#39971175
                    this.audio.currentTime = 1e101;
                    this.audio.ontimeupdate = () => {
                        this.audio.ontimeupdate = () => {}
                        this.audio.currentTime = 0
                        this.totalDuration = parseInt(this.audio.duration)
                        this.loaded = true;
                    }
                } else {
                    this.totalDuration = parseInt(this.audio.duration)
                    this.loaded = true
                }

                if (this.autoPlay) this.audio.play()

            } else {
                throw new Error('Failed to load sound file')
            }
        },
        _handlePlayingUI: function (e) {
            this.percentage = this.audio.currentTime / this.audio.duration * 100
            this.currentTime = formatTime(this.audio.currentTime)
            this.playing = true
        },
        _handlePlayPause: function (e) {
            if (e.type === 'play' && this.firstPlay) {
                // in some situations, audio.currentTime is the end one on chrome
                this.audio.currentTime = 0;
                if (this.firstPlay) {
                    this.firstPlay = false;
                }
            }
            if (e.type === 'pause' && this.paused === false && this.playing === false) {
                this.currentTime = '00:00:00'
            }
        },
        _handleEnded () {
            this.paused = this.playing = false;
        },
        init: function () {
            this.audio.addEventListener('timeupdate', this._handlePlayingUI);
            this.audio.addEventListener('loadeddata', this._handleLoaded);
            this.audio.addEventListener('pause', this._handlePlayPause);
            this.audio.addEventListener('play', this._handlePlayPause);
            this.audio.addEventListener('ended', this._handleEnded);
        },
    },
    mounted () {
        this.audio = this.$refs.player;
        this.init();
    },
    beforeDestroy () {
        this.audio.removeEventListener('timeupdate', this._handlePlayingUI)
        this.audio.removeEventListener('loadeddata', this._handleLoaded)
        this.audio.removeEventListener('pause', this._handlePlayPause)
        this.audio.removeEventListener('play', this._handlePlayPause)
        this.audio.removeEventListener('ended', this._handleEnded);
    }

});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGlmeS1hdWRpby9zcmMvdnVldGlmeWF1ZGlvLnZ1ZT9kZDdkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWF1ZGlvL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWF1ZGlvL3NyYy92dWV0aWZ5YXVkaW8udnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWF1ZGlvL3NyYy92dWV0aWZ5YXVkaW8udnVlPzUyZmMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktYXVkaW8vc3JjL3Z1ZXRpZnlhdWRpby52dWU/OGM2MCIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktYXVkaW8vc3JjL3Z1ZXRpZnlhdWRpby52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QyxjQUFjO0FBQ2QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkNBQTJDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkNBQTJDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdEQUFnRDtBQUMxRSxvQkFBb0IscUNBQXFDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOEJBQThCO0FBQzlDLGFBQWE7QUFDYixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RKQTtBQUFBO0FBQUE7QUFBQTtBQUFpRDs7QUFFbEMsNEhBQVk7Ozs7Ozs7Ozs7Ozs7QUNGM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkY7QUFDM0I7QUFDTDs7O0FBRzNEO0FBQzZFO0FBQzdFLGdCQUFnQiw4RkFBVTtBQUMxQixFQUFFLGtGQUFNO0FBQ1IsRUFBRSx1RkFBTTtBQUNSLEVBQUUsZ0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDc0Y7QUFDbkM7QUFDRTtBQUNJO0FBQ0o7QUFDb0I7QUFDekUsdUZBQWlCLGFBQWEsc0VBQUksQ0FBQyx5RUFBSyxDQUFDLGlGQUFTLENBQUMseUVBQUssQ0FBQyx1R0FBZSxDQUFDOzs7QUFHekU7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ2hEZjtBQUFBO0FBQUEsd0NBQWdLLENBQWdCLGtPQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXBMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMyQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1jYXJkXCIsXG4gICAge1xuICAgICAgc3RhdGljU3R5bGU6IHsgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIgfSxcbiAgICAgIGF0dHJzOiB7IGZsYXQ6IF92bS5mbGF0ID09IHVuZGVmaW5lZCB8fCBfdm0uZmxhdCA9PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZSB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1hLTJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBvdXRsaW5lZDogXCJcIixcbiAgICAgICAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBfdm0uY29sb3IsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0ubG9hZGVkXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLnBsYXlpbmcgPyBfdm0ucGF1c2UoKSA6IF92bS5wbGF5KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICFfdm0ucGxheWluZyB8fCBfdm0ucGF1c2VkXG4gICAgICAgICAgICAgICAgPyBfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwibWRpLXBsYXlcIildKVxuICAgICAgICAgICAgICAgIDogX2MoXCJ2LWljb25cIiwgW192bS5fdihcIm1kaS1wYXVzZVwiKV0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWEtMlwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIG91dGxpbmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IF92bS5jb2xvcixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogIV92bS5sb2FkZWRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN0b3AoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwibWRpLXN0b3BcIildKV0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYS0yXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgb3V0bGluZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogX3ZtLmNvbG9yLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmxvYWRlZFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubXV0ZSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAhX3ZtLmlzTXV0ZWRcbiAgICAgICAgICAgICAgICA/IF9jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJtZGktdm9sdW1lLWhpZ2hcIildKVxuICAgICAgICAgICAgICAgIDogX2MoXCJ2LWljb25cIiwgW192bS5fdihcIm1kaS12b2x1bWUtbXV0ZVwiKV0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAhX3ZtLmxvYWRlZFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWEtMlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3V0bGluZWQ6IFwiXCIsIGljb246IFwiXCIsIGNvbG9yOiBfdm0uY29sb3IgfSxcbiAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ubG9hZGVkID8gX3ZtLmRvd25sb2FkKCkgOiBfdm0ucmVsb2FkKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJtZGktcmVmcmVzaFwiKV0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0ubG9hZGVkICYmIF92bS5kb3dubG9hZGFibGVcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1hLTJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG91dGxpbmVkOiBcIlwiLCBpY29uOiBcIlwiLCBjb2xvcjogX3ZtLmNvbG9yIH0sXG4gICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmxvYWRlZCA/IF92bS5kb3dubG9hZCgpIDogX3ZtLnJlbG9hZCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwibWRpLWRvd25sb2FkXCIpXSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidi1wcm9ncmVzcy1saW5lYXJcIiwge1xuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tdG9wXCI6IFwiMTVweFwiLCBcIm1hcmdpbi1ib3R0b21cIjogXCIxNXB4XCIgfSxcbiAgICAgICAgICAgIGF0dHJzOiB7IGhlaWdodDogXCI1XCIsIGRpc2FibGVkOiAhX3ZtLmxvYWRlZCB9LFxuICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2V0UG9zaXRpb24oKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5wZXJjZW50YWdlLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnBlcmNlbnRhZ2UgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwZXJjZW50YWdlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5jdXJyZW50VGltZSkgKyBcIiAvIFwiICsgX3ZtLl9zKF92bS5kdXJhdGlvbikpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImF1ZGlvXCIsIHtcbiAgICAgICAgcmVmOiBcInBsYXllclwiLFxuICAgICAgICBhdHRyczogeyBpZDogXCJwbGF5ZXJcIiwgc3JjOiBfdm0uZmlsZSB9LFxuICAgICAgICBvbjogeyBlbmRlZDogX3ZtLmVuZGVkLCBjYW5wbGF5OiBfdm0uY2FuUGxheSB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IFZ1ZXRpZnlBdWRpbyBmcm9tICcuL3NyYy92dWV0aWZ5YXVkaW8udnVlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVnVldGlmeUF1ZGlvXHJcbmV4cG9ydCB7IFZ1ZXRpZnlBdWRpbyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi92dWV0aWZ5YXVkaW8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc2MjA1M2QyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Z1ZXRpZnlhdWRpby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Z1ZXRpZnlhdWRpby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEuLi8uLi92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWQnRuIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQnRuJztcbmltcG9ydCB7IFZDYXJkIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2FyZCc7XG5pbXBvcnQgeyBWQ2FyZFRleHQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZJY29uIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WSWNvbic7XG5pbXBvcnQgeyBWUHJvZ3Jlc3NMaW5lYXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZQcm9ncmVzc0xpbmVhcic7XG5pbnN0YWxsQ29tcG9uZW50cyhjb21wb25lbnQsIHtWQnRuLFZDYXJkLFZDYXJkVGV4dCxWSWNvbixWUHJvZ3Jlc3NMaW5lYXJ9KVxuXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3Rha2VuYXJpeWFtYW1vdG8vRGVza3RvcC9EaWN0YXRpb25NYW5hZ2VyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc2MjA1M2QyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc2MjA1M2QyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc2MjA1M2QyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi92dWV0aWZ5YXVkaW8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc2MjA1M2QyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc2MjA1M2QyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJub2RlX21vZHVsZXMvdnVldGlmeS1hdWRpby9zcmMvdnVldGlmeWF1ZGlvLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS0xMS0wIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92dWV0aWZ5YXVkaW8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tMTEtMCEuLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdnVldGlmeWF1ZGlvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTExLTAhLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Z1ZXRpZnlhdWRpby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzYyMDUzZDImXCIiLCI8dGVtcGxhdGU+XHJcbiAgICA8di1jYXJkIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyXCIgOmZsYXQ9XCJmbGF0ID09IHVuZGVmaW5lZCB8fCBmbGF0ID09IGZhbHNlICA/IGZhbHNlIDogdHJ1ZVwiPlxyXG4gICAgICAgIDx2LWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgPHYtYnRuIG91dGxpbmVkIGljb24gY2xhc3M9XCJtYS0yXCIgOmNvbG9yPVwiY29sb3JcIiBAY2xpY2submF0aXZlPVwicGxheWluZyA/IHBhdXNlKCkgOiBwbGF5KClcIiA6ZGlzYWJsZWQ9XCIhbG9hZGVkXCI+XHJcbiAgICAgICAgICAgICAgICA8di1pY29uIHYtaWY9XCIhcGxheWluZyB8fCBwYXVzZWRcIj5tZGktcGxheTwvdi1pY29uPlxyXG4gICAgICAgICAgICAgICAgPHYtaWNvbiB2LWVsc2U+bWRpLXBhdXNlPC92LWljb24+XHJcbiAgICAgICAgICAgIDwvdi1idG4+XHJcbiAgICAgICAgICAgIDx2LWJ0biBvdXRsaW5lZCBpY29uIGNsYXNzPVwibWEtMlwiIDpjb2xvcj1cImNvbG9yXCIgQGNsaWNrLm5hdGl2ZT1cInN0b3AoKVwiIDpkaXNhYmxlZD1cIiFsb2FkZWRcIj5cclxuICAgICAgICAgICAgICAgIDx2LWljb24+bWRpLXN0b3A8L3YtaWNvbj5cclxuICAgICAgICAgICAgPC92LWJ0bj5cclxuICAgICAgICAgICAgPHYtYnRuIG91dGxpbmVkIGljb24gY2xhc3M9XCJtYS0yXCIgOmNvbG9yPVwiY29sb3JcIiBAY2xpY2submF0aXZlPVwibXV0ZSgpXCIgOmRpc2FibGVkPVwiIWxvYWRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPHYtaWNvbiB2LWlmPVwiIWlzTXV0ZWRcIj5tZGktdm9sdW1lLWhpZ2g8L3YtaWNvbj5cclxuICAgICAgICAgICAgICAgIDx2LWljb24gdi1lbHNlPm1kaS12b2x1bWUtbXV0ZTwvdi1pY29uPlxyXG4gICAgICAgICAgICA8L3YtYnRuPlxyXG4gICAgICAgICAgICA8di1idG4gb3V0bGluZWQgaWNvbiBjbGFzcz1cIm1hLTJcIiA6Y29sb3I9XCJjb2xvclwiIEBjbGljay5uYXRpdmU9XCJsb2FkZWQgPyBkb3dubG9hZCgpIDogcmVsb2FkKClcIiB2LWlmPVwiIWxvYWRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktcmVmcmVzaDwvdi1pY29uPlxyXG4gICAgICAgICAgICA8L3YtYnRuPlxyXG4gICAgICAgICAgICA8di1idG4gb3V0bGluZWQgaWNvbiBjbGFzcz1cIm1hLTJcIiA6Y29sb3I9XCJjb2xvclwiIEBjbGljay5uYXRpdmU9XCJsb2FkZWQgPyBkb3dubG9hZCgpIDogcmVsb2FkKClcIiB2LWlmPVwibG9hZGVkICYmIGRvd25sb2FkYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktZG93bmxvYWQ8L3YtaWNvbj5cclxuICAgICAgICAgICAgPC92LWJ0bj5cclxuICAgICAgICAgICAgPHYtcHJvZ3Jlc3MtbGluZWFyIHYtbW9kZWw9XCJwZXJjZW50YWdlXCIgaGVpZ2h0PVwiNVwiIHN0eWxlPVwibWFyZ2luLXRvcDogMTVweDsgbWFyZ2luLWJvdHRvbTogMTVweDtcIiBAY2xpY2submF0aXZlPVwic2V0UG9zaXRpb24oKVwiIDpkaXNhYmxlZD1cIiFsb2FkZWRcIj48L3YtcHJvZ3Jlc3MtbGluZWFyPlxyXG4gICAgICAgICAgICA8cD57eyBjdXJyZW50VGltZSB9fSAvIHt7IGR1cmF0aW9uIH19PC9wPlxyXG4gICAgICAgIDwvdi1jYXJkLXRleHQ+XHJcbiAgICAgICAgPGF1ZGlvIGlkPVwicGxheWVyXCIgcmVmPVwicGxheWVyXCIgdi1vbjplbmRlZD1cImVuZGVkXCIgdi1vbjpjYW5wbGF5PVwiY2FuUGxheVwiIDpzcmM9XCJmaWxlXCI+PC9hdWRpbz5cclxuICAgIDwvdi1jYXJkPlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4gICAgY29uc3QgZm9ybWF0VGltZSA9IHNlY29uZCA9PiBuZXcgRGF0ZShzZWNvbmQgKiAxMDAwKS50b0lTT1N0cmluZygpLnN1YnN0cigxMSwgOCk7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6ICd2dWV0aWZ5LWF1ZGlvJyxcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBmbGF0OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmlsZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhdXRvUGxheToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVuZGVkOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYW5QbGF5OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb2xvcjoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkb3dubG9hZGFibGU6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXVkaW8gPyBmb3JtYXRUaW1lKHRoaXMudG90YWxEdXJhdGlvbikgOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YSAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBmaXJzdFBsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpc011dGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwbGF5aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHBhdXNlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlOiAwLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFRpbWU6ICcwMDowMDowMCcsXHJcbiAgICAgICAgICAgICAgICBhdWRpbzogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgdG90YWxEdXJhdGlvbjogMCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgc2V0UG9zaXRpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpby5jdXJyZW50VGltZSA9IHBhcnNlSW50KHRoaXMuYXVkaW8uZHVyYXRpb24gLyAxMDAgKiB0aGlzLnBlcmNlbnRhZ2UpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdG9wICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXVkaW8ucGF1c2UoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpby5jdXJyZW50VGltZSA9IDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxheSAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5aW5nKSByZXR1cm5cclxuICAgICAgICAgICAgICAgIHRoaXMuYXVkaW8ucGxheSgpLnRoZW4oXyA9PiB0aGlzLnBsYXlpbmcgPSB0cnVlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYXVzZSAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlZCA9ICF0aGlzLnBhdXNlZDtcclxuICAgICAgICAgICAgICAgICh0aGlzLnBhdXNlZCkgPyB0aGlzLmF1ZGlvLnBhdXNlKCkgOiB0aGlzLmF1ZGlvLnBsYXkoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkb3dubG9hZCAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvLnBhdXNlKClcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHRoaXMuZmlsZSwgJ2Rvd25sb2FkJylcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbXV0ZSAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTXV0ZWQgPSAhdGhpcy5pc011dGVkXHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvLm11dGVkID0gdGhpcy5pc011dGVkXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZvbHVtZVZhbHVlID0gdGhpcy5pc011dGVkID8gMCA6IDc1XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlbG9hZCAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvLmxvYWQoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgX2hhbmRsZUxvYWRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXVkaW8ucmVhZHlTdGF0ZSA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXVkaW8uZHVyYXRpb24gPT09IEluZmluaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpeCBkdXJhdGlvbiBmb3Igc3RyZWFtZWQgYXVkaW8gc291cmNlIG9yIGJsb2IgYmFzZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzg0NDMwODQvaG93LWNhbi1pLWFkZC1wcmVkZWZpbmVkLWxlbmd0aC10by1hdWRpby1yZWNvcmRlZC1mcm9tLW1lZGlhcmVjb3JkZXItaW4tY2hyb21lLzM5OTcxMTc1IzM5OTcxMTc1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXVkaW8uY3VycmVudFRpbWUgPSAxZTEwMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdWRpby5vbnRpbWV1cGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvLm9udGltZXVwZGF0ZSA9ICgpID0+IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvLmN1cnJlbnRUaW1lID0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbER1cmF0aW9uID0gcGFyc2VJbnQodGhpcy5hdWRpby5kdXJhdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxEdXJhdGlvbiA9IHBhcnNlSW50KHRoaXMuYXVkaW8uZHVyYXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0b1BsYXkpIHRoaXMuYXVkaW8ucGxheSgpXHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIHNvdW5kIGZpbGUnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBfaGFuZGxlUGxheWluZ1VJOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJjZW50YWdlID0gdGhpcy5hdWRpby5jdXJyZW50VGltZSAvIHRoaXMuYXVkaW8uZHVyYXRpb24gKiAxMDBcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSBmb3JtYXRUaW1lKHRoaXMuYXVkaW8uY3VycmVudFRpbWUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF9oYW5kbGVQbGF5UGF1c2U6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS50eXBlID09PSAncGxheScgJiYgdGhpcy5maXJzdFBsYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbiBzb21lIHNpdHVhdGlvbnMsIGF1ZGlvLmN1cnJlbnRUaW1lIGlzIHRoZSBlbmQgb25lIG9uIGNocm9tZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXVkaW8uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0UGxheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0UGxheSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlLnR5cGUgPT09ICdwYXVzZScgJiYgdGhpcy5wYXVzZWQgPT09IGZhbHNlICYmIHRoaXMucGxheWluZyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gJzAwOjAwOjAwJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBfaGFuZGxlRW5kZWQgKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpby5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgdGhpcy5faGFuZGxlUGxheWluZ1VJKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkZGF0YScsIHRoaXMuX2hhbmRsZUxvYWRlZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ3BhdXNlJywgdGhpcy5faGFuZGxlUGxheVBhdXNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcigncGxheScsIHRoaXMuX2hhbmRsZVBsYXlQYXVzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgdGhpcy5faGFuZGxlRW5kZWQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW8gPSB0aGlzLiRyZWZzLnBsYXllcjtcclxuICAgICAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBiZWZvcmVEZXN0cm95ICgpIHtcclxuICAgICAgICAgICAgdGhpcy5hdWRpby5yZW1vdmVFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgdGhpcy5faGFuZGxlUGxheWluZ1VJKVxyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWRlZGRhdGEnLCB0aGlzLl9oYW5kbGVMb2FkZWQpXHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGF1c2UnLCB0aGlzLl9oYW5kbGVQbGF5UGF1c2UpXHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGxheScsIHRoaXMuX2hhbmRsZVBsYXlQYXVzZSlcclxuICAgICAgICAgICAgdGhpcy5hdWRpby5yZW1vdmVFdmVudExpc3RlbmVyKCdlbmRlZCcsIHRoaXMuX2hhbmRsZUVuZGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==