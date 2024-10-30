import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {CodeSnippetComponent} from "../../../../../components/code-snippet/code-snippet.component";

@Component({
  selector: 'mobile-app-configuration-section',
  standalone: true,
  imports: [
    TranslateModule,
    CodeSnippetComponent
  ],
  templateUrl: './mobile-app-configuration-section.component.html',
  styleUrl: './mobile-app-configuration-section.component.css'
})
export class MobileAppConfigurationSectionComponent {

}
