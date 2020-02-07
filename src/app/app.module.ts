import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { HttpClientModule } from '@angular/common/http';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MyappsComponent } from './myapps/myapps.component';


@NgModule({
   declarations: [
      AppComponent,
      CoreComponent,
      HeaderComponent,
      SidebarComponent,
      LoginComponent,
      SignupComponent,
      HomeComponent,
      MyappsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
