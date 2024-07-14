import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {NinjaMirrorProjectPageComponent} from "./ninja-mirror-project-page.component";

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NinjaMirrorProjectPageComponent, data: {} }
  ])],
  exports: [RouterModule]
})
export class NinjaMirrorProjectPageRoutingModule {

}
