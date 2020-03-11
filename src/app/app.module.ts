import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MyappsComponent } from './myapps/myapps.component';
import { AddappComponent } from './addapp/addapp.component';
import { ModalModule } from 'ngb-modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomComponent } from './custom/custom.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
   declarations: [
      AppComponent,
      CoreComponent,
      HeaderComponent,
      SidebarComponent,
      LoginComponent,
      HomeComponent,
      MyappsComponent,
      AddappComponent,
      CustomComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule,
      NgbModule,
      BrowserAnimationsModule,
      NgMultiSelectDropDownModule.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
