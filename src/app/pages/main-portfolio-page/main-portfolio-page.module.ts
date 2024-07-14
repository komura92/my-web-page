import {NgModule} from "@angular/core";
import {NgClass} from "@angular/common";
import {MainPortfolioPageComponent} from "./main-portfolio-page.component";
import {NavbarModule} from "../../components/navbar/navbar.module";
import {MainPortfolioPageRoutingModule} from "./main-portfolio-page-routing.module";
import {TranslateModule} from "@ngx-translate/core";
import {ExperienceSectionComponent} from "./experience-section/experience-section.component";
import {ProjectsSectionComponent} from "./projects-section/projects-section.component";
import {ProfileIntroSectionComponent} from "./profile-intro-section/profile-intro-section.component";
import {ContactSectionComponent} from "./contact-section/contact-section.component";
import {AboutSectionComponent} from "./about-section/about-section.component";

@NgModule({
  declarations: [MainPortfolioPageComponent],
  exports: [
    MainPortfolioPageComponent
  ],
  imports: [
    NgClass,
    NavbarModule,
    MainPortfolioPageRoutingModule,
    TranslateModule,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
    ProfileIntroSectionComponent,
    ContactSectionComponent,
    AboutSectionComponent
  ]
})
export class MainPortfolioPageModule { }
