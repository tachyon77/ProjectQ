(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_addquestion_addquestionform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/addquestion/addquestionform.component */ "./src/app/components/addquestion/addquestionform.component.ts");
/* harmony import */ var _components_answer_page_answer_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/answer-page/answer-page.component */ "./src/app/components/answer-page/answer-page.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/landingpage/landingpage.component */ "./src/app/components/landingpage/landingpage.component.ts");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var _components_questiondetail_questiondetail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/questiondetail/questiondetail.component */ "./src/app/components/questiondetail/questiondetail.component.ts");
/* harmony import */ var _components_request_invite_request_invite_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/request-invite/request-invite.component */ "./src/app/components/request-invite/request-invite.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'landing-page', component: _components_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_5__["LandingPageComponent"] },
    { path: 'profile/:id', component: _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"] },
    { path: 'profile', component: _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"] },
    { path: 'add-question-form', component: _components_addquestion_addquestionform_component__WEBPACK_IMPORTED_MODULE_2__["AddQuestionFormComponent"] },
    { path: 'question-detail/:id', component: _components_questiondetail_questiondetail_component__WEBPACK_IMPORTED_MODULE_7__["QuestionDetailComponent"] },
    { path: 'answer-page/:id', component: _components_answer_page_answer_page_component__WEBPACK_IMPORTED_MODULE_3__["AnswerPageComponent"] },
    { path: 'request-invite', component: _components_request_invite_request_invite_component__WEBPACK_IMPORTED_MODULE_8__["RequestInviteComponent"] },
    { path: '**', redirectTo: 'home' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 767px) {\r\n  /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n  .body-content {\r\n    padding-top: 50px;\r\n  }\r\n}\r\n\r\n.no-padding {\r\n  padding: 0px;\r\n}\r\n\r\n.body-content {\r\n  margin-top: 60px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid no-padding'>\r\n  <div *ngIf=\"isLoggedIn\">\r\n    <div class=\"row\">\r\n      <nav-menu [user]=\"user\"\r\n                (loggedOut)=\"onLogout($event)\">\r\n      </nav-menu>\r\n    </div>\r\n\r\n    <div class=\"row body-content\">\r\n      <div class=\"col-md-12\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"!isLoggedIn\">\r\n    <div>\r\n      <landing-page (loggedIn)=\"onLogin($event)\">\r\n      </landing-page>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_identity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/identity.service */ "./src/app/services/identity.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(identityService, router) {
        this.identityService = identityService;
        this.router = router;
        this.isLoggedIn = false;
        this.router.onSameUrlNavigation = 'reload';
    }
    AppComponent.prototype.onLogin = function (u) {
        this.user = u;
        this.isLoggedIn = true;
    };
    AppComponent.prototype.onLogout = function () {
        var _this = this;
        this.identityService.logout().subscribe(function (data) {
            _this.isLoggedIn = false;
            _this.identityService.refreshCSRFToken()
                .subscribe();
        }, function (error) {
            alert("failed to log out");
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.identityService.getLoggedInUser().subscribe(function (user) {
            if (user) {
                _this.user = user;
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
            }
        }, function (error) {
            // not supposed to come here. Error is already caught in service layer.
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_identity_service__WEBPACK_IMPORTED_MODULE_1__["IdentityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _directives_focus_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/focus.directive */ "./src/app/directives/focus.directive.ts");
/* harmony import */ var _directives_viewport_watcher_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/viewport-watcher.directive */ "./src/app/directives/viewport-watcher.directive.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_application_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/application-user.service */ "./src/app/services/application-user.service.ts");
/* harmony import */ var _services_answers_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/answers.service */ "./src/app/services/answers.service.ts");
/* harmony import */ var _services_answer_drafts_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/answer-drafts.service */ "./src/app/services/answer-drafts.service.ts");
/* harmony import */ var _components_answer_editor_inline_answer_editor_inline_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/answer-editor-inline/answer-editor-inline.component */ "./src/app/components/answer-editor-inline/answer-editor-inline.component.ts");
/* harmony import */ var _components_answer_page_answer_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/answer-page/answer-page.component */ "./src/app/components/answer-page/answer-page.component.ts");
/* harmony import */ var _services_answer_payment_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/answer-payment.service */ "./src/app/services/answer-payment.service.ts");
/* harmony import */ var _services_answerrating_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/answerrating.service */ "./src/app/services/answerrating.service.ts");
/* harmony import */ var _components_answercard_answercard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/answercard/answercard.component */ "./src/app/components/answercard/answercard.component.ts");
/* harmony import */ var _components_addanswer_addanswer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/addanswer/addanswer.component */ "./src/app/components/addanswer/addanswer.component.ts");
/* harmony import */ var _components_addquestion_addquestionform_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/addquestion/addquestionform.component */ "./src/app/components/addquestion/addquestionform.component.ts");
/* harmony import */ var _components_credentials_readonly_credentials_readonly_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/credentials-readonly/credentials-readonly.component */ "./src/app/components/credentials-readonly/credentials-readonly.component.ts");
/* harmony import */ var _components_credentials_editor_credentials_editor_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/credentials-editor/credentials-editor.component */ "./src/app/components/credentials-editor/credentials-editor.component.ts");
/* harmony import */ var _components_content_editor_contenteditor_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/content-editor/contenteditor.component */ "./src/app/components/content-editor/contenteditor.component.ts");
/* harmony import */ var _components_displayquestions_displayquestions_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/displayquestions/displayquestions.component */ "./src/app/components/displayquestions/displayquestions.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_html_content_html_content_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/html-content/html-content.component */ "./src/app/components/html-content/html-content.component.ts");
/* harmony import */ var _services_image_store_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/image-store.service */ "./src/app/services/image-store.service.ts");
/* harmony import */ var _components_inline_text_editor_inlinetexteditor_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/inline-text-editor/inlinetexteditor.component */ "./src/app/components/inline-text-editor/inlinetexteditor.component.ts");
/* harmony import */ var _services_identity_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/identity.service */ "./src/app/services/identity.service.ts");
/* harmony import */ var _components_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/landingpage/landingpage.component */ "./src/app/components/landingpage/landingpage.component.ts");
/* harmony import */ var _components_loginform_loginform_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/loginform/loginform.component */ "./src/app/components/loginform/loginform.component.ts");
/* harmony import */ var _components_navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/navmenu/navmenu.component */ "./src/app/components/navmenu/navmenu.component.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _components_notification_popover_notification_popover_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/notification-popover/notification-popover.component */ "./src/app/components/notification-popover/notification-popover.component.ts");
/* harmony import */ var _components_purchased_answers_purchased_answers_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/purchased-answers/purchased-answers.component */ "./src/app/components/purchased-answers/purchased-answers.component.ts");
/* harmony import */ var _services_purchased_answers_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/purchased-answers.service */ "./src/app/services/purchased-answers.service.ts");
/* harmony import */ var _components_questiondetail_questiondetail_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/questiondetail/questiondetail.component */ "./src/app/components/questiondetail/questiondetail.component.ts");
/* harmony import */ var _components_questioncard_questioncard_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/questioncard/questioncard.component */ "./src/app/components/questioncard/questioncard.component.ts");
/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/questions.service */ "./src/app/services/questions.service.ts");
/* harmony import */ var _services_questionfollower_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/questionfollower.service */ "./src/app/services/questionfollower.service.ts");
/* harmony import */ var _components_questioneditor_questioneditor_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/questioneditor/questioneditor.component */ "./src/app/components/questioneditor/questioneditor.component.ts");
/* harmony import */ var _services_question_views_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services/question-views.service */ "./src/app/services/question-views.service.ts");
/* harmony import */ var _services_question_topics_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/question-topics.service */ "./src/app/services/question-topics.service.ts");
/* harmony import */ var _pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pipes/readable-date.pipe */ "./src/app/pipes/readable-date.pipe.ts");
/* harmony import */ var _services_redactor_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./services/redactor.service */ "./src/app/services/redactor.service.ts");
/* harmony import */ var _components_registrationform_registrationform_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/registrationform/registrationform.component */ "./src/app/components/registrationform/registrationform.component.ts");
/* harmony import */ var _components_request_invite_request_invite_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/request-invite/request-invite.component */ "./src/app/components/request-invite/request-invite.component.ts");
/* harmony import */ var _services_request_invite_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./services/request-invite.service */ "./src/app/services/request-invite.service.ts");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var _components_user_questions_user_questions_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/user-questions/user-questions.component */ "./src/app/components/user-questions/user-questions.component.ts");
/* harmony import */ var _directives_viewport_watcher_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./directives/viewport-watcher.service */ "./src/app/directives/viewport-watcher.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





// Custom Directives


// ProjectQ components












































var AppModule = /** @class */ (function () {
    function AppModule(platformId, appId) {
        this.platformId = platformId;
        this.appId = appId;
        var platform = Object(_angular_common__WEBPACK_IMPORTED_MODULE_49__["isPlatformBrowser"])(platformId) ?
            'in the browser' : 'on the server';
        console.log("Running " + platform + " with appId=" + appId);
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            entryComponents: [
                _components_credentials_readonly_credentials_readonly_component__WEBPACK_IMPORTED_MODULE_18__["CredentialsReadonlyComponent"],
                _components_credentials_editor_credentials_editor_component__WEBPACK_IMPORTED_MODULE_19__["CredentialsEditorComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'sharedmem-front-end' }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_addquestion_addquestionform_component__WEBPACK_IMPORTED_MODULE_17__["AddQuestionFormComponent"],
                _components_answercard_answercard_component__WEBPACK_IMPORTED_MODULE_15__["AnswerCardComponent"],
                _components_answer_editor_inline_answer_editor_inline_component__WEBPACK_IMPORTED_MODULE_11__["AnswerEditorInlineComponent"],
                _components_answer_page_answer_page_component__WEBPACK_IMPORTED_MODULE_12__["AnswerPageComponent"],
                _components_addanswer_addanswer_component__WEBPACK_IMPORTED_MODULE_16__["AddAnswerComponent"],
                _components_credentials_readonly_credentials_readonly_component__WEBPACK_IMPORTED_MODULE_18__["CredentialsReadonlyComponent"],
                _components_credentials_editor_credentials_editor_component__WEBPACK_IMPORTED_MODULE_19__["CredentialsEditorComponent"],
                _components_content_editor_contenteditor_component__WEBPACK_IMPORTED_MODULE_20__["ContentEditorComponent"],
                _components_displayquestions_displayquestions_component__WEBPACK_IMPORTED_MODULE_21__["DisplayQuestionsComponent"],
                _directives_focus_directive__WEBPACK_IMPORTED_MODULE_5__["FocusDirective"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"],
                _components_html_content_html_content_component__WEBPACK_IMPORTED_MODULE_23__["HtmlContentComponent"],
                _components_inline_text_editor_inlinetexteditor_component__WEBPACK_IMPORTED_MODULE_25__["InlineTextEditorComponent"],
                _components_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_27__["LandingPageComponent"],
                _components_loginform_loginform_component__WEBPACK_IMPORTED_MODULE_28__["LoginFormComponent"],
                _components_navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_29__["NavMenuComponent"],
                _components_notification_popover_notification_popover_component__WEBPACK_IMPORTED_MODULE_31__["NotificationPopoverComponent"],
                _components_purchased_answers_purchased_answers_component__WEBPACK_IMPORTED_MODULE_32__["PurchasedAnswersComponent"],
                _components_questiondetail_questiondetail_component__WEBPACK_IMPORTED_MODULE_34__["QuestionDetailComponent"],
                _components_questioncard_questioncard_component__WEBPACK_IMPORTED_MODULE_35__["QuestionCardComponent"],
                _components_questioneditor_questioneditor_component__WEBPACK_IMPORTED_MODULE_38__["QuestionEditorComponent"],
                _pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_41__["ReadableDatePipe"],
                _components_registrationform_registrationform_component__WEBPACK_IMPORTED_MODULE_43__["RegistrationFormComponent"],
                _components_request_invite_request_invite_component__WEBPACK_IMPORTED_MODULE_44__["RequestInviteComponent"],
                _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_46__["UserProfileComponent"],
                _components_user_questions_user_questions_component__WEBPACK_IMPORTED_MODULE_47__["UserQuestionsComponent"],
                _directives_viewport_watcher_directive__WEBPACK_IMPORTED_MODULE_6__["ViewPortWatcherDirective"],
            ],
            providers: [
                _services_application_user_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationUserService"],
                _services_answers_service__WEBPACK_IMPORTED_MODULE_9__["AnswerService"],
                _services_answer_drafts_service__WEBPACK_IMPORTED_MODULE_10__["AnswerDraftService"],
                _services_answer_payment_service__WEBPACK_IMPORTED_MODULE_13__["AnswerPaymentService"],
                _services_answerrating_service__WEBPACK_IMPORTED_MODULE_14__["AnswerRatingService"],
                _services_image_store_service__WEBPACK_IMPORTED_MODULE_24__["ImageStoreService"],
                _services_identity_service__WEBPACK_IMPORTED_MODULE_26__["IdentityService"],
                _services_notification_service__WEBPACK_IMPORTED_MODULE_30__["NotificationService"],
                _services_purchased_answers_service__WEBPACK_IMPORTED_MODULE_33__["PurchasedAnswerService"],
                _services_questions_service__WEBPACK_IMPORTED_MODULE_36__["QuestionService"],
                _services_question_views_service__WEBPACK_IMPORTED_MODULE_39__["QuestionViewService"],
                _services_questionfollower_service__WEBPACK_IMPORTED_MODULE_37__["QuestionFollowerService"],
                _services_question_topics_service__WEBPACK_IMPORTED_MODULE_40__["QuestionTopicService"],
                _services_redactor_service__WEBPACK_IMPORTED_MODULE_42__["RedactorService"],
                _services_request_invite_service__WEBPACK_IMPORTED_MODULE_45__["RequestInviteService"],
                _directives_viewport_watcher_service__WEBPACK_IMPORTED_MODULE_48__["ViewportWatcherService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"])),
        __metadata("design:paramtypes", [Object, String])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/addanswer/addanswer.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/addanswer/addanswer.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-editor-container {\r\n    margin-top: 1em;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.draft-status{\r\n    color:lightgray;\r\n}\r\n\r\n.answer-form{\r\n    padding-top:2em;\r\n}"

/***/ }),

/***/ "./src/app/components/addanswer/addanswer.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/addanswer/addanswer.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\"\r\n      (ngSubmit)=\"onSubmit(form.value)\"\r\n      class=\"answer-form\">\r\n\r\n    <div class=\"form-row align-items-center\">\r\n        <div class=\"col-md-3 my-1\">\r\n            <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text\">Price</div>\r\n                </div>\r\n                <input type=\"text\"\r\n                       class=\"form-control\"\r\n                       name=\"price\"\r\n                       id=\"price\"\r\n                       formControlName=\"price\"\r\n                       placeholder=\"$\">\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <input type=\"checkbox\" \r\n                   class=\"form-control\"\r\n                   name=\"isAnonymous\"\r\n                   id=\"isAnonymous\"\r\n                   formControlName=\"isAnonymous\"/> \r\n            Anonymous\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"content-editor-container\">\r\n        <content-editor [content]=\"initialContent\"\r\n                        [enableRedaction]=\"true\"\r\n                        (contentChanged)=\"onContentChange($event)\">\r\n        </content-editor>\r\n    </div>\r\n\r\n\r\n    <button type=\"submit\"\r\n            [disabled]=\"!form.valid\"\r\n            class=\"btn btn-primary btn-sm\">\r\n        Submit\r\n    </button>\r\n    <button (click)=\"onSaveDraft(form.value)\"\r\n            type=\"button\"\r\n            class=\"btn btn-light no-border btn-sm ml-1\">\r\n        Save Draft\r\n    </button>\r\n    <span class=\"draft-status\">{{draftUpdate}}</span>\r\n</form>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/addanswer/addanswer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/addanswer/addanswer.component.ts ***!
  \*************************************************************/
/*! exports provided: AddAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAnswerComponent", function() { return AddAnswerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_Answer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Answer */ "./src/app/models/Answer.ts");
/* harmony import */ var _models_AnswerDraft__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/AnswerDraft */ "./src/app/models/AnswerDraft.ts");
/* harmony import */ var _services_answers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/answers.service */ "./src/app/services/answers.service.ts");
/* harmony import */ var _services_answer_drafts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/answer-drafts.service */ "./src/app/services/answer-drafts.service.ts");
/* harmony import */ var _services_redactor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/redactor.service */ "./src/app/services/redactor.service.ts");
/* harmony import */ var _pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/readable-date.pipe */ "./src/app/pipes/readable-date.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddAnswerComponent = /** @class */ (function () {
    function AddAnswerComponent(formBuilder, answerService, answerDraftService, redactorService) {
        this.formBuilder = formBuilder;
        this.answerService = answerService;
        this.answerDraftService = answerDraftService;
        this.redactorService = redactorService;
        this._draft = new _models_AnswerDraft__WEBPACK_IMPORTED_MODULE_3__["AnswerDraft"]();
        this._answer = new _models_Answer__WEBPACK_IMPORTED_MODULE_2__["Answer"]();
        this.initialContent = "";
        this.draftUpdate = "";
        this.dateFilter = new _pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_7__["ReadableDatePipe"]();
        this.answerAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.createForm();
    }
    Object.defineProperty(AddAnswerComponent.prototype, "draft", {
        get: function () {
            return this._draft;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddAnswerComponent.prototype, "questionId", {
        set: function (questionId) {
            var _this = this;
            this._draft.questionId = questionId;
            this._answer.questionId = questionId;
            this.answerDraftService.getForQuestion(questionId).subscribe(function (json) {
                if (json) {
                    var draft = json;
                    _this._draft = draft;
                    _this.initialContent = draft.htmlContent;
                    _this.form.setValue({
                        price: _this._draft.price,
                        isAnonymous: _this._draft.isAnonymous
                    });
                    _this.startDraftLastSavedMessageUpdater();
                }
                else {
                    _this.initialContent = "";
                }
            }, function (error) { return console.error(error); });
        },
        enumerable: true,
        configurable: true
    });
    AddAnswerComponent.prototype.onContentChange = function (content) {
        this.draft.htmlContent = content;
    };
    AddAnswerComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            price: this.formBuilder.control(this.draft.price, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]+'),
            ])),
            isAnonymous: this.formBuilder.control(this.draft.isAnonymous),
        });
    };
    AddAnswerComponent.prototype.startDraftLastSavedMessageUpdater = function () {
        var _this = this;
        setInterval(function () {
            if (_this.lastSaved) {
                _this.draftUpdate =
                    "Draft saved "
                        + _this.dateFilter.transform(_this.lastSaved);
            }
        }, 15000);
    };
    AddAnswerComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this._answer.price = form.price;
        this._answer.isAnonymous = form.isAnonymous;
        this._answer.protectedAnswerContent = new _models_Answer__WEBPACK_IMPORTED_MODULE_2__["ProtectedAnswerContent"]();
        this._answer.protectedAnswerContent.htmlContent = this._draft.htmlContent;
        this._answer.redactedHtmlContent = this.redactorService.getRedactedHtml(this._draft.htmlContent);
        this.answerService.add(this._answer)
            .subscribe(function () {
            _this.answerAdded.emit(_this._answer);
        });
    };
    AddAnswerComponent.prototype.onSaveDraft = function (form) {
        var _this = this;
        this._draft.price = form.price;
        this._draft.isAnonymous = form.isAnonymous;
        this.answerDraftService.update(this._draft)
            .subscribe(function () {
            _this.lastSaved = new Date();
            _this.draftUpdate = "Draft saved " + _this.dateFilter.transform(_this.lastSaved);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddAnswerComponent.prototype, "answerAdded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], AddAnswerComponent.prototype, "questionId", null);
    AddAnswerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-answer',
            template: __webpack_require__(/*! ./addanswer.component.html */ "./src/app/components/addanswer/addanswer.component.html"),
            styles: [__webpack_require__(/*! ./addanswer.component.css */ "./src/app/components/addanswer/addanswer.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_answers_service__WEBPACK_IMPORTED_MODULE_4__["AnswerService"],
            _services_answer_drafts_service__WEBPACK_IMPORTED_MODULE_5__["AnswerDraftService"],
            _services_redactor_service__WEBPACK_IMPORTED_MODULE_6__["RedactorService"]])
    ], AddAnswerComponent);
    return AddAnswerComponent;
}());



/***/ }),

/***/ "./src/app/components/addquestion/addquestionform.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/addquestion/addquestionform.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-question{\r\n\r\n}"

/***/ }),

