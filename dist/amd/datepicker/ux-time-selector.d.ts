import { ViewResources, View } from 'aurelia-templating';
import { StyleEngine } from 'aurelia-ux';
import { Themable } from 'aurelia-ux';
import { Moment } from 'moment';
export declare class UxTimeSelector implements Themable {
    element: Element;
    resources: ViewResources;
    private styleEngine;
    theme: null;
    minTime: Moment | null;
    maxTime: Moment | null;
    value: Moment;
    view: View;
    private selectedAmPm;
    constructor(element: Element, resources: ViewResources, styleEngine: StyleEngine);
    created(_: any, myView: View): void;
    bind(): void;
    themeChanged(newValue: any): void;
    changeAmPm(newValue: string): void;
    readonly hoursBelow: any[];
    readonly hoursAbove: any[];
    readonly minutesBelow: any[];
    readonly minutesAbove: any[];
    selectHour(hour: Moment): void;
    selectMinute(minute: Moment): void;
    hourScroll(event: MouseWheelEvent): void;
    minuteScroll(event: MouseWheelEvent): void;
    isValidTime(value: Moment): boolean;
    private readonly hour12;
}