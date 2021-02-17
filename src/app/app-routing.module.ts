import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExperimentalComponent } from './experimental/experimental.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { UsefultoolingComponent } from './usefultooling/usefultooling.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'usefultooling', component: UsefultoolingComponent },
  { path: 'experimental', component: ExperimentalComponent },
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