/***/ "./src/app/components/addquestion/addquestionform.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/addquestion/addquestionform.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"offset-md-1 col-md-9\">\r\n    <form class=\"m-4\"\r\n          [formGroup]=\"form\"\r\n          (ngSubmit)=\"onSubmit(form.value)\">\r\n\r\n        <div class=\"row\">\r\n            <h4>\r\n                Question\r\n            </h4>\r\n        </div>\r\n        <div class=\"row\">\r\n            <textarea rows=\"2\"\r\n                      class=\"col-md-12 form-control\"\r\n                      name=\"title\" id=\"title\"\r\n                      formControlName=\"title\">\r\n            </textarea>\r\n        </div>\r\n\r\n        <div class=\"row pt-5\">\r\n            <h5>Context</h5>\r\n        </div>\r\n\r\n        <div class=\"row pt-2\">\r\n            <div class=\"col pl-0\">\r\n                <content-editor [content]=\"description\"\r\n                                (contentChanged)=\"onDescriptionChanged($event)\">\r\n                </content-editor>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row pt-3\">\r\n            <h5>$ Reward:</h5>\r\n            <input type=\"number\"\r\n                   class=\"form-control form-inline\"\r\n                   name=\"OfferedPrice\" id=\"OfferedPrice\"\r\n                   formControlName=\"offeredPrice\" />\r\n        </div>\r\n\r\n        <div class=\"row pt-2\">\r\n            <label class=\"checkbox-inline\">\r\n                <input type=\"checkbox\"\r\n                       name=\"isAnonymous\"\r\n                       id=\"isAnonymous\"\r\n                       formControlName=\"isAnonymous\"\r\n                       value=\"\"> Anonymous\r\n            </label>\r\n        </div>\r\n\r\n        <div class=\"row pt-2\">\r\n            <button class=\"col-md-1 btn btn-primary\"\r\n                    type=\"submit\" [disabled]=\"!form.valid\">\r\n                Post\r\n            </button>\r\n            <button *ngIf=\"false\"\r\n                    class=\"cl-md-1 btn btn-secondary ml-1\"\r\n                    (click)=\"onCancel()\">\r\n                Cancel\r\n            </button>\r\n        </div>\r\n\r\n    </form>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/addquestion/addquestionform.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/addquestion/addquestionform.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddQuestionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuestionFormComponent", function() { return AddQuestionFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/questions.service */ "./src/app/services/questions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddQuestionFormComponent = /** @class */ (function () {
    function AddQuestionFormComponent(formBuilder, questionService, router) {
        this.formBuilder = formBuilder;
        this.questionService = questionService;
        this.router = router;
        this.description = "";
        this.updatedDescription = "";
    }
    AddQuestionFormComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            title: this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
            isAnonymous: this.formBuilder.control(false),
            offeredPrice: this.formBuilder.control(0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]+'),
            ])),
        });
    };
    AddQuestionFormComponent.prototype.onDescriptionChanged = function (newDesc) {
        this.updatedDescription = newDesc;
    };
    AddQuestionFormComponent.prototype.onSubmit = function (question) {
        var _this = this;
        question.description = this.updatedDescription;
        this.questionService.add(question)
            .subscribe(function () {
            _this.router.navigate(['/home']); // TODO: go to the question instead
        });
    };
    AddQuestionFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-question-form',
            template: __webpack_require__(/*! ./addquestionform.component.html */ "./src/app/components/addquestion/addquestionform.component.html"),
            styles: [__webpack_require__(/*! ./addquestionform.component.css */ "./src/app/components/addquestion/addquestionform.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddQuestionFormComponent);
    return AddQuestionFormComponent;
}());



/***/ }),

/***/ "./src/app/components/answer-editor-inline/answer-editor-inline.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/answer-editor-inline/answer-editor-inline.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-editor-container {\r\n    margin-top: 1em;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.draft-status {\r\n    color: lightgray;\r\n}"

/***/ }),

/***/ "./src/app/components/answer-editor-inline/answer-editor-inline.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/answer-editor-inline/answer-editor-inline.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<em *ngIf=\"!answer || !draft\">Loading ...</em>\r\n<form *ngIf=\"answer && draft\"\r\n      [formGroup]=\"form\"\r\n      (ngSubmit)=\"onSubmit(form.value)\"\r\n      class=\"answer-form\">\r\n\r\n    <div class=\"form-row align-items-center\">\r\n        <div class=\"col-sm-3 my-1\">\r\n            <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text\">Price</div>\r\n                </div>\r\n                <input type=\"text\"\r\n                       class=\"form-control\"\r\n                       name=\"price\"\r\n                       id=\"price\"\r\n                       formControlName=\"price\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"content-editor-container\">\r\n        <content-editor [content]=\"curProtectedContent\"\r\n                        [enableRedaction]=\"true\"\r\n                        (contentChanged)=\"onContentChange($event)\">\r\n        </content-editor>\r\n    </div>\r\n    <button type=\"submit\"\r\n            [disabled]=\"!answer || !form.valid\"\r\n            class=\"btn btn-primary btn-sm\">\r\n        Save\r\n    </button>\r\n    <button type=\"button\"\r\n            (click)=\"onSaveDraft(form.value)\"\r\n            class=\"btn btn-light no-border btn-sm ml-1\">\r\n        Save Draft\r\n    </button>\r\n    <button type=\"submit\"\r\n            (click)=\"onCancel()\"\r\n            class=\"btn btn-secondary float-right btn-sm\">\r\n        Cancel\r\n    </button>\r\n    <span class=\"draft-status\">{{draftUpdate}}</span>\r\n</form>\r\n\r\n\r\n    \r\n"

/***/ }),

/***/ "./src/app/components/answer-editor-inline/answer-editor-inline.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/answer-editor-inline/answer-editor-inline.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AnswerEditorInlineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerEditorInlineComponent", function() { return AnswerEditorInlineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Answer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Answer */ "./src/app/models/Answer.ts");
/* harmony import */ var _services_answers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/answers.service */ "./src/app/services/answers.service.ts");
/* harmony import */ var _services_answer_drafts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/answer-drafts.service */ "./src/app/services/answer-drafts.service.ts");
/* harmony import */ var _services_redactor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/redactor.service */ "./src/app/services/redactor.service.ts");
/* harmony import */ var _pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/readable-date.pipe */ "./src/app/pipes/readable-date.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// Input: answer id
// Output: Answer updated event, Update canelled event.
var AnswerEditorInlineComponent = /** @class */ (function () {
    function AnswerEditorInlineComponent(formBuilder, answerService, answerDraftService, redactorService) {
        this.formBuilder = formBuilder;
        this.answerService = answerService;
        this.answerDraftService = answerDraftService;
        this.redactorService = redactorService;
        this.answerUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.updateCancelled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.draftUpdate = "";
        this.dateFilter = new _pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_5__["ReadableDatePipe"]();
        // We need this to save the original content in case we want to cancel update and revert back
        this._curProtectedContent = "";
        this._answer = new _models_Answer__WEBPACK_IMPORTED_MODULE_1__["Answer"]();
    }
    Object.defineProperty(AnswerEditorInlineComponent.prototype, "answerId", {
        set: function (id) {
            var _this = this;
            this.answerService.getById(id).subscribe(function (answer) {
                _this._answer = answer;
                // There will always be a draft if there is an answer.
                _this.answerDraftService.getForQuestion(answer.questionId).subscribe(function (json) {
                    _this._draft = json;
                    _this._curProtectedContent = _this._draft.htmlContent;
                    _this.initForm();
                    _this.scheduleDraftStatusUpdater();
                }, function (error) { return console.error(error); });
            }, function (error) { return console.error(error); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnswerEditorInlineComponent.prototype, "curProtectedContent", {
        get: function () {
            return this._curProtectedContent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnswerEditorInlineComponent.prototype, "answer", {
        get: function () {
            return this._answer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnswerEditorInlineComponent.prototype, "draft", {
        get: function () {
            return this._draft;
        },
        enumerable: true,
        configurable: true
    });
    AnswerEditorInlineComponent.prototype.initForm = function () {
        this.form = this.formBuilder.group({
            // non null assertion : only called after draft it successfully loaded
            price: this.formBuilder.control(this.draft.price, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('[0-9]+'),
            ])),
        });
    };
    AnswerEditorInlineComponent.prototype.scheduleDraftStatusUpdater = function () {
        var _this = this;
        setInterval(function () {
            if (_this.lastSaved) {
                _this.draftUpdate =
                    "Draft saved "
                        + _this.dateFilter.transform(_this.lastSaved);
            }
        }, 15000);
    };
    AnswerEditorInlineComponent.prototype.onContentChange = function (content) {
        this.draft.htmlContent = content;
    };
    AnswerEditorInlineComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.answer.price = form.price;
        this.answer.protectedAnswerContent = new _models_Answer__WEBPACK_IMPORTED_MODULE_1__["ProtectedAnswerContent"]();
        // form only loaded when draft is loaded
        this.answer.protectedAnswerContent.htmlContent = this.draft.htmlContent;
        this.answer.redactedHtmlContent =
            this.redactorService.getRedactedHtml(this.draft.htmlContent);
        this.answerService.update(this.answer)
            .subscribe(function () {
            _this.answerUpdated.emit(_this.answer);
        });
    };
    AnswerEditorInlineComponent.prototype.onSaveDraft = function (form) {
        var _this = this;
        // callable only after draft is loaded
        this._draft.price = form.price;
        this.answerDraftService.update(this._draft)
            .subscribe(function () {
            _this.lastSaved = new Date();
            _this.draftUpdate = "Draft saved " + _this.dateFilter.transform(_this.lastSaved);
        });
    };
    AnswerEditorInlineComponent.prototype.onCancel = function () {
        //this.answer.protectedAnswerContent.htmlContent = this._curProtectedContent;
        this.updateCancelled.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AnswerEditorInlineComponent.prototype, "answerUpdated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AnswerEditorInlineComponent.prototype, "updateCancelled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], AnswerEditorInlineComponent.prototype, "answerId", null);
    AnswerEditorInlineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'answer-editor-inline',
            template: __webpack_require__(/*! ./answer-editor-inline.component.html */ "./src/app/components/answer-editor-inline/answer-editor-inline.component.html"),
            styles: [__webpack_require__(/*! ./answer-editor-inline.component.css */ "./src/app/components/answer-editor-inline/answer-editor-inline.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _services_answers_service__WEBPACK_IMPORTED_MODULE_2__["AnswerService"],
            _services_answer_drafts_service__WEBPACK_IMPORTED_MODULE_3__["AnswerDraftService"],
            _services_redactor_service__WEBPACK_IMPORTED_MODULE_4__["RedactorService"]])
    ], AnswerEditorInlineComponent);
    return AnswerEditorInlineComponent;
}());



/***/ }),

/***/ "./src/app/components/answer-page/answer-page.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/answer-page/answer-page.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".answer-card{\r\n    font-family:\"Helvetica Neue\";\r\n    font-size:large;\r\n}\r\n\r\n.answer-user {\r\n    font-weight:600;\r\n    margin-bottom:1em;\r\n}\r\n\r\n.answer-content{\r\n    margin-bottom:1em;\r\n}\r\n\r\n.deleted-answer {\r\n    opacity: 0.2; /* Real browsers */\r\n    filter: alpha(opacity = 20); /* MSIE */\r\n}\r\n\r\n.answer-date{\r\n    font-weight:400;\r\n    color:#adaaaa;\r\n}\r\n\r\n.question-title {\r\n    font-family: sans-serif;\r\n    font-weight: 600;\r\n    font-size: x-large;\r\n    cursor:pointer;\r\n}\r\n\r\n.question-description {\r\n    font-family: sans-serif;\r\n    font-weight: 500;\r\n    font-size: large;\r\n    margin-top: 1em;\r\n    margin-bottom: 1em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/answer-page/answer-page.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/answer-page/answer-page.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\r\n<div class=\"offset-md-1 col-md-9\">\r\n    <p *ngIf=\"!question\"><em>Loading...</em></p>\r\n    <div *ngIf=\"question\">\r\n        <div class=\"question-title\"\r\n             [routerLink]=\"['/question-detail', question.id]\">\r\n            {{question.title}}\r\n            <span class=\"badge badge-secondary badge-success\">\r\n                ${{question.offeredPrice}}\r\n            </span>\r\n        </div>\r\n        <html-content [htmlString]=\"question.description\"\r\n                      class=\"question-description\">\r\n        </html-content>\r\n    </div>\r\n    <hr />\r\n    <p *ngIf=\"!answer\"><em>Loading...</em></p>\r\n    <div *ngIf=\"answer\" class=\"answer-card\">\r\n        <div *ngIf=\"!isUpdateAnswerVisible\">\r\n            <div class=\"answer-user\" *ngIf=\"answer && answer.user\">\r\n                {{answer.user.name}}\r\n                <div class=\"answer-date\">Answered {{answer.originDate | readableDate}}</div>\r\n            </div>\r\n\r\n            <html-content [htmlString]=\"answer.redactedHtmlContent\"\r\n                          class=\"answer-content\">\r\n            </html-content>\r\n\r\n            <button class=\"btn btn-default btn-sm\"\r\n                    (click)=\"OnEditClick()\">\r\n                Edit\r\n            </button>\r\n            <button class=\"btn btn-default btn-sm\"\r\n                    (click)=\"OnDeleteClick()\">\r\n                Delete\r\n            </button>\r\n        </div>\r\n\r\n        <div *ngIf=\"isUpdateAnswerVisible\">\r\n            <answer-editor-inline [answerId]=\"answer.id\"\r\n                                  (answerUpdated)=\"onAnswerUpdated($event)\"\r\n                                  (updateCancelled)=\"onUpdateCancelled()\">\r\n            </answer-editor-inline>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/answer-page/answer-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/answer-page/answer-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: AnswerPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerPageComponent", function() { return AnswerPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_answers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/answers.service */ "./src/app/services/answers.service.ts");
/* harmony import */ var _services_answerrating_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/answerrating.service */ "./src/app/services/answerrating.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/questions.service */ "./src/app/services/questions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

;




var AnswerPageComponent = /** @class */ (function () {
    function AnswerPageComponent(activatedRoute, answerService, questionService, answerRatingService) {
        this.activatedRoute = activatedRoute;
        this.answerService = answerService;
        this.questionService = questionService;
        this.answerRatingService = answerRatingService;
        this.answerDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isUpdateAnswerVisible = false;
    }
    Object.defineProperty(AnswerPageComponent.prototype, "answer", {
        get: function () {
            return this._answer;
        },
        enumerable: true,
        configurable: true
    });
    AnswerPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSubscription =
            this.activatedRoute.params.subscribe(function (params) {
                var answerId = Number(params['id']);
                _this.loadAnswer(answerId);
            });
    };
    AnswerPageComponent.prototype.loadQuestion = function (questionId) {
        var _this = this;
        this.questionService.getById(questionId)
            .subscribe(function (result) {
            _this.question = result;
        }, function (error) { return console.error(error); });
    };
    AnswerPageComponent.prototype.loadAnswer = function (id) {
        var _this = this;
        this.answerService.getById(id).subscribe(function (answer) {
            _this._answer = answer;
            _this.loadQuestion(answer.questionId);
        }, function (error) { return console.error(error); });
    };
    AnswerPageComponent.prototype.OnEditClick = function () {
        this.isUpdateAnswerVisible = true;
    };
    AnswerPageComponent.prototype.OnDeleteClick = function () {
        this.answerService.delete(this.answer.id)
            .subscribe(function () {
            //this.answerDeleted.emit(this.answer);
        });
    };
    AnswerPageComponent.prototype.OnUnDeleteClick = function () {
        this.answerService.unDelete(this.answer.id)
            .subscribe(function () {
            //this.answerDeleted.emit(this.answer);
        });
    };
    AnswerPageComponent.prototype.onAnswerUpdated = function (answer) {
        this._answer = answer;
        this.isUpdateAnswerVisible = false;
    };
    AnswerPageComponent.prototype.onUpdateCancelled = function () {
        this.isUpdateAnswerVisible = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AnswerPageComponent.prototype, "answerDeleted", void 0);
    AnswerPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'answer-page',
            template: __webpack_require__(/*! ./answer-page.component.html */ "./src/app/components/answer-page/answer-page.component.html"),
            styles: [__webpack_require__(/*! ./answer-page.component.css */ "./src/app/components/answer-page/answer-page.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_answers_service__WEBPACK_IMPORTED_MODULE_1__["AnswerService"],
            _services_questions_service__WEBPACK_IMPORTED_MODULE_4__["QuestionService"],
            _services_answerrating_service__WEBPACK_IMPORTED_MODULE_2__["AnswerRatingService"]])
    ], AnswerPageComponent);
    return AnswerPageComponent;
}());



/***/ }),

