import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirectives } from './custom.directives';
import { MasterDataModule } from './Employee_Masters/master-data/master-data.module';
import { LoginComponent } from './Employee_Masters/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatSortModule, MatTableModule, MatDatepickerModule, MatFormFieldModule } from '@angular/material';
import { OtherModulesModule } from './Employee_Masters/other-modules/other-modules.module';



@NgModule({
  declarations: [
    AppComponent,
    CustomDirectives,
    LoginComponent,
    routingComponent,
    
   



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
    OtherModulesModule






  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
