import { Component, OnInit,} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  registerForm: FormGroup;

  user = {

    empid: "123",
    password: "123"

  };


  ngOnInit() {
    // debugger;

    this.registerForm = new FormGroup({

      empid: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),

    });

  }
  employeeLogin(registerForm) {
    if (JSON.stringify(this.user) === JSON.stringify(this.registerForm.value)) {
      console.log('valid');
      // this.router.navigate(['/Master-Data']);
    } else {
      console.log('In valid');
    }
  }

}







