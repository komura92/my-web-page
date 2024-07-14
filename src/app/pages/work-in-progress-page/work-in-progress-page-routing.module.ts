import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {WorkInProgressPageComponent} from "./work-in-progress-page.component";

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: WorkInProgressPageComponent, data: {} }
  ])],
  exports: [RouterModule]
})
export class WorkInProgressPageRoutingModule {
}
