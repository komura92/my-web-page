import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {CodeSnippetComponent} from "../../../../../components/code-snippet/code-snippet.component";

@Component({
  selector: 'pc-driver-mandatory-configuration-section',
  standalone: true,
  imports: [
    TranslateModule,
    CodeSnippetComponent
  ],
  templateUrl: './pc-driver-mandatory-configuration-section.component.html',
  styleUrl: './pc-driver-mandatory-configuration-section.component.css'
})
export class PcDriverMandatoryConfigurationSectionComponent {

  SERVER_CONFIG_CODE: string = "SERVER_URL = \'http://<hostname>:2020/sse/notifications\'";
  ACTIONS_CONFIG_CODE_EXAMPLE: string =
    "ACTIONS = [\n" +
    "    {\n" +
    "        \"action\": \"RUN_INTELLIJ\",\n" +
    "        \"function\": lambda: (\n" +
    "            pyautogui.hotkey('win', '2')\n" +
    "        )\n" +
    "    },\n" +
    "\n" +
    "    ...\n" +
    "]";

}
