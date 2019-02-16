import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';



const coreRoutes: Routes = [
  // {
  //     path: 'dasboard',
  //     component:
  // },
  // {
  //     path: '',
  //     component: CoreComponent,
  //     children: [
  //         {
  //             path: '',
  //             component:
  //         },
          // {
          //     path: '',
          //     component:
          // }
  //     ]
  // }
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
