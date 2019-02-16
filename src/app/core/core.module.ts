import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CoreRoutingModule } from './core.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components

import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// import { ChartistModule } from 'ng-chartist';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    CoreComponent,
    NavComponent,
    DashboardComponent

  ],
  exports: [
    CoreComponent,
    DashboardComponent,
    NavComponent
  ]
})
export class CoreModule { }
