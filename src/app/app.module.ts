import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirectives } from './custom.directives';
import { LoginComponent } from './Employee_Masters/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatSortModule, MatTableModule, MatDatepickerModule, MatFormFieldModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AdditionDeletionComponent } from './Employee_Masters/addition-deletion/addition-deletion.component';
import { MovementTrackerComponent } from './Employee_Masters/movement-tracker/movement-tracker.component';
import { ResourcesMasterComponent } from './Employee_Masters/resources-master/resources-master.component';
import { BreadcrumbComponent } from './Employee_Masters/breadcrumb/breadcrumb.component';
import { DashboardComponent } from './Employee_Masters/dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomDirectives,
    LoginComponent,
    routingComponent,
    AdditionDeletionComponent,
    MovementTrackerComponent,
    ResourcesMasterComponent,
    BreadcrumbComponent,
    DashboardComponent

  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSortModule,
    MatTableModule,
    MatDatepickerModule,
    MatFormFieldModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'Addition-Deletion', component: AdditionDeletionComponent },
      { path: 'Addition-Deletion', component: AdditionDeletionComponent },
      { path: 'Movement-Tracker', component: MovementTrackerComponent },
      { path: 'Resources-Master', component: ResourcesMasterComponent },
      { path: 'Dashboard', component: DashboardComponent },



    ])







  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
