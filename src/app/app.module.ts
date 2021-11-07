import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { VesComponent } from './ves/ves.component';
import { VpsComponent } from './vps/vps.component';
import { MesComponent } from './mes/mes.component';
import {VsComponent} from "./mes/vs/vs.component";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StudentComponent,
    AdminComponent,
    VesComponent,
    VpsComponent,
    MesComponent,
    VsComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
