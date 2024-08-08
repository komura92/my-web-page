import { Component } from '@angular/core';
import {GalleriaModule} from "primeng/galleria";

@Component({
  selector: 'gallery-section',
  standalone: true,
  imports: [
    GalleriaModule
  ],
  templateUrl: './gallery-section.component.html',
  styleUrl: './gallery-section.component.css'
})
export class GallerySectionComponent {
  images = [
    {src: 'assets/images/ninja-mirror/gallery/1.jpg', thumb: 'assets/images/ninja-mirror/gallery/thumbnails/1.jpg'},
    {src: 'assets/images/ninja-mirror/gallery/2.jpg', thumb: 'assets/images/ninja-mirror/gallery/thumbnails/2.jpg'},
    {src: 'assets/images/ninja-mirror/gallery/3.jpg', thumb: 'assets/images/ninja-mirror/gallery/thumbnails/3.jpg'},
    {src: 'assets/images/ninja-mirror/gallery/4.jpg', thumb: 'assets/images/ninja-mirror/gallery/thumbnails/4.jpg'},
    {src: 'assets/images/ninja-mirror/gallery/5.jpg', thumb: 'assets/images/ninja-mirror/gallery/thumbnails/5.jpg'},
    {src: 'assets/images/ninja-mirror/gallery/6.jpg', thumb: 'assets/images/ninja-mirror/gallery/thumbnails/6.jpg'},
  ]
}
