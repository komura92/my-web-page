import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {NinjaMirrorScreenPageComponent} from "./ninja-mirror-screen-page.component";

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NinjaMirrorScreenPageComponent, data: {} }
  ])],
  exports: [RouterModule]
})
export class NinjaMirrorScreenPageRoutingModule { }
