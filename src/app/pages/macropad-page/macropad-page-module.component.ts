import {NgModule} from '@angular/core';
import {MacropadPageRoutingModuleComponent} from "./macropad-page-routing-module.component";
import {MacropadPageComponent} from "./macropad-page.component";
import {SimpleFooterComponent} from "../../components/simple-footer/simple-footer.component";
import {DocsStyleNavigationComponent} from "../../components/docs-style-navigation/docs-style-navigation.component";

@NgModule({
  declarations: [MacropadPageComponent],
    imports: [MacropadPageRoutingModuleComponent, SimpleFooterComponent, DocsStyleNavigationComponent],
  exports: [MacropadPageComponent]
})
export class MacropadPageModuleComponent {
}
