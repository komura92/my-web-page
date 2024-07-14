import { Component } from '@angular/core';

@Component({
  selector: 'quotation',
  standalone: true,
  imports: [],
  templateUrl: './quotation.component.html',
  styleUrl: './quotation.component.css'
})
export class QuotationComponent {

  quotation: string = 'Stay focused.';
  author: string = 'Unknown author';

}
