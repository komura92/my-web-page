import { Component } from '@angular/core';
import {CodeSnippetComponent} from "../../../../components/code-snippet/code-snippet.component";
import {PanelModule} from "primeng/panel";
import {PrimeTemplate} from "primeng/api";
import {
    SwaggerUiComponentComponent
} from "../backend-sse-installation-guide/swagger-ui-component/swagger-ui-component.component";
import {TranslateModule} from "@ngx-translate/core";
import {
  MobileAppConfigurationSectionComponent
} from "./mobile-app-configuration-section/mobile-app-configuration-section.component";

@Component({
  selector: 'mobile-installation-guide',
  standalone: true,
  imports: [
    PanelModule,
    PrimeTemplate,
    TranslateModule,
    MobileAppConfigurationSectionComponent
  ],
  templateUrl: './mobile-installation-guide.component.html',
  styleUrl: './mobile-installation-guide.component.css'
})
export class MobileInstallationGuideComponent {
}
