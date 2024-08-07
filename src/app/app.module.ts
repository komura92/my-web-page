import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RouterOutlet, TitleStrategy} from "@angular/router";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CustomPageTitleStrategy} from "./providers/custom-page-title.strategy";

@NgModule({
  declarations: [AppComponent],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    RouterOutlet,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: TitleStrategy, useClass: CustomPageTitleStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
