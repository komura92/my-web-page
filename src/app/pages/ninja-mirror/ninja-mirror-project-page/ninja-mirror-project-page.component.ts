import {Component} from '@angular/core';
import {MenuOptionModel} from "../../../components/docs-style-navigation/model/menu-option.model";

@Component({
    selector: 'app-ninja-mirror-project-page',
    standalone: false,
    templateUrl: './ninja-mirror-project-page.component.html',
    styleUrl: './ninja-mirror-project-page.component.scss'
})
export class NinjaMirrorProjectPageComponent {
  rootUrl = 'projects/ninja-mirror'
  menuOptions: MenuOptionModel[] = [
    {translation: 'ninja.mirror.general.design.title', href: '#general-design'},
    {translation: 'ninja.mirror.final.effect.title', href: '#final-effect'},
    {translation: 'ninja.mirror.software.title', href: '#software'},
    {translation: 'ninja.mirror.recommendation.title', href: '#recommendation'},
    {translation: 'ninja.mirror.hardware.title', href: '#hardware'},
    {translation: 'ninja.mirror.gallery.title', href: '#gallery'}
  ]
}