/***/ "./src/app/components/answercard/answercard.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/answercard/answercard.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".answer-card{\r\n    font-family:\"Helvetica Neue\";\r\n    font-size:large;\r\n}\r\n\r\n.answer-user {\r\n    font-weight:600;\r\n    margin-bottom:1em;\r\n}\r\n\r\n.answer-content{\r\n    margin-bottom:1em;\r\n}\r\n\r\n.price-note {\r\n    font-size: smaller;\r\n}\r\n\r\n.deleted-answer {\r\n    opacity: 0.2; /* Real browsers */\r\n    filter: alpha(opacity = 20); /* MSIE */\r\n}\r\n\r\n.answer-date{\r\n    font-weight:400;\r\n    color:#adaaaa;\r\n}\r\n\r\n.dollar-sign {\r\n    vertical-align: middle;\r\n}\r\n\r\n.price-tag {\r\n    font-size: 1.5em;\r\n    vertical-align: middle;\r\n}\r\n\r\n.rating {\r\n    unicode-bidi: bidi-override;\r\n    direction: rtl;\r\n    cursor:pointer;\r\n    color:green;\r\n    font-size:24px;\r\n}\r\n\r\n.rating > span {\r\n        display: inline-block;\r\n        position: relative;\r\n        width: 1.1em;\r\n    }\r\n\r\n.rating > span:hover:before,\r\n        .rating > span:hover ~ span:before {\r\n            content: \"\\2605\";\r\n            position: absolute;\r\n        }\r\n\r\n.average-rating{\r\n    float:right;\r\n}\r\n\r\n.no-rating {\r\n    float: right;\r\n    color:lightgray;\r\n    font-style:italic;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/answercard/answercard.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/answercard/answercard.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"!answerView\">loading ...</p>\r\n<div *ngIf=\"answerView\" class=\"answer-card\">\r\n    <div *ngIf=\"!isUpdateAnswerVisible\" class=\"row no-gutters\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"row no-gutters answer-user\" *ngIf=\"answerView.answer.user\">\r\n                <!--Author Identity-->\r\n                <span *ngIf=\"answerView.answer.isAnonymous\">\r\n                    Anonymous\r\n                </span>\r\n                <span *ngIf=\"!answerView.answer.isAnonymous\">\r\n                    {{answerView.answer.user.name}}\r\n                </span>\r\n                <span *ngIf=\"isAuthor\">\r\n                    [You]\r\n                </span>\r\n            </div>\r\n\r\n            <!--Answer Date time-->\r\n            <div class=\"row no-gutters answer-date\">\r\n                Answered {{answerView.answer.originDate | readableDate}}\r\n            </div>\r\n\r\n            <!--Option to Rate Answer-->\r\n            <div *ngIf=\"!isAuthor\" class=\"row no-gutters\">\r\n                <div class=\"rating\" *ngIf=\"rating[0]\">\r\n                    <span (click)=\"rate(5)\">☆</span>\r\n                    <span (click)=\"rate(4)\">☆</span>\r\n                    <span (click)=\"rate(3)\">☆</span>\r\n                    <span (click)=\"rate(2)\">☆</span>\r\n                    <span (click)=\"rate(1)\">☆</span>\r\n                </div>\r\n                <div class=\"rating\" *ngIf=\"rating[1]\">\r\n                    <span (click)=\"rate(5)\">☆</span>\r\n                    <span (click)=\"rate(4)\">☆</span>\r\n                    <span (click)=\"rate(3)\">☆</span>\r\n                    <span (click)=\"rate(2)\">☆</span>\r\n                    <span (click)=\"rate(1)\">★</span>\r\n                </div>\r\n                <div class=\"rating\" *ngIf=\"rating[2]\">\r\n                    <span (click)=\"rate(5)\">☆</span>\r\n                    <span (click)=\"rate(4)\">☆</span>\r\n                    <span (click)=\"rate(3)\">☆</span>\r\n                    <span (click)=\"rate(2)\">★</span>\r\n                    <span (click)=\"rate(1)\">★</span>\r\n                </div>\r\n                <div class=\"rating\" *ngIf=\"rating[3]\">\r\n                    <span (click)=\"rate(5)\">☆</span>\r\n                    <span (click)=\"rate(4)\">☆</span>\r\n                    <span (click)=\"rate(3)\">★</span>\r\n                    <span (click)=\"rate(2)\">★</span>\r\n                    <span (click)=\"rate(1)\">★</span>\r\n                </div>\r\n                <div class=\"rating\" *ngIf=\"rating[4]\">\r\n                    <span (click)=\"rate(5)\">☆</span>\r\n                    <span (click)=\"rate(4)\">★</span>\r\n                    <span (click)=\"rate(3)\">★</span>\r\n                    <span (click)=\"rate(2)\">★</span>\r\n                    <span (click)=\"rate(1)\">★</span>\r\n                </div>\r\n                <div class=\"rating\" *ngIf=\"rating[5]\">\r\n                    <span (click)=\"rate(5)\">★</span>\r\n                    <span (click)=\"rate(4)\">★</span>\r\n                    <span (click)=\"rate(3)\">★</span>\r\n                    <span (click)=\"rate(2)\">★</span>\r\n                    <span (click)=\"rate(1)\">★</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!--Average Rating-->\r\n        <div class=\"col-md-6\">\r\n            <span *ngIf=\"!answerView.averageRating\"\r\n                  class=\"no-rating\">\r\n                No ratings yet\r\n            </span>\r\n            <span *ngIf=\"answerView.averageRating\"\r\n                  class=\"average-rating\">\r\n                {{answerView.averageRating}} / 5\r\n            </span>\r\n        </div>\r\n    </div>\r\n\r\n    <!--Answer Purchase Option-->\r\n    <div *ngIf=\"answerView.answer.price > 0 && !isAuthor\" class=\"mt-3\">\r\n        <hr />\r\n        <!--Buy-->\r\n        <span class=\"dollar-sign\">$</span>\r\n        <span class=\"price-tag\">{{answerView.answer.price}}.00</span>\r\n\r\n        <button class=\"btn btn-success ml-2\"\r\n                (click)=\"onOpenCreditPay(cardPaymentTemplate)\">\r\n            Buy\r\n        </button>\r\n        <span class=\"ml-2 price-note\"> *Parts of this answer is hidden. You need to buy it to see full answer.</span>\r\n        \r\n        <hr />\r\n        <!--counter offer-->\r\n        <button hidden class=\"btn btn-secondary btn-sm ml-2\"\r\n                (click)=\"OnCounterOfferClick()\">\r\n            <i class=\"fas fa-hand-holding-usd\"></i>\r\n            Counter offer\r\n        </button>\r\n    </div>\r\n\r\n    <!--Answer Content-->\r\n    <div class=\"my-4\">\r\n        <html-content [htmlString]=\"answerView.answer.redactedHtmlContent\"\r\n                      class=\"answer-content\">\r\n        </html-content>\r\n    </div>\r\n\r\n    <div *ngIf=\"isAuthor\">\r\n        <!--Edit-->\r\n        <button class=\"btn btn-sm\"\r\n                (click)=\"OnEditClick()\">\r\n            Edit\r\n        </button>\r\n\r\n        <!--Delete-->\r\n        <button class=\"btn btn-sm ml-1\"\r\n                (click)=\"OnDeleteClick()\">\r\n            <span *ngIf=\"answerView.answer.isDeleted\">Undelete</span>\r\n            <span *ngIf=\"!answerView.answer.isDeleted\">Delete</span>\r\n        </button>\r\n    </div>\r\n\r\n    <!--Answer editor-->\r\n    <div *ngIf=\"isUpdateAnswerVisible\" class=\"row no-gutters\">\r\n        <answer-editor-inline [answerId]=\"answerView.answer.id\"\r\n                              (answerUpdated)=\"onAnswerUpdated($event)\"\r\n                              (updateCancelled)=\"onUpdateCancelled()\">\r\n        </answer-editor-inline>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/answercard/answercard.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/answercard/answercard.component.ts ***!
  \***************************************************************/
/*! exports provided: AnswerCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerCardComponent", function() { return AnswerCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_answers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/answers.service */ "./src/app/services/answers.service.ts");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/User */ "./src/app/models/User.ts");
/* harmony import */ var _models_AnswerRating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/AnswerRating */ "./src/app/models/AnswerRating.ts");
/* harmony import */ var _models_AnswerPayment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/AnswerPayment */ "./src/app/models/AnswerPayment.ts");
/* harmony import */ var _services_answerrating_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/answerrating.service */ "./src/app/services/answerrating.service.ts");
/* harmony import */ var _services_answer_payment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/answer-payment.service */ "./src/app/services/answer-payment.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AnswerCardComponent = /** @class */ (function () {
    function AnswerCardComponent(answerService, answerPaymentService, answerRatingService, modalService) {
        this.answerService = answerService;
        this.answerPaymentService = answerPaymentService;
        this.answerRatingService = answerRatingService;
        this.modalService = modalService;
        this.answerDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showPaymentForm = false;
        this.isPaymentVisible = false;
        this.isUpdateAnswerVisible = false;
        this.rating = [false, false, false, false, false, false];
    }
    Object.defineProperty(AnswerCardComponent.prototype, "isAuthor", {
        get: function () {
            return this.loggedInUser
                && this.answerView
                && this.answerView.answer
                && this.answerView.answer.user
                && this.answerView.answer.user.id === this.loggedInUser.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnswerCardComponent.prototype, "loggedInUser", {
        // Any propoerty that can't be initialized in constrctr needs to include undefined
        get: function () {
            return this._loggedInUser;
        },
        set: function (user) {
            this._loggedInUser = user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnswerCardComponent.prototype, "answerView", {
        get: function () {
            return this._answerView;
        },
        set: function (answerView) {
            if (answerView) {
                this._answerView = answerView;
                if (answerView.rating == null) {
                    this.rating[0] = true;
                }
                else {
                    this.rating[answerView.rating.rating] = true;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    AnswerCardComponent.prototype.rate = function (score) {
        for (var i = 0; i < 6; i++) {
            this.rating[i] = false;
        }
        this.rating[score] = true;
        var answerRating = new _models_AnswerRating__WEBPACK_IMPORTED_MODULE_3__["AnswerRating"]();
        // This method is guarded by an ngIf that guarantees answerView to be defined.
        answerRating.answerId = this.answerView.answer.id;
        answerRating.rating = score;
        this.answerRatingService.postRating(answerRating)
            .subscribe(function (result) { });
    };
    AnswerCardComponent.prototype.OnChargeProcessed = function (isSuccessful) {
        var _this = this;
        if (isSuccessful) {
            this.answerService.purchase(this.answerView.answer.id)
                .subscribe(function () {
                alert("Purchase successful. You can view purchased answers in your profile page.");
                _this.showPaymentForm = false;
            });
        }
    };
    AnswerCardComponent.prototype.OnEditClick = function () {
        this.isUpdateAnswerVisible = true;
    };
    AnswerCardComponent.prototype.OnDeleteClick = function () {
        // non null assertion: Guaraded by ngIf
        this.answerService.delete(this.answerView.answer.id)
            .subscribe(function () {
            //this.answerDeleted.emit(this.answer);
        });
    };
    AnswerCardComponent.prototype.onOpenCreditPay = function () {
        var _this = this;
        var handler = window.StripeCheckout.configure({
            key: 'pk_test_DAraSvJLJBImk4lRam9CiLq8',
            image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
            locale: 'auto',
            token: function (token) {
                var ans = _this._answerView.answer;
                var answerPayment = new _models_AnswerPayment__WEBPACK_IMPORTED_MODULE_4__["AnswerPayment"]();
                answerPayment.amount = ans.price;
                answerPayment.answerId = ans.id;
                answerPayment.paymentTypeId = 1; // TODO: remove hard coding
                answerPayment.token = token.id;
                _this.answerPaymentService.postPayment(answerPayment)
                    .subscribe(function (paymentStatus) {
                    if (paymentStatus.isSuccessful) {
                        _this.answerService.purchase(_this.answerView.answer.id)
                            .subscribe(function () {
                            alert("Purchase successful. You can view purchased answers in your profile page.");
                            _this.showPaymentForm = false;
                        });
                    }
                }, function (error) {
                    console.log('credit payment error ' + error);
                });
            },
            zipCode: true
        });
        handler.open({
            name: 'Sharedmem',
            description: 'Purchase Answer',
            amount: this.answerView.answer.price * 100,
        });
    };
    AnswerCardComponent.prototype.onAnswerUpdated = function (answer) {
        // non null assertion: Guaraded by ngIf
        this.answerView.answer = answer;
        this.isUpdateAnswerVisible = false;
    };
    AnswerCardComponent.prototype.onUpdateCancelled = function () {
        this.isUpdateAnswerVisible = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AnswerCardComponent.prototype, "answerDeleted", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_User__WEBPACK_IMPORTED_MODULE_2__["User"]),
        __metadata("design:paramtypes", [_models_User__WEBPACK_IMPORTED_MODULE_2__["User"]])
    ], AnswerCardComponent.prototype, "loggedInUser", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], AnswerCardComponent.prototype, "answerView", null);
    AnswerCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'answer-card',
            template: __webpack_require__(/*! ./answercard.component.html */ "./src/app/components/answercard/answercard.component.html"),
            styles: [__webpack_require__(/*! ./answercard.component.css */ "./src/app/components/answercard/answercard.component.css")],
        }),
        __metadata("design:paramtypes", [_services_answers_service__WEBPACK_IMPORTED_MODULE_1__["AnswerService"],
            _services_answer_payment_service__WEBPACK_IMPORTED_MODULE_6__["AnswerPaymentService"],
            _services_answerrating_service__WEBPACK_IMPORTED_MODULE_5__["AnswerRatingService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsModalService"]])
    ], AnswerCardComponent);
    return AnswerCardComponent;
}());



/***/ }),

/***/ "./src/app/components/content-editor/contenteditor.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/content-editor/contenteditor.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    border: 1px solid #dfdfdf;\r\n    padding:1em;\r\n    overflow: auto;\r\n    min-height: 200px;\r\n}\r\n\r\n.content-toolbar {\r\n    border-top: 1px solid #dfdfdf;\r\n    border-left: 1px solid #dfdfdf;\r\n    border-right: 1px solid #dfdfdf;\r\n}\r\n\r\n.url-input {\r\n    margin-bottom: 0.25em;\r\n    margin-top: 0.25em;\r\n}\r\n\r\n[contenteditable]:focus {\r\n    outline: 0px solid transparent;\r\n}\r\n\r\n.btn.btn-secondary{\r\n    background-color:white;\r\n    border:none;\r\n    color:#808080;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/content-editor/contenteditor.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/content-editor/contenteditor.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-editor\">\r\n    <div class=\"btn-toolbar content-toolbar justify-content-between\"\r\n         role=\"toolbar\" aria-label=\"\">\r\n        <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"\">\r\n\r\n            <!--Hide/Redact content-->\r\n            <button *ngIf=\"enableRedaction\"\r\n                    type=\"button\"\r\n                    (click)=\"onRedact()\"\r\n                    class=\"btn btn-secondary\">\r\n                <s>Hide</s>\r\n            </button>\r\n\r\n            <!--Unhide content-->\r\n            <button *ngIf=\"enableRedaction\"\r\n                    type=\"button\"\r\n                    (click)=\"onUnRedact()\"\r\n                    class=\"btn btn-secondary\">\r\n                <em>Reveal</em>\r\n            </button>\r\n\r\n            <!--Format Bold-->\r\n            <button type=\"button\"\r\n                    (click)=\"onBold()\"\r\n                    class=\"btn btn-secondary\">\r\n                <b>B</b>\r\n            </button>\r\n\r\n            <!--Format Italic-->\r\n            <button type=\"button\"\r\n                    (click)=\"onItalic()\"\r\n                    class=\"btn btn-secondary\">\r\n                <i>I</i>\r\n            </button>\r\n\r\n            <!--Format Underline-->\r\n            <button type=\"button\"\r\n                    (click)=\"onUnderline()\"\r\n                    class=\"btn btn-secondary\">\r\n                <u>U</u>\r\n            </button>\r\n\r\n            <!--Create Bullet list/ Unordered list-->\r\n            <button type=\"button\"\r\n                    (click)=\"onUnorderedList()\"\r\n                    class=\"btn btn-secondary\">\r\n                <i class=\"fas fa-list-ul\"></i>\r\n            </button>\r\n\r\n            <!--Create numbered list-->\r\n            <button type=\"button\"\r\n                    (click)=\"onOrderedList()\"\r\n                    class=\"btn btn-secondary\">\r\n                <i class=\"fas fa-list-ol\"></i>\r\n            </button>\r\n\r\n            <!--Insert Link-->\r\n            <button type=\"button\"\r\n                    (click)=\"onShowInsertLink(insertLinkTemplate)\"\r\n                    class=\"btn btn-secondary\">\r\n                <i class=\"fas fa-link\"></i>\r\n            </button>\r\n\r\n            <!--Insert Image-->\r\n            <button type=\"button\"\r\n                    (click)=\"onShowInsertImage(insertImageTemplate)\"\r\n                    class=\"btn btn-secondary\">\r\n                <i class=\"far fa-image\"></i>\r\n            </button>\r\n        </div>\r\n\r\n        <!--Insert Image-->\r\n        <!--div class=\"input-group\">\r\n            <input #x type=\"text\" class=\"form-control url-input\"\r\n                   placeholder=\"Image URL...\"\r\n                   [(ngModel)]=\"imgURL\"\r\n                   aria-describedby=\"btnGroupAddon\">\r\n            <div class=\"input-group-append url-input\">\r\n                <button (click)=\"onInsertImage()\"\r\n                        type=\"button\"\r\n                        class=\"input-group-text\">\r\n                    Insert\r\n                </button>\r\n            </div>\r\n\r\n        </div-->\r\n    </div>\r\n\r\n    <div #el contenteditable=\"true\"\r\n         [focus]=\"emitFocusEvent\"\r\n         (blur)=\"onBlur()\"\r\n         class=\"content\"\r\n         [innerHTML]=\"curContent\"\r\n         (input)=\"newContent=el.innerHTML;onContentChange($event)\">\r\n        {{curContent}}\r\n    </div>\r\n</div>\r\n\r\n<!--Modal Template: Insert Link-->\r\n<ng-template #insertLinkTemplate>\r\n    <div class=\"modal-header\">\r\n        <span class=\"modal-title pull-left\">Insert a link</span>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"insertLinkModal.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form [formGroup]=\"linkForm\"\r\n              (ngSubmit)=\"onInsertLink(linkForm.value)\">\r\n            <div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">Link</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input name=\"link\"\r\n                               id=\"link\"\r\n                               formControlName=\"link\"\r\n                               type=\"text\"\r\n                               class=\"form-control\"\r\n                               placeholder=\"https://wwww.wikipedia.org\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <button type=\"submit\"\r\n                    [disabled]=\"!linkForm.valid\"\r\n                    class=\"btn btn-primary\">\r\n                Save\r\n            </button>\r\n        </form>\r\n    </div>\r\n</ng-template>\r\n\r\n<!--Modal Template: Insert Image-->\r\n<ng-template #insertImageTemplate>\r\n    <div class=\"modal-header\">\r\n        <span class=\"modal-title pull-left\">Insert an Image</span>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"insertImageModal.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-sm-2 col-form-label\">Url</label>\r\n            <input type=\"text\"\r\n                   [(ngModel)]=\"imageUrl\"\r\n                   class=\"form-control col-sm-6\"\r\n                   placeholder=\"image url\">\r\n                \r\n            <div class=\"col-sm-2\">\r\n                <input #fileInput\r\n                        type=\"file\"\r\n                        hidden\r\n                        (change)=\"onImageFileSelected($event)\">\r\n                <button type=\"button\"\r\n                        class=\"btn btn-secondary\"\r\n                        (click)=\"fileInput.click()\">\r\n                    <i class=\"far fa-folder-open\"></i> Browse\r\n                </button>\r\n            </div>\r\n        </div>\r\n        \r\n        <button type=\"button\"\r\n                (click)=\"onInsertImage()\"\r\n                class=\"btn btn-primary\">\r\n            Insert\r\n        </button>\r\n    </div>\r\n</ng-template>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/content-editor/contenteditor.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/content-editor/contenteditor.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContentEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentEditorComponent", function() { return ContentEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _services_image_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/image-store.service */ "./src/app/services/image-store.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ContentEditorComponent = /** @class */ (function () {
    function ContentEditorComponent(baseUrl, sanitizer, formBuilder, modalService, imageStoreService) {
        this.sanitizer = sanitizer;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.imageStoreService = imageStoreService;
        this.newContent = "";
        this._enableRedaction = false;
        this.contentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.emitFocusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.enableRedaction = false;
        this.baseUrl = baseUrl;
    }
    Object.defineProperty(ContentEditorComponent.prototype, "content", {
        get: function () {
            return this.newContent;
        },
        set: function (c) {
            this.curContent = this.sanitizer.bypassSecurityTrustHtml(c);
            this.newContent = c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentEditorComponent.prototype, "enableRedaction", {
        get: function () {
            return this._enableRedaction;
        },
        set: function (e) {
            this._enableRedaction = e;
        },
        enumerable: true,
        configurable: true
    });
    ContentEditorComponent.prototype.ngAfterViewInit = function () {
        this.emitFocusEvent.emit(true);
        this.saveSelection();
    };
    ContentEditorComponent.prototype.onShowInsertLink = function (template) {
        this.linkForm = this.formBuilder.group({
            link: this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
        });
        var initialState = {};
        this.insertLinkModal = this.modalService.show(template, { initialState: initialState });
    };
    ContentEditorComponent.prototype.onShowInsertImage = function (template) {
        var initialState = {};
        this.insertImageModal = this.modalService.show(template, { initialState: initialState });
    };
    ContentEditorComponent.prototype.onContentChange = function (event) {
        this.contentChanged.emit(this.newContent);
    };
    ContentEditorComponent.prototype.saveSelection = function () {
        if (window.getSelection) {
            var sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                this.editPosition = sel.getRangeAt(0);
            }
        }
    };
    ContentEditorComponent.prototype.restoreSelection = function () {
        if (this.editPosition) {
            if (window.getSelection) {
                var sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(this.editPosition);
            }
        }
    };
    ContentEditorComponent.prototype.onImageFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
        this.imageUrl = this.selectedFile.name;
    };
    ContentEditorComponent.prototype.upload = function () {
        var formData = new FormData();
        formData.append('image', this.selectedFile, this.selectedFile.name);
        return this.imageStoreService.upload(formData);
    };
    ContentEditorComponent.prototype.onInsertImage = function () {
        var _this = this;
        this.restoreSelection();
        if (this.imageUrl) {
            var imageUrlLowerCase = this.imageUrl.toLowerCase();
            if (imageUrlLowerCase.startsWith("http://") || imageUrlLowerCase.startsWith("https://")) {
                var html = "<img class='img-fluid' src='" + this.imageUrl + "'>";
                document.execCommand("insertHTML", false, html);
                // Guarded by ngIf
                this.insertImageModal.hide();
            }
            else {
                this.upload().subscribe(function (imagePath) {
                    _this.imageUrl = _this.baseUrl.concat("/api/imagestore/").concat(imagePath);
                    var html = "<img class='img-fluid' src='" + _this.imageUrl + "'>";
                    document.execCommand("insertHTML", false, html);
                    // Guarded by ngIf
                    _this.insertImageModal.hide();
                });
            }
        }
    };
    ContentEditorComponent.prototype.onBlur = function () {
        this.saveSelection();
    };
    ContentEditorComponent.prototype.onBold = function () {
        this.formatText('bold');
    };
    ContentEditorComponent.prototype.onItalic = function () {
        this.formatText('italic');
    };
    ContentEditorComponent.prototype.onRedact = function () {
        document.execCommand("foreColor", false, "#d3d3d3");
        document.execCommand("hiliteColor", false, "#d3d3d3");
    };
    ContentEditorComponent.prototype.onUnRedact = function () {
        document.execCommand("hiliteColor", false, "#ffffff");
        document.execCommand("foreColor", false, "#000000");
    };
    ContentEditorComponent.prototype.onUnderline = function () {
        this.formatText('underline');
    };
    ContentEditorComponent.prototype.onUnorderedList = function () {
        this.formatText('insertUnorderedList');
    };
    ContentEditorComponent.prototype.onOrderedList = function () {
        this.formatText('insertOrderedList');
    };
    ContentEditorComponent.prototype.onInsertLink = function (formData) {
        this.restoreSelection();
        var link = formData.link;
        if (link.startsWith("http")) {
        }
        else {
            link = "https://" + link;
        }
        document.execCommand('createLink', false, link);
        // Guarded by ngIf
        this.insertLinkModal.hide();
    };
    ContentEditorComponent.prototype.formatText = function (command) {
        document.execCommand(command, false, null);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ContentEditorComponent.prototype, "contentChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ContentEditorComponent.prototype, "content", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ContentEditorComponent.prototype, "enableRedaction", null);
    ContentEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'content-editor',
            template: __webpack_require__(/*! ./contenteditor.component.html */ "./src/app/components/content-editor/contenteditor.component.html"),
            styles: [__webpack_require__(/*! ./contenteditor.component.css */ "./src/app/components/content-editor/contenteditor.component.css")],
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [String, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _services_image_store_service__WEBPACK_IMPORTED_MODULE_4__["ImageStoreService"]])
    ], ContentEditorComponent);
    return ContentEditorComponent;
}());



/***/ }),

/***/ "./src/app/components/credentials-editor/credentials-editor.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/credentials-editor/credentials-editor.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-item {\r\n    border-bottom: 1px solid #e5e5e5;\r\n    padding:1em;\r\n}\r\n\r\n.credential-text{\r\n    margin-left:1em;\r\n}\r\n\r\n.credential-footer{\r\n    padding:1em;\r\n    float:right;\r\n}\r\n\r\n.list-item-button{\r\n    width:100%;\r\n    background-color:white;\r\n    text-align:left;\r\n    color:dodgerblue;\r\n}\r\n\r\n.list-item-button:hover{\r\n    background-color:lightgray;\r\n}\r\n\r\n.button-label{\r\n    padding-left:1em;\r\n}\r\n\r\n.gray{\r\n    background-color:lightgray;\r\n}"

/***/ }),

