import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { SettingsComponent } from './settings.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '' , component: SettingsComponent , children: [

      { path : 'step2' , component: Step2Component},
      { path : '' , pathMatch: 'full' , redirectTo: 'step1'},
      { path: 'step1' , component: Step1Component },
      { path: 'step2' , component: Step2Component },
      { path: 'step3' , component: Step3Component },
      { path: 'step4' , component: Step4Component },


    ]

  }
 ];



@NgModule({
  declarations: [SettingsComponent, Step1Component, Step2Component, Step3Component, Step4Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SettingsModule { }
