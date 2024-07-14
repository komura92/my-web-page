import {NgModule} from '@angular/core';
import {MacropadPageRoutingModuleComponent} from "./macropad-page-routing-module.component";
import {MacropadPageComponent} from "./macropad-page.component";

@NgModule({
  declarations: [MacropadPageComponent],
  imports: [MacropadPageRoutingModuleComponent],
  exports: [MacropadPageComponent]
})
export class MacropadPageModuleComponent {
}
