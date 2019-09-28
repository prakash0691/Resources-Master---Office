import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdditionDeletionComponent } from './addition-deletion/addition-deletion.component';
import { MovementTrackerComponent } from './movement-tracker/movement-tracker.component';
import { ResourcesMasterComponent } from './resources-master/resources-master.component';
import { MasterDataRoutingModule } from './master-data-routing.module';
import { MasterDataComponent } from './master-data.component';
import { OtherModulesModule } from '../other-modules/other-modules.module';



@NgModule({
  declarations: [
    AdditionDeletionComponent,
    MovementTrackerComponent,
    ResourcesMasterComponent,
    MasterDataComponent
  
  ],
  imports: [
    CommonModule,
    MasterDataRoutingModule,
    OtherModulesModule
       
    ],

})
export class MasterDataModule { }
