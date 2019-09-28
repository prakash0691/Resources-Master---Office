import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './Employee_Masters/login/login.component';
import { AdditionDeletionComponent } from './Employee_Masters/master-data/addition-deletion/addition-deletion.component';
import { MovementTrackerComponent } from './Employee_Masters/master-data/movement-tracker/movement-tracker.component';




const routes: Routes = [
{path: 'Addition-Deletion', component: AdditionDeletionComponent},
{path: 'Movement-Tracker', component: MovementTrackerComponent},


  ];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
 }

//export const routingComponent = [AdditionDeletionComponent, MovementTrackerComponent]
