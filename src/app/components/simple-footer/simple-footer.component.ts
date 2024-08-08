import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'simple-footer',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './simple-footer.component.html',
  styleUrl: './simple-footer.component.css'
})
export class SimpleFooterComponent {

}
