import {NgModule} from '@angular/core';
import {NinjaMirrorProjectPageComponent} from "./ninja-mirror-project-page.component";
import {NinjaMirrorProjectPageRoutingModule} from "./ninja-mirror-project-page-routing.module";
import {NgClass, NgForOf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {LanguageSelectorComponent} from "../../../components/language-selector/language-selector.component";
import {ContactSectionComponent} from "../../main-portfolio-page/contact-section/contact-section.component";
import {SimpleFooterComponent} from "../../../components/simple-footer/simple-footer.component";

@NgModule({
  declarations: [NinjaMirrorProjectPageComponent],
  exports: [ NinjaMirrorProjectPageComponent ],
  imports: [NinjaMirrorProjectPageRoutingModule, NgForOf, TranslateModule, NgClass, LanguageSelectorComponent, ContactSectionComponent, SimpleFooterComponent]
})
export class NinjaMirrorProjectPageModule {

}
