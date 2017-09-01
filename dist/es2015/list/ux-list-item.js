var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, bindable, ViewResources, processAttributes } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { StyleEngine } from 'aurelia-ux';
import { processDesignAttributes } from 'aurelia-ux';
let UxListItem = class UxListItem {
    constructor(resources, styleEngine) {
        this.resources = resources;
        this.styleEngine = styleEngine;
        this.theme = null;
    }
    created(_, myView) {
        this.view = myView;
    }
    bind() {
        if (this.theme) {
            this.styleEngine.applyTheme(this, this.theme);
        }
    }
    themeChanged(newValue) {
        this.styleEngine.applyTheme(this, newValue);
    }
};
__decorate([
    bindable
], UxListItem.prototype, "theme", void 0);
UxListItem = __decorate([
    inject(ViewResources, StyleEngine),
    customElement('ux-list-item'),
    processAttributes(processDesignAttributes)
], UxListItem);
export { UxListItem };
