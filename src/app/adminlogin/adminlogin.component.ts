import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginForm!: FormGroup;


  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']

    })
  }
  login() {
    this._http.get<any>("http://localhost:3000/adminsignup").subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      
        if (user) { 
       // alert("Welcome to AdminPanel");
          this.toastr.success('Logged in successfully!');
        this.loginForm.reset();
          this.router.navigate(['api'])

      }
      else{
       alert('User Not Found !!')
      }

    }, err => {
      ("Something is Wrong")
      }
      )

  }


}
