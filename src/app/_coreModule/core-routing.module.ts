import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../homeModule/home/home.component";
const routes: Routes = [
  { path: "home", component: HomeComponent },

  {
    path: "" /* , redirectTo: 'login' */,
    pathMatch: "full",
    loadChildren: () =>
      import("../authModule/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "home",
    loadChildren: () =>
      import("../homeModule/home.module").then((m) => m.HomeModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
