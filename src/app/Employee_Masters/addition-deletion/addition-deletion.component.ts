import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addition-deletion',
  templateUrl: './addition-deletion.component.html',
  styleUrls: ['./addition-deletion.component.css']
})
export class AdditionDeletionComponent implements OnInit {
  showTable: boolean = false;
  employeeDetails: any[] = [

  ];
  registerForm = new FormGroup({
    empid: new FormControl('', [Validators.required, Validators.maxLength(4), Validators.pattern('^[0-9]*$')]),
    name: new FormControl('', [Validators.required]),
    designation: new FormControl('', [Validators.required]),
    technology: new FormControl('', [Validators.required]),
    vertical: new FormControl('', [Validators.required]),
    account: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    location: new FormControl('', [Validators.required]),
    doj: new FormControl('', [Validators.required]),
  });


  locations = ['OFFSHORE', 'ONSITE'];
  verticals = ['', 'BANKING', 'INSURANCE', 'TELECOM', 'MIGRATION', 'CORPORATE TESTING'];
  accounts = ['', 'CIBC', 'ZENITH', 'C&F', 'RIBBON', 'HONDA']

  constructor() { }

  ngOnInit() {
  }


  get empid() {
    return this.registerForm.get('empid');
  }

  get name() {
    return this.registerForm.get('name');
  }
  get designation() {
    return this.registerForm.get('designation');
  }
  get technology() {
    return this.registerForm.get('technology');
  }
  get vertical() {
    return this.registerForm.get('vertical');
  }
  get account() {
    return this.registerForm.get('account');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get location() {
    return this.registerForm.get('location');
  }
  get doj() {
    return this.registerForm.get('doj');
  }

  submitData() {
    // console.log('Updating');
    // console.log(this.registerForm.get('name').value);
    // console.log(this.registerForm.value);

    this.employeeDetails.push(this.registerForm.value);
    this.showTable = true;
    this.registerForm.reset(this.employeeDetails);

  }



  delete(index) {
    console.log();
    if (window.confirm('wanna delete?')) {
      this.employeeDetails.splice(index, 1);
    }
 }
   updateData(index){
     this.registerForm.patchValue(this.employeeDetails);
      
      }




}
