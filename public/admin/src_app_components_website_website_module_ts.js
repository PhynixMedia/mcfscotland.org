"use strict";
(self["webpackChunkspruha"] = self["webpackChunkspruha"] || []).push([["src_app_components_website_website_module_ts"],{

/***/ 4012:
/*!***************************************************************************!*\
  !*** ./src/app/components/website/blog-details/blog-details.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogDetailsComponent: () => (/* binding */ BlogDetailsComponent)
/* harmony export */ });
/* harmony import */ var _blogs_model_blog_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blogs/model/blog.model */ 30885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 19483);
/* harmony import */ var src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/users/user.service */ 55613);
/* harmony import */ var src_app_shared_services_web_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/web/blog.service */ 76644);
/* harmony import */ var src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/web/web.service */ 99662);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _common_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/input/input.component */ 22124);
/* harmony import */ var _common_element_image_image_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/element/image/image-select.component */ 52990);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-quill */ 86882);
var _class;













class BlogDetailsComponent {
  constructor(modalService, authService, userService, blogService, webService, toastr, router) {
    this.modalService = modalService;
    this.authService = authService;
    this.userService = userService;
    this.blogService = blogService;
    this.webService = webService;
    this.toastr = toastr;
    this.router = router;
    this.blog = new _blogs_model_blog_model__WEBPACK_IMPORTED_MODULE_0__.Blog();
  }
  ngOnInit() {
    this.load();
  }
  load() {
    let uuid = this.router.snapshot.paramMap.get('index');
    this.blogService.fetch(uuid).subscribe(response => {
      console.log("Blogs:: ", response);
      if (response.status == 'success') {
        this.blog = response.data;
      }
    });
  }
  logChange($event, key) {
    this.blog.content = $event.html;
    let $key = {};
    $key[key] = $event.html;
    this.onSave($key);
  }
  onSave($key) {
    let body = {};
    body.data = $key;
    body.target = {
      "id": this.blog.id
    };
    console.log("Server Response:: ", body, this.blog);
    this.blogService.update(body).subscribe(response => {
      if (response.status == 'success') {
        this.load();
      }
    });
  }
  onReceivedUpdate($event) {
    this.onSave({
      cover: $event
    });
  }
}
_class = BlogDetailsComponent;
_class.ɵfac = function BlogDetailsComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_web_blog_service__WEBPACK_IMPORTED_MODULE_3__.BlogService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_4__.WebService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-blogs-details"]],
  decls: 64,
  vars: 41,
  consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-filter", "mr-2"], [1, "row", "row-sm"], [1, "col-md-12", "col-lg-12"], [1, "modal-body"], [1, "form-group", "row"], [1, "col-lg-12", "mt-4"], [3, "type", "id", "value", "placeholder", "inputModel", "onDataModelChange", "inputModelChange"], [3, "label", "id", "uuid", "value", "inputModel", "onModelChange", "inputModelChange"], [1, "", 2, "background", "white", "padding", "30px"], [3, "ngModel", "ngModelChange", "onContentChanged"], ["quill-editor-toolbar", ""], [1, "ql-formats"], [1, "ql-font"], ["selected", ""], ["value", "serif"], ["value", "monospace"], [1, "ql-size"], ["value", "small"], ["value", "large"], ["value", "huge"], [1, "ql-bold"], [1, "ql-italic"], [1, "ql-underline"], [1, "ql-strike"], [1, "ql-color"], [1, "ql-background"], ["value", "ordered", 1, "ql-list"], ["value", "bullet", 1, "ql-list"], [1, "ql-align"], ["value", "center"], ["value", "right"], ["value", "justify"], [1, "ql-link"], [1, "ql-image"]],
  template: function BlogDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Blogs");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Blogs");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " Search ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 10)(16, "div", 11)(17, "div", 12)(18, "div", 13)(19, "div", 14)(20, "app-input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onDataModelChange", function BlogDetailsComponent_Template_app_input_onDataModelChange_20_listener($event) {
        return ctx.onSave($event);
      })("inputModelChange", function BlogDetailsComponent_Template_app_input_inputModelChange_20_listener($event) {
        return ctx.blog.title = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 14)(22, "app-input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onDataModelChange", function BlogDetailsComponent_Template_app_input_onDataModelChange_22_listener($event) {
        return ctx.onSave($event);
      })("inputModelChange", function BlogDetailsComponent_Template_app_input_inputModelChange_22_listener($event) {
        return ctx.blog.caption = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 14)(24, "app-input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onDataModelChange", function BlogDetailsComponent_Template_app_input_onDataModelChange_24_listener($event) {
        return ctx.onSave($event);
      })("inputModelChange", function BlogDetailsComponent_Template_app_input_inputModelChange_24_listener($event) {
        return ctx.blog.meta_title = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 14)(26, "app-input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onDataModelChange", function BlogDetailsComponent_Template_app_input_onDataModelChange_26_listener($event) {
        return ctx.onSave($event);
      })("inputModelChange", function BlogDetailsComponent_Template_app_input_inputModelChange_26_listener($event) {
        return ctx.blog.meta_description = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 14)(28, "app-input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onDataModelChange", function BlogDetailsComponent_Template_app_input_onDataModelChange_28_listener($event) {
        return ctx.onSave($event);
      })("inputModelChange", function BlogDetailsComponent_Template_app_input_inputModelChange_28_listener($event) {
        return ctx.blog.meta_keywords = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 14)(30, "image-select", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onModelChange", function BlogDetailsComponent_Template_image_select_onModelChange_30_listener($event) {
        return ctx.onReceivedUpdate($event);
      })("inputModelChange", function BlogDetailsComponent_Template_image_select_inputModelChange_30_listener($event) {
        return ctx.blog.cover = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 14)(32, "div", 17)(33, "quill-editor", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function BlogDetailsComponent_Template_quill_editor_ngModelChange_33_listener($event) {
        return ctx.blog.content = $event;
      })("onContentChanged", function BlogDetailsComponent_Template_quill_editor_onContentChanged_33_listener($event) {
        return ctx.logChange($event, "content");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 19)(35, "span", 20)(36, "select", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "option", 22)(38, "option", 23)(39, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "select", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](41, "option", 26)(42, "option", 22)(43, "option", 27)(44, "option", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](46, "button", 29)(47, "button", 30)(48, "button", 31)(49, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](51, "select", 33)(52, "select", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](54, "button", 35)(55, "button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "select", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](57, "option", 22)(58, "option", 38)(59, "option", 39)(60, "option", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](62, "button", 41)(63, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("form-control");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", "text")("id", "title")("value", ctx.blog.title)("placeholder", "Enter Blog Title")("inputModel", ctx.blog.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("form-control");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", "text")("id", "caption")("value", ctx.blog.caption)("placeholder", "Enter Blog Caption")("inputModel", ctx.blog.caption);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("form-control");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", "text")("id", "meta_title")("value", ctx.blog.meta_title)("placeholder", "Enter Blog Meta Title")("inputModel", ctx.blog.meta_title);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("form-control");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", "text")("id", "meta_description")("value", ctx.blog.meta_description)("placeholder", "Enter Blog Meta Description")("inputModel", ctx.blog.meta_description);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("form-control");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", "text")("id", "meta_keywords")("value", ctx.blog.meta_keywords)("placeholder", "Enter Blog Meta Keywords")("inputModel", ctx.blog.meta_keywords);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("label", "Blog Cover")("id", ctx.blog.id)("uuid", ctx.blog.uuid)("value", ctx.blog.cover)("inputModel", ctx.blog.cover);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.blog.content);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _common_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _common_element_image_image_select_component__WEBPACK_IMPORTED_MODULE_6__.ImageSelectComponent, ngx_quill__WEBPACK_IMPORTED_MODULE_12__.QuillEditorComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 86637:
/*!***************************************************************!*\
  !*** ./src/app/components/website/layout/layout.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutsComponent: () => (/* binding */ LayoutsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 30240);
/* harmony import */ var _pages_pages_editor_model_pages_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/pages/editor/model/pages.model */ 83918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 19483);
/* harmony import */ var src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/users/user.service */ 55613);
/* harmony import */ var src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/web/web.service */ 99662);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _common_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/textarea/textarea.component */ 15782);
/* harmony import */ var _common_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/input/input.component */ 22124);
/* harmony import */ var _common_alerts_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/alerts/alert.component */ 75601);
var _class;













