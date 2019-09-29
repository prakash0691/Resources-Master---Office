import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './Employee_Masters/login/login.component';
import { AdditionDeletionComponent } from './Employee_Masters/addition-deletion/addition-deletion.component';
import { MovementTrackerComponent } from './Employee_Masters/movement-tracker/movement-tracker.component';
import { ResourcesMasterComponent } from './Employee_Masters/resources-master/resources-master.component';




const routes: Routes = [


  ];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
 }

export const routingComponent = [AdditionDeletionComponent, MovementTrackerComponent, ResourcesMasterComponent]
