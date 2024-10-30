import {NgModule} from '@angular/core';
import {MacropadPageRoutingModuleComponent} from "./macropad-page-routing-module.component";
import {MacropadPageComponent} from "./macropad-page.component";
import {SimpleFooterComponent} from "../../components/simple-footer/simple-footer.component";
import {DocsStyleNavigationComponent} from "../../components/docs-style-navigation/docs-style-navigation.component";
import {TranslateModule} from "@ngx-translate/core";
import {MacropadFeaturesSectionComponent} from "./macropad-features-section/macropad-features-section.component";
import {
  MacropadGeneralDesignSectionComponent
} from "./macropad-general-design-section/macropad-general-design-section.component";
import {
  MacropadInstallationSectionComponent
} from "./macropad-installation-section/macropad-installation-section.component";
import {
  MacropadFuturePlansSectionComponent
} from "./macropad-future-plans-section/macropad-future-plans-section.component";
import {
  MacropadRepositoriesSectionComponent
} from "./macropad-repositories-section/macropad-repositories-section.component";

@NgModule({
  declarations: [MacropadPageComponent],
  imports: [
    MacropadPageRoutingModuleComponent,
    SimpleFooterComponent,
    DocsStyleNavigationComponent,
    TranslateModule,
    MacropadFeaturesSectionComponent,
    MacropadGeneralDesignSectionComponent,
    MacropadInstallationSectionComponent,
    MacropadFuturePlansSectionComponent,
    MacropadRepositoriesSectionComponent
  ],
  exports: [MacropadPageComponent]
})
export class MacropadPageModuleComponent {
}
