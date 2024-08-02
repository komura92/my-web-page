import { Component } from '@angular/core';
import {DropdownModule} from "primeng/dropdown";
import {NgIf} from "@angular/common";
import {PrimeTemplate} from "primeng/api";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'language-selector',
  standalone: true,
  imports: [
    DropdownModule,
    NgIf,
    PrimeTemplate,
    TranslateModule,
    FormsModule
  ],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css'
})
export class LanguageSelectorComponent {

  selectedLanguage: string = 'en'
  languages = ['pl', 'en'];

  constructor(public translate: TranslateService) {
    const savedLanguage = localStorage.getItem('user-language');
    if (savedLanguage !== null) {
      this.selectedLanguage = savedLanguage;
    }
    translate.setDefaultLang(this.selectedLanguage);
    translate.onDefaultLangChange
      .subscribe(val => this.selectedLanguage = val.lang);
  }

  public languageChanged(event: any): void {
    this.translate.setDefaultLang(event.value);
    localStorage.setItem('user-language', event.value);
  }
}
