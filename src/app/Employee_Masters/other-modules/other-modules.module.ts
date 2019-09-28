import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MasterDataModule } from '../master-data/master-data.module';



@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    CommonModule,
       
  ],
exports:[
  MasterDataModule
]

})
export class OtherModulesModule { }
