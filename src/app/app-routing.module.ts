import {ExtraOptions, RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MainPortfolioPageModule} from "./pages/main-portfolio-page/main-portfolio-page.module";
import {
  NinjaMirrorScreenPageModule
} from "./pages/ninja-mirror/ninja-mirror-screen-page/ninja-mirror-screen-page.module";
import {WorkInProgressPageModule} from "./pages/work-in-progress-page/work-in-progress-page.module";
import {PageUnderDevelopmentPageModule} from "./pages/page-under-development-page/page-under-development-page-module";
import {
  NinjaMirrorProjectPageModule
} from "./pages/ninja-mirror/ninja-mirror-project-page/ninja-mirror-project-page.module";

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled'
};

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/main-portfolio-page/main-portfolio-page-routing.module').then(() => MainPortfolioPageModule)},
  { path: 'ninja-mirror', loadChildren: () => import('./pages/ninja-mirror/ninja-mirror-project-page/ninja-mirror-project-page-routing.module').then(() => NinjaMirrorProjectPageModule)},
  { path: 'ninja-mirror-ui', loadChildren: () => import('./pages/ninja-mirror/ninja-mirror-screen-page/ninja-mirror-screen-page-routing.module').then(() => NinjaMirrorScreenPageModule)},
  { path: 'macropad', redirectTo: "page-under-development"},
  // { path: 'macropad', loadChildren: () => import('./pages/macropad-page/macropad-page-routing-module.component').then(() => MacropadPageModuleComponent)},
  { path: 'work-in-progress', loadChildren: () => import('./pages/work-in-progress-page/work-in-progress-page-routing.module').then(() => WorkInProgressPageModule)},
  { path: 'page-under-development', loadChildren: () => import('./pages/page-under-development-page/page-under-development-page-routing.module').then(() => PageUnderDevelopmentPageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
