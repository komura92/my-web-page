import {ExtraOptions, RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MainPortfolioPageModule} from "./pages/main-portfolio-page/main-portfolio-page.module";
import {
  NinjaMirrorScreenPageModule
} from "./pages/ninja-mirror/ninja-mirror-screen-page/ninja-mirror-screen-page.module";
import {NinjaMirrorProjectPageModule} from "./pages/ninja-mirror/ninja-mirror-project-page/ninja-mirror-project-page.module";
import {MacropadPageModuleComponent} from "./pages/macropad-page/macropad-page-module.component";
import {WorkInProgressPageModule} from "./pages/work-in-progress-page/work-in-progress-page.module";

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled'
};

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/main-portfolio-page/main-portfolio-page-routing.module').then(() => MainPortfolioPageModule)},
  { path: 'ninja-mirror-ui', loadChildren: () => import('./pages/ninja-mirror/ninja-mirror-screen-page/ninja-mirror-screen-page-routing.module').then(() => NinjaMirrorScreenPageModule)},
  {path: 'ninja-mirror', redirectTo: "work-in-progress"},
  // { path: 'ninja-mirror', loadChildren: () => import('./pages/ninja-mirror/ninja-mirror-project-page/ninja-mirror-project-page-routing.module').then(() => NinjaMirrorProjectPageModule)},
  {path: 'macropad', redirectTo: "work-in-progress"},
  // { path: 'macropad', loadChildren: () => import('./pages/macropad-page/macropad-page-routing-module.component').then(() => MacropadPageModuleComponent)},
  { path: 'work-in-progress', loadChildren: () => import('./pages/work-in-progress-page/work-in-progress-page-routing.module').then(() => WorkInProgressPageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
