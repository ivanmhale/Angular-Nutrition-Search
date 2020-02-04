import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { ResultsComponent } from "./results/results.component";
import { ModalComponent } from "./modal/modal.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, NavComponent, ResultsComponent, ModalComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
