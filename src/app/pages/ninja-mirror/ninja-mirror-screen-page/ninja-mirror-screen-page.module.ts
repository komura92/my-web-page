import {NgModule} from "@angular/core";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {NinjaMirrorScreenPageComponent} from "./ninja-mirror-screen-page.component";
import {NinjaMirrorScreenPageRoutingModule} from "./ninja-mirror-screen-page-routing.module";
import {CalendarComponent} from "./widgets/calendar/calendar.component";
import {ClockComponent} from "./widgets/clock/clock.component";
import {QuotationComponent} from "./widgets/quotation/quotation.component";
import {StaticFooterComponent} from "../../../components/static-footer/static-footer.component";

@NgModule({
  declarations: [NinjaMirrorScreenPageComponent],
  exports: [
    NinjaMirrorScreenPageComponent
  ],
    imports: [
        NgClass,
        NinjaMirrorScreenPageRoutingModule,
        CalendarComponent,
        ClockComponent,
        NgOptimizedImage,
        QuotationComponent,
        StaticFooterComponent
    ]
})
export class NinjaMirrorScreenPageModule { }
