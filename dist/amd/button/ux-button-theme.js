var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-ux"], function (require, exports, aurelia_ux_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxButtonTheme = /** @class */ (function () {
        function UxButtonTheme() {
            this.type = 'raised'; // flat, raised or fab
            this.size = 'medium'; // small, medium or large
            this.effect = 'ripple'; // ripple or none
        }
        UxButtonTheme = __decorate([
            aurelia_ux_1.styles()
        ], UxButtonTheme);
        return UxButtonTheme;
    }());
    exports.UxButtonTheme = UxButtonTheme;
});
