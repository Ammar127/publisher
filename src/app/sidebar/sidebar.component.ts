import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isAdmin = false;
  isPatient = false;
  isDocter = false;
  isHospital = false;
  navbarCollapsed = true; 
 
  showMenu = -1;

  user;
  imageSrc = '../../assets/images/users/1.jpg';
  constructor(
    private router: Router) { }

  ngOnInit() {
    // this.user = this.authService.currentUserValue;
    // this.imageSrc = this.user.image ? this.user.image : '../assets/images/users/1.jpg'
    // this.imageSrc = environment.base_url + this.imageSrc;
    // if(this.user.role == UserType.admin) {
    //   this.isAdmin = true;
    //   this.isPatient = false;
    //   this.isDocter = false;
    //   this.isHospital = false;
    // } else  if(this.user.role == UserType.hospital) {
    //   this.isAdmin = false;
    //   this.isPatient = false;
    //   this.isDocter = false;
    //   this.isHospital = true;
    // } else  if(this.user.role ==  UserType.doctor) {
    //   this.isAdmin = false;
    //   this.isPatient = false;
    //   this.isDocter = true;
    //   this.isHospital = false;
    // }else  if(this.user.role ==  UserType.patient) {
    //   this.isAdmin = false;
    //   this.isPatient = true;
    //   this.isDocter = false;
    //   this.isHospital = false;
    // }
  }
  showMenuFunv(menu) {
    if (this.showMenu == menu) {
      return this.showMenu = -1;
    }
    this.showMenu = menu;
  }
  logout() {
    // this.authService.logout();
    this.router.navigate(['/login']);
  }
}
