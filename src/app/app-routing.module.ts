import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CoreComponent } from './core/core.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  
  // {
  //   path: '',  component: LandingComponent
  // },

  {
    path: 'login' , component: LoginComponent
  },
  {
    path: 'app' , component: CoreComponent ,children: [
      {
        path: '', redirectTo: 'home', pathMatch:'full'   
      },
        {path : 'home' , component: HomeComponent},
      
        
         
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
