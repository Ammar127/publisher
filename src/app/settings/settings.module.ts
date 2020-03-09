import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { SettingsComponent } from './settings.component';
import { Step3Component } from './step3/step3.component';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';



const routes: Routes = [
  {
    path: '' , component: SettingsComponent , children: [

      { path : 'step2' , component: Step2Component},
      { path : '' , pathMatch: 'full' , redirectTo: 'step1'},
      { path: 'step1' , component: Step1Component },
      { path: 'step2' , component: Step2Component },
      { path: 'step3' , component: Step3Component }
    ]

  }
 ];



@NgModule({
  declarations: [SettingsComponent, Step1Component, Step2Component, Step3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SettingsModule { }
