import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'profile-intro-section',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './profile-intro-section.component.html',
  styleUrl: './profile-intro-section.component.css'
})
export class ProfileIntroSectionComponent {

}
