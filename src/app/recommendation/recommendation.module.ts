import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";

import { HomePage } from "./home.page";
import { HomeRoutingModule } from "./home.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HomeRoutingModule,
  ],
  declarations: [HomePage],
})
export class Tab1PageModule {}
