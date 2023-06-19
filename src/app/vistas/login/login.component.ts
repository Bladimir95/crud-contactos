import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from "../../service/api.service"
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm = new FormGroup({
    telefono : new FormControl('', Validators.required),
    contrasena : new FormControl('', Validators.required)
  });

  constructor(private api: ApiService, private router: Router){}

  errorLogin:boolean = false;
  errorMesaje = "";

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['dashboard']);
    }
  }

  onLogin(form: any){
    let response = this.api.logingByPhone(form);
    if(response === true){
      localStorage.setItem("token", "true");
      this.router.navigate(['dashboard']);
    }else{
      this.errorLogin = true;
      this.errorMesaje = "Acceso denegado";
    }
  }
}
