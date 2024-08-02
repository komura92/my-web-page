import {Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-ninja-mirror-project-page',
  standalone: false,
  templateUrl: './ninja-mirror-project-page.component.html',
  styleUrl: './ninja-mirror-project-page.component.scss'
})
export class NinjaMirrorProjectPageComponent {

  isOpen = false

  activeMenuOption : any
  menuOptions = [
    { translation: 'ninja.mirror.general.design.title', href: '#general-design'},
    { translation: 'ninja.mirror.final.effect.title', href: '#final-effect'},
    { translation: 'ninja.mirror.software.title', href: '#software'},
    { translation: 'ninja.mirror.hardware.title', href: '#hardware'},
    { translation: 'ninja.mirror.gallery.title', href: '#gallery'}
  ]


  constructor(private router : Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.activeMenuOption = false;
        let actualActiveOptionDivId = val.urlAfterRedirects.split('#')[1]
        if (actualActiveOptionDivId) {
          this.activeMenuOption = this.menuOptions
            .find(menuOption => menuOption.href === '#' + actualActiveOptionDivId)
        }
      }
    });
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