/***/ "./src/app/components/credentials-editor/credentials-editor.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/credentials-editor/credentials-editor.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">{{name}}'s Credentials</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"selfModalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n\r\n<!--Main modal showing current credentials-->\r\n<div>\r\n    <!--Modal Template: Popover for selecting credential type-->\r\n    <ng-template #popTemplate>\r\n        <button class=\"btn list-item list-item-button\"\r\n                (click)=\"onOpenAddEducation(educationAddTemplate)\">\r\n            <i class=\"fas fa-graduation-cap\"></i>\r\n            <span class=\"button-label\">Education</span>\r\n        </button>\r\n        <button class=\"btn list-item list-item-button\"\r\n                (click)=\"onOpenAddEmployment(employmentAddTemplate)\">\r\n            <i class=\"fas fa-briefcase\"></i>\r\n            <span class=\"button-label\">Employment</span>\r\n        </button>\r\n    </ng-template>\r\n    <button class=\"btn list-item list-item-button\"\r\n            [popover]=\"popTemplate\"\r\n            placement=\"bottom\"\r\n            [outsideClick]=\"true\">\r\n        <i class=\"fas fa-plus\"></i>\r\n        <span class=\"button-label\">Add a credential</span>\r\n    </button>\r\n    <div *ngIf=\"educations\">\r\n        <div *ngFor=\"let education of educations\" class=\"list-item\">\r\n            <i class=\"fas fa-graduation-cap\"></i>\r\n            <span class=\"credential-text\">\r\n                {{education.degreeType}} in {{education.concentration}}, {{education.school}}\r\n            </span>\r\n            <button class=\"btn btn-light btn-sm\"\r\n                    (click)=\"onOpenEditEducation(educationEditTemplate, education)\">\r\n                <i class=\"fas fa-pencil-alt\"></i> Edit\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"employments\">\r\n        <div *ngFor=\"let employment of employments\" class=\"list-item\">\r\n            <i class=\"fas fa-briefcase\"></i>\r\n            <span class=\"credential-text\">\r\n                {{employment.position}} at {{employment.company}}\r\n            </span>\r\n            <button class=\"btn btn-light btn-sm\"\r\n                    (click)=\"onOpenEditEmployment(employmentEditTemplate, employment)\">\r\n                <i class=\"fas fa-pencil-alt\"></i> Edit\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class=\"credential-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"selfModalRef.hide()\">Close</button>\r\n    </div>\r\n</div>\r\n\r\n<!--Modal Template: Adding Education-->\r\n<ng-template #educationAddTemplate>\r\n    <div class=\"modal-header\">\r\n        <span class=\"modal-title pull-left\">Add education credential</span>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"educationAddModal.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form [formGroup]=\"educationAddForm\"\r\n              (ngSubmit)=\"onAddEducationSubmit(educationAddForm.value)\">\r\n            <div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">School</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input name=\"school\"\r\n                               id=\"school\"\r\n                               formControlName=\"school\"\r\n                               type=\"text\"\r\n                               class=\"form-control\"\r\n                               placeholder=\"North Carolina State University\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">Concentration</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input name=\"concentration\"\r\n                               id=\"concentration\"\r\n                               formControlName=\"concentration\"\r\n                               type=\"text\"\r\n                               class=\"form-control\"\r\n                               placeholder=\"Computer Science\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">Secondary Concentration</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input name=\"secondaryConcentration\"\r\n                               id=\"secondaryConcentration\"\r\n                               formControlName=\"secondaryConcentration\"\r\n                               type=\"text\"\r\n                               class=\"form-control\"\r\n                               placeholder=\"\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">Degree Type</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input name=\"degreeType\"\r\n                               id=\"degreeType\"\r\n                               formControlName=\"degreeType\"\r\n                               type=\"text\"\r\n                               class=\"form-control\"\r\n                               placeholder=\"MS\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">Graduation Year</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input name=\"graduationYear\"\r\n                               id=\"graduationYear\"\r\n                               formControlName=\"graduationYear\"\r\n                               type=\"text\"\r\n                               class=\"form-control\"\r\n                               placeholder=\"2006\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <button type=\"submit\"\r\n                    [disabled]=\"!educationAddForm.valid\"\r\n                    class=\"btn btn-primary\">\r\n                Save\r\n            </button>\r\n        </form>\r\n    </div>\r\n\r\n    <div class=\"credential-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"educationAddModal.hide()\">Close</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<!--Modal Template: Editing Education-->\r\n<ng-template #educationEditTemplate>\r\n    <div class=\"modal-header\">\r\n        <span class=\"modal-title pull-left\">Edit education credential</span>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"educationEditModal.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form [formGroup]=\"educationEditForm\"\r\n              (ngSubmit)=\"onEditEducationSubmit(educationEditForm.value)\">\r\n            <div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">School</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input name=\"school\"\r\n                               id=\"school\"\r\n                               formControlName=\"school\"\r\n                               type=\"text\"\r\n                               class=\"form-control\"\r\n                               placeholder=\"North Carolina State University\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">Concentration</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input name=\"concentration\"\r\n                               id=\"concentration\"\r\n                               formControlName=\"concentration\"\r\n                               type=\"text\"\r\n                               class=\"form-control\"\r\n                               placeholder=\"Computer Science\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">Secondary Concentration</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input name=\"secondaryConcentration\"\r\n                               id=\"secondaryConcentration\"\r\n                               formControlName=\"secondaryConcentration\"\r\n                               type=\"text\"\r\n                               class=\"form-control\"\r\n                               placeholder=\"\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">Degree Type</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input name=\"degreeType\"\r\n                               id=\"degreeType\"\r\n                               formControlName=\"degreeType\"\r\n                               type=\"text\"\r\n                               class=\"form-control\"\r\n                               placeholder=\"MS\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">Graduation Year</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input name=\"graduationYear\"\r\n                               id=\"graduationYear\"\r\n                               formControlName=\"graduationYear\"\r\n                               type=\"text\"\r\n                               class=\"form-control\"\r\n                               placeholder=\"2006\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <button type=\"submit\"\r\n                    [disabled]=\"!educationEditForm.valid\"\r\n                    class=\"btn btn-primary\">\r\n                Save\r\n            </button>\r\n        </form>\r\n    </div>\r\n\r\n    <div class=\"credential-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"educationEditModal.hide()\">Close</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<!--Modal Template: Adding Employment-->\r\n<ng-template #employmentAddTemplate>\r\n    <div class=\"modal-header\">\r\n        <span class=\"modal-title pull-left\">Add employment credential</span>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"employmentAddModal.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form [formGroup]=\"employmentAddForm\"\r\n              (ngSubmit)=\"onAddEmploymentSubmit(employmentAddForm.value)\">\r\n            <div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">Company</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input name=\"company\"\r\n                               id=\"company\"\r\n                               formControlName=\"company\"\r\n                               type=\"text\"\r\n                               class=\"form-control\"\r\n                               placeholder=\"SharedMem Inc.\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">Position</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input name=\"position\"\r\n                               id=\"position\"\r\n                               formControlName=\"position\"\r\n                               type=\"text\"\r\n                               class=\"form-control\"\r\n                               placeholder=\"CEO\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">I currently work here</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input name=\"isCurrent\"\r\n                               id=\"isCurrent\"\r\n                               formControlName=\"isCurrent\"\r\n                               type=\"checkbox\"\r\n                               class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <button type=\"submit\"\r\n                    [disabled]=\"!employmentAddForm.valid\"\r\n                    class=\"btn btn-primary\">\r\n                Save\r\n            </button>\r\n        </form>\r\n    </div>\r\n\r\n    <div class=\"credential-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"employmentAddModal.hide()\">Close</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<!--Modal Template: Editing Employment-->\r\n<ng-template #employmentEditTemplate>\r\n    <div class=\"modal-header\">\r\n        <span class=\"modal-title pull-left\">Edit employment credential</span>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"employmentEditModal.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form [formGroup]=\"employmentEditForm\"\r\n              (ngSubmit)=\"onEditEmploymentSubmit(employmentEditForm.value)\">\r\n            <div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">Company</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input name=\"company\"\r\n                               id=\"company\"\r\n                               formControlName=\"company\"\r\n                               type=\"text\"\r\n                               class=\"form-control\"\r\n                               placeholder=\"SharedMem Inc.\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">Position</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input name=\"position\"\r\n                               id=\"position\"\r\n                               formControlName=\"position\"\r\n                               type=\"text\"\r\n                               class=\"form-control\"\r\n                               placeholder=\"CEO\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">I currently work here</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input name=\"isCurrent\"\r\n                               id=\"isCurrent\"\r\n                               formControlName=\"isCurrent\"\r\n                               type=\"checkbox\"\r\n                               class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <button type=\"submit\"\r\n                    [disabled]=\"!employmentEditForm.valid\"\r\n                    class=\"btn btn-primary\">\r\n                Save\r\n            </button>\r\n        </form>\r\n    </div>\r\n\r\n    <div class=\"credential-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"employmentEditModal.hide()\">Close</button>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/credentials-editor/credentials-editor.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/credentials-editor/credentials-editor.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CredentialsEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CredentialsEditorComponent", function() { return CredentialsEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_application_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/application-user.service */ "./src/app/services/application-user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CredentialsEditorComponent = /** @class */ (function () {
    function CredentialsEditorComponent(profileService, formBuilder, modalService, selfModalRef) {
        this.profileService = profileService;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.selfModalRef = selfModalRef;
        this.name = "";
        this.educations = [];
        this.employments = [];
    }
    CredentialsEditorComponent.prototype.onOpenAddEducation = function (template) {
        this.educationAddForm = this.formBuilder.group({
            school: this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
            concentration: this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
            secondaryConcentration: this.formBuilder.control(''),
            degreeType: this.formBuilder.control(''),
            graduationYear: this.formBuilder.control(''),
        });
        var initialState = {
            name: this.name
        };
        this.educationAddModal = this.modalService.show(template, { initialState: initialState });
    };
    CredentialsEditorComponent.prototype.onOpenEditEducation = function (template, education) {
        var initialState = {
            name: this.name
        };
        this.educationEditForm = this.formBuilder.group({
            id: this.formBuilder.control(education.id),
            school: this.formBuilder.control(education.school, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
            concentration: this.formBuilder.control(education.concentration, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
            secondaryConcentration: this.formBuilder.control(education.secondaryConcentration),
            degreeType: this.formBuilder.control(education.degreeType),
            graduationYear: this.formBuilder.control(education.graduationYear),
        });
        this.educationEditModal = this.modalService.show(template, { initialState: initialState });
    };
    CredentialsEditorComponent.prototype.onOpenAddEmployment = function (template) {
        this.employmentAddForm = this.formBuilder.group({
            company: this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            position: this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            isCurrent: this.formBuilder.control(''),
        });
        var initialState = {
            name: this.name
        };
        this.employmentAddModal = this.modalService.show(template, { initialState: initialState });
    };
    CredentialsEditorComponent.prototype.onOpenEditEmployment = function (template, employment) {
        var initialState = {
            name: this.name
        };
        this.employmentEditForm = this.formBuilder.group({
            id: this.formBuilder.control(employment.id),
            company: this.formBuilder.control(employment.company, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            position: this.formBuilder.control(employment.position, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            isCurrent: this.formBuilder.control(employment.isCurrent),
        });
        this.employmentEditModal = this.modalService.show(template, { initialState: initialState });
    };
    CredentialsEditorComponent.prototype.ngOnInit = function () {
        this.loadCredentials();
    };
    CredentialsEditorComponent.prototype.onAddEducationSubmit = function (education) {
        var _this = this;
        this.profileService.addEducaion(education)
            .subscribe(function () {
            _this.educationAddModal.hide();
            _this.loadCredentials();
        });
    };
    CredentialsEditorComponent.prototype.onEditEducationSubmit = function (education) {
        var _this = this;
        this.profileService.updateEducaion(education)
            .subscribe(function () {
            _this.educationEditModal.hide();
            _this.loadCredentials();
        });
    };
    CredentialsEditorComponent.prototype.onAddEmploymentSubmit = function (employment) {
        var _this = this;
        this.profileService.addEmployment(employment)
            .subscribe(function () {
            _this.employmentAddModal.hide();
            _this.loadCredentials();
        });
    };
    CredentialsEditorComponent.prototype.onEditEmploymentSubmit = function (employment) {
        var _this = this;
        this.profileService.updateEmployment(employment)
            .subscribe(function () {
            _this.employmentEditModal.hide();
            _this.loadCredentials();
        });
    };
    CredentialsEditorComponent.prototype.loadCredentials = function () {
        var _this = this;
        this.profileService.getCredentials(this.userId).subscribe(function (credentials) {
            _this.educations = [];
            _this.employments = [];
            credentials.educations.forEach(function (e) { _this.educations.push(e); });
            credentials.employments.forEach(function (e) { _this.employments.push(e); });
        });
    };
    CredentialsEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'credential-editor',
            template: __webpack_require__(/*! ./credentials-editor.component.html */ "./src/app/components/credentials-editor/credentials-editor.component.html"),
            styles: [__webpack_require__(/*! ./credentials-editor.component.css */ "./src/app/components/credentials-editor/credentials-editor.component.css")]
        }),
        __metadata("design:paramtypes", [_services_application_user_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationUserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]])
    ], CredentialsEditorComponent);
    return CredentialsEditorComponent;
}());



/***/ }),

/***/ "./src/app/components/credentials-readonly/credentials-readonly.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/credentials-readonly/credentials-readonly.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-item {\r\n    border-bottom: 1px solid #e5e5e5;\r\n    padding:1em;\r\n}\r\n\r\n.credential-text{\r\n    margin-left:1em;\r\n}\r\n\r\n.credential-footer{\r\n    padding:1em;\r\n    float:right;\r\n}"

/***/ }),

/***/ "./src/app/components/credentials-readonly/credentials-readonly.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/credentials-readonly/credentials-readonly.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">{{name}}'s Credentials</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div>\r\n    <div *ngIf=\"educations\">\r\n        <div *ngFor=\"let education of educations\" class=\"list-item\">\r\n            <i class=\"fas fa-graduation-cap\"></i>\r\n            <span class=\"credential-text\">\r\n                {{education.degreeType}} in {{education.concentration}}, {{education.school}}\r\n            </span>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"employments\">\r\n        <div *ngFor=\"let employment of employments\" class=\"list-item\">\r\n            <i class=\"fas fa-briefcase\"></i>\r\n            <span class=\"credential-text\">\r\n                {{employment.position}} at {{employment.company}}\r\n            </span>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"credential-footer\">\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">Close</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/credentials-readonly/credentials-readonly.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/credentials-readonly/credentials-readonly.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CredentialsReadonlyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CredentialsReadonlyComponent", function() { return CredentialsReadonlyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CredentialsReadonlyComponent = /** @class */ (function () {
    function CredentialsReadonlyComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.name = "";
        this.educations = [];
        this.employments = [];
    }
    CredentialsReadonlyComponent.prototype.ngOnInit = function () {
    };
    CredentialsReadonlyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'credential-readonly',
            template: __webpack_require__(/*! ./credentials-readonly.component.html */ "./src/app/components/credentials-readonly/credentials-readonly.component.html"),
            styles: [__webpack_require__(/*! ./credentials-readonly.component.css */ "./src/app/components/credentials-readonly/credentials-readonly.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]])
    ], CredentialsReadonlyComponent);
    return CredentialsReadonlyComponent;
}());



/***/ }),

/***/ "./src/app/components/displayquestions/displayquestions.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/displayquestions/displayquestions.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".question-list{\r\n    padding-top:0.25em;\r\n}"

/***/ }),

/***/ "./src/app/components/displayquestions/displayquestions.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/displayquestions/displayquestions.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"!questionViews\" class=\"col\"><em>Loading...</em></p>\r\n\r\n<div *ngIf=\"questionViews\" class=\"question-list\">\r\n    <div *ngFor=\"let questionView of questionViews\">\r\n        <question-card [questionView]=\"questionView\">\r\n        </question-card>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/displayquestions/displayquestions.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/displayquestions/displayquestions.component.ts ***!
  \***************************************************************************/
/*! exports provided: DisplayQuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayQuestionsComponent", function() { return DisplayQuestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/questions.service */ "./src/app/services/questions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplayQuestionsComponent = /** @class */ (function () {
    function DisplayQuestionsComponent(questionService) {
        var _this = this;
        this.questionService = questionService;
        this.questionService.get().subscribe(function (result) {
            _this.questionViews = result;
        }, function (error) { return console.error(error); });
    }
    DisplayQuestionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'display-questions',
            template: __webpack_require__(/*! ./displayquestions.component.html */ "./src/app/components/displayquestions/displayquestions.component.html"),
            styles: [__webpack_require__(/*! ./displayquestions.component.css */ "./src/app/components/displayquestions/displayquestions.component.css")],
        }),
        __metadata("design:paramtypes", [_services_questions_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"]])
    ], DisplayQuestionsComponent);
    return DisplayQuestionsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-page {\r\n    background-color: #e0e0e0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-page\">\r\n    <div class=\"offset-md-1 col-md-9\">\r\n        <form class=\"pt-2\">\r\n            <input type=\"text\" placeholder=\"Search\" class=\"pl-2\" size=\"50\">\r\n        </form>\r\n        <display-questions>\r\n        </display-questions>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/html-content/html-content.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/html-content/html-content.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/html-content/html-content.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/html-content/html-content.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [innerHTML]=\"safeHtmlContent\">\r\n</div>"

/***/ }),

/***/ "./src/app/components/html-content/html-content.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/html-content/html-content.component.ts ***!
  \*******************************************************************/
