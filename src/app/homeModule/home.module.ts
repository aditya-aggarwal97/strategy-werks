import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [HomeComponent],
  providers: [],
})
export class HomeModule {}
