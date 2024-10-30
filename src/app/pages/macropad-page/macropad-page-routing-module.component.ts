import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {MacropadPageComponent} from "./macropad-page.component";
import {
  MacropadPrivacyPolicyPageComponent
} from "./subpages/macropad-privacy-policy-page/macropad-privacy-policy-page.component";

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'privacy-policy', component: MacropadPrivacyPolicyPageComponent, data: {} },
    { path: '', component: MacropadPageComponent, data: {} }
  ])],
  exports: [RouterModule]
})
export class MacropadPageRoutingModuleComponent {

}
