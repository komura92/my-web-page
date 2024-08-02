import {NgModule} from '@angular/core';
import {NinjaMirrorProjectPageComponent} from "./ninja-mirror-project-page.component";
import {NinjaMirrorProjectPageRoutingModule} from "./ninja-mirror-project-page-routing.module";
import {NgClass, NgForOf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {LanguageSelectorComponent} from "../../../components/navbar/language-selector/language-selector.component";

@NgModule({
  declarations: [NinjaMirrorProjectPageComponent],
  exports: [ NinjaMirrorProjectPageComponent ],
  imports: [NinjaMirrorProjectPageRoutingModule, NgForOf, TranslateModule, NgClass, LanguageSelectorComponent]
})
export class NinjaMirrorProjectPageModule {

}
