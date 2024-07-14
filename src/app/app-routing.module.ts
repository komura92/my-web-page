import {ExtraOptions, RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MainPortfolioPageModule} from "./pages/main-portfolio-page/main-portfolio-page.module";
import {
  NinjaMirrorScreenPageModule
} from "./pages/ninja-mirror/ninja-mirror-screen-page/ninja-mirror-screen-page.module";

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled'
};

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/main-portfolio-page/main-portfolio-page-routing.module').then(m => MainPortfolioPageModule)},
  { path: 'ninja-mirror-ui', loadChildren: () => import('./pages/ninja-mirror/ninja-mirror-screen-page/ninja-mirror-screen-page-routing.module').then(m => NinjaMirrorScreenPageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
