import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'recommendation-section',
  standalone: true,
    imports: [
        TranslateModule
    ],
  templateUrl: './recommendation-section.component.html',
  styleUrl: './recommendation-section.component.css'
})
export class RecommendationSectionComponent {

}
