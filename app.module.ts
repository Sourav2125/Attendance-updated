import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { HomeComponent } from './home/home.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ArchwizardModule} from 'angular-archwizard';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import {  AuthGuardService as AuthGuard, AuthGuardService } from '../app/authGuard/auth-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';

const Routing: ModuleWithProviders<any> = RouterModule.forChild([
     {
    path: 'home',
    component: HomeComponent,
  },  
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: AttendanceComponent,
    canActivate : [AuthGuard]
  },
 
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  } 
]);

@NgModule({
  declarations: [
    AppComponent,
   // SignupComponent,
    LoginComponent,
    AttendanceComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    Routing,
    NgbModule,
    ArchwizardModule,
    NgxPaginationModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastContainerModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-center-center',
      preventDuplicates: true
  }),
    
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
