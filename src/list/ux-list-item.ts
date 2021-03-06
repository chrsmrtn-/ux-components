import { customElement, bindable, ViewResources, View, processAttributes } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { StyleEngine } from 'aurelia-ux';
import { Themable } from 'aurelia-ux';
import { processDesignAttributes } from 'aurelia-ux';

@inject(ViewResources, StyleEngine)
@customElement('ux-list-item')
@processAttributes(processDesignAttributes)

export class UxListItem implements Themable {
  @bindable public theme = null;

  public view: View;

  constructor(public resources: ViewResources, private styleEngine: StyleEngine) { }

  public created(_: any, myView: View) {
    this.view = myView;
  }

  public bind() {
    if (this.theme) {
      this.styleEngine.applyTheme(this, this.theme);
    }
  }

  public themeChanged(newValue: any) {
    this.styleEngine.applyTheme(this, newValue);
  }
}
