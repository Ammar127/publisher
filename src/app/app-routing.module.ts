import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CoreComponent } from './core/core.component';
import { HomeComponent } from './home/home.component';
import { MyappsComponent } from './myapps/myapps.component';
import { AddappComponent } from './addapp/addapp.component';
import { SignupComponent } from './signup/signup.component';
import { CustomComponent } from './custom/custom.component';




const routes: Routes = [
  // {
  //   path: '',  component: LandingComponent
  // },

  {
    path: '' , pathMatch: 'full', redirectTo: 'app/home'
  },
  {
    path: 'login' , component: LoginComponent
  },

  { path : 'signup' ,  loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)},
  {
    path: 'app' , component: CoreComponent , children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
        {path : 'home' , component: HomeComponent},
        {
          path: 'reportsng' , component: CustomComponent
        },
        {path : 'myapps' , component: MyappsComponent},
        {path : 'addapp' , component: AddappComponent},
        { path : 'reports' ,  loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)},
        { path : 'settings' ,  loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)},



    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
