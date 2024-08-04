import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'hardware-section',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './hardware-section.component.html',
  styleUrl: './hardware-section.component.css'
})
export class HardwareSectionComponent {

}
