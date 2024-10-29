import {Component, Input} from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'code-snippet',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './code-snippet.component.html',
  styleUrl: './code-snippet.component.css'
})
export class CodeSnippetComponent {
  @Input() code!: string;

  buttonText: string;

  private readonly COPY_BUTTON_TEXT = 'button.copy';
  private readonly COPIED_BUTTON_TEXT = 'button.copied';

  constructor(private clipboard: Clipboard) {
    this.buttonText = this.COPY_BUTTON_TEXT;
  }

  copyCode() {
    this.clipboard.copy(this.code);

    this.buttonText = this.COPIED_BUTTON_TEXT;
    setTimeout(() =>
      this.buttonText = this.COPY_BUTTON_TEXT, 1500);
  }
}