/*! exports provided: HtmlContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlContentComponent", function() { return HtmlContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HtmlContentComponent = /** @class */ (function () {
    function HtmlContentComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    Object.defineProperty(HtmlContentComponent.prototype, "htmlString", {
        set: function (html) {
            this.safeHtmlContent =
                this.sanitizer.bypassSecurityTrustHtml(html);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], HtmlContentComponent.prototype, "htmlString", null);
    HtmlContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'html-content',
            template: __webpack_require__(/*! ./html-content.component.html */ "./src/app/components/html-content/html-content.component.html"),
            styles: [__webpack_require__(/*! ./html-content.component.css */ "./src/app/components/html-content/html-content.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], HtmlContentComponent);
    return HtmlContentComponent;
}());



/***/ }),

/***/ "./src/app/components/inline-text-editor/inlinetexteditor.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/inline-text-editor/inlinetexteditor.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    border: 1px solid #dfdfdf;\r\n    overflow: auto;\r\n    padding: 0.25em;\r\n    font-family: Georgia;\r\n    font-size: x-large;\r\n    font-weight: 700;\r\n}\r\n\r\n[contenteditable]:focus {\r\n    outline: 0px solid transparent;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/inline-text-editor/inlinetexteditor.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/inline-text-editor/inlinetexteditor.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #el contenteditable=\"true\"\r\n        [focus]=\"emitFocusEvent\"\r\n        class=\"content\"\r\n        [innerHTML]=\"curContent\"\r\n        (input)=\"newContent=el.innerHTML;onContentChange($event)\">\r\n    {{curContent}}\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/inline-text-editor/inlinetexteditor.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/inline-text-editor/inlinetexteditor.component.ts ***!
  \*****************************************************************************/
/*! exports provided: InlineTextEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlineTextEditorComponent", function() { return InlineTextEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InlineTextEditorComponent = /** @class */ (function () {
    function InlineTextEditorComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.newContent = "";
        this.contentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.emitFocusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(InlineTextEditorComponent.prototype, "content", {
        get: function () {
            return this.newContent;
        },
        set: function (c) {
            this.curContent = this.sanitizer.bypassSecurityTrustHtml(c);
            this.newContent = c;
        },
        enumerable: true,
        configurable: true
    });
    InlineTextEditorComponent.prototype.ngAfterViewInit = function () {
        this.emitFocusEvent.emit(true);
    };
    InlineTextEditorComponent.prototype.onContentChange = function (event) {
        this.contentChanged.emit(this.newContent);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], InlineTextEditorComponent.prototype, "contentChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], InlineTextEditorComponent.prototype, "content", null);
    InlineTextEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'inline-text-editor',
            template: __webpack_require__(/*! ./inlinetexteditor.component.html */ "./src/app/components/inline-text-editor/inlinetexteditor.component.html"),
            styles: [__webpack_require__(/*! ./inlinetexteditor.component.css */ "./src/app/components/inline-text-editor/inlinetexteditor.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], InlineTextEditorComponent);
    return InlineTextEditorComponent;
}());



/***/ }),

/***/ "./src/app/components/landingpage/landingpage.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/landingpage/landingpage.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".landing-page {\r\n    font-family: \"Helvetica Neue\";\r\n}\r\n\r\n.center-align {\r\n    text-align: center;\r\n}\r\n\r\n.company-name {\r\n    font-size: 2em;\r\n    padding-top:1em;\r\n    padding-bottom:2em;\r\n}\r\n\r\n.motto-text {\r\n    font-size: 1.5em;\r\n    padding-bottom:3em;\r\n}\r\n\r\n.login-control{\r\n    margin:0.5em;\r\n    padding:0.25em;\r\n}\r\n\r\n.login-form{\r\n    padding-top:0.5em;\r\n}\r\n\r\n.separator-dot {\r\n    font-size: 2em;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/landingpage/landingpage.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/landingpage/landingpage.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"landing-page\">\r\n    <div class=\"company-name center-align\">\r\n        Shared Mem\r\n    </div>\r\n    <div class=\"motto-text center-align\">\r\n        Ask any question. No restrictions.\r\n    </div>\r\n\r\n    <div *ngIf=\"state==0\" class=\"pb-4 center-align\">\r\n        <button class=\"btn btn-sm btn-light\"\r\n                (click)=\"onShowRegistration()\">\r\n            Sign up\r\n        </button>\r\n    </div>\r\n\r\n    <div *ngIf=\"state==1\" class=\"center-align\">\r\n        <registration-form (registrationCompleted)=\"onRegistrationCompleted()\">\r\n        </registration-form>\r\n    </div>\r\n\r\n    <div *ngIf=\"state==0\">\r\n        <login-form (loggedIn)=\"onLoggedIn($event)\"\r\n                    (showRegistration)=\"onShowRegistration()\">\r\n        </login-form>\r\n    </div>\r\n\r\n    <div class=\"center-align pt-5 mt-5\">\r\n        <button class=\"btn btn-sm btn-link\">About</button>\r\n        <span class=\"separator-dot\">.</span>\r\n        <button class=\"btn btn-sm btn-link\">Terms</button>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/landingpage/landingpage.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/landingpage/landingpage.component.ts ***!
  \*****************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(router) {
        this.router = router;
        // 0: login form
        // 1: registration form
        // 2: Request invitation form
        this.state = 0;
        this.loggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.router.onSameUrlNavigation = 'reload';
    }
    LandingPageComponent.prototype.onRegistrationCompleted = function () {
        this.state = 0;
    };
    LandingPageComponent.prototype.onLoggedIn = function (event) {
        this.loggedIn.emit(event);
    };
    LandingPageComponent.prototype.onShowLogin = function () {
        this.state = 0;
    };
    LandingPageComponent.prototype.onShowRegistration = function () {
        this.state = 1;
    };
    LandingPageComponent.prototype.onRequestInvite = function () {
        this.state = 2;
    };
    LandingPageComponent.prototype.onInviteReqSubmitted = function () {
        this.state = 0;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LandingPageComponent.prototype, "loggedIn", void 0);
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'landing-page',
            template: __webpack_require__(/*! ./landingpage.component.html */ "./src/app/components/landingpage/landingpage.component.html"),
            styles: [__webpack_require__(/*! ./landingpage.component.css */ "./src/app/components/landingpage/landingpage.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/components/loginform/loginform.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/loginform/loginform.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-control{\r\n    margin:0.25em;\r\n    padding:0.25em;\r\n}\r\n\r\n.login-form{\r\n    padding-top:0.5em;\r\n    background-color:ghostwhite;\r\n}\r\n\r\ninput:-webkit-autofill {\r\n    -webkit-box-shadow: 0 0 0 30px white inset;\r\n}\r\n\r\n.engraved-text {\r\n    font-size:20px;\r\n    font-family: Futura;\r\n    background-color: #666666;\r\n    -webkit-background-clip: text;\r\n    background-clip: text;\r\n    color: transparent;\r\n    text-shadow: rgba(245,245,245,0.5) 3px 5px 1px;\r\n}"

/***/ }),

/***/ "./src/app/components/loginform/loginform.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/loginform/loginform.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\r\n    <form [formGroup]=\"form\"\r\n          (ngSubmit)=\"onSubmit(form.value)\">\r\n\r\n        <div>\r\n            <input type=\"text\"\r\n                   autofocus\r\n                   autocomplete=\"on\"\r\n                   class=\"login-control\"\r\n                   placeholder=\"Email\"\r\n                   name=\"email\" id=\"email\"\r\n                   formControlName=\"Email\" />\r\n        </div>\r\n        <div class=\"mb-3\">\r\n            <input type=\"password\"\r\n                   autocomplete=\"on\"\r\n                   class=\"login-control\"\r\n                   placeholder=\"Password\"\r\n                   name=\"password\" id=\"password\"\r\n                   formControlName=\"Password\" />            \r\n        </div>\r\n        <div>\r\n            <button type=\"submit\"\r\n                    class=\"btn btn-sm btn-light\">\r\n                Login\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/loginform/loginform.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/loginform/loginform.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_identity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/identity.service */ "./src/app/services/identity.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(formBuilder, identityService) {
        this.formBuilder = formBuilder;
        this.identityService = identityService;
        this.loggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            Email: this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
            Password: this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
        });
    };
    LoginFormComponent.prototype.onSubmit = function (loginForm) {
        var _this = this;
        this.identityService.login(loginForm).subscribe(function (user) {
            if (user) {
                _this.loggedIn.emit(user);
            }
            else {
                alert("Login Failed.");
            }
        }, function (error) {
            alert("Login failed: " + error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginFormComponent.prototype, "loggedIn", void 0);
    LoginFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login-form',
            template: __webpack_require__(/*! ./loginform.component.html */ "./src/app/components/loginform/loginform.component.html"),
            styles: [__webpack_require__(/*! ./loginform.component.css */ "./src/app/components/loginform/loginform.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_identity_service__WEBPACK_IMPORTED_MODULE_2__["IdentityService"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/components/navmenu/navmenu.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/navmenu/navmenu.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand {\r\n    color: black;\r\n    font-family: \"Helvetica Neue\";\r\n    font-weight: 600;\r\n    font-size: x-large;\r\n}\r\n\r\n.nav-item {\r\n    color: black;\r\n}\r\n\r\n.navbar {\r\n    border-bottom: 1px solid #e2e0e0;\r\n}\r\n\r\n.notification-badge {\r\n    position: relative;\r\n}\r\n\r\n.notification-badge[data-badge]:after {\r\n    content: attr(data-badge);\r\n    position: absolute;\r\n    top: 2px;\r\n    right: -2px;\r\n    font-size: .7em;\r\n    background: #b70000;\r\n    color: white;\r\n    width: 18px;\r\n    height: 18px;\r\n    text-align: center;\r\n    line-height: 18px;\r\n    border-radius: 50%;\r\n    box-shadow:none;\r\n}\r\n\r\n.notification-parent{\r\n    position:relative;\r\n}\r\n\r\n.notification-popover{\r\n    position:absolute;\r\n    left:0px;\r\n    top:2.5em;\r\n}\r\n\r\n.pointer-cursor {\r\n    cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/navmenu/navmenu.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/navmenu/navmenu.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-md navbar-light bg-white\">\r\n    <button class=\"navbar-toggler\" type=\"button\"\r\n            data-toggle=\"collapse\"\r\n            data-target=\"#navbarSupportedContent\"\r\n            aria-controls=\"navbarSupportedContent\"\r\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse offset-md-1 col-md-9\" id=\"navbarSupportedContent\">\r\n\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li [routerLinkActive]=\"['link-active']\">\r\n                <a class=\"navbar-brand\" [routerLink]=\"['/home']\">\r\n                    SharedMem\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item active\"\r\n                [routerLinkActive]=\"['link-active']\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/home']\">\r\n                    <i class=\"fas fa-home\"></i>\r\n                    Home\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\"\r\n                [routerLinkActive]=\"['link-active']\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/add-question-form']\">\r\n                    <i class=\"far fa-edit\"></i>\r\n                    Ask\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item dropdown\"\r\n                [routerLinkActive]=\"['link-active']\">\r\n                <div class=\"notification-parent\">\r\n                    <a [ngClass]=\"{'nav-link': true, 'notification-badge': notifications.length, 'pointer-cursor': true}\"\r\n                       attr.data-badge={{notifications.length}}\r\n                       (click)=\"toggleNotification()\">\r\n                        <i class=\"far fa-bell\"></i>\r\n                        Notifications\r\n                    </a>\r\n                    <div class=\"notification-popover\" \r\n                         *ngIf=\"isNotificationsVisible\">\r\n                        <notification-popover [notifications]=\"notifications\"\r\n                                              (notificationDismissed)=\"onNotificationDismissed()\"\r\n                                              (notificationClicked)=\"onNotificationClicked($event)\"\r\n                                              (notificationAllMarkedSeen)=\"onNotificationAllMarkedSeen()\">\r\n                        </notification-popover>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n\r\n            <li class=\"nav-item\"\r\n                *ngIf=\"user\"\r\n                [routerLinkActive]=\"['link-active']\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/profile']\">\r\n                    <i class=\"far fa-user\"></i>\r\n                    {{user.name}}\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\"\r\n                   [routerLink]=\"['/home']\"\r\n                   (click)=\"logoutClick()\">\r\n                    Logout\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n</nav>\r\n\r\n<script>\r\n$(document).ready(function(){\r\n    $('[data-toggle=\"popover\"]').popover();\r\n});\r\n</script>\r\n"

/***/ }),

/***/ "./src/app/components/navmenu/navmenu.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/navmenu/navmenu.component.ts ***!
  \*********************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/User */ "./src/app/models/User.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/notification.service */ "./src/app/services/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent(notificationService) {
        this.notificationService = notificationService;
        this.isNotificationsVisible = false;
        this.notifications = [];
        this.loggedOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NavMenuComponent.prototype.onNotificationDismissed = function () {
        this.isNotificationsVisible = false;
    };
    NavMenuComponent.prototype.toggleNotification = function () {
        this.isNotificationsVisible = !this.isNotificationsVisible;
    };
    NavMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var protocol = location.protocol === "https:" ? "wss:" : "ws:";
        var port = document.location.port ? (":" + document.location.port) : "";
        var webSocketURL = protocol + "//" + document.location.hostname + port + "/api/Notifications/ws";
        var socket = new WebSocket(webSocketURL);
        socket.onopen = function (event) {
            console.log("connection open!");
        };
        socket.onclose = function (event) {
            console.log("webscocket closed.");
        };
        socket.onerror = function (event) {
            console.log("websocket errror.");
        };
        socket.onmessage = function (event) {
            var data = event.data;
            if (data != "ping") {
                //var notification = JSON.parse(data) as Notification;
                //this.notifications.push(notification);
                _this.loadNotifications();
            }
        };
        this.loadNotifications();
    };
    Object.defineProperty(NavMenuComponent.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (u) {
            this._user = u;
        },
        enumerable: true,
        configurable: true
    });
    NavMenuComponent.prototype.getUserId = function () {
        if (this.user) {
            return this.user.id;
        }
    };
    NavMenuComponent.prototype.logoutClick = function () {
        this.loggedOut.emit();
    };
    NavMenuComponent.prototype.loadNotifications = function () {
        var _this = this;
        this.notificationService.getUnseen()
            .subscribe(function (result) {
            _this.notifications = result;
            console.log("Loaded " + _this.notifications.length + " notifications");
        }, function (error) { return console.error(error); });
    };
    NavMenuComponent.prototype.onNotificationAllMarkedSeen = function () {
        var _this = this;
        this.notificationService.markAllAsSeen()
            .subscribe(function (result) { _this.loadNotifications(); });
    };
    NavMenuComponent.prototype.onNotificationClicked = function (id) {
        var _this = this;
        this.notificationService.markAsSeen(id)
            .subscribe(function (result) { _this.loadNotifications(); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NavMenuComponent.prototype, "loggedOut", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_User__WEBPACK_IMPORTED_MODULE_1__["User"]),
        __metadata("design:paramtypes", [_models_User__WEBPACK_IMPORTED_MODULE_1__["User"]])
    ], NavMenuComponent.prototype, "user", null);
    NavMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nav-menu',
            template: __webpack_require__(/*! ./navmenu.component.html */ "./src/app/components/navmenu/navmenu.component.html"),
            styles: [__webpack_require__(/*! ./navmenu.component.css */ "./src/app/components/navmenu/navmenu.component.css")]
        }),
        __metadata("design:paramtypes", [_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]])
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/notification-popover/notification-popover.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/notification-popover/notification-popover.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointer-cursor {\r\n    cursor: pointer;\r\n}\r\n\r\n.notification-content {\r\n    padding: 1em;\r\n    overflow-y: scroll;\r\n    height: auto;\r\n    max-height: 300px;\r\n}\r\n\r\n.arrow_box {\r\n    position: relative;\r\n    background: white;\r\n    border: 1px solid lightgray;\r\n    width: 400px;\r\n    height: auto;\r\n    border-radius:5px;\r\n}\r\n\r\n.arrow_box:after, .arrow_box:before {\r\n        bottom: 100%;\r\n        left: 20%;\r\n        border: solid transparent;\r\n        content: \" \";\r\n        height: 0;\r\n        width: 0;\r\n        position: absolute;\r\n        pointer-events: none;\r\n    }\r\n\r\n.arrow_box:after {\r\n        border-color: rgba(136, 183, 213, 0);\r\n        border-bottom-color: white;\r\n        border-width: 5px;\r\n        margin-left: -5px;\r\n    }\r\n\r\n.arrow_box:before {\r\n        border-color: rgba(194, 225, 245, 0);\r\n        border-bottom-color: lightgray;\r\n        border-width: 7px;\r\n        margin-left: -7px;\r\n    }\r\n\r\na:link {\r\n    color: black;\r\n    font-weight: 400;\r\n}\r\n\r\n/* visited link */\r\n\r\na:visited {\r\n    color: black;\r\n    font-weight: 400;\r\n}\r\n\r\n/* mouse over link */\r\n\r\na:hover {\r\n    color: red;\r\n}\r\n\r\n/* selected link */\r\n\r\na:active {\r\n    color: blue;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/notification-popover/notification-popover.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/notification-popover/notification-popover.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"visible\" class=\"arrow_box\">\r\n    <div class=\"notification-content\">\r\n        <div *ngIf=\"!notifications.length\" class=\"text-center\">\r\n            <span class=\"text-muted\">No unread notifications.</span>\r\n        </div>\r\n        <button *ngIf=\"notifications.length\"\r\n                (click)=\"onMarkAllReadClick()\"\r\n                class=\"btn btn-light\">\r\n            Mark all as read\r\n        </button>\r\n        <hr />\r\n        <div *ngFor=\"let notification of notifications\">\r\n            <p class=\"pointer-cursor\" (click)=\"onNotificationClick(notification.id)\">\r\n                <a href={{notification.link}}>\r\n                    {{notification.eventDescription}}\r\n                </a>\r\n            </p>\r\n            <hr />\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/notification-popover/notification-popover.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/notification-popover/notification-popover.component.ts ***!
  \***********************************************************************************/
/*! exports provided: NotificationPopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPopoverComponent", function() { return NotificationPopoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationPopoverComponent = /** @class */ (function () {
    function NotificationPopoverComponent(_eref) {
        this._eref = _eref;
        this.fistClick = true;
        this.visible = true;
        this.notifications = [];
        this.notificationDismissed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.notificationClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.notificationAllMarkedSeen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.visible = true;
        this.fistClick = true;
    }
    NotificationPopoverComponent.prototype.onMarkAllReadClick = function () {
        this.notificationAllMarkedSeen.emit();
    };
    NotificationPopoverComponent.prototype.onNotificationClick = function (id) {
        this.notificationClicked.emit(id);
    };
    NotificationPopoverComponent.prototype.onClick = function (event) {
        if (!this._eref.nativeElement.contains(event.target)) {
            if (!this.fistClick) {
                this.notificationDismissed.emit();
                this.visible = false;
            }
            else {
                this.fistClick = false;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NotificationPopoverComponent.prototype, "notifications", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NotificationPopoverComponent.prototype, "notificationDismissed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NotificationPopoverComponent.prototype, "notificationClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NotificationPopoverComponent.prototype, "notificationAllMarkedSeen", void 0);
    NotificationPopoverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'notification-popover',
            template: __webpack_require__(/*! ./notification-popover.component.html */ "./src/app/components/notification-popover/notification-popover.component.html"),
            styles: [__webpack_require__(/*! ./notification-popover.component.css */ "./src/app/components/notification-popover/notification-popover.component.css")],
            host: {
                '(document:click)': 'onClick($event)',
            },
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NotificationPopoverComponent);
    return NotificationPopoverComponent;
}());



/***/ }),

/***/ "./src/app/components/purchased-answers/purchased-answers.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/purchased-answers/purchased-answers.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".answer-content {\r\n    margin: 1em;\r\n    text-align:justify;\r\n}\r\n\r\n.section-heading{\r\n    margin-top:1em;\r\n    margin-bottom:1em;\r\n    font-weight:lighter;\r\n    font-size:larger;\r\n}"

/***/ }),

/***/ "./src/app/components/purchased-answers/purchased-answers.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/purchased-answers/purchased-answers.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!purchasedAnswerViews\">\r\n    <em>Loading your purchased answers ...</em>\r\n</div>\r\n<div *ngIf=\"purchasedAnswerViews\">\r\n    <div class=\"section-heading\">\r\n        Your Purchased Answers\r\n    </div>\r\n    <div *ngFor=\"let purchasedAnswerView of purchasedAnswerViews\">\r\n        <h5>\r\n            {{purchasedAnswerView.question.title}}\r\n        </h5>\r\n        <html-content [htmlString]=\"removeRedactionMarkers(purchasedAnswerView.purchasedAnswer.htmlContent)\"\r\n                      class=\"answer-content\">\r\n        </html-content>\r\n        <hr />\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/purchased-answers/purchased-answers.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/purchased-answers/purchased-answers.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PurchasedAnswersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasedAnswersComponent", function() { return PurchasedAnswersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_redactor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/redactor.service */ "./src/app/services/redactor.service.ts");
/* harmony import */ var _services_purchased_answers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/purchased-answers.service */ "./src/app/services/purchased-answers.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PurchasedAnswersComponent = /** @class */ (function () {
    function PurchasedAnswersComponent(activatedRoute, purchasedAnswerService, sanitizer, redactorService) {
        this.activatedRoute = activatedRoute;
        this.purchasedAnswerService = purchasedAnswerService;
        this.sanitizer = sanitizer;
        this.redactorService = redactorService;
        this.loadPurchasedAnswers();
    }
    PurchasedAnswersComponent.prototype.loadPurchasedAnswers = function () {
        var _this = this;
        this.purchasedAnswerService.get().subscribe(function (response) {
            _this.purchasedAnswerViews = response;
        });
    };
    PurchasedAnswersComponent.prototype.removeRedactionMarkers = function (html) {
        return this.redactorService.getRedactionMarkersFreeHtml(html);
    };
    PurchasedAnswersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'purchased-answers',
            template: __webpack_require__(/*! ./purchased-answers.component.html */ "./src/app/components/purchased-answers/purchased-answers.component.html"),
            styles: [__webpack_require__(/*! ./purchased-answers.component.css */ "./src/app/components/purchased-answers/purchased-answers.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_purchased_answers_service__WEBPACK_IMPORTED_MODULE_3__["PurchasedAnswerService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _services_redactor_service__WEBPACK_IMPORTED_MODULE_2__["RedactorService"]])
    ], PurchasedAnswersComponent);
    return PurchasedAnswersComponent;
}());



/***/ }),

/***/ "./src/app/components/questioncard/questioncard.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/questioncard/questioncard.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-body {\r\n    background-color: white;\r\n    padding-top: 0.5em;\r\n    padding-bottom: 0.5em;\r\n    padding-left: 1em;\r\n}\r\n\r\n.card-text{\r\n    margin-top:1em;\r\n    font-family:Tahoma;\r\n}\r\n\r\n.card{\r\n    margin-bottom:1em;\r\n    margin-top:1em;\r\n}\r\n\r\n.card-link{\r\n    color:black;\r\n}\r\n\r\n.asked-by{\r\n    font-size:small;\r\n    font-family:Verdana;\r\n    color:GrayText;\r\n\r\n}\r\n\r\n.card-title {\r\n    font-family: sans-serif;\r\n    font-weight: 700;\r\n    font-size: large;\r\n}\r\n\r\n.previewQuestion {\r\n    margin-bottom:1em;\r\n    font-size:smaller;\r\n    color:#555555;\r\n    display:block;\r\n    max-height:3em;\r\n    overflow: hidden;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/questioncard/questioncard.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/questioncard/questioncard.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"!questionView\"><em>Loading...</em></p>\r\n\r\n <!-- // This does not work in mobile and it breaks the app.\r\n    inViewport\r\n    (inViewportAction)=\"onEnterLeaveViewport($event, questionView.question)\"-->\r\n\r\n<div *ngIf=\"questionView\">\r\n    <div class=\"card\">        \r\n        <div class=\"card-body\">\r\n            <h3 class=\"card-title\">\r\n                <a [routerLink]=\"['/question-detail', questionView.question.id]\"\r\n                   class=\"card-link\">\r\n                    {{questionView.question.title}}\r\n                </a>\r\n                <span class=\"badge badge-light\">\r\n                    ${{questionView.question.offeredPrice}}\r\n                </span>\r\n            </h3>\r\n\r\n            <h6 class=\"asked-by\">\r\n                Asked by {{questionView.question.user.name}}\r\n                {{questionView.question.originDate | readableDate}}\r\n            </h6>\r\n            <html-content [htmlString]=\"previewQuestionDetail\"\r\n                 class=\"card-text previewQuestion\">\r\n            </html-content>\r\n\r\n            <div *ngIf=\"!questionView.isFollowing\">\r\n                <button (click)=\"onFollow()\"\r\n                        class=\"btn btn-light\">\r\n                    <i class=\"fas fa-rss\"></i>\r\n                    Follow\r\n                </button>\r\n            </div>\r\n            <div *ngIf=\"questionView.isFollowing\">\r\n                <button (click)=\"onUnfollow()\"\r\n                        class=\"btn btn-light\">\r\n                    Following\r\n                </button>\r\n            </div>\r\n\r\n            <div *ngIf=\"!previewAnswerContent\">\r\n                <em>No answers yet</em>\r\n            </div>\r\n            <html-content *ngIf=\"previewAnswerContent\"\r\n                          [htmlString]=\"previewAnswerContent\">\r\n            </html-content>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/questioncard/questioncard.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/questioncard/questioncard.component.ts ***!
  \*******************************************************************/
