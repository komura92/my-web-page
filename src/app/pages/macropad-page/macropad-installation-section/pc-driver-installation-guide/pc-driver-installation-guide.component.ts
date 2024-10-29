import { Component } from '@angular/core';
import {CodeSnippetComponent} from "../../../../components/code-snippet/code-snippet.component";
import {PanelModule} from "primeng/panel";
import {PrimeTemplate} from "primeng/api";
import {TranslateModule} from "@ngx-translate/core";
import {
  PcDriverMandatoryConfigurationSectionComponent
} from "./pc-driver-mandatory-configuration-section/pc-driver-mandatory-configuration-section.component";
import {
  PcDriverInteractiveConfigurationSectionComponent
} from "./pc-driver-interactive-configuration-section/pc-driver-interactive-configuration-section.component";

@Component({
  selector: 'pc-driver-installation-guide',
  standalone: true,
  imports: [
    CodeSnippetComponent,
    PanelModule,
    PrimeTemplate,
    TranslateModule,
    PcDriverMandatoryConfigurationSectionComponent,
    PcDriverInteractiveConfigurationSectionComponent
  ],
  templateUrl: './pc-driver-installation-guide.component.html',
  styleUrl: './pc-driver-installation-guide.component.css'
})
export class PcDriverInstallationGuideComponent {

  public onSectionCollapsed() {
    //todo pass function here
    console.log('betoniarka');
  }
}
