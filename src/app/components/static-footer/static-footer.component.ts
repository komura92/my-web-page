import {Component, Input} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'static-footer',
  standalone: true,
  imports: [
    TranslateModule,
    NgStyle
  ],
  templateUrl: './static-footer.component.html',
  styleUrl: './static-footer.component.css'
})
export class StaticFooterComponent {
  @Input()
  textColor = 'black';
}
