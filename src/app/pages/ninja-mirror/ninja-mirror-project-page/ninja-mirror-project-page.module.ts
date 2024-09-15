import {NgModule} from '@angular/core';
import {NinjaMirrorProjectPageComponent} from "./ninja-mirror-project-page.component";
import {NinjaMirrorProjectPageRoutingModule} from "./ninja-mirror-project-page-routing.module";
import {NgClass, NgForOf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {LanguageSelectorComponent} from "../../../components/language-selector/language-selector.component";
import {ContactSectionComponent} from "../../main-portfolio-page/contact-section/contact-section.component";
import {SimpleFooterComponent} from "../../../components/simple-footer/simple-footer.component";
import {SoftwareSectionComponent} from "./software-section/software-section.component";
import {HardwareSectionComponent} from "./hardware-section/hardware-section.component";
import {RecommendationSectionComponent} from "./recommendation-section/recommendation-section.component";
import {GallerySectionComponent} from "./gallery-section/gallery-section.component";
import {FinalEffectSectionComponent} from "./final-effect-section/final-effect-section.component";
import {GeneralDesignSectionComponent} from "./general-design-section/general-design-section.component";
import {DocsStyleNavigationComponent} from "../../../components/docs-style-navigation/docs-style-navigation.component";

@NgModule({
  declarations: [NinjaMirrorProjectPageComponent],
  exports: [ NinjaMirrorProjectPageComponent ],
    imports: [NinjaMirrorProjectPageRoutingModule, NgForOf, TranslateModule, NgClass, LanguageSelectorComponent, ContactSectionComponent, SimpleFooterComponent, SoftwareSectionComponent, HardwareSectionComponent, RecommendationSectionComponent, GallerySectionComponent, FinalEffectSectionComponent, GeneralDesignSectionComponent, DocsStyleNavigationComponent]
})
export class NinjaMirrorProjectPageModule {

}
