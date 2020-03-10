import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  isFormSubmitted:boolean;
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.isFormSubmitted=false;
   this.createForm();
  }
  createForm(){
    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        password: ['', Validators.required],
        
      })
  }
  get f() { return this.form.controls; }
  onSubmit(): void {
    this.isFormSubmitted=true;
    if(this.form.errors){
      return;
    }
    console.log(this.form.value);
  }

}