/*! exports provided: QuestionCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionCardComponent", function() { return QuestionCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_questionfollower_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/questionfollower.service */ "./src/app/services/questionfollower.service.ts");
/* harmony import */ var _services_question_views_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/question-views.service */ "./src/app/services/question-views.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionCardComponent = /** @class */ (function () {
    function QuestionCardComponent(questionViewService, questionFollowerService) {
        this.questionViewService = questionViewService;
        this.questionFollowerService = questionFollowerService;
        this.previewAnswerContent = "";
        this.previewQuestionDetail = "";
    }
    QuestionCardComponent.prototype.onEnterLeaveViewport = function (event, question) {
        var entry = event.entry, target = event.target, value = event.value;
        var intObsEntry = entry;
        if (intObsEntry.intersectionRatio === 1) {
            console.log(question.title + " became visible");
            this.questionViewService.add(this._questionView.question.id).subscribe(function () {
            });
        }
        //console.log('entry', entry);
        //console.log('target', target);
        //console.log('value', value);
    };
    QuestionCardComponent.prototype.onFollow = function () {
        var _this = this;
        this.questionFollowerService.follow(this._questionView.question.id).subscribe(function () {
            _this._questionView.isFollowing = true;
        });
    };
    QuestionCardComponent.prototype.onUnfollow = function () {
        var _this = this;
        this.questionFollowerService.unfollow(this._questionView.question.id).subscribe(function () {
            _this._questionView.isFollowing = false;
        });
    };
    Object.defineProperty(QuestionCardComponent.prototype, "questionView", {
        get: function () {
            return this._questionView;
        },
        set: function (questionView) {
            if (questionView) {
                this._questionView = questionView;
                var questionDescription = questionView.question.description;
                if (questionDescription.length > 80) {
                    //this.previewQuestionDetail = questionDescription.substring(0, 75) + " ... ";
                }
                else {
                    //this.previewQuestionDetail = questionDescription;
                }
                this.previewQuestionDetail = questionDescription;
                if (questionView.previewAnswer) {
                    this.previewAnswerContent = questionView.previewAnswer.redactedHtmlContent.substring(0, 100) + " ... ";
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], QuestionCardComponent.prototype, "questionView", null);
    QuestionCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'question-card',
            template: __webpack_require__(/*! ./questioncard.component.html */ "./src/app/components/questioncard/questioncard.component.html"),
            styles: [__webpack_require__(/*! ./questioncard.component.css */ "./src/app/components/questioncard/questioncard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_question_views_service__WEBPACK_IMPORTED_MODULE_2__["QuestionViewService"],
            _services_questionfollower_service__WEBPACK_IMPORTED_MODULE_1__["QuestionFollowerService"]])
    ], QuestionCardComponent);
    return QuestionCardComponent;
}());



/***/ }),

/***/ "./src/app/components/questiondetail/questiondetail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/questiondetail/questiondetail.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".question-detail{\r\n    background-color:white;\r\n}\r\n\r\n.question-title {\r\n    margin-top: 1em;\r\n    font-family: sans-serif;\r\n    font-weight: 600;\r\n    font-size: x-large;\r\n}\r\n\r\n.question-description {\r\n    font-family: sans-serif;\r\n    font-weight: 500;\r\n    font-size: large;\r\n    margin-top:1em;\r\n    margin-bottom:1em;\r\n}\r\n\r\n.delete-question{\r\n    float:right;\r\n}\r\n\r\n.edit-answer-banner{\r\n    padding-left:1em;\r\n    font-size:larger;\r\n    padding-top:1em;\r\n}\r\n\r\n.edit-answer-button {\r\n    padding-left: 1em;\r\n    font-size: larger;\r\n    padding-bottom: 1em;\r\n}"

/***/ }),

/***/ "./src/app/components/questiondetail/questiondetail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/questiondetail/questiondetail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"offset-md-1 col-md-9 question-detail\">\r\n    <p *ngIf=\"!question\"><em>Loading...</em></p>\r\n    <div *ngIf=\"question\">\r\n        <div *ngIf=\"!isQuestionEditorVisible\">\r\n            <div class=\"question-title\">\r\n                <div *ngIf=\"question.isDeleted\">\r\n                    <del>{{question.title}}</del>\r\n                </div>\r\n                <div *ngIf=\"!question.isDeleted\">\r\n                    {{question.title}}\r\n                </div>\r\n                <span class=\"badge badge-secondary badge-success\">\r\n                    ${{question.offeredPrice}}\r\n                </span>\r\n            </div>\r\n\r\n            <div class=\"my-4\">\r\n                <html-content [htmlString]=\"question.description\"\r\n                              class=\"question-description\">\r\n                </html-content>\r\n            </div>\r\n\r\n            <div>\r\n                <button *ngIf=\"isAsker\"\r\n                        class=\"btn btn-default btn-sm\"\r\n                        (click)=\"OnEditQuestionClick()\">\r\n                    Edit Question\r\n                </button>\r\n                <button *ngIf=\"!isAnswerWritten\"\r\n                        class=\"btn btn-default btn-sm ml-1\"\r\n                        (click)=\"OnAnswerClick()\">\r\n                    Answer\r\n                </button>\r\n                <button *ngIf=\"isAsker\"\r\n                        class=\"btn btn-danger delete-question btn-sm\"\r\n                        (click)=\"OnDeleteQuestionClick()\">\r\n                    <span *ngIf=\"question.isDeleted\">Undelete</span>\r\n                    <span *ngIf=\"!question.isDeleted\">Delete</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div *ngIf=\"isQuestionEditorVisible\">\r\n            <question-editor [question]=\"question\"\r\n                             (questionEditCancelled)=\"onQuestionEditCancelled()\"\r\n                             (questionEdited)=\"onQuestionEdited($event)\">\r\n            </question-editor>\r\n        </div>\r\n\r\n        <div *ngIf=\"isAddAnswerVisible\">\r\n            <add-answer [questionId]=\"question.id\"\r\n                        (answerAdded)=\"onAnswerAdded($event)\">\r\n            </add-answer>\r\n        </div>\r\n        <hr />\r\n        \r\n        <div *ngIf=\"isAnswerWritten\">\r\n            <p class=\"edit-answer-banner\">\r\n                You have written an Answer\r\n            </p>\r\n            <p class=\"edit-answer-button\">\r\n                <button class=\"btn btn-secondary btn-light\"\r\n                        [routerLink]=\"['/answer-page', myAnswerId]\">\r\n                    \r\n                    Edit your answer\r\n                </button>\r\n            </p>\r\n            \r\n            <hr />\r\n        </div>\r\n\r\n        <div *ngIf=\"!answerViews\" class=\"row\">\r\n            Loading...\r\n        </div>\r\n        <div *ngIf=\"answerViews\">\r\n            <h4>\r\n                {{answerViews.length}} Answer\r\n            </h4>\r\n            <div *ngFor=\"let answerView of answerViews\">\r\n                <hr />\r\n                <answer-card [answerView]=\"answerView\"\r\n                             [loggedInUser]=\"loggedInUser\"\r\n                             (answerDeleted)=\"onAnswerDeleted($event)\">\r\n                </answer-card>\r\n            </div>\r\n        </div>\r\n        \r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/questiondetail/questiondetail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/questiondetail/questiondetail.component.ts ***!
  \***********************************************************************/
/*! exports provided: QuestionDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionDetailComponent", function() { return QuestionDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_answers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/answers.service */ "./src/app/services/answers.service.ts");
/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/questions.service */ "./src/app/services/questions.service.ts");
/* harmony import */ var _services_identity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/identity.service */ "./src/app/services/identity.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionDetailComponent = /** @class */ (function () {
    function QuestionDetailComponent(activatedRoute, identityService, answerService, questionService) {
        this.activatedRoute = activatedRoute;
        this.identityService = identityService;
        this.answerService = answerService;
        this.questionService = questionService;
        this.isQuestionEditorVisible = false;
        this.isAddAnswerVisible = false;
        this.isAnswerWritten = false;
        this.isAddAnswerVisible = false;
        this.isQuestionEditorVisible = false;
        this.isAnswerWritten = false;
    }
    ;
    Object.defineProperty(QuestionDetailComponent.prototype, "isAsker", {
        get: function () {
            return this.loggedInUser && this.question &&
                this.question.user &&
                this.question.user.id === this.loggedInUser.id;
        },
        enumerable: true,
        configurable: true
    });
    QuestionDetailComponent.prototype.OnAnswerClick = function () {
        this.isAddAnswerVisible = true;
    };
    QuestionDetailComponent.prototype.OnEditQuestionClick = function () {
        this.isQuestionEditorVisible = true;
    };
    // TODO
    QuestionDetailComponent.prototype.OnDeleteQuestionClick = function () {
        this.questionService.update(this.question)
            .subscribe(function (result) {
        }, function (error) { return console.error(error); });
    };
    QuestionDetailComponent.prototype.ngOnDestroy = function () {
        this.paramsSubscription.unsubscribe();
    };
    QuestionDetailComponent.prototype.loadQuestion = function (questionId) {
        var _this = this;
        this.questionService.getById(questionId)
            .subscribe(function (question) {
            _this.question = question;
        }, function (error) { return console.error(error); });
    };
    QuestionDetailComponent.prototype.loadAnswers = function (questionId) {
        var _this = this;
        this.answerService.getForQuestion(questionId)
            .subscribe(function (result) {
            _this.answerViews = result;
            _this.findIfWrittenAnswer();
        }, function (error) { return console.error(error); });
    };
    QuestionDetailComponent.prototype.loadLoggedInUser = function () {
        var _this = this;
        this.identityService.getLoggedInUser()
            .subscribe(function (result) {
            if (result != null) {
                _this.loggedInUser = result;
                _this.findIfWrittenAnswer();
            }
        });
    };
    QuestionDetailComponent.prototype.findIfWrittenAnswer = function () {
        var _this = this;
        if (!this.isAnswerWritten && this.answerViews && this.loggedInUser) {
            this.answerViews.forEach(function (av) {
                if (av.answer.user.id == _this.loggedInUser.id) {
                    _this.isAnswerWritten = true;
                    _this.myAnswerId = av.answer.id;
                }
            });
        }
    };
    QuestionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadLoggedInUser();
        this.paramsSubscription =
            this.activatedRoute.params
                .subscribe(function (params) {
                var questionId = Number(params['id']);
                _this.loadQuestion(questionId);
                _this.loadAnswers(questionId);
            });
    };
    QuestionDetailComponent.prototype.onAnswerAdded = function (answer) {
        this.loadAnswers(this.question.id);
        this.isAddAnswerVisible = false;
    };
    QuestionDetailComponent.prototype.onAnswerDeleted = function (answer) {
        this.loadAnswers(this.question.id);
    };
    QuestionDetailComponent.prototype.onQuestionEdited = function (question) {
        this.isQuestionEditorVisible = false;
        this.loadQuestion(this.question.id);
    };
    QuestionDetailComponent.prototype.onQuestionEditCancelled = function () {
        this.isQuestionEditorVisible = false;
    };
    QuestionDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'question-detail',
            template: __webpack_require__(/*! ./questiondetail.component.html */ "./src/app/components/questiondetail/questiondetail.component.html"),
            styles: [__webpack_require__(/*! ./questiondetail.component.css */ "./src/app/components/questiondetail/questiondetail.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_identity_service__WEBPACK_IMPORTED_MODULE_4__["IdentityService"],
            _services_answers_service__WEBPACK_IMPORTED_MODULE_2__["AnswerService"],
            _services_questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"]])
    ], QuestionDetailComponent);
    return QuestionDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/questioneditor/questioneditor.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/questioneditor/questioneditor.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".question-form{\r\n    margin-top:2em;\r\n    background-color:#fafafa;\r\n}"

/***/ }),

/***/ "./src/app/components/questioneditor/questioneditor.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/questioneditor/questioneditor.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\"\r\n      (ngSubmit)=\"onSubmit(form.value)\">\r\n    <div>\r\n        <h4>Title</h4>\r\n        <textarea rows=\"2\"\r\n                  class=\"form-control\"\r\n                  name=\"title\" id=\"title\"\r\n                  formControlName=\"title\">\r\n        </textarea>\r\n\r\n        <h4>Details</h4>\r\n        <content-editor [content]=\"question.description\"\r\n                        (contentChanged)=\"onDescriptionChanged($event)\">\r\n        </content-editor>\r\n\r\n        <h4>$ Reward:</h4>\r\n        <input type=\"number\"\r\n               class=\"form-control\"\r\n               name=\"OfferedPrice\" id=\"OfferedPrice\"\r\n               formControlName=\"offeredPrice\" />\r\n\r\n    </div>\r\n    <br />\r\n    <button class=\"btn btn-primary\"\r\n            type=\"submit\" [disabled]=\"!form.valid\">\r\n        Save\r\n    </button>\r\n    <button class=\"btn btn-secondary\"\r\n            (click)=\"onCancel()\">\r\n        Cancel\r\n    </button>\r\n</form>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/questioneditor/questioneditor.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/questioneditor/questioneditor.component.ts ***!
  \***********************************************************************/
/*! exports provided: QuestionEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionEditorComponent", function() { return QuestionEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/questions.service */ "./src/app/services/questions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionEditorComponent = /** @class */ (function () {
    function QuestionEditorComponent(formBuilder, questionService, router) {
        this.formBuilder = formBuilder;
        this.questionService = questionService;
        this.router = router;
        this.updatedDescription = "";
        this.questionEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.questionEditCancelled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(QuestionEditorComponent.prototype, "question", {
        get: function () {
            return this._question;
        },
        set: function (question) {
            if (question) {
                this._question = question;
                this.updatedDescription = question.description;
                this.form = this.formBuilder.group({
                    title: this.formBuilder.control(question.title, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    ])),
                    offeredPrice: this.formBuilder.control(question.offeredPrice, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]+'),
                    ]))
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    QuestionEditorComponent.prototype.onDescriptionChanged = function (newDesc) {
        this.updatedDescription = newDesc;
    };
    QuestionEditorComponent.prototype.ngOnInit = function () {
    };
    QuestionEditorComponent.prototype.onSubmit = function (question) {
        var _this = this;
        question.id = this.question.id;
        question.description = this.updatedDescription;
        this.questionService.update(question)
            .subscribe(function () {
            _this.questionEdited.emit(question);
        });
    };
    QuestionEditorComponent.prototype.onCancel = function () {
        this.questionEditCancelled.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], QuestionEditorComponent.prototype, "questionEdited", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], QuestionEditorComponent.prototype, "questionEditCancelled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], QuestionEditorComponent.prototype, "question", null);
    QuestionEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'question-editor',
            template: __webpack_require__(/*! ./questioneditor.component.html */ "./src/app/components/questioneditor/questioneditor.component.html"),
            styles: [__webpack_require__(/*! ./questioneditor.component.css */ "./src/app/components/questioneditor/questioneditor.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QuestionEditorComponent);
    return QuestionEditorComponent;
}());



/***/ }),

/***/ "./src/app/components/registrationform/registrationform.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/registrationform/registrationform.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-control{\r\n    margin:0.5em;\r\n    padding:0.25em;\r\n}\r\n\r\n.login-form{\r\n    padding-top:0.5em;\r\n    background-color:ghostwhite;\r\n}\r\n\r\n.engraved-text {\r\n    font-size:20px;\r\n    font-family: Futura;\r\n    background-color: #666666;\r\n    -webkit-background-clip: text;\r\n    background-clip: text;\r\n    color: transparent;\r\n    text-shadow: rgba(245,245,245,0.5) 3px 5px 1px;\r\n}"

/***/ }),

/***/ "./src/app/components/registrationform/registrationform.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/registrationform/registrationform.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\r\n    Sign Up Form\r\n    <form [formGroup]=\"form\"\r\n          (ngSubmit)=\"onSubmit(form.value)\">\r\n        <div>\r\n            <input type=\"text\"\r\n                   autofocus\r\n                   autocomplete=\"on\"\r\n                   class=\"login-control\"\r\n                   placeholder=\"Name\"\r\n                   name=\"name\" id=\"name\"\r\n                   formControlName=\"Name\" />\r\n        </div>\r\n        <div>\r\n            <input type=\"text\"\r\n                   autofocus\r\n                   autocomplete=\"on\"\r\n                   class=\"login-control\"\r\n                   placeholder=\"Email\"\r\n                   name=\"email\" id=\"email\"\r\n                   formControlName=\"Email\" />\r\n        </div>\r\n        <div>\r\n            <input type=\"password\"\r\n                   autocomplete=\"on\"\r\n                   class=\"login-control\"\r\n                   placeholder=\"Password\"\r\n                   name=\"password\" id=\"password\"\r\n                   formControlName=\"Password\" />\r\n        </div>\r\n        <div>\r\n            <input type=\"password\"\r\n                   autocomplete=\"off\"\r\n                   class=\"login-control\"\r\n                   placeholder=\"Retype Password\"\r\n                   name=\"confirmPassword\" id=\"confirmPassword\"\r\n                   formControlName=\"ConfirmPassword\" />\r\n        </div>\r\n        <div>\r\n            <input type=\"text\"\r\n                   *ngIf=\"isEmailSent\"\r\n                   autocomplete=\"off\"\r\n                   class=\"login-control\"\r\n                   placeholder=\"Email Confirmation Code\"\r\n                   name=\"confirmEmailCode\" id=\"confirmEmailCode\"\r\n                   formControlName=\"ConfirmEmailCode\" />\r\n        </div>\r\n\r\n        <div>\r\n            <button type=\"submit\"\r\n                    class=\"login-control btn btn-light\">\r\n                Submit\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/registrationform/registrationform.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/registrationform/registrationform.component.ts ***!
  \***************************************************************************/
/*! exports provided: RegistrationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationFormComponent", function() { return RegistrationFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_identity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/identity.service */ "./src/app/services/identity.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationFormComponent = /** @class */ (function () {
    function RegistrationFormComponent(formBuilder, identityService) {
        this.formBuilder = formBuilder;
        this.identityService = identityService;
        this.isEmailSent = false;
        this.registrationCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RegistrationFormComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            Name: this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
            Email: this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
            Password: this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
            ConfirmPassword: this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
        });
    };
    RegistrationFormComponent.prototype.confirmRegistration = function (regForm) {
        var _this = this;
        this.identityService.confirmRegistration(regForm).subscribe(function (result) {
            if (result != null && result.length > 0) {
                _this.registrationCompleted.emit();
            }
        }, function (error) { return console.error(error); });
    };
    RegistrationFormComponent.prototype.submitRegistration = function (regForm) {
        var _this = this;
        this.identityService.register(regForm).subscribe(function (result) {
            if (result != null && result.length > 0) {
                _this.isEmailSent = true;
            }
        }, function (error) { return console.error(error); });
    };
    RegistrationFormComponent.prototype.onSubmit = function (regForm) {
        if (this.isEmailSent) {
            this.confirmRegistration(regForm);
        }
        else {
            this.submitRegistration(regForm);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RegistrationFormComponent.prototype, "registrationCompleted", void 0);
    RegistrationFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'registration-form',
            template: __webpack_require__(/*! ./registrationform.component.html */ "./src/app/components/registrationform/registrationform.component.html"),
            styles: [__webpack_require__(/*! ./registrationform.component.css */ "./src/app/components/registrationform/registrationform.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_identity_service__WEBPACK_IMPORTED_MODULE_2__["IdentityService"]])
    ], RegistrationFormComponent);
    return RegistrationFormComponent;
}());



/***/ }),

/***/ "./src/app/components/request-invite/request-invite.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/request-invite/request-invite.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-control{\r\n    margin:0.5em;\r\n    padding:0.25em;\r\n}\r\n\r\n.login-form{\r\n    padding-top:0.5em;\r\n    background-color:ghostwhite;\r\n}\r\n\r\n.engraved-text {\r\n    font-size:20px;\r\n    font-family: Futura;\r\n    background-color: #666666;\r\n    -webkit-background-clip: text;\r\n    background-clip: text;\r\n    color: transparent;\r\n    text-shadow: rgba(245,245,245,0.5) 3px 5px 1px;\r\n}"

/***/ }),

/***/ "./src/app/components/request-invite/request-invite.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/request-invite/request-invite.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\r\n    <form [formGroup]=\"form\"\r\n          (ngSubmit)=\"onSubmit(form.value)\">\r\n        <div>\r\n            <input type=\"text\"\r\n                   autofocus\r\n                   autocomplete=\"on\"\r\n                   class=\"login-control\"\r\n                   placeholder=\"Name\"\r\n                   name=\"name\" id=\"name\"\r\n                   formControlName=\"Name\" />\r\n        </div>\r\n        <div>\r\n            <input type=\"text\"\r\n                   autofocus\r\n                   autocomplete=\"on\"\r\n                   class=\"login-control\"\r\n                   placeholder=\"Email\"\r\n                   name=\"email\" id=\"email\"\r\n                   formControlName=\"Email\" />\r\n        </div>\r\n\r\n        <div>\r\n            <button type=\"submit\"\r\n                    class=\"login-control btn btn-light\">\r\n                Submit\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/request-invite/request-invite.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/request-invite/request-invite.component.ts ***!
  \***********************************************************************/
