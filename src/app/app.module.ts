import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { ResultsComponent } from "./results/results.component";
import { ModalComponent } from "./modal/modal.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";

@NgModule({
  declarations: [AppComponent, NavComponent, ResultsComponent, ModalComponent],
  imports: [BrowserModule, NoopAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
