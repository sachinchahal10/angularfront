import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';





@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminSignupComponent implements OnInit {

  signupForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      //name: [''],
      //email: [''],
      //mobile: [''],
      //password: ['']


      name: ["", Validators.required],
      mobile: ["", Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: ["", Validators.required],

    })
  }
  signUp() {
    this._http.post<any>("http://localhost:3000/adminsignup", this.signupForm.value).subscribe(res => {
      alert("Registration successfully");
      this.signupForm.reset();
      this.router.navigate(['login'])
    }, err => {
      alert("Something is Wrong")
    })
  }

}
