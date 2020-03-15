"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
var IonRangeSliderComponent = (function () {
    function IonRangeSliderComponent(el) {
        this.onStart = new core_1.EventEmitter();
        this.onChange = new core_1.EventEmitter();
        this.onFinish = new core_1.EventEmitter();
        this.onUpdate = new core_1.EventEmitter();
        this.initialized = false;
        this.el = el;
    }
    IonRangeSliderComponent.prototype.ngOnInit = function () {
        this.inputElem = this.el.nativeElement.getElementsByTagName('input')[0];
        this.initSlider();
    };
    IonRangeSliderComponent.prototype.ngOnChanges = function (changes) {
        if (this.initialized) {
            for (var propName in changes) {
                var update = {};
                update[propName] = changes[propName].currentValue;
                jQuery(this.inputElem).data("ionRangeSlider").update(update);
            }
        }
    };
    IonRangeSliderComponent.prototype.update = function (data) {
        jQuery(this.inputElem).data("ionRangeSlider").update(data);
    };
    IonRangeSliderComponent.prototype.reset = function () {
        jQuery(this.inputElem).data("ionRangeSlider").reset();
    };
    IonRangeSliderComponent.prototype.destroy = function () {
        jQuery(this.inputElem).data("ionRangeSlider").destroy();
    };
    IonRangeSliderComponent.prototype.initSlider = function () {
        var that = this;
        jQuery(this.inputElem).ionRangeSlider({
            min: that.min,
            max: that.max,
            from: that.from,
            to: that.to,
            disable: this.toBoolean(that.disable),
            type: that.type,
            step: that.step,
            min_interval: that.min_interval,
            max_interval: that.max_interval,
            drag_interval: that.drag_interval,
            values: that.values,
            from_fixed: this.toBoolean(that.from_fixed),
            from_min: that.from_min,
            from_max: that.from_max,
            from_shadow: this.toBoolean(that.from_shadow),
            to_fixed: this.toBoolean(that.to_fixed),
            to_min: that.to_min,
            to_max: that.to_max,
            to_shadow: this.toBoolean(that.to_shadow),
            prettify_enabled: this.toBoolean(that.prettify_enabled),
            prettify_separator: that.prettify_separator,
            force_edges: this.toBoolean(that.force_edges),
            keyboard: this.toBoolean(that.keyboard),
            keyboard_step: that.keyboard_step,
            grid: this.toBoolean(that.grid),
            grid_margin: this.toBoolean(that.grid_margin),
            grid_num: that.grid_num,
            grid_snap: this.toBoolean(that.grid_snap),
            hide_min_max: this.toBoolean(that.hide_min_max),
            hide_from_to: this.toBoolean(that.hide_from_to),
            prefix: that.prefix,
            postfix: that.postfix,
            max_postfix: that.max_postfix,
            decorate_both: this.toBoolean(that.decorate_both),
            values_separator: that.values_separator,
            input_values_separator: that.input_values_separator,
            prettify: that.prettify,
            onStart: function () {
                that.onStart.emit(that.buildCallback());
            },
            onChange: function (a) {
                that.updateInternalValues(a);
                that.onChange.emit(that.buildCallback());
            },
            onFinish: function () {
                that.onFinish.emit(that.buildCallback());
            },
            onUpdate: function () {
                that.onUpdate.emit(that.buildCallback());
            }
        });
        this.initialized = true;
    };
    IonRangeSliderComponent.prototype.toBoolean = function (value) {
        if (value && typeof value === "string") {
            return value.toLowerCase() != "false";
        }
        else {
            return value;
        }
    };
    IonRangeSliderComponent.prototype.updateInternalValues = function (data) {
        this.min = data.min;
        this.max = data.max;
        this.from = data.from;
        this.from_percent = data.from_percent;
        this.from_value = data.from_value;
        this.to = data.to;
        this.to_percent = data.to_percent;
        this.to_value = data.to_value;
    };
    IonRangeSliderComponent.prototype.buildCallback = function () {
        var callback = new IonRangeSliderCallback();
        callback.min = this.min;
        callback.max = this.max;
        callback.from = this.from;
        callback.from_percent = this.from_percent;
        callback.from_value = this.from_value;
        callback.to = this.to;
        callback.to_percent = this.to_percent;
        callback.to_value = this.to_value;
        return callback;
    };
    IonRangeSliderComponent.ɵfac = function IonRangeSliderComponent_Factory(t) { return new (t || IonRangeSliderComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    IonRangeSliderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: IonRangeSliderComponent, selectors: [["ion-range-slider"]], inputs: { min: "min", max: "max", from: "from", to: "to", disable: "disable", type: "type", step: "step", min_interval: "min_interval", max_interval: "max_interval", drag_interval: "drag_interval", values: "values", from_fixed: "from_fixed", from_min: "from_min", from_max: "from_max", from_shadow: "from_shadow", to_fixed: "to_fixed", to_min: "to_min", to_max: "to_max", to_shadow: "to_shadow", prettify_enabled: "prettify_enabled", prettify_separator: "prettify_separator", force_edges: "force_edges", keyboard: "keyboard", keyboard_step: "keyboard_step", grid: "grid", grid_margin: "grid_margin", grid_num: "grid_num", grid_snap: "grid_snap", hide_min_max: "hide_min_max", hide_from_to: "hide_from_to", prefix: "prefix", postfix: "postfix", max_postfix: "max_postfix", decorate_both: "decorate_both", values_separator: "values_separator", input_values_separator: "input_values_separator", prettify: "prettify" }, outputs: { onStart: "onStart", onChange: "onChange", onFinish: "onFinish", onUpdate: "onUpdate" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [["type", "text", "value", ""]], template: function IonRangeSliderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "input", 0);
        } }, encapsulation: 2 });
    return IonRangeSliderComponent;
}());
exports.IonRangeSliderComponent = IonRangeSliderComponent;
(function () { i0.ɵsetClassMetadata(IonRangeSliderComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'ion-range-slider',
                template: "<input type=\"text\" value=\"\" />"
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { min: [{
            type: core_1.Input
        }], max: [{
            type: core_1.Input
        }], from: [{
            type: core_1.Input
        }], to: [{
            type: core_1.Input
        }], disable: [{
            type: core_1.Input
        }], type: [{
            type: core_1.Input
        }], step: [{
            type: core_1.Input
        }], min_interval: [{
            type: core_1.Input
        }], max_interval: [{
            type: core_1.Input
        }], drag_interval: [{
            type: core_1.Input
        }], values: [{
            type: core_1.Input
        }], from_fixed: [{
            type: core_1.Input
        }], from_min: [{
            type: core_1.Input
        }], from_max: [{
            type: core_1.Input
        }], from_shadow: [{
            type: core_1.Input
        }], to_fixed: [{
            type: core_1.Input
        }], to_min: [{
            type: core_1.Input
        }], to_max: [{
            type: core_1.Input
        }], to_shadow: [{
            type: core_1.Input
        }], prettify_enabled: [{
            type: core_1.Input
        }], prettify_separator: [{
            type: core_1.Input
        }], force_edges: [{
            type: core_1.Input
        }], keyboard: [{
            type: core_1.Input
        }], keyboard_step: [{
            type: core_1.Input
        }], grid: [{
            type: core_1.Input
        }], grid_margin: [{
            type: core_1.Input
        }], grid_num: [{
            type: core_1.Input
        }], grid_snap: [{
            type: core_1.Input
        }], hide_min_max: [{
            type: core_1.Input
        }], hide_from_to: [{
            type: core_1.Input
        }], prefix: [{
            type: core_1.Input
        }], postfix: [{
            type: core_1.Input
        }], max_postfix: [{
            type: core_1.Input
        }], decorate_both: [{
            type: core_1.Input
        }], values_separator: [{
            type: core_1.Input
        }], input_values_separator: [{
            type: core_1.Input
        }], prettify: [{
            type: core_1.Input
        }], onStart: [{
            type: core_1.Output
        }], onChange: [{
            type: core_1.Output
        }], onFinish: [{
            type: core_1.Output
        }], onUpdate: [{
            type: core_1.Output
        }] }); })();
var IonRangeSliderCallback = (function () {
    function IonRangeSliderCallback() {
    }
    return IonRangeSliderCallback;
}());
exports.IonRangeSliderCallback = IonRangeSliderCallback;
//# sourceMappingURL=ion-range-slider.component.js.map