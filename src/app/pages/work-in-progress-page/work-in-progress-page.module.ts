import {NgModule} from '@angular/core';
import {WorkInProgressPageRoutingModule} from "./work-in-progress-page-routing.module";
import {WorkInProgressPageComponent} from "./work-in-progress-page.component";
import {ProgressBarModule} from "primeng/progressbar";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [WorkInProgressPageComponent],
  imports: [WorkInProgressPageRoutingModule, ProgressBarModule, TranslateModule],
  exports: [WorkInProgressPageComponent]
})
export class WorkInProgressPageModule {

}
