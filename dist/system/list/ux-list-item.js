System.register(["aurelia-templating", "aurelia-dependency-injection", "aurelia-ux"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_templating_1, aurelia_dependency_injection_1, aurelia_ux_1, aurelia_ux_2, UxListItem;
    return {
        setters: [
            function (aurelia_templating_1_1) {
                aurelia_templating_1 = aurelia_templating_1_1;
            },
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (aurelia_ux_1_1) {
                aurelia_ux_1 = aurelia_ux_1_1;
                aurelia_ux_2 = aurelia_ux_1_1;
            }
        ],
        execute: function () {
            UxListItem = /** @class */ (function () {
                function UxListItem(resources, styleEngine) {
                    this.resources = resources;
                    this.styleEngine = styleEngine;
                    this.theme = null;
                }
                UxListItem.prototype.created = function (_, myView) {
                    this.view = myView;
                };
                UxListItem.prototype.bind = function () {
                    if (this.theme) {
                        this.styleEngine.applyTheme(this, this.theme);
                    }
                };
                UxListItem.prototype.themeChanged = function (newValue) {
                    this.styleEngine.applyTheme(this, newValue);
                };
                __decorate([
                    aurelia_templating_1.bindable
                ], UxListItem.prototype, "theme", void 0);
                UxListItem = __decorate([
                    aurelia_dependency_injection_1.inject(aurelia_templating_1.ViewResources, aurelia_ux_1.StyleEngine),
                    aurelia_templating_1.customElement('ux-list-item'),
                    aurelia_templating_1.processAttributes(aurelia_ux_2.processDesignAttributes)
                ], UxListItem);
                return UxListItem;
            }());
            exports_1("UxListItem", UxListItem);
        }
    };
});
