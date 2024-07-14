import {NgModule} from '@angular/core';
import {NinjaMirrorProjectPageComponent} from "./ninja-mirror-project-page.component";
import {NinjaMirrorProjectPageRoutingModule} from "./ninja-mirror-project-page-routing.module";

@NgModule({
  declarations: [NinjaMirrorProjectPageComponent],
  exports: [ NinjaMirrorProjectPageComponent ],
  imports: [NinjaMirrorProjectPageRoutingModule]
})
export class NinjaMirrorProjectPageModule {

}
