"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var widget_1 = require("./widget");
var WidgetListingComponent = (function () {
    function WidgetListingComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', widget_1.Widget)
    ], WidgetListingComponent.prototype, "widget", void 0);
    WidgetListingComponent = __decorate([
        core_1.Component({
            selector: "widget-listing",
            templateUrl: "app/widget.listing.component.html",
            styleUrls: ["app/widget.listing.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], WidgetListingComponent);
    return WidgetListingComponent;
}());
exports.WidgetListingComponent = WidgetListingComponent;
//# sourceMappingURL=widget.listing.component.js.map