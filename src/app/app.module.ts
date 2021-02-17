import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExperimentalComponent } from './experimental/experimental.component';
import { UsefultoolingComponent } from './usefultooling/usefultooling.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ExperimentalComponent,
    UsefultoolingComponent,
    PathNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
