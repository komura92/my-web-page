import { Component } from '@angular/core';
import {
  DocsStyleNavigationComponent
} from "../../../../components/docs-style-navigation/docs-style-navigation.component";
import {MenuOptionModel} from "../../../../components/docs-style-navigation/model/menu-option.model";
import {SimpleFooterComponent} from "../../../../components/simple-footer/simple-footer.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-macropad-privacy-policy-page',
  standalone: true,
  imports: [
    DocsStyleNavigationComponent,
    SimpleFooterComponent,
    TranslateModule
  ],
  templateUrl: './macropad-privacy-policy-page.component.html',
  styleUrl: './macropad-privacy-policy-page.component.css'
})
export class MacropadPrivacyPolicyPageComponent {

  rootUrl = 'projects/macropad/privacy-policy'

  menuOptions: MenuOptionModel[] = [
    {translation: 'macropad.privacy.policy.section.1.title', href: "#section-1"},
    {translation: 'macropad.privacy.policy.section.2.title', href: "#section-2"},
    {translation: 'macropad.privacy.policy.section.3.title', href: "#section-3"},
    {translation: 'macropad.privacy.policy.section.4.title', href: "#section-4"},
    {translation: 'macropad.privacy.policy.section.5.title', href: "#section-5"},
    {translation: 'macropad.privacy.policy.section.6.title', href: "#section-6"},
    {translation: 'macropad.privacy.policy.section.7.title', href: "#section-7"},
    {translation: 'macropad.privacy.policy.section.8.title', href: "#section-8"},
  ]
}
