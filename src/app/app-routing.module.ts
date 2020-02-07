import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CoreComponent } from './core/core.component';
import { HomeComponent } from './home/home.component';
import { MyappsComponent } from './myapps/myapps.component';



const routes: Routes = [
  // {
  //   path: '',  component: LandingComponent
  // },

  {
    path: 'login' , component: LoginComponent
  },
  {
    path: 'app' , component: CoreComponent , children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
        {path : 'home' , component: HomeComponent},
        {path : 'myapps' , component: MyappsComponent},
        { path : 'reports' ,  loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)}


    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
