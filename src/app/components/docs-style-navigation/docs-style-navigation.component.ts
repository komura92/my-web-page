import {Component, Input, OnInit, Renderer2} from '@angular/core';
import {LanguageSelectorComponent} from "../language-selector/language-selector.component";
import {NgClass, NgForOf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {MenuOptionModel} from "./model/menu-option.model";

@Component({
  selector: 'docs-style-navigation',
  standalone: true,
  imports: [
    LanguageSelectorComponent,
    NgForOf,
    TranslateModule,
    NgClass
  ],
  templateUrl: './docs-style-navigation.component.html',
  styleUrl: './docs-style-navigation.component.css'
})
export class DocsStyleNavigationComponent implements OnInit{

  isOpen = false
  sectionsOffsets: number[] = []

  activeMenuOption: any

  @Input()
  menuOptions: MenuOptionModel[] = []

  @Input()
  rootUrl: string = ''

  constructor(private renderer: Renderer2) {
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.sectionsOffsets = this.menuOptions
        .map(menuOption => document.getElementById(menuOption.href.substring(1))?.offsetTop!);

      this.renderer.listen(window, 'scroll', ($event) => {
        // after docs content change (i.e. installation section toggle)
        // active menu options was not tracked properly
        this.sectionsOffsets = this.menuOptions
          .map(menuOption => document.getElementById(menuOption.href.substring(1))?.offsetTop!);

        let firstItemOverNavbar = -1;
        for (let i = 0; i < this.sectionsOffsets.length; i++) {
          if (window.scrollY >= this.sectionsOffsets[i] - 2)
            firstItemOverNavbar = i;
          else
            break;
        }
        if (firstItemOverNavbar >= 0)
          this.activeMenuOption = this.menuOptions[firstItemOverNavbar];
        else
          this.activeMenuOption = null
      })
    }, 200)
  }
}
