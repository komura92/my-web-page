import { Component } from '@angular/core';
import {CodeSnippetComponent} from "../../../../../components/code-snippet/code-snippet.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'pc-driver-interactive-configuration-section',
  standalone: true,
  imports: [
    CodeSnippetComponent,
    TranslateModule
  ],
  templateUrl: './pc-driver-interactive-configuration-section.component.html',
  styleUrl: './pc-driver-interactive-configuration-section.component.css'
})
export class PcDriverInteractiveConfigurationSectionComponent {

  TARGET_DEVICE_CONFIG_CODE: string = "TARGET_DEVICE_ID = \'<your device ID>\'";

  EVENTS_CONFIG_CODE_EXAMPLE: string =
    "ACTIVITIES = [\n" +
    "    {\n" +
    "        'condition': validateDesktopSwitch,\n" +
    "        'menuIdentifier': 'PROGRAMMING'\n" +
    "    },\n" +
    "    ..." +
    "]";

  FUNCTION_CODE_EXAMPLE: string =
    "import pyautogui\n\n" +
    "def validateDesktopSwitch():\n" +
    "    activeWindowTitle = pyautogui.getActiveWindowTitle()\n" +
    "    return activeWindowTitle is not None and ('Program Manager' in activeWindowTitle or activeWindowTitle == '')";
}
