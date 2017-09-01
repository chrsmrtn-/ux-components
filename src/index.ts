import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { UxButtonTheme } from './button/ux-button-theme';
export { UxInputTheme } from './input/ux-input-theme';
export { UxInputInfoTheme } from './input-info/ux-input-info-theme';
export { UxTextareaTheme } from './textarea/ux-textarea-theme';
export { UxFormTheme } from './form/ux-form-theme';
export { UxFieldTheme } from './form/ux-field-theme';
export { UxChipInputTheme } from './chip-input/ux-chip-input-theme';
export { UxTagTheme } from './chip-input/ux-tag-theme';
export { UxChipTheme } from './chip-input/ux-chip-theme';
export { UxCheckboxTheme } from './checkbox/ux-checkbox-theme';
export { UxIconTheme } from './icons/ux-icon-theme';
export { UxListTheme } from './list/ux-list-theme';
export { UxListItemTheme } from './list/ux-list-item-theme';
export { UxTabTheme } from './tabs/ux-tab-theme';
export { UxTabsTheme } from './tabs/ux-tabs-theme';
export { UxCalendarTheme } from './datepicker/ux-calendar-theme';
export { UxDatepickerTheme } from './datepicker/ux-datepicker-theme';
export { UxPickerDialogTheme } from './datepicker/ux-picker-dialog-theme';
export { UxTimeSelectorTheme } from './datepicker/ux-time-selector-theme';
export { UxYearListTheme } from './datepicker/ux-year-list-theme';

export { UxButton } from './button/ux-button';
export { UxInput } from './input/ux-input';
export { UxInputInfo } from './input-info/ux-input-info';
export { UxTextarea } from './textarea/ux-textarea';
export { UxForm } from './form/ux-form';
export { UxField } from './form/ux-field';
export { UxChipInput } from './chip-input/ux-chip-input';
export { UxTag } from './chip-input/ux-tag';
export { UxChip } from './chip-input/ux-chip';
export { UxCheckbox } from './checkbox/ux-checkbox';
export { UxIcon } from './icons/ux-icon';
export { UxSubmitCustomAttribute } from './form/ux-submit-attribute';
export { UxList } from './list/ux-list';
export { UxListItem } from './list/ux-list-item';
export { UxTab } from './tabs/ux-tab';
export { UxTabs } from './tabs/ux-tabs';
export { UxCalendar } from './datepicker/ux-calendar';
export { UxDatepicker } from './datepicker/ux-datepicker';
export { UxPickerDialog } from './datepicker/ux-picker-dialog';
export { UxTimeSelector } from './datepicker/ux-time-selector';
export { UxYearList } from './datepicker/ux-year-list';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./button/ux-button'),
    PLATFORM.moduleName('./input/ux-input'),
    PLATFORM.moduleName('./input-info/ux-input-info'),
    PLATFORM.moduleName('./textarea/ux-textarea'),
    PLATFORM.moduleName('./form/ux-form'),
    PLATFORM.moduleName('./form/ux-field'),
    PLATFORM.moduleName('./form/ux-submit-attribute'),
    PLATFORM.moduleName('./chip-input/ux-chip-input'),
    PLATFORM.moduleName('./chip-input/ux-chip'),
    PLATFORM.moduleName('./chip-input/ux-tag'),
    PLATFORM.moduleName('./checkbox/ux-checkbox'),
    PLATFORM.moduleName('./icons/ux-icon'),
    PLATFORM.moduleName('./list/ux-list'),
    PLATFORM.moduleName('./list/ux-list-item'),
    PLATFORM.moduleName('./tabs/ux-tab'),
    PLATFORM.moduleName('./tabs/ux-tabs'),
    PLATFORM.moduleName('./datepicker/ux-calendar'),
    PLATFORM.moduleName('./datepicker/ux-datepicker'),
    PLATFORM.moduleName('./datepicker/ux-picker-dialog'),
    PLATFORM.moduleName('./datepicker/ux-time-selector'),
    PLATFORM.moduleName('./datepicker/ux-year-list')
  ]);
}
