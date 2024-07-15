import {NgModule} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {PageUnderDevelopmentPageComponent} from "./page-under-development-page.component";
import {PageUnderDevelopmentPageRoutingModule} from "./page-under-development-page-routing.module";
import {
  UnderDevelopmentGearsAnimationComponent
} from "./under-development-gears-animation/under-development-gears-animation.component";


@NgModule({
  declarations: [PageUnderDevelopmentPageComponent],
  imports: [PageUnderDevelopmentPageRoutingModule, TranslateModule, UnderDevelopmentGearsAnimationComponent],
  exports: [PageUnderDevelopmentPageComponent]
})
export class PageUnderDevelopmentPageModule {

}
