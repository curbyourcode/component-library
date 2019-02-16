import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CoreRoutingModule } from './core.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
