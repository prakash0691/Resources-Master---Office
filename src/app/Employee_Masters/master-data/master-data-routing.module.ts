import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MasterDataModule } from './master-data.module';
import { AdditionDeletionComponent } from './addition-deletion/addition-deletion.component';
import { MovementTrackerComponent } from './movement-tracker/movement-tracker.component';
import { ResourcesMasterComponent } from './resources-master/resources-master.component';

const routes: Routes = [

  // {
  //   path: '',
  //   component: MasterDataModule,
  //   children: [
  //     {
  //       path: 'Master-Data',
  //       loadChildren: '../master-data/master-data.module#MasterDataModule',
  //     },
  //     {
  //       path: 'Addition-Deletion',
  //       component: AdditionDeletionComponent
  //     },  
  //     {
  //       path: 'Movement-Tracker',
  //       component: MovementTrackerComponent
  //     },
  //     {
  //       path: 'Resources-Master',
  //       component: ResourcesMasterComponent
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class MasterDataRoutingModule { }
