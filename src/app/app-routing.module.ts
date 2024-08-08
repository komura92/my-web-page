import {ExtraOptions, RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MainPortfolioPageModule} from "./pages/main-portfolio-page/main-portfolio-page.module";
import {
  NinjaMirrorScreenPageModule
} from "./pages/ninja-mirror/ninja-mirror-screen-page/ninja-mirror-screen-page.module";
import {PageUnderDevelopmentPageModule} from "./pages/page-under-development-page/page-under-development-page.module";
import {
  NinjaMirrorProjectPageModule
} from "./pages/ninja-mirror/ninja-mirror-project-page/ninja-mirror-project-page.module";
import {NotFoundPageModule} from "./pages/not-found-page/not-found-page.module";

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled'
};

const routes: Routes = [
  { path: '', title: "portfolio.page.title", loadChildren: () => import('./pages/main-portfolio-page/main-portfolio-page-routing.module').then(() => MainPortfolioPageModule)},
  { path: 'projects/ninja-mirror', title: "ninja.mirror.page.title", loadChildren: () => import('./pages/ninja-mirror/ninja-mirror-project-page/ninja-mirror-project-page-routing.module').then(() => NinjaMirrorProjectPageModule)},
  { path: 'projects/ninja-mirror-ui', title: "ninja.mirror.ui.page.title", loadChildren: () => import('./pages/ninja-mirror/ninja-mirror-screen-page/ninja-mirror-screen-page-routing.module').then(() => NinjaMirrorScreenPageModule)},
  { path: 'projects/macropad', redirectTo: "page-under-development"},
  // { path: 'projects/macropad', title: "macropad.project.page.title", loadChildren: () => import('./pages/macropad-page/macropad-page-routing-module.component').then(() => MacropadPageModuleComponent)},
  { path: 'page-under-development', title: "under.development.page.title", loadChildren: () => import('./pages/page-under-development-page/page-under-development-page-routing.module').then(() => PageUnderDevelopmentPageModule)},
  { path: 'not-found', title: "not.found.page.title", loadChildren: () => import('./pages/not-found-page/not-found-page-routing.module').then(() => NotFoundPageModule)},
  { path: '**', redirectTo: "not-found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
