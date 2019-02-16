import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';
import { DashboardComponent } from './dashboard/dashboard.component';




const coreRoutes: Routes = [
  {
      path: 'dasboard',
      component: DashboardComponent
  },
  {
      path: '',
      component: CoreComponent,
      children: [
          {
              path: '',
              component: DashboardComponent
          },
          {
             path: 'dashboard',
             component: DashboardComponent
          }
      ]
  }
];

@NgModule({
    imports: [
      RouterModule.forChild(coreRoutes)
    ],
    exports: [
      RouterModule
    ]
})
export class CoreRoutingModule { }
