import { Component } from '@angular/core';
import {PanelModule} from "primeng/panel";
import {CodeSnippetComponent} from "../../../../components/code-snippet/code-snippet.component";
import {SwaggerUiComponentComponent} from "./swagger-ui-component/swagger-ui-component.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'backend-sse-installation-guide',
  standalone: true,
  imports: [
    PanelModule,
    CodeSnippetComponent,
    SwaggerUiComponentComponent,
    TranslateModule
  ],
  templateUrl: './backend-sse-installation-guide.component.html',
  styleUrl: './backend-sse-installation-guide.component.css'
})
export class BackendSseInstallationGuideComponent {
}
