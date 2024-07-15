import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {PageUnderDevelopmentPageComponent} from "./page-under-development-page.component";

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: PageUnderDevelopmentPageComponent, data: {} }
  ])],
  exports: [RouterModule]
})
export class PageUnderDevelopmentPageRoutingModule {

}