/*! exports provided: RequestInviteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestInviteComponent", function() { return RequestInviteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_request_invite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request-invite.service */ "./src/app/services/request-invite.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestInviteComponent = /** @class */ (function () {
    function RequestInviteComponent(formBuilder, reqInviteService) {
        this.formBuilder = formBuilder;
        this.reqInviteService = reqInviteService;
        this.inviteReqSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RequestInviteComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            Name: this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
            Email: this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
        });
    };
    RequestInviteComponent.prototype.onSubmit = function (req) {
        var _this = this;
        this.reqInviteService.requestInvitation(req)
            .subscribe(function (result) {
            _this.inviteReqSubmitted.emit();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RequestInviteComponent.prototype, "inviteReqSubmitted", void 0);
    RequestInviteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'request-invite',
            template: __webpack_require__(/*! ./request-invite.component.html */ "./src/app/components/request-invite/request-invite.component.html"),
            styles: [__webpack_require__(/*! ./request-invite.component.css */ "./src/app/components/request-invite/request-invite.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_request_invite_service__WEBPACK_IMPORTED_MODULE_2__["RequestInviteService"]])
    ], RequestInviteComponent);
    return RequestInviteComponent;
}());



/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-picture{\r\n  max-height:200px;\r\n  max-width:200px;\r\n}\r\n\r\n.latest-credential{\r\n    font-size:smaller;\r\n}\r\n\r\n.upper-section {\r\n    padding-top: 1em;\r\n}\r\n\r\n.upper-left-section {\r\n    border-bottom: 2px solid #e8e8e8;\r\n    padding-bottom: 1em;\r\n}\r\n\r\n.upper-right-section {\r\n    border-bottom: 1px solid #e8e8e8;\r\n    padding-bottom: 1em;\r\n}\r\n\r\n.profile-name {\r\n    font-family:Georgia;\r\n    font-size: x-large;\r\n    font-weight: 700;\r\n}\r\n\r\n.edit-link{\r\n    padding-left:0.5em;\r\n    color:lightgray;\r\n    visibility:hidden;\r\n}\r\n\r\n.profile-name:hover + .edit-link{\r\n    visibility:visible;\r\n}\r\n\r\n.edit-link:hover {\r\n    visibility: visible;\r\n}\r\n\r\n.profile-introduction:hover + .edit-link {\r\n    visibility: visible;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"offset-md-1 col-md-9\">\r\n    <div class=\"row upper-section\">\r\n        <div class=\"col-md-9 upper-left-section\">\r\n            <div class=\"row\">\r\n                <div *ngIf=\"currentProfile\" class=\"col-md-4\">\r\n                    <div class=\"row mb-2\">\r\n                        <div>\r\n                            <img class=\"profile-picture\" src={{currentProfile.pictureUrl}} alt={{currentProfile.name}}>\r\n                        </div>    \r\n                    </div>                    \r\n                    <div class=\"row\">\r\n                        <div class=\"offset-md-6\">\r\n                            <button type=\"button\"\r\n                                    (click)=\"onShowChangePicture(changePictureTemplate)\"\r\n                                    class=\"btn btn-light\">\r\n                                Change\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-8\">\r\n                    <span class=\"profile-name\"\r\n                          *ngIf=\"!isNameEditorVisible && currentProfile\">\r\n                        {{currentProfile.name}}\r\n                    </span>\r\n                    <button (click)=\"showNameEditor()\"\r\n                            *ngIf=\"!isNameEditorVisible\"\r\n                            class=\"edit-link btn btn-light\">\r\n                        Edit\r\n                    </button>\r\n                    <inline-text-editor *ngIf=\"isNameEditorVisible && currentProfile\"\r\n                                        [content]=\"currentProfile.name\"\r\n                                        (contentChanged)=\"onNameChange($event)\">\r\n                    </inline-text-editor>\r\n                    <button *ngIf=\"isNameEditorVisible\"\r\n                            (click)=\"updateName()\"\r\n                            class=\"btn btn-sm btn-primary\">\r\n                        Save\r\n                    </button>\r\n                    <button *ngIf=\"isNameEditorVisible\"\r\n                            (click)=\"onCancelNameChange()\"\r\n                            class=\"btn btn-sm btn-secondary ml-1\">\r\n                        Cancel\r\n                    </button>\r\n\r\n                    <div *ngIf=\"!isIntroductionEditorVisible && currentProfile\">\r\n                        <html-content class=\"profile-introduction\"\r\n                                      [htmlString]=\"currentProfile.introduction\"\r\n                                      *ngIf=\"currentProfile.introduction\">\r\n                        </html-content>\r\n                        <html-content class=\"profile-introduction\"\r\n                                      htmlString=\"Introduce yourself here ...\"\r\n                                      *ngIf=\"!currentProfile.introduction\">\r\n                        </html-content>\r\n                        <button (click)=\"showIntroductionEditor()\"\r\n                                class=\"edit-link btn btn-light\">\r\n                            Edit\r\n                        </button>\r\n                    </div>\r\n                    <content-editor *ngIf=\"isIntroductionEditorVisible && currentProfile\"\r\n                                    [content]=\"currentProfile.introduction\"\r\n                                    (contentChanged)=\"onIntroductionChanged($event)\">\r\n                    </content-editor>\r\n\r\n                    <button *ngIf=\"isIntroductionEditorVisible\"\r\n                            (click)=\"updateIntroduction()\"\r\n                            class=\"btn btn-sm btn-primary\">\r\n                        Save\r\n                    </button>\r\n                    <button *ngIf=\"isIntroductionEditorVisible\"\r\n                            (click)=\"onCancelIntroductionChange()\"\r\n                            class=\"btn btn-sm btn-secondary\">\r\n                        Cancel\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3 upper-right-section\">\r\n            Credentials\r\n\r\n            <button (click)=\"onOpenCredentialsEditor()\"\r\n                    class=\"btn btn-light btn-sm\">\r\n                Edit\r\n            </button>\r\n            <div *ngIf=\"latestEmployment\" class=\"latest-credential mt-3\">\r\n                <i class=\"fas fa-briefcase\"></i>\r\n                {{latestEmployment.position}}, {{latestEmployment.company}}\r\n            </div>\r\n            <div *ngIf=\"latestEducation\" class=\"latest-credential mt-3\">\r\n                <i class=\"fas fa-graduation-cap\"></i>\r\n                {{latestEducation.degreeType}}, {{latestEducation.concentration}}, {{latestEducation.school}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div>\r\n        <purchased-answers>\r\n        </purchased-answers>\r\n    </div>\r\n</div>\r\n\r\n<!--Modal Template: Change Picture-->\r\n<ng-template #changePictureTemplate>\r\n    <div class=\"modal-header\">\r\n        <span class=\"modal-title pull-left\">Choose Picture</span>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"changePictureModal.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-sm-2 col-form-label\">Url</label>\r\n            <input type=\"text\"\r\n                   [(ngModel)]=\"imageUrl\"\r\n                   class=\"form-control col-sm-6\"\r\n                   placeholder=\"image url\">\r\n\r\n            <div class=\"col-sm-2\">\r\n                <input #fileInput\r\n                       type=\"file\"\r\n                       hidden\r\n                       (change)=\"onPictureFileSelected($event)\">\r\n                <button type=\"button\"\r\n                        class=\"btn btn-secondary\"\r\n                        (click)=\"fileInput.click()\">\r\n                    <i class=\"far fa-folder-open\"></i> Browse\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n        <button type=\"button\"\r\n                (click)=\"onChangePicture()\"\r\n                class=\"btn btn-primary\">\r\n            Apply Change\r\n        </button>\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_application_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/application-user.service */ "./src/app/services/application-user.service.ts");
/* harmony import */ var _components_credentials_readonly_credentials_readonly_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/credentials-readonly/credentials-readonly.component */ "./src/app/components/credentials-readonly/credentials-readonly.component.ts");
/* harmony import */ var _components_credentials_editor_credentials_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/credentials-editor/credentials-editor.component */ "./src/app/components/credentials-editor/credentials-editor.component.ts");
/* harmony import */ var _services_image_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/image-store.service */ "./src/app/services/image-store.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(baseUrl, modalService, activatedRoute, applicationUserService, imageStoreService) {
        this.modalService = modalService;
        this.activatedRoute = activatedRoute;
        this.applicationUserService = applicationUserService;
        this.imageStoreService = imageStoreService;
        this.isNameEditorVisible = false;
        this.isIntroductionEditorVisible = false;
        this.baseUrl = baseUrl;
    }
    UserProfileComponent.prototype.showNameEditor = function () {
        this.isNameEditorVisible = true;
    };
    UserProfileComponent.prototype.showIntroductionEditor = function () {
        this.isIntroductionEditorVisible = true;
    };
    Object.defineProperty(UserProfileComponent.prototype, "credentials", {
        get: function () {
            return this._credetials;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserProfileComponent.prototype, "currentProfile", {
        get: function () {
            return this._currentProfile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserProfileComponent.prototype, "loggedInUser", {
        get: function () {
            return this._loggedInUser;
        },
        enumerable: true,
        configurable: true
    });
    UserProfileComponent.prototype.onShowChangePicture = function (template) {
        var initialState = {};
        this.changePictureModal = this.modalService.show(template, { initialState: initialState });
    };
    UserProfileComponent.prototype.onPictureFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
        this.imageUrl = this.selectedFile.name;
    };
    UserProfileComponent.prototype.upload = function () {
        var formData = new FormData();
        formData.append('image', this.selectedFile, this.selectedFile.name);
        return this.imageStoreService.upload(formData);
    };
    UserProfileComponent.prototype.onChangePicture = function () {
        var _this = this;
        if (this.imageUrl) {
            var imageUrlLowerCase = this.imageUrl.toLowerCase();
            if (imageUrlLowerCase.startsWith("http://") || imageUrlLowerCase.startsWith("https://")) {
            }
            else {
                this.upload().subscribe(function (imagePath) {
                    _this.imageUrl = _this.baseUrl.concat("/api/imagestore/").concat(imagePath);
                    _this.updatePicture();
                    _this.changePictureModal.hide();
                });
            }
        }
    };
    UserProfileComponent.prototype.onNameChange = function (newName) {
        this._updatedProfile.name = newName;
    };
    UserProfileComponent.prototype.onIntroductionChanged = function (newIntro) {
        this._updatedProfile.introduction = newIntro;
    };
    UserProfileComponent.prototype.onCancelNameChange = function () {
        this.isNameEditorVisible = false;
        this._updatedProfile.name = this._currentProfile.name;
    };
    UserProfileComponent.prototype.onCancelIntroductionChange = function () {
        this.isIntroductionEditorVisible = false;
        this._updatedProfile.introduction = this._currentProfile.introduction;
    };
    UserProfileComponent.prototype.updatePicture = function () {
        var _this = this;
        this._updatedProfile.pictureUrl = this.imageUrl;
        this.applicationUserService
            .updatePictureUrl(this._updatedProfile)
            .subscribe(function () {
            _this._currentProfile.pictureUrl = _this._updatedProfile.pictureUrl;
        });
    };
    UserProfileComponent.prototype.updateName = function () {
        var _this = this;
        this.applicationUserService
            .updateUser(this._updatedProfile)
            .subscribe(function () {
            _this._currentProfile.name = _this._updatedProfile.name;
            _this.isNameEditorVisible = false;
        });
    };
    UserProfileComponent.prototype.updateIntroduction = function () {
        var _this = this;
        this.applicationUserService
            .updateUser(this._updatedProfile)
            .subscribe(function () {
            _this._currentProfile.introduction = _this._updatedProfile.introduction;
            _this.isIntroductionEditorVisible = false;
        });
    };
    UserProfileComponent.prototype.onOpenCredentialsEditor = function () {
        var initialState = {
            name: this.currentProfile.name,
            userId: this.profileUserId
        };
        this.bsModalRef = this.modalService.show(_components_credentials_editor_credentials_editor_component__WEBPACK_IMPORTED_MODULE_5__["CredentialsEditorComponent"], { initialState: initialState });
    };
    UserProfileComponent.prototype.openCredentials = function () {
        var initialState = {
            name: this.currentProfile.name,
            userId: this._loggedInUser.id,
        };
        this.bsModalRef = this.modalService.show(_components_credentials_readonly_credentials_readonly_component__WEBPACK_IMPORTED_MODULE_4__["CredentialsReadonlyComponent"], { initialState: initialState });
    };
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSubscription =
            this.activatedRoute.params
                .subscribe(function (params) {
                _this.profileUserId = params['id'];
                _this.applicationUserService.getProfile(_this.profileUserId).subscribe(function (response) {
                    _this._currentProfile = response;
                    _this._updatedProfile = __assign({}, _this._currentProfile);
                });
                _this.applicationUserService.getCredentials(_this.profileUserId).subscribe(function (response) {
                    _this._credetials = response;
                    if (_this._credetials.employments.length > 0) {
                        _this.latestEmployment = _this._credetials.employments[0];
                    }
                    if (_this._credetials.educations.length > 0) {
                        _this.latestEducation = _this._credetials.educations[0];
                    }
                });
            });
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/components/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/components/user-profile/user-profile.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [String, ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_application_user_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationUserService"],
            _services_image_store_service__WEBPACK_IMPORTED_MODULE_6__["ImageStoreService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user-questions/user-questions.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/user-questions/user-questions.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-questions/user-questions.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/user-questions/user-questions.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"!questions\"><em>Loading...</em></p>\r\n\r\n<div *ngIf=\"questions\">\r\n    <div *ngFor=\"let question of questions\">\r\n        <div>\r\n            <a [routerLink]=\"['/question-detail', question.id]\">\r\n                {{question.title}}\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user-questions/user-questions.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/user-questions/user-questions.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserQuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserQuestionsComponent", function() { return UserQuestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/User */ "./src/app/models/User.ts");
/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/questions.service */ "./src/app/services/questions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserQuestionsComponent = /** @class */ (function () {
    function UserQuestionsComponent(questionService) {
        var _this = this;
        this.questionService = questionService;
        this.questionService.getAllAskedByMe().subscribe(function (response) {
            _this._questions = response;
        });
    }
    Object.defineProperty(UserQuestionsComponent.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (u) {
            this._user = u;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserQuestionsComponent.prototype, "questions", {
        get: function () {
            return this._questions;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_User__WEBPACK_IMPORTED_MODULE_1__["User"]),
        __metadata("design:paramtypes", [_models_User__WEBPACK_IMPORTED_MODULE_1__["User"]])
    ], UserQuestionsComponent.prototype, "user", null);
    UserQuestionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-questions',
            template: __webpack_require__(/*! ./user-questions.component.html */ "./src/app/components/user-questions/user-questions.component.html"),
            styles: [__webpack_require__(/*! ./user-questions.component.css */ "./src/app/components/user-questions/user-questions.component.css")]
        }),
        __metadata("design:paramtypes", [_services_questions_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"]])
    ], UserQuestionsComponent);
    return UserQuestionsComponent;
}());



/***/ }),

/***/ "./src/app/directives/focus.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/directives/focus.directive.ts ***!
  \***********************************************/
/*! exports provided: FocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusDirective", function() { return FocusDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var FocusDirective = /** @class */ (function () {
    function FocusDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FocusDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.focusEvent.subscribe(function () {
            _this.renderer.invokeElementMethod(_this.element.nativeElement, 'focus', []);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('focus'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FocusDirective.prototype, "focusEvent", void 0);
    FocusDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[focus]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], FocusDirective);
    return FocusDirective;
}());



/***/ }),

/***/ "./src/app/directives/viewport-watcher.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/directives/viewport-watcher.directive.ts ***!
  \**********************************************************/
/*! exports provided: ViewPortWatcherDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPortWatcherDirective", function() { return ViewPortWatcherDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_compat_Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs-compat/Subscription */ "./node_modules/rxjs-compat/Subscription.js");
/* harmony import */ var rxjs_compat_Subscription__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_Subscription__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _viewport_watcher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewport-watcher.service */ "./src/app/directives/viewport-watcher.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ViewPortWatcherDirective = /** @class */ (function () {
    function ViewPortWatcherDirective(platformId, elementRef, inViewportService) {
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.inViewportService = inViewportService;
        this.subscription = new rxjs_compat_Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.config = new _viewport_watcher_service__WEBPACK_IMPORTED_MODULE_3__["InViewportConfig"]();
        this.action$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(ViewPortWatcherDirective.prototype, "updateConfig", {
        set: function (value) {
            if (value && Object.prototype.toString.call(value) === '[object Object]') {
                if (value.rootElement instanceof Element) {
                    this.config.rootElement = value.rootElement;
                }
                if ('partial' in value) {
                    this.config.partial = value.partial;
                }
                if ('direction' in value) {
                    this.config.direction = value.direction;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ViewPortWatcherDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this.subscription.add(this.inViewportService.trigger$.subscribe(function (entry) { return _this.check(entry); }));
            this.inViewportService.addTarget(this.elementRef.nativeElement, this.config.rootElement);
        }
        else {
            this.check(undefined, true);
        }
    };
    ViewPortWatcherDirective.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this.inViewportService.removeTarget(this.elementRef.nativeElement, this.config.rootElement);
        }
    };
    ViewPortWatcherDirective.prototype.check = function (entry, force) {
        if (force || (entry && entry.target === this.elementRef.nativeElement)) {
            var value = force || (this.config.partial ? entry.intersectionRatio > 0 : entry.intersectionRatio === 1);
            this.action$.emit({
                entry: entry,
                target: this.elementRef.nativeElement,
                value: value
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('inViewportAction'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ViewPortWatcherDirective.prototype, "action$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('inViewportOptions'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ViewPortWatcherDirective.prototype, "updateConfig", null);
    ViewPortWatcherDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[in-viewport], [inViewport]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [Object,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _viewport_watcher_service__WEBPACK_IMPORTED_MODULE_3__["ViewportWatcherService"]])
    ], ViewPortWatcherDirective);
    return ViewPortWatcherDirective;
}());



/***/ }),

/***/ "./src/app/directives/viewport-watcher.service.ts":
/*!********************************************************!*\
  !*** ./src/app/directives/viewport-watcher.service.ts ***!
  \********************************************************/
/*! exports provided: ViewportWatcherService, InViewportConfigDirection, InViewportConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportWatcherService", function() { return ViewportWatcherService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InViewportConfigDirection", function() { return InViewportConfigDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InViewportConfig", function() { return InViewportConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewportWatcherService = /** @class */ (function () {
    function ViewportWatcherService(ngZone) {
        this.ngZone = ngZone;
        this.registry = [];
        this.trigger$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ViewportWatcherService.prototype.addTarget = function (target, rootElement) {
        var _this = this;
        this.ngZone.runOutsideAngular(function () { return _this.register(target, rootElement); });
    };
    ViewportWatcherService.prototype.removeTarget = function (target, rootElement) {
        var _this = this;
        this.ngZone.runOutsideAngular(function () { return _this.unregister(target, rootElement); });
    };
    ViewportWatcherService.prototype.getRootElement = function (element) {
        return element && element.nodeType === 1 ? element : null;
    };
    ViewportWatcherService.prototype.findRegistryEntry = function (rootElement) {
        var _this = this;
        return this.registry.find(function (item) { return item.rootElement === _this.getRootElement(rootElement); });
    };
    ViewportWatcherService.prototype.onChanges = function (entries) {
        var _this = this;
        if (Array.isArray(entries) && entries.length) {
            entries.forEach(function (entry) { return _this.trigger$.next(entry); });
        }
    };
    ViewportWatcherService.prototype.register = function (target, rootElement) {
        var _this = this;
        var registryEntry = this.findRegistryEntry(rootElement);
        if (!registryEntry) {
            var registryEntryObserverOptions = {
                root: this.getRootElement(rootElement),
                threshold: 1.0
            };
            registryEntry = {
                targets: [target],
                rootElement: this.getRootElement(rootElement),
                observer: new IntersectionObserver(function (entries) { return _this.ngZone.run(function () { return _this.onChanges(entries); }); }, registryEntryObserverOptions)
            };
            registryEntry.observer.observe(target);
            this.registry.push(registryEntry);
        }
        else if (registryEntry.targets.indexOf(target) < 0) {
            registryEntry.targets.push(target);
            registryEntry.observer.observe(target);
        }
    };
    ViewportWatcherService.prototype.unregister = function (target, rootElement) {
        var registryEntry = this.findRegistryEntry(rootElement);
        if (registryEntry) {
            var registryEntryIdx = this.registry.indexOf(registryEntry);
            var targetIdx = registryEntry.targets.indexOf(target);
            if (targetIdx >= 0) {
                registryEntry.observer.unobserve(target);
                registryEntry.targets.splice(targetIdx, 1);
            }
            if (registryEntry.targets.length === 0) {
                registryEntry.observer.disconnect();
                this.registry.splice(registryEntryIdx, 1);
            }
        }
    };
    ViewportWatcherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], ViewportWatcherService);
    return ViewportWatcherService;
}());

