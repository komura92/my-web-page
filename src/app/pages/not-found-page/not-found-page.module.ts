import {NgModule} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {NotFoundPageComponent} from "./not-found-page.component";
import {NotFoundPageRoutingModule} from "./not-found-page-routing.module";
import {NgForOf} from "@angular/common";

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [NotFoundPageRoutingModule, TranslateModule, NgForOf],
  exports: [NotFoundPageComponent]
})
export class NotFoundPageModule {

}
