import {MainPortfolioPageComponent} from "./main-portfolio-page.component";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: MainPortfolioPageComponent, data: {} }
  ])],
  exports: [RouterModule]
})
export class MainPortfolioPageRoutingModule { }