function LayoutsComponent_tr_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 37)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td")(9, "div", 38)(10, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LayoutsComponent_tr_60_Template_a_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const data_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](68);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.onEdit(data_r7, _r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LayoutsComponent_tr_60_Template_a_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const data_r7 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.onDelete(data_r7.id, "layout"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r7.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r7.layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](7, 3, data_r7.updated_at, "yyyy-MM-dd HH:mm:ss"));
  }
}
function LayoutsComponent_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Prev");
  }
}
function LayoutsComponent_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Next");
  }
}
function LayoutsComponent_ng_template_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 43)(1, "h6", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "New Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LayoutsComponent_ng_template_65_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const modal_r11 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](modal_r11.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 47)(7, "div", 48)(8, "div", 49)(9, "app-input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("inputModelChange", function LayoutsComponent_ng_template_65_Template_app_input_inputModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r14.layout.label = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 49)(11, "app-input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("inputModelChange", function LayoutsComponent_ng_template_65_Template_app_input_inputModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r15.layout.layout = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 51)(13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Content");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "app-input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("inputModelChange", function LayoutsComponent_ng_template_65_Template_app_input_inputModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.layout.content = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 52)(17, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LayoutsComponent_ng_template_65_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r17.createLayout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Create Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LayoutsComponent_ng_template_65_Template_button_click_19_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const modal_r11 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](modal_r11.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", "text")("id", "label")("value", ctx_r4.layout.label)("placeholder", "Enter Layout Label")("inputModel", ctx_r4.layout.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", "text")("id", "lastname")("value", ctx_r4.layout.layout)("placeholder", "Enter Layout Name")("inputModel", ctx_r4.layout.layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", "text")("id", "lastname")("value", ctx_r4.layout.content)("placeholder", "Enter Layout Name")("inputModel", ctx_r4.layout.content);
  }
}
function LayoutsComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 43)(1, "h6", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Update Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LayoutsComponent_ng_template_67_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21);
      const modal_r19 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](modal_r19.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 47)(7, "div", 48)(8, "div", 49)(9, "app-input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("inputModelChange", function LayoutsComponent_ng_template_67_Template_app_input_inputModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r22.updatelayout.label = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 49)(11, "app-input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("inputModelChange", function LayoutsComponent_ng_template_67_Template_app_input_inputModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r23.updatelayout.layout = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 51)(13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Content");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "app-textarea", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onDataModelChange", function LayoutsComponent_ng_template_67_Template_app_textarea_onDataModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r24.onSave($event));
    })("inputModelChange", function LayoutsComponent_ng_template_67_Template_app_textarea_inputModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r25.updatelayout.content = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 52)(17, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LayoutsComponent_ng_template_67_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r26.updateLayout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Update Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LayoutsComponent_ng_template_67_Template_button_click_19_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21);
      const modal_r19 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](modal_r19.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", "text")("id", "label")("value", ctx_r6.updatelayout.label)("placeholder", "Enter Layout Label")("inputModel", ctx_r6.updatelayout.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", "text")("id", "lastname")("value", ctx_r6.updatelayout.layout)("placeholder", "Enter Layout Name")("inputModel", ctx_r6.updatelayout.layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", "text")("id", "layout")("value", ctx_r6.updatelayout.content)("placeholder", "Enter Layout Content")("inputModel", ctx_r6.updatelayout.content);
  }
}
class LayoutsComponent {
  constructor(modalService, authService, userService, webService, toastr) {
    this.modalService = modalService;
    this.authService = authService;
    this.userService = userService;
    this.webService = webService;
    this.toastr = toastr;
    this.layout = new _pages_pages_editor_model_pages_model__WEBPACK_IMPORTED_MODULE_0__.Layout();
    this.nlayout = new _pages_pages_editor_model_pages_model__WEBPACK_IMPORTED_MODULE_0__.Layout();
    this.layouts = new Array();
    this.layoutinfo = {
      content: '' // Initialize content as needed
    };
    /** ------------------------delete ------------------------ */
    this.changingValue = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.page = 1;
    this.config = {
      itemsPerPage: 5,
      currentPage: 1
    };
  }
  ngOnInit() {
    this.getLayouts();
  }
  openLayoutModal(layoutModal) {
    this.modalService.open(layoutModal, {
      size: "xl"
    });
  }
  getLayouts() {
    let $this = this;
    this.webService.all(`layout`, function (result, status) {
      console.log(result, 'result');
      if (status) {
        $this.layouts = result;
      }
    });
  }
  ngAfterViewInit() {
    // Set the initial value here if it's still not appearing
    this.layoutinfo.content = 'Initial value';
  }
  onSave(eventData) {
    // This method will be called when the event is triggered from <app-textarea>
    // You can access the value from eventData here
    const contentValue = eventData;
    console.log(contentValue);
  }
  createLayout() {
    let $this = this;
    const label = this.layout.label;
    const layout = this.layout.layout;
    const content = this.layoutinfo;
    const layoutinfo = {
      label,
      layout,
      content
    };
    this.webService.create('layout', this.layout).subscribe(response => {
      console.log('Layout created successfully', response);
      // Handle success, e.g., show a success message
      $this.getLayouts();
      $this.toastr.success('Record updated successfully', 'Success');
    }, error => {
      console.error('Failed to create layout', error);
      // Handle error, e.g., show an error message
    });
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
  onEdit(data, layoutUpdateModal) {
    this.updatelayout = data;
    console.log(this.updatelayout, 'data');
    this.modalService.open(layoutUpdateModal, {
      size: "xl"
    });
  }
  updateLayout() {
    let $this = this;
    const id = this.updatelayout.id;
    const label = this.updatelayout.label;
    const layout = this.updatelayout.layout;
    const content = this.updatelayout.content;
    const payload = {
      target: {
        id: id
      },
      data: {
        label: label,
        layout: layout,
        content: content
      }
    };
    if (this.updatelayout) {
      this.webService.update(`layout`, payload).subscribe(response => {
        console.log('Layout updated successfully', response);
        // Handle success, e.g., show a success message
        $this.getLayouts();
        $this.toastr.success('Record updated successfully', 'Success');
      }, error => {
        console.error('Failed to update layout', error);
        // Handle error, e.g., show an error message
        this.toastr.error('An error occurred while updating the record', 'Error');
      });
    }
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
      this.webService.delete('layout', this.selectedid, function (response, status) {
        if (status) {
          $this.getLayouts();
          $this.toastr.success("Request Successfully completed", "Record was deleted");
        }
      });
    }
  }
}
_class = LayoutsComponent;
_class.ɵfac = function LayoutsComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_users_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_web_web_service__WEBPACK_IMPORTED_MODULE_3__.WebService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-layout"]],
  decls: 70,
  vars: 4,
  consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], [1, "btn", "ripple", "btn-info", 3, "click"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-md-12", "col-lg-12"], [1, "card", "custom-card"], [1, "card-header", "border-bottom-0", "pb-0"], [1, "main-content-label", "my-auto", "pt-2"], [1, "card-body"], [1, "row", "table-filter"], [1, "col-lg-3"], [1, "show-entries"], [1, "form-control"], [1, "col-lg-9", "d-lg-flex"], [1, "d-flex", "ml-auto", "mt-4", "mr-3", "mt-lg-0"], [1, "filter-group"], ["type", "text", "placeholder", "search", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary"], [1, "fa", "fa-search"], [1, "d-flex", "mt-4", "mt-lg-0"], [1, "table-responsive", "border"], [1, "table", "mb-0", "text-nowrap", "text-md-nowrap"], ["class", "border-bottom", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["aria-label", "Custom pagination", 1, "d-flex", "justify-content-end", 3, "collectionSize", "page", "pageChange"], ["ngbPaginationPrevious", ""], ["ngbPaginationNext", ""], ["layoutModal", ""], ["layoutUpdateModal", ""], [3, "status", "onTriggerChange"], [1, "border-bottom"], [1, "button-list"], ["href", "javascript:;", 1, "btn", "btn-warning", 3, "click"], [1, "ti", "ti-pencil"], ["href", "javascript:;", 1, "btn", "btn-danger", 3, "click"], [1, "ti", "ti-trash"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group", "row"], [1, "col-lg-6", "mt-4"], [3, "type", "id", "value", "placeholder", "inputModel", "inputModelChange"], [1, "col-lg-12", "mt-4"], [1, "modal-footer"], ["type", "button", 1, "btn", "ripple", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "ripple", "btn-secondary", 3, "click"], [3, "type", "id", "value", "placeholder", "inputModel", "onDataModelChange", "inputModelChange"]],
  template: function LayoutsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Layouts");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Layout");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LayoutsComponent_Template_button_click_12_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](66);
        return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.openLayoutModal(_r3));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " New Layout ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 10)(16, "div", 11)(17, "div", 12)(18, "div", 13)(19, "div")(20, "div", 6)(21, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "All Layouts");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 15)(24, "div", 16)(25, "div", 17)(26, "div", 18)(27, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Show");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "select", 19)(30, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "5");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "10");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "15");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "20");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 20)(41, "div", 21)(42, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](46, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 27)(48, "table", 28)(49, "thead")(50, "tr")(51, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "Layout");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "Files");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, "Last Updated");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](60, LayoutsComponent_tr_60_Template, 14, 6, "tr", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 30)(62, "ngb-pagination", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pageChange", function LayoutsComponent_Template_ngb_pagination_pageChange_62_listener($event) {
        return ctx.page = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](63, LayoutsComponent_ng_template_63_Template, 1, 0, "ng-template", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](64, LayoutsComponent_ng_template_64_Template, 1, 0, "ng-template", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](65, LayoutsComponent_ng_template_65_Template, 21, 21, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](67, LayoutsComponent_ng_template_67_Template, 21, 21, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "app-alert", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onTriggerChange", function LayoutsComponent_Template_app_alert_onTriggerChange_69_listener($event) {
        return ctx.delete($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.layouts);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("collectionSize", ctx.layouts.length)("page", ctx.page);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("status", ctx.changingValue);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPaginationNext, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPaginationPrevious, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgSelectMultipleOption"], _common_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_4__.TextAreaComponent, _common_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _common_alerts_alert_component__WEBPACK_IMPORTED_MODULE_6__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: [".option-dots[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0ff !important;\n}\n\n.dropdown-menu-right.dropdown-menu[_ngcontent-%COMP%] {\n  transform: translate(-120px, 40px) !important;\n  z-index: 9 !important;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  z-index: 9 !important;\n}\n\n.button-list[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n\n  dp-date-picker,   dp-date-picker.dp-material .dp-picker-input {\n  width: 100% !important;\n  height: 38px !important;\n}\n  dp-date-picker.dp-material .dp-picker-input {\n  font-weight: 400;\n  line-height: 1.5;\n  color: #a8afc7;\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #e8e8f7;\n  border-radius: 5px;\n}\n  dp-day-calendar.dp-material .dp-current-day {\n  border: 1px solid #4A93FE !important;\n  background: #4A93FE !important;\n  color: #fff;\n}\n  dp-calendar-nav.dp-material .dp-calendar-nav-container {\n  border: 1px solid #e8e8f7 !important;\n  height: 40px !important;\n}\n  dp-calendar-nav.dp-material .dp-nav-header-btn {\n  font-weight: bold;\n  color: #3b4863;\n}\n  dp-day-calendar.dp-material .dp-calendar-wrapper {\n  border: 1px solid #e8e8f7 !important;\n  padding: 10px;\n}\n  dp-day-calendar.dp-material .dp-calendar-weekday {\n  color: #3b4863 !important;\n  width: 33px !important;\n}\n  dp-day-calendar .dp-calendar-day {\n  width: 33px !important;\n}\n  dp-calendar-nav .dp-nav-btns-container {\n  padding: 15px;\n}\n  dp-calendar-nav .dp-calendar-nav-container-left,   dp-calendar-nav .dp-calendar-nav-container-right {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy93ZWJzaXRlL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtBQUNKOztBQUVBO0VBQ0ksNkNBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxRQUFBO0FBQ0o7O0FBS0k7O0VBRUksc0JBQUE7RUFDQSx1QkFBQTtBQUZSO0FBS0k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBSFI7QUFNSTtFQUNJLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBSlI7QUFPSTtFQUNJLG9DQUFBO0VBQ0EsdUJBQUE7QUFMUjtBQVFJO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBTlI7QUFTSTtFQUNJLG9DQUFBO0VBQ0EsYUFBQTtBQVBSO0FBVUk7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0FBUlI7QUFXSTtFQUNJLHNCQUFBO0FBVFI7QUFZSTtFQUNJLGFBQUE7QUFWUjtBQWFJOztFQUVJLFlBQUE7QUFYUiIsInNvdXJjZXNDb250ZW50IjpbIi5vcHRpb24tZG90czpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmZiAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd24tbWVudS1yaWdodC5kcm9wZG93bi1tZW51IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTIwcHgsIDQwcHgpICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogOSAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gICAgei1pbmRleDogOSAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA1cHg7XG59XG5cblxuOjpuZy1kZWVwIHtcblxuICAgIGRwLWRhdGUtcGlja2VyLFxuICAgIGRwLWRhdGUtcGlja2VyLmRwLW1hdGVyaWFsIC5kcC1waWNrZXItaW5wdXQge1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDM4cHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBkcC1kYXRlLXBpY2tlci5kcC1tYXRlcmlhbCAuZHAtcGlja2VyLWlucHV0IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgY29sb3I6ICNhOGFmYzc7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4Zjc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICBkcC1kYXktY2FsZW5kYXIuZHAtbWF0ZXJpYWwgLmRwLWN1cnJlbnQtZGF5IHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzRBOTNGRSAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNEE5M0ZFICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIGRwLWNhbGVuZGFyLW5hdi5kcC1tYXRlcmlhbCAuZHAtY2FsZW5kYXItbmF2LWNvbnRhaW5lciB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZjcgIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgZHAtY2FsZW5kYXItbmF2LmRwLW1hdGVyaWFsIC5kcC1uYXYtaGVhZGVyLWJ0biB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogIzNiNDg2MztcbiAgICB9XG5cbiAgICBkcC1kYXktY2FsZW5kYXIuZHAtbWF0ZXJpYWwgLmRwLWNhbGVuZGFyLXdyYXBwZXIge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGY3ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuXG4gICAgZHAtZGF5LWNhbGVuZGFyLmRwLW1hdGVyaWFsIC5kcC1jYWxlbmRhci13ZWVrZGF5IHtcbiAgICAgICAgY29sb3I6ICMzYjQ4NjMgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDMzcHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBkcC1kYXktY2FsZW5kYXIgLmRwLWNhbGVuZGFyLWRheSB7XG4gICAgICAgIHdpZHRoOiAzM3B4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgZHAtY2FsZW5kYXItbmF2IC5kcC1uYXYtYnRucy1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgIH1cblxuICAgIGRwLWNhbGVuZGFyLW5hdiAuZHAtY2FsZW5kYXItbmF2LWNvbnRhaW5lci1sZWZ0LFxuICAgIGRwLWNhbGVuZGFyLW5hdiAuZHAtY2FsZW5kYXItbmF2LWNvbnRhaW5lci1yaWdodCB7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5994:
/*!**************************************************************!*\
  !*** ./src/app/components/website/website-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobsRoutingModule: () => (/* binding */ JobsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blogs/blogs.component */ 21423);
/* harmony import */ var _enquiry_enquiry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enquiry/enquiry.component */ 92728);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.component */ 86637);
/* harmony import */ var _blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog-details/blog-details.component */ 4012);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;







