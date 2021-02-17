import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UpcomingFeaturesComponent } from './upcoming-features/upcoming-features.component';


@NgModule({
  declarations:
  [AdminComponent,
  UpcomingFeaturesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
