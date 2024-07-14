import {NgModule} from "@angular/core";
import {TranslateModule} from "@ngx-translate/core";
import {NavbarComponent} from "./navbar.component";
import {NgClass, NgIf} from "@angular/common";
import {LanguageSelectorComponent} from "./language-selector/language-selector.component";

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    NgClass,
    TranslateModule,
    NgIf,
    LanguageSelectorComponent,
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
