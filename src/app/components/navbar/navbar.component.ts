import {Component} from '@angular/core';

@Component({
  selector: 'navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isOpen = false

  public toggleMenu(): void {
    this.isOpen = !this.isOpen
  }
}