var InViewportConfigDirection;
(function (InViewportConfigDirection) {
    InViewportConfigDirection[InViewportConfigDirection["Both"] = 0] = "Both";
    InViewportConfigDirection[InViewportConfigDirection["Vertical"] = 1] = "Vertical";
    InViewportConfigDirection[InViewportConfigDirection["Horizontal"] = 2] = "Horizontal";
})(InViewportConfigDirection || (InViewportConfigDirection = {}));
var alpha = /** @class */ (function () {
    function alpha() {
    }
    return alpha;
}());
var InViewportConfig = /** @class */ (function () {
    function InViewportConfig(options) {
        this.rootElement = options && options.rootElement instanceof Element ? options.rootElement : void 0;
        this.partial = options && 'partial' in options ? options.partial : true;
        this.direction = options && 'direction' in options ? options.direction : InViewportConfigDirection.Both;
    }
    Object.defineProperty(InViewportConfig.prototype, "rootElement", {
        get: function () {
            return this._rootElement;
        },
        set: function (value) {
            if (value) {
                this._rootElement = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InViewportConfig.prototype, "partial", {
        get: function () {
            return this._partial;
        },
        set: function (value) {
            this._partial = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InViewportConfig.prototype, "direction", {
        get: function () {
            return this._direction;
        },
        set: function (value) {
            if (value) {
                this._direction = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return InViewportConfig;
}());



/***/ }),

/***/ "./src/app/models/Answer.ts":
/*!**********************************!*\
  !*** ./src/app/models/Answer.ts ***!
  \**********************************/
/*! exports provided: ProtectedAnswerContent, Answer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtectedAnswerContent", function() { return ProtectedAnswerContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return Answer; });
// ProtectedAnswerContent is defined in this file because
// all access to this class is through Answer class
var ProtectedAnswerContent = /** @class */ (function () {
    function ProtectedAnswerContent() {
        this.htmlContent = "";
    }
    return ProtectedAnswerContent;
}());

var Answer = /** @class */ (function () {
    function Answer() {
        this.redactedHtmlContent = ""; // To be used in general
        this.price = 0;
        this.isAnonymous = false;
    }
    return Answer;
}());



/***/ }),

/***/ "./src/app/models/AnswerDraft.ts":
/*!***************************************!*\
  !*** ./src/app/models/AnswerDraft.ts ***!
  \***************************************/
/*! exports provided: AnswerDraft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerDraft", function() { return AnswerDraft; });
var AnswerDraft = /** @class */ (function () {
    function AnswerDraft() {
        this.htmlContent = "";
        this.price = 0;
        this.isAnonymous = false;
    }
    return AnswerDraft;
}());



/***/ }),

/***/ "./src/app/models/AnswerPayment.ts":
/*!*****************************************!*\
  !*** ./src/app/models/AnswerPayment.ts ***!
  \*****************************************/
/*! exports provided: AnswerPayment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerPayment", function() { return AnswerPayment; });
var AnswerPayment = /** @class */ (function () {
    function AnswerPayment() {
    }
    return AnswerPayment;
}());



/***/ }),

/***/ "./src/app/models/AnswerRating.ts":
/*!****************************************!*\
  !*** ./src/app/models/AnswerRating.ts ***!
  \****************************************/
/*! exports provided: AnswerRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerRating", function() { return AnswerRating; });
var AnswerRating = /** @class */ (function () {
    function AnswerRating() {
    }
    return AnswerRating;
}());



/***/ }),

/***/ "./src/app/models/QuestionTopic.ts":
/*!*****************************************!*\
  !*** ./src/app/models/QuestionTopic.ts ***!
  \*****************************************/
/*! exports provided: QuestionTopic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionTopic", function() { return QuestionTopic; });
var QuestionTopic = /** @class */ (function () {
    function QuestionTopic() {
    }
    return QuestionTopic;
}());



/***/ }),

/***/ "./src/app/models/User.ts":
/*!********************************!*\
  !*** ./src/app/models/User.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/pipes/readable-date.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/readable-date.pipe.ts ***!
  \*********************************************/
/*! exports provided: ReadableDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadableDatePipe", function() { return ReadableDatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReadableDatePipe = /** @class */ (function () {
    function ReadableDatePipe() {
    }
    ReadableDatePipe.prototype.transform = function (utcDate) {
        var utcEvent = new Date(utcDate);
        var utcNow = new Date();
        var msec = utcNow.getTime() - utcEvent.getTime();
        var hh = Math.floor(msec / 1000 / 60 / 60);
        msec -= hh * 1000 * 60 * 60;
        var mm = Math.floor(msec / 1000 / 60);
        msec -= mm * 1000 * 60;
        var ss = Math.floor(msec / 1000);
        msec -= ss * 1000;
        if (hh < 24) {
            if (hh < 1) {
                if (mm < 1) {
                    if (ss < 5) {
                        return "just now";
                    }
                    return ss + " seconds ago";
                }
                else if (mm < 2) {
                    return "about a minute ago";
                }
                else {
                    return "about " + mm + " minutes ago";
                }
            }
            else if (hh < 2) {
                return "about an hour ago";
            }
            else {
                "about " + hh + " hours ago";
            }
            return "about " + hh + " hours ago";
        }
        else if (hh < 48) {
            return "about a day ago";
        }
        else {
            var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            return "on " + utcEvent.toLocaleDateString("en-US", options);
        }
    };
    ReadableDatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'readableDate' })
    ], ReadableDatePipe);
    return ReadableDatePipe;
}());



/***/ }),

/***/ "./src/app/services/answer-drafts.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/answer-drafts.service.ts ***!
  \***************************************************/
/*! exports provided: AnswerDraftService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerDraftService", function() { return AnswerDraftService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnswerDraftService = /** @class */ (function () {
    function AnswerDraftService(http) {
        this.http = http;
    }
    AnswerDraftService.prototype.getForQuestion = function (questionId) {
        return this.http.get('api/AnswerDrafts/ForQuestion/' + questionId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (answers) { return console.log("fetched draft"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getForQuestion')));
    };
    AnswerDraftService.prototype.getById = function (draftId) {
        return this.http.get('api/AnswerDrafts/' + draftId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (answers) { return console.log("fetched draft"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('get by id')));
    };
    AnswerDraftService.prototype.update = function (draft) {
        return this.http.put('api/AnswerDrafts/' + draft.id, draft).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (answers) { return console.log("updated draft"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('update draft')));
    };
    AnswerDraftService.prototype.delete = function (draftId) {
        return this.http.put('api/AnswerDrafts/delete/' + draftId, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (answers) { return console.log("deleted draft"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('delete draft')));
    };
    AnswerDraftService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    AnswerDraftService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AnswerDraftService);
    return AnswerDraftService;
}());



/***/ }),

/***/ "./src/app/services/answer-payment.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/answer-payment.service.ts ***!
  \****************************************************/
/*! exports provided: AnswerPaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerPaymentService", function() { return AnswerPaymentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AnswerPaymentService = /** @class */ (function () {
    function AnswerPaymentService(http) {
        this.http = http;
        this.apiUrlRoot = 'api/AnswerPayments';
    }
    AnswerPaymentService.prototype.postPayment = function (answerPayment) {
        console.log("posting payment");
        return this.http.post(this.apiUrlRoot, answerPayment, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("posted payment"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('post payment')));
    };
    AnswerPaymentService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    AnswerPaymentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AnswerPaymentService);
    return AnswerPaymentService;
}());



/***/ }),

/***/ "./src/app/services/answerrating.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/answerrating.service.ts ***!
  \**************************************************/
/*! exports provided: AnswerRatingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerRatingService", function() { return AnswerRatingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnswerRatingService = /** @class */ (function () {
    function AnswerRatingService(http) {
        this.http = http;
    }
    AnswerRatingService.prototype.postRating = function (answerRating) {
        return this.http.post('api/answerratings', answerRating)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log(""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('')));
    };
    AnswerRatingService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    AnswerRatingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AnswerRatingService);
    return AnswerRatingService;
}());



/***/ }),

/***/ "./src/app/services/answers.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/answers.service.ts ***!
  \*********************************************/
/*! exports provided: AnswerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerService", function() { return AnswerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AnswerService = /** @class */ (function () {
    function AnswerService(http) {
        this.http = http;
        this.answersUrl = 'api/answers'; // URL to web api
    }
    AnswerService.prototype.getForQuestion = function (questionId) {
        return this.http.get('api/Answers/ForQuestion/' + questionId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (answers) { return console.log("fetched answers"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getForQuestion', [])));
    };
    AnswerService.prototype.getById = function (id) {
        return this.http.get('api/Answers/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("fetched answer by id"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("get by id answer")));
    };
    /** POST: add a new Answer to the server */
    AnswerService.prototype.add = function (answer) {
        return this.http.post(this.answersUrl, answer, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (answer) { return console.log("added answer"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('add answer')));
    };
    AnswerService.prototype.purchase = function (answerId) {
        return this.http.post('api/PurchasedAnswers', answerId, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (answerId) { return console.log("purchased answer"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('purchases answer')));
    };
    AnswerService.prototype.update = function (answer) {
        return this.http.put('api/Answers/' + answer.id, answer, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("updated answer id=" + answer.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('update answer')));
    };
    // Delete is needed separate from udpate because,
    // when deleting answer, protected content is not loaded
    // as it was not in edit mode yet.
    AnswerService.prototype.delete = function (answerId) {
        return this.http.put('api/Answers/delete/' + answerId, null, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("deleted answer id=" + answerId); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('delete answer')));
    };
    AnswerService.prototype.unDelete = function (answerId) {
        return this.http.put('api/Answers/undelete/' + answerId, // TODO: not implemented yet.
        null, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("deleted answer id=" + answerId); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('delete answer')));
    };
    /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
    AnswerService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    AnswerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AnswerService);
    return AnswerService;
}());



/***/ }),

/***/ "./src/app/services/application-user.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/application-user.service.ts ***!
  \******************************************************/
/*! exports provided: Education, Employment, Credentials, ApplicationUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Education", function() { return Education; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employment", function() { return Employment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Credentials", function() { return Credentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationUserService", function() { return ApplicationUserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Education = /** @class */ (function () {
    function Education() {
    }
    return Education;
}());

var Employment = /** @class */ (function () {
    function Employment() {
    }
    return Employment;
}());

var Credentials = /** @class */ (function () {
    function Credentials() {
        this.educations = [];
        this.employments = [];
    }
    return Credentials;
}());

var ApplicationUserService = /** @class */ (function () {
    function ApplicationUserService(http) {
        this.http = http;
    }
    ApplicationUserService.prototype.getProfile = function (id) {
        var url = 'api/profile';
        if (id) {
            url = url + "/" + id;
        }
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log(""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('get')));
    };
    ApplicationUserService.prototype.getCredentials = function (id) {
        var url = 'api/credentials';
        if (id) {
            url = url + '/' + id;
        }
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("received credential"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('get')));
    };
    ApplicationUserService.prototype.updatePictureUrl = function (user) {
        return this.http.put('api/profile/pictureurl', user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("updated profule info"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('update credential')));
    };
    ApplicationUserService.prototype.updateUser = function (user) {
        return this.http.put('api/profile', user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("updated profule info"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('update credential')));
    };
    ApplicationUserService.prototype.addEducaion = function (education) {
        return this.http.post('api/credentials/educations', education)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("added education"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('add education')));
    };
    ApplicationUserService.prototype.updateEducaion = function (education) {
        return this.http.put('api/credentials/educations', education)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log(""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('update edu')));
    };
    ApplicationUserService.prototype.addEmployment = function (employment) {
        return this.http.post('api/credentials/employments', employment)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log(""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('add empl')));
    };
    ApplicationUserService.prototype.updateEmployment = function (employment) {
        return this.http.put('api/credentials/employments', employment)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log(""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('update employ')));
    };
    ApplicationUserService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    ApplicationUserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApplicationUserService);
    return ApplicationUserService;
}());



/***/ }),

/***/ "./src/app/services/identity.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/identity.service.ts ***!
  \**********************************************/
/*! exports provided: LoginCredential, RegistrationForm, IdentityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginCredential", function() { return LoginCredential; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationForm", function() { return RegistrationForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityService", function() { return IdentityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginCredential = /** @class */ (function () {
    function LoginCredential() {
    }
    return LoginCredential;
}());

var RegistrationForm = /** @class */ (function () {
    function RegistrationForm() {
    }
    return RegistrationForm;
}());

var IdentityService = /** @class */ (function () {
    function IdentityService(http) {
        this.http = http;
    }
    IdentityService.prototype.register = function (regForm) {
        return this.http.post('api/Account/Register', regForm)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log(""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('register')));
    };
    IdentityService.prototype.confirmRegistration = function (regForm) {
        return this.http.post('api/Account/Confirm', regForm)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log(""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('register')));
    };
    IdentityService.prototype.login = function (credential) {
        return this.http.post('api/Account', credential)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log(""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('login')));
    };
    IdentityService.prototype.logout = function () {
        return this.http.post('api/account/logout', null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log(""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('logout')));
    };
    IdentityService.prototype.getLoggedInUser = function () {
        return this.http.get('api/account/user')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("logged in"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('get logged in user')));
    };
    IdentityService.prototype.refreshCSRFToken = function () {
        return this.http.get('api/Account/refreshtoken')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log(""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('refresh CSRF token')));
    };
    IdentityService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            //console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    IdentityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IdentityService);
    return IdentityService;
}());



/***/ }),

/***/ "./src/app/services/image-store.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/image-store.service.ts ***!
  \*************************************************/
/*! exports provided: ImageStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageStoreService", function() { return ImageStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageStoreService = /** @class */ (function () {
    function ImageStoreService(http) {
        this.http = http;
        this.apiRootUrl = 'api/imagestore'; // URL to web api
    }
    /** POST: add a new Answer to the server */
    ImageStoreService.prototype.upload = function (fd) {
        console.log(fd);
        return this.http.post(this.apiRootUrl, fd).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (p) { return console.log("uploaded file " + p); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('upload File')));
    };
    ImageStoreService.prototype.get = function (name) {
        return this.http.get(this.apiRootUrl + "/" + name, { responseType: 'blob' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("fetching image"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('image fetch')));
        ;
    };
    /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
    ImageStoreService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    ImageStoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ImageStoreService);
    return ImageStoreService;
}());



/***/ }),

/***/ "./src/app/services/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificationService = /** @class */ (function () {
    function NotificationService(http) {
        this.http = http;
    }
    NotificationService.prototype.getUnseen = function () {
        return this.http.get('api/notifications/unseen')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (n) { return console.log("fetched notifs"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('get unseen', [])));
    };
    NotificationService.prototype.markAsSeen = function (id) {
        return this.http.post('api/notifications/markseen', id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (n) { return console.log("marked notif seen"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('mark seen')));
    };
    NotificationService.prototype.markAllAsSeen = function () {
        return this.http.post('api/notifications/markallseen', null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (n) { return console.log("marked all notifs seen"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('mark all seen')));
    };
    NotificationService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/services/purchased-answers.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/purchased-answers.service.ts ***!
  \*******************************************************/
/*! exports provided: PurchasedAnswerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasedAnswerService", function() { return PurchasedAnswerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PurchasedAnswerService = /** @class */ (function () {
    function PurchasedAnswerService(http) {
        this.http = http;
    }
    PurchasedAnswerService.prototype.get = function () {
        return this.http.get('api/PurchasedAnswers').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (p) { return console.log(""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('get', [])));
    };
    PurchasedAnswerService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    PurchasedAnswerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PurchasedAnswerService);
    return PurchasedAnswerService;
}());



/***/ }),

/***/ "./src/app/services/question-topics.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/question-topics.service.ts ***!
  \*****************************************************/
/*! exports provided: QuestionTopicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionTopicService", function() { return QuestionTopicService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_QuestionTopic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/QuestionTopic */ "./src/app/models/QuestionTopic.ts");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var QuestionTopicService = /** @class */ (function () {
    function QuestionTopicService(http) {
        this.http = http;
        this.apiUrlRoot = 'api/QuestionTopics';
    }
    QuestionTopicService.prototype.add = function (questionId, topicId) {
        var questionTopic = new _models_QuestionTopic__WEBPACK_IMPORTED_MODULE_2__["QuestionTopic"]();
        questionTopic.questionId = questionId;
        questionTopic.topicId = topicId;
        return this.http.post(this.apiUrlRoot, questionTopic, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("added question topic"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('add question topic')));
    };
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    QuestionTopicService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    QuestionTopicService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], QuestionTopicService);
    return QuestionTopicService;
}());



/***/ }),

/***/ "./src/app/services/question-views.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/question-views.service.ts ***!
  \****************************************************/
/*! exports provided: QuestionViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionViewService", function() { return QuestionViewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var QuestionViewService = /** @class */ (function () {
    function QuestionViewService(http) {
        this.http = http;
        this.apiUrlRoot = 'api/QuestionViews';
    }
    /** POST: add a new hero to the server */
    QuestionViewService.prototype.add = function (questionId) {
        return this.http.post(this.apiUrlRoot, questionId, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("added question view"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('add question view')));
    };
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    QuestionViewService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    QuestionViewService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], QuestionViewService);
    return QuestionViewService;
}());



/***/ }),

/***/ "./src/app/services/questionfollower.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/questionfollower.service.ts ***!
  \******************************************************/
/*! exports provided: QuestionFollowerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionFollowerService", function() { return QuestionFollowerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionFollowerService = /** @class */ (function () {
    function QuestionFollowerService(http) {
        this.http = http;
    }
    QuestionFollowerService.prototype.follow = function (questionId) {
        return this.http.post('api/questionfollowers/follow', questionId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (heroes) { return console.log("followed"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('follow')));
    };
    QuestionFollowerService.prototype.unfollow = function (questionId) {
        return this.http.post('api/questionfollowers/unfollow', questionId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (heroes) { return console.log("unfollowed"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('unfollow')));
    };
    QuestionFollowerService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    QuestionFollowerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], QuestionFollowerService);
    return QuestionFollowerService;
}());



/***/ }),

/***/ "./src/app/services/questions.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/questions.service.ts ***!
  \***********************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var QuestionService = /** @class */ (function () {
    function QuestionService(http) {
        this.http = http;
        this.questionsUrl = 'api/Questions'; // URL to web api
    }
    QuestionService.prototype.getAllAskedByMe = function () {
        return this.http.get(this.questionsUrl + '/my')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (heroes) { return console.log("fetched my questions"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getAllAskedByMe', [])));
    };
    QuestionService.prototype.get = function () {
        return this.http.get(this.questionsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("fetched all questions"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('get', [])));
    };
    QuestionService.prototype.getById = function (id) {
        return this.http.get('api/questions/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (heroes) { return console.log("fetched a question"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getById')));
    };
    /** POST: add a new hero to the server */
    QuestionService.prototype.add = function (question) {
        return this.http.post(this.questionsUrl, question, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (question) { return console.log("added question"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('add')));
    };
    /** PUT: update the hero on the server */
    QuestionService.prototype.update = function (question) {
        return this.http.put(this.questionsUrl, question, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("updated question id=" + question.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('update question')));
    };
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    QuestionService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    QuestionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "./src/app/services/redactor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/redactor.service.ts ***!
  \**********************************************/
/*! exports provided: RedactorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedactorService", function() { return RedactorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RedactorService = /** @class */ (function () {
    function RedactorService() {
        this.redactedColor = 'rgb(211, 211, 211)';
    }
    RedactorService.prototype.getRedactionMarkersFreeHtml = function (html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html");
        var root = doc.body;
        this.removeRedactionMarkers(root);
        return root.innerHTML;
    };
    RedactorService.prototype.removeRedactionMarkers = function (root) {
        var done = false;
        while (!done) {
            done = true;
            for (var i = 0; i < root.children.length; i++) {
                var child = root.children.item(i);
                var color = child.style.backgroundColor;
                if (color == this.redactedColor) {
                    child.style.backgroundColor = 'rgb(255, 255, 255)';
                    child.style.color = 'rgb(0, 0, 0)';
                    done = false;
                    break;
                }
            }
        }
        for (var i = 0; i < root.children.length; i++) {
            var child = root.children.item(i);
            this.removeRedactionMarkers(child);
        }
    };
    RedactorService.prototype.getRedactedHtml = function (html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html");
        var root = doc.body;
        this.removeRedacted(root);
        return root.innerHTML;
    };
    RedactorService.prototype.removeRedacted = function (root) {
        var done = false;
        while (!done) {
            done = true;
            for (var i = 0; i < root.children.length; i++) {
                var child = root.children.item(i);
                var color = child.style.backgroundColor;
                if (color == this.redactedColor) {
                    var e = document.createElement("span");
                    e.innerHTML = "&nbsp;&nbsp;_____&nbsp;&nbsp;";
                    root.replaceChild(e, child);
                    done = false;
                    break;
                }
            }
        }
        for (var i = 0; i < root.children.length; i++) {
            var child = root.children.item(i);
            this.removeRedacted(child);
        }
    };
    RedactorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], RedactorService);
    return RedactorService;
}());



/***/ }),

/***/ "./src/app/services/request-invite.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/request-invite.service.ts ***!
  \****************************************************/
/*! exports provided: RequestInviteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestInviteService", function() { return RequestInviteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestInviteService = /** @class */ (function () {
    function RequestInviteService(http) {
        this.http = http;
    }
    RequestInviteService.prototype.requestInvitation = function (req) {
        return this.http.post('api/InvitationRequests', req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("requested invitation"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('request invitation')));
    };
    RequestInviteService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            //console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    RequestInviteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RequestInviteService);
    return RequestInviteService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Auna\source\repos\ProjectQ\UI\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map