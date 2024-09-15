import { Component } from '@angular/core';
import {MenuOptionModel} from "../../components/docs-style-navigation/model/menu-option.model";

@Component({
  selector: 'macropad-page',
  standalone: false,
  templateUrl: './macropad-page.component.html',
  styleUrl: './macropad-page.component.css'
})
export class MacropadPageComponent {
  rootUrl = 'projects/macropad'

  menuOptions: MenuOptionModel[] = [
    {translation: 'macropad.features.title', href: "#features"},
    {translation: 'macropad.general.design.title', href: "#general-design"},
    {translation: 'macropad.installation.title', href: "#installation"},
    {translation: 'macropad.future.plans.title', href: "#future-plans"},
    {translation: 'macropad.repositories.title', href: "#repositories"}
  ]
}
