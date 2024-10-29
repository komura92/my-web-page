import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'swagger-ui-component',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './swagger-ui-component.component.html',
  styleUrl: './swagger-ui-component.component.css'
})
export class SwaggerUiComponentComponent {

}
