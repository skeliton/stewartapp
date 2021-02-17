import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExperimentalComponent } from './experimental/experimental.component';
import { UsefultoolingComponent } from './usefultooling/usefultooling.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { AdminModule } from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SharedComponent } from './shared/shared.component';
import { LoggerModule } from 'logger';
import { MainViewComponent } from './dashboard/main-view/main-view.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ExperimentalComponent,
    UsefultoolingComponent,
    PathNotFoundComponent,
    NavComponent,
    SharedComponent,
    MainViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    LoggerModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
