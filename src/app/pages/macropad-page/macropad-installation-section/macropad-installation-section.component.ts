import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {
  BackendSseInstallationGuideComponent
} from "./backend-sse-installation-guide/backend-sse-installation-guide.component";
import {
  PcDriverInstallationGuideComponent
} from "./pc-driver-installation-guide/pc-driver-installation-guide.component";
import {MobileInstallationGuideComponent} from "./mobile-installation-guide/mobile-installation-guide.component";

@Component({
  selector: 'macropad-installation-section',
  standalone: true,
  imports: [
    TranslateModule,
    BackendSseInstallationGuideComponent,
    PcDriverInstallationGuideComponent,
    MobileInstallationGuideComponent
  ],
  templateUrl: './macropad-installation-section.component.html',
  styleUrl: './macropad-installation-section.component.css'
})
export class MacropadInstallationSectionComponent {

}
