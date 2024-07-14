import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {MacropadPageComponent} from "./macropad-page.component";

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: MacropadPageComponent, data: {} }
  ])],
  exports: [RouterModule]
})
export class MacropadPageRoutingModuleComponent {

}