const routes = [{
  path: '',
  children: [{
    path: 'blogs',
    component: _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_0__.WebsiteBlogComponent
  }, {
    path: 'blogs/view/:index',
    component: _blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_3__.BlogDetailsComponent
  }, {
    path: 'enquiry',
    component: _enquiry_enquiry_component__WEBPACK_IMPORTED_MODULE_1__.EnquiryComponent
  }, {
    path: 'layouts',
    component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutsComponent
  }]
}];
class JobsRoutingModule {}
_class = JobsRoutingModule;
_class.ɵfac = function JobsRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](JobsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 903:
/*!******************************************************!*\
  !*** ./src/app/components/website/website.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebsiteModule: () => (/* binding */ WebsiteModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _website_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website-routing.module */ 5994);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 84176);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-charts */ 19502);
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-circle-progress */ 52350);
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ 94332);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 74048);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _common_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/component.module */ 65758);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-pagination */ 62638);
/* harmony import */ var _enquiry_enquiry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enquiry/enquiry.component */ 92728);
/* harmony import */ var _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blogs/blogs.component */ 21423);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ 48580);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-quill */ 86882);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/layout.component */ 86637);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 26233);
/* harmony import */ var _blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog-details/blog-details.component */ 4012);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;





















class WebsiteModule {}
_class = WebsiteModule;
_class.ɵfac = function WebsiteModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _website_routing_module__WEBPACK_IMPORTED_MODULE_0__.JobsRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_10__.LeafletModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectModule, ng2_charts__WEBPACK_IMPORTED_MODULE_13__.NgChartsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _common_component_module__WEBPACK_IMPORTED_MODULE_1__.ComponentModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_15__.NgxPaginationModule, ng_circle_progress__WEBPACK_IMPORTED_MODULE_16__.NgCircleProgressModule.forRoot(), ngx_quill__WEBPACK_IMPORTED_MODULE_17__.QuillModule.forRoot(), ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrModule.forRoot()]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](WebsiteModule, {
    declarations: [_enquiry_enquiry_component__WEBPACK_IMPORTED_MODULE_2__.EnquiryComponent, _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_3__.WebsiteBlogComponent, _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__.LayoutsComponent, _blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_5__.BlogDetailsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _website_routing_module__WEBPACK_IMPORTED_MODULE_0__.JobsRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_10__.LeafletModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectModule, ng2_charts__WEBPACK_IMPORTED_MODULE_13__.NgChartsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _common_component_module__WEBPACK_IMPORTED_MODULE_1__.ComponentModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_15__.NgxPaginationModule, ng_circle_progress__WEBPACK_IMPORTED_MODULE_16__.NgCircleProgressModule, ngx_quill__WEBPACK_IMPORTED_MODULE_17__.QuillModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_components_website_website_module_ts.js.map