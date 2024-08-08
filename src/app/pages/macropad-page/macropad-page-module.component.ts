import {NgModule} from '@angular/core';
import {MacropadPageRoutingModuleComponent} from "./macropad-page-routing-module.component";
import {MacropadPageComponent} from "./macropad-page.component";
import {SimpleFooterComponent} from "../../components/simple-footer/simple-footer.component";

@NgModule({
  declarations: [MacropadPageComponent],
  imports: [MacropadPageRoutingModuleComponent, SimpleFooterComponent],
  exports: [MacropadPageComponent]
})
export class MacropadPageModuleComponent {
}
