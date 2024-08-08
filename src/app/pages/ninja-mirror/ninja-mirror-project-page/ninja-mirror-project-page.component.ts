import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
    selector: 'app-ninja-mirror-project-page',
    standalone: false,
    templateUrl: './ninja-mirror-project-page.component.html',
    styleUrl: './ninja-mirror-project-page.component.scss'
})
export class NinjaMirrorProjectPageComponent implements OnInit {

    isOpen = false

    sectionsOffsets: number[] = []
    activeMenuOption: any
    menuOptions = [
        {translation: 'ninja.mirror.general.design.title', href: '#general-design'},
        {translation: 'ninja.mirror.final.effect.title', href: '#final-effect'},
        {translation: 'ninja.mirror.software.title', href: '#software'},
        {translation: 'ninja.mirror.recommendation.title', href: '#recommendation'},
        {translation: 'ninja.mirror.hardware.title', href: '#hardware'},
        {translation: 'ninja.mirror.gallery.title', href: '#gallery'}
    ]


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
